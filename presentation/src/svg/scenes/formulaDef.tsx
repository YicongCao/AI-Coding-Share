import type { SvgSceneDef } from "../SvgScene";

const Background = (
  <g>
    <rect width="1200" height="675" fill="#2B2B3D"/>
    <rect width="1200" height="675" fill="url(#formulaBgGlow)"/>
  </g>
);

const Defs = (
  <defs>
    <radialGradient id="formulaBgGlow" cx="50%" cy="30%" r="60%">
      <stop offset="0%" stopColor="#6EC8E6" stopOpacity="0.12"/>
      <stop offset="100%" stopColor="#6EC8E6" stopOpacity="0"/>
    </radialGradient>
  </defs>
);


const FormulaTitle = (
  <g transform="translate(600, 80)">
    <text x="0" y="0" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="28" fontWeight="bold" opacity="0.9">Formula</text>
    <line x1="-80" y1="14" x2="80" y2="14" stroke="#555570" strokeWidth="1.5" opacity="0.5"/>
  </g>
);

const OutputCard = (
  <g transform="translate(80, 230)">
    <rect x="0" y="0" width="220" height="160" rx="16" fill="#1E1E2E" stroke="#5BAD7A" strokeWidth="2.5"/>
    <text x="110" y="70" textAnchor="middle" fill="#5BAD7A" fontFamily="sans-serif" fontSize="48" fontWeight="bold">产出</text>
    <text x="110" y="110" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="18">Output</text>
    <rect x="30" y="130" width="160" height="6" rx="3" fill="#5BAD7A" opacity="0.3"/>
  </g>
);

const EqualsSign = (
  <g transform="translate(340, 280)">
    <rect x="0" y="0" width="50" height="10" rx="5" fill="#FFFFFF" opacity="0.8"/>
    <rect x="0" y="24" width="50" height="10" rx="5" fill="#FFFFFF" opacity="0.8"/>
  </g>
);

const SpeedCard = (
  <g transform="translate(430, 230)">
    <rect x="0" y="0" width="220" height="160" rx="16" fill="#1E1E2E" stroke="#6EC8E6" strokeWidth="2.5"/>
    <text x="110" y="70" textAnchor="middle" fill="#6EC8E6" fontFamily="sans-serif" fontSize="48" fontWeight="bold">速度</text>
    <text x="110" y="110" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="18">Speed</text>
    <path d="M50,138 L80,125 L110,138 L140,125 L170,138" fill="none" stroke="#6EC8E6" strokeWidth="2" opacity="0.4"/>
  </g>
);

const MultiplySign = (
  <g transform="translate(690, 280)">
    <line x1="0" y1="0" x2="30" y2="30" stroke="#E8B84A" strokeWidth="5" strokeLinecap="round"/>
    <line x1="30" y1="0" x2="0" y2="30" stroke="#E8B84A" strokeWidth="5" strokeLinecap="round"/>
  </g>
);

const TimeCard = (
  <g transform="translate(770, 230)">
    <rect x="0" y="0" width="220" height="160" rx="16" fill="#1E1E2E" stroke="#E8B84A" strokeWidth="2.5"/>
    <text x="110" y="70" textAnchor="middle" fill="#E8B84A" fontFamily="sans-serif" fontSize="48" fontWeight="bold">时间</text>
    <text x="110" y="110" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="18">Time</text>
    <circle cx="110" cy="138" r="8" fill="none" stroke="#E8B84A" strokeWidth="1.5" opacity="0.4"/>
    <line x1="110" y1="133" x2="110" y2="138" stroke="#E8B84A" strokeWidth="1.5" opacity="0.4"/>
    <line x1="110" y1="138" x2="115" y2="141" stroke="#E8B84A" strokeWidth="1.5" opacity="0.4"/>
  </g>
);

const HighlightBar = (
  <g transform="translate(60, 460)">
    <rect x="0" y="0" width="1080" height="60" rx="12" fill="#252538" opacity="0.7"/>
    <text x="540" y="40" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="24" fontWeight="bold" opacity="0.8">产出 = 输出速度 × 时间</text>
  </g>
);

const AccentParticles = (
  <g opacity="0.25">
    <circle cx="160" cy="560" r="3" fill="#5BAD7A"/>
    <circle cx="600" cy="580" r="4" fill="#E8B84A"/>
    <circle cx="1040" cy="560" r="3.5" fill="#6EC8E6"/>
    <circle cx="380" cy="180" r="2.5" fill="#E8734A"/>
    <circle cx="720" cy="170" r="3" fill="#4A7BCC"/>
  </g>
);

export const formulaSceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: Defs,
  background: Background,
  fragments: [
    { id: "title", content: FormulaTitle, enterFrom: { x: 0, y: -300 }, enterDelay: 0, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 7, y: 8 } },
    { id: "output", content: OutputCard, enterFrom: { x: -400, y: 0 }, enterDelay: 100, floatAmp: { x: 10, y: 14 }, floatPeriod: { x: 5.5, y: 6.5 }, exitTo: { x: -500, y: 0 }, exitSpin: -5 },
    { id: "equals", content: EqualsSign, enterFrom: { x: 0, y: 300 }, enterDelay: 200, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 6, y: 7 } },
    { id: "speed", content: SpeedCard, enterFrom: { x: 0, y: 400 }, enterDelay: 250, floatAmp: { x: 10, y: 14 }, floatPeriod: { x: 5, y: 6 }, exitTo: { x: 0, y: -500 }, exitScale: 0.85 },
    { id: "multiply", content: MultiplySign, enterFrom: { x: 0, y: 300 }, enterDelay: 350, floatAmp: { x: 12, y: 16 }, floatPeriod: { x: 4, y: 5 } },
    { id: "time", content: TimeCard, enterFrom: { x: 400, y: 0 }, enterDelay: 300, floatAmp: { x: 10, y: 14 }, floatPeriod: { x: 5.5, y: 6.5 }, exitTo: { x: 500, y: 0 }, exitSpin: 5 },
    { id: "highlight", content: HighlightBar, enterFrom: { x: 0, y: 300 }, enterDelay: 500, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 7, y: 8 }, exitTo: { x: 0, y: 300 } },
    { id: "particles", content: AccentParticles, enterFrom: { x: 0, y: 0 }, enterDelay: 600, floatAmp: { x: 16, y: 20 }, floatPeriod: { x: 3.5, y: 4 } },
  ],
};
