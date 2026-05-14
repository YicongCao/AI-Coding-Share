import type { SvgSceneDef } from "../SvgScene";

const Background = (
  <g>
    <rect width="1200" height="675" fill="#2B2B3D"/>
    <rect width="1200" height="675" fill="url(#keyPointTitle4BgGlow)"/>
  </g>
);

const GridBg = (
  <g opacity="0.12">
    {Array.from({ length: 16 }, (_, i) => <line key={`v${i}`} x1={75 * i} y1="0" x2={75 * i} y2="675" stroke="#555570" strokeWidth="0.5"/>)}
    {Array.from({ length: 10 }, (_, i) => <line key={`h${i}`} x1="0" y1={67.5 * i} x2="1200" y2={67.5 * i} stroke="#555570" strokeWidth="0.5"/>)}
  </g>
);

const BigNumber = (
  <g transform="translate(100, 90)">
    <text x="130" y="330" textAnchor="middle" fill="#E8734A" fontFamily="sans-serif" fontSize="280" fontWeight="900" opacity="0.35">4</text>
  </g>
);

const TitleCard = (
  <g transform="translate(480, 160)">
    <rect x="0" y="0" width="580" height="240" rx="16" fill="#1E1E2E" stroke="#555570" strokeWidth="1.5"/>
    <path d="M16,16 L16,50 M16,16 L50,16" fill="none" stroke="#E8B84A" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M564,16 L564,50 M564,16 L530,16" fill="none" stroke="#E8B84A" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M16,224 L16,190 M16,224 L50,224" fill="none" stroke="#E8B84A" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M564,224 L564,190 M564,224 L530,224" fill="none" stroke="#E8B84A" strokeWidth="2.5" strokeLinecap="round"/>
    <text x="290" y="88" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="16" fontWeight="bold" opacity="0.5">KEY POINT #4</text>
    <text x="290" y="155" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="38" fontWeight="bold">不要一步登天</text>
    <text x="290" y="200" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="16" opacity="0.7">Step by step, not all at once</text>
  </g>
);

const Staircase = (
  <g transform="translate(120, 440)">
    {[0, 1, 2, 3, 4].map((i) => (
      <rect key={i} x={i * 60} y={-i * 36} width="56" height={36 + i * 36} rx="4" fill="#252538" stroke="#5BAD7A" strokeWidth="1.5" opacity={0.5 + i * 0.12}/>
    ))}
    <path d="M30,4 L90,-32 L150,-68 L210,-104 L270,-140" fill="none" stroke="#5BAD7A" strokeWidth="2" strokeDasharray="6 4" opacity="0.6"/>
  </g>
);

const CloudWithX = (
  <g transform="translate(900, 440)">
    <path d="M30,40 Q0,40 0,20 Q0,0 20,0 Q25,-15 45,-15 Q65,-15 70,0 Q90,0 90,20 Q90,40 60,40 Z" fill="none" stroke="#555570" strokeWidth="1.5" opacity="0.5"/>
    <text x="45" y="25" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="11" opacity="0.6">skip?</text>
    <line x1="15" y1="5" x2="75" y2="35" stroke="#E85650" strokeWidth="2.5" strokeLinecap="round" opacity="0.7"/>
    <line x1="75" y1="5" x2="15" y2="35" stroke="#E85650" strokeWidth="2.5" strokeLinecap="round" opacity="0.7"/>
    <path d="M45,-15 L45,-55" stroke="#E85650" strokeWidth="2" strokeDasharray="6 4" markerEnd="url(#arrowRed)" opacity="0.5"/>
  </g>
);

const AccentDots = (
  <g opacity="0.3">
    <circle cx="460" cy="480" r="4" fill="#E8734A"/>
    <circle cx="480" cy="505" r="3" fill="#6EC8E6"/>
    <circle cx="1100" cy="130" r="3.5" fill="#4A7BCC"/>
    <circle cx="1120" cy="155" r="2.5" fill="#E8B84A"/>
  </g>
);

const Defs = (
  <defs>
    <marker id="arrowRed" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 Z" fill="#E85650"/>
    </marker>
    <radialGradient id="keyPointTitle4BgGlow" cx="50%" cy="30%" r="60%">
      <stop offset="0%" stopColor="#E8B84A" stopOpacity="0.12"/>
      <stop offset="100%" stopColor="#E8B84A" stopOpacity="0"/>
    </radialGradient>
  </defs>
);

export const keyPointTitle4SceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: Defs,
  background: Background,
  fragments: [
    { id: "grid", content: GridBg, enterFrom: { x: 0, y: -200 }, enterDelay: 0, floatAmp: { x: 8, y: 8 }, floatPeriod: { x: 9, y: 8 } },
    { id: "bigNumber", content: BigNumber, enterFrom: { x: -500, y: 0 }, enterDelay: 100, floatAmp: { x: 12, y: 16 }, floatPeriod: { x: 6, y: 7 }, exitTo: { x: -600, y: 0 }, exitSpin: -6 },
    { id: "titleCard", content: TitleCard, enterFrom: { x: 600, y: 0 }, enterDelay: 200, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 5.5, y: 6.5 }, exitTo: { x: 700, y: -100 }, exitScale: 0.9 },
    { id: "staircase", content: Staircase, enterFrom: { x: -400, y: 300 }, enterDelay: 350, floatAmp: { x: 14, y: 10 }, floatPeriod: { x: 4.5, y: 5.5 }, exitTo: { x: -500, y: 300 }, exitSpin: -4 },
    { id: "cloudX", content: CloudWithX, enterFrom: { x: 300, y: -200 }, enterDelay: 450, floatAmp: { x: 16, y: 20 }, floatPeriod: { x: 4, y: 5 }, exitTo: { x: 400, y: -300 }, exitSpin: 8 },
    { id: "dots", content: AccentDots, enterFrom: { x: 0, y: 0 }, enterDelay: 550, floatAmp: { x: 14, y: 18 }, floatPeriod: { x: 3.5, y: 4.5 } },
  ],
};
