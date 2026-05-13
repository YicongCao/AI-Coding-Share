import type { SvgSceneDef } from "../SvgScene";

const Background = <rect width="1200" height="675" fill="#2B2B3D"/>;

const SpeedLinesBg = (
  <g opacity="0.15">
    {Array.from({ length: 12 }, (_, i) => (
      <line key={i} x1={0} y1={160 + i * 30} x2={300 - i * 15} y2={160 + i * 30} stroke="#6EC8E6" strokeWidth={3 - i * 0.2} strokeLinecap="round"/>
    ))}
  </g>
);

const BulletTrain = (
  <g transform="translate(250, 220)">
    <path d="M0,80 Q0,40 60,20 L680,20 Q720,20 720,60 L720,120 Q720,140 680,140 L60,140 Q0,140 0,100 Z" fill="#1E1E2E" stroke="#6EC8E6" strokeWidth="2"/>
    <path d="M0,80 Q0,40 60,20 L120,20 L120,140 L60,140 Q0,140 0,100 Z" fill="#6EC8E6" opacity="0.15"/>
    <path d="M60,20 Q20,50 20,80 Q20,110 60,140" fill="none" stroke="#6EC8E6" strokeWidth="2.5"/>
    {[180, 300, 420, 540, 640].map((x, i) => (
      <rect key={i} x={x} y="45" width="60" height="50" rx="6" fill="#252538" stroke="#555570" strokeWidth="1" opacity="0.7"/>
    ))}
    <line x1="120" y1="80" x2="700" y2="80" stroke="#6EC8E6" strokeWidth="1" opacity="0.3"/>
    <rect x="240" y="145" width="200" height="12" rx="6" fill="#555570" opacity="0.3"/>
    <text x="360" y="115" textAnchor="middle" fill="#6EC8E6" fontFamily="sans-serif" fontSize="14" fontWeight="bold" opacity="0.5">子弹头</text>
  </g>
);

const TrailingLines = (
  <g opacity="0.4">
    {[260, 290, 320, 350, 380].map((y, i) => (
      <line key={i} x1={80 - i * 15} y1={y} x2={230 - i * 20} y2={y} stroke="#6EC8E6" strokeWidth={2.5 - i * 0.3} strokeLinecap="round" opacity={0.8 - i * 0.12}/>
    ))}
  </g>
);

const TypewriterEffect = (
  <g transform="translate(350, 460)">
    <rect x="0" y="0" width="500" height="120" rx="12" fill="#1E1E2E" stroke="#555570" strokeWidth="1.5"/>
    <text x="30" y="35" fill="#5BAD7A" fontFamily="monospace" fontSize="14" opacity="0.7">$ response streaming...</text>
    <text x="30" y="60" fill="#FFFFFF" fontFamily="monospace" fontSize="13" opacity="0.5">第一次用 ChatGPT 时</text>
    <text x="30" y="85" fill="#FFFFFF" fontFamily="monospace" fontSize="13" opacity="0.5">被打字机速度征服了</text>
    <rect x="250" y="92" width="10" height="18" rx="1" fill="#5BAD7A" opacity="0.8"/>
    <rect x="262" y="92" width="10" height="18" rx="1" fill="#5BAD7A" opacity="0.4"/>
  </g>
);

const SpeedBadge = (
  <g transform="translate(900, 480)">
    <rect x="0" y="0" width="120" height="44" rx="22" fill="#E8734A" opacity="0.2"/>
    <text x="60" y="29" textAnchor="middle" fill="#E8734A" fontFamily="sans-serif" fontSize="16" fontWeight="bold">极速体验</text>
  </g>
);

const AccentParticles = (
  <g opacity="0.3">
    <circle cx="150" cy="200" r="3" fill="#E8B84A"/>
    <circle cx="1050" cy="250" r="4" fill="#6EC8E6"/>
    <circle cx="1080" cy="280" r="2.5" fill="#5BAD7A"/>
    <circle cx="180" cy="520" r="3" fill="#E8734A"/>
  </g>
);

export const bulletTrainSceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: <defs/>,
  background: Background,
  fragments: [
    { id: "speedLinesBg", content: SpeedLinesBg, enterFrom: { x: -600, y: 0 }, enterDelay: 0, floatAmp: { x: 10, y: 8 }, floatPeriod: { x: 7, y: 9 } },
    { id: "train", content: BulletTrain, enterFrom: { x: -900, y: 0 }, enterDelay: 100, floatAmp: { x: 12, y: 10 }, floatPeriod: { x: 6, y: 7 }, exitTo: { x: 900, y: 0 } },
    { id: "trailing", content: TrailingLines, enterFrom: { x: -400, y: 0 }, enterDelay: 200, floatAmp: { x: 14, y: 8 }, floatPeriod: { x: 5, y: 6 }, exitTo: { x: -500, y: 0 } },
    { id: "typewriter", content: TypewriterEffect, enterFrom: { x: 0, y: 300 }, enterDelay: 350, floatAmp: { x: 10, y: 14 }, floatPeriod: { x: 5.5, y: 6.5 }, exitTo: { x: 0, y: 400 } },
    { id: "badge", content: SpeedBadge, enterFrom: { x: 300, y: 200 }, enterDelay: 450, floatAmp: { x: 18, y: 20 }, floatPeriod: { x: 4, y: 5 }, exitTo: { x: 300, y: 200 }, exitSpin: 8 },
    { id: "particles", content: AccentParticles, enterFrom: { x: 0, y: 0 }, enterDelay: 550, floatAmp: { x: 16, y: 20 }, floatPeriod: { x: 3.5, y: 4.5 } },
  ],
};
