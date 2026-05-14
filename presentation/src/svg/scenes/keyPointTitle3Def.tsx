import type { SvgSceneDef } from "../SvgScene";

const Background = (
  <g>
    <rect width="1200" height="675" fill="#2B2B3D"/>
    <rect width="1200" height="675" fill="url(#keyPointTitle3BgGlow)"/>
  </g>
);

const Defs = (
  <defs>
    <radialGradient id="keyPointTitle3BgGlow" cx="50%" cy="30%" r="60%">
      <stop offset="0%" stopColor="#E8B84A" stopOpacity="0.12"/>
      <stop offset="100%" stopColor="#E8B84A" stopOpacity="0"/>
    </radialGradient>
  </defs>
);


const GridBg = (
  <g opacity="0.12">
    {Array.from({ length: 16 }, (_, i) => <line key={`v${i}`} x1={75 * i} y1="0" x2={75 * i} y2="675" stroke="#555570" strokeWidth="0.5"/>)}
    {Array.from({ length: 10 }, (_, i) => <line key={`h${i}`} x1="0" y1={67.5 * i} x2="1200" y2={67.5 * i} stroke="#555570" strokeWidth="0.5"/>)}
  </g>
);

const BigNumber = (
  <g transform="translate(120, 100)">
    <path d="M20,0 Q0,0 0,30 L0,140 Q0,170 20,170 L60,170 Q100,170 130,140 L130,120 Q130,90 120,80 Q100,60 60,60 L40,60 Q20,60 20,50 L20,30 Q20,20 40,20 L130,20 L130,0 Z M50,80 L90,80 Q110,80 110,100 L110,140 Q110,150 90,150 L20,150 L20,100 Q20,80 50,80 Z" fill="#E8734A" opacity="0.15"/>
    <text x="80" y="340" textAnchor="middle" fill="#E8734A" fontFamily="sans-serif" fontSize="280" fontWeight="900" opacity="0.35">3</text>
  </g>
);

const TitleCard = (
  <g transform="translate(500, 160)">
    <rect x="0" y="0" width="560" height="240" rx="16" fill="#1E1E2E" stroke="#555570" strokeWidth="1.5"/>
    <path d="M16,16 L16,50 M16,16 L50,16" fill="none" stroke="#E8734A" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M544,16 L544,50 M544,16 L510,16" fill="none" stroke="#E8734A" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M16,224 L16,190 M16,224 L50,224" fill="none" stroke="#E8734A" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M544,224 L544,190 M544,224 L510,224" fill="none" stroke="#E8734A" strokeWidth="2.5" strokeLinecap="round"/>
    <text x="280" y="90" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="16" fontWeight="bold" opacity="0.5">KEY POINT #3</text>
    <text x="280" y="145" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="38" fontWeight="bold">聪明人用 AI 反而更累</text>
    <text x="280" y="190" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="18">Smart People Get More Tired Using AI</text>
  </g>
);

const TiredPerson = (
  <g transform="translate(140, 440)">
    <circle cx="40" cy="15" r="18" fill="#E85650" opacity="0.7"/>
    <path d="M40,33 L40,80 M40,50 L18,70 M40,50 L62,70 M40,80 L25,110 M40,80 L55,110" fill="none" stroke="#E85650" strokeWidth="3" strokeLinecap="round" opacity="0.7"/>
    <path d="M30,8 L35,14" fill="none" stroke="#2B2B3D" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M45,8 L50,14" fill="none" stroke="#2B2B3D" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M32,22 Q40,18 48,22" fill="none" stroke="#2B2B3D" strokeWidth="2" strokeLinecap="round"/>
    <text x="40" y="135" textAnchor="middle" fill="#E85650" fontFamily="sans-serif" fontSize="13" opacity="0.7">疲惫</text>
  </g>
);

const WeightBurden = (
  <g transform="translate(830, 440)">
    <rect x="0" y="30" width="120" height="20" rx="4" fill="#555570" opacity="0.6"/>
    <circle cx="10" cy="60" r="22" fill="#E85650" opacity="0.5"/>
    <circle cx="110" cy="60" r="22" fill="#E85650" opacity="0.5"/>
    <circle cx="60" cy="55" r="30" fill="#E85650" opacity="0.35"/>
    <text x="60" y="62" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="16" fontWeight="bold">AI</text>
    <line x1="60" y1="0" x2="60" y2="30" stroke="#555570" strokeWidth="3"/>
    <text x="60" y="105" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="13">负担</text>
  </g>
);

const AccentDots = (
  <g opacity="0.3">
    <circle cx="480" cy="480" r="4" fill="#E8B84A"/>
    <circle cx="500" cy="500" r="3" fill="#6EC8E6"/>
    <circle cx="1100" cy="120" r="3.5" fill="#E8734A"/>
    <circle cx="1120" cy="145" r="2.5" fill="#4A7BCC"/>
  </g>
);

export const keyPointTitle3SceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: Defs,
  background: Background,
  fragments: [
    { id: "grid", content: GridBg, enterFrom: { x: 0, y: -200 }, enterDelay: 0, floatAmp: { x: 8, y: 8 }, floatPeriod: { x: 9, y: 8 } },
    { id: "bigNumber", content: BigNumber, enterFrom: { x: -500, y: 0 }, enterDelay: 100, floatAmp: { x: 12, y: 16 }, floatPeriod: { x: 6, y: 7 }, exitTo: { x: -600, y: 0 }, exitSpin: -6 },
    { id: "titleCard", content: TitleCard, enterFrom: { x: 600, y: 0 }, enterDelay: 200, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 5.5, y: 6.5 }, exitTo: { x: 700, y: -100 }, exitScale: 0.9 },
    { id: "tiredPerson", content: TiredPerson, enterFrom: { x: -300, y: 300 }, enterDelay: 350, floatAmp: { x: 14, y: 18 }, floatPeriod: { x: 4.5, y: 5.5 }, exitTo: { x: -400, y: 300 }, exitSpin: -10 },
    { id: "weight", content: WeightBurden, enterFrom: { x: 300, y: 300 }, enterDelay: 400, floatAmp: { x: 16, y: 20 }, floatPeriod: { x: 4, y: 5 }, exitTo: { x: 400, y: 300 }, exitSpin: 12 },
    { id: "dots", content: AccentDots, enterFrom: { x: 0, y: 0 }, enterDelay: 500, floatAmp: { x: 14, y: 18 }, floatPeriod: { x: 3.5, y: 4.5 } },
  ],
};
