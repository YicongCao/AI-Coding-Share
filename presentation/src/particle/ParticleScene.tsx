import { memo, useEffect, useLayoutEffect, useMemo, useRef } from "react";
import {
  getScenePoints,
  mulberry32,
  STAGE_H,
  STAGE_W,
  type SceneKind,
  type SceneParams,
  type ScenePoint,
} from "./sceneShapes";

export type ParticleSceneProps = {
  sceneKind: SceneKind;
  sceneParams?: SceneParams;
  seed: number;
  transitionStartedAt: number;
  timeOffsetMs: number;
  particleCount?: number;
  transitionDurationMs?: number;
  className?: string;
  style?: React.CSSProperties;
  paused?: boolean;
};

type Particle = {
  x: number;
  y: number;
  fromX: number;
  fromY: number;
  toX: number;
  toY: number;
  phase: number;
  driftX: number;
  driftY: number;
  size: number;
  hueShift: number;
};

const DEFAULT_PARTICLE_COUNT = 2200;
const DEFAULT_TRANSITION_MS = 1600;

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function seededShuffleIndices(n: number, seed: number): number[] {
  const idx: number[] = new Array(n);
  for (let i = 0; i < n; i++) idx[i] = i;
  const rng = mulberry32(seed >>> 0);
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    const tmp = idx[i];
    idx[i] = idx[j];
    idx[j] = tmp;
  }
  return idx;
}

function projectScenePoint(
  p: ScenePoint,
  canvasW: number,
  canvasH: number
): { x: number; y: number } {
  const scale = Math.min(canvasW / STAGE_W, canvasH / STAGE_H);
  const offX = (canvasW - STAGE_W * scale) / 2;
  const offY = (canvasH - STAGE_H * scale) / 2;
  return {
    x: offX + p.x * scale,
    y: offY + p.y * scale,
  };
}

