import type { SvgSceneDef } from "./SvgScene";
import { coverSceneDef } from "./scenes/coverDef";
import { introBadgeSceneDef } from "./scenes/introBadgeDef";
import { timelineSceneDef } from "./scenes/timelineDef";
import { twoQuestsSceneDef } from "./scenes/twoQuestsDef";
import { jobsSpeakerSceneDef } from "./scenes/jobsSpeakerDef";
import { jobsEnvelopeSceneDef } from "./scenes/jobsEnvelopeDef";
import { ttsAsrSplitSceneDef } from "./scenes/ttsAsrSplitDef";
import { rulesGridSceneDef } from "./scenes/rulesGridDef";
import { hmmStatesSceneDef } from "./scenes/hmmStatesDef";
import { vistaWindowSceneDef } from "./scenes/vistaWindowDef";
import { vistaMenuSceneDef } from "./scenes/vistaMenuDef";
import { siriPhoneSceneDef } from "./scenes/siriPhoneDef";
import { intentSlotSceneDef } from "./scenes/intentSlotDef";
import { carVoiceSceneDef } from "./scenes/carVoiceDef";
import { word2vecSceneDef } from "./scenes/word2vecDef";
import { vectorMathSceneDef } from "./scenes/vectorMathDef";
import { seq2seqSceneDef } from "./scenes/seq2seqDef";
import { attentionSceneDef } from "./scenes/attentionDef";
import { bertSceneDef } from "./scenes/bertDef";
import { chatgptSceneDef } from "./scenes/chatgptDef";
import { breakthroughSceneDef } from "./scenes/breakthroughDef";
import { bestWorstIntroSceneDef } from "./scenes/bestWorstIntroDef";
import { bestAgeSceneDef } from "./scenes/bestAgeDef";
import { worstAgeSceneDef } from "./scenes/worstAgeDef";
import { keyPointTitle1SceneDef } from "./scenes/keyPointTitle1Def";
import { agileFlowSceneDef } from "./scenes/agileFlowDef";
import { bottleneckSceneDef } from "./scenes/bottleneckDef";
import { nexTeamSceneDef } from "./scenes/nexTeamDef";
import { nexEchoSceneDef } from "./scenes/nexEchoDef";
import { mostManyFastGoodSceneDef } from "./scenes/mostManyFastGoodDef";
import { keyPointTitle2SceneDef } from "./scenes/keyPointTitle2Def";
import { rulesMessSceneDef } from "./scenes/rulesMessDef";
import { readCodeSceneDef } from "./scenes/readCodeDef";
import { rightToolSceneDef } from "./scenes/rightToolDef";
import { conceptLLMSceneDef } from "./scenes/conceptLLMDef";
import { conceptAgentSceneDef } from "./scenes/conceptAgentDef";
import { conceptToolsSceneDef } from "./scenes/conceptToolsDef";
import { conceptMCPSceneDef } from "./scenes/conceptMCPDef";
import { conceptRulesSkillsSceneDef } from "./scenes/conceptRulesSkillsDef";
import { conceptHarnessSceneDef } from "./scenes/conceptHarnessDef";
import { keyPointTitle3SceneDef } from "./scenes/keyPointTitle3Def";
import { formulaSceneDef } from "./scenes/formulaDef";
import { busyAISceneDef } from "./scenes/busyAIDef";
import { closedLoopIntroSceneDef } from "./scenes/closedLoopIntroDef";
import { closedLoopManualSceneDef } from "./scenes/closedLoopManualDef";
import { closedLoopAutoSceneDef } from "./scenes/closedLoopAutoDef";
import { singleThreadSceneDef } from "./scenes/singleThreadDef";
import { multiAgentSceneDef } from "./scenes/multiAgentDef";
import { roleStackSceneDef } from "./scenes/roleStackDef";
import { smartCageSceneDef } from "./scenes/smartCageDef";
import { outsiderSceneDef } from "./scenes/outsiderDef";
import { keyPointTitle4SceneDef } from "./scenes/keyPointTitle4Def";
import { bsArchitectureSceneDef } from "./scenes/bsArchitectureDef";
import { sseXmlSceneDef } from "./scenes/sseXmlDef";
import { sseWsSceneDef } from "./scenes/sseWsDef";
import { phasedRealitySceneDef } from "./scenes/phasedRealityDef";
import { keyPointTitle5SceneDef } from "./scenes/keyPointTitle5Def";
import { bulletTrainSceneDef } from "./scenes/bulletTrainDef";
import { slowTokenSceneDef } from "./scenes/slowTokenDef";
import { prePostChatSceneDef } from "./scenes/prePostChatDef";
import { statusBarSceneDef } from "./scenes/statusBarDef";
import { optMixSceneDef } from "./scenes/optMixDef";
import { agileEndSceneDef } from "./scenes/agileEndDef";
import { verticalDomainSceneDef } from "./scenes/verticalDomainDef";
import { keyPointTitle7SceneDef } from "./scenes/keyPointTitle7Def";
import { agentDevSkillsSceneDef } from "./scenes/agentDevSkillsDef";
import { userIssuesSceneDef } from "./scenes/userIssuesDef";
import { closedLoopReminderSceneDef } from "./scenes/closedLoopReminderDef";
import { diagnosticLogSceneDef } from "./scenes/diagnosticLogDef";
import { aiResolvesSceneDef } from "./scenes/aiResolvesDef";
import { notAFrontendSceneDef } from "./scenes/notAFrontendDef";
import { keyPointTitle8SceneDef } from "./scenes/keyPointTitle8Def";
import { coreSkillsSceneDef } from "./scenes/coreSkillsDef";
import { lifecycleSceneDef } from "./scenes/lifecycleDef";
import { selfAwarenessSceneDef } from "./scenes/selfAwarenessDef";
import { todayYesterdaySceneDef } from "./scenes/todayYesterdayDef";
import { slowAndFastSceneDef } from "./scenes/slowAndFastDef";
import { finaleSceneDef } from "./scenes/finaleDef";
import { signupSceneDef } from "./scenes/signupDef";

