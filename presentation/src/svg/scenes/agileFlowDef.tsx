import type { SvgSceneDef } from "../SvgScene";

const Background = <rect width="1200" height="675" fill="#2B2B3D"/>;

const Title = (
  <g>
    <text x="600" y="80" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="28" fontWeight="bold">传统敏捷流程</text>
    <text x="600" y="110" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="14">Traditional Agile Flow</text>
  </g>
);

const nodeData = [
  { label: "需求", color: "#4A7BCC", x: 80 },
  { label: "开发", color: "#5BAD7A", x: 270 },
  { label: "体验", color: "#6EC8E6", x: 460 },
  { label: "返工", color: "#E85650", x: 650 },
  { label: "测试", color: "#E8B84A", x: 840 },
  { label: "返工", color: "#E85650", x: 1030 },
] as const;

const FlowNodes = (
  <g transform="translate(0, 260)">
    {nodeData.map((n, i) => (
      <g key={i}>
        <rect x={n.x} y="0" width="130" height="60" rx="12" fill="#1E1E2E" stroke={n.color} strokeWidth="2"/>
        <rect x={n.x} y="0" width="130" height="60" rx="12" fill={n.color} opacity="0.12"/>
        <text x={n.x + 65} y="38" textAnchor="middle" fill={n.color} fontFamily="sans-serif" fontSize="20" fontWeight="bold">{n.label}</text>
      </g>
    ))}
  </g>
);

const Arrows = (
  <g transform="translate(0, 290)">
    {[210, 400, 590, 780, 970].map((x, i) => (
      <g key={i}>
        <line x1={x} y1="0" x2={x + 50} y2="0" stroke="#555570" strokeWidth="2"/>
        <polygon points={`${x + 50},0 ${x + 42},-5 ${x + 42},5`} fill="#555570"/>
      </g>
    ))}
  </g>
);

const ClockIcons = (
  <g transform="translate(0, 340)">
    {[175, 365, 555, 745, 935].map((cx, i) => (
      <g key={i} transform={`translate(${cx}, 30)`}>
        <circle cx="0" cy="0" r="16" fill="none" stroke="#E8B84A" strokeWidth="1.5" opacity="0.6"/>
        <line x1="0" y1="0" x2="0" y2="-9" stroke="#E8B84A" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
        <line x1="0" y1="0" x2="6" y2="3" stroke="#E8B84A" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
        <text x="0" y="30" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="11">
          {["2天", "5天", "1天", "3天", "2天"][i]}
        </text>
      </g>
    ))}
  </g>
);

const BottleneckIndicators = (
  <g>
    {/* Warning triangles on rework nodes */}
    <g transform="translate(715, 240)">
      <polygon points="0,-14 12,8 -12,8" fill="none" stroke="#E85650" strokeWidth="1.5" opacity="0.7"/>
      <text x="0" y="5" textAnchor="middle" fill="#E85650" fontFamily="sans-serif" fontSize="11" fontWeight="bold">!</text>
    </g>
    <g transform="translate(1095, 240)">
      <polygon points="0,-14 12,8 -12,8" fill="none" stroke="#E85650" strokeWidth="1.5" opacity="0.7"/>
      <text x="0" y="5" textAnchor="middle" fill="#E85650" fontFamily="sans-serif" fontSize="11" fontWeight="bold">!</text>
    </g>
    <text x="600" y="520" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="15" opacity="0.6">
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
  defs: <defs/>,
  background: Background,
  fragments: [
    { id: "title", content: Title, enterFrom: { x: 0, y: -300 }, enterDelay: 0, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 7, y: 8 }, exitTo: { x: 0, y: -400 } },
    { id: "nodes", content: FlowNodes, enterFrom: { x: -800, y: 0 }, enterDelay: 150, floatAmp: { x: 10, y: 8 }, floatPeriod: { x: 6, y: 7.5 }, exitTo: { x: 800, y: 0 }, exitSpin: -3 },
    { id: "arrows", content: Arrows, enterFrom: { x: 0, y: 200 }, enterDelay: 300, floatAmp: { x: 10, y: 8 }, floatPeriod: { x: 6, y: 7.5 }, exitTo: { x: 0, y: 200 } },
    { id: "clocks", content: ClockIcons, enterFrom: { x: 0, y: 300 }, enterDelay: 350, floatAmp: { x: 12, y: 14 }, floatPeriod: { x: 5, y: 6 }, exitTo: { x: 0, y: 300 }, exitSpin: 8 },
    { id: "bottleneck", content: BottleneckIndicators, enterFrom: { x: 0, y: -200 }, enterDelay: 450, floatAmp: { x: 16, y: 20 }, floatPeriod: { x: 4, y: 5 }, exitTo: { x: 0, y: -300 } },
    { id: "timeBar", content: TimeBar, enterFrom: { x: 0, y: 250 }, enterDelay: 550, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 8, y: 9 }, exitTo: { x: 0, y: 300 } },
  ],
};
