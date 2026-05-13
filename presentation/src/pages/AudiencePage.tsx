import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import SvgScene, { type SvgSceneDef } from "../svg/SvgScene";
import { getSvgSceneDef } from "../svg/registry";
import { useSync } from "../sync/wsClient";
import { allSlides, totalSlides } from "../slides";

const EXIT_LINGER_MS = 1000;

type ExitingScene = {
  key: number;
  def: SvgSceneDef;
  seed: number;
  timeOffsetMs: number;
  transitionStartedAt: number;
};

export default function AudiencePage() {
  const { state, status, timeOffsetMs } = useSync({ role: "audience" });

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
      const timer = window.setTimeout(() => {
        setExitingScene((cur) => (cur?.key === exitKey ? null : cur));
      }, EXIT_LINGER_MS);
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
                exitingScene ? transitionStartedAt + EXIT_LINGER_MS : transitionStartedAt
              }
              timeOffsetMs={timeOffsetMs}
              style={{ position: "absolute", inset: 0, zIndex: 1 }}
            />
          )}
        </>
      ) : (
        <div className="audience-waiting">等待演讲开始…</div>
      )}
      {state && (
        <div className="audience-subtitle">{slide.text}</div>
      )}
      {status !== "open" && (
        <div className="audience-disconnected">
          {status === "connecting" ? "正在连接…" : "连接已断开，正在重连…"}
        </div>
      )}
    </div>
  );
}
