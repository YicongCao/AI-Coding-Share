export type ScenePoint = { x: number; y: number };

export type SceneKind =
  | "cover"
  | "introBadge"
  | "timeline"
  | "twoQuests"
  | "jobsSpeaker"
  | "jobsEnvelope"
  | "macSpeaks"
  | "ttsAsrSplit"
  | "rulesGrid"
  | "hmmStates"
  | "vistaWindow"
  | "vistaMenu"
  | "siriPhone"
  | "intentSlot"
  | "carVoice"
  | "word2vec"
  | "vectorMath"
  | "seq2seq"
  | "attention"
  | "bert"
  | "chatgpt"
  | "breakthrough"
  | "bestWorstIntro"
  | "bestAge"
  | "worstAge"
  | "keyPointTitle"
  | "agileFlow"
  | "bottleneck"
  | "nexTeam"
  | "nexEcho"
  | "mostManyFastGood"
  | "rulesMess"
  | "readCode"
  | "rightTool"
  | "conceptLLM"
  | "conceptAgent"
  | "conceptTools"
  | "conceptMCP"
  | "conceptRulesSkills"
  | "conceptHarness"
  | "formula"
  | "busyAI"
  | "closedLoopIntro"
  | "closedLoopManual"
  | "closedLoopAuto"
  | "singleThread"
  | "multiAgent"
  | "roleStack"
  | "smartCage"
  | "outsider"
  | "bsArchitecture"
  | "sseXml"
  | "sseWs"
  | "phasedReality"
  | "bulletTrain"
  | "slowToken"
  | "prePostChat"
  | "statusBar"
  | "optMix"
  | "agileEnd"
  | "verticalDomain"
  | "agentDevSkills"
  | "userIssues"
  | "closedLoopReminder"
  | "diagnosticLog"
  | "aiResolves"
  | "notAFrontend"
  | "coreSkills"
  | "lifecycle"
  | "selfAwareness"
  | "todayYesterday"
  | "slowAndFast"
  | "finale";

export type SceneParams = {
  n?: number;
  title?: string;
  speaker?: string;
};

export const STAGE_W = 1000;
export const STAGE_H = 600;

// ============================================================================
// PRNG
// ============================================================================

export function mulberry32(seed: number): () => number {
  let a = (seed | 0) >>> 0;
  return function () {
    a = (a + 0x6d2b79f5) | 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// ============================================================================
// Path primitives
// ============================================================================

const line = (x1: number, y1: number, x2: number, y2: number) =>
  `M ${x1} ${y1} L ${x2} ${y2}`;

const rect = (x: number, y: number, w: number, h: number) =>
  `M ${x} ${y} h ${w} v ${h} h ${-w} z`;

const rrect = (x: number, y: number, w: number, h: number, r: number) =>
  `M ${x + r} ${y} h ${w - 2 * r} a ${r} ${r} 0 0 1 ${r} ${r} v ${h - 2 * r} a ${r} ${r} 0 0 1 ${-r} ${r} h ${-(w - 2 * r)} a ${r} ${r} 0 0 1 ${-r} ${-r} v ${-(h - 2 * r)} a ${r} ${r} 0 0 1 ${r} ${-r} z`;

const circ = (cx: number, cy: number, r: number) =>
  `M ${cx - r} ${cy} a ${r} ${r} 0 1 0 ${2 * r} 0 a ${r} ${r} 0 1 0 ${-2 * r} 0`;

function arrowHead(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  size = 14
): string {
  const angle = Math.atan2(y2 - y1, x2 - x1);
  const a1 = angle + Math.PI - 0.45;
  const a2 = angle + Math.PI + 0.45;
  const ex1 = x2 + Math.cos(a1) * size;
  const ey1 = y2 + Math.sin(a1) * size;
  const ex2 = x2 + Math.cos(a2) * size;
  const ey2 = y2 + Math.sin(a2) * size;
  return `M ${x2} ${y2} L ${ex1} ${ey1} M ${x2} ${y2} L ${ex2} ${ey2}`;
}

const arrow = (
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  size = 14
): string[] => [line(x1, y1, x2, y2), arrowHead(x1, y1, x2, y2, size)];

function polyline(points: [number, number][]): string {
  if (points.length === 0) return "";
  const [first, ...rest] = points;
  return `M ${first[0]} ${first[1]} ${rest
    .map((p) => `L ${p[0]} ${p[1]}`)
    .join(" ")}`;
}

function dashed(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  dashLen = 14,
  gap = 8
): string[] {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const total = Math.hypot(dx, dy);
  if (total <= 0.001) return [];
  const segLen = dashLen + gap;
  const n = Math.max(1, Math.floor(total / segLen));
  const ux = dx / total;
  const uy = dy / total;
  const paths: string[] = [];
  for (let i = 0; i < n; i++) {
    const sx = x1 + ux * (i * segLen);
    const sy = y1 + uy * (i * segLen);
    const ex = x1 + ux * (i * segLen + dashLen);
    const ey = y1 + uy * (i * segLen + dashLen);
    paths.push(line(sx, sy, ex, ey));
  }
  return paths;
}

function star(cx: number, cy: number, rOut: number, rIn = rOut * 0.45): string {
  const pts: [number, number][] = [];
  for (let i = 0; i < 10; i++) {
    const r = i % 2 === 0 ? rOut : rIn;
    const a = (i / 10) * Math.PI * 2 - Math.PI / 2;
    pts.push([cx + Math.cos(a) * r, cy + Math.sin(a) * r]);
  }
  pts.push(pts[0]);
  return polyline(pts);
}

function ellipse(cx: number, cy: number, rx: number, ry: number): string {
  return `M ${cx - rx} ${cy} a ${rx} ${ry} 0 1 0 ${2 * rx} 0 a ${rx} ${ry} 0 1 0 ${-2 * rx} 0`;
}

function spiral(
  cx: number,
  cy: number,
  rStart: number,
  rEnd: number,
  turns: number,
  steps = 80
): string {
  const pts: [number, number][] = [];
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const a = t * Math.PI * 2 * turns;
    const r = rStart + (rEnd - rStart) * t;
    pts.push([cx + Math.cos(a) * r, cy + Math.sin(a) * r]);
  }
  return polyline(pts);
}

function wave(
  x1: number,
  y: number,
  x2: number,
  amp: number,
  cycles: number,
  steps = 60
): string {
  const pts: [number, number][] = [];
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const x = x1 + (x2 - x1) * t;
    pts.push([x, y + Math.sin(t * Math.PI * 2 * cycles) * amp]);
  }
  return polyline(pts);
}

function person(cx: number, baseY: number, scale = 1): string[] {
  const r = 16 * scale;
  const headY = baseY - 110 * scale;
  return [
    circ(cx, headY, r),
    line(cx, headY + r, cx, baseY - 30 * scale),
    line(cx - 30 * scale, baseY - 70 * scale, cx + 30 * scale, baseY - 70 * scale),
    line(cx, baseY - 30 * scale, cx - 22 * scale, baseY),
    line(cx, baseY - 30 * scale, cx + 22 * scale, baseY),
  ];
}

function gear(cx: number, cy: number, r: number, teeth = 10): string[] {
  const paths: string[] = [];
  paths.push(circ(cx, cy, r * 0.55));
  for (let i = 0; i < teeth; i++) {
    const a = (i / teeth) * Math.PI * 2;
    const x1 = cx + Math.cos(a) * r * 0.75;
    const y1 = cy + Math.sin(a) * r * 0.75;
    const x2 = cx + Math.cos(a) * r;
    const y2 = cy + Math.sin(a) * r;
    paths.push(line(x1, y1, x2, y2));
  }
  return paths;
}

function brain(cx: number, cy: number, scale = 1): string[] {
  const s = scale;
  return [
    ellipse(cx - 28 * s, cy, 52 * s, 60 * s),
    ellipse(cx + 28 * s, cy, 52 * s, 60 * s),
    line(cx, cy - 60 * s, cx, cy + 60 * s),
    `M ${cx - 60 * s} ${cy - 20 * s} q 25 -20 50 0`,
    `M ${cx + 10 * s} ${cy - 20 * s} q 25 -20 50 0`,
    `M ${cx - 60 * s} ${cy + 20 * s} q 25 20 50 0`,
    `M ${cx + 10 * s} ${cy + 20 * s} q 25 20 50 0`,
  ];
}

function speechBubble(x: number, y: number, w: number, h: number, tail: "down" | "up" = "down"): string[] {
  const r = 18;
  const tailY = tail === "down" ? y + h + 24 : y - 24;
  const tailBase = tail === "down" ? y + h : y;
  return [
    rrect(x, y, w, h, r),
    polyline([
      [x + w * 0.25, tailBase],
      [x + w * 0.18, tailY],
      [x + w * 0.4, tailBase],
    ]),
  ];
}

