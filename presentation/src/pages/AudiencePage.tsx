import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import SvgScene, { type SvgSceneDef } from "../svg/SvgScene";
import { getSvgSceneDef } from "../svg/registry";
import { useSync } from "../sync/wsClient";
import { allSlides, totalSlides } from "../slides";
import SignupForm from "./SignupForm";

const STAGE_ASPECT = 16 / 9;
const MASK_COLOR = "#000000";

function StageMask() {
  const [bars, setBars] = useState<{ top: number; bottom: number; left: number; right: number }>({ top: 0, bottom: 0, left: 0, right: 0 });
  useEffect(() => {
    function calc() {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const windowAspect = vw / vh;
      if (windowAspect > STAGE_ASPECT) {
        const stageW = vh * STAGE_ASPECT;
        const side = (vw - stageW) / 2;
        setBars({ top: 0, bottom: 0, left: side, right: side });
      } else {
        const stageH = vw / STAGE_ASPECT;
        const bar = (vh - stageH) / 2;
        setBars({ top: bar, bottom: bar, left: 0, right: 0 });
      }
    }
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);
  const s: React.CSSProperties = { position: "absolute", background: MASK_COLOR, zIndex: 30, pointerEvents: "none" };
  return (
    <>
      {bars.top > 0 && <div style={{ ...s, top: 0, left: 0, right: 0, height: bars.top }} />}
      {bars.bottom > 0 && <div style={{ ...s, bottom: 0, left: 0, right: 0, height: bars.bottom }} />}
      {bars.left > 0 && <div style={{ ...s, top: 0, bottom: 0, left: 0, width: bars.left }} />}
      {bars.right > 0 && <div style={{ ...s, top: 0, bottom: 0, right: 0, width: bars.right }} />}
    </>
  );
}

const EXIT_LINGER_MS = 1000;
const MIN_SLIDE_READ_MS = 5000;
const MAX_SLIDE_READ_MS = 30000;
const DEFAULT_MS_PER_WORD = 360;
const READ_SPEED_MULTIPLIER = 1.5;

type ExitingScene = {
  key: number;
  def: SvgSceneDef;
  seed: number;
  timeOffsetMs: number;
  transitionStartedAt: number;
};

type SubtitlePart = {
  text: string;
  isWord: boolean;
};

type SegmenterPart = {
  segment: string;
  isWordLike?: boolean;
};

type SegmenterCtor = new (
  locale: string,
  options: { granularity: "word" }
) => {
  segment(text: string): Iterable<SegmenterPart>;
};

function segmentChineseText(text: string): SubtitlePart[] {
  const normalizeParts = (parts: SubtitlePart[]): SubtitlePart[] => {
    const out: SubtitlePart[] = [];
    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      if (!part.isWord) {
        out.push(part);
        continue;
      }

      const isSingleChinese = /^[\u4e00-\u9fff]$/.test(part.text);
      if (!isSingleChinese) {
        out.push(part);
        continue;
      }

      let text = part.text;
      let j = i + 1;
      while (j < parts.length) {
        const next = parts[j];
        if (!next.isWord || !/^[\u4e00-\u9fff]$/.test(next.text)) break;
        text += next.text;
        j++;
      }

      // If Segmenter splits a phrase into isolated characters, merge them.
      // For a single isolated character, attach the next word when possible.
      if (text.length === 1 && j < parts.length && parts[j].isWord) {
        text += parts[j].text;
        j++;
      }

      out.push({ text, isWord: true });
      i = j - 1;
    }
    return out;
  };

  const segmenterCtor = (Intl as typeof Intl & { Segmenter?: SegmenterCtor }).Segmenter;
  if (segmenterCtor) {
    const segmenter = new segmenterCtor("zh", { granularity: "word" });
    return normalizeParts(Array.from(segmenter.segment(text)).map((part) => ({
      text: part.segment,
      isWord: part.isWordLike === true,
    })));
  }

  return normalizeParts(text
    .split(/([\u4e00-\u9fff]+|[A-Za-z0-9]+(?:[-_][A-Za-z0-9]+)*)/g)
    .filter(Boolean)
    .map((part) => ({
      text: part,
      isWord: /[\u4e00-\u9fffA-Za-z0-9]/.test(part),
    })));
}

function countWords(text: string): number {
  return Math.max(1, segmentChineseText(text).filter((part) => part.isWord).length);
}

function estimateMsPerWord(slideDurations: number[]): number {
  const samples = slideDurations
    .slice(-8)
    .map((duration, i, arr) => {
      const slideIndex = slideDurations.length - arr.length + i;
      const slide = allSlides[slideIndex];
      if (!slide) return null;
      return Math.min(MAX_SLIDE_READ_MS, Math.max(MIN_SLIDE_READ_MS, duration)) / countWords(slide.text);
    })
    .filter((v): v is number => typeof v === "number" && Number.isFinite(v));

  if (samples.length === 0) return DEFAULT_MS_PER_WORD;
  return samples.reduce((sum, v) => sum + v, 0) / samples.length;
}

