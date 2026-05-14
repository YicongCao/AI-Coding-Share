import type { SvgSceneDef } from "../SvgScene";

const Background = (
  <g>
    <rect width="1200" height="675" fill="#2B2B3D"/>
    <rect width="1200" height="675" fill="url(#agileFlowBgGlow)"/>
  </g>
);

const Defs = (
  <defs>
    <radialGradient id="agileFlowBgGlow" cx="50%" cy="30%" r="60%">
      <stop offset="0%" stopColor="#5BAD7A" stopOpacity="0.12"/>
      <stop offset="100%" stopColor="#5BAD7A" stopOpacity="0"/>
    </radialGradient>
  </defs>
);


const Title = (
  <g>
    <text x="600" y="80" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="28" fontWeight="bold">传统敏捷流程</text>
    <text x="600" y="110" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="14">Traditional Agile Flow</text>
  </g>
);

const cardData = [
  { label: "需求", note: "PRD / 评审", color: "#4A7BCC", x: 92, y: 244, rotate: -7 },
  { label: "开发", note: "排期 / 编码", color: "#5BAD7A", x: 274, y: 276, rotate: 5 },
  { label: "体验", note: "走查 / 反馈", color: "#6EC8E6", x: 462, y: 236, rotate: -4 },
  { label: "返工", note: "改方案", color: "#E85650", x: 646, y: 286, rotate: 8 },
  { label: "测试", note: "验收 / Bug", color: "#E8B84A", x: 842, y: 246, rotate: -5 },
  { label: "返工", note: "再修一轮", color: "#E85650", x: 1020, y: 276, rotate: 6 },
] as const;

const TableSurface = (
  <g>
    <ellipse cx="600" cy="370" rx="540" ry="170" fill="#1E1E2E" opacity="0.55" stroke="#FFFFFF" strokeOpacity="0.1" strokeWidth="1.5"/>
    <ellipse cx="600" cy="368" rx="520" ry="145" fill="#252538" opacity="0.65" stroke="#FFFFFF" strokeOpacity="0.1" strokeWidth="1.5"/>
    <path d="M110,398 Q600,545 1090,396" fill="none" stroke="#555570" strokeWidth="1" opacity="0.25"/>
    <text x="600" y="552" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="14" opacity="0.7">
      顺序还在，但每张卡都在桌面上散落、等待、返工
    </text>
  </g>
);

const FlowNodes = (
  <g>
    {cardData.map((n, i) => (
      <g key={i} transform={`translate(${n.x}, ${n.y}) rotate(${n.rotate})`}>
        <rect x="8" y="10" width="138" height="76" rx="12" fill="#11111D" opacity="0.38" stroke="#FFFFFF" strokeOpacity="0.08" strokeWidth="1"/>
        <rect x="0" y="0" width="138" height="76" rx="12" fill="#1E1E2E" stroke={n.color} strokeWidth="2"/>
        <rect x="0" y="0" width="138" height="76" rx="12" fill={n.color} opacity="0.12"/>
        <rect x="16" y="-9" width="42" height="18" rx="4" fill="#FFFFFF" opacity="0.16"/>
        <circle cx="112" cy="18" r="5" fill={n.color} opacity="0.8"/>
        <text x="69" y="36" textAnchor="middle" fill={n.color} fontFamily="sans-serif" fontSize="21" fontWeight="bold">{n.label}</text>
        <text x="69" y="57" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="12" opacity="0.62">{n.note}</text>
      </g>
    ))}
  </g>
);

const Arrows = (
  <g>
    <path d="M205,286 C250,258 294,306 348,314" fill="none" stroke="#555570" strokeWidth="2" strokeDasharray="7 7" opacity="0.65"/>
    <path d="M390,314 C438,326 474,260 530,276" fill="none" stroke="#555570" strokeWidth="2" strokeDasharray="7 7" opacity="0.65"/>
    <path d="M590,274 C630,268 654,318 708,326" fill="none" stroke="#555570" strokeWidth="2" strokeDasharray="7 7" opacity="0.65"/>
    <path d="M778,326 C824,326 850,278 910,286" fill="none" stroke="#555570" strokeWidth="2" strokeDasharray="7 7" opacity="0.65"/>
    <path d="M978,286 C1014,288 1026,314 1074,320" fill="none" stroke="#555570" strokeWidth="2" strokeDasharray="7 7" opacity="0.65"/>
    {[
      "348,314 335,305 336,320",
      "530,276 515,269 519,284",
      "708,326 693,318 696,333",
      "910,286 895,278 899,293",
      "1074,320 1059,312 1063,327",
    ].map((points, i) => (
      <polygon key={i} points={points} fill="#555570" opacity="0.65"/>
    ))}
  </g>
);