function bigDigit(digit: number, cx: number, cy: number, scale = 1): string[] {
  const w = 180 * scale;
  const h = 280 * scale;
  const x = cx - w / 2;
  const y = cy - h / 2;
  const t = 30 * scale;
  const out: string[] = [];
  switch (digit) {
    case 0:
      out.push(rrect(x, y, w, h, 36 * scale));
      out.push(rrect(x + t, y + t, w - 2 * t, h - 2 * t, 24 * scale));
      break;
    case 1:
      out.push(line(cx, y, cx, y + h));
      out.push(line(cx - 60 * scale, y + 50 * scale, cx, y));
      out.push(line(cx - 60 * scale, y + h, cx + 60 * scale, y + h));
      break;
    case 2:
      out.push(polyline([
        [x, y + 50 * scale],
        [x + 50 * scale, y],
        [x + w - 50 * scale, y],
        [x + w, y + 50 * scale],
        [x + w, y + h * 0.4],
        [x, y + h],
        [x + w, y + h],
      ]));
      break;
    case 3:
      out.push(polyline([
        [x, y + 30 * scale],
        [x + w * 0.7, y],
        [x + w, y + h * 0.3],
        [x + w * 0.5, y + h * 0.5],
        [x + w, y + h * 0.7],
        [x + w * 0.7, y + h],
        [x, y + h - 30 * scale],
      ]));
      break;
    case 4:
      out.push(line(x, y, x, y + h * 0.6));
      out.push(line(x, y + h * 0.6, x + w, y + h * 0.6));
      out.push(line(x + w * 0.7, y, x + w * 0.7, y + h));
      break;
    case 5:
      out.push(polyline([
        [x + w, y],
        [x, y],
        [x, y + h * 0.45],
        [x + w * 0.7, y + h * 0.45],
        [x + w, y + h * 0.65],
        [x + w, y + h * 0.85],
        [x + w * 0.7, y + h],
        [x, y + h],
      ]));
      break;
    case 6:
      out.push(polyline([
        [x + w, y + 40 * scale],
        [x + w * 0.5, y],
        [x, y + h * 0.45],
        [x, y + h - 40 * scale],
        [x + w * 0.5, y + h],
        [x + w, y + h * 0.75],
        [x + w, y + h * 0.55],
        [x, y + h * 0.55],
      ]));
      break;
    case 7:
      out.push(line(x, y, x + w, y));
      out.push(line(x + w, y, x + w * 0.35, y + h));
      break;
    case 8:
      out.push(circ(cx, y + h * 0.27, h * 0.27));
      out.push(circ(cx, y + h * 0.73, h * 0.27));
      break;
    case 9:
      out.push(polyline([
        [x, y + h * 0.6],
        [x + w * 0.5, y + h * 0.55],
        [x + w, y + h * 0.4],
        [x + w * 0.5, y],
        [x, y + h * 0.35],
        [x + w, y + h * 0.45],
      ]));
      out.push(polyline([
        [x + w, y + h * 0.45],
        [x + w * 0.5, y + h],
      ]));
      break;
    default:
      out.push(rrect(x, y, w, h, 24));
  }
  return out;
}

// ============================================================================
// Scenes
// ============================================================================

type SceneFn = (params: SceneParams | undefined, rng: () => number) => string[];

const sceneCover: SceneFn = (_, rng) => {
  const cx = STAGE_W / 2;
  const cy = STAGE_H / 2;
  const paths: string[] = [];
  paths.push(rrect(80, 100, 840, 400, 36));
  paths.push(rrect(110, 130, 780, 340, 30));
  paths.push(line(40, 60, 160, 60));
  paths.push(line(40, 60, 40, 180));
  paths.push(line(960, 540, 840, 540));
  paths.push(line(960, 540, 960, 420));
  paths.push(circ(cx, cy, 86));
  paths.push(circ(cx, cy, 130));
  for (let i = 0; i < 14; i++) {
    const a = (i / 14) * Math.PI * 2 + rng() * 0.3;
    const r = 200 + rng() * 50;
    const x = cx + Math.cos(a) * r;
    const y = cy + Math.sin(a) * r * 0.55;
    paths.push(circ(x, y, 4 + rng() * 4));
  }
  paths.push(line(cx - 60, cy - 14, cx + 60, cy - 14));
  paths.push(line(cx - 40, cy + 14, cx + 40, cy + 14));
  return paths;
};

const sceneIntroBadge: SceneFn = () => {
  const paths: string[] = [];
  paths.push(rrect(140, 180, 720, 250, 32));
  paths.push(circ(260, 305, 70));
  paths.push(circ(260, 280, 25));
  paths.push(`M 220 330 q 40 28 80 0`);
  paths.push(line(360, 250, 770, 250));
  paths.push(line(360, 300, 660, 300));
  paths.push(line(360, 350, 720, 350));
  paths.push(rrect(620, 100, 240, 60, 18));
  paths.push(line(640, 130, 820, 130));
  paths.push(line(820, 120, 840, 130));
  paths.push(line(820, 140, 840, 130));
  paths.push(circ(700, 470, 14));
  paths.push(circ(740, 470, 14));
  paths.push(circ(780, 470, 14));
  return paths;
};

const sceneTimeline: SceneFn = (_, rng) => {
  const y = STAGE_H / 2;
  const xs = [110, 220, 340, 470, 600, 730, 850, 940];
  const paths: string[] = [];
  paths.push(line(80, y, 940, y));
  paths.push(arrowHead(80, y, 940, y, 18));
  for (let i = 0; i < xs.length; i++) {
    paths.push(circ(xs[i], y, 8 + (i === xs.length - 1 ? 8 : 0)));
    const up = i % 2 === 0;
    const tickY = up ? y - 60 - rng() * 30 : y + 60 + rng() * 30;
    paths.push(line(xs[i], y, xs[i], tickY));
    paths.push(rrect(xs[i] - 36, tickY - (up ? 36 : 0), 72, 36, 10));
  }
  paths.push(star(940, y - 50, 24));
  return paths;
};

const sceneTwoQuests: SceneFn = () => {
  const paths: string[] = [];
  paths.push(...person(220, 420, 1.4));
  paths.push(rrect(680, 240, 200, 180, 22));
  paths.push(rect(700, 260, 160, 110));
  paths.push(line(700, 380, 860, 380));
  paths.push(circ(780, 405, 8));
  paths.push(...arrow(290, 290, 670, 290, 20));
  paths.push(...arrow(670, 380, 290, 380, 20));
  paths.push(`M 480 250 q 0 -20 -20 -20`);
  paths.push(`M 480 250 q 0 -20 20 -20`);
  paths.push(`M 480 410 q 0 20 -20 20`);
  paths.push(`M 480 410 q 0 20 20 20`);
  return paths;
};

const sceneJobsSpeaker: SceneFn = () => {
  const paths: string[] = [];
  paths.push(...person(500, 470, 1.3));
  paths.push(rrect(480, 360, 40, 30, 8));
  paths.push(line(500, 390, 500, 470));
  paths.push(line(420, 470, 580, 470));
  paths.push(polyline([
    [200, 80],
    [500, 320],
    [800, 80],
  ]));
  paths.push(...dashed(200, 80, 800, 80));
  for (let i = 0; i < 5; i++) {
    const x = 280 + i * 110;
    paths.push(circ(x, 90, 5));
  }
  return paths;
};

const sceneJobsEnvelope: SceneFn = () => {
  const paths: string[] = [];
  paths.push(rrect(180, 200, 380, 220, 14));
  paths.push(polyline([
    [180, 215],
    [370, 340],
    [560, 215],
  ]));
  paths.push(rrect(440, 320, 360, 110, 12));
  paths.push(line(460, 340, 780, 340));
  paths.push(line(460, 360, 700, 360));
  paths.push(line(460, 380, 740, 380));
  paths.push(line(460, 400, 660, 400));
  paths.push(arrow(390, 230, 540, 320, 16)[0]);
  paths.push(arrow(390, 230, 540, 320, 16)[1]);
  paths.push(star(820, 220, 18));
  paths.push(star(150, 470, 14));
  return paths;
};

const sceneMacSpeaks: SceneFn = () => {
  const paths: string[] = [];
  paths.push(rrect(170, 200, 240, 280, 18));
  paths.push(rect(195, 230, 190, 140));
  paths.push(line(205, 245, 375, 245));
  paths.push(line(205, 260, 360, 260));
  paths.push(line(205, 275, 370, 275));
  paths.push(rrect(220, 390, 140, 12, 6));
  paths.push(...speechBubble(470, 180, 410, 160, "down"));
  paths.push(wave(490, 250, 870, 14, 6, 80));
  paths.push(wave(490, 280, 870, 10, 8, 80));
  paths.push(`M 200 200 l 0 -28`);
  paths.push(`M 380 200 l 0 -28`);
  return paths;
};

const sceneTtsAsrSplit: SceneFn = () => {
  const paths: string[] = [];
  paths.push(...person(180, 380, 1.2));
  paths.push(rrect(720, 240, 200, 180, 18));
  paths.push(rect(740, 260, 160, 110));
  paths.push(line(740, 380, 900, 380));
  paths.push(...arrow(260, 270, 700, 270, 20));
  paths.push(...arrow(700, 350, 260, 350, 20));
  paths.push(rrect(420, 220, 90, 40, 10));
  paths.push(rrect(420, 360, 90, 40, 10));
  return paths;
};

const sceneRulesGrid: SceneFn = (_, rng) => {
  const paths: string[] = [];
  const cols = 6;
  const rows = 4;
  const cellW = 130;
  const cellH = 100;
  const startX = (STAGE_W - cols * cellW) / 2;
  const startY = (STAGE_H - rows * cellH) / 2;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const x = startX + c * cellW;
      const y = startY + r * cellH;
      paths.push(rrect(x + 8, y + 8, cellW - 16, cellH - 16, 8));
      paths.push(line(x + 18, y + 28, x + cellW - 26, y + 28));
      paths.push(line(x + 18, y + 50, x + cellW - 40, y + 50));
      if (rng() > 0.4) {
        paths.push(line(x + 18, y + 72, x + cellW - 36, y + 72));
      }
    }
  }
  return paths;
};

const sceneHmmStates: SceneFn = () => {
  const paths: string[] = [];
  const cx = STAGE_W / 2;
  const cy = STAGE_H / 2;
  const r = 70;
  const positions: [number, number][] = [
    [cx - 280, cy],
    [cx - 90, cy - 100],
    [cx + 90, cy - 100],
    [cx + 280, cy],
    [cx, cy + 150],
  ];
  for (const [x, y] of positions) {
    paths.push(circ(x, y, r));
  }
  for (let i = 0; i < positions.length - 1; i++) {
    const [x1, y1] = positions[i];
    const [x2, y2] = positions[i + 1];
    const dx = x2 - x1;
    const dy = y2 - y1;
    const d = Math.hypot(dx, dy);
    const ox = (dx / d) * r;
    const oy = (dy / d) * r;
    paths.push(...arrow(x1 + ox, y1 + oy, x2 - ox, y2 - oy, 14));
  }
  paths.push(...arrow(positions[3][0] + r, positions[3][1] - 10, positions[0][0] - r, positions[0][1] - 10, 14));
  for (const [x, y] of positions) {
    paths.push(circ(x, y - 100, 12));
    paths.push(line(x, y - 80, x, y - r));
  }
  return paths;
};