const ParticleScene = memo(function ParticleScene({
  sceneKind,
  sceneParams,
  seed,
  transitionStartedAt,
  timeOffsetMs,
  particleCount = DEFAULT_PARTICLE_COUNT,
  transitionDurationMs = DEFAULT_TRANSITION_MS,
  className,
  style,
  paused = false,
}: ParticleSceneProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const stageTargetsRef = useRef<ScenePoint[]>([]);
  const sizeRef = useRef<{ w: number; h: number; dpr: number }>({
    w: 0,
    h: 0,
    dpr: 1,
  });

  const paramsKey = useMemo(
    () => JSON.stringify(sceneParams ?? null),
    [sceneParams]
  );

  const timeOffsetRef = useRef(timeOffsetMs);
  const transitionDurationRef = useRef(transitionDurationMs);
  const transitionStartedAtRef = useRef(transitionStartedAt);
  const pausedRef = useRef(paused);

  useEffect(() => {
    timeOffsetRef.current = timeOffsetMs;
  }, [timeOffsetMs]);

  useEffect(() => {
    transitionDurationRef.current = transitionDurationMs;
  }, [transitionDurationMs]);

  useEffect(() => {
    transitionStartedAtRef.current = transitionStartedAt;
  }, [transitionStartedAt]);

  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    function configureCanvas(): boolean {
      if (!container || !canvas) return false;
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = Math.max(1, Math.floor(rect.width));
      const h = Math.max(1, Math.floor(rect.height));
      const prev = sizeRef.current;
      if (prev.w === w && prev.h === h && prev.dpr === dpr) return false;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      sizeRef.current = { w, h, dpr };
      return true;
    }

    function ensureParticles() {
      const arr = particlesRef.current;
      if (arr.length === particleCount) return;
      const { w, h } = sizeRef.current;
      const rng = mulberry32(0x9e3779b9);
      arr.length = particleCount;
      for (let i = 0; i < particleCount; i++) {
        const existing = arr[i];
        const x = existing?.x ?? rng() * w;
        const y = existing?.y ?? rng() * h;
        arr[i] = {
          x,
          y,
          fromX: x,
          fromY: y,
          toX: x,
          toY: y,
          phase: rng() * Math.PI * 2,
          driftX: rng() * 2 - 1,
          driftY: rng() * 2 - 1,
          size: 0.9 + rng() * 1.4,
          hueShift: (rng() - 0.5) * 30,
        };
      }
    }

    function applyStageTargets(stageTargets: ScenePoint[]) {
      const { w, h } = sizeRef.current;
      const arr = particlesRef.current;
      stageTargetsRef.current = stageTargets;
      for (let i = 0; i < particleCount; i++) {
        const proj = projectScenePoint(stageTargets[i], w, h);
        arr[i].fromX = arr[i].x;
        arr[i].fromY = arr[i].y;
        arr[i].toX = proj.x;
        arr[i].toY = proj.y;
      }
    }

    configureCanvas();
    ensureParticles();

    const ro = new ResizeObserver(() => {
      if (!configureCanvas()) return;
      const { w, h } = sizeRef.current;
      const arr = particlesRef.current;
      const stageTargets = stageTargetsRef.current;
      if (stageTargets.length === 0) return;
      for (let i = 0; i < particleCount; i++) {
        const proj = projectScenePoint(stageTargets[i % stageTargets.length], w, h);
        arr[i].toX = proj.x;
        arr[i].toY = proj.y;
        arr[i].fromX = arr[i].x;
        arr[i].fromY = arr[i].y;
      }
    });
    ro.observe(container);

    let raf = 0;
    let lastDraw = performance.now();
    function frame() {
      raf = requestAnimationFrame(frame);
      const now = performance.now();
      const wallNow = Date.now();
      const dt = Math.min(64, now - lastDraw);
      lastDraw = now;

      const { w, h, dpr } = sizeRef.current;
      if (!ctx || w === 0 || h === 0) return;

      const serverNow = wallNow + timeOffsetRef.current;
      const transitionStart = transitionStartedAtRef.current;
      const duration = transitionDurationRef.current;
      const rawT =
        transitionStart > 0 && duration > 0
          ? (serverNow - transitionStart) / duration
          : 1;
      const t = Math.max(0, Math.min(1, rawT));
      const e = easeInOutCubic(t);

      const arr = particlesRef.current;
      const phaseStep = pausedRef.current ? 0 : dt * 0.0018;

      ctx.save();
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = "lighter";

      const wobbleAmp = 1.4 + (1 - t) * 6.5;
      const driftAmp = 0.35;

      for (let i = 0; i < arr.length; i++) {
        const p = arr[i];
        p.phase += phaseStep;
        const wobX = Math.sin(p.phase) * wobbleAmp + p.driftX * driftAmp;
        const wobY = Math.cos(p.phase * 1.13) * wobbleAmp + p.driftY * driftAmp;
        p.x = p.fromX + (p.toX - p.fromX) * e + wobX;
        p.y = p.fromY + (p.toY - p.fromY) * e + wobY;
        const r = p.size * (1 + (1 - t) * 0.45);
        const hue = 195 + p.hueShift + Math.sin(p.phase * 0.7) * 12;
        ctx.fillStyle = `hsla(${hue.toFixed(1)}, 88%, 70%, 0.78)`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    }
    raf = requestAnimationFrame(frame);

    sceneApplyFnRef.current = applyStageTargets;

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      sceneApplyFnRef.current = null;
    };
  }, [particleCount]);

  const sceneApplyFnRef = useRef<((targets: ScenePoint[]) => void) | null>(null);

  useEffect(() => {
    const applyFn = sceneApplyFnRef.current;
    if (!applyFn) return;
    const { w, h } = sizeRef.current;
    if (w === 0 || h === 0) return;
    const stagePoints = getScenePoints({
      kind: sceneKind,
      params: sceneParams,
      seed,
      count: particleCount,
    });
    const indices = seededShuffleIndices(particleCount, (seed ^ 0xa1b2c3) >>> 0);
    const shuffled: ScenePoint[] = new Array(particleCount);
    for (let i = 0; i < particleCount; i++) {
      shuffled[i] = stagePoints[indices[i] % stagePoints.length] ?? {
        x: STAGE_W / 2,
        y: STAGE_H / 2,
      };
    }
    applyFn(shuffled);
  }, [sceneKind, paramsKey, seed, transitionStartedAt, particleCount, sceneParams]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ position: "relative", width: "100%", height: "100%", ...style }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          display: "block",
        }}
      />
    </div>
  );
});

export default ParticleScene;