const ClockIcons = (
  <g>
    {[225, 410, 600, 790, 970].map((cx, i) => (
      <g key={i} transform={`translate(${cx}, ${392 + (i % 2) * 18}) rotate(${i % 2 === 0 ? -6 : 5})`}>
        <rect x="-38" y="-24" width="76" height="54" rx="9" fill="#252538" stroke="#555570" strokeWidth="1" opacity="0.8"/>
        <circle cx="0" cy="0" r="16" fill="none" stroke="#E8B84A" strokeWidth="1.5" opacity="0.6"/>
        <line x1="0" y1="0" x2="0" y2="-9" stroke="#E8B84A" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
        <line x1="0" y1="0" x2="6" y2="3" stroke="#E8B84A" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
        <text x="0" y="42" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="11">
          {["2天", "5天", "1天", "3天", "2天"][i]}
        </text>
      </g>
    ))}
  </g>
);

const BottleneckIndicators = (
  <g>
    <g transform="translate(716, 272) rotate(8)">
      <polygon points="0,-14 12,8 -12,8" fill="none" stroke="#E85650" strokeWidth="1.5" opacity="0.7"/>
      <text x="0" y="5" textAnchor="middle" fill="#E85650" fontFamily="sans-serif" fontSize="11" fontWeight="bold">!</text>
    </g>
    <g transform="translate(1090, 262) rotate(6)">
      <polygon points="0,-14 12,8 -12,8" fill="none" stroke="#E85650" strokeWidth="1.5" opacity="0.7"/>
      <text x="0" y="5" textAnchor="middle" fill="#E85650" fontFamily="sans-serif" fontSize="11" fontWeight="bold">!</text>
    </g>
    <text x="600" y="520" textAnchor="middle" fill="#E85650" fontFamily="sans-serif" fontSize="15" fontWeight="bold" opacity="0.7">
      每次返工 = 数天延迟
    </text>
  </g>
);

const TimeBar = (
  <g>
    <rect x="80" y="460" width="1080" height="8" rx="4" fill="#252538"/>
    <rect x="80" y="460" width="1080" height="8" rx="4" fill="#E85650" opacity="0.25"/>
    <text x="80" y="490" fill="#555570" fontFamily="sans-serif" fontSize="12">Sprint Start</text>
    <text x="1160" y="490" textAnchor="end" fill="#555570" fontFamily="sans-serif" fontSize="12">Sprint End</text>
  </g>
);

export const agileFlowSceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: Defs,
  background: Background,
  fragments: [
    { id: "title", content: Title, enterFrom: { x: 0, y: -300 }, enterDelay: 0, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 7, y: 8 }, exitTo: { x: 0, y: -400 } },
    { id: "table", content: TableSurface, enterFrom: { x: 0, y: 250 }, enterDelay: 100, floatAmp: { x: 6, y: 8 }, floatPeriod: { x: 8, y: 9 }, exitTo: { x: 0, y: 300 } },
    { id: "arrows", content: Arrows, enterFrom: { x: 0, y: 200 }, enterDelay: 300, floatAmp: { x: 10, y: 8 }, floatPeriod: { x: 6, y: 7.5 }, exitTo: { x: 0, y: 200 } },
    { id: "nodes", content: FlowNodes, enterFrom: { x: -800, y: 0 }, enterDelay: 150, floatAmp: { x: 10, y: 8 }, floatPeriod: { x: 6, y: 7.5 }, exitTo: { x: 800, y: 0 }, exitSpin: -3 },
    { id: "clocks", content: ClockIcons, enterFrom: { x: 0, y: 300 }, enterDelay: 350, floatAmp: { x: 12, y: 14 }, floatPeriod: { x: 5, y: 6 }, floatRotate: 2, exitTo: { x: 0, y: 300 }, exitSpin: 8 },
    { id: "bottleneck", content: BottleneckIndicators, enterFrom: { x: 0, y: -200 }, enterDelay: 450, floatAmp: { x: 16, y: 20 }, floatPeriod: { x: 4, y: 5 }, exitTo: { x: 0, y: -300 } },
    { id: "timeBar", content: TimeBar, enterFrom: { x: 0, y: 250 }, enterDelay: 550, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 8, y: 9 }, floatRotate: 1, exitTo: { x: 0, y: 300 } },
  ],
};