const sceneVistaWindow: SceneFn = () => {
  const paths: string[] = [];
  paths.push(rrect(100, 100, 800, 400, 14));
  paths.push(line(100, 144, 900, 144));
  paths.push(circ(126, 122, 9));
  paths.push(circ(150, 122, 9));
  paths.push(circ(174, 122, 9));
  paths.push(rrect(120, 170, 200, 310, 8));
  paths.push(rrect(360, 180, 520, 220, 10));
  paths.push(rrect(360, 420, 520, 60, 10));
  paths.push(line(380, 220, 860, 220));
  paths.push(line(380, 260, 760, 260));
  paths.push(line(380, 300, 820, 300));
  paths.push(line(380, 340, 700, 340));
  paths.push(circ(840, 450, 16));
  paths.push(wave(700, 450, 820, 8, 4, 32));
  return paths;
};

const sceneVistaMenu: SceneFn = () => {
  const paths: string[] = [];
  paths.push(rrect(180, 110, 640, 400, 14));
  paths.push(line(180, 156, 820, 156));
  paths.push(line(200, 134, 280, 134));
  for (let i = 0; i < 6; i++) {
    const y = 200 + i * 50;
    paths.push(line(220, y, 780, y));
    paths.push(circ(240, y - 20, 8));
    paths.push(polyline([
      [232, y - 22],
      [240, y - 14],
      [256, y - 28],
    ]));
  }
  return paths;
};

const sceneSiriPhone: SceneFn = () => {
  const paths: string[] = [];
  paths.push(rrect(380, 80, 240, 480, 32));
  paths.push(rrect(400, 120, 200, 400, 14));
  paths.push(circ(500, 540, 14));
  paths.push(rrect(460, 96, 80, 8, 4));
  paths.push(circ(500, 280, 90));
  paths.push(circ(500, 280, 70));
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    const x = 500 + Math.cos(a) * 130;
    const y = 280 + Math.sin(a) * 130;
    paths.push(circ(x, y, 6));
  }
  paths.push(wave(100, 480, 380, 14, 5, 50));
  paths.push(wave(620, 480, 900, 14, 5, 50));
  return paths;
};

const sceneIntentSlot: SceneFn = () => {
  const paths: string[] = [];
  paths.push(rrect(100, 120, 800, 80, 18));
  for (let i = 0; i < 5; i++) {
    const x = 140 + i * 150;
    paths.push(line(x, 140, x + 110, 140));
    paths.push(line(x, 170, x + 90, 170));
  }
  paths.push(...arrow(500, 230, 240, 320, 16));
  paths.push(...arrow(500, 230, 760, 320, 16));
  paths.push(rrect(140, 330, 200, 70, 14));
  paths.push(line(170, 360, 310, 360));
  paths.push(line(170, 380, 280, 380));
  paths.push(rrect(660, 330, 200, 70, 14));
  paths.push(line(690, 360, 830, 360));
  paths.push(line(690, 380, 800, 380));
  paths.push(rrect(360, 460, 280, 70, 14));
  paths.push(line(390, 490, 600, 490));
  paths.push(line(390, 510, 560, 510));
  paths.push(...arrow(240, 410, 460, 460, 14));
  paths.push(...arrow(760, 410, 540, 460, 14));
  return paths;
};

const sceneCarVoice: SceneFn = () => {
  const paths: string[] = [];
  paths.push(polyline([
    [120, 420],
    [200, 320],
    [400, 280],
    [620, 280],
    [800, 320],
    [880, 420],
    [120, 420],
  ]));
  paths.push(circ(260, 460, 50));
  paths.push(circ(260, 460, 26));
  paths.push(circ(720, 460, 50));
  paths.push(circ(720, 460, 26));
  paths.push(rrect(380, 320, 240, 90, 14));
  paths.push(line(400, 360, 600, 360));
  paths.push(line(400, 380, 580, 380));
  paths.push(circ(500, 220, 26));
  paths.push(wave(180, 180, 820, 12, 5, 60));
  paths.push(wave(220, 140, 780, 8, 6, 50));
  return paths;
};

const sceneWord2vec: SceneFn = () => {
  const paths: string[] = [];
  paths.push(...arrow(120, 480, 880, 480, 18));
  paths.push(...arrow(120, 480, 120, 100, 18));
  const points: [number, number][] = [
    [300, 320],
    [420, 220],
    [580, 200],
    [700, 300],
    [780, 380],
    [380, 380],
    [560, 340],
    [640, 240],
  ];
  for (const [x, y] of points) {
    paths.push(circ(x, y, 12));
    paths.push(...arrow(120, 480, x, y, 10));
  }
  paths.push(rrect(420, 100, 220, 50, 14));
  return paths;
};

const sceneVectorMath: SceneFn = () => {
  const paths: string[] = [];
  paths.push(rrect(80, 220, 130, 130, 14));
  paths.push(rrect(290, 220, 130, 130, 14));
  paths.push(rrect(500, 220, 130, 130, 14));
  paths.push(rrect(770, 220, 150, 130, 14));
  paths.push(...arrow(110, 285, 180, 285, 12));
  paths.push(...arrow(110, 320, 180, 285, 12));
  paths.push(line(240, 270, 270, 270));
  paths.push(line(240, 300, 270, 300));
  paths.push(line(250, 260, 250, 310));
  paths.push(line(450, 280, 480, 280));
  paths.push(line(460, 270, 460, 290));
  paths.push(line(660, 270, 740, 270));
  paths.push(line(660, 290, 740, 290));
  paths.push(...arrow(800, 285, 870, 285, 12));
  paths.push(...arrow(800, 320, 870, 285, 12));
  paths.push(line(140, 440, 880, 440));
  for (let i = 0; i < 4; i++) {
    const cx = 145 + i * 215;
    paths.push(circ(cx, 460, 5));
    paths.push(circ(cx, 480, 5));
    paths.push(circ(cx, 500, 5));
  }
  return paths;
};

const sceneSeq2seq: SceneFn = () => {
  const paths: string[] = [];
  paths.push(rrect(80, 220, 360, 180, 16));
  paths.push(rrect(560, 220, 360, 180, 16));
  paths.push(line(120, 260, 410, 260));
  paths.push(line(120, 350, 410, 350));
  paths.push(line(600, 260, 880, 260));
  paths.push(line(600, 350, 880, 350));
  for (let i = 0; i < 4; i++) {
    const x = 130 + i * 80;
    paths.push(rrect(x, 285, 60, 40, 8));
  }
  for (let i = 0; i < 4; i++) {
    const x = 610 + i * 80;
    paths.push(rrect(x, 285, 60, 40, 8));
  }
  paths.push(...arrow(440, 310, 560, 310, 18));
  paths.push(rrect(450, 470, 100, 50, 12));
  for (let i = 0; i < 5; i++) {
    const x = 130 + i * 60;
    paths.push(circ(x, 470, 5));
    paths.push(circ(x, 490, 5));
  }
  for (let i = 0; i < 5; i++) {
    const x = 610 + i * 60;
    paths.push(circ(x, 470, 5));
    paths.push(circ(x, 490, 5));
  }
  return paths;
};

const sceneAttention: SceneFn = () => {
  const paths: string[] = [];
  const cols = 8;
  const rows = 8;
  const cellSize = 44;
  const ox = 280;
  const oy = 130;
  for (let r = 0; r <= rows; r++) {
    paths.push(line(ox, oy + r * cellSize, ox + cols * cellSize, oy + r * cellSize));
  }
  for (let c = 0; c <= cols; c++) {
    paths.push(line(ox + c * cellSize, oy, ox + c * cellSize, oy + rows * cellSize));
  }
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (Math.abs(r - c) <= 1 || (r + c) % 5 === 0) {
        paths.push(rrect(ox + c * cellSize + 6, oy + r * cellSize + 6, cellSize - 12, cellSize - 12, 4));
      }
    }
  }
  paths.push(rrect(80, oy, 160, 80, 14));
  paths.push(rrect(80, oy + 120, 160, 80, 14));
  paths.push(rrect(80, oy + 240, 160, 80, 14));
  paths.push(line(240, oy + 40, ox, oy + 20));
  paths.push(line(240, oy + 160, ox, oy + 180));
  paths.push(line(240, oy + 280, ox, oy + 340));
  return paths;
};

const sceneBert: SceneFn = () => {
  const paths: string[] = [];
  const layers = 4;
  const nodesPerLayer = 7;
  const layerGap = 170;
  const nodeGap = 60;
  const oxLayer = 150;
  const oyCenter = 300;
  const layerNodes: [number, number][][] = [];
  for (let l = 0; l < layers; l++) {
    const arr: [number, number][] = [];
    for (let n = 0; n < nodesPerLayer; n++) {
      const x = oxLayer + l * layerGap;
      const y = oyCenter + (n - (nodesPerLayer - 1) / 2) * nodeGap;
      arr.push([x, y]);
      paths.push(circ(x, y, 14));
    }
    layerNodes.push(arr);
  }
  for (let l = 0; l < layers - 1; l++) {
    for (const [x1, y1] of layerNodes[l]) {
      for (const [x2, y2] of layerNodes[l + 1]) {
        if (Math.abs(y1 - y2) < 130) {
          paths.push(line(x1 + 14, y1, x2 - 14, y2));
        }
      }
    }
  }
  paths.push(rrect(800, 240, 160, 120, 14));
  paths.push(line(820, 280, 940, 280));
  paths.push(line(820, 310, 940, 310));
  paths.push(line(820, 340, 920, 340));
  return paths;
};

const sceneChatgpt: SceneFn = () => {
  const paths: string[] = [];
  paths.push(...speechBubble(180, 130, 640, 260, "down"));
  paths.push(line(220, 180, 760, 180));
  paths.push(line(220, 220, 700, 220));
  paths.push(line(220, 260, 780, 260));
  paths.push(line(220, 300, 660, 300));
  paths.push(star(140, 90, 22));
  paths.push(star(880, 90, 22));
  paths.push(star(160, 470, 28));
  paths.push(star(820, 480, 24));
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * Math.PI * 2;
    const x = 500 + Math.cos(a) * 300;
    const y = 260 + Math.sin(a) * 180;
    paths.push(circ(x, y, 6));
  }
  return paths;
};

