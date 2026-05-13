import { memo, useEffect, useLayoutEffect, useRef, type ReactNode } from "react";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type Vec2 = { x: number; y: number };

export type SvgFragment = {
  id: string;
  content: ReactNode;
  enterFrom: Vec2;
  enterDelay: number;
  floatAmp: Vec2;
  floatPeriod: Vec2;
};

export type SvgSceneDef = {
  viewBox: string;
  defs: ReactNode;
  background?: ReactNode;
  fragments: SvgFragment[];
};

export type SvgSceneProps = {
  sceneDef: SvgSceneDef;
  transitionStartedAt: number;
  timeOffsetMs: number;
  seed: number;
  className?: string;
  style?: React.CSSProperties;
  exiting?: boolean;
};

// ---------------------------------------------------------------------------
// Easing
// ---------------------------------------------------------------------------

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

function easeInCubic(t: number): number {
  return t * t * t;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

const ENTER_DURATION_MS = 1400;
const EXIT_DURATION_MS = 900;

const SvgScene = memo(function SvgScene({
  sceneDef,
  transitionStartedAt,
  timeOffsetMs,
  seed,
  className,
  style,
  exiting = false,
}: SvgSceneProps) {
  const groupRefs = useRef<(SVGGElement | null)[]>([]);
  const rafRef = useRef(0);
  const transitionRef = useRef(transitionStartedAt);
  const exitingRef = useRef(exiting);
  const exitStartRef = useRef(exiting ? Date.now() + timeOffsetMs : 0);

  useEffect(() => {
    transitionRef.current = transitionStartedAt;
  }, [transitionStartedAt]);

  useEffect(() => {
    if (exiting && !exitingRef.current) {
      exitStartRef.current = Date.now() + timeOffsetMs;
    }
    exitingRef.current = exiting;
  }, [exiting, timeOffsetMs]);

  useLayoutEffect(() => {
    const frags = sceneDef.fragments;
    groupRefs.current.length = frags.length;

    function frame() {
      rafRef.current = requestAnimationFrame(frame);
      const serverNow = Date.now() + timeOffsetMs;

      for (let i = 0; i < frags.length; i++) {
        const g = groupRefs.current[i];
        if (!g) continue;
        const frag = frags[i];

        if (exitingRef.current) {
          const exitElapsed = serverNow - exitStartRef.current;
          const rawT = Math.max(0, Math.min(1, exitElapsed / EXIT_DURATION_MS));
          const delayed = Math.max(0, rawT - (frag.enterDelay / ENTER_DURATION_MS) * 0.3);
          const eT = easeInCubic(Math.min(1, delayed / 0.7));
          const dx = -frag.enterFrom.x * eT;
          const dy = -frag.enterFrom.y * eT;
          g.setAttribute("transform", `translate(${dx.toFixed(1)},${dy.toFixed(1)})`);
          g.setAttribute("opacity", String(Math.max(0, 1 - eT).toFixed(2)));
          continue;
        }

        const enterElapsed = serverNow - transitionRef.current - frag.enterDelay;
        const enterT = Math.max(0, Math.min(1, enterElapsed / ENTER_DURATION_MS));
        const eE = easeOutCubic(enterT);

        const offX = frag.enterFrom.x * (1 - eE);
        const offY = frag.enterFrom.y * (1 - eE);

        const phase = (seed * 0.001 + i * 1.7);
        const now = serverNow * 0.001;
        const floatX = Math.sin(now / frag.floatPeriod.x + phase) * frag.floatAmp.x * eE;
        const floatY = Math.cos(now / frag.floatPeriod.y + phase * 1.3) * frag.floatAmp.y * eE;

        const tx = offX + floatX;
        const ty = offY + floatY;

        g.setAttribute("transform", `translate(${tx.toFixed(1)},${ty.toFixed(1)})`);
        g.setAttribute("opacity", String(Math.min(1, eE * 1.5).toFixed(2)));
      }
    }

    rafRef.current = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(rafRef.current);
  }, [sceneDef, timeOffsetMs, seed]);

  return (
    <div
      className={className}
      style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden", ...style }}
    >
      <svg
        viewBox={sceneDef.viewBox}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          display: "block",
        }}
        preserveAspectRatio="xMidYMid meet"
      >
        {sceneDef.defs}
        {sceneDef.background}
        {sceneDef.fragments.map((frag, i) => (
          <g
            key={frag.id}
            ref={(el) => { groupRefs.current[i] = el; }}
            opacity="0"
          >
            {frag.content}
          </g>
        ))}
      </svg>
    </div>
  );
});

export default SvgScene;
