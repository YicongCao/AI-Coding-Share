import type { SvgSceneDef } from "../SvgScene";

const Background = (
  <g>
    <rect width="1200" height="675" fill="#2B2B3D"/>
    <rect width="1200" height="675" fill="url(#conceptHarnessBgGlow)"/>
  </g>
);

const Defs = (
  <defs>
    <radialGradient id="conceptHarnessBgGlow" cx="50%" cy="30%" r="60%">
      <stop offset="0%" stopColor="#4A7BCC" stopOpacity="0.12"/>
      <stop offset="100%" stopColor="#4A7BCC" stopOpacity="0"/>
    </radialGradient>
  </defs>
);


const HarnessTitle = (
  <g>
    <text x="600" y="60" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="32" fontWeight="bold">Harness</text>
    <text x="600" y="88" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="14">A Methodology, Not a Tool</text>
  </g>
);

const MethodologyDiagram = (
  <g transform="translate(250, 130)">
    <rect x="0" y="0" width="700" height="360" rx="16" fill="#1E1E2E" stroke="#555570" strokeWidth="1.5"/>
    <text x="350" y="36" textAnchor="middle" fill="#E8B84A" fontFamily="sans-serif" fontSize="16" fontWeight="bold">方法论 Framework</text>
    <line x1="30" y1="50" x2="670" y2="50" stroke="#555570" strokeWidth="0.5"/>
    {/* Concept nodes */}
    {[
      { x: 120, y: 120, label: "规划", sub: "Planning", color: "#6EC8E6", icon: "P" },
      { x: 350, y: 120, label: "执行", sub: "Execution", color: "#5BAD7A", icon: "E" },
      { x: 580, y: 120, label: "验证", sub: "Verification", color: "#E8B84A", icon: "V" },
      { x: 120, y: 260, label: "迭代", sub: "Iteration", color: "#E8734A", icon: "I" },
      { x: 350, y: 260, label: "协作", sub: "Collaboration", color: "#4A7BCC", icon: "C" },
      { x: 580, y: 260, label: "交付", sub: "Delivery", color: "#E85650", icon: "D" },
    ].map((node, i) => (
      <g key={i} transform={`translate(${node.x},${node.y})`}>
        <circle cx="0" cy="0" r="36" fill="#252538" stroke={node.color} strokeWidth="2"/>
        <text x="0" y="-6" textAnchor="middle" fill={node.color} fontFamily="sans-serif" fontSize="20" fontWeight="bold">{node.icon}</text>
        <text x="0" y="14" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="11">{node.label}</text>
        <text x="0" y="58" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="10">{node.sub}</text>
      </g>
    ))}
    {/* Connection lines */}
    <g stroke="#555570" strokeWidth="1.5" fill="none" opacity="0.4" strokeDasharray="5 4">
      <line x1="158" y1="120" x2="312" y2="120"/>
      <line x1="388" y1="120" x2="542" y2="120"/>
      <line x1="120" y1="158" x2="120" y2="222"/>
      <line x1="350" y1="158" x2="350" y2="222"/>
      <line x1="580" y1="158" x2="580" y2="222"/>
      <line x1="158" y1="260" x2="312" y2="260"/>
      <line x1="388" y1="260" x2="542" y2="260"/>
    </g>
  </g>
);

const GearIcons = (
  <g>
    {[[100, 160, 20], [1100, 160, 18], [100, 480, 16], [1100, 480, 20]].map(([x, y, r], i) => (
      <g key={i} transform={`translate(${x},${y})`}>
        <circle cx="0" cy="0" r={r as number} fill="none" stroke="#555570" strokeWidth="1.5" opacity="0.4"/>
        <circle cx="0" cy="0" r={(r as number) * 0.4} fill="#555570" opacity="0.3"/>
        {[0, 60, 120, 180, 240, 300].map((a, j) => (
          <line key={j} x1={(r as number) * 0.7 * Math.cos(a * Math.PI / 180)} y1={(r as number) * 0.7 * Math.sin(a * Math.PI / 180)}
                x2={(r as number) * 1.2 * Math.cos(a * Math.PI / 180)} y2={(r as number) * 1.2 * Math.sin(a * Math.PI / 180)}
                stroke="#555570" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
        ))}
      </g>
    ))}
  </g>
);

const CrossedWrench = (
  <g transform="translate(980, 540)">
    <rect x="-8" y="-40" width="16" height="60" rx="4" fill="#555570" opacity="0.5"/>
    <circle cx="0" cy="-46" r="14" fill="none" stroke="#555570" strokeWidth="3" opacity="0.5"/>
    <line x1="-28" y1="-28" x2="28" y2="28" stroke="#E85650" strokeWidth="4" strokeLinecap="round"/>
    <line x1="28" y1="-28" x2="-28" y2="28" stroke="#E85650" strokeWidth="4" strokeLinecap="round"/>
    <text x="0" y="46" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="11">Not a Tool</text>
  </g>
);

const TitleLabel = (
  <g>
    <rect x="420" y="570" width="360" height="48" rx="10" fill="#252538"/>
    <text x="600" y="594" textAnchor="middle" fill="#E8B84A" fontFamily="sans-serif" fontSize="16" fontWeight="bold">方法论</text>
    <text x="600" y="612" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="12">Harness = Methodology for Using AI Effectively</text>
  </g>
);

export const conceptHarnessSceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: Defs,
  background: Background,
  fragments: [
    { id: "harnessTitle", content: HarnessTitle, enterFrom: { x: 0, y: -200 }, enterDelay: 0, floatAmp: { x: 8, y: 8 }, floatPeriod: { x: 7, y: 8 }, exitTo: { x: 0, y: -300 } },
    { id: "methodologyDiagram", content: MethodologyDiagram, enterFrom: { x: 0, y: 400 }, enterDelay: 100, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 6, y: 7 }, exitTo: { x: 0, y: -500 } },
    { id: "gearIcons", content: GearIcons, enterFrom: { x: 0, y: 0 }, enterDelay: 250, floatAmp: { x: 14, y: 16 }, floatPeriod: { x: 4.5, y: 5.5 }, exitTo: { x: 0, y: 300 } },
    { id: "crossedWrench", content: CrossedWrench, enterFrom: { x: 300, y: 200 }, enterDelay: 400, floatAmp: { x: 18, y: 20 }, floatPeriod: { x: 4, y: 5 }, exitTo: { x: 400, y: 300 }, exitSpin: 15 },
    { id: "titleLabel", content: TitleLabel, enterFrom: { x: 0, y: 200 }, enterDelay: 500, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 7, y: 8 }, exitTo: { x: 0, y: 300 } },
  ],
};