const sceneBreakthrough: SceneFn = () => {
  const paths: string[] = [];
  paths.push(polyline([
    [100, 480],
    [240, 420],
    [380, 340],
    [560, 240],
    [780, 130],
    [900, 80],
  ]));
  paths.push(arrowHead(780, 130, 900, 80, 22));
  for (let i = 0; i < 6; i++) {
    const t = i / 5;
    const x = 100 + t * 800;
    const y = 480 - t * 400;
    paths.push(circ(x, y, 10));
  }
  paths.push(rrect(80, 510, 150, 50, 12));
  paths.push(rrect(260, 510, 150, 50, 12));
  paths.push(rrect(440, 510, 150, 50, 12));
  paths.push(rrect(620, 510, 150, 50, 12));
  paths.push(rrect(800, 510, 150, 50, 12));
  paths.push(star(900, 70, 26));
  return paths;
};

const sceneBestWorstIntro: SceneFn = () => {
  const paths: string[] = [];
  const cx = STAGE_W / 2;
  const cy = STAGE_H / 2;
  paths.push(circ(cx, cy, 170));
  paths.push(`M ${cx} ${cy - 170} a 85 85 0 0 1 0 170 a 85 85 0 0 0 0 170`);
  paths.push(circ(cx, cy - 85, 12));
  paths.push(circ(cx, cy + 85, 12));
  paths.push(rrect(100, 260, 200, 80, 16));
  paths.push(rrect(700, 260, 200, 80, 16));
  paths.push(...arrow(300, 300, 330, 300, 12));
  paths.push(...arrow(700, 300, 670, 300, 12));
  return paths;
};

const sceneBestAge: SceneFn = () => {
  const paths: string[] = [];
  paths.push(rrect(180, 380, 640, 60, 12));
  for (let i = 0; i < 14; i++) {
    paths.push(rrect(200 + i * 44, 395, 32, 30, 4));
  }
  paths.push(rrect(420, 460, 160, 30, 8));
  for (let i = 0; i < 30; i++) {
    const x = 240 + (i % 6) * 100 + (Math.floor(i / 6) % 2) * 50;
    const y = 80 + Math.floor(i / 6) * 50;
    paths.push(rrect(x, y, 60, 26, 6));
  }
  paths.push(...arrow(500, 90, 500, 360, 18));
  return paths;
};

const sceneWorstAge: SceneFn = () => {
  const paths: string[] = [];
  paths.push(line(120, 480, 880, 480));
  const heights = [200, 160, 130, 110, 90, 70, 55];
  for (let i = 0; i < heights.length; i++) {
    const x = 160 + i * 100;
    paths.push(rrect(x, 480 - heights[i], 70, heights[i], 6));
  }
  for (let i = 0; i < 3; i++) {
    const cx = 700 + i * 70;
    paths.push(...person(cx, 470, 0.8));
  }
  paths.push(...arrow(870, 200, 870, 460, 16));
  return paths;
};

const sceneKeyPointTitle: SceneFn = (params) => {
  const paths: string[] = [];
  const n = typeof params?.n === "number" ? params.n : 0;
  const cx = 320;
  const cy = STAGE_H / 2;
  if (n > 0 && n < 10) {
    paths.push(...bigDigit(n, cx, cy, 1));
  } else {
    paths.push(star(cx, cy, 110));
  }
  paths.push(rrect(500, 230, 420, 140, 22));
  paths.push(line(530, 280, 890, 280));
  paths.push(line(530, 320, 850, 320));
  paths.push(line(530, 340, 810, 340));
  paths.push(rrect(80, 80, 60, 60, 12));
  paths.push(rrect(860, 460, 60, 60, 12));
  return paths;
};

const sceneAgileFlow: SceneFn = () => {
  const paths: string[] = [];
  const labels = 6;
  const startX = 110;
  const endX = 890;
  const gap = (endX - startX) / (labels - 1);
  const y = STAGE_H / 2;
  for (let i = 0; i < labels; i++) {
    const x = startX + i * gap;
    paths.push(rrect(x - 50, y - 40, 100, 80, 14));
    paths.push(line(x - 30, y - 20, x + 30, y - 20));
    paths.push(line(x - 30, y, x + 20, y));
    paths.push(line(x - 30, y + 20, x + 30, y + 20));
  }
  for (let i = 0; i < labels - 1; i++) {
    const x1 = startX + i * gap + 50;
    const x2 = startX + (i + 1) * gap - 50;
    paths.push(...arrow(x1, y, x2, y, 14));
  }
  return paths;
};

const sceneBottleneck: SceneFn = () => {
  const paths: string[] = [];
  const y = STAGE_H / 2;
  paths.push(rrect(80, y - 40, 80, 80, 14));
  paths.push(rrect(220, y - 40, 80, 80, 14));
  paths.push(rrect(360, y - 60, 120, 120, 16));
  paths.push(rrect(540, y - 40, 80, 80, 14));
  paths.push(rrect(680, y - 40, 80, 80, 14));
  paths.push(rrect(820, y - 40, 80, 80, 14));
  paths.push(...arrow(160, y, 220, y, 14));
  paths.push(...arrow(300, y, 360, y, 14));
  paths.push(...arrow(480, y, 540, y, 14));
  paths.push(...arrow(620, y, 680, y, 14));
  paths.push(...arrow(760, y, 820, y, 14));
  paths.push(circ(420, y, 28));
  paths.push(line(420, y - 28, 420, y - 60));
  paths.push(line(420, y - 30, 420, y - 50));
  paths.push(line(400, y - 56, 440, y - 56));
  paths.push(wave(370, y + 80, 470, 10, 4, 30));
  return paths;
};

const sceneNexTeam: SceneFn = () => {
  const paths: string[] = [];
  const cx = STAGE_W / 2;
  const cy = STAGE_H / 2;
  paths.push(circ(cx - 100, cy - 40, 150));
  paths.push(circ(cx + 100, cy - 40, 150));
  paths.push(circ(cx, cy + 90, 150));
  paths.push(...person(cx - 180, cy - 100, 0.6));
  paths.push(...person(cx + 180, cy - 100, 0.6));
  paths.push(...person(cx, cy + 180, 0.6));
  paths.push(rrect(cx - 60, cy - 30, 120, 60, 12));
  paths.push(line(cx - 40, cy - 10, cx + 40, cy - 10));
  paths.push(line(cx - 40, cy + 10, cx + 30, cy + 10));
  return paths;
};

const sceneNexEcho: SceneFn = () => {
  const paths: string[] = [];
  const cx = STAGE_W / 2;
  const cy = STAGE_H / 2;
  paths.push(circ(cx, cy, 200));
  paths.push(circ(cx, cy, 160));
  paths.push(circ(cx, cy, 120));
  paths.push(...person(cx, cy + 30, 0.9));
  paths.push(rrect(cx - 60, cy - 250, 120, 50, 12));
  paths.push(rrect(cx + 200, cy - 30, 120, 50, 12));
  paths.push(rrect(cx - 60, cy + 200, 120, 50, 12));
  paths.push(rrect(cx - 320, cy - 30, 120, 50, 12));
  paths.push(arrowHead(cx + 50, cy - 250, cx + 260, cy - 30, 14));
  paths.push(arrowHead(cx + 260, cy + 20, cx + 60, cy + 200, 14));
  paths.push(arrowHead(cx - 60, cy + 200, cx - 260, cy + 20, 14));
  paths.push(arrowHead(cx - 260, cy - 30, cx - 60, cy - 250, 14));
  return paths;
};

const sceneMostManyFastGood: SceneFn = () => {
  const paths: string[] = [];
  const cx = STAGE_W / 2;
  const cy = STAGE_H / 2;
  paths.push(line(cx, cy - 220, cx, cy + 220));
  paths.push(line(cx - 360, cy, cx + 360, cy));
  paths.push(rrect(cx - 320, cy - 200, 280, 160, 18));
  paths.push(rrect(cx + 40, cy - 200, 280, 160, 18));
  paths.push(rrect(cx - 320, cy + 40, 280, 160, 18));
  paths.push(rrect(cx + 40, cy + 40, 280, 160, 18));
  paths.push(star(cx - 180, cy - 120, 30));
  paths.push(star(cx + 180, cy - 120, 30));
  paths.push(star(cx - 180, cy + 120, 30));
  paths.push(line(cx + 80, cy + 90, cx + 280, cy + 160));
  paths.push(line(cx + 280, cy + 90, cx + 80, cy + 160));
  return paths;
};

const sceneRulesMess: SceneFn = (_, rng) => {
  const paths: string[] = [];
  const cx = STAGE_W / 2;
  const cy = STAGE_H / 2;
  paths.push(rrect(cx - 130, cy - 80, 260, 160, 16));
  paths.push(line(cx - 100, cy - 50, cx + 100, cy - 50));
  paths.push(line(cx - 100, cy - 20, cx + 80, cy - 20));
  paths.push(line(cx - 100, cy + 10, cx + 100, cy + 10));
  paths.push(line(cx - 100, cy + 40, cx + 60, cy + 40));
  for (let i = 0; i < 14; i++) {
    const a = (i / 14) * Math.PI * 2 + rng() * 0.3;
    const r1 = 180 + rng() * 30;
    const r2 = 230 + rng() * 50;
    const x1 = cx + Math.cos(a) * r1;
    const y1 = cy + Math.sin(a) * r1 * 0.65;
    const x2 = cx + Math.cos(a) * r2;
    const y2 = cy + Math.sin(a) * r2 * 0.65;
    paths.push(rrect(x2 - 35, y2 - 18, 70, 36, 8));
    const offX = Math.cos(a + rng() - 0.5) * (40 + rng() * 50);
    const offY = Math.sin(a + rng() - 0.5) * (40 + rng() * 50);
    paths.push(polyline([
      [x1, y1],
      [(x1 + x2) / 2 + offX, (y1 + y2) / 2 + offY],
      [x2, y2],
    ]));
  }
  return paths;
};

const sceneReadCode: SceneFn = () => {
  const paths: string[] = [];
  paths.push(rrect(180, 140, 460, 320, 18));
  paths.push(line(410, 140, 410, 460));
  for (let i = 0; i < 8; i++) {
    paths.push(line(210, 180 + i * 30, 390, 180 + i * 30));
    paths.push(line(430, 180 + i * 30, 610, 180 + i * 30));
  }
  paths.push(circ(740, 230, 80));
  paths.push(circ(740, 230, 60));
  paths.push(line(800, 290, 880, 380));
  paths.push(line(810, 280, 890, 370));
  paths.push(circ(770, 480, 24));
  paths.push(circ(770, 480, 8));
  paths.push(line(770, 510, 770, 526));
  return paths;
};