function SubtitleHighlighter({
  text,
  slideEnteredAt,
  slideDurations,
  timeOffsetMs,
}: {
  text: string;
  slideEnteredAt: number;
  slideDurations: number[];
  timeOffsetMs: number;
}) {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const timer = window.setInterval(() => setNow(Date.now()), 80);
    return () => window.clearInterval(timer);
  }, [text, slideEnteredAt]);

  const parts = useMemo(() => segmentChineseText(text), [text]);
  const wordIndexes = useMemo(
    () => parts.map((part, index) => (part.isWord ? index : -1)).filter((index) => index >= 0),
    [parts]
  );
  const msPerWord = useMemo(
    () => estimateMsPerWord(slideDurations),
    [slideDurations]
  );
  const estimatedDuration = wordIndexes.length * msPerWord / READ_SPEED_MULTIPLIER;
  const totalDuration = Math.min(
    MAX_SLIDE_READ_MS,
    Math.max(MIN_SLIDE_READ_MS, estimatedDuration)
  );
  const elapsed = Math.max(0, now + timeOffsetMs - slideEnteredAt);
  const activeWordOrder =
    elapsed >= totalDuration
      ? -1
      : Math.min(wordIndexes.length - 1, Math.floor((elapsed / totalDuration) * wordIndexes.length));
  const activePartIndex = activeWordOrder >= 0 ? wordIndexes[activeWordOrder] : -1;

  return (
    <>
      {parts.map((part, index) => (
        <span
          key={`${index}-${part.text}`}
          className={index === activePartIndex ? "audience-subtitle-word-active" : undefined}
        >
          {part.text}
        </span>
      ))}
    </>
  );
}

export default function AudiencePage() {
  const { state, status, timeOffsetMs, sendJson } = useSync({ role: "audience" });

  const slideIndex = useMemo(() => {
    if (!state) return 0;
    return Math.max(0, Math.min(totalSlides - 1, state.currentIndex));
  }, [state]);

  const slide = allSlides[slideIndex] ?? allSlides[0];
  const transitionStartedAt = state?.transitionStartedAt ?? 0;
  const seed = state?.seed ?? 1;

  const svgDef = getSvgSceneDef(slide.svgSceneId);

  const [exitingScene, setExitingScene] = useState<ExitingScene | null>(null);
  const prevSvgDefRef = useRef<{
    def: SvgSceneDef;
    seed: number;
    idx: number;
    transitionStartedAt: number;
  } | null>(null);

  useLayoutEffect(() => {
    const prev = prevSvgDefRef.current;
    if (prev && prev.idx !== slideIndex && prev.def) {
      const exitKey = Date.now();
      setExitingScene({
        key: exitKey,
        def: prev.def,
        seed: prev.seed,
        timeOffsetMs,
        transitionStartedAt: prev.transitionStartedAt,
      });
      const lingerMs = prev.def.exitDurationMs
        ? prev.def.exitDurationMs + 200
        : EXIT_LINGER_MS;
      const timer = window.setTimeout(() => {
        setExitingScene((cur) => (cur?.key === exitKey ? null : cur));
      }, lingerMs);
      return () => clearTimeout(timer);
    }
  }, [slideIndex, timeOffsetMs]);

  useEffect(() => {
    if (svgDef) {
      prevSvgDefRef.current = { def: svgDef, seed, idx: slideIndex, transitionStartedAt };
    } else {
      prevSvgDefRef.current = null;
    }
  }, [svgDef, seed, slideIndex, transitionStartedAt]);

  return (
    <div className="audience-root">
      {state ? (
        <>
          {exitingScene && (
            <SvgScene
              key={`exit-${exitingScene.key}`}
              className="audience-canvas"
              sceneDef={exitingScene.def}
              seed={exitingScene.seed}
              transitionStartedAt={exitingScene.transitionStartedAt}
              timeOffsetMs={exitingScene.timeOffsetMs}
              exiting
              style={{ position: "absolute", inset: 0, zIndex: 2 }}
            />
          )}
          {svgDef && (
            <SvgScene
              key={`svg-${slideIndex}`}
              className="audience-canvas"
              sceneDef={svgDef}
              seed={seed}
              transitionStartedAt={
                exitingScene
                  ? transitionStartedAt + (exitingScene.def.exitDurationMs ?? EXIT_LINGER_MS)
                  : transitionStartedAt
              }
              timeOffsetMs={timeOffsetMs}
              style={{ position: "absolute", inset: 0, zIndex: 1 }}
            />
          )}
        </>
      ) : (
        <div className="audience-waiting">等待演讲开始…</div>
      )}
      {state && slide.svgSceneId === "signup" && <SignupForm sendJson={sendJson} />}
      {state && (
        <div className="audience-subtitle">
          <SubtitleHighlighter
            text={slide.text}
            slideEnteredAt={state.slideEnteredAt}
            slideDurations={state.slideDurations}
            timeOffsetMs={timeOffsetMs}
          />
        </div>
      )}
      {status !== "open" && (
        <div className="audience-disconnected">
          {status === "connecting" ? "正在连接…" : "连接已断开，正在重连…"}
        </div>
      )}
      <StageMask />
    </div>
  );
}
