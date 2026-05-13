import type { SvgSceneDef } from "../SvgScene";

const Background = <rect width="1200" height="675" fill="#2B2B3D"/>;

const CelebrationGlow = (
  <g transform="translate(600, 338)">
    <circle cx="0" cy="0" r="270" fill="#E8B84A" opacity="0.05"/>
    <circle cx="0" cy="0" r="190" fill="#6EC8E6" opacity="0.05"/>
    <circle cx="0" cy="0" r="112" fill="#E8734A" opacity="0.06"/>
    <path d="M-170,110 Q0,-40 170,110" fill="none" stroke="#FFFFFF" strokeWidth="2" opacity="0.08"/>
    <path d="M-210,140 Q0,-70 210,140" fill="none" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.06"/>
  </g>
);

const CompletionBadge = (
  <g transform="translate(600, 320)">
    <circle cx="0" cy="0" r="54" fill="#5BAD7A" opacity="0.18"/>
    <circle cx="0" cy="0" r="38" fill="#1E1E2E" stroke="#5BAD7A" strokeWidth="2"/>
    <path d="M-18,-2 L-6,13 L22,-16" fill="none" stroke="#5BAD7A" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
    <text x="0" y="84" textAnchor="middle" fill="#5BAD7A" fontFamily="sans-serif" fontSize="14" fontWeight="bold">完成</text>
  </g>
);

const ConfettiRain = (
  <g opacity="0.72">
    {([
      [110, 80, "#E8B84A", 12],
      [210, 132, "#6EC8E6", -18],
      [330, 74, "#E8734A", 26],
      [455, 118, "#5BAD7A", -12],
      [735, 90, "#E8B84A", 18],
      [870, 138, "#6EC8E6", -24],
      [1015, 82, "#E8734A", 16],
      [1090, 162, "#5BAD7A", -10],
      [170, 535, "#6EC8E6", 20],
      [980, 520, "#E8B84A", -16],
    ] as const).map(([x, y, color, rotate], i) => (
      <rect key={i} x={x} y={y} width="12" height="24" rx="2" fill={color} transform={`rotate(${rotate} ${x} ${y})`}/>
    ))}
  </g>
);

const ConfettiBurst = (
  <g opacity="0.8">
    {([
      [600, 260, 430, 132, "#E8B84A"],
      [600, 260, 500, 104, "#6EC8E6"],
      [600, 260, 700, 104, "#E8734A"],
      [600, 260, 770, 132, "#5BAD7A"],
      [600, 260, 385, 250, "#6EC8E6"],
      [600, 260, 815, 250, "#E8B84A"],
      [600, 260, 455, 390, "#E8734A"],
      [600, 260, 745, 390, "#5BAD7A"],
    ] as const).map(([x1, y1, x2, y2, color], i) => (
      <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="3" strokeLinecap="round" opacity="0.55"/>
    ))}
    <circle cx="430" cy="132" r="5" fill="#E8B84A"/>
    <circle cx="500" cy="104" r="4" fill="#6EC8E6"/>
    <circle cx="700" cy="104" r="4" fill="#E8734A"/>
    <circle cx="770" cy="132" r="5" fill="#5BAD7A"/>
    <path d="M360,190 l10,18 l20,2 l-16,12 l5,20 l-19,-11 l-18,11 l5,-20 l-16,-12 l20,-2 Z" fill="#E8B84A" opacity="0.65"/>
    <path d="M835,200 l8,16 l18,1 l-14,11 l4,18 l-16,-10 l-16,10 l4,-18 l-14,-11 l18,-1 Z" fill="#6EC8E6" opacity="0.65"/>
  </g>
);

const ThankYouText = (
  <g>
    <text x="508" y="470" textAnchor="middle" fontFamily="Apple Color Emoji, Segoe UI Emoji, sans-serif" fontSize="28">🎉</text>
    <text x="600" y="470" textAnchor="middle" fill="#E8B84A" fontFamily="sans-serif" fontSize="48" fontWeight="bold">谢谢</text>
    <text x="692" y="470" textAnchor="middle" fontFamily="Apple Color Emoji, Segoe UI Emoji, sans-serif" fontSize="28">✨</text>
    <text x="600" y="516" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="20" opacity="0.7">演讲完毕，谢谢大家！</text>
    <text x="600" y="545" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="14">Thank You for Listening</text>
  </g>
);

export const finaleSceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: <defs/>,
  background: Background,
  fragments: [
    { id: "glow", content: CelebrationGlow, enterFrom: { x: 0, y: 0 }, enterDelay: 0, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 8, y: 9 }, exitScale: 1.2 },
    { id: "complete", content: CompletionBadge, enterFrom: { x: 0, y: -300 }, enterDelay: 100, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 6, y: 7 }, exitTo: { x: 0, y: -400 } },
    { id: "confettiRain", content: ConfettiRain, enterFrom: { x: 0, y: -120 }, enterDelay: 180, floatAmp: { x: 14, y: 24 }, floatPeriod: { x: 5, y: 6 }, exitSpin: 8 },
    { id: "confettiBurst", content: ConfettiBurst, enterFrom: { x: 0, y: 80 }, enterDelay: 300, floatAmp: { x: 18, y: 22 }, floatPeriod: { x: 3.5, y: 4.5 } },
    { id: "thanks", content: ThankYouText, enterFrom: { x: 0, y: 200 }, enterDelay: 250, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 6.5, y: 7.5 }, exitTo: { x: 0, y: 300 } },
  ],
};