const sceneRightTool: SceneFn = () => {
  const paths: string[] = [];
  paths.push(rrect(140, 200, 360, 240, 16));
  paths.push(line(140, 250, 500, 250));
  paths.push(rrect(220, 170, 100, 40, 10));
  paths.push(rrect(180, 280, 60, 60, 8));
  paths.push(rrect(260, 280, 60, 60, 8));
  paths.push(rrect(340, 280, 60, 60, 8));
  paths.push(rrect(420, 280, 60, 60, 8));
  paths.push(rrect(180, 360, 60, 60, 8));
  paths.push(rrect(260, 360, 60, 60, 8));
  paths.push(...arrow(520, 320, 660, 320, 18));
  paths.push(rrect(680, 200, 200, 60, 12));
  paths.push(rrect(680, 280, 200, 60, 12));
  paths.push(rrect(680, 360, 200, 60, 12));
  paths.push(polyline([[700, 230], [720, 250], [760, 210]]));
  paths.push(polyline([[700, 310], [720, 330], [760, 290]]));
  paths.push(polyline([[700, 390], [720, 410], [760, 370]]));
  return paths;
};

const sceneConceptLLM: SceneFn = () => {
  const paths: string[] = [];
  const cx = STAGE_W / 2;
  const cy = STAGE_H / 2;
  paths.push(...brain(cx, cy, 1.4));
  paths.push(rrect(cx - 80, cy + 130, 160, 50, 14));
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    const x = cx + Math.cos(a) * 200;
    const y = cy + Math.sin(a) * 200;
    paths.push(circ(x, y, 8));
    paths.push(...dashed(cx + Math.cos(a) * 110, cy + Math.sin(a) * 100, x, y, 10, 8));
  }
  return paths;
};

const sceneConceptAgent: SceneFn = () => {
  const paths: string[] = [];
  const cx = STAGE_W / 2;
  const cy = STAGE_H / 2;
  paths.push(circ(cx, cy, 180));
  paths.push(rrect(cx - 80, cy - 200, 160, 60, 14));
  paths.push(rrect(cx + 150, cy - 30, 160, 60, 14));
  paths.push(rrect(cx - 80, cy + 140, 160, 60, 14));
  paths.push(rrect(cx - 310, cy - 30, 160, 60, 14));
  paths.push(arrowHead(cx + 50, cy - 170, cx + 180, cy - 40, 14));
  paths.push(arrowHead(cx + 180, cy + 40, cx + 50, cy + 170, 14));
  paths.push(arrowHead(cx - 50, cy + 170, cx - 180, cy + 40, 14));
  paths.push(arrowHead(cx - 180, cy - 40, cx - 50, cy - 170, 14));
  paths.push(line(cx - 24, cy - 8, cx + 24, cy - 8));
  paths.push(line(cx - 24, cy + 8, cx + 24, cy + 8));
  return paths;
};

const sceneConceptTools: SceneFn = () => {
  const paths: string[] = [];
  paths.push(rrect(80, 160, 360, 280, 16));
  paths.push(line(80, 200, 440, 200));
  paths.push(circ(108, 180, 6));
  paths.push(circ(126, 180, 6));
  paths.push(circ(144, 180, 6));
  for (let i = 0; i < 4; i++) {
    const y = 230 + i * 50;
    paths.push(line(110, y, 200, y));
    paths.push(line(220, y, 330, y));
    paths.push(line(350, y, 410, y));
  }
  paths.push(rrect(560, 160, 360, 280, 16));
  paths.push(line(580, 200, 900, 200));
  for (let i = 0; i < 4; i++) {
    const y = 240 + i * 50;
    paths.push(rrect(580, y, 60, 30, 6));
    paths.push(line(660, y + 15, 760, y + 15));
    paths.push(rrect(780, y, 100, 30, 6));
  }
  paths.push(...arrow(440, 300, 560, 300, 18));
  return paths;
};

const sceneConceptMCP: SceneFn = () => {
  const paths: string[] = [];
  paths.push(rrect(110, 220, 240, 160, 16));
  paths.push(line(150, 260, 320, 260));
  paths.push(line(150, 290, 320, 290));
  paths.push(line(150, 320, 280, 320));
  paths.push(rrect(640, 130, 250, 110, 12));
  paths.push(rrect(640, 260, 250, 110, 12));
  paths.push(rrect(640, 390, 250, 110, 12));
  paths.push(line(670, 170, 870, 170));
  paths.push(line(670, 200, 830, 200));
  paths.push(line(670, 300, 870, 300));
  paths.push(line(670, 330, 830, 330));
  paths.push(line(670, 430, 870, 430));
  paths.push(line(670, 460, 830, 460));
  paths.push(...arrow(360, 280, 630, 180, 14));
  paths.push(...arrow(360, 300, 630, 310, 14));
  paths.push(...arrow(360, 320, 630, 440, 14));
  return paths;
};

const sceneConceptRulesSkills: SceneFn = () => {
  const paths: string[] = [];
  paths.push(rrect(140, 110, 720, 380, 22));
  paths.push(line(140, 170, 860, 170));
  paths.push(rrect(170, 200, 660, 80, 12));
  paths.push(rrect(170, 300, 660, 80, 12));
  paths.push(line(190, 230, 800, 230));
  paths.push(line(190, 250, 760, 250));
  paths.push(line(190, 330, 800, 330));
  paths.push(line(190, 350, 760, 350));
  paths.push(rrect(170, 400, 320, 60, 12));
  paths.push(rrect(510, 400, 320, 60, 12));
  paths.push(line(200, 430, 470, 430));
  paths.push(line(540, 430, 800, 430));
  return paths;
};

const sceneConceptHarness: SceneFn = () => {
  const paths: string[] = [];
  paths.push(rrect(220, 140, 560, 320, 20));
  paths.push(line(500, 140, 500, 460));
  for (let i = 0; i < 6; i++) {
    paths.push(line(250, 180 + i * 44, 480, 180 + i * 44));
    paths.push(line(520, 180 + i * 44, 750, 180 + i * 44));
  }
  paths.push(rrect(380, 460, 240, 40, 10));
  paths.push(circ(160, 300, 32));
  paths.push(circ(840, 300, 32));
  paths.push(line(120, 300, 188, 300));
  paths.push(line(812, 300, 880, 300));
  return paths;
};

const sceneFormula: SceneFn = () => {
  const paths: string[] = [];
  paths.push(rrect(70, 240, 200, 120, 18));
  paths.push(line(290, 300, 330, 300));
  paths.push(line(340, 290, 380, 310));
  paths.push(line(340, 310, 380, 290));
  paths.push(rrect(400, 240, 200, 120, 18));
  paths.push(line(620, 290, 660, 290));
  paths.push(line(620, 310, 660, 310));
  paths.push(rrect(680, 240, 250, 120, 18));
  paths.push(line(100, 280, 240, 280));
  paths.push(line(100, 310, 200, 310));
  paths.push(line(430, 280, 570, 280));
  paths.push(line(430, 310, 530, 310));
  paths.push(line(710, 280, 900, 280));
  paths.push(line(710, 310, 870, 310));
  paths.push(star(160, 130, 26));
  paths.push(star(820, 130, 26));
  return paths;
};

const sceneBusyAI: SceneFn = () => {
  const paths: string[] = [];
  paths.push(...gear(280, 290, 90, 10));
  paths.push(...gear(450, 280, 60, 8));
  paths.push(...gear(580, 380, 70, 8));
  paths.push(...gear(720, 240, 80, 10));
  paths.push(rrect(80, 460, 840, 60, 12));
  paths.push(rrect(80, 460, 840, 60, 12));
  paths.push(line(160, 490, 880, 490));
  for (let i = 0; i < 12; i++) {
    paths.push(line(120 + i * 60, 470, 120 + i * 60, 510));
  }
  paths.push(star(80, 130, 22));
  paths.push(star(900, 130, 22));
  return paths;
};

const sceneClosedLoopIntro: SceneFn = () => {
  const paths: string[] = [];
  paths.push(line(120, 240, 360, 240));
  paths.push(arrowHead(120, 240, 360, 240, 16));
  paths.push(rrect(390, 200, 100, 80, 10));
  paths.push(...arrow(500, 240, 620, 240, 18));
  paths.push(circ(770, 300, 130));
  paths.push(`M 770 170 a 130 130 0 0 1 130 130`);
  paths.push(`M 770 430 a 130 130 0 0 1 -130 -130`);
  paths.push(arrowHead(890, 290, 902, 305, 12));
  paths.push(arrowHead(652, 305, 640, 285, 12));
  paths.push(line(750, 290, 790, 290));
  paths.push(line(760, 310, 780, 310));
  paths.push(rrect(170, 450, 160, 60, 14));
  paths.push(rrect(700, 450, 160, 60, 14));
  return paths;
};

const sceneClosedLoopManual: SceneFn = () => {
  const paths: string[] = [];
  const y = STAGE_H / 2;
  paths.push(rrect(80, y - 40, 120, 80, 14));
  paths.push(...person(280, y, 0.6));
  paths.push(rrect(390, y - 40, 120, 80, 14));
  paths.push(...person(580, y, 0.6));
  paths.push(rrect(690, y - 40, 120, 80, 14));
  paths.push(...arrow(200, y, 250, y, 12));
  paths.push(...arrow(300, y, 390, y, 12));
  paths.push(...arrow(510, y, 550, y, 12));
  paths.push(...arrow(600, y, 690, y, 12));
  paths.push(...arrow(810, y, 880, y, 12));
  paths.push(`M 280 ${y - 60} a 40 30 0 0 0 0 -40`);
  paths.push(circ(580, y - 90, 20));
  paths.push(line(572, y - 96, 588, y - 84));
  paths.push(line(572, y - 84, 588, y - 96));
  return paths;
};

