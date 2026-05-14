import type { SvgSceneDef } from "../SvgScene";

const Background = (
  <g>
    <rect width="1200" height="675" fill="#2B2B3D"/>
    <rect width="1200" height="675" fill="url(#finaleBgGlow)"/>
  </g>
);

const Defs = (
  <defs>
    <radialGradient id="finaleBgGlow" cx="50%" cy="30%" r="60%">
      <stop offset="0%" stopColor="#E8B84A" stopOpacity="0.12"/>
      <stop offset="100%" stopColor="#E8B84A" stopOpacity="0"/>
    </radialGradient>
  </defs>
);


const CelebrationGlow = (
  <g transform="translate(600, 338)">
    <circle cx="0" cy="0" r="270" fill="#E8B84A" opacity="0.05" stroke="#F0D070" strokeOpacity="0.3" strokeWidth="1"/>
    <circle cx="0" cy="0" r="190" fill="#6EC8E6" opacity="0.05" stroke="#90D8F0" strokeOpacity="0.3" strokeWidth="1"/>
    <circle cx="0" cy="0" r="112" fill="#E8734A" opacity="0.06" stroke="#F09570" strokeOpacity="0.3" strokeWidth="1"/>
    <path d="M-170,110 Q0,-40 170,110" fill="none" stroke="#FFFFFF" strokeWidth="2" opacity="0.08"/>
    <path d="M-210,140 Q0,-70 210,140" fill="none" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.06"/>
  </g>
);

const CompletionBadge = (
  <g transform="translate(600, 320)">
    <circle cx="0" cy="0" r="54" fill="#5BAD7A" opacity="0.18" stroke="#7DD49A" strokeOpacity="0.3" strokeWidth="1"/>
    <circle cx="0" cy="0" r="38" fill="#1E1E2E" stroke="#5BAD7A" strokeWidth="2"/>
    <path d="M-18,-2 L-6,13 L22,-16" fill="none" stroke="#5BAD7A" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
    <text x="0" y="84" textAnchor="middle" fill="#5BAD7A" fontFamily="sans-serif" fontSize="14" fontWeight="bold">完成</text>
  </g>
);

const ConfettiRain = (
  <g opacity="0.72">
    {([
      [110, 80, "#E8B84A", 12],
      [150, 205, "#5BAD7A", -25],
      [210, 132, "#6EC8E6", -18],
      [270, 250, "#E85650", 34],
      [330, 74, "#E8734A", 26],
      [455, 118, "#5BAD7A", -12],
      [530, 64, "#4A7BCC", 18],
      [620, 120, "#E8B84A", -34],
      [735, 90, "#E8B84A", 18],
      [870, 138, "#6EC8E6", -24],
      [930, 245, "#5BAD7A", 28],
      [1015, 82, "#E8734A", 16],
      [1090, 162, "#5BAD7A", -10],
      [170, 535, "#6EC8E6", 20],
      [285, 455, "#E8734A", -12],
      [420, 560, "#5BAD7A", 22],
      [760, 555, "#4A7BCC", -18],
      [980, 520, "#E8B84A", -16],
      [1080, 440, "#E85650", 30],
      [90, 340, "#4A7BCC", -20],
      [350, 170, "#E85650", 42],
      [480, 480, "#E8B84A", -30],
      [640, 590, "#6EC8E6", 15],
      [800, 450, "#E8734A", -38],
      [950, 300, "#5BAD7A", 32],
      [1050, 560, "#4A7BCC", -14],
      [190, 400, "#E85650", 24],
    ] as const).map(([x, y, color, rotate], i) => (
      <rect key={i} x={x} y={y} width="12" height="24" rx="2" fill={color} transform={`rotate(${rotate} ${x} ${y})`}/>
    ))}
  </g>
);

const ConfettiBurst = (
  <g opacity="0.8">
    <circle cx="430" cy="132" r="5" fill="#E8B84A"/>
    <circle cx="500" cy="104" r="4" fill="#6EC8E6"/>
    <circle cx="700" cy="104" r="4" fill="#E8734A"/>
    <circle cx="770" cy="132" r="5" fill="#5BAD7A"/>
    <circle cx="385" cy="250" r="4" fill="#6EC8E6"/>
    <circle cx="815" cy="250" r="4" fill="#E8B84A"/>
    <circle cx="455" cy="390" r="5" fill="#E8734A"/>
    <circle cx="745" cy="390" r="5" fill="#5BAD7A"/>
    <circle cx="300" cy="330" r="4" fill="#4A7BCC"/>
    <circle cx="900" cy="335" r="4" fill="#E85650"/>
    {([
      [430, 170, "#E8B84A", 12],
      [505, 140, "#6EC8E6", -20],
      [690, 140, "#E8734A", 18],
      [770, 170, "#5BAD7A", -16],
      [350, 280, "#4A7BCC", 34],
      [845, 280, "#E85650", -28],
      [455, 425, "#E8734A", 22],
      [735, 425, "#5BAD7A", -14],
      [560, 180, "#E8B84A", 40],
      [640, 180, "#6EC8E6", -36],
      [520, 400, "#4A7BCC", 10],
      [675, 405, "#E85650", -10],
    ] as const).map(([x, y, color, rotate], i) => (
      <rect key={i} x={x} y={y} width="10" height="18" rx="2" fill={color} opacity="0.75" transform={`rotate(${rotate} ${x} ${y})`}/>
    ))}
    <path d="M360,190 l10,18 l20,2 l-16,12 l5,20 l-19,-11 l-18,11 l5,-20 l-16,-12 l20,-2 Z" fill="#E8B84A" opacity="0.65"/>
    <path d="M835,200 l8,16 l18,1 l-14,11 l4,18 l-16,-10 l-16,10 l4,-18 l-14,-11 l18,-1 Z" fill="#6EC8E6" opacity="0.65"/>
    <path d="M560,130 l7,14 l16,1 l-12,9 l3,16 l-14,-8 l-14,8 l3,-16 l-12,-9 l16,-1 Z" fill="#E8734A" opacity="0.55"/>
    <path d="M660,132 l7,14 l16,1 l-12,9 l3,16 l-14,-8 l-14,8 l3,-16 l-12,-9 l16,-1 Z" fill="#5BAD7A" opacity="0.55"/>
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
  defs: Defs,
  background: Background,
  fragments: [
    { id: "glow", content: CelebrationGlow, enterFrom: { x: 0, y: 0 }, enterDelay: 0, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 8, y: 9 }, exitScale: 1.2 },
    { id: "complete", content: CompletionBadge, enterFrom: { x: 0, y: -300 }, enterDelay: 100, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 6, y: 7 }, floatRotate: 1, exitTo: { x: 0, y: -400 } },
    { id: "confettiRain", content: ConfettiRain, enterFrom: { x: 0, y: -120 }, enterDelay: 180, floatAmp: { x: 14, y: 24 }, floatPeriod: { x: 5, y: 6 }, floatRotate: 4, exitSpin: 8 },
    { id: "confettiBurst", content: ConfettiBurst, enterFrom: { x: 0, y: 80 }, enterDelay: 300, floatAmp: { x: 18, y: 22 }, floatPeriod: { x: 3.5, y: 4.5 }, floatRotate: 3 },
    { id: "thanks", content: ThankYouText, enterFrom: { x: 0, y: 200 }, enterDelay: 250, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 6.5, y: 7.5 }, floatRotate: 0.5, exitTo: { x: 0, y: 300 } },
  ],
};
