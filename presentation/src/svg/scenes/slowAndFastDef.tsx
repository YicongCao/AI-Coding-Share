import type { SvgSceneDef } from "../SvgScene";

const Background = (
  <g>
    <rect width="1200" height="675" fill="#2B2B3D"/>
    <rect width="1200" height="675" fill="url(#slowAndFastBgGlow)"/>
  </g>
);

const Defs = (
  <defs>
    <radialGradient id="slowAndFastBgGlow" cx="50%" cy="30%" r="60%">
      <stop offset="0%" stopColor="#E8B84A" stopOpacity="0.12"/>
      <stop offset="100%" stopColor="#E8B84A" stopOpacity="0"/>
    </radialGradient>
  </defs>
);


const QuoteText = (
  <g>
    <text x="600" y="80" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="32" fontWeight="bold">不着急，慢慢来</text>
    <text x="600" y="130" textAnchor="middle" fill="#E8B84A" fontFamily="sans-serif" fontSize="36" fontWeight="bold">但一定要快</text>
    <text x="600" y="165" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="14">Don't rush, take it slow — but do be fast</text>
  </g>
);

const Turtle = (
  <g transform="translate(120, 300)">
    <circle cx="100" cy="62" r="86" fill="#5BAD7A" opacity="0.12" stroke="#7DD49A" strokeOpacity="0.3" strokeWidth="1"/>
    <circle cx="100" cy="62" r="64" fill="#1E1E2E" stroke="#5BAD7A" strokeWidth="2"/>
    <text x="100" y="92" textAnchor="middle" fontFamily="Apple Color Emoji, Segoe UI Emoji, sans-serif" fontSize="76">🐢</text>
    <text x="100" y="150" textAnchor="middle" fill="#5BAD7A" fontFamily="sans-serif" fontSize="18" fontWeight="bold">不着急</text>
    <text x="100" y="174" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="12">Steady pace</text>
  </g>
);

const Rabbit = (
  <g transform="translate(860, 300)">
    <circle cx="80" cy="62" r="86" fill="#E8734A" opacity="0.12" stroke="#F09570" strokeOpacity="0.3" strokeWidth="1"/>
    <circle cx="80" cy="62" r="64" fill="#1E1E2E" stroke="#E8734A" strokeWidth="2"/>
    <text x="80" y="92" textAnchor="middle" fontFamily="Apple Color Emoji, Segoe UI Emoji, sans-serif" fontSize="76">🐇</text>
    <text x="80" y="150" textAnchor="middle" fill="#E8734A" fontFamily="sans-serif" fontSize="18" fontWeight="bold">一定要快</text>
    <text x="80" y="174" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="12">Fast feedback</text>
  </g>
);

const DashedArrow = (
  <g>
    <line x1="360" y1="370" x2="800" y2="370" stroke="#E8B84A" strokeWidth="2" strokeDasharray="10 6" opacity="0.5"/>
    <polygon points="800,364 814,370 800,376" fill="#E8B84A" opacity="0.5"/>
    <text x="580" y="358" textAnchor="middle" fill="#E8B84A" fontFamily="sans-serif" fontSize="13" opacity="0.6">Paradox</text>
  </g>
);

const ZenCircle = (
  <g transform="translate(500, 480)">
    <circle cx="100" cy="80" r="70" fill="none" stroke="#FFFFFF" strokeWidth="2" opacity="0.1"/>
    <path d="M40,110 Q100,30 160,110" fill="none" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.08"/>
    <text x="100" y="170" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="13" opacity="0.3">Balance</text>
  </g>
);

export const slowAndFastSceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: Defs,
  background: Background,
  fragments: [
    { id: "quote", content: QuoteText, enterFrom: { x: 0, y: -200 }, enterDelay: 0, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 7, y: 8 } },
    { id: "turtle", content: Turtle, enterFrom: { x: -400, y: 0 }, enterDelay: 150, floatAmp: { x: 12, y: 14 }, floatPeriod: { x: 6, y: 7 }, exitTo: { x: -500, y: 0 } },
    { id: "rabbit", content: Rabbit, enterFrom: { x: 400, y: 0 }, enterDelay: 200, floatAmp: { x: 14, y: 16 }, floatPeriod: { x: 4.5, y: 5.5 }, exitTo: { x: 500, y: 0 } },
    { id: "arrow", content: DashedArrow, enterFrom: { x: 0, y: 150 }, enterDelay: 350, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 5, y: 6 } },
    { id: "zen", content: ZenCircle, enterFrom: { x: 0, y: 200 }, enterDelay: 500, floatAmp: { x: 10, y: 14 }, floatPeriod: { x: 5.5, y: 6.5 } },
  ],
};
