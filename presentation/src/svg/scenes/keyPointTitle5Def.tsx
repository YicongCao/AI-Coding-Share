import type { SvgSceneDef } from "../SvgScene";

const Background = (
  <g>
    <rect width="1200" height="675" fill="#2B2B3D"/>
    <rect width="1200" height="675" fill="url(#keyPointTitle5BgGlow)"/>
  </g>
);

const Defs = (
  <defs>
    <radialGradient id="keyPointTitle5BgGlow" cx="50%" cy="30%" r="60%">
      <stop offset="0%" stopColor="#E8B84A" stopOpacity="0.12"/>
      <stop offset="100%" stopColor="#E8B84A" stopOpacity="0"/>
    </radialGradient>
  </defs>
);


const GridBg = (
  <g opacity="0.1">
    {Array.from({ length: 16 }, (_, i) => <line key={`v${i}`} x1={75 * i} y1="0" x2={75 * i} y2="675" stroke="#555570" strokeWidth="0.5"/>)}
    {Array.from({ length: 10 }, (_, i) => <line key={`h${i}`} x1="0" y1={67.5 * i} x2="1200" y2={67.5 * i} stroke="#555570" strokeWidth="0.5"/>)}
  </g>
);

const BigNumber = (
  <g transform="translate(80, 80)">
    <text x="130" y="330" textAnchor="middle" fill="#6EC8E6" fontFamily="sans-serif" fontSize="300" fontWeight="900" opacity="0.3">5</text>
  </g>
);

const TitleCard = (
  <g transform="translate(460, 150)">
    <rect x="0" y="0" width="600" height="250" rx="16" fill="#1E1E2E" stroke="#555570" strokeWidth="1.5"/>
    <path d="M16,16 L16,50 M16,16 L50,16" fill="none" stroke="#6EC8E6" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M584,16 L584,50 M584,16 L550,16" fill="none" stroke="#6EC8E6" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M16,234 L16,200 M16,234 L50,234" fill="none" stroke="#6EC8E6" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M584,234 L584,200 M584,234 L550,234" fill="none" stroke="#6EC8E6" strokeWidth="2.5" strokeLinecap="round"/>
    <text x="300" y="85" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="16" fontWeight="bold" opacity="0.5">KEY POINT #5</text>
    <text x="300" y="155" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="40" fontWeight="bold">让 Agent 又快又爽</text>
    <text x="300" y="210" textAnchor="middle" fill="#6EC8E6" fontFamily="sans-serif" fontSize="18" opacity="0.6">Speed &amp; Delight</text>
  </g>
);

const RocketIcon = (
  <g transform="translate(920, 440)">
    <path d="M0,50 Q0,20 20,0 Q40,-10 50,0 Q60,20 60,50 L45,65 L15,65 Z" fill="none" stroke="#E8734A" strokeWidth="2.5" strokeLinejoin="round"/>
    <ellipse cx="30" cy="28" rx="8" ry="8" fill="#E8734A" opacity="0.4" stroke="#F09570" strokeOpacity="0.3" strokeWidth="1"/>
    <path d="M15,65 L20,80 L30,72 L40,80 L45,65" fill="#E8B84A" opacity="0.6"/>
    <path d="M10,45 L-5,55 L8,55" fill="none" stroke="#E8734A" strokeWidth="1.5" opacity="0.5"/>
    <path d="M50,45 L65,55 L52,55" fill="none" stroke="#E8734A" strokeWidth="1.5" opacity="0.5"/>
    {[0, 1, 2].map(i => (
      <line key={i} x1={20 + i * 10} y1={85 + i * 6} x2={20 + i * 10} y2={95 + i * 4} stroke="#E8B84A" strokeWidth="2" strokeLinecap="round" opacity={0.6 - i * 0.15}/>
    ))}
  </g>
);

const LightningBolt = (
  <g transform="translate(350, 450)">
    <polygon points="30,0 10,35 25,35 15,70 45,28 30,28 40,0" fill="#E8B84A" opacity="0.7"/>
    <polygon points="30,0 10,35 25,35 15,70 45,28 30,28 40,0" fill="none" stroke="#E8B84A" strokeWidth="1.5"/>
  </g>
);

const SpeedLines = (
  <g opacity="0.25">
    {[180, 220, 260, 540, 580].map((y, i) => (
      <line key={i} x1={50 + i * 20} y1={y} x2={150 + i * 15} y2={y} stroke="#6EC8E6" strokeWidth="2" strokeLinecap="round"/>
    ))}
  </g>
);

export const keyPointTitle5SceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: Defs,
  background: Background,
  fragments: [
    { id: "grid", content: GridBg, enterFrom: { x: 0, y: -200 }, enterDelay: 0, floatAmp: { x: 8, y: 8 }, floatPeriod: { x: 9, y: 8 } },
    { id: "bigNumber", content: BigNumber, enterFrom: { x: -500, y: 0 }, enterDelay: 100, floatAmp: { x: 12, y: 16 }, floatPeriod: { x: 6, y: 7 }, exitTo: { x: -600, y: 0 }, exitSpin: -6 },
    { id: "titleCard", content: TitleCard, enterFrom: { x: 600, y: 0 }, enterDelay: 200, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 5.5, y: 6.5 }, exitTo: { x: 700, y: -100 }, exitScale: 0.9 },
    { id: "rocket", content: RocketIcon, enterFrom: { x: 300, y: 300 }, enterDelay: 350, floatAmp: { x: 16, y: 20 }, floatPeriod: { x: 4, y: 5 }, floatRotate: 2, exitTo: { x: 400, y: 300 }, exitSpin: 15 },
    { id: "lightning", content: LightningBolt, enterFrom: { x: -200, y: 200 }, enterDelay: 450, floatAmp: { x: 14, y: 18 }, floatPeriod: { x: 3.5, y: 4.5 }, exitTo: { x: -300, y: 200 }, exitSpin: -10 },
    { id: "speedLines", content: SpeedLines, enterFrom: { x: -400, y: 0 }, enterDelay: 550, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 5, y: 6 } },
  ],
};
