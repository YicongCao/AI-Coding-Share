import type { SvgSceneDef } from "../SvgScene";

const Background = <rect width="1200" height="675" fill="#2B2B3D"/>;

const ExpCurve = (
  <g>
    <path d="M80,550 Q200,540 350,500 Q500,440 600,360 Q700,260 800,180 Q900,110 1000,60" fill="none" stroke="#5BAD7A" strokeWidth="3.5" strokeLinecap="round"/>
    <path d="M80,550 Q200,540 350,500 Q500,440 600,360 Q700,260 800,180 Q900,110 1000,60 L1000,580 L80,580 Z" fill="#5BAD7A" opacity="0.06"/>
    {[200, 350, 500, 650, 800, 950].map((x, i) => (
      <circle key={i} cx={x} cy={550 - (i * i * 14)} r="5" fill="#5BAD7A" opacity={0.5 + i * 0.08}/>
    ))}
  </g>
);

const BrainIcon = (
  <g transform="translate(160, 200)">
    <ellipse cx="0" cy="0" rx="42" ry="48" fill="#252538" stroke="#6EC8E6" strokeWidth="2"/>
    <path d="M-20,-30 Q-10,-45 0,-30 Q10,-45 20,-30" fill="none" stroke="#6EC8E6" strokeWidth="1.8"/>
    <path d="M-28,-10 Q-15,-20 0,-10 Q15,-20 28,-10" fill="none" stroke="#6EC8E6" strokeWidth="1.5" opacity="0.7"/>
    <path d="M-24,10 Q-10,0 0,10 Q10,0 24,10" fill="none" stroke="#6EC8E6" strokeWidth="1.5" opacity="0.6"/>
    <path d="M-18,28 Q0,18 18,28" fill="none" stroke="#6EC8E6" strokeWidth="1.5" opacity="0.5"/>
    <line x1="0" y1="-35" x2="0" y2="35" stroke="#6EC8E6" strokeWidth="1" opacity="0.3"/>
  </g>
);

const TransformArrow = (
  <g>
    <line x1="220" y1="200" x2="380" y2="200" stroke="#E8B84A" strokeWidth="3" strokeDasharray="8 5"/>
    <polygon points="385,200 370,190 370,210" fill="#E8B84A"/>
    <text x="300" y="185" textAnchor="middle" fill="#E8B84A" fontFamily="sans-serif" fontSize="13" opacity="0.7">NLP</text>
  </g>
);

const AgentIcon = (
  <g transform="translate(430, 170)">
    <rect x="-40" y="-40" width="80" height="80" rx="14" fill="#252538" stroke="#4A7BCC" strokeWidth="2"/>
    <circle cx="0" cy="-12" r="14" fill="none" stroke="#4A7BCC" strokeWidth="2"/>
    <circle cx="0" cy="-12" r="4" fill="#4A7BCC"/>
    <rect x="-20" y="10" width="40" height="22" rx="6" fill="none" stroke="#4A7BCC" strokeWidth="1.8"/>
    <circle cx="-10" cy="20" r="3" fill="#4A7BCC" opacity="0.6"/>
    <circle cx="10" cy="20" r="3" fill="#4A7BCC" opacity="0.6"/>
  </g>
);

const ShatteredFragments = (
  <g>
    {[
      { x: 300, y: 430, w: 50, h: 35, rot: 12, c: "#E85650" },
      { x: 420, y: 470, w: 40, h: 30, rot: -18, c: "#E8734A" },
      { x: 200, y: 490, w: 55, h: 28, rot: 25, c: "#E85650" },
      { x: 520, y: 510, w: 45, h: 32, rot: -8, c: "#E8734A" },
      { x: 140, y: 530, w: 38, h: 26, rot: 30, c: "#E85650" },
    ].map((f, i) => (
      <g key={i} transform={`translate(${f.x}, ${f.y}) rotate(${f.rot})`} opacity={0.4 + i * 0.06}>
        <rect width={f.w} height={f.h} rx="4" fill="#1E1E2E" stroke={f.c} strokeWidth="1.2"/>
        <line x1="5" y1={f.h / 2} x2={f.w - 5} y2={f.h / 2} stroke={f.c} strokeWidth="1" opacity="0.5" strokeDasharray="3 2"/>
      </g>
    ))}
  </g>
);

const CodingAgentLabel = (
  <g transform="translate(880, 50)">
    <rect width="180" height="44" rx="10" fill="#4A7BCC"/>
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
  defs: <defs/>,
  background: Background,
  fragments: [
    { id: "gridDots", content: GridDots, enterFrom: { x: 0, y: 0 }, enterDelay: 0, floatAmp: { x: 8, y: 8 }, floatPeriod: { x: 9.0, y: 9.0 }, exitTo: { x: 0, y: 0 } },
    { id: "expCurve", content: ExpCurve, enterFrom: { x: -600, y: 0 }, enterDelay: 0, floatAmp: { x: 8, y: 12 }, floatPeriod: { x: 6.0, y: 7.5 }, exitTo: { x: 600, y: 0 } },
    { id: "brainIcon", content: BrainIcon, enterFrom: { x: -300, y: 0 }, enterDelay: 100, floatAmp: { x: 14, y: 18 }, floatPeriod: { x: 4.5, y: 5.5 }, exitTo: { x: -400, y: 200 }, exitSpin: -6 },
    { id: "transformArrow", content: TransformArrow, enterFrom: { x: 0, y: -200 }, enterDelay: 200, floatAmp: { x: 10, y: 10 }, floatPeriod: { x: 5.0, y: 6.0 }, exitTo: { x: 0, y: -300 } },
    { id: "agentIcon", content: AgentIcon, enterFrom: { x: 300, y: -200 }, enterDelay: 300, floatAmp: { x: 16, y: 20 }, floatPeriod: { x: 4.0, y: 5.0 }, exitTo: { x: 400, y: -300 }, exitSpin: 5 },
    { id: "shattered", content: ShatteredFragments, enterFrom: { x: 0, y: 300 }, enterDelay: 350, floatAmp: { x: 12, y: 16 }, floatPeriod: { x: 5.5, y: 7.0 }, exitTo: { x: 0, y: 400 }, exitSpin: 4 },
    { id: "codingAgentLabel", content: CodingAgentLabel, enterFrom: { x: 300, y: -200 }, enterDelay: 450, floatAmp: { x: 18, y: 22 }, floatPeriod: { x: 3.5, y: 4.5 }, exitTo: { x: 400, y: -300 }, exitScale: 1.15 },
    { id: "rocket", content: Rocket, enterFrom: { x: 200, y: -300 }, enterDelay: 550, floatAmp: { x: 20, y: 22 }, floatPeriod: { x: 3.0, y: 4.0 }, exitTo: { x: 300, y: -400 }, exitSpin: 12 },
  ],
};
