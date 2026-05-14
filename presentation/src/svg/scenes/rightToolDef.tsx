import type { SvgSceneDef } from "../SvgScene";

const Background = (
  <g>
    <rect width="1200" height="675" fill="#2B2B3D"/>
    <rect width="1200" height="675" fill="url(#rightToolBgGlow)"/>
  </g>
);

const Defs = (
  <defs>
    <radialGradient id="rightToolBgGlow" cx="50%" cy="30%" r="60%">
      <stop offset="0%" stopColor="#6EC8E6" stopOpacity="0.12"/>
      <stop offset="100%" stopColor="#6EC8E6" stopOpacity="0"/>
    </radialGradient>
  </defs>
);


const Toolbox = (
  <g transform="translate(120, 140)">
    <rect x="0" y="40" width="280" height="340" rx="14" fill="#1E1E2E" stroke="#555570" strokeWidth="1.5"/>
    <rect x="80" y="20" width="120" height="30" rx="8" fill="#252538" stroke="#555570" strokeWidth="1"/>
    <rect x="110" y="10" width="60" height="16" rx="6" fill="#555570"/>
    {/* Wrench */}
    <g transform="translate(60, 100)">
      <rect x="0" y="12" width="40" height="8" rx="3" fill="#E8B84A" opacity="0.8"/>
      <circle cx="42" cy="16" r="14" fill="none" stroke="#E8B84A" strokeWidth="3" opacity="0.8"/>
    </g>
    {/* Hammer */}
    <g transform="translate(160, 90)">
      <rect x="20" y="0" width="8" height="50" rx="3" fill="#E8734A" opacity="0.7"/>
      <rect x="0" y="-4" width="50" height="16" rx="4" fill="#E8734A" opacity="0.8" stroke="#F09570" strokeOpacity="0.3" strokeWidth="1"/>
    </g>
    {/* Terminal */}
    <g transform="translate(50, 200)">
      <rect x="0" y="0" width="80" height="55" rx="8" fill="#252538" stroke="#5BAD7A" strokeWidth="1.2"/>
      <text x="12" y="22" fill="#5BAD7A" fontFamily="monospace" fontSize="12">$_</text>
      <rect x="12" y="32" width="50" height="4" rx="2" fill="#5BAD7A" opacity="0.4"/>
      <rect x="12" y="42" width="35" height="4" rx="2" fill="#5BAD7A" opacity="0.3"/>
    </g>
    {/* Search icon */}
    <g transform="translate(160, 210)">
      <circle cx="22" cy="22" r="18" fill="none" stroke="#6EC8E6" strokeWidth="2.5"/>
      <line x1="36" y1="36" x2="52" y2="52" stroke="#6EC8E6" strokeWidth="3" strokeLinecap="round"/>
    </g>
    {/* Gear */}
    <g transform="translate(90, 310)">
      <circle cx="20" cy="20" r="16" fill="none" stroke="#4A7BCC" strokeWidth="2.5"/>
      <circle cx="20" cy="20" r="7" fill="#4A7BCC" opacity="0.5" stroke="#6A9BE0" strokeOpacity="0.3" strokeWidth="1"/>
      {[0, 45, 90, 135].map((a, i) => (
        <line key={i} x1={20 + 14 * Math.cos(a * Math.PI / 180)} y1={20 + 14 * Math.sin(a * Math.PI / 180)}
              x2={20 + 22 * Math.cos(a * Math.PI / 180)} y2={20 + 22 * Math.sin(a * Math.PI / 180)}
              stroke="#4A7BCC" strokeWidth="3" strokeLinecap="round"/>
      ))}
    </g>
  </g>
);

const ArrowConnector = (
  <g>
    <line x1="430" y1="338" x2="580" y2="338" stroke="#E8B84A" strokeWidth="3" strokeDasharray="10 6" opacity="0.7"/>
    <polygon points="580,328 605,338 580,348" fill="#E8B84A" opacity="0.7"/>
  </g>
);

const Checklist = (
  <g transform="translate(640, 120)">
    <rect x="0" y="0" width="400" height="420" rx="14" fill="#1E1E2E" stroke="#555570" strokeWidth="1.5"/>
    <text x="200" y="45" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="18" fontWeight="bold" opacity="0.7">Task Checklist</text>
    <line x1="20" y1="62" x2="380" y2="62" stroke="#555570" strokeWidth="0.5"/>
    {[
      { label: "代码搜索", sub: "Grep / SemanticSearch", done: true },
      { label: "文件操作", sub: "Read / Write / Edit", done: true },
      { label: "终端执行", sub: "Shell / Terminal", done: true },
      { label: "外部服务", sub: "MCP Tools", done: false },
      { label: "规则约束", sub: "Rules / Skills", done: false },
    ].map((item, i) => {
      const y = 85 + i * 64;
      return (
        <g key={i}>
          <rect x="28" y={y} width="24" height="24" rx="5" fill={item.done ? "#5BAD7A" : "#252538"} stroke={item.done ? "#5BAD7A" : "#555570"} strokeWidth="1.5"/>
          {item.done && <path d={`M${34},${y + 13} L${38},${y + 18} L${46},${y + 8}`} fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>}
          <text x="68" y={y + 17} fill="#FFFFFF" fontFamily="sans-serif" fontSize="16" fontWeight="bold">{item.label}</text>
          <text x="68" y={y + 34} fill="#555570" fontFamily="sans-serif" fontSize="12">{item.sub}</text>
        </g>
      );
    })}
  </g>
);

const TitleLabel = (
  <g>
    <rect x="470" y="580" width="260" height="48" rx="10" fill="#252538" stroke="#FFFFFF" strokeOpacity="0.1" strokeWidth="1.5"/>
    <text x="600" y="610" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="22" fontWeight="bold">合适的工具</text>
    <text x="600" y="648" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="13">Right Tool for the Right Job</text>
  </g>
);

export const rightToolSceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: Defs,
  background: Background,
  fragments: [
    { id: "toolbox", content: Toolbox, enterFrom: { x: -500, y: 0 }, enterDelay: 0, floatAmp: { x: 10, y: 14 }, floatPeriod: { x: 6, y: 7 }, exitTo: { x: -600, y: 0 }, exitSpin: -4 },
    { id: "arrowConnector", content: ArrowConnector, enterFrom: { x: 0, y: 0 }, enterDelay: 200, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 5, y: 6 }, exitTo: { x: 0, y: -200 } },
    { id: "checklist", content: Checklist, enterFrom: { x: 500, y: 0 }, enterDelay: 100, floatAmp: { x: 12, y: 14 }, floatPeriod: { x: 5.5, y: 6.5 }, exitTo: { x: 600, y: 0 }, exitSpin: 4 },
    { id: "titleLabel", content: TitleLabel, enterFrom: { x: 0, y: 200 }, enterDelay: 400, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 7, y: 8 }, exitTo: { x: 0, y: 300 } },
  ],
};
