import type { SvgSceneDef } from "../SvgScene";

const Background = <rect width="1200" height="675" fill="#2B2B3D"/>;

const ClipboardSource = (
  <g transform="translate(60, 180)">
    <rect x="0" y="0" width="200" height="280" rx="12" fill="#1E1E2E" stroke="#555570" strokeWidth="1.5"/>
    <rect x="60" y="-10" width="80" height="20" rx="10" fill="#252538" stroke="#555570" strokeWidth="1"/>
    <text x="100" y="40" textAnchor="middle" fill="#6EC8E6" fontFamily="sans-serif" fontSize="14" fontWeight="bold">诊断日志</text>
    <line x1="20" y1="55" x2="180" y2="55" stroke="#555570" strokeWidth="0.5" opacity="0.4"/>
    {[70, 90, 110, 135, 155, 175, 200, 220, 240].map((y, i) => (
      <rect key={i} x="20" y={y} width={100 + (i % 3) * 30} height="5" rx="2.5" fill="#555570" opacity={0.2 + (i % 3) * 0.1}/>
    ))}
  </g>
);

const ArrowPipeline = (
  <g>
    <line x1="280" y1="320" x2="420" y2="320" stroke="#E8B84A" strokeWidth="2.5" strokeDasharray="8 4"/>
    <polygon points="420,314 434,320 420,326" fill="#E8B84A"/>
    <line x1="720" y1="320" x2="860" y2="320" stroke="#5BAD7A" strokeWidth="2.5" strokeDasharray="8 4"/>
    <polygon points="860,314 874,320 860,326" fill="#5BAD7A"/>
  </g>
);

const AIBrain = (
  <g transform="translate(460, 200)">
    <rect x="0" y="0" width="220" height="240" rx="16" fill="#1E1E2E" stroke="#4A7BCC" strokeWidth="2"/>
    <circle cx="110" cy="80" r="45" fill="#4A7BCC" opacity="0.15"/>
    <path d="M85,65 Q90,45 110,42 Q130,45 135,65 Q138,80 130,95 Q120,105 110,108 Q100,105 90,95 Q82,80 85,65" fill="none" stroke="#4A7BCC" strokeWidth="2"/>
    <path d="M95,75 L108,85 L125,70" fill="none" stroke="#6EC8E6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="110" y1="42" x2="110" y2="30" stroke="#4A7BCC" strokeWidth="1.5" opacity="0.5"/>
    <line x1="85" y1="65" x2="75" y2="58" stroke="#4A7BCC" strokeWidth="1.5" opacity="0.5"/>
    <line x1="135" y1="65" x2="145" y2="58" stroke="#4A7BCC" strokeWidth="1.5" opacity="0.5"/>
    <text x="110" y="145" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="18" fontWeight="bold">AI 分析</text>
    <text x="110" y="170" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="12">AI 自己定位</text>
    <rect x="30" y="190" width="160" height="30" rx="6" fill="#252538"/>
    <text x="110" y="210" textAnchor="middle" fill="#4A7BCC" fontFamily="sans-serif" fontSize="12">Root Cause Analysis</text>
  </g>
);

const SolutionCards = (
  <g transform="translate(890, 150)">
    {[
      { y: 0, label: "修复 Prompt", color: "#5BAD7A" },
      { y: 90, label: "调整参数", color: "#6EC8E6" },
      { y: 180, label: "优化 Tool", color: "#E8B84A" },
    ].map((card, i) => (
      <g key={i}>
        <rect x="0" y={card.y} width="240" height="70" rx="10" fill="#1E1E2E" stroke={card.color} strokeWidth="1.5"/>
        <circle cx="32" cy={card.y + 35} r="14" fill={card.color} opacity="0.2"/>
        <path d={`M25,${card.y + 35} L30,${card.y + 40} L40,${card.y + 28}`} fill="none" stroke={card.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <text x="60" y={card.y + 40} fill="#FFFFFF" fontFamily="sans-serif" fontSize="16" fontWeight="bold">{card.label}</text>
      </g>
    ))}
  </g>
);

export const aiResolvesSceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: <defs/>,
  background: Background,
  fragments: [
    { id: "clipboard", content: ClipboardSource, enterFrom: { x: -400, y: 0 }, enterDelay: 0, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 6, y: 7 }, exitTo: { x: -500, y: 0 } },
    { id: "arrows", content: ArrowPipeline, enterFrom: { x: 0, y: 200 }, enterDelay: 150, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 5, y: 6 } },
    { id: "brain", content: AIBrain, enterFrom: { x: 0, y: -300 }, enterDelay: 200, floatAmp: { x: 12, y: 14 }, floatPeriod: { x: 5.5, y: 6.5 }, exitTo: { x: 0, y: -400 } },
    { id: "solutions", content: SolutionCards, enterFrom: { x: 400, y: 0 }, enterDelay: 350, floatAmp: { x: 14, y: 16 }, floatPeriod: { x: 4, y: 5 }, exitTo: { x: 500, y: 0 } },
  ],
};
