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
    <g transform="translate(300, 360)">
      <ellipse cx="0" cy="-142" rx="56" ry="14" fill="none" stroke="#E8B84A" strokeWidth="6" opacity="0.92"/>
      <path d="M-78,-42 C-155,-104 -205,-45 -154,38 C-119,93 -70,70 -54,18 Z" fill="#F7DFA3" opacity="0.9"/>
      <path d="M78,-42 C155,-104 205,-45 154,38 C119,93 70,70 54,18 Z" fill="#F7DFA3" opacity="0.9"/>
      <path d="M-122,-34 C-102,-22 -83,-7 -62,14" fill="none" stroke="#E8B84A" strokeWidth="3" opacity="0.45"/>
      <path d="M122,-34 C102,-22 83,-7 62,14" fill="none" stroke="#E8B84A" strokeWidth="3" opacity="0.45"/>
      <circle cx="0" cy="-74" r="42" fill="#F7DFA3" stroke="#E8B84A" strokeWidth="2.5"/>
      <circle cx="-15" cy="-80" r="4" fill="#2B2B3D" opacity="0.78"/>
      <circle cx="15" cy="-80" r="4" fill="#2B2B3D" opacity="0.78"/>
      <path d="M-15,-60 Q0,-49 15,-60" fill="none" stroke="#2B2B3D" strokeWidth="2.5" strokeLinecap="round" opacity="0.75"/>
      <path d="M-56,6 Q0,-26 56,6 L34,112 L-34,112 Z" fill="#5BAD7A" opacity="0.78"/>
      <path d="M-34,28 L-74,74" stroke="#F7DFA3" strokeWidth="11" strokeLinecap="round"/>
      <path d="M34,28 L74,74" stroke="#F7DFA3" strokeWidth="11" strokeLinecap="round"/>
      <path d="M-18,52 L-2,68 L28,34" fill="none" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" opacity="0.9"/>
    </g>
    {[{ x: 150, y: 200 }, { x: 420, y: 185 }, { x: 165, y: 495 }, { x: 455, y: 445 }].map((s, i) => (
      <g key={i} transform={`translate(${s.x}, ${s.y})`} opacity={0.35 + i * 0.1}>
        <line x1="-6" y1="0" x2="6" y2="0" stroke="#E8B84A" strokeWidth="1.5"/>
        <line x1="0" y1="-6" x2="0" y2="6" stroke="#E8B84A" strokeWidth="1.5"/>
      </g>
    ))}
  </g>
);

const DarkHalf = (
  <g>
    <rect x="640" y="110" width="520" height="470" rx="18" fill="#1E1E2E" opacity="0.6"/>
    <circle cx="900" cy="340" r="180" fill="#E85650" opacity="0.05"/>
    <circle cx="900" cy="340" r="120" fill="#E85650" opacity="0.07"/>
    <g transform="translate(900, 360)">
      <path d="M-72,-96 C-118,-154 -42,-147 -30,-105 Z" fill="#E85650" stroke="#E8734A" strokeWidth="2"/>
      <path d="M72,-96 C118,-154 42,-147 30,-105 Z" fill="#E85650" stroke="#E8734A" strokeWidth="2"/>
      <path d="M-56,-16 Q0,-52 56,-16 L44,112 L-44,112 Z" fill="#E85650" opacity="0.78"/>
      <circle cx="0" cy="-68" r="48" fill="#E85650" stroke="#E8734A" strokeWidth="2.5"/>
      <path d="M-25,-76 L-8,-68 L-25,-60" fill="none" stroke="#2B2B3D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M25,-76 L8,-68 L25,-60" fill="none" stroke="#2B2B3D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M-20,-45 Q0,-60 20,-45" fill="none" stroke="#2B2B3D" strokeWidth="3" strokeLinecap="round"/>
      <path d="M-48,34 C-98,48 -92,107 -36,94" fill="none" stroke="#E85650" strokeWidth="8" strokeLinecap="round"/>
      <path d="M-36,94 L-56,82 L-48,110 Z" fill="#E85650"/>
      <line x1="72" y1="-10" x2="72" y2="116" stroke="#E8B84A" strokeWidth="5" strokeLinecap="round"/>
      <path d="M50,4 L72,-18 L94,4" fill="none" stroke="#E8B84A" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M-30,44 L30,94" stroke="#2B2B3D" strokeWidth="5" strokeLinecap="round" opacity="0.45"/>
      <path d="M30,44 L-30,94" stroke="#2B2B3D" strokeWidth="5" strokeLinecap="round" opacity="0.45"/>
    </g>
    {[{ x: 760, y: 180 }, { x: 1040, y: 200 }, { x: 780, y: 500 }, { x: 1030, y: 475 }].map((w, i) => (
      <g key={i} transform={`translate(${w.x}, ${w.y})`} opacity={0.3 + i * 0.08}>
        <path d="M0,-8 L7,6 L-7,6 Z" fill="none" stroke="#E85650" strokeWidth="1.5"/>
        <line x1="0" y1="-4" x2="0" y2="1" stroke="#E85650" strokeWidth="1.5"/>
        <circle cx="0" cy="3.5" r="1" fill="#E85650"/>
      </g>
    ))}
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
