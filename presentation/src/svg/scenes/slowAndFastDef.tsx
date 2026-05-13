import type { SvgSceneDef } from "../SvgScene";

const Background = <rect width="1200" height="675" fill="#2B2B3D"/>;

const QuoteText = (
  <g>
    <text x="600" y="80" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="32" fontWeight="bold">不着急，慢慢来</text>
    <text x="600" y="130" textAnchor="middle" fill="#E8B84A" fontFamily="sans-serif" fontSize="36" fontWeight="bold">但一定要快</text>
    <text x="600" y="165" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="14">Don't rush, take it slow — but do be fast</text>
  </g>
);

const Turtle = (
  <g transform="translate(120, 300)">
    <ellipse cx="100" cy="60" rx="80" ry="50" fill="#5BAD7A" opacity="0.2"/>
    <ellipse cx="100" cy="60" rx="65" ry="40" fill="#1E1E2E" stroke="#5BAD7A" strokeWidth="2"/>
    <path d="M50,55 Q40,50 35,60 Q32,72 40,78 L55,70" fill="#5BAD7A" opacity="0.6"/>
    <path d="M150,55 Q160,50 165,60 Q168,72 160,78 L145,70" fill="#5BAD7A" opacity="0.6"/>
    <circle cx="30" cy="50" r="12" fill="#5BAD7A" opacity="0.5"/>
    <circle cx="25" cy="47" r="2.5" fill="#FFFFFF"/>
    <line x1="35" y1="55" x2="50" y2="55" stroke="#5BAD7A" strokeWidth="2" opacity="0.4"/>
    <path d="M70,40 Q85,25 100,35 Q115,25 130,40" fill="none" stroke="#5BAD7A" strokeWidth="1.5" opacity="0.3"/>
    <path d="M75,50 Q90,40 105,50 Q120,40 125,50" fill="none" stroke="#5BAD7A" strokeWidth="1" opacity="0.2"/>
    <text x="100" y="130" textAnchor="middle" fill="#5BAD7A" fontFamily="sans-serif" fontSize="16" fontWeight="bold">慢</text>
    <text x="100" y="152" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="12">Steady</text>
  </g>
);

const Rabbit = (
  <g transform="translate(860, 300)">
    <ellipse cx="80" cy="70" rx="45" ry="35" fill="#1E1E2E" stroke="#E8734A" strokeWidth="2"/>
    <circle cx="55" cy="40" r="14" fill="#E8734A" opacity="0.5"/>
    <circle cx="50" cy="37" r="2.5" fill="#FFFFFF"/>
    <path d="M48,26 L42,0 L50,18" fill="#E8734A" opacity="0.5"/>
    <path d="M58,26 L64,2 L56,18" fill="#E8734A" opacity="0.5"/>
    <path d="M125,65 L145,55 L140,70 L125,75" fill="#E8734A" opacity="0.4"/>
    <path d="M60,95 L50,115 M80,100 L75,118 M100,95 L110,112" fill="none" stroke="#E8734A" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
    <text x="80" y="140" textAnchor="middle" fill="#E8734A" fontFamily="sans-serif" fontSize="16" fontWeight="bold">快</text>
    <text x="80" y="162" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="12">Fast</text>
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
  defs: <defs/>,
  background: Background,
  fragments: [
    { id: "quote", content: QuoteText, enterFrom: { x: 0, y: -200 }, enterDelay: 0, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 7, y: 8 } },
    { id: "turtle", content: Turtle, enterFrom: { x: -400, y: 0 }, enterDelay: 150, floatAmp: { x: 12, y: 14 }, floatPeriod: { x: 6, y: 7 }, exitTo: { x: -500, y: 0 } },
    { id: "rabbit", content: Rabbit, enterFrom: { x: 400, y: 0 }, enterDelay: 200, floatAmp: { x: 14, y: 16 }, floatPeriod: { x: 4.5, y: 5.5 }, exitTo: { x: 500, y: 0 } },
    { id: "arrow", content: DashedArrow, enterFrom: { x: 0, y: 150 }, enterDelay: 350, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 5, y: 6 } },
    { id: "zen", content: ZenCircle, enterFrom: { x: 0, y: 200 }, enterDelay: 500, floatAmp: { x: 10, y: 14 }, floatPeriod: { x: 5.5, y: 6.5 } },
  ],
};
