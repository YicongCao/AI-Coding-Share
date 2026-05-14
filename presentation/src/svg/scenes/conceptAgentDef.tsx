import type { SvgSceneDef } from "../SvgScene";

const Background = (
  <g>
    <rect width="1200" height="675" fill="#2B2B3D"/>
    <rect width="1200" height="675" fill="url(#conceptAgentBgGlow)"/>
  </g>
);

const Defs = (
  <defs>
    <radialGradient id="conceptAgentBgGlow" cx="50%" cy="30%" r="60%">
      <stop offset="0%" stopColor="#4A7BCC" stopOpacity="0.12"/>
      <stop offset="100%" stopColor="#4A7BCC" stopOpacity="0"/>
    </radialGradient>
  </defs>
);


const r = 180;
const cx = 600;
const cy = 310;
const nodes = [
  { label: "Prompt", sub: "提示词", angle: -90, color: "#6EC8E6" },
  { label: "LLM", sub: "推理", angle: 0, color: "#4A7BCC" },
  { label: "Tool Call", sub: "工具调用", angle: 90, color: "#E8B84A" },
  { label: "Feedback", sub: "反馈", angle: 180, color: "#5BAD7A" },
];

const LoopArrows = (
  <g>
    {nodes.map((node, i) => {
      if (node.label === "Feedback") {
        return (
          <g key={i}>
            <path d="M420,280 C300,230 330,105 545,130" fill="none" stroke="#555570" strokeWidth="2.5" strokeDasharray="8 5" opacity="0.6"/>
            <circle cx="545" cy="130" r="4" fill="#555570" opacity="0.8"/>
          </g>
        );
      }

      const next = nodes[(i + 1) % 4];
      const a1 = (node.angle + 20) * Math.PI / 180;
      const a2 = (next.angle - 20) * Math.PI / 180;
      const x1 = cx + r * Math.cos(a1);
      const y1 = cy + r * Math.sin(a1);
      const x2 = cx + r * Math.cos(a2);
      const y2 = cy + r * Math.sin(a2);
      const mx = cx + (r + 30) * Math.cos((a1 + a2) / 2);
      const my = cy + (r + 30) * Math.sin((a1 + a2) / 2);
      return (
        <g key={i}>
          <path d={`M${x1},${y1} Q${mx},${my} ${x2},${y2}`} fill="none" stroke="#555570" strokeWidth="2.5" strokeDasharray="8 5" opacity="0.6"/>
          <circle cx={x2} cy={y2} r="4" fill="#555570" opacity="0.8"/>
        </g>
      );
    })}
  </g>
);

const NodeBoxes = (
  <g>
    {nodes.map((node, i) => {
      const nx = cx + r * Math.cos(node.angle * Math.PI / 180);
      const ny = cy + r * Math.sin(node.angle * Math.PI / 180);
      return (
        <g key={i} transform={`translate(${nx},${ny})`}>
          <rect x="-55" y="-30" width="110" height="60" rx="12" fill="#1E1E2E" stroke={node.color} strokeWidth="2"/>
          <text x="0" y="-4" textAnchor="middle" fill={node.color} fontFamily="sans-serif" fontSize="15" fontWeight="bold">{node.label}</text>
          <text x="0" y="16" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="12">{node.sub}</text>
        </g>
      );
    })}
  </g>
);

const CenterLabel = (
  <g>
    <circle cx={cx} cy={cy} r="48" fill="#252538" stroke="#E8734A" strokeWidth="2"/>
    <text x={cx} y={cy - 4} textAnchor="middle" fill="#E8734A" fontFamily="sans-serif" fontSize="14" fontWeight="bold">ReAct</text>
    <text x={cx} y={cy + 14} textAnchor="middle" fill="#E8734A" fontFamily="sans-serif" fontSize="14" fontWeight="bold">Loop</text>
  </g>
);

const AgentTitle = (
  <g>
    <text x="600" y="52" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="28" fontWeight="bold">Agent</text>
    <text x="600" y="78" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="14">ReAct Loop = Reason + Act</text>
  </g>
);

const DecoCircles = (
  <g opacity="0.2">
    <circle cx={cx} cy={cy} r={r + 60} fill="none" stroke="#555570" strokeWidth="1" strokeDasharray="4 6"/>
    <circle cx={cx} cy={cy} r={r - 40} fill="none" stroke="#555570" strokeWidth="0.5" strokeDasharray="3 5"/>
  </g>
);

const TitleLabel = (
  <g>
    <rect x="470" y="570" width="260" height="44" rx="10" fill="#252538" stroke="#FFFFFF" strokeOpacity="0.1" strokeWidth="1.5"/>
    <text x="600" y="598" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="18" fontWeight="bold">Agent = Prompt + LLM + Tools + Feedback</text>
  </g>
);

export const conceptAgentSceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: Defs,
  background: Background,
  fragments: [
    { id: "decoCircles", content: DecoCircles, enterFrom: { x: 0, y: 0 }, enterDelay: 0, floatAmp: { x: 8, y: 8 }, floatPeriod: { x: 9, y: 8 } },
    { id: "loopArrows", content: LoopArrows, enterFrom: { x: 0, y: 0 }, enterDelay: 100, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 6, y: 7 }, exitTo: { x: 0, y: 300 } },
    { id: "nodeBoxes", content: NodeBoxes, enterFrom: { x: 0, y: 300 }, enterDelay: 150, floatAmp: { x: 12, y: 14 }, floatPeriod: { x: 5, y: 6 }, exitTo: { x: 0, y: -400 } },
    { id: "centerLabel", content: CenterLabel, enterFrom: { x: 0, y: -200 }, enterDelay: 300, floatAmp: { x: 10, y: 10 }, floatPeriod: { x: 5.5, y: 6.5 }, floatRotate: 1, exitTo: { x: 0, y: -300 }, exitScale: 0.8 },
    { id: "agentTitle", content: AgentTitle, enterFrom: { x: 0, y: -150 }, enterDelay: 200, floatAmp: { x: 8, y: 8 }, floatPeriod: { x: 7, y: 8 }, exitTo: { x: 0, y: -200 } },
    { id: "titleLabel", content: TitleLabel, enterFrom: { x: 0, y: 200 }, enterDelay: 500, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 7, y: 8 }, exitTo: { x: 0, y: 300 } },
  ],
};
