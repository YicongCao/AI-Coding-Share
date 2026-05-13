import type { SvgSceneDef } from "../SvgScene";

const Background = <rect width="1200" height="675" fill="#2B2B3D"/>;

const PersonFigures = (
  <g transform="translate(120, 200)">
    {[0, 1, 2].map(i => (
      <g key={i} transform={`translate(${i * 90}, 0)`}>
        <circle cx="35" cy="20" r="18" fill="#252538" stroke={["#6EC8E6", "#5BAD7A", "#E8B84A"][i]} strokeWidth="2"/>
        <path d={`M15,50 Q15,42 25,38 L45,38 Q55,42 55,50 L55,80 Q55,88 45,90 L25,90 Q15,88 15,80 Z`} fill="#252538" stroke={["#6EC8E6", "#5BAD7A", "#E8B84A"][i]} strokeWidth="1.5"/>
        <text x="35" y="25" textAnchor="middle" fill={["#6EC8E6", "#5BAD7A", "#E8B84A"][i]} fontFamily="sans-serif" fontSize="14">👤</text>
      </g>
    ))}
    <text x="130" y="120" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="16" fontWeight="bold" opacity="0.7">核心用户 = 开发者</text>
  </g>
);

const KanbanBoard = (
  <g transform="translate(520, 140)">
    <rect x="0" y="0" width="560" height="320" rx="14" fill="#1E1E2E" stroke="#555570" strokeWidth="1.5"/>
    <text x="280" y="35" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="16" fontWeight="bold" opacity="0.6">Kanban Board</text>
    <line x1="0" y1="50" x2="560" y2="50" stroke="#555570" strokeWidth="1"/>
    {["To Do", "In Progress", "Done"].map((col, ci) => (
      <g key={ci} transform={`translate(${ci * 187}, 50)`}>
        <rect x="0" y="0" width="187" height="270" fill={ci === 2 ? "#5BAD7A" : "transparent"} opacity="0.04"/>
        <text x="93" y="25" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="12">{col}</text>
        <line x1="187" y1="0" x2="187" y2="270" stroke="#555570" strokeWidth="0.5" opacity="0.5"/>
        {Array.from({ length: ci === 2 ? 4 : ci === 1 ? 2 : 1 }, (_, j) => (
          <rect key={j} x="12" y={40 + j * 52} width="163" height="42" rx="8" fill="#252538" stroke={ci === 2 ? "#5BAD7A" : ci === 1 ? "#E8B84A" : "#555570"} strokeWidth="1"/>
        ))}
      </g>
    ))}
  </g>
);

const LoopArrow = (
  <g transform="translate(250, 380)">
    <path d="M0,0 Q-60,-80 0,-160 Q60,-80 220,-60 Q380,-40 380,0 Q380,40 220,40 Q60,40 0,0 Z" fill="none" stroke="#6EC8E6" strokeWidth="2" strokeDasharray="8 4" opacity="0.5"/>
    <polygon points="5,5 -5,-10 15,-5" fill="#6EC8E6" opacity="0.6"/>
    <text x="190" y="-70" textAnchor="middle" fill="#6EC8E6" fontFamily="sans-serif" fontSize="13" opacity="0.6">User → Developer 闭环</text>
  </g>
);

const KnowLabel = (
  <g transform="translate(140, 480)">
    <rect x="0" y="0" width="220" height="55" rx="12" fill="#5BAD7A" opacity="0.12"/>
    <rect x="0" y="0" width="220" height="55" rx="12" fill="none" stroke="#5BAD7A" strokeWidth="2"/>
    <text x="110" y="35" textAnchor="middle" fill="#5BAD7A" fontFamily="sans-serif" fontSize="20" fontWeight="bold">知道要做什么</text>
  </g>
);

const CoreUserBadge = (
  <g transform="translate(850, 500)">
    <rect x="0" y="0" width="140" height="44" rx="22" fill="#E8734A" opacity="0.15"/>
    <rect x="0" y="0" width="140" height="44" rx="22" fill="none" stroke="#E8734A" strokeWidth="1.5"/>
    <text x="70" y="29" textAnchor="middle" fill="#E8734A" fontFamily="sans-serif" fontSize="15" fontWeight="bold">核心用户</text>
  </g>
);

const CompletionTag = (
  <g transform="translate(850, 560)">
    <rect x="0" y="0" width="160" height="36" rx="18" fill="#5BAD7A" opacity="0.15"/>
    <text x="80" y="24" textAnchor="middle" fill="#5BAD7A" fontFamily="sans-serif" fontSize="16" fontWeight="bold">90% 完成度</text>
  </g>
);

export const agileEndSceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: <defs/>,
  background: Background,
  fragments: [
    { id: "persons", content: PersonFigures, enterFrom: { x: -500, y: 0 }, enterDelay: 0, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 6, y: 7 }, exitTo: { x: -600, y: 0 } },
    { id: "kanban", content: KanbanBoard, enterFrom: { x: 600, y: 0 }, enterDelay: 150, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 7, y: 8 }, exitTo: { x: 700, y: -100 }, exitScale: 0.9 },
    { id: "loop", content: LoopArrow, enterFrom: { x: 0, y: 300 }, enterDelay: 300, floatAmp: { x: 12, y: 14 }, floatPeriod: { x: 5, y: 6 }, exitTo: { x: 0, y: 300 } },
    { id: "knowLabel", content: KnowLabel, enterFrom: { x: -300, y: 200 }, enterDelay: 400, floatAmp: { x: 16, y: 18 }, floatPeriod: { x: 4, y: 5 }, exitTo: { x: -300, y: 200 }, exitSpin: -6 },
    { id: "badge", content: CoreUserBadge, enterFrom: { x: 300, y: 200 }, enterDelay: 450, floatAmp: { x: 18, y: 20 }, floatPeriod: { x: 3.5, y: 4.5 }, exitTo: { x: 300, y: 200 }, exitSpin: 8 },
    { id: "completion", content: CompletionTag, enterFrom: { x: 200, y: 200 }, enterDelay: 550, floatAmp: { x: 14, y: 16 }, floatPeriod: { x: 4.5, y: 5.5 }, exitTo: { x: 200, y: 200 } },
  ],
};
