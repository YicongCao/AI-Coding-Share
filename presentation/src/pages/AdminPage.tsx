import { useEffect, useMemo, useRef, useState } from "react";
import ParticleScene from "../particle/ParticleScene";
import { useSync, type AdminCommand } from "../sync/wsClient";
import {
  allParagraphs,
  allSlides,
  speechTitle,
  totalSlides,
} from "../slides";
import type { SceneKind, SceneParams } from "../particle/sceneShapes";

const PREVIEW_PARTICLE_COUNT = 850;
const STEADY_TRANSITION_ANCHOR = 1;

function formatSceneCode(kind: SceneKind, params?: SceneParams): string {
  if (!params) return kind;
  const entries = Object.entries(params).filter(([, v]) => v !== undefined);
  if (entries.length === 0) return kind;
  const tail = entries
    .map(([k, v]) => (typeof v === "string" ? `${k}="${v}"` : `${k}=${v}`))
    .join(", ");
  return `${kind}(${tail})`;
}

function formatDuration(ms: number): string {
  if (!isFinite(ms) || ms < 0) ms = 0;
  const total = Math.floor(ms / 1000);
  const hours = Math.floor(total / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const seconds = total % 60;
  const mm = String(minutes).padStart(2, "0");
  const ss = String(seconds).padStart(2, "0");
  if (hours > 0) {
    return `${hours}:${mm}:${ss}`;
  }
  return `${mm}:${ss}`;
}

function useTick(intervalMs: number = 500): number {
  const [, setTick] = useState(0);
  useEffect(() => {
    const id = window.setInterval(() => setTick((t) => t + 1), intervalMs);
    return () => clearInterval(id);
  }, [intervalMs]);
  return Date.now();
}

export default function AdminPage() {
  const { state, status, timeOffsetMs, send } = useSync();
  const now = useTick(500);

  const sentTotalRef = useRef<number>(-1);
  useEffect(() => {
    if (status !== "open") return;
    if (state && state.totalSlides !== totalSlides && sentTotalRef.current !== totalSlides) {
      sentTotalRef.current = totalSlides;
      send({ type: "setTotal", total: totalSlides });
    }
  }, [status, state, send]);

  useEffect(() => {
    document.title = "控制台 · AI Coding 反直觉的那些事";
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && ["INPUT", "TEXTAREA"].includes(target.tagName)) return;
      switch (e.key) {
        case "ArrowRight":
        case " ":
        case "PageDown":
          e.preventDefault();
          send({ type: "next" });
          break;
        case "ArrowLeft":
        case "PageUp":
          e.preventDefault();
          send({ type: "prev" });
          break;
        case "Home":
          e.preventDefault();
          send({ type: "jumpTo", index: 0 });
          break;
        case "End":
          e.preventDefault();
          send({ type: "jumpTo", index: totalSlides - 1 });
          break;
        case "s":
        case "S":
          if (!e.metaKey && !e.ctrlKey) {
            send({ type: "start" });
          }
          break;
        case "r":
        case "R":
          if (!e.metaKey && !e.ctrlKey) {
            send({ type: "reset" });
          }
          break;
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [send]);

  const currentIndex = state ? state.currentIndex : 0;
  const currentSlide = allSlides[currentIndex] ?? allSlides[0];
  const nextSlide =
    currentIndex + 1 < totalSlides ? allSlides[currentIndex + 1] : null;

  const seed = state?.seed ?? 1;
  const transitionStartedAt = state?.transitionStartedAt ?? 0;

  const onCmd = (cmd: AdminCommand) => () => send(cmd);

  const presentationStartedAt = state?.presentationStartedAt ?? null;
  const slideEnteredAt = state?.slideEnteredAt ?? null;
  const slideDurations = state?.slideDurations ?? [];

  const elapsedMs =
    presentationStartedAt !== null ? Math.max(0, now + timeOffsetMs - presentationStartedAt) : 0;

  const avgDurationMs = useMemo(() => {
    if (slideDurations.length === 0) return 30000;
    const sum = slideDurations.reduce((a, b) => a + b, 0);
    return sum / slideDurations.length;
  }, [slideDurations]);

  const remainingMs = useMemo(() => {
    if (presentationStartedAt === null) {
      return avgDurationMs * Math.max(0, totalSlides - currentIndex - 1);
    }
    const currentSlideElapsed =
      slideEnteredAt !== null
        ? Math.max(0, now + timeOffsetMs - slideEnteredAt)
        : 0;
    const currentRemaining = Math.max(0, avgDurationMs - currentSlideElapsed);
    const restSlides = Math.max(0, totalSlides - currentIndex - 1);
    return currentRemaining + avgDurationMs * restSlides;
  }, [
    presentationStartedAt,
    avgDurationMs,
    slideEnteredAt,
    now,
    timeOffsetMs,
    currentIndex,
  ]);

  const progress = currentIndex / Math.max(1, totalSlides - 1);

  const speechRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const container = speechRef.current;
    if (!container) return;
    const el = container.querySelector(".sentence.is-current") as HTMLElement | null;
    if (!el) return;
    const cRect = container.getBoundingClientRect();
    const eRect = el.getBoundingClientRect();
    const offsetTop = eRect.top - cRect.top + container.scrollTop;
    const desired = offsetTop - container.clientHeight * 0.3;
    container.scrollTo({ top: desired, behavior: "smooth" });
  }, [currentIndex]);

  return (
    <div className="admin-root">
      <div className="admin-left">
        <div className="admin-previews">
          <div className="preview-card current">
            <span className="preview-label">CURRENT · {String(currentIndex + 1).padStart(2, "0")}/{totalSlides}</span>
            <ParticleScene
              sceneKind={currentSlide.sceneKind}
              sceneParams={currentSlide.sceneParams}
              seed={seed}
              transitionStartedAt={transitionStartedAt}
              timeOffsetMs={timeOffsetMs}
              particleCount={PREVIEW_PARTICLE_COUNT}
            />
            <span className="preview-index">
              {formatSceneCode(currentSlide.sceneKind, currentSlide.sceneParams)}
            </span>
          </div>
          <div className="preview-card next">
            <span className="preview-label">NEXT</span>
            {nextSlide ? (
              <ParticleScene
                sceneKind={nextSlide.sceneKind}
                sceneParams={nextSlide.sceneParams}
                seed={(seed * 1664525 + 1013904223) >>> 0}
                transitionStartedAt={STEADY_TRANSITION_ANCHOR}
                timeOffsetMs={timeOffsetMs}
                particleCount={500}
              />
            ) : (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 12,
                  letterSpacing: "0.2em",
                  color: "rgba(255,255,255,0.45)",
                }}
              >
                — 末页 —
              </div>
            )}
            <span className="preview-index">
              {nextSlide
                ? formatSceneCode(nextSlide.sceneKind, nextSlide.sceneParams)
                : "end"}
            </span>
          </div>
        </div>

        <div className="controls-row">
          <button onClick={onCmd({ type: "prev" })} disabled={currentIndex === 0}>
            ← 上一页
          </button>
          <button
            className="btn-primary"
            onClick={onCmd({ type: "next" })}
            disabled={currentIndex >= totalSlides - 1}
          >
            下一页 →
          </button>
          <button onClick={onCmd({ type: "start" })}>开始计时</button>
          <button className="btn-danger" onClick={onCmd({ type: "reset" })}>
            重置
          </button>
          <span className="connection-status">
            <span className={`dot${status === "open" ? " is-connected" : ""}`} />
            {status === "open"
              ? "已连接"
              : status === "connecting"
              ? "连接中"
              : "已断开"}
          </span>
        </div>

        <div className="progress-block">
          <div className="progress-bar">
            <div
              className="progress-bar-fill"
              style={{ width: `${Math.min(100, progress * 100).toFixed(1)}%` }}
            />
          </div>
          <div className="progress-meta">
            <span>
              当前 <strong>{currentIndex + 1}</strong> / {totalSlides}
            </span>
            <span>
              已用 <strong>{formatDuration(elapsedMs)}</strong>
            </span>
            <span>
              预估剩余 <strong>{formatDuration(remainingMs)}</strong>
            </span>
            <span>
              平均/页 <strong>{formatDuration(avgDurationMs)}</strong>
            </span>
          </div>
        </div>

        <div className="current-info">
          <span>CURRENT SENTENCE</span>
          <span className="scene-badge" title="点击复制代号">
            <span className="scene-badge-idx">#{String(currentIndex + 1).padStart(2, "0")}/{totalSlides}</span>
            <code
              onClick={() => {
                const code = formatSceneCode(currentSlide.sceneKind, currentSlide.sceneParams);
                navigator.clipboard?.writeText(code).catch(() => {});
              }}
            >
              {formatSceneCode(currentSlide.sceneKind, currentSlide.sceneParams)}
            </code>
          </span>
        </div>
        <div className="current-sentence">{currentSlide.text}</div>
      </div>

      <div className="admin-right">
        <div className="scroller" ref={speechRef}>
          <div className="paragraph is-title">{speechTitle}</div>
          {allParagraphs.map((para, pi) => {
            if (para.isTitle) return null;
            return (
              <div className="paragraph" key={`p-${pi}`}>
                {para.sentences.map((text, si) => {
                  const globalIdx = para.slideRange.start + si;
                  const slide = allSlides[globalIdx];
                  const cls =
                    globalIdx === currentIndex
                      ? "sentence is-current"
                      : globalIdx < currentIndex
                      ? "sentence is-past"
                      : "sentence";
                  const codeLong = formatSceneCode(slide.sceneKind, slide.sceneParams);
                  return (
                    <span
                      key={`s-${pi}-${si}`}
                      className={cls}
                      onClick={() => send({ type: "jumpTo", index: globalIdx })}
                      title={`#${globalIdx + 1}  ${codeLong}\n点击跳转到该页`}
                    >
                      {text}
                      <code
                        className="sentence-code"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigator.clipboard?.writeText(codeLong).catch(() => {});
                        }}
                        title={`复制 "${codeLong}"`}
                      >
                        #{globalIdx + 1}·{slide.sceneKind}
                      </code>
                    </span>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
