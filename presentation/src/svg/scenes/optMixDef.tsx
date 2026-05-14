import type { SvgSceneDef } from "../SvgScene";

const Background = (
  <g>
    <rect width="1200" height="675" fill="#2B2B3D"/>
    <rect width="1200" height="675" fill="url(#optMixBgGlow)"/>
  </g>
);

const Defs = (
  <defs>
    <radialGradient id="optMixBgGlow" cx="50%" cy="30%" r="60%">
      <stop offset="0%" stopColor="#6EC8E6" stopOpacity="0.12"/>
      <stop offset="100%" stopColor="#6EC8E6" stopOpacity="0"/>
    </radialGradient>
  </defs>
);


const CenterLabel = (
  <g transform="translate(600, 337)">
    <circle cx="0" cy="0" r="60" fill="#1E1E2E" stroke="#5BAD7A" strokeWidth="2.5"/>
    <circle cx="0" cy="0" r="50" fill="#252538"/>
    <text x="0" y="-5" textAnchor="middle" fill="#5BAD7A" fontFamily="sans-serif" fontSize="28" fontWeight="bold">优化</text>
    <text x="0" y="20" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="12">Optimizations</text>
  </g>
);

const orbitItems = [
  { label: "提示词动态组装", color: "#6EC8E6", angle: 0 },
  { label: "Tools 并行化", color: "#E8734A", angle: 60 },
  { label: "缓存", color: "#E8B84A", angle: 120 },
  { label: "流式输出", color: "#5BAD7A", angle: 180 },
  { label: "上下文裁剪", color: "#4A7BCC", angle: 240 },
  { label: "预加载", color: "#E85650", angle: 300 },
] as const;

const OrbitRing = (
  <g transform="translate(600, 337)">
    <circle cx="0" cy="0" r="200" fill="none" stroke="#555570" strokeWidth="1" strokeDasharray="8 6" opacity="0.3"/>
    <circle cx="0" cy="0" r="200" fill="none" stroke="#555570" strokeWidth="0.5" opacity="0.15"/>
  </g>
);

const OrbitTags = (
  <g transform="translate(600, 337)">
    {orbitItems.map((item, i) => {
      const rad = (item.angle * Math.PI) / 180;
      const cx = Math.cos(rad) * 200;
      const cy = Math.sin(rad) * 200;
      const w = item.label.length * 16 + 24;
      return (
        <g key={i} transform={`translate(${cx}, ${cy})`}>
          <rect x={-w / 2} y="-18" width={w} height="36" rx="18" fill="#1E1E2E" stroke={item.color} strokeWidth="1.5"/>
          <rect x={-w / 2} y="-18" width={w} height="36" rx="18" fill={item.color} opacity="0.08"/>
          <text x="0" y="6" textAnchor="middle" fill={item.color} fontFamily="sans-serif" fontSize="14" fontWeight="bold">{item.label}</text>
        </g>
      );
    })}
  </g>
);

const GearIcon1 = (
  <g transform="translate(180, 150)" opacity="0.3">
    <circle cx="0" cy="0" r="24" fill="none" stroke="#555570" strokeWidth="2"/>
    <circle cx="0" cy="0" r="10" fill="none" stroke="#555570" strokeWidth="2"/>
    {Array.from({ length: 8 }, (_, i) => {
      const a = (i * 45 * Math.PI) / 180;
      return <line key={i} x1={Math.cos(a) * 16} y1={Math.sin(a) * 16} x2={Math.cos(a) * 28} y2={Math.sin(a) * 28} stroke="#555570" strokeWidth="3" strokeLinecap="round"/>;
    })}
  </g>
);

const GearIcon2 = (
  <g transform="translate(1020, 520)" opacity="0.25">
    <circle cx="0" cy="0" r="18" fill="none" stroke="#555570" strokeWidth="2"/>
    <circle cx="0" cy="0" r="7" fill="none" stroke="#555570" strokeWidth="2"/>
    {Array.from({ length: 6 }, (_, i) => {
      const a = (i * 60 * Math.PI) / 180;
      return <line key={i} x1={Math.cos(a) * 12} y1={Math.sin(a) * 12} x2={Math.cos(a) * 22} y2={Math.sin(a) * 22} stroke="#555570" strokeWidth="3" strokeLinecap="round"/>;
    })}
  </g>
);

const ConnectorLines = (
  <g opacity="0.15">
    {orbitItems.map((item, i) => {
      const rad = (item.angle * Math.PI) / 180;
      return <line key={i} x1="600" y1="337" x2={600 + Math.cos(rad) * 140} y2={337 + Math.sin(rad) * 140} stroke={item.color} strokeWidth="1.5"/>;
    })}
  </g>
);

const Caption = (
  <text x="600" y="620" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="14" opacity="0.5">多管齐下，全方位提速</text>
);

export const optMixSceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: Defs,
  background: Background,
  fragments: [
    { id: "center", content: CenterLabel, enterFrom: { x: 0, y: 0 }, enterDelay: 0, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 7, y: 8 }, exitTo: { x: 0, y: 0 }, exitScale: 0 },
    { id: "ring", content: OrbitRing, enterFrom: { x: 0, y: 0 }, enterDelay: 100, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 7, y: 8 }, exitTo: { x: 0, y: 0 }, exitScale: 0.5, exitSpin: 15 },
    { id: "tags", content: OrbitTags, enterFrom: { x: 0, y: 0 }, enterDelay: 200, floatAmp: { x: 12, y: 14 }, floatPeriod: { x: 5, y: 6 }, exitTo: { x: 0, y: 0 }, exitScale: 0.3, exitSpin: -10 },
    { id: "connectors", content: ConnectorLines, enterFrom: { x: 0, y: 0 }, enterDelay: 150, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 7, y: 8 }, exitTo: { x: 0, y: 0 } },
    { id: "gear1", content: GearIcon1, enterFrom: { x: -300, y: -200 }, enterDelay: 350, floatAmp: { x: 18, y: 20 }, floatPeriod: { x: 4, y: 5 }, exitTo: { x: -300, y: -200 }, exitSpin: 20 },
    { id: "gear2", content: GearIcon2, enterFrom: { x: 300, y: 200 }, enterDelay: 400, floatAmp: { x: 16, y: 18 }, floatPeriod: { x: 3.5, y: 4.5 }, exitTo: { x: 300, y: 200 }, exitSpin: -15 },
    { id: "caption", content: Caption, enterFrom: { x: 0, y: 200 }, enterDelay: 550, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 8, y: 9 }, exitTo: { x: 0, y: 200 } },
  ],
};
