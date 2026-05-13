import type { SvgSceneDef } from "./SvgScene";
import { coverSceneDef } from "./scenes/coverDef";
import { introBadgeSceneDef } from "./scenes/introBadgeDef";
import { timelineSceneDef } from "./scenes/timelineDef";
import { twoQuestsSceneDef } from "./scenes/twoQuestsDef";
import { jobsSpeakerSceneDef } from "./scenes/jobsSpeakerDef";
import { jobsEnvelopeSceneDef } from "./scenes/jobsEnvelopeDef";

const SVG_SCENES: Record<string, SvgSceneDef> = {
  cover: coverSceneDef,
  introBadge: introBadgeSceneDef,
  timeline: timelineSceneDef,
  twoQuests: twoQuestsSceneDef,
  jobsSpeaker: jobsSpeakerSceneDef,
  jobsEnvelope: jobsEnvelopeSceneDef,
};

export function getSvgSceneDef(id: string): SvgSceneDef | undefined {
  return SVG_SCENES[id];
}