const SVG_SCENES: Record<string, SvgSceneDef> = {
  cover: coverSceneDef,
  introBadge: introBadgeSceneDef,
  timeline: timelineSceneDef,
  twoQuests: twoQuestsSceneDef,
  jobsSpeaker: jobsSpeakerSceneDef,
  jobsEnvelope: jobsEnvelopeSceneDef,
  ttsAsrSplit: ttsAsrSplitSceneDef,
  rulesGrid: rulesGridSceneDef,
  hmmStates: hmmStatesSceneDef,
  vistaWindow: vistaWindowSceneDef,
  vistaMenu: vistaMenuSceneDef,
  siriPhone: siriPhoneSceneDef,
  intentSlot: intentSlotSceneDef,
  carVoice: carVoiceSceneDef,
  word2vec: word2vecSceneDef,
  vectorMath: vectorMathSceneDef,
  seq2seq: seq2seqSceneDef,
  attention: attentionSceneDef,
  bert: bertSceneDef,
  chatgpt: chatgptSceneDef,
  breakthrough: breakthroughSceneDef,
  bestWorstIntro: bestWorstIntroSceneDef,
  bestAge: bestAgeSceneDef,
  worstAge: worstAgeSceneDef,
  keyPointTitle1: keyPointTitle1SceneDef,
  agileFlow: agileFlowSceneDef,
  bottleneck: bottleneckSceneDef,
  nexTeam: nexTeamSceneDef,
  nexEcho: nexEchoSceneDef,
  mostManyFastGood: mostManyFastGoodSceneDef,
  keyPointTitle2: keyPointTitle2SceneDef,
  rulesMess: rulesMessSceneDef,
  readCode: readCodeSceneDef,
  rightTool: rightToolSceneDef,
  conceptLLM: conceptLLMSceneDef,
  conceptAgent: conceptAgentSceneDef,
  conceptTools: conceptToolsSceneDef,
  conceptMCP: conceptMCPSceneDef,
  conceptRulesSkills: conceptRulesSkillsSceneDef,
  conceptHarness: conceptHarnessSceneDef,
  keyPointTitle3: keyPointTitle3SceneDef,
  formula: formulaSceneDef,
  busyAI: busyAISceneDef,
  closedLoopIntro: closedLoopIntroSceneDef,
  closedLoopManual: closedLoopManualSceneDef,
  closedLoopAuto: closedLoopAutoSceneDef,
  singleThread: singleThreadSceneDef,
  multiAgent: multiAgentSceneDef,
  roleStack: roleStackSceneDef,
  smartCage: smartCageSceneDef,
  outsider: outsiderSceneDef,
  keyPointTitle4: keyPointTitle4SceneDef,
  bsArchitecture: bsArchitectureSceneDef,
  sseXml: sseXmlSceneDef,
  sseWs: sseWsSceneDef,
  phasedReality: phasedRealitySceneDef,
  keyPointTitle5: keyPointTitle5SceneDef,
  bulletTrain: bulletTrainSceneDef,
  slowToken: slowTokenSceneDef,
  prePostChat: prePostChatSceneDef,
  statusBar: statusBarSceneDef,
  optMix: optMixSceneDef,
  agileEnd: agileEndSceneDef,
  verticalDomain: verticalDomainSceneDef,
  keyPointTitle7: keyPointTitle7SceneDef,
  agentDevSkills: agentDevSkillsSceneDef,
  userIssues: userIssuesSceneDef,
  closedLoopReminder: closedLoopReminderSceneDef,
  diagnosticLog: diagnosticLogSceneDef,
  aiResolves: aiResolvesSceneDef,
  notAFrontend: notAFrontendSceneDef,
  keyPointTitle8: keyPointTitle8SceneDef,
  coreSkills: coreSkillsSceneDef,
  lifecycle: lifecycleSceneDef,
  selfAwareness: selfAwarenessSceneDef,
  todayYesterday: todayYesterdaySceneDef,
  slowAndFast: slowAndFastSceneDef,
  finale: finaleSceneDef,
  signup: signupSceneDef,
};

export function getSvgSceneDef(id: string): SvgSceneDef | undefined {
  return SVG_SCENES[id];
}
