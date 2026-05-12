import { useMemo } from "react";
import ParticleScene from "../particle/ParticleScene";
import { useSync } from "../sync/wsClient";
import { allSlides, totalSlides } from "../slides";

export default function AudiencePage() {
  const { state, status, timeOffsetMs } = useSync();

  const slideIndex = useMemo(() => {
    if (!state) return 0;
    return Math.max(0, Math.min(totalSlides - 1, state.currentIndex));
  }, [state]);

  const slide = allSlides[slideIndex] ?? allSlides[0];
  const transitionStartedAt = state?.transitionStartedAt ?? 0;
  const seed = state?.seed ?? 1;

  return (
    <div className="audience-root">
      {state ? (
        <ParticleScene
          className="audience-canvas"
          sceneKind={slide.sceneKind}
          sceneParams={slide.sceneParams}
          seed={seed}
          transitionStartedAt={transitionStartedAt}
          timeOffsetMs={timeOffsetMs}
          particleCount={2400}
        />
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
