import type { SvgSceneDef } from "../SvgScene";

const Background = (
  <g>
    <rect width="1200" height="675" fill="#2B2B3D"/>
    <rect width="1200" height="675" fill="url(#breakthroughBgGlow)"/>
  </g>
);

const Defs = (
  <defs>
    <radialGradient id="breakthroughBgGlow" cx="50%" cy="30%" r="60%">
      <stop offset="0%" stopColor="#5BAD7A" stopOpacity="0.12"/>
      <stop offset="100%" stopColor="#5BAD7A" stopOpacity="0"/>
    </radialGradient>
    <linearGradient id="breakthroughCurveGrad" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="#4A7BCC"/>
      <stop offset="100%" stopColor="#E8B84A"/>
    </linearGradient>
  </defs>
);


const ExpCurve = (
  <g>
    <path d="M80,550 Q200,540 350,500 Q500,440 600,360 Q700,260 800,180 Q900,110 1000,60" fill="none" stroke="url(#breakthroughCurveGrad)" strokeWidth="3.5" strokeLinecap="round"/>
    <path d="M80,550 Q200,540 350,500 Q500,440 600,360 Q700,260 800,180 Q900,110 1000,60 L1000,580 L80,580 Z" fill="#5BAD7A" opacity="0.06"/>
    {[200, 350, 500, 650, 800, 950].map((x, i) => (
      <circle key={i} cx={x} cy={550 - (i * i * 14)} r="5" fill="#5BAD7A" opacity={0.5 + i * 0.08}/>
    ))}
  </g>
);

const ConversationBubbles = (
  <g>
    <g transform="translate(165, 430)">
      <rect width="170" height="86" rx="18" fill="#252538" stroke="#6EC8E6" strokeWidth="2"/>
      <path d="M42,86 L28,116 L72,86" fill="#252538" stroke="#6EC8E6" strokeWidth="2" strokeLinejoin="round"/>
      <rect x="28" y="25" width="96" height="8" rx="4" fill="#6EC8E6" opacity="0.65"/>
      <rect x="28" y="45" width="120" height="8" rx="4" fill="#5BAD7A" opacity="0.55"/>
      <text x="85" y="70" textAnchor="middle" fill="#6EC8E6" fontFamily="sans-serif" fontSize="16" fontWeight="bold">Chat</text>
    </g>
    <g transform="translate(355, 370)">
      <rect width="138" height="72" rx="16" fill="#1E1E2E" stroke="#5BAD7A" strokeWidth="1.8"/>
      <path d="M96,72 L118,96 L112,72" fill="#1E1E2E" stroke="#5BAD7A" strokeWidth="1.8" strokeLinejoin="round"/>
      <circle cx="38" cy="36" r="6" fill="#5BAD7A" opacity="0.72" stroke="#7DD49A" strokeOpacity="0.3" strokeWidth="1"/>
      <circle cx="68" cy="36" r="6" fill="#5BAD7A" opacity="0.58" stroke="#7DD49A" strokeOpacity="0.3" strokeWidth="1"/>
      <circle cx="98" cy="36" r="6" fill="#5BAD7A" opacity="0.44" stroke="#7DD49A" strokeOpacity="0.3" strokeWidth="1"/>
    </g>
  </g>
);

const ChatToAgentArrow = (
  <g>
    <path d="M500,405 C625,300 740,205 855,92" fill="none" stroke="#E8B84A" strokeWidth="3" strokeDasharray="9 6" strokeLinecap="round"/>
    <polygon points="861,86 842,92 855,105" fill="#E8B84A"/>
    <text x="690" y="270" textAnchor="middle" fill="#E8B84A" fontFamily="sans-serif" fontSize="18" fontWeight="bold">Chat to Agent</text>
  </g>
);