const sceneClosedLoopAuto: SceneFn = () => {
  const paths: string[] = [];
  const cx = STAGE_W / 2;
  const cy = STAGE_H / 2;
  paths.push(circ(cx, cy, 170));
  paths.push(circ(cx, cy, 140));
  paths.push(rrect(cx - 80, cy - 240, 160, 60, 14));
  paths.push(rrect(cx + 180, cy - 30, 160, 60, 14));
  paths.push(rrect(cx - 80, cy + 180, 160, 60, 14));
  paths.push(rrect(cx - 340, cy - 30, 160, 60, 14));
  paths.push(arrowHead(cx + 60, cy - 200, cx + 210, cy - 30, 14));
  paths.push(arrowHead(cx + 210, cy + 30, cx + 60, cy + 200, 14));
  paths.push(arrowHead(cx - 60, cy + 200, cx - 210, cy + 30, 14));
  paths.push(arrowHead(cx - 210, cy - 30, cx - 60, cy - 200, 14));
  paths.push(rrect(cx - 56, cy - 30, 112, 60, 10));
  paths.push(line(cx - 30, cy - 8, cx + 30, cy - 8));
  paths.push(line(cx - 30, cy + 8, cx + 20, cy + 8));
  return paths;
};

const sceneSingleThread: SceneFn = () => {
  const paths: string[] = [];
  const y = STAGE_H / 2;
  paths.push(line(80, y, 920, y));
  paths.push(arrowHead(80, y, 920, y, 22));
  for (let i = 0; i < 12; i++) {
    const x = 110 + i * 70;
    paths.push(circ(x, y, 12));
  }
  paths.push(rrect(420, y - 130, 160, 60, 12));
  paths.push(rrect(420, y + 70, 160, 60, 12));
  paths.push(line(500, y - 70, 500, y - 25));
  paths.push(line(500, y + 25, 500, y + 70));
  return paths;
};

const sceneMultiAgent: SceneFn = () => {
  const paths: string[] = [];
  const cx = STAGE_W / 2;
  const cy = STAGE_H / 2;
  paths.push(...person(cx, cy + 60, 1.1));
  const targets: [number, number][] = [
    [cx - 320, cy - 140],
    [cx - 120, cy - 200],
    [cx + 80, cy - 200],
    [cx + 280, cy - 140],
    [cx - 280, cy + 130],
    [cx + 240, cy + 130],
  ];
  for (const [x, y] of targets) {
    paths.push(rrect(x - 60, y - 40, 120, 80, 14));
    paths.push(circ(x, y - 10, 12));
    paths.push(line(x - 28, y + 14, x + 28, y + 14));
    paths.push(...arrow(cx, cy - 20, x, y - 40, 10));
  }
  return paths;
};

const sceneRoleStack: SceneFn = () => {
  const paths: string[] = [];
  const cx = STAGE_W / 2;
  paths.push(...person(cx, 440, 1.5));
  paths.push(rrect(cx - 240, 100, 140, 50, 14));
  paths.push(rrect(cx - 70, 100, 140, 50, 14));
  paths.push(rrect(cx + 100, 100, 140, 50, 14));
  paths.push(...arrow(cx - 170, 160, cx, 280, 12));
  paths.push(...arrow(cx, 160, cx, 280, 12));
  paths.push(...arrow(cx + 170, 160, cx, 280, 12));
  paths.push(circ(cx - 80, 330, 18));
  paths.push(circ(cx + 80, 330, 18));
  paths.push(circ(cx, 380, 18));
  return paths;
};

const sceneSmartCage: SceneFn = () => {
  const paths: string[] = [];
  paths.push(...person(260, 460, 1.2));
  paths.push(rrect(140, 140, 240, 340, 18));
  for (let i = 0; i < 5; i++) {
    paths.push(line(180 + i * 50, 140, 180 + i * 50, 480));
  }
  paths.push(...person(720, 440, 1.2));
  paths.push(rrect(680, 360, 80, 12, 4));
  paths.push(line(720, 360, 720, 340));
  paths.push(circ(720, 320, 24));
  paths.push(...dashed(380, 380, 660, 380, 10, 10));
  return paths;
};

const sceneOutsider: SceneFn = () => {
  const paths: string[] = [];
  const cx = STAGE_W / 2;
  const cy = STAGE_H / 2;
  paths.push(circ(cx, cy, 220));
  for (let i = 0; i < 7; i++) {
    const a = (i / 7) * Math.PI * 2;
    const x = cx + Math.cos(a) * 220;
    const y = cy + Math.sin(a) * 220;
    paths.push(...person(x, y + 30, 0.7));
  }
  paths.push(...person(100, 450, 1.1));
  paths.push(...dashed(170, 380, 380, 280, 10, 10));
  return paths;
};

const sceneBsArchitecture: SceneFn = () => {
  const paths: string[] = [];
  paths.push(rrect(100, 180, 260, 240, 16));
  paths.push(line(100, 220, 360, 220));
  paths.push(circ(124, 200, 6));
  paths.push(circ(140, 200, 6));
  paths.push(circ(156, 200, 6));
  paths.push(line(130, 260, 330, 260));
  paths.push(rrect(120, 280, 220, 30, 6));
  paths.push(line(130, 340, 330, 340));
  paths.push(line(130, 360, 290, 360));
  paths.push(line(130, 380, 320, 380));
  paths.push(rrect(640, 180, 260, 240, 16));
  paths.push(line(640, 220, 900, 220));
  paths.push(circ(872, 200, 8));
  paths.push(rrect(660, 250, 220, 40, 8));
  paths.push(rrect(660, 300, 220, 40, 8));
  paths.push(rrect(660, 350, 220, 40, 8));
  paths.push(...arrow(360, 280, 640, 280, 18));
  paths.push(...arrow(640, 340, 360, 340, 18));
  paths.push(rrect(420, 250, 160, 50, 12));
  paths.push(rrect(420, 320, 160, 50, 12));
  return paths;
};

const sceneSseXml: SceneFn = () => {
  const paths: string[] = [];
  paths.push(rrect(100, 140, 800, 320, 16));
  paths.push(line(100, 184, 900, 184));
  for (let i = 0; i < 7; i++) {
    paths.push(line(130, 220 + i * 30, 880, 220 + i * 30));
  }
  paths.push(rrect(160, 200, 80, 30, 6));
  paths.push(rrect(280, 230, 110, 30, 6));
  paths.push(rrect(160, 290, 100, 30, 6));
  paths.push(rrect(490, 320, 130, 30, 6));
  paths.push(rrect(160, 380, 120, 30, 6));
  paths.push(rrect(660, 410, 120, 30, 6));
  paths.push(line(110, 175, 130, 155));
  paths.push(line(150, 175, 170, 155));
  paths.push(line(110, 165, 170, 165));
  return paths;
};

const sceneSseWs: SceneFn = () => {
  const paths: string[] = [];
  paths.push(rrect(110, 140, 780, 80, 14));
  paths.push(rrect(110, 260, 780, 80, 14));
  paths.push(rrect(110, 380, 780, 80, 14));
  paths.push(line(160, 180, 870, 180));
  for (let i = 0; i < 18; i++) {
    paths.push(line(170 + i * 40, 165, 190 + i * 40, 195));
  }
  paths.push(wave(130, 300, 880, 14, 14, 80));
  paths.push(arrowHead(870, 305, 880, 300, 12));
  paths.push(wave(130, 420, 880, 14, 14, 80));
  paths.push(arrowHead(150, 415, 130, 420, 12));
  paths.push(rrect(100, 110, 90, 24, 6));
  paths.push(rrect(100, 230, 90, 24, 6));
  paths.push(rrect(100, 350, 90, 24, 6));
  return paths;
};

const scenePhasedReality: SceneFn = () => {
  const paths: string[] = [];
  paths.push(line(80, 480, 920, 480));
  for (let i = 0; i < 5; i++) {
    const x = 120 + i * 160;
    const h = 60 + i * 40;
    paths.push(rrect(x, 480 - h, 130, h, 0));
    paths.push(rrect(x + 20, 480 - h - 30, 90, 30, 8));
  }
  paths.push(...arrow(110, 470, 900, 130, 18));
  paths.push(star(880, 110, 22));
  return paths;
};

const sceneBulletTrain: SceneFn = () => {
  const paths: string[] = [];
  const y = STAGE_H / 2;
  paths.push(polyline([
    [80, y - 30],
    [550, y - 30],
    [620, y - 50],
    [820, y - 50],
    [880, y - 20],
    [880, y + 20],
    [820, y + 50],
    [620, y + 50],
    [550, y + 30],
    [80, y + 30],
    [80, y - 30],
  ]));
  paths.push(rrect(120, y - 22, 80, 44, 6));
  paths.push(rrect(220, y - 22, 80, 44, 6));
  paths.push(rrect(320, y - 22, 80, 44, 6));
  paths.push(rrect(420, y - 22, 80, 44, 6));
  paths.push(circ(180, y + 50, 22));
  paths.push(circ(360, y + 50, 22));
  paths.push(circ(540, y + 50, 22));
  paths.push(circ(740, y + 50, 22));
  paths.push(...dashed(20, y - 90, 80, y - 30, 12, 10));
  paths.push(...dashed(20, y + 90, 80, y + 30, 12, 10));
  return paths;
};

const sceneSlowToken: SceneFn = () => {
  const paths: string[] = [];
  const y = STAGE_H / 2;
  paths.push(line(80, y, 920, y));
  for (let i = 0; i < 5; i++) {
    const x = 120 + i * 60;
    paths.push(circ(x, y, 18));
  }
  for (let i = 5; i < 12; i++) {
    const x = 420 + (i - 5) * 70;
    paths.push(circ(x, y, 14 - (i - 5) * 1));
  }
  paths.push(circ(120, y, 26));
  paths.push(circ(180, y, 22));
  paths.push(rrect(80, y - 100, 200, 50, 12));
  paths.push(rrect(720, y - 100, 200, 50, 12));
  paths.push(...arrow(170, y - 50, 170, y - 20, 12));
  paths.push(...arrow(820, y - 50, 820, y - 20, 12));
  paths.push(line(420, y + 90, 920, y + 90));
  paths.push(arrowHead(900, y + 90, 920, y + 90, 14));
  return paths;
};

