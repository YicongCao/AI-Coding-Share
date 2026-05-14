import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import SvgScene from "../svg/SvgScene";
import { getSvgSceneDef } from "../svg/registry";
import { useSync, type AdminCommand } from "../sync/wsClient";
import {
  allParagraphs,
  allSlides,
  speechTitle,
  totalSlides,
} from "../slides";

const STEADY_TRANSITION_ANCHOR = 1;
const ADMIN_PASSWORD = "nex2026";
const AUTH_STORAGE_KEY = "nex-admin-auth-v1";
const ENGAGEMENT_STORAGE_KEY = "nex-admin-engagement-v2";
const ENGAGEMENT_SAVE_INTERVAL_MS = 1500;

function formatSceneCode(sceneId: string): string {
  return sceneId;
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

function loadEngagement(): number[] {
  try {
    const raw = localStorage.getItem(ENGAGEMENT_STORAGE_KEY);
    if (!raw) return new Array(totalSlides).fill(0);
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      const out = new Array(totalSlides).fill(0);
      for (let i = 0; i < Math.min(parsed.length, totalSlides); i++) {
        const v = Number(parsed[i]);
        out[i] = isFinite(v) && v > 0 ? v : 0;
      }
      return out;
    }
  } catch {
    /* ignore */
  }
  return new Array(totalSlides).fill(0);
}

function saveEngagement(values: number[]) {
  try {
    localStorage.setItem(ENGAGEMENT_STORAGE_KEY, JSON.stringify(values));
  } catch {
    /* ignore */
  }
}

function LoginGate({ onAuth }: { onAuth: () => void }) {
  const [pwd, setPwd] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [shake, setShake] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
    document.title = "演讲者登录 · AI Coding 反直觉的那些事";
  }, []);

  const submit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (pwd === ADMIN_PASSWORD) {
      try {
        localStorage.setItem(AUTH_STORAGE_KEY, "true");
      } catch {
        /* ignore */
      }
      onAuth();
    } else {
      setError("密码不正确");
      setShake(true);
      setTimeout(() => setShake(false), 400);
      setPwd("");
      inputRef.current?.focus();
    }
  };

  return (
    <div className="login-root">
      <form
        className={`login-card${shake ? " is-shake" : ""}`}
        onSubmit={submit}
      >
        <div className="login-title">演讲者控制台</div>
        <div className="login-sub">请输入管理密码以进入</div>
        <input
          ref={inputRef}
          className="login-input"
          type="password"
          autoComplete="current-password"
          value={pwd}
          onChange={(e) => {
            setPwd(e.target.value);
            if (error) setError(null);
          }}
          placeholder="password"
        />
        {error ? <div className="login-error">{error}</div> : null}
        <button type="submit" className="btn-primary login-submit">
          进入
        </button>
      </form>
    </div>
  );
}

function isAuthed(): boolean {
  try {
    return localStorage.getItem(AUTH_STORAGE_KEY) === "true";
  } catch {
    return false;
  }
}

export default function AdminPage() {
  const [authed, setAuthed] = useState<boolean>(() => isAuthed());

  if (!authed) {
    return <LoginGate onAuth={() => setAuthed(true)} />;
  }
  return <AdminConsole onLogout={() => setAuthed(false)} />;
}

