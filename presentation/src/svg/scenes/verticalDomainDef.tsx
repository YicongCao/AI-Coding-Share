import type { SvgSceneDef } from "../SvgScene";

const Background = <rect width="1200" height="675" fill="#2B2B3D"/>;

const MountainTerrain = (
  <g>
    <path d="M0,550 Q100,500 200,480 Q350,440 450,350 Q520,290 600,220 Q650,185 700,220 Q780,280 850,380 Q920,450 1000,470 Q1100,490 1200,500 L1200,675 L0,675 Z" fill="#1E1E2E" stroke="#555570" strokeWidth="1.5"/>
    <path d="M0,550 Q100,500 200,480 Q350,440 450,350 Q520,290 600,220 Q650,185 700,220 Q780,280 850,380 Q920,450 1000,470 Q1100,490 1200,500" fill="none" stroke="#5BAD7A" strokeWidth="2.5" opacity="0.6"/>
    <path d="M450,350 Q520,290 600,220 Q650,185 700,220" fill="none" stroke="#5BAD7A" strokeWidth="3" opacity="0.9"/>
    {[200, 400, 800, 1050].map((x, i) => (
      <line key={i} x1={x} y1={[480, 355, 375, 470][i]} x2={x} y2="675" stroke="#555570" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.2"/>
    ))}
  </g>
);

const PeakStar = (
  <g transform="translate(600, 170)">
    <polygon points="0,-28 8,-8 28,-8 12,5 18,26 0,14 -18,26 -12,5 -28,-8 -8,-8" fill="#E8B84A" opacity="0.8"/>
    <polygon points="0,-28 8,-8 28,-8 12,5 18,26 0,14 -18,26 -12,5 -28,-8 -8,-8" fill="none" stroke="#E8B84A" strokeWidth="1.5"/>
    <circle cx="0" cy="0" r="40" fill="none" stroke="#E8B84A" strokeWidth="1" strokeDasharray="4 4" opacity="0.3"/>
  </g>
);

const VerticalLabel = (
  <g transform="translate(510, 100)">
    <rect x="0" y="0" width="180" height="50" rx="12" fill="#1E1E2E" stroke="#5BAD7A" strokeWidth="2"/>
    <text x="90" y="33" textAnchor="middle" fill="#5BAD7A" fontFamily="sans-serif" fontSize="22" fontWeight="bold">垂直领域</text>
  </g>
);

const DiffLabel = (
  <g transform="translate(480, 570)">
    <rect x="0" y="0" width="240" height="44" rx="22" fill="#E8734A" opacity="0.15"/>
    <text x="120" y="29" textAnchor="middle" fill="#E8734A" fontFamily="sans-serif" fontSize="18" fontWeight="bold">差异化竞争</text>
  </g>
);

const NexHint = (
  <g transform="translate(570, 230)">
    <rect x="0" y="0" width="60" height="24" rx="6" fill="#6EC8E6" opacity="0.2"/>
    <text x="30" y="17" textAnchor="middle" fill="#6EC8E6" fontFamily="sans-serif" fontSize="12" fontWeight="bold">Nex</text>
    <line x1="30" y1="24" x2="30" y2="50" stroke="#6EC8E6" strokeWidth="1" strokeDasharray="3 3" opacity="0.4"/>
  </g>
);

const CompetitorDots = (
  <g opacity="0.35">
    {[
      { x: 200, y: 460, label: "通用工具 A" },
      { x: 900, y: 360, label: "通用工具 B" },
      { x: 1050, y: 450, label: "通用工具 C" },
    ].map((d, i) => (
      <g key={i}>
        <circle cx={d.x} cy={d.y} r="6" fill="#555570"/>
        <text x={d.x} y={d.y - 14} textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="11">{d.label}</text>
      </g>
    ))}
  </g>
);

const ExperienceArrow = (
  <g transform="translate(50, 300)">
    <line x1="0" y1="0" x2="0" y2="250" stroke="#555570" strokeWidth="1.5" opacity="0.3"/>
    <polygon points="0,0 -5,12 5,12" fill="#555570" opacity="0.3"/>
    <text x="-10" y="130" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="11" opacity="0.4" transform="rotate(-90, -10, 130)">体验质量 →</text>
  </g>
);

const AccentGlow = (
  <g opacity="0.15">
    <circle cx="600" cy="200" r="80" fill="#E8B84A"/>
    <circle cx="600" cy="200" r="120" fill="#E8B84A" opacity="0.3"/>
  </g>
);

export const verticalDomainSceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: <defs/>,
  background: Background,
  fragments: [
    { id: "glow", content: AccentGlow, enterFrom: { x: 0, y: -200 }, enterDelay: 0, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 8, y: 9 } },
    { id: "mountain", content: MountainTerrain, enterFrom: { x: 0, y: 300 }, enterDelay: 50, floatAmp: { x: 8, y: 8 }, floatPeriod: { x: 9, y: 8 }, exitTo: { x: 0, y: 400 } },
    { id: "star", content: PeakStar, enterFrom: { x: 0, y: -300 }, enterDelay: 200, floatAmp: { x: 14, y: 18 }, floatPeriod: { x: 4.5, y: 5 }, exitTo: { x: 0, y: -400 }, exitSpin: 15 },
    { id: "vertLabel", content: VerticalLabel, enterFrom: { x: 0, y: -250 }, enterDelay: 250, floatAmp: { x: 12, y: 14 }, floatPeriod: { x: 5, y: 6 }, exitTo: { x: 0, y: -300 }, exitScale: 0.85 },
    { id: "nex", content: NexHint, enterFrom: { x: 0, y: -200 }, enterDelay: 300, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 5.5, y: 6.5 }, exitTo: { x: 0, y: -200 } },
    { id: "competitors", content: CompetitorDots, enterFrom: { x: 0, y: 200 }, enterDelay: 350, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 6, y: 7 }, exitTo: { x: 0, y: 200 } },
    { id: "diffLabel", content: DiffLabel, enterFrom: { x: 0, y: 200 }, enterDelay: 450, floatAmp: { x: 16, y: 20 }, floatPeriod: { x: 4, y: 5 }, exitTo: { x: 0, y: 200 }, exitSpin: -5 },
    { id: "yAxis", content: ExperienceArrow, enterFrom: { x: -200, y: 0 }, enterDelay: 500, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 7, y: 8 }, exitTo: { x: -200, y: 0 } },
  ],
};
