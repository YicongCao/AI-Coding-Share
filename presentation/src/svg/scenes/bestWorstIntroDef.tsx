import type { SvgSceneDef } from "../SvgScene";

const Background = <rect width="1200" height="675" fill="#2B2B3D"/>;

const VibeCodingTitle = (
  <g>
    <rect x="420" y="30" width="360" height="56" rx="12" fill="#252538" stroke="#6EC8E6" strokeWidth="1.5"/>
    <text x="600" y="66" textAnchor="middle" fill="#6EC8E6" fontFamily="sans-serif" fontSize="26" fontWeight="bold">Vibe Coding</text>
  </g>
);

const BrightHalf = (
  <g>
    <rect x="40" y="110" width="520" height="470" rx="18" fill="#1E1E2E" opacity="0.6"/>
    <circle cx="300" cy="340" r="180" fill="#E8B84A" opacity="0.06"/>
    <circle cx="300" cy="340" r="120" fill="#E8B84A" opacity="0.08"/>
    {/* Upward arrows */}
    <path d="M200,450 L200,260" stroke="#5BAD7A" strokeWidth="3" opacity="0.5"/>
    <polygon points="200,250 190,270 210,270" fill="#5BAD7A" opacity="0.5"/>
    <path d="M300,420 L300,230" stroke="#5BAD7A" strokeWidth="3" opacity="0.6"/>
    <polygon points="300,220 290,240 310,240" fill="#5BAD7A" opacity="0.6"/>
    <path d="M400,440 L400,280" stroke="#5BAD7A" strokeWidth="3" opacity="0.45"/>
    <polygon points="400,270 390,290 410,290" fill="#5BAD7A" opacity="0.45"/>
    {/* Stars */}
    {[{ x: 150, y: 200 }, { x: 380, y: 180 }, { x: 250, y: 500 }, { x: 440, y: 420 }].map((s, i) => (
      <g key={i} transform={`translate(${s.x}, ${s.y})`} opacity={0.35 + i * 0.1}>
        <line x1="-6" y1="0" x2="6" y2="0" stroke="#E8B84A" strokeWidth="1.5"/>
        <line x1="0" y1="-6" x2="0" y2="6" stroke="#E8B84A" strokeWidth="1.5"/>
      </g>
    ))}
    <circle cx="300" cy="300" r="28" fill="none" stroke="#E8B84A" strokeWidth="2" opacity="0.3"/>
    <path d="M284,300 L296,312 L316,288" fill="none" stroke="#E8B84A" strokeWidth="3" strokeLinecap="round" opacity="0.5"/>
  </g>
);

const DarkHalf = (
  <g>
    <rect x="640" y="110" width="520" height="470" rx="18" fill="#1E1E2E" opacity="0.6"/>
    <circle cx="900" cy="340" r="180" fill="#E85650" opacity="0.05"/>
    <circle cx="900" cy="340" r="120" fill="#E85650" opacity="0.07"/>
    {/* Downward arrows */}
    <path d="M800,230 L800,420" stroke="#E85650" strokeWidth="3" opacity="0.5"/>
    <polygon points="800,430 790,410 810,410" fill="#E85650" opacity="0.5"/>
    <path d="M900,250 L900,440" stroke="#E85650" strokeWidth="3" opacity="0.6"/>
    <polygon points="900,450 890,430 910,430" fill="#E85650" opacity="0.6"/>
    <path d="M1000,240 L1000,400" stroke="#E85650" strokeWidth="3" opacity="0.45"/>
    <polygon points="1000,410 990,390 1010,390" fill="#E85650" opacity="0.45"/>
    {/* Warning signs */}
    {[{ x: 760, y: 180 }, { x: 1040, y: 200 }, { x: 850, y: 490 }, { x: 1000, y: 460 }].map((w, i) => (
      <g key={i} transform={`translate(${w.x}, ${w.y})`} opacity={0.3 + i * 0.08}>
        <path d="M0,-8 L7,6 L-7,6 Z" fill="none" stroke="#E85650" strokeWidth="1.5"/>
        <line x1="0" y1="-4" x2="0" y2="1" stroke="#E85650" strokeWidth="1.5"/>
        <circle cx="0" cy="3.5" r="1" fill="#E85650"/>
      </g>
    ))}
    <circle cx="900" cy="300" r="28" fill="none" stroke="#E85650" strokeWidth="2" opacity="0.3"/>
    <line x1="882" y1="282" x2="918" y2="318" stroke="#E85650" strokeWidth="3" strokeLinecap="round" opacity="0.4"/>
    <line x1="918" y1="282" x2="882" y2="318" stroke="#E85650" strokeWidth="3" strokeLinecap="round" opacity="0.4"/>
  </g>
);

const CenterDivider = (
  <g>
    <line x1="600" y1="120" x2="600" y2="570" stroke="#555570" strokeWidth="2" strokeDasharray="8 6" opacity="0.5"/>
    <circle cx="600" cy="345" r="10" fill="#252538" stroke="#555570" strokeWidth="1.5"/>
  </g>
);

const BestLabel = (
  <g>
    <text x="300" y="160" textAnchor="middle" fill="#E8B84A" fontFamily="sans-serif" fontSize="28" fontWeight="bold">最好的时代</text>
  </g>
);

const WorstLabel = (
  <g>
    <text x="900" y="160" textAnchor="middle" fill="#E85650" fontFamily="sans-serif" fontSize="28" fontWeight="bold">最坏的时代</text>
  </g>
);

export const bestWorstIntroSceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: <defs/>,
  background: Background,
  fragments: [
    { id: "vibeCodingTitle", content: VibeCodingTitle, enterFrom: { x: 0, y: -200 }, enterDelay: 0, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 6.0, y: 8.0 }, exitTo: { x: 0, y: -300 } },
    { id: "brightHalf", content: BrightHalf, enterFrom: { x: -500, y: 0 }, enterDelay: 100, floatAmp: { x: 10, y: 14 }, floatPeriod: { x: 5.5, y: 7.0 }, exitTo: { x: -600, y: 0 }, exitSpin: -2 },
    { id: "darkHalf", content: DarkHalf, enterFrom: { x: 500, y: 0 }, enterDelay: 100, floatAmp: { x: 10, y: 14 }, floatPeriod: { x: 5.5, y: 7.0 }, exitTo: { x: 600, y: 0 }, exitSpin: 2 },
    { id: "centerDivider", content: CenterDivider, enterFrom: { x: 0, y: 300 }, enterDelay: 250, floatAmp: { x: 8, y: 8 }, floatPeriod: { x: 7.0, y: 9.0 }, exitTo: { x: 0, y: -400 } },
    { id: "bestLabel", content: BestLabel, enterFrom: { x: -300, y: -100 }, enterDelay: 350, floatAmp: { x: 12, y: 16 }, floatPeriod: { x: 4.5, y: 5.5 }, exitTo: { x: -400, y: -200 } },
    { id: "worstLabel", content: WorstLabel, enterFrom: { x: 300, y: -100 }, enterDelay: 350, floatAmp: { x: 12, y: 16 }, floatPeriod: { x: 4.5, y: 5.5 }, exitTo: { x: 400, y: -200 } },
  ],
};
