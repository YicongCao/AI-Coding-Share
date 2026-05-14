import type { SvgSceneDef } from "../SvgScene";

const Background = (
  <g>
    <rect width="1200" height="675" fill="#2B2B3D"/>
    <rect width="1200" height="675" fill="url(#phasedRealityBgGlow)"/>
  </g>
);

const Defs = (
  <defs>
    <radialGradient id="phasedRealityBgGlow" cx="50%" cy="30%" r="60%">
      <stop offset="0%" stopColor="#4A7BCC" stopOpacity="0.12"/>
      <stop offset="100%" stopColor="#4A7BCC" stopOpacity="0"/>
    </radialGradient>
  </defs>
);


const Title = (
  <g>
    <rect x="380" y="20" width="440" height="44" rx="10" fill="#1E1E2E" stroke="#E8B84A" strokeWidth="1.5"/>
    <text x="600" y="49" textAnchor="middle" fill="#E8B84A" fontFamily="sans-serif" fontSize="20" fontWeight="bold">阶段性</text>
    <text x="600" y="82" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="14">No perfect architecture from day 1</text>
  </g>
);

const Staircase = (
  <g transform="translate(100, 520)">
    {[0, 1, 2, 3, 4].map((i) => {
      const x = i * 200;
      const h = 60 + i * 50;
      const y = -h;
      const colors = ["#555570", "#4A7BCC", "#6EC8E6", "#5BAD7A", "#E8B84A"];
      return (
        <g key={i}>
          <rect x={x} y={y} width="180" height={h} rx="8" fill="#1E1E2E" stroke={colors[i]} strokeWidth="2"/>
          <rect x={x + 15} y={y + 14} width="150" height="28" rx="6" fill="#252538"/>
          <text x={x + 90} y={y + 34} textAnchor="middle" fill={colors[i]} fontFamily="sans-serif" fontSize="14" fontWeight="bold">
            {["Phase 1", "Phase 2", "Phase 3", "Phase 4", "Phase 5"][i]}
          </text>
          <text x={x + 90} y={y + 58} textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="11" opacity="0.6">
            {["SSE 直连", "SSE+WS", "SDK 封装", "插件化", "平台化"][i]}
          </text>
        </g>
      );
    })}
    {/* progression arrow */}
    <line x1="0" y1="10" x2="1000" y2="10" stroke="#555570" strokeWidth="1.5" strokeDasharray="8 5" opacity="0.4"/>
  </g>
);

const ProgressArrow = (
  <g>
    <path d="M150,485 Q600,400 1050,200" fill="none" stroke="#E8B84A" strokeWidth="2.5" strokeDasharray="10 6" opacity="0.5"/>
    <polygon points="1050,190 1060,210 1040,210" fill="#E8B84A" opacity="0.6"/>
  </g>
);

const Star = (
  <g transform="translate(1060, 155)">
    <polygon points="0,-28 7,-9 28,-9 12,4 18,24 0,13 -18,24 -12,4 -28,-9 -7,-9" fill="#E8B84A" opacity="0.8"/>
    <polygon points="0,-18 5,-6 18,-6 8,3 12,16 0,9 -12,16 -8,3 -18,-6 -5,-6" fill="#E8B84A" opacity="0.3"/>
  </g>
);

const Subtitle = (
  <g>
    <rect x="370" y="590" width="460" height="50" rx="12" fill="#1E1E2E" stroke="#5BAD7A" strokeWidth="1.5"/>
    <text x="600" y="622" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="20" fontWeight="bold">每个阶段做对的事</text>
  </g>
);

const AccentDots = (
  <g opacity="0.3">
    <circle cx="60" cy="120" r="4" fill="#E8734A"/>
    <circle cx="80" cy="150" r="3" fill="#6EC8E6"/>
    <circle cx="1140" cy="400" r="3.5" fill="#5BAD7A"/>
    <circle cx="1120" cy="430" r="2.5" fill="#4A7BCC"/>
  </g>
);

export const phasedRealitySceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: Defs,
  background: Background,
  fragments: [
    { id: "title", content: Title, enterFrom: { x: 0, y: -250 }, enterDelay: 0, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 7, y: 8 } },
    { id: "staircase", content: Staircase, enterFrom: { x: 0, y: 400 }, enterDelay: 100, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 5.5, y: 6.5 }, exitTo: { x: 0, y: 500 } },
    { id: "arrow", content: ProgressArrow, enterFrom: { x: -400, y: 200 }, enterDelay: 300, floatAmp: { x: 12, y: 14 }, floatPeriod: { x: 4.5, y: 5.5 }, exitTo: { x: -500, y: 300 } },
    { id: "star", content: Star, enterFrom: { x: 300, y: -300 }, enterDelay: 400, floatAmp: { x: 18, y: 22 }, floatPeriod: { x: 3.5, y: 4 }, exitTo: { x: 400, y: -400 }, exitSpin: 15 },
    { id: "subtitle", content: Subtitle, enterFrom: { x: 0, y: 300 }, enterDelay: 500, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 6, y: 7 }, exitTo: { x: 0, y: 350 } },
    { id: "dots", content: AccentDots, enterFrom: { x: 0, y: 0 }, enterDelay: 600, floatAmp: { x: 14, y: 18 }, floatPeriod: { x: 3.5, y: 4.5 } },
  ],
};
