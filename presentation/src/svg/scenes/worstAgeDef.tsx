import type { SvgSceneDef } from "../SvgScene";

const Background = (
  <g>
    <rect width="1200" height="675" fill="#2B2B3D"/>
    <rect width="1200" height="675" fill="url(#worstAgeBgGlow)"/>
  </g>
);

const Defs = (
  <defs>
    <radialGradient id="worstAgeBgGlow" cx="50%" cy="30%" r="60%">
      <stop offset="0%" stopColor="#E8734A" stopOpacity="0.12"/>
      <stop offset="100%" stopColor="#E8734A" stopOpacity="0"/>
    </radialGradient>
  </defs>
);


const BarChart = (
  <g transform="translate(80, 140)">
    {/* Axes */}
    <line x1="60" y1="20" x2="60" y2="380" stroke="#555570" strokeWidth="2"/>
    <line x1="60" y1="380" x2="520" y2="380" stroke="#555570" strokeWidth="2"/>
    {/* Descending bars */}
    {[
      { x: 90, h: 320, c: "#5BAD7A" },
      { x: 160, h: 280, c: "#6EC8E6" },
      { x: 230, h: 220, c: "#E8B84A" },
      { x: 300, h: 160, c: "#E8734A" },
      { x: 370, h: 100, c: "#E85650" },
      { x: 440, h: 55, c: "#E85650" },
    ].map((b, i) => (
      <g key={i}>
        <rect x={b.x} y={380 - b.h} width="50" height={b.h} rx="4" fill={b.c} opacity={0.6 + i * 0.03}/>
        <rect x={b.x} y={380 - b.h} width="50" height={8} rx="4" fill="#FFFFFF" opacity="0.1"/>
      </g>
    ))}
    {/* Trend line */}
    <path d="M115,65 L185,105 L255,165 L325,225 L395,285 L465,330" fill="none" stroke="#E85650" strokeWidth="2.5" strokeDasharray="6 4" opacity="0.6"/>
    <polygon points="465,330 450,322 455,338" fill="#E85650" opacity="0.6"/>
  </g>
);

const PersonSilhouettes = (
  <g transform="translate(660, 250)">
    {[0, 55, 110, 165, 220].map((dx, i) => (
      <g key={i} transform={`translate(${dx}, 0)`} opacity={i < 3 ? 0.25 : 0.5}>
        <circle cx="20" cy="0" r="14" fill="#555570"/>
        <path d="M0,20 Q0,50 20,55 Q40,50 40,20" fill="#555570"/>
        {i < 3 && (
          <line x1="0" y1="-10" x2="40" y2="50" stroke="#E85650" strokeWidth="2" opacity="0.5"/>
        )}
      </g>
    ))}
  </g>
);

const WarningIndicators = (
  <g>
    {[
      { x: 700, y: 140 }, { x: 900, y: 120 }, { x: 1050, y: 160 },
    ].map((w, i) => (
      <g key={i} transform={`translate(${w.x}, ${w.y})`} opacity={0.4 + i * 0.1}>
        <path d="M0,-14 L12,10 L-12,10 Z" fill="none" stroke="#E85650" strokeWidth="2"/>
        <line x1="0" y1="-7" x2="0" y2="2" stroke="#E85650" strokeWidth="2"/>
        <circle cx="0" cy="6" r="1.5" fill="#E85650"/>
      </g>
    ))}
  </g>
);

const LayoffLabel = (
  <g transform="translate(750, 400)">
    <rect width="160" height="56" rx="10" fill="#1E1E2E" stroke="#E85650" strokeWidth="1.5"/>
    <text x="80" y="38" textAnchor="middle" fill="#E85650" fontFamily="sans-serif" fontSize="26" fontWeight="bold">裁员</text>
  </g>
);

const DownArrow = (
  <g transform="translate(830, 480)">
    <line x1="0" y1="0" x2="0" y2="80" stroke="#E85650" strokeWidth="4" opacity="0.5"/>
    <polygon points="0,90 -14,68 14,68" fill="#E85650" opacity="0.5"/>
  </g>
);

const Building = (
  <g transform="translate(980, 340)">
    <rect width="140" height="200" rx="6" fill="#1E1E2E" stroke="#555570" strokeWidth="1.5"/>
    {/* Windows */}
    {Array.from({ length: 5 }, (_, r) =>
      Array.from({ length: 3 }, (_, c) => (
        <rect key={`${r}-${c}`} x={16 + c * 42} y={20 + r * 35} width="24" height="20" rx="2" fill={r > 2 ? "#252538" : "#E8B84A"} opacity={r > 2 ? 0.4 : 0.2 + r * 0.06}/>
      ))
    )}
    {/* Door */}
    <rect x="50" y="160" width="40" height="40" rx="4" fill="#252538" stroke="#555570" strokeWidth="1"/>
    {/* Person leaving */}
    <g transform="translate(130, 490)" opacity="0.4">
      <circle cx="0" cy="0" r="8" fill="#555570"/>
      <path d="M-6,12 Q-6,28 0,30 Q6,28 6,12" fill="#555570"/>
    </g>
    <g transform="translate(155, 492)" opacity="0.3">
      <circle cx="0" cy="0" r="7" fill="#555570"/>
      <path d="M-5,11 Q-5,24 0,26 Q5,24 5,11" fill="#555570"/>
    </g>
  </g>
);

const SomberCaption = (
  <g>
    <text x="600" y="640" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="16" opacity="0.4">效率跃迁之下，社会如何适应？</text>
  </g>
);

export const worstAgeSceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: Defs,
  background: Background,
  fragments: [
    { id: "barChart", content: BarChart, enterFrom: { x: -500, y: 0 }, enterDelay: 0, floatAmp: { x: 8, y: 12 }, floatPeriod: { x: 6.0, y: 7.5 }, floatRotate: 2.5, exitTo: { x: -600, y: 0 }, exitSpin: -2 },
    { id: "personSilhouettes", content: PersonSilhouettes, enterFrom: { x: 400, y: 0 }, enterDelay: 100, floatAmp: { x: 10, y: 14 }, floatPeriod: { x: 5.0, y: 6.5 }, exitTo: { x: 500, y: 0 } },
    { id: "warningIndicators", content: WarningIndicators, enterFrom: { x: 0, y: -200 }, enterDelay: 200, floatAmp: { x: 16, y: 20 }, floatPeriod: { x: 3.5, y: 4.5 }, exitTo: { x: 0, y: -300 }, exitScale: 1.15 },
    { id: "layoffLabel", content: LayoffLabel, enterFrom: { x: 300, y: -200 }, enterDelay: 300, floatAmp: { x: 14, y: 18 }, floatPeriod: { x: 4.0, y: 5.5 }, exitTo: { x: 400, y: -300 } },
    { id: "downArrow", content: DownArrow, enterFrom: { x: 0, y: -200 }, enterDelay: 400, floatAmp: { x: 10, y: 16 }, floatPeriod: { x: 5.5, y: 7.0 }, exitTo: { x: 0, y: 300 } },
    { id: "building", content: Building, enterFrom: { x: 300, y: 200 }, enterDelay: 200, floatAmp: { x: 12, y: 14 }, floatPeriod: { x: 5.5, y: 7.0 }, exitTo: { x: 400, y: 300 }, exitSpin: 3 },
    { id: "somberCaption", content: SomberCaption, enterFrom: { x: 0, y: 100 }, enterDelay: 550, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 7.0, y: 9.0 }, exitTo: { x: 0, y: 200 } },
  ],
};
