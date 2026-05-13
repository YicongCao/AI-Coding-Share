import speechRaw from "../../speech.txt?raw";
import type { SceneKind, SceneParams } from "./particle/sceneShapes";

export type SlideRenderMode = "particle" | "svg";

export type Slide = {
  globalIndex: number;
  paragraphIndex: number;
  sentenceIndex: number;
  text: string;
  sceneKind: SceneKind;
  sceneParams?: SceneParams;
  particleCount?: number;
  renderMode?: SlideRenderMode;
  svgSceneId?: string;
};

export type Paragraph = {
  raw: string;
  sentences: string[];
  slideRange: { start: number; end: number };
  isTitle: boolean;
};

type ScenePick =
  | SceneKind
  | { kind: SceneKind; params: SceneParams };

function parseParagraphs(raw: string): string[] {
  return raw
    .split(/\n+/)
    .map((line) => line.trim())
    .filter((line) => line.length > 0);
}

function splitByPeriod(text: string): string[] {
  const out: string[] = [];
  let buf = "";
  for (const ch of text) {
    buf += ch;
    if (ch === "。") {
      out.push(buf.trim());
      buf = "";
    }
  }
  if (buf.trim().length > 0) {
    out.push(buf.trim());
  }
  return out;
}

const rawParagraphs = parseParagraphs(speechRaw);

export const speechTitle = rawParagraphs[0] ?? "《AI Coding 反直觉的那些事》";

const SCENE_PLAN: ScenePick[][] = [
  [
    { kind: "introBadge", params: { speaker: "pixelcao" } },
  ],
  ["timeline"],
  ["twoQuests"],
  ["jobsSpeaker", "jobsEnvelope"],
  ["macSpeaks"],
  ["ttsAsrSplit", "rulesGrid", "hmmStates"],
  ["vistaWindow", "vistaMenu"],
  ["siriPhone", "intentSlot", "carVoice"],
  ["word2vec", "vectorMath", "seq2seq"],
  ["attention", "bert"],
  ["chatgpt", "breakthrough"],
  ["bestWorstIntro", "bestAge", "worstAge"],
  [
    { kind: "keyPointTitle", params: { n: 1, title: "敏捷不再敏捷" } },
    "agileFlow",
    "bottleneck",
  ],
  ["nexTeam", "nexEcho", "mostManyFastGood"],
  [
    { kind: "keyPointTitle", params: { n: 2, title: "不要盲目使用 Rules / Skills" } },
    "rulesMess",
    "readCode",
    "rightTool",
    "conceptLLM",
    "conceptAgent",
    "conceptTools",
    "conceptMCP",
    "conceptRulesSkills",
    "conceptHarness",
  ],
  [
    { kind: "keyPointTitle", params: { n: 3, title: "聪明人用 AI 反而更累" } },
    "formula",
    "busyAI",
    "closedLoopIntro",
    "closedLoopManual",
    "closedLoopAuto",
    "singleThread",
    "multiAgent",
    "roleStack",
    "smartCage",
  ],
  [
    "outsider",
    { kind: "keyPointTitle", params: { n: 4, title: "不要一步登天" } },
    "bsArchitecture",
    "sseXml",
    "sseWs",
    "phasedReality",
  ],
  [
    { kind: "keyPointTitle", params: { n: 5, title: "让 Agent 又快又爽" } },
    "bulletTrain",
    "slowToken",
    "prePostChat",
    "statusBar",
    "optMix",
    "agileEnd",
  ],
  ["verticalDomain"],
  [
    { kind: "keyPointTitle", params: { n: 7, title: "做不擅长的事" } },
    "agentDevSkills",
    "userIssues",
    "closedLoopReminder",
    "diagnosticLog",
    "aiResolves",
    "notAFrontend",
  ],
  [
    { kind: "keyPointTitle", params: { n: 8, title: "警示忠告" } },
    "coreSkills",
    "lifecycle",
    "selfAwareness",
    "todayYesterday",
    "slowAndFast",
    "finale",
  ],
];

function resolvePick(pick: ScenePick): { kind: SceneKind; params?: SceneParams } {
  if (typeof pick === "string") return { kind: pick };
  return { kind: pick.kind, params: pick.params };
}

const slides: Slide[] = [];
const paragraphs: Paragraph[] = [];

slides.push({
  globalIndex: 0,
  paragraphIndex: 0,
  sentenceIndex: 0,
  text: speechTitle,
  sceneKind: "cover",
  particleCount: 4500,
  renderMode: "svg",
  svgSceneId: "cover",
});

paragraphs.push({
  raw: speechTitle,
  sentences: [speechTitle],
  slideRange: { start: 0, end: 1 },
  isTitle: true,
});

const SVG_OVERRIDES: Record<number, string> = {
  1: "introBadge",
  2: "timeline",
  3: "twoQuests",
  4: "jobsSpeaker",
  5: "jobsEnvelope",
};

for (let pi = 1; pi < rawParagraphs.length; pi++) {
  const raw = rawParagraphs[pi];
  const sentences = splitByPeriod(raw);
  const planRow = SCENE_PLAN[pi - 1] ?? [];
  const start = slides.length;
  for (let si = 0; si < sentences.length; si++) {
    const pick = planRow[si] ?? planRow[planRow.length - 1] ?? "timeline";
    const { kind, params } = resolvePick(pick);
    const idx = slides.length;
    const svgId = SVG_OVERRIDES[idx];
    slides.push({
      globalIndex: idx,
      paragraphIndex: pi,
      sentenceIndex: si,
      text: sentences[si],
      sceneKind: kind,
      sceneParams: params,
      ...(svgId ? { renderMode: "svg" as const, svgSceneId: svgId } : {}),
    });
  }
  const end = slides.length;
  paragraphs.push({
    raw,
    sentences,
    slideRange: { start, end },
    isTitle: false,
  });
}

export const allSlides: Slide[] = slides;
export const allParagraphs: Paragraph[] = paragraphs;
export const totalSlides: number = slides.length;
