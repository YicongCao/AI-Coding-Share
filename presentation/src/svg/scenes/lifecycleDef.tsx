import type { SvgSceneDef } from "../SvgScene";

const Background = (
  <g>
    <rect width="1200" height="675" fill="#2B2B3D"/>
    <rect width="1200" height="675" fill="url(#lifecycleBgGlow)"/>
  </g>
);

const Defs = (
  <defs>
    <radialGradient id="lifecycleBgGlow" cx="50%" cy="30%" r="60%">
      <stop offset="0%" stopColor="#5BAD7A" stopOpacity="0.12"/>
      <stop offset="100%" stopColor="#5BAD7A" stopOpacity="0"/>
    </radialGradient>
  </defs>
);


const Title = (
  <g>
    <text x="600" y="55" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="28" fontWeight="bold">完整生命周期</text>
    <text x="600" y="82" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="14">Every Stage Can Leverage AI</text>
  </g>
);

const stages = [
  { label: "构思", color: "#E8734A" },
  { label: "创意", color: "#E8B84A" },
  { label: "方案", color: "#5BAD7A" },
  { label: "设计", color: "#4A7BCC" },
  { label: "施工", color: "#6EC8E6" },
  { label: "验收", color: "#E85650" },
];

const FlowNodes = (
  <g transform="translate(80, 200)">
    {stages.map((stage, i) => {
      const x = i * 180;
      return (
        <g key={i}>
          {i < 5 && (
            <g>
              <line x1={x + 80} y1={70} x2={x + 120} y2={70} stroke="#555570" strokeWidth="2"/>
              <polygon points={`${x + 118},64 ${x + 130},70 ${x + 118},76`} fill="#555570"/>
            </g>
          )}
          <rect x={x} y={20} width="80" height="100" rx="12" fill="#1E1E2E" stroke={stage.color} strokeWidth="2"/>
          <text x={x + 40} y={78} textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="18" fontWeight="bold">{stage.label}</text>
          <circle cx={x + 40} cy={150} r="14" fill={stage.color} opacity="0.15"/>
          <text x={x + 40} y={155} textAnchor="middle" fill={stage.color} fontFamily="sans-serif" fontSize="10" fontWeight="bold">AI</text>
          <line x1={x + 40} y1={120} x2={x + 40} y2={136} stroke={stage.color} strokeWidth="1" strokeDasharray="3 2" opacity="0.5"/>
        </g>
      );
    })}
  </g>
);

const ProgressBar = (
  <g transform="translate(120, 480)">
    <rect x="0" y="0" width="960" height="12" rx="6" fill="#252538" stroke="#FFFFFF" strokeOpacity="0.1" strokeWidth="1.5"/>
    <rect x="0" y="0" width="960" height="12" rx="6" fill="#5BAD7A" opacity="0.3" stroke="#7DD49A" strokeOpacity="0.3" strokeWidth="1"/>
    {stages.map((stage, i) => (
      <circle key={i} cx={i * 180 + 40} cy={6} r="8" fill={stage.color} opacity="0.6"/>
    ))}
  </g>
);

const BoostLabel = (
  <g transform="translate(440, 530)">
    <rect x="0" y="0" width="320" height="40" rx="20" fill="#5BAD7A" opacity="0.12" stroke="#7DD49A" strokeOpacity="0.3" strokeWidth="1"/>
    <text x="160" y="26" textAnchor="middle" fill="#5BAD7A" fontFamily="sans-serif" fontSize="15" fontWeight="bold">每个阶段都可用 AI boost</text>
  </g>
);

export const lifecycleSceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: Defs,
  background: Background,
  fragments: [
    { id: "title", content: Title, enterFrom: { x: 0, y: -120 }, enterDelay: 0, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 7, y: 8 } },
    { id: "flow", content: FlowNodes, enterFrom: { x: 0, y: 200 }, enterDelay: 100, floatAmp: { x: 10, y: 14 }, floatPeriod: { x: 5.5, y: 6.5 }, exitTo: { x: 0, y: -300 } },
    { id: "progress", content: ProgressBar, enterFrom: { x: -600, y: 0 }, enterDelay: 300, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 6, y: 7 } },
    { id: "boost", content: BoostLabel, enterFrom: { x: 0, y: 150 }, enterDelay: 450, floatAmp: { x: 12, y: 14 }, floatPeriod: { x: 4.5, y: 5.5 } },
  ],
};