const scenePrePostChat: SceneFn = () => {
  const paths: string[] = [];
  const y = STAGE_H / 2;
  paths.push(line(80, y, 920, y));
  paths.push(rrect(120, y - 40, 140, 80, 14));
  paths.push(rrect(740, y - 40, 140, 80, 14));
  paths.push(rrect(330, y - 50, 340, 100, 16));
  paths.push(line(360, y - 20, 640, y - 20));
  paths.push(line(360, y + 10, 640, y + 10));
  paths.push(line(360, y + 30, 580, y + 30));
  paths.push(...arrow(260, y, 330, y, 14));
  paths.push(...arrow(670, y, 740, y, 14));
  paths.push(rrect(80, y + 110, 200, 60, 12));
  paths.push(rrect(720, y + 110, 200, 60, 12));
  paths.push(line(100, y + 140, 270, y + 140));
  paths.push(line(740, y + 140, 900, y + 140));
  paths.push(line(180, y + 40, 180, y + 110));
  paths.push(line(820, y + 40, 820, y + 110));
  return paths;
};

const sceneStatusBar: SceneFn = () => {
  const paths: string[] = [];
  const y = STAGE_H / 2 - 30;
  paths.push(rrect(100, y, 800, 70, 18));
  paths.push(rrect(118, y + 16, 480, 38, 12));
  for (let i = 0; i < 5; i++) {
    const x = 600 + i * 20;
    paths.push(circ(x, y + 34, 4));
  }
  paths.push(line(120, y + 110, 360, y + 110));
  paths.push(line(380, y + 110, 580, y + 110));
  paths.push(line(600, y + 110, 800, y + 110));
  paths.push(line(120, y + 140, 760, y + 140));
  paths.push(rrect(720, y + 14, 160, 42, 12));
  paths.push(circ(740, y + 34, 6));
  paths.push(line(750, y + 34, 870, y + 34));
  return paths;
};

const sceneOptMix: SceneFn = () => {
  const paths: string[] = [];
  const cx = STAGE_W / 2;
  const cy = STAGE_H / 2;
  paths.push(spiral(cx, cy, 30, 230, 3, 120));
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    const x = cx + Math.cos(a) * 270;
    const y = cy + Math.sin(a) * 220;
    paths.push(rrect(x - 70, y - 22, 140, 44, 12));
  }
  return paths;
};

const sceneAgileEnd: SceneFn = () => {
  const paths: string[] = [];
  paths.push(...person(220, 440, 1.2));
  paths.push(...person(500, 440, 1.2));
  paths.push(...person(780, 440, 1.2));
  paths.push(rrect(160, 100, 680, 220, 22));
  paths.push(line(180, 150, 820, 150));
  paths.push(rrect(200, 180, 180, 110, 14));
  paths.push(rrect(410, 180, 180, 110, 14));
  paths.push(rrect(620, 180, 180, 110, 14));
  paths.push(...arrow(220, 360, 290, 330, 12));
  paths.push(...arrow(500, 360, 500, 330, 12));
  paths.push(...arrow(780, 360, 710, 330, 12));
  return paths;
};

const sceneVerticalDomain: SceneFn = () => {
  const paths: string[] = [];
  paths.push(polyline([
    [80, 480],
    [220, 320],
    [340, 380],
    [460, 240],
    [600, 320],
    [720, 200],
    [860, 320],
    [940, 280],
    [940, 480],
    [80, 480],
  ]));
  paths.push(star(720, 170, 26));
  paths.push(circ(220, 300, 22));
  paths.push(circ(460, 220, 22));
  paths.push(circ(600, 300, 18));
  paths.push(circ(860, 300, 18));
  paths.push(rrect(640, 100, 160, 50, 12));
  paths.push(...arrow(720, 150, 720, 175, 10));
  paths.push(line(720, 195, 720, 240));
  return paths;
};

const sceneAgentDevSkills: SceneFn = () => {
  const paths: string[] = [];
  paths.push(rrect(100, 140, 360, 320, 18));
  paths.push(line(100, 184, 460, 184));
  paths.push(line(120, 162, 220, 162));
  for (let i = 0; i < 4; i++) {
    paths.push(rrect(120, 210 + i * 60, 320, 40, 10));
    paths.push(line(140, 230 + i * 60, 250, 230 + i * 60));
    paths.push(line(270, 230 + i * 60, 420, 230 + i * 60));
  }
  paths.push(rrect(540, 140, 360, 320, 18));
  paths.push(line(540, 184, 900, 184));
  paths.push(line(560, 162, 660, 162));
  for (let i = 0; i < 4; i++) {
    paths.push(rrect(560, 210 + i * 60, 320, 40, 10));
    paths.push(line(580, 230 + i * 60, 690, 230 + i * 60));
    paths.push(line(710, 230 + i * 60, 860, 230 + i * 60));
  }
  paths.push(...arrow(460, 300, 540, 300, 14));
  paths.push(...arrow(540, 320, 460, 320, 14));
  return paths;
};

const sceneUserIssues: SceneFn = (_, rng) => {
  const paths: string[] = [];
  for (let i = 0; i < 10; i++) {
    const cx = 120 + (i % 5) * 180 + rng() * 30;
    const cy = 130 + Math.floor(i / 5) * 200 + rng() * 30;
    paths.push(ellipse(cx, cy, 36, 48));
    paths.push(circ(cx - 8, cy - 10, 4));
    paths.push(circ(cx + 8, cy - 10, 4));
    paths.push(line(cx - 36, cy - 8, cx - 18, cy - 16));
    paths.push(line(cx - 36, cy + 8, cx - 18, cy + 4));
    paths.push(line(cx + 36, cy - 8, cx + 18, cy - 16));
    paths.push(line(cx + 36, cy + 8, cx + 18, cy + 4));
    paths.push(line(cx - 14, cy + 50, cx - 22, cy + 68));
    paths.push(line(cx + 14, cy + 50, cx + 22, cy + 68));
  }
  return paths;
};

const sceneClosedLoopReminder: SceneFn = () => {
  const paths: string[] = [];
  const cx = STAGE_W / 2;
  const cy = STAGE_H / 2;
  paths.push(circ(cx, cy, 180));
  paths.push(circ(cx, cy, 150));
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * Math.PI * 2;
    const x1 = cx + Math.cos(a) * 180;
    const y1 = cy + Math.sin(a) * 180;
    const x2 = cx + Math.cos(a) * 230;
    const y2 = cy + Math.sin(a) * 230;
    paths.push(line(x1, y1, x2, y2));
  }
  paths.push(star(cx, cy, 70));
  return paths;
};

const sceneDiagnosticLog: SceneFn = () => {
  const paths: string[] = [];
  paths.push(rrect(180, 100, 480, 400, 20));
  paths.push(rrect(280, 80, 280, 40, 10));
  paths.push(line(200, 150, 640, 150));
  for (let i = 0; i < 9; i++) {
    paths.push(line(220, 190 + i * 30, 620, 190 + i * 30));
  }
  paths.push(rrect(700, 200, 200, 70, 12));
  paths.push(circ(740, 235, 14));
  paths.push(polyline([[734, 233], [740, 240], [752, 226]]));
  paths.push(line(770, 230, 870, 230));
  paths.push(line(770, 250, 850, 250));
  paths.push(...arrow(660, 230, 700, 230, 12));
  return paths;
};

const sceneAIResolves: SceneFn = () => {
  const paths: string[] = [];
  paths.push(rrect(100, 180, 240, 240, 16));
  for (let i = 0; i < 7; i++) {
    paths.push(line(130, 220 + i * 28, 320, 220 + i * 28));
  }
  paths.push(...arrow(340, 300, 460, 300, 16));
  paths.push(...brain(580, 300, 1.2));
  paths.push(...arrow(700, 300, 820, 300, 16));
  paths.push(rrect(840, 200, 110, 80, 14));
  paths.push(rrect(840, 300, 110, 80, 14));
  paths.push(line(860, 230, 940, 230));
  paths.push(line(860, 260, 920, 260));
  paths.push(line(860, 330, 940, 330));
  paths.push(line(860, 360, 920, 360));
  return paths;
};

const sceneNotAFrontend: SceneFn = () => {
  const paths: string[] = [];
  paths.push(...person(220, 460, 1.4));
  paths.push(line(80, 480, 820, 480));
  paths.push(line(80, 480, 80, 120));
  for (let i = 0; i < 4; i++) {
    paths.push(line(80, 480 - i * 90, 75, 480 - i * 90));
  }
  paths.push(polyline([
    [80, 460],
    [180, 420],
    [280, 380],
    [380, 310],
    [480, 280],
    [580, 220],
    [680, 200],
    [780, 150],
  ]));
  for (let i = 0; i < 8; i++) {
    const x = 80 + i * 100;
    const y = 460 - i * 35;
    paths.push(circ(x, y, 8));
  }
  paths.push(rrect(420, 90, 320, 60, 12));
  paths.push(...arrow(580, 150, 580, 200, 12));
  return paths;
};

const sceneCoreSkills: SceneFn = () => {
  const paths: string[] = [];
  paths.push(...person(500, 460, 1.6));
  const items: [number, number, string][] = [
    [160, 160, "C"],
    [320, 100, "D"],
    [500, 80, "E"],
    [680, 100, "F"],
    [840, 160, "G"],
    [160, 360, "H"],
    [840, 360, "I"],
  ];
  for (const [x, y] of items) {
    paths.push(rrect(x - 50, y - 30, 100, 60, 12));
    paths.push(...dashed(x, y + 30, 480, 320, 10, 10));
  }
  return paths;
};

const sceneLifecycle: SceneFn = () => {
  const paths: string[] = [];
  const y = STAGE_H / 2;
  const labels = 6;
  const startX = 100;
  const endX = 900;
  const gap = (endX - startX) / (labels - 1);
  for (let i = 0; i < labels; i++) {
    const x = startX + i * gap;
    paths.push(rrect(x - 55, y - 50, 110, 100, 14));
    paths.push(circ(x, y - 18, 18));
    paths.push(line(x - 30, y + 20, x + 30, y + 20));
  }
  for (let i = 0; i < labels - 1; i++) {
    const x1 = startX + i * gap + 55;
    const x2 = startX + (i + 1) * gap - 55;
    paths.push(...arrow(x1, y, x2, y, 12));
  }
  paths.push(rrect(180, y + 110, 640, 50, 14));
  paths.push(line(220, y + 135, 780, y + 135));
  return paths;
};

