import type { SvgSceneDef } from "../SvgScene";

const Background = (
  <g>
    <rect width="1200" height="675" fill="#2B2B3D"/>
    <rect width="1200" height="675" fill="url(#singleThreadBgGlow)"/>
  </g>
);

const Defs = (
  <defs>
    <radialGradient id="singleThreadBgGlow" cx="50%" cy="30%" r="60%">
      <stop offset="0%" stopColor="#6EC8E6" stopOpacity="0.12"/>
      <stop offset="100%" stopColor="#6EC8E6" stopOpacity="0"/>
    </radialGradient>
  </defs>
);


const TimelineAxis = (
  <g>
    <line x1="100" y1="320" x2="1100" y2="320" stroke="#555570" strokeWidth="2"/>
    <polygon points="1100,320 1086,312 1086,328" fill="#555570"/>
    {[200, 340, 480, 620, 760, 900, 1020].map((x, i) => (
      <line key={i} x1={x} y1="314" x2={x} y2="326" stroke="#555570" strokeWidth="1.5"/>
    ))}
    <text x="1100" y="350" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="12" opacity="0.5">time</text>
  </g>
);

const ThreadLine = (
  <g>
    <line x1="160" y1="280" x2="1060" y2="280" stroke="#6EC8E6" strokeWidth="4" strokeLinecap="round" opacity="0.8"/>
    {/* Active task blocks on the thread */}
    {[
      { x: 180, w: 130, color: "#5BAD7A" },
      { x: 330, w: 120, color: "#E8B84A" },
      { x: 470, w: 150, color: "#6EC8E6" },
      { x: 640, w: 100, color: "#E8734A" },
      { x: 760, w: 140, color: "#4A7BCC" },
      { x: 920, w: 120, color: "#5BAD7A" },
    ].map((t, i) => (
      <g key={i}>
        <rect x={t.x} y="264" width={t.w} height="32" rx="6" fill={t.color} opacity="0.5"/>
        <rect x={t.x + 8} y="276" width={t.w - 16} height="4" rx="2" fill="#FFFFFF" opacity="0.3"/>
      </g>
    ))}
    <text x="120" y="285" textAnchor="middle" fill="#6EC8E6" fontFamily="sans-serif" fontSize="13" fontWeight="bold">AI</text>
  </g>
);

const ThreadLabel = (
  <g transform="translate(460, 120)">
    <rect x="0" y="0" width="280" height="60" rx="14" fill="#1E1E2E" stroke="#6EC8E6" strokeWidth="2"/>
    <text x="140" y="38" textAnchor="middle" fill="#6EC8E6" fontFamily="sans-serif" fontSize="26" fontWeight="bold">单线程</text>
  </g>
);

const MaxBadge = (
  <g transform="translate(820, 120)">
    <rect x="0" y="0" width="200" height="50" rx="25" fill="#252538" stroke="#5BAD7A" strokeWidth="2"/>
    <text x="100" y="33" textAnchor="middle" fill="#5BAD7A" fontFamily="sans-serif" fontSize="16" fontWeight="bold">Output MAX ↑</text>
  </g>
);

const TimelineDots = (
  <g>
    {[200, 340, 480, 620, 760, 900, 1020].map((x, i) => (
      <circle key={i} cx={x} cy="320" r="5" fill={["#5BAD7A", "#E8B84A", "#6EC8E6", "#E8734A", "#4A7BCC", "#5BAD7A", "#E8B84A"][i]} opacity="0.7"/>
    ))}
  </g>
);

const Utilization = (
  <g transform="translate(200, 420)">
    <rect x="0" y="0" width="700" height="30" rx="8" fill="#252538" stroke="#FFFFFF" strokeOpacity="0.1" strokeWidth="1.5"/>
    <rect x="3" y="3" width="680" height="24" rx="6" fill="#5BAD7A" opacity="0.5" stroke="#7DD49A" strokeOpacity="0.3" strokeWidth="1"/>
    <text x="350" y="20" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="12" fontWeight="bold">利用率 97%</text>
  </g>
);

const Subtitle = (
  <g transform="translate(600, 530)">
    <text x="0" y="0" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="18" opacity="0.6">一个 AI 持续忙碌，单线程产出最大化</text>
  </g>
);

export const singleThreadSceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: Defs,
  background: Background,
  fragments: [
    { id: "axis", content: TimelineAxis, enterFrom: { x: -600, y: 0 }, enterDelay: 0, floatAmp: { x: 8, y: 8 }, floatPeriod: { x: 8, y: 9 }, exitTo: { x: 1200, y: 0 } },
    { id: "dots", content: TimelineDots, enterFrom: { x: 0, y: 200 }, enterDelay: 100, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 6, y: 7 } },
    { id: "thread", content: ThreadLine, enterFrom: { x: 0, y: -300 }, enterDelay: 150, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 5.5, y: 6.5 }, exitTo: { x: 0, y: -500 } },
    { id: "label", content: ThreadLabel, enterFrom: { x: 0, y: -400 }, enterDelay: 200, floatAmp: { x: 12, y: 14 }, floatPeriod: { x: 5, y: 6 }, exitTo: { x: 0, y: -500 }, exitScale: 0.9 },
    { id: "badge", content: MaxBadge, enterFrom: { x: 300, y: -200 }, enterDelay: 350, floatAmp: { x: 14, y: 18 }, floatPeriod: { x: 4, y: 5 }, floatRotate: 1.5, exitTo: { x: 300, y: -300 } },
    { id: "util", content: Utilization, enterFrom: { x: 0, y: 200 }, enterDelay: 400, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 7, y: 8 }, exitTo: { x: 0, y: 300 } },
    { id: "subtitle", content: Subtitle, enterFrom: { x: 0, y: 200 }, enterDelay: 500, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 7, y: 9 } },
  ],
};