function AdminConsole({ onLogout }: { onLogout: () => void }) {
  const { state, status, timeOffsetMs, stats, signupEntries, send } = useSync({ role: "admin" });
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

  const currentIndex = state ? state.currentIndex : 0;
  const currentSlide = allSlides[currentIndex] ?? allSlides[0];
  const nextSlide =
    currentIndex + 1 < totalSlides ? allSlides[currentIndex + 1] : null;

  const seed = state?.seed ?? 1;
  const transitionStartedAt = state?.transitionStartedAt ?? 0;

  const onCmd = useCallback(
    (cmd: AdminCommand) => () => send(cmd),
    [send]
  );

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

  const [engagement, setEngagement] = useState<number[]>(() => loadEngagement());
  const engagementRef = useRef<number[]>(engagement);
  engagementRef.current = engagement;
  const lastTickRef = useRef<number>(Date.now());
  const lastSaveRef = useRef<number>(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      const t = Date.now();
      const dt = (t - lastTickRef.current) / 1000;
      lastTickRef.current = t;
      const active = stats?.activeAudience ?? 0;
      if (active > 0 && dt > 0 && currentIndex >= 0 && currentIndex < totalSlides) {
        const next = engagementRef.current.slice();
        next[currentIndex] = (next[currentIndex] ?? 0) + active * dt;
        engagementRef.current = next;
        setEngagement(next);
        if (t - lastSaveRef.current > ENGAGEMENT_SAVE_INTERVAL_MS) {
          lastSaveRef.current = t;
          saveEngagement(next);
        }
      }
    }, 1000);
    return () => {
      clearInterval(id);
      saveEngagement(engagementRef.current);
    };
  }, [stats?.activeAudience, currentIndex]);

  const [showSignups, setShowSignups] = useState(false);

  const clearEngagement = () => {
    if (!confirm("清空所有活跃度统计？此操作不可恢复。")) return;
    const empty = new Array(totalSlides).fill(0);
    setEngagement(empty);
    engagementRef.current = empty;
    saveEngagement(empty);
  };

  const logout = () => {
    try {
      localStorage.removeItem(AUTH_STORAGE_KEY);
    } catch {
      /* ignore */
    }
    onLogout();
  };

  const maxEngagement = useMemo(
    () => Math.max(1, ...engagement),
    [engagement]
  );

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

  const activeNow = stats?.activeAudience ?? 0;
  const audienceTotal = stats?.audienceClients ?? 0;
  const adminCount = stats?.adminClients ?? 0;

  return (
    <div className="admin-root">
      <div className="admin-left">
        <div className="admin-previews">
          <div className="preview-card current">
            <span className="preview-label">CURRENT · {String(currentIndex + 1).padStart(2, "0")}/{totalSlides}</span>
            {(() => {
              const svgDef = getSvgSceneDef(currentSlide.svgSceneId);
              return svgDef ? (
                <SvgScene
                  sceneDef={svgDef}
                  seed={seed}
                  transitionStartedAt={transitionStartedAt}
                  timeOffsetMs={timeOffsetMs}
                />
              ) : null;
            })()}
            <span className="preview-index">
              {formatSceneCode(currentSlide.svgSceneId)}
            </span>
          </div>
          <div className="preview-card next">
            <span className="preview-label">NEXT</span>
            {nextSlide ? (() => {
              const svgDef = getSvgSceneDef(nextSlide.svgSceneId);
              return svgDef ? (
                <SvgScene
                  sceneDef={svgDef}
                  seed={(seed * 1664525 + 1013904223) >>> 0}
                  transitionStartedAt={STEADY_TRANSITION_ANCHOR}
                  timeOffsetMs={timeOffsetMs}
                />
              ) : null;
            })() : (
              <div className="preview-placeholder">— 末页 —</div>
            )}
            <span className="preview-index">
              {nextSlide
                ? formatSceneCode(nextSlide.svgSceneId)
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
          <button className="btn-subtle" onClick={clearEngagement}>
            清空统计
          </button>
          <button className="btn-subtle" onClick={logout} title="退出登录">
            退出
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

        <div className="stats-row">
          <div className="stats-chip">
            管理端 <strong>{adminCount}</strong>
          </div>
          <div className="stats-chip is-audience">
            观众端 <strong>{audienceTotal}</strong>
          </div>
          <div className="stats-chip is-active">
            <span className="live-dot" />
            活跃 <strong>{activeNow}</strong>
            <span className="stats-sub">/{audienceTotal}</span>
          </div>
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

        <div className="engagement-block">
          <div className="engagement-header">
            <span>各页活跃度（观众·秒）</span>
            <span className="engagement-sub">
              累计样本 {Math.round(engagement.reduce((a, b) => a + b, 0))}
            </span>
          </div>
          <div className="engagement-bars">
            {engagement.map((v, i) => {
              const h = Math.max(2, Math.round((v / maxEngagement) * 60));
              const slide = allSlides[i];
              const cls =
                i === currentIndex
                  ? "engagement-bar is-current"
                  : i < currentIndex
                  ? "engagement-bar is-past"
                  : "engagement-bar";
              return (
                <button
                  key={i}
                  type="button"
                  className={cls}
                  style={{ height: `${h}px` }}
                  onClick={() => send({ type: "jumpTo", index: i })}
                  title={`#${i + 1} ${slide?.svgSceneId ?? ""}\n活跃度 ${v.toFixed(1)}\n${slide?.text ?? ""}`}
                />
              );
            })}
          </div>
        </div>

        <div className="current-info">
          <span>CURRENT SENTENCE</span>
          <span className="scene-badge" title="点击复制代号">
            <span className="scene-badge-idx">#{String(currentIndex + 1).padStart(2, "0")}/{totalSlides}</span>
            <code
              onClick={() => {
                const code = formatSceneCode(currentSlide.svgSceneId);
                navigator.clipboard?.writeText(code).catch(() => {});
              }}
            >
              {formatSceneCode(currentSlide.svgSceneId)}
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
                  const codeLong = formatSceneCode(slide.svgSceneId);
                  return (
                    <span
                      key={`s-${pi}-${si}`}
                      className={cls}
                      onClick={() => send({ type: "jumpTo", index: globalIdx })}
                      title={`#${globalIdx + 1}  ${codeLong}\n活跃度 ${engagement[globalIdx]?.toFixed(1) ?? "0.0"}\n点击跳转到该页`}
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
                        #{globalIdx + 1}·{slide.svgSceneId}
                      </code>
                    </span>
                  );
                })}
              </div>
            );
          })}
        </div>

        <div className="signup-admin-section">
          <h3 onClick={() => setShowSignups((v) => !v)} style={{ cursor: "pointer", userSelect: "none" }}>
            {showSignups ? "▾" : "▸"} Signup Entries ({signupEntries.length})
          </h3>
          {showSignups && (
            <>
              <button
                className="btn-primary"
                style={{ marginBottom: 8, fontSize: 13, padding: "6px 16px" }}
                onClick={() => {
                  const wsPort = location.port === "5173" ? "5174" : location.port;
                  const base = `${location.protocol}//${location.hostname}:${wsPort}`;
                  window.open(`${base}/api/signup?format=csv`);
                }}
              >
                导出 CSV
              </button>
              <span style={{ marginLeft: 8, fontSize: 12, opacity: 0.5 }}>实时更新</span>
              <div style={{ maxHeight: 300, overflow: "auto", fontSize: 12, lineHeight: 1.6 }}>
                {signupEntries.length === 0 ? (
                  <p style={{ opacity: 0.5 }}>暂无报名</p>
                ) : (
                  <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead>
                      <tr style={{ borderBottom: "1px solid #555" }}>
                        <th style={{ textAlign: "left", padding: "4px 8px" }}>姓名</th>
                        <th style={{ textAlign: "left", padding: "4px 8px" }}>岗位</th>
                        <th style={{ textAlign: "left", padding: "4px 8px" }}>最爱 AI</th>
                        <th style={{ textAlign: "left", padding: "4px 8px" }}>用途</th>
                        <th style={{ textAlign: "left", padding: "4px 8px" }}>时间</th>
                      </tr>
                    </thead>
                    <tbody>
                      {signupEntries.map((entry, i) => (
                        <tr key={i} style={{ borderBottom: "1px solid #333" }}>
                          <td style={{ padding: "4px 8px" }}>{entry.name}</td>
                          <td style={{ padding: "4px 8px" }}>{entry.role}</td>
                          <td style={{ padding: "4px 8px" }}>{entry.favoriteAI}</td>
                          <td style={{ padding: "4px 8px", maxWidth: 200, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{entry.useCase}</td>
                          <td style={{ padding: "4px 8px", whiteSpace: "nowrap" }}>{new Date(entry.submittedAt).toLocaleString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
