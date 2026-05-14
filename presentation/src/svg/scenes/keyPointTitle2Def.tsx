import type { SvgSceneDef } from "../SvgScene";

const Background = (
  <g>
    <rect width="1200" height="675" fill="#2B2B3D"/>
    <rect width="1200" height="675" fill="url(#keyPointTitle2BgGlow)"/>
  </g>
);

const Defs = (
  <defs>
    <radialGradient id="keyPointTitle2BgGlow" cx="50%" cy="30%" r="60%">
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
  <g transform="translate(100, 90)">
    <path d="M20,60 Q60,0 140,0 Q210,0 240,50 Q260,90 220,140 L60,380 L260,380 L260,440 L0,440 L0,400 L160,160 Q190,120 180,90 Q170,50 130,50 Q90,50 60,90 Z" fill="#E8734A" opacity="0.15"/>
    <text x="130" y="330" textAnchor="middle" fill="#E8734A" fontFamily="sans-serif" fontSize="340" fontWeight="900" opacity="0.1">2</text>
    <text x="130" y="330" textAnchor="middle" fill="#E8734A" fontFamily="sans-serif" fontSize="280" fontWeight="900" opacity="0.35">2</text>
  </g>
);

const TitleCard = (
  <g transform="translate(480, 160)">
    <rect x="0" y="0" width="580" height="240" rx="16" fill="#1E1E2E" stroke="#555570" strokeWidth="1.5"/>
    <path d="M16,16 L16,50 M16,16 L50,16" fill="none" stroke="#E8B84A" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M564,16 L564,50 M564,16 L530,16" fill="none" stroke="#E8B84A" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M16,224 L16,190 M16,224 L50,224" fill="none" stroke="#E8B84A" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M564,224 L564,190 M564,224 L530,224" fill="none" stroke="#E8B84A" strokeWidth="2.5" strokeLinecap="round"/>
    <text x="290" y="88" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="16" fontWeight="bold" opacity="0.5">KEY POINT #2</text>
    <text x="290" y="148" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="36" fontWeight="bold">不要盲目使用</text>
    <text x="290" y="198" textAnchor="middle" fill="#E8B84A" fontFamily="sans-serif" fontSize="32" fontWeight="bold">Rules / Skills</text>
  </g>
);

const WarningIcon = (
  <g transform="translate(880, 440)">
    <polygon points="40,0 80,70 0,70" fill="none" stroke="#E8B84A" strokeWidth="3" strokeLinejoin="round"/>
    <text x="40" y="58" textAnchor="middle" fill="#E8B84A" fontFamily="sans-serif" fontSize="38" fontWeight="bold">!</text>
    <circle cx="100" cy="20" r="4" fill="#E85650" opacity="0.5"/>
    <circle cx="115" cy="45" r="3" fill="#E8734A" opacity="0.4"/>
  </g>
);

const AccentDots = (
  <g opacity="0.3">
    <circle cx="460" cy="480" r="4" fill="#E8734A"/>
    <circle cx="480" cy="505" r="3" fill="#6EC8E6"/>
    <circle cx="450" cy="515" r="2.5" fill="#5BAD7A"/>
    <circle cx="1100" cy="130" r="3.5" fill="#4A7BCC"/>
    <circle cx="1120" cy="155" r="2.5" fill="#E8B84A"/>
  </g>
);

export const keyPointTitle2SceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: Defs,
  background: Background,
  fragments: [
    { id: "grid", content: GridBg, enterFrom: { x: 0, y: -200 }, enterDelay: 0, floatAmp: { x: 8, y: 8 }, floatPeriod: { x: 9, y: 8 } },
    { id: "bigNumber", content: BigNumber, enterFrom: { x: -500, y: 0 }, enterDelay: 100, floatAmp: { x: 12, y: 16 }, floatPeriod: { x: 6, y: 7 }, exitTo: { x: -600, y: 0 }, exitSpin: -6 },
    { id: "titleCard", content: TitleCard, enterFrom: { x: 600, y: 0 }, enterDelay: 200, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 5.5, y: 6.5 }, exitTo: { x: 700, y: -100 }, exitScale: 0.9 },
    { id: "warningIcon", content: WarningIcon, enterFrom: { x: 300, y: 300 }, enterDelay: 400, floatAmp: { x: 16, y: 20 }, floatPeriod: { x: 4, y: 5 }, exitTo: { x: 400, y: 300 }, exitSpin: 12 },
    { id: "accentDots", content: AccentDots, enterFrom: { x: 0, y: 0 }, enterDelay: 500, floatAmp: { x: 14, y: 18 }, floatPeriod: { x: 3.5, y: 4.5 } },
  ],
};
