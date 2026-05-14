import { memo, useEffect, useLayoutEffect, useRef, type ReactNode } from "react";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type Vec2 = { x: number; y: number };

export type SceneTransitionEffect = "zipper" | "curtain";

export type SvgFragment = {
  id: string;
  content: ReactNode;
  enterFrom: Vec2;
  enterDelay: number;
  floatAmp: Vec2;
  floatPeriod: Vec2;
  floatRotate?: number;
  exitTo?: Vec2;
  exitDelay?: number;
  exitSpin?: number;
  exitScale?: number;
  exitOpacity?: number;
};

export type SvgSceneDef = {
  viewBox: string;
  defs: ReactNode;
  background?: ReactNode;
  fragments: SvgFragment[];
  transitionEffect?: SceneTransitionEffect;
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

function clamp01(t: number): number {
  return Math.max(0, Math.min(1, t));
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
  const zipperRef = useRef<SVGGElement | null>(null);
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
      const exitRawT = exitingRef.current
        ? clamp01((serverNow - exitStartRef.current) / EXIT_DURATION_MS)
        : 0;

      for (let i = 0; i < frags.length; i++) {
        const g = groupRefs.current[i];
        if (!g) continue;
        const frag = frags[i];

        if (exitingRef.current) {
          const exitElapsed = serverNow - exitStartRef.current;
          const rawT = clamp01(exitElapsed / EXIT_DURATION_MS);
          const baseDelay = (frag.enterDelay / ENTER_DURATION_MS) * 0.3;
          const customDelay = (frag.exitDelay ?? 0) / EXIT_DURATION_MS;
          const delayed = Math.max(0, rawT - baseDelay - customDelay);
          const eT = easeInCubic(Math.min(1, delayed / 0.7));

          const exitStart = exitStartRef.current;
          const startEnterElapsed = exitStart - transitionRef.current - frag.enterDelay;
          const startEnterT = clamp01(startEnterElapsed / ENTER_DURATION_MS);
          const startEase = easeOutCubic(startEnterT);
          const startOffX = frag.enterFrom.x * (1 - startEase);
          const startOffY = frag.enterFrom.y * (1 - startEase);
          const phase = seed * 0.001 + i * 1.7;
          const startNow = exitStart * 0.001;
          const startFloatX =
            Math.sin(startNow / frag.floatPeriod.x + phase) * frag.floatAmp.x * startEase;
          const startFloatY =
            Math.cos(startNow / frag.floatPeriod.y + phase * 1.3) * frag.floatAmp.y * startEase;
          const startX = startOffX + startFloatX;
          const startY = startOffY + startFloatY;
          const exitTo = frag.exitTo ?? { x: -frag.enterFrom.x, y: -frag.enterFrom.y };
          const targetX = exitTo.x;
          const targetY = exitTo.y;
          const dx = startX + (targetX - startX) * eT;
          const dy = startY + (targetY - startY) * eT;
          const rotate = (frag.exitSpin ?? 0) * eT;
          const scale = 1 + ((frag.exitScale ?? 1) - 1) * eT;

          g.setAttribute(
            "transform",
            `translate(${dx.toFixed(1)},${dy.toFixed(1)}) rotate(${rotate.toFixed(1)}) scale(${scale.toFixed(3)})`
          );
          g.setAttribute(
            "opacity",
            String(Math.max(0, 1 - eT * (frag.exitOpacity ?? 1)).toFixed(2))
          );
          continue;
        }

        const enterElapsed = serverNow - transitionRef.current - frag.enterDelay;
        const enterT = clamp01(enterElapsed / ENTER_DURATION_MS);
        const eE = easeOutCubic(enterT);

        const offX = frag.enterFrom.x * (1 - eE);
        const offY = frag.enterFrom.y * (1 - eE);

        const phase = (seed * 0.001 + i * 1.7);
        const now = serverNow * 0.001;
        const floatX = Math.sin(now / frag.floatPeriod.x + phase) * frag.floatAmp.x * eE;
        const floatY = Math.cos(now / frag.floatPeriod.y + phase * 1.3) * frag.floatAmp.y * eE;

        const tx = offX + floatX;
        const ty = offY + floatY;
        const fr = frag.floatRotate ?? 0;
        const floatR = fr !== 0 ? Math.sin(now / frag.floatPeriod.x + phase * 0.7) * fr * eE : 0;

        g.setAttribute("transform", `translate(${tx.toFixed(1)},${ty.toFixed(1)}) rotate(${floatR.toFixed(2)})`);
        g.setAttribute("opacity", String(Math.min(1, eE * 1.5).toFixed(2)));
      }

      const zg = zipperRef.current;
      if (zg) {
        if (exitingRef.current && sceneDef.transitionEffect === "zipper") {
          zg.setAttribute("opacity", "1");
          const w = 1200 * exitRawT;
          const x = w;
          zg.innerHTML =
            `<rect x="0" y="0" width="${w.toFixed(1)}" height="675" fill="#2B2B3D" opacity="0.72"/>` +
            `<line x1="${x.toFixed(1)}" y1="80" x2="${x.toFixed(1)}" y2="595" stroke="#E8B84A" stroke-width="4" stroke-dasharray="14 8" opacity="0.85"/>` +
            `<path d="M ${(x - 22).toFixed(1)} 330 L ${x.toFixed(1)} 340 L ${(x - 22).toFixed(1)} 350" fill="none" stroke="#6EC8E6" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" opacity="0.8"/>`;
        } else if (exitingRef.current && sceneDef.transitionEffect === "curtain") {
          zg.setAttribute("opacity", "1");
          const closeT = Math.min(1, exitRawT * 2);
          const openT = Math.max(0, exitRawT * 2 - 1);
          const half = 600 * (closeT - openT);
          const foldW = 30 * closeT * (1 - openT);
          if (half < 0.5) {
            zg.innerHTML = "";
            zg.setAttribute("opacity", "0");
          } else {
            const edgeOp = Math.min(1, closeT * 2) * (1 - openT);
            zg.innerHTML =
              `<rect x="0" y="0" width="${half.toFixed(1)}" height="675" fill="#5A1525" opacity="0.92"/>` +
              `<rect x="${(half - foldW).toFixed(1)}" y="0" width="${Math.max(0, foldW).toFixed(1)}" height="675" fill="#7A2040" opacity="0.5"/>` +
              `<rect x="${(1200 - half).toFixed(1)}" y="0" width="${half.toFixed(1)}" height="675" fill="#5A1525" opacity="0.92"/>` +
              `<rect x="${(1200 - half).toFixed(1)}" y="0" width="${Math.max(0, foldW).toFixed(1)}" height="675" fill="#7A2040" opacity="0.5"/>` +
              `<line x1="${half.toFixed(1)}" y1="0" x2="${half.toFixed(1)}" y2="675" stroke="#3A0A15" stroke-width="2" opacity="${edgeOp.toFixed(2)}"/>` +
              `<line x1="${(1200 - half).toFixed(1)}" y1="0" x2="${(1200 - half).toFixed(1)}" y2="675" stroke="#3A0A15" stroke-width="2" opacity="${edgeOp.toFixed(2)}"/>`;
          }
        } else {
          zg.setAttribute("opacity", "0");
          zg.innerHTML = "";
        }
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
        <g ref={zipperRef} opacity="0" style={{ pointerEvents: "none" }} />
      </svg>
    </div>
  );
});

export default SvgScene;