const RobotIcon = (
  <g transform="translate(815, 72)">
    <line x1="0" y1="-42" x2="0" y2="-28" stroke="#6EC8E6" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="0" cy="-46" r="5" fill="#6EC8E6" opacity="0.75"/>
    <rect x="-44" y="-28" width="88" height="64" rx="16" fill="#252538" stroke="#6EC8E6" strokeWidth="2.2"/>
    <circle cx="-18" cy="-2" r="7" fill="#6EC8E6" opacity="0.85" stroke="#90D8F0" strokeOpacity="0.3" strokeWidth="1"/>
    <circle cx="18" cy="-2" r="7" fill="#6EC8E6" opacity="0.85" stroke="#90D8F0" strokeOpacity="0.3" strokeWidth="1"/>
    <path d="M-18,20 Q0,31 18,20" fill="none" stroke="#5BAD7A" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="-54" y1="-2" x2="-44" y2="-2" stroke="#6EC8E6" strokeWidth="2" strokeLinecap="round"/>
    <line x1="44" y1="-2" x2="54" y2="-2" stroke="#6EC8E6" strokeWidth="2" strokeLinecap="round"/>
  </g>
);

const CodingAgentLabel = (
  <g transform="translate(880, 50)">
    <rect width="180" height="44" rx="10" fill="#4A7BCC" stroke="#6A9BE0" strokeOpacity="0.3" strokeWidth="1"/>
    <text x="90" y="30" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="18" fontWeight="bold">Coding Agent</text>
  </g>
);

const Rocket = (
  <g transform="translate(1060, 40)">
    <path d="M20,60 L20,20 Q20,0 35,0 Q50,0 50,20 L50,60 Z" fill="#E8734A" opacity="0.85"/>
    <path d="M20,50 L8,68 L20,58" fill="#E85650" opacity="0.7"/>
    <path d="M50,50 L62,68 L50,58" fill="#E85650" opacity="0.7"/>
    <path d="M26,60 Q35,82 44,60" fill="#E8B84A" opacity="0.7"/>
    <path d="M30,60 Q35,75 40,60" fill="#E8734A" opacity="0.6"/>
    <circle cx="35" cy="30" r="6" fill="#4A7BCC" opacity="0.7"/>
  </g>
);

const GridDots = (
  <g opacity="0.15">
    {Array.from({ length: 8 }, (_, r) =>
      Array.from({ length: 12 }, (_, c) => (
        <circle key={`${r}-${c}`} cx={100 + c * 95} cy={80 + r * 75} r="1.5" fill="#555570"/>
      ))
    )}
  </g>
);

export const breakthroughSceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: Defs,
  background: Background,
  fragments: [
    { id: "gridDots", content: GridDots, enterFrom: { x: 0, y: 0 }, enterDelay: 0, floatAmp: { x: 8, y: 8 }, floatPeriod: { x: 9.0, y: 9.0 }, exitTo: { x: 0, y: 0 } },
    { id: "expCurve", content: ExpCurve, enterFrom: { x: -600, y: 0 }, enterDelay: 0, floatAmp: { x: 8, y: 12 }, floatPeriod: { x: 6.0, y: 7.5 }, exitTo: { x: 600, y: 0 } },
    { id: "conversationBubbles", content: ConversationBubbles, enterFrom: { x: -300, y: 120 }, enterDelay: 100, floatAmp: { x: 14, y: 18 }, floatPeriod: { x: 4.5, y: 5.5 }, exitTo: { x: -400, y: 200 }, exitSpin: -3 },
    { id: "chatToAgentArrow", content: ChatToAgentArrow, enterFrom: { x: -120, y: 180 }, enterDelay: 200, floatAmp: { x: 10, y: 10 }, floatPeriod: { x: 5.0, y: 6.0 }, exitTo: { x: 180, y: -300 } },
    { id: "robotIcon", content: RobotIcon, enterFrom: { x: 300, y: -200 }, enterDelay: 350, floatAmp: { x: 16, y: 20 }, floatPeriod: { x: 4.0, y: 5.0 }, exitTo: { x: 400, y: -300 }, exitSpin: 5 },
    { id: "codingAgentLabel", content: CodingAgentLabel, enterFrom: { x: 300, y: -200 }, enterDelay: 450, floatAmp: { x: 18, y: 22 }, floatPeriod: { x: 3.5, y: 4.5 }, exitTo: { x: 400, y: -300 }, exitScale: 1.15 },
    { id: "rocket", content: Rocket, enterFrom: { x: 200, y: -300 }, enterDelay: 550, floatAmp: { x: 20, y: 22 }, floatPeriod: { x: 3.0, y: 4.0 }, floatRotate: 2, exitTo: { x: 300, y: -400 }, exitSpin: 12 },
  ],
};
