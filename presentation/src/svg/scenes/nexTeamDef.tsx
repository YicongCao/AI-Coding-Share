import type { SvgSceneDef } from "../SvgScene";

const Background = (
  <g>
    <rect width="1200" height="675" fill="#2B2B3D"/>
    <rect width="1200" height="675" fill="url(#nexTeamBgGlow)"/>
  </g>
);

const Defs = (
  <defs>
    <radialGradient id="nexTeamBgGlow" cx="50%" cy="30%" r="60%">
      <stop offset="0%" stopColor="#5BAD7A" stopOpacity="0.12"/>
      <stop offset="100%" stopColor="#5BAD7A" stopOpacity="0"/>
    </radialGradient>
  </defs>
);


const VennCircles = (
  <g transform="translate(600, 310)">
    <circle cx="-120" cy="-60" r="160" fill="#4A7BCC" opacity="0.12" stroke="#4A7BCC" strokeWidth="2"/>
    <circle cx="120" cy="-60" r="160" fill="#5BAD7A" opacity="0.12" stroke="#5BAD7A" strokeWidth="2"/>
    <circle cx="0" cy="100" r="160" fill="#E8B84A" opacity="0.12" stroke="#E8B84A" strokeWidth="2"/>
    {/* Center overlap */}
    <circle cx="0" cy="10" r="64" fill="#FFFFFF" opacity="0.08"/>
    <circle cx="0" cy="10" r="48" fill="#6EC8E6" opacity="0.2" stroke="#6EC8E6" strokeWidth="2"/>
    <text x="0" y="6" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="24" fontWeight="bold">Nex</text>
    <text x="0" y="28" textAnchor="middle" fill="#6EC8E6" fontFamily="sans-serif" fontSize="11" opacity="0.8">交叉点</text>
  </g>
);

const CircleLabels = (
  <g transform="translate(600, 310)">
    <text x="-200" y="-100" textAnchor="middle" fill="#4A7BCC" fontFamily="sans-serif" fontSize="22" fontWeight="bold">产品</text>
    <text x="-200" y="-75" textAnchor="middle" fill="#4A7BCC" fontFamily="sans-serif" fontSize="13" opacity="0.7">Product</text>
    <text x="200" y="-100" textAnchor="middle" fill="#5BAD7A" fontFamily="sans-serif" fontSize="22" fontWeight="bold">开发</text>
    <text x="200" y="-75" textAnchor="middle" fill="#5BAD7A" fontFamily="sans-serif" fontSize="13" opacity="0.7">Dev</text>
    <text x="0" y="200" textAnchor="middle" fill="#E8B84A" fontFamily="sans-serif" fontSize="22" fontWeight="bold">用户</text>
    <text x="0" y="225" textAnchor="middle" fill="#E8B84A" fontFamily="sans-serif" fontSize="13" opacity="0.7">User</text>
  </g>
);

const PersonFigures = (
  <g transform="translate(600, 310)">
    {[
      { x: -280, y: -40, c: "#4A7BCC" },
      { x: 280, y: -40, c: "#5BAD7A" },
      { x: 0, y: 280, c: "#E8B84A" },
    ].map((p, i) => (
      <g key={i} transform={`translate(${p.x}, ${p.y})`}>
        <circle cx="0" cy="-14" r="10" fill={p.c} opacity="0.5"/>
        <rect x="-8" y="0" width="16" height="22" rx="5" fill={p.c} opacity="0.4"/>
      </g>
    ))}
  </g>
);

const BidirectionalArrows = (
  <g transform="translate(600, 310)" opacity="0.35">
    {/* Product <-> Dev */}
    <line x1="-80" y1="-120" x2="80" y2="-120" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="6 4"/>
    <polygon points="-80,-120 -70,-125 -70,-115" fill="#FFFFFF"/>
    <polygon points="80,-120 70,-125 70,-115" fill="#FFFFFF"/>
    {/* Dev <-> User */}
    <line x1="140" y1="30" x2="60" y2="130" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="6 4"/>
    <polygon points="140,30 130,35 136,25" fill="#FFFFFF"/>
    <polygon points="60,130 70,125 64,135" fill="#FFFFFF"/>
    {/* Product <-> User */}
    <line x1="-140" y1="30" x2="-60" y2="130" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="6 4"/>
    <polygon points="-140,30 -130,35 -136,25" fill="#FFFFFF"/>
    <polygon points="-60,130 -70,125 -64,135" fill="#FFFFFF"/>
  </g>
);

const Subtitle = (
  <g>
    <text x="600" y="60" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="26" fontWeight="bold">每个人都是深度用户</text>
    <text x="600" y="88" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="14">Everyone is a Deep User · Dev Proposes Features Directly</text>
  </g>
);

export const nexTeamSceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: Defs,
  background: Background,
  fragments: [
    { id: "venn", content: VennCircles, enterFrom: { x: 0, y: -400 }, enterDelay: 0, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 6.5, y: 7.5 }, exitTo: { x: 0, y: 500 }, exitScale: 0.8 },
    { id: "labels", content: CircleLabels, enterFrom: { x: 0, y: 300 }, enterDelay: 150, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 6.5, y: 7.5 }, exitTo: { x: 0, y: 300 } },
    { id: "persons", content: PersonFigures, enterFrom: { x: -400, y: 0 }, enterDelay: 250, floatAmp: { x: 14, y: 18 }, floatPeriod: { x: 5, y: 6 }, exitTo: { x: 500, y: 0 }, exitSpin: 6 },
    { id: "arrows", content: BidirectionalArrows, enterFrom: { x: 0, y: 200 }, enterDelay: 350, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 6.5, y: 7.5 }, exitTo: { x: 0, y: 200 } },
    { id: "subtitle", content: Subtitle, enterFrom: { x: 0, y: -300 }, enterDelay: 100, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 8, y: 9 }, exitTo: { x: 0, y: -400 } },
  ],
};
