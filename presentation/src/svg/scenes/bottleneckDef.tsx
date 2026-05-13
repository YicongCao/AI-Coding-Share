import type { SvgSceneDef } from "../SvgScene";

const Background = <rect width="1200" height="675" fill="#2B2B3D"/>;

const Funnel = (
  <g transform="translate(600, 337)">
    {/* Top wide part */}
    <path d="M-200,-220 L200,-220 L60,-30 L60,30 L200,220 L-200,220 L-60,30 L-60,-30 Z" fill="#1E1E2E" stroke="#555570" strokeWidth="2"/>
    {/* Narrow neck highlight */}
    <rect x="-60" y="-30" width="120" height="60" rx="4" fill="#E85650" opacity="0.15"/>
    <line x1="-60" y1="-30" x2="-60" y2="30" stroke="#E85650" strokeWidth="2" opacity="0.6"/>
    <line x1="60" y1="-30" x2="60" y2="30" stroke="#E85650" strokeWidth="2" opacity="0.6"/>
    <text x="0" y="8" textAnchor="middle" fill="#E85650" fontFamily="sans-serif" fontSize="20" fontWeight="bold">瓶颈</text>
    <text x="0" y="28" textAnchor="middle" fill="#E85650" fontFamily="sans-serif" fontSize="11" opacity="0.7">Bottleneck</text>
  </g>
);

const PersonsStuck = (
  <g transform="translate(600, 337)">
    {[-30, 0, 30].map((dx, i) => (
      <g key={i} transform={`translate(${dx}, ${-15 + i * 8})`} opacity={0.7 - i * 0.1}>
        <circle cx="0" cy="-10" r="7" fill="#555570"/>
        <rect x="-6" y="0" width="12" height="16" rx="4" fill="#555570"/>
      </g>
    ))}
  </g>
);

const AiFastSide = (
  <g transform="translate(180, 180)">
    <rect x="0" y="0" width="180" height="100" rx="12" fill="#252538"/>
    <text x="90" y="35" textAnchor="middle" fill="#5BAD7A" fontFamily="sans-serif" fontSize="20" fontWeight="bold">AI Output</text>
    {/* Speed lines */}
    {[50, 62, 74, 86].map((y, i) => (
      <line key={i} x1={30 + i * 8} y1={y} x2={150 - i * 5} y2={y} stroke="#5BAD7A" strokeWidth="2" strokeLinecap="round" opacity={0.7 - i * 0.1}/>
    ))}
    <g transform="translate(70, 110)">
      <rect x="0" y="0" width="80" height="30" rx="8" fill="#5BAD7A" opacity="0.2"/>
      <text x="40" y="21" textAnchor="middle" fill="#5BAD7A" fontFamily="sans-serif" fontSize="16" fontWeight="bold">分钟</text>
    </g>
    {/* Fast arrow */}
    <line x1="190" y1="50" x2="280" y2="50" stroke="#5BAD7A" strokeWidth="2.5" strokeDasharray="6 4" opacity="0.5"/>
    <polygon points="280,50 270,44 270,56" fill="#5BAD7A" opacity="0.5"/>
  </g>
);

const HumanSlowSide = (
  <g transform="translate(820, 180)">
    <rect x="0" y="0" width="180" height="100" rx="12" fill="#252538"/>
    <text x="90" y="35" textAnchor="middle" fill="#E8734A" fontFamily="sans-serif" fontSize="20" fontWeight="bold">Human Review</text>
    {/* Calendar icon */}
    <rect x="55" y="48" width="36" height="32" rx="4" fill="none" stroke="#E8734A" strokeWidth="1.5" opacity="0.6"/>
    <line x1="55" y1="58" x2="91" y2="58" stroke="#E8734A" strokeWidth="1.5" opacity="0.6"/>
    <circle cx="67" cy="70" r="2.5" fill="#E8734A" opacity="0.5"/>
    <circle cx="79" cy="70" r="2.5" fill="#E8734A" opacity="0.5"/>
    <rect x="107" y="55" width="45" height="20" rx="4" fill="#E8734A" opacity="0.15"/>
    <text x="130" y="70" textAnchor="middle" fill="#E8734A" fontFamily="sans-serif" fontSize="12">排期</text>
    <g transform="translate(50, 110)">
      <rect x="0" y="0" width="80" height="30" rx="8" fill="#E85650" opacity="0.2"/>
      <text x="40" y="21" textAnchor="middle" fill="#E85650" fontFamily="sans-serif" fontSize="16" fontWeight="bold">天</text>
    </g>
    {/* Slow arrow */}
    <line x1="-100" y1="50" x2="-10" y2="50" stroke="#E8734A" strokeWidth="2.5" strokeDasharray="6 4" opacity="0.5"/>
    <polygon points="-100,50 -90,44 -90,56" fill="#E8734A" opacity="0.5"/>
  </g>
);

const VsLabel = (
  <g transform="translate(564, 420)">
    <rect x="0" y="0" width="72" height="36" rx="18" fill="#E8B84A" opacity="0.2"/>
    <text x="36" y="25" textAnchor="middle" fill="#E8B84A" fontFamily="sans-serif" fontSize="18" fontWeight="bold">VS</text>
  </g>
);

const Caption = (
  <text x="600" y="600" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="15" opacity="0.6">
    人工反馈环路扼杀 AI 速度优势
  </text>
);

export const bottleneckSceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: <defs/>,
  background: Background,
  fragments: [
    { id: "funnel", content: Funnel, enterFrom: { x: 0, y: -400 }, enterDelay: 0, floatAmp: { x: 8, y: 12 }, floatPeriod: { x: 7, y: 8 }, exitTo: { x: 0, y: 500 }, exitScale: 0.85 },
    { id: "persons", content: PersonsStuck, enterFrom: { x: 0, y: 300 }, enterDelay: 200, floatAmp: { x: 10, y: 10 }, floatPeriod: { x: 5, y: 6 }, exitTo: { x: 0, y: 400 } },
    { id: "aiFast", content: AiFastSide, enterFrom: { x: -500, y: 0 }, enterDelay: 150, floatAmp: { x: 14, y: 16 }, floatPeriod: { x: 5.5, y: 6.5 }, exitTo: { x: -600, y: -100 }, exitSpin: -5 },
    { id: "humanSlow", content: HumanSlowSide, enterFrom: { x: 500, y: 0 }, enterDelay: 200, floatAmp: { x: 14, y: 16 }, floatPeriod: { x: 5, y: 7 }, exitTo: { x: 600, y: -100 }, exitSpin: 5 },
    { id: "vs", content: VsLabel, enterFrom: { x: 0, y: 200 }, enterDelay: 400, floatAmp: { x: 18, y: 22 }, floatPeriod: { x: 3.5, y: 4 }, exitTo: { x: 0, y: 300 }, exitScale: 1.3 },
    { id: "caption", content: Caption, enterFrom: { x: 0, y: 200 }, enterDelay: 550, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 8, y: 9 }, exitTo: { x: 0, y: 200 } },
  ],
};
