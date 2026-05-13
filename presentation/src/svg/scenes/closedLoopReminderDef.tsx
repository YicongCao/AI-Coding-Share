import type { SvgSceneDef } from "../SvgScene";

const Background = <rect width="1200" height="675" fill="#2B2B3D"/>;

const ReminderBadge = (
  <g transform="translate(80, 60)">
    <rect x="0" y="0" width="180" height="44" rx="22" fill="#E8B84A" opacity="0.15"/>
    <polygon points="22,10 30,26 14,26" fill="#E8B84A"/>
    <text x="100" y="28" textAnchor="middle" fill="#E8B84A" fontFamily="sans-serif" fontSize="15" fontWeight="bold">回顾第三点</text>
  </g>
);

const ClosedLoop = (
  <g transform="translate(600, 338)">
    <circle cx="0" cy="0" r="160" fill="none" stroke="#5BAD7A" strokeWidth="3" opacity="0.3"/>
    <circle cx="0" cy="0" r="130" fill="none" stroke="#5BAD7A" strokeWidth="2" strokeDasharray="8 6" opacity="0.5"/>
    {[0, 60, 120, 180, 240, 300].map((deg, i) => {
      const rad = (deg * Math.PI) / 180;
      const cx = Math.cos(rad) * 130;
      const cy = Math.sin(rad) * 130;
      const labels = ["发现", "定位", "分析", "修复", "验证", "闭环"];
      return (
        <g key={i}>
          <circle cx={cx} cy={cy} r="24" fill="#1E1E2E" stroke="#5BAD7A" strokeWidth="1.5"/>
          <text x={cx} y={cy + 5} textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="12" fontWeight="bold">{labels[i]}</text>
        </g>
      );
    })}
    <path d="M100,-85 A130,130 0 0,1 100,85" fill="none" stroke="#5BAD7A" strokeWidth="2" markerEnd="url(#loopArrow)" opacity="0.6"/>
    <text x="0" y="6" textAnchor="middle" fill="#5BAD7A" fontFamily="sans-serif" fontSize="18" fontWeight="bold">AI 闭环</text>
  </g>
);

const LightBulb = (
  <g transform="translate(980, 150)">
    <circle cx="40" cy="40" r="32" fill="#E8B84A" opacity="0.15"/>
    <path d="M40,14 L40,8 M18,22 L14,18 M62,22 L66,18 M12,42 L6,42 M68,42 L74,42" stroke="#E8B84A" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
    <path d="M28,48 Q28,22 40,18 Q52,22 52,48" fill="none" stroke="#E8B84A" strokeWidth="2.5"/>
    <rect x="30" y="48" width="20" height="8" rx="2" fill="#E8B84A" opacity="0.5"/>
    <rect x="32" y="56" width="16" height="4" rx="2" fill="#E8B84A" opacity="0.3"/>
    <text x="40" y="88" textAnchor="middle" fill="#E8B84A" fontFamily="sans-serif" fontSize="12">启发</text>
  </g>
);

const StarIcon = (
  <g transform="translate(160, 320)">
    <polygon points="20,0 26,14 42,14 30,24 34,40 20,30 6,40 10,24 -2,14 14,14" fill="#E8734A" opacity="0.5"/>
  </g>
);

const Arrow = (
  <g>
    <path d="M280,340 Q380,280 440,338" fill="none" stroke="#6EC8E6" strokeWidth="2" strokeDasharray="6 4"/>
    <polygon points="440,332 452,338 440,344" fill="#6EC8E6"/>
  </g>
);

const Defs = (
  <defs>
    <marker id="loopArrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#5BAD7A"/></marker>
  </defs>
);

export const closedLoopReminderSceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: Defs,
  background: Background,
  fragments: [
    { id: "badge", content: ReminderBadge, enterFrom: { x: -300, y: -100 }, enterDelay: 0, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 6, y: 7 } },
    { id: "loop", content: ClosedLoop, enterFrom: { x: 0, y: 300 }, enterDelay: 150, floatAmp: { x: 10, y: 14 }, floatPeriod: { x: 5.5, y: 6.5 }, exitTo: { x: 0, y: -400 } },
    { id: "bulb", content: LightBulb, enterFrom: { x: 300, y: -200 }, enterDelay: 300, floatAmp: { x: 16, y: 18 }, floatPeriod: { x: 4, y: 5 }, exitTo: { x: 400, y: -200 } },
    { id: "star", content: StarIcon, enterFrom: { x: -200, y: 0 }, enterDelay: 200, floatAmp: { x: 20, y: 22 }, floatPeriod: { x: 3.5, y: 4.5 }, exitSpin: 15 },
    { id: "arrow", content: Arrow, enterFrom: { x: 0, y: 100 }, enterDelay: 400, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 5, y: 6 } },
  ],
};
