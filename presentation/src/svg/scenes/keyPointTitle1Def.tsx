import type { SvgSceneDef } from "../SvgScene";

const Background = <rect width="1200" height="675" fill="#2B2B3D"/>;

const GridBg = (
  <g opacity="0.12">
    {Array.from({ length: 16 }, (_, i) => <line key={`v${i}`} x1={75 * i} y1="0" x2={75 * i} y2="675" stroke="#555570" strokeWidth="0.5"/>)}
    {Array.from({ length: 10 }, (_, i) => <line key={`h${i}`} x1="0" y1={67.5 * i} x2="1200" y2={67.5 * i} stroke="#555570" strokeWidth="0.5"/>)}
  </g>
);

const BigNumber = (
  <g transform="translate(120, 100)">
    <path d="M80,0 L140,0 L140,420 L190,420 L190,470 L30,470 L30,420 L80,420 Z M80,0 L30,70 L30,130 L80,70 Z" fill="#4A7BCC" opacity="0.15"/>
    <path d="M85,5 L135,5 L135,415 L185,415 L185,465 L35,465 L35,415 L85,415 Z M85,5 L35,75 L35,125 L85,75 Z" fill="none" stroke="#4A7BCC" strokeWidth="3" opacity="0.6"/>
    <text x="110" y="340" textAnchor="middle" fill="#4A7BCC" fontFamily="sans-serif" fontSize="280" fontWeight="900" opacity="0.35">1</text>
  </g>
);

const TitleCard = (
  <g transform="translate(500, 160)">
    <rect x="0" y="0" width="560" height="240" rx="16" fill="#1E1E2E" stroke="#555570" strokeWidth="1.5"/>
    {/* Corner brackets */}
    <path d="M16,16 L16,50 M16,16 L50,16" fill="none" stroke="#6EC8E6" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M544,16 L544,50 M544,16 L510,16" fill="none" stroke="#6EC8E6" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M16,224 L16,190 M16,224 L50,224" fill="none" stroke="#6EC8E6" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M544,224 L544,190 M544,224 L510,224" fill="none" stroke="#6EC8E6" strokeWidth="2.5" strokeLinecap="round"/>
    <text x="280" y="90" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="16" fontWeight="bold" opacity="0.5">KEY POINT #1</text>
    <text x="280" y="145" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="42" fontWeight="bold">敏捷不再敏捷</text>
    <text x="280" y="190" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="18">Agile is No Longer Agile</text>
  </g>
);

const SprintIcon = (
  <g transform="translate(850, 440)">
    {/* Running figure */}
    <circle cx="30" cy="10" r="12" fill="#E8734A" opacity="0.8"/>
    <path d="M30,22 L30,55 M30,35 L10,50 M30,35 L50,50 M30,55 L15,80 M30,55 L45,80" fill="none" stroke="#E8734A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.8"/>
    {/* Slow sign */}
    <rect x="65" y="20" width="80" height="36" rx="8" fill="#E85650" opacity="0.85"/>
    <text x="105" y="45" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="16" fontWeight="bold">SLOW</text>
    <line x1="60" y1="38" x2="65" y2="38" stroke="#E85650" strokeWidth="2"/>
  </g>
);

const AccentDots = (
  <g opacity="0.3">
    <circle cx="480" cy="480" r="4" fill="#E8B84A"/>
    <circle cx="500" cy="500" r="3" fill="#6EC8E6"/>
    <circle cx="470" cy="510" r="2.5" fill="#5BAD7A"/>
    <circle cx="1100" cy="120" r="3.5" fill="#E8734A"/>
    <circle cx="1120" cy="145" r="2.5" fill="#4A7BCC"/>
  </g>
);

export const keyPointTitle1SceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: <defs/>,
  background: Background,
  fragments: [
    { id: "grid", content: GridBg, enterFrom: { x: 0, y: -200 }, enterDelay: 0, floatAmp: { x: 8, y: 8 }, floatPeriod: { x: 9, y: 8 } },
    { id: "bigNumber", content: BigNumber, enterFrom: { x: -500, y: 0 }, enterDelay: 100, floatAmp: { x: 12, y: 16 }, floatPeriod: { x: 6, y: 7 }, exitTo: { x: -600, y: 0 }, exitSpin: -6 },
    { id: "titleCard", content: TitleCard, enterFrom: { x: 600, y: 0 }, enterDelay: 200, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 5.5, y: 6.5 }, exitTo: { x: 700, y: -100 }, exitScale: 0.9 },
    { id: "sprintIcon", content: SprintIcon, enterFrom: { x: 300, y: 300 }, enterDelay: 400, floatAmp: { x: 16, y: 20 }, floatPeriod: { x: 4, y: 5 }, exitTo: { x: 400, y: 300 }, exitSpin: 12 },
    { id: "accentDots", content: AccentDots, enterFrom: { x: 0, y: 0 }, enterDelay: 500, floatAmp: { x: 14, y: 18 }, floatPeriod: { x: 3.5, y: 4.5 } },
  ],
};