const sceneSelfAwareness: SceneFn = () => {
  const paths: string[] = [];
  const cx = STAGE_W / 2;
  paths.push(rrect(80, 150, 260, 110, 16));
  paths.push(rrect(370, 150, 260, 110, 16));
  paths.push(rrect(660, 150, 260, 110, 16));
  paths.push(circ(210, 205, 26));
  paths.push(line(200, 210, 200, 218));
  paths.push(line(195, 220, 215, 220));
  paths.push(circ(500, 205, 26));
  paths.push(line(490, 198, 510, 218));
  paths.push(line(490, 218, 510, 198));
  paths.push(circ(790, 205, 26));
  paths.push(polyline([[780, 198], [790, 210], [802, 196]]));
  paths.push(...person(cx, 460, 1.2));
  paths.push(...dashed(210, 260, 460, 380, 10, 8));
  paths.push(...dashed(500, 260, 500, 380, 10, 8));
  paths.push(...dashed(790, 260, 540, 380, 10, 8));
  return paths;
};

const sceneTodayYesterday: SceneFn = () => {
  const paths: string[] = [];
  paths.push(rrect(120, 200, 280, 220, 20));
  paths.push(rrect(600, 200, 280, 220, 20));
  paths.push(line(140, 250, 380, 250));
  paths.push(line(620, 250, 860, 250));
  for (let i = 0; i < 3; i++) {
    paths.push(line(140, 290 + i * 40, 380, 290 + i * 40));
  }
  for (let i = 0; i < 3; i++) {
    paths.push(line(620, 290 + i * 40, 860, 290 + i * 40));
  }
  paths.push(...arrow(400, 320, 600, 320, 18));
  paths.push(circ(500, 320, 36));
  paths.push(line(486, 305, 514, 333));
  paths.push(line(514, 305, 486, 333));
  paths.push(rrect(180, 130, 160, 50, 12));
  paths.push(rrect(660, 130, 160, 50, 12));
  return paths;
};

const sceneSlowAndFast: SceneFn = () => {
  const paths: string[] = [];
  const y = STAGE_H / 2;
  paths.push(line(80, y + 60, 920, y + 60));
  paths.push(ellipse(220, y, 80, 50));
  paths.push(circ(170, y - 10, 12));
  paths.push(line(160, y - 14, 152, y - 18));
  paths.push(circ(160, y + 40, 20));
  paths.push(circ(300, y + 40, 20));
  paths.push(ellipse(720, y - 10, 60, 40));
  paths.push(circ(770, y - 30, 20));
  paths.push(polyline([[790, y - 50], [800, y - 70], [810, y - 50]]));
  paths.push(line(760, y + 30, 730, y + 70));
  paths.push(line(800, y + 30, 820, y + 70));
  paths.push(...dashed(380, y, 660, y, 12, 12));
  paths.push(arrowHead(640, y, 660, y, 12));
  return paths;
};

const sceneFinale: SceneFn = () => {
  const paths: string[] = [];
  const cx = STAGE_W / 2;
  const cy = STAGE_H / 2;
  paths.push(circ(cx, cy, 160));
  paths.push(circ(cx, cy, 130));
  paths.push(circ(cx, cy, 100));
  for (let i = 0; i < 24; i++) {
    const a = (i / 24) * Math.PI * 2;
    const x1 = cx + Math.cos(a) * 180;
    const y1 = cy + Math.sin(a) * 180;
    const x2 = cx + Math.cos(a) * 240;
    const y2 = cy + Math.sin(a) * 240;
    paths.push(line(x1, y1, x2, y2));
  }
  paths.push(star(cx - 280, cy - 200, 26));
  paths.push(star(cx + 280, cy - 200, 26));
  paths.push(star(cx - 280, cy + 200, 26));
  paths.push(star(cx + 280, cy + 200, 26));
  paths.push(line(cx - 60, cy + 8, cx - 30, cy + 36));
  paths.push(line(cx - 30, cy + 36, cx + 60, cy - 18));
  return paths;
};

// ============================================================================
// Registry
// ============================================================================

const SCENE_FNS: Record<SceneKind, SceneFn> = {
  cover: sceneCover,
  introBadge: sceneIntroBadge,
  timeline: sceneTimeline,
  twoQuests: sceneTwoQuests,
  jobsSpeaker: sceneJobsSpeaker,
  jobsEnvelope: sceneJobsEnvelope,
  macSpeaks: sceneMacSpeaks,
  ttsAsrSplit: sceneTtsAsrSplit,
  rulesGrid: sceneRulesGrid,
  hmmStates: sceneHmmStates,
  vistaWindow: sceneVistaWindow,
  vistaMenu: sceneVistaMenu,
  siriPhone: sceneSiriPhone,
  intentSlot: sceneIntentSlot,
  carVoice: sceneCarVoice,
  word2vec: sceneWord2vec,
  vectorMath: sceneVectorMath,
  seq2seq: sceneSeq2seq,
  attention: sceneAttention,
  bert: sceneBert,
  chatgpt: sceneChatgpt,
  breakthrough: sceneBreakthrough,
  bestWorstIntro: sceneBestWorstIntro,
  bestAge: sceneBestAge,
  worstAge: sceneWorstAge,
  keyPointTitle: sceneKeyPointTitle,
  agileFlow: sceneAgileFlow,
  bottleneck: sceneBottleneck,
  nexTeam: sceneNexTeam,
  nexEcho: sceneNexEcho,
  mostManyFastGood: sceneMostManyFastGood,
  rulesMess: sceneRulesMess,
  readCode: sceneReadCode,
  rightTool: sceneRightTool,
  conceptLLM: sceneConceptLLM,
  conceptAgent: sceneConceptAgent,
  conceptTools: sceneConceptTools,
  conceptMCP: sceneConceptMCP,
  conceptRulesSkills: sceneConceptRulesSkills,
  conceptHarness: sceneConceptHarness,
  formula: sceneFormula,
  busyAI: sceneBusyAI,
  closedLoopIntro: sceneClosedLoopIntro,
  closedLoopManual: sceneClosedLoopManual,
  closedLoopAuto: sceneClosedLoopAuto,
  singleThread: sceneSingleThread,
  multiAgent: sceneMultiAgent,
  roleStack: sceneRoleStack,
  smartCage: sceneSmartCage,
  outsider: sceneOutsider,
  bsArchitecture: sceneBsArchitecture,
  sseXml: sceneSseXml,
  sseWs: sceneSseWs,
  phasedReality: scenePhasedReality,
  bulletTrain: sceneBulletTrain,
  slowToken: sceneSlowToken,
  prePostChat: scenePrePostChat,
  statusBar: sceneStatusBar,
  optMix: sceneOptMix,
  agileEnd: sceneAgileEnd,
  verticalDomain: sceneVerticalDomain,
  agentDevSkills: sceneAgentDevSkills,
  userIssues: sceneUserIssues,
  closedLoopReminder: sceneClosedLoopReminder,
  diagnosticLog: sceneDiagnosticLog,
  aiResolves: sceneAIResolves,
  notAFrontend: sceneNotAFrontend,
  coreSkills: sceneCoreSkills,
  lifecycle: sceneLifecycle,
  selfAwareness: sceneSelfAwareness,
  todayYesterday: sceneTodayYesterday,
  slowAndFast: sceneSlowAndFast,
  finale: sceneFinale,
};

export function getScenePaths(
  kind: SceneKind,
  params: SceneParams | undefined,
  seed: number
): string[] {
  const rng = mulberry32(seed);
  const fn = SCENE_FNS[kind] ?? sceneCover;
  return fn(params, rng);
}

// ============================================================================
// Path sampling (DOM-based)
// ============================================================================

let svgHost: SVGSVGElement | null = null;

function ensureSvgHost(): SVGSVGElement {
  if (svgHost && svgHost.isConnected) return svgHost;
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", "0");
  svg.setAttribute("height", "0");
  svg.style.position = "absolute";
  svg.style.left = "-9999px";
  svg.style.top = "-9999px";
  svg.style.pointerEvents = "none";
  document.body.appendChild(svg);
  svgHost = svg;
  return svg;
}

export function samplePathsToPoints(
  paths: string[],
  count: number
): ScenePoint[] {
  if (paths.length === 0 || count <= 0) return [];
  const host = ensureSvgHost();
  const pathEls: SVGPathElement[] = [];
  const lengths: number[] = [];
  let total = 0;
  for (const d of paths) {
    const p = document.createElementNS("http://www.w3.org/2000/svg", "path");
    p.setAttribute("d", d);
    host.appendChild(p);
    const len = p.getTotalLength();
    if (!isFinite(len) || len <= 0.0001) {
      host.removeChild(p);
      continue;
    }
    pathEls.push(p);
    lengths.push(len);
    total += len;
  }
  if (pathEls.length === 0 || total <= 0) {
    return [];
  }
  const out: ScenePoint[] = [];
  let assigned = 0;
  for (let i = 0; i < pathEls.length; i++) {
    const isLast = i === pathEls.length - 1;
    const share = isLast
      ? Math.max(0, count - assigned)
      : Math.max(1, Math.round((lengths[i] / total) * count));
    const path = pathEls[i];
    const len = lengths[i];
    for (let j = 0; j < share; j++) {
      const t = (j + 0.5) / share;
      const pt = path.getPointAtLength(t * len);
      out.push({ x: pt.x, y: pt.y });
    }
    assigned += share;
  }
  for (const el of pathEls) host.removeChild(el);
  if (out.length > count) out.length = count;
  while (out.length < count) {
    const ref = out[out.length % Math.max(1, out.length)] ?? { x: STAGE_W / 2, y: STAGE_H / 2 };
    out.push({ x: ref.x, y: ref.y });
  }
  return out;
}

export function getScenePoints(opts: {
  kind: SceneKind;
  params?: SceneParams;
  seed: number;
  count: number;
}): ScenePoint[] {
  const paths = getScenePaths(opts.kind, opts.params, opts.seed);
  return samplePathsToPoints(paths, opts.count);
}
