import type { SvgSceneDef } from "../SvgScene";

const Background = (
  <g>
    <rect width="1200" height="675" fill="#2B2B3D"/>
    <rect width="1200" height="675" fill="url(#multiAgentBgGlow)"/>
  </g>
);

const Defs = (
  <defs>
    <radialGradient id="multiAgentBgGlow" cx="50%" cy="30%" r="60%">
      <stop offset="0%" stopColor="#6EC8E6" stopOpacity="0.12"/>
      <stop offset="100%" stopColor="#6EC8E6" stopOpacity="0"/>
    </radialGradient>
  </defs>
);


const CentralPerson = (
  <g transform="translate(550, 260)">
    <circle cx="50" cy="20" r="26" fill="#E8B84A" opacity="0.8"/>
    <rect x="26" y="50" width="48" height="65" rx="14" fill="#E8B84A" opacity="0.7"/>
    <circle cx="38" cy="16" r="3" fill="#2B2B3D"/>
    <circle cx="62" cy="16" r="3" fill="#2B2B3D"/>
    <path d="M38,30 Q50,40 62,30" fill="none" stroke="#2B2B3D" strokeWidth="2" strokeLinecap="round"/>
    <text x="50" y="140" textAnchor="middle" fill="#E8B84A" fontFamily="sans-serif" fontSize="14" fontWeight="bold">You</text>
  </g>
);

const agentData = [
  { x: 200, y: 80, label: "Code Review", color: "#6EC8E6" },
  { x: 800, y: 80, label: "Unit Test", color: "#5BAD7A" },
  { x: 960, y: 300, label: "Bug Fix", color: "#E8734A" },
  { x: 800, y: 500, label: "Docs Gen", color: "#4A7BCC" },
  { x: 200, y: 500, label: "Refactor", color: "#E85650" },
  { x: 40, y: 300, label: "Deploy", color: "#E8B84A" },
];

const AgentBoxes = (
  <g>
    {agentData.map((a, i) => (
      <g key={i} transform={`translate(${a.x}, ${a.y})`}>
        <rect x="0" y="0" width="160" height="80" rx="12" fill="#1E1E2E" stroke={a.color} strokeWidth="2"/>
        <circle cx="30" cy="28" r="10" fill={a.color} opacity="0.5"/>
        <rect x="16" y="22" width="8" height="4" rx="2" fill="#FFFFFF" opacity="0.4"/>
        <rect x="26" y="22" width="8" height="4" rx="2" fill="#FFFFFF" opacity="0.4"/>
        <path d="M22,34 Q30,40 38,34" fill="none" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.3" strokeLinecap="round"/>
        <text x="100" y="33" textAnchor="middle" fill={a.color} fontFamily="sans-serif" fontSize="13" fontWeight="bold">{a.label}</text>
        <rect x="50" y="50" width="90" height="5" rx="2.5" fill={a.color} opacity="0.25"/>
        <rect x="50" y="62" width="60" height="4" rx="2" fill="#555570" opacity="0.2"/>
      </g>
    ))}
  </g>
);

const BiArrows = (
  <g opacity="0.45">
    {agentData.map((a, i) => {
      const cx = 600, cy = 310;
      const ax = a.x + 80, ay = a.y + 40;
      const dx = cx - ax, dy = cy - ay;
      const len = Math.sqrt(dx * dx + dy * dy);
      const nx = dx / len, ny = dy / len;
      const x1 = ax + nx * 50, y1 = ay + ny * 50;
      const x2 = cx - nx * 60, y2 = cy - ny * 60;
      return (
        <g key={i}>
          <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={a.color} strokeWidth="2" strokeDasharray="8 5"/>
          <circle cx={x1} r="3" cy={y1} fill={a.color}/>
          <circle cx={x2} r="3" cy={y2} fill={a.color}/>
        </g>
      );
    })}
  </g>
);

const TitleLabel = (
  <g transform="translate(400, 590)">
    <rect x="0" y="0" width="400" height="50" rx="12" fill="#1E1E2E" stroke="#E8B84A" strokeWidth="2"/>
    <text x="200" y="34" textAnchor="middle" fill="#E8B84A" fontFamily="sans-serif" fontSize="24" fontWeight="bold">多 Agent 并行</text>
  </g>
);

export const multiAgentSceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: Defs,
  background: Background,
  fragments: [
    { id: "person", content: CentralPerson, enterFrom: { x: 0, y: -400 }, enterDelay: 0, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 6, y: 7 }, exitTo: { x: 0, y: -500 }, exitScale: 1.15 },
    { id: "agents", content: AgentBoxes, enterFrom: { x: 0, y: 300 }, enterDelay: 150, floatAmp: { x: 12, y: 14 }, floatPeriod: { x: 5, y: 6 }, exitTo: { x: 0, y: 500 } },
    { id: "arrows", content: BiArrows, enterFrom: { x: 0, y: 0 }, enterDelay: 300, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 7, y: 8 } },
    { id: "label", content: TitleLabel, enterFrom: { x: 0, y: 200 }, enterDelay: 450, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 7, y: 9 }, exitTo: { x: 0, y: 300 } },
  ],
};
