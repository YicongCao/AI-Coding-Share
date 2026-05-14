import speechRaw from "../../speech.txt?raw";

export type Slide = {
  globalIndex: number;
  paragraphIndex: number;
  sentenceIndex: number;
  text: string;
  svgSceneId: string;
};

export type Paragraph = {
  raw: string;
  sentences: string[];
  slideRange: { start: number; end: number };
  isTitle: boolean;
};

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

const SCENE_PLAN: string[][] = [
  ["introBadge"],
  ["timeline"],
  ["twoQuests"],
  ["jobsSpeaker"],
  ["jobsEnvelope"],
  ["ttsAsrSplit", "rulesGrid", "hmmStates"],
  ["vistaWindow", "vistaMenu"],
  ["siriPhone", "intentSlot", "carVoice"],
  ["word2vec", "vectorMath", "seq2seq"],
  ["attention", "bert"],
  ["chatgpt", "breakthrough"],
  ["bestWorstIntro", "bestAge", "worstAge"],
  ["keyPointTitle1", "agileFlow", "bottleneck"],
  ["nexTeam", "nexEcho", "mostManyFastGood"],
  ["keyPointTitle2", "rulesMess", "readCode", "rightTool", "conceptLLM", "conceptAgent", "conceptTools", "conceptMCP", "conceptRulesSkills", "conceptHarness"],
  ["keyPointTitle3", "formula", "busyAI", "closedLoopIntro", "closedLoopManual", "closedLoopAuto", "singleThread", "multiAgent", "roleStack", "smartCage"],
  ["outsider", "keyPointTitle4", "bsArchitecture", "sseXml", "sseWs", "phasedReality"],
  ["keyPointTitle5", "bulletTrain", "slowToken", "prePostChat", "statusBar", "optMix", "agileEnd"],
  ["verticalDomain"],
  ["keyPointTitle7", "agentDevSkills", "userIssues", "closedLoopReminder", "diagnosticLog", "aiResolves", "notAFrontend"],
  ["keyPointTitle8", "coreSkills", "lifecycle", "selfAwareness", "todayYesterday", "slowAndFast", "finale"],
];

const slides: Slide[] = [];
const paragraphs: Paragraph[] = [];

slides.push({
  globalIndex: 0,
  paragraphIndex: 0,
  sentenceIndex: 0,
  text: speechTitle,
  svgSceneId: "cover",
});

paragraphs.push({
  raw: speechTitle,
  sentences: [speechTitle],
  slideRange: { start: 0, end: 1 },
  isTitle: true,
});

for (let pi = 1; pi < rawParagraphs.length; pi++) {
  const raw = rawParagraphs[pi];
  const sentences = splitByPeriod(raw);
  const planRow = SCENE_PLAN[pi - 1] ?? [];
  const start = slides.length;
  for (let si = 0; si < sentences.length; si++) {
    const sceneId = planRow[si] ?? planRow[planRow.length - 1] ?? "timeline";
    slides.push({
      globalIndex: slides.length,
      paragraphIndex: pi,
      sentenceIndex: si,
      text: sentences[si],
      svgSceneId: sceneId,
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

slides.push({
  globalIndex: slides.length,
  paragraphIndex: -1,
  sentenceIndex: 0,
  text: "NEX 体验报名",
  svgSceneId: "signup",
});

export const allSlides: Slide[] = slides;
export const allParagraphs: Paragraph[] = paragraphs;
export const totalSlides: number = slides.length;
