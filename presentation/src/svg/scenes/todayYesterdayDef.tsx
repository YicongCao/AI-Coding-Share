import type { SvgSceneDef } from "../SvgScene";

const Background = (
  <g>
    <rect width="1200" height="675" fill="#2B2B3D"/>
    <rect width="1200" height="675" fill="url(#todayYesterdayBgGlow)"/>
  </g>
);

const Defs = (
  <defs>
    <radialGradient id="todayYesterdayBgGlow" cx="50%" cy="30%" r="60%">
      <stop offset="0%" stopColor="#E8B84A" stopOpacity="0.12"/>
      <stop offset="100%" stopColor="#E8B84A" stopOpacity="0"/>
    </radialGradient>
  </defs>
);


const Title = (
  <g>
    <text x="600" y="55" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="28" fontWeight="bold">今天 vs 昨天</text>
    <text x="600" y="82" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="14">The Only Difference</text>
  </g>
);

const YesterdayCard = (
  <g transform="translate(100, 140)">
    <rect x="0" y="0" width="420" height="400" rx="16" fill="#1E1E2E" stroke="#555570" strokeWidth="1.5"/>
    <text x="210" y="50" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="24" fontWeight="bold">昨天</text>
    <text x="210" y="76" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="13">Yesterday</text>
    <line x1="40" y1="95" x2="380" y2="95" stroke="#555570" strokeWidth="0.5" opacity="0.4"/>
    <circle cx="210" cy="170" r="40" fill="#555570" opacity="0.1"/>
    <path d="M210,140 L210,200 M190,160 L210,140 L230,160" fill="none" stroke="#555570" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.4"/>
    {[210, 240, 270, 300, 330].map((y, i) => (
      <rect key={i} x="60" y={y} width={200 + (i % 3) * 40} height="6" rx="3" fill="#555570" opacity={0.15 + (i % 3) * 0.05}/>
    ))}
    <text x="210" y="380" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="13" opacity="0.6">技能 + 经验 + 努力</text>
  </g>
);

const TodayCard = (
  <g transform="translate(680, 140)">
    <rect x="0" y="0" width="420" height="400" rx="16" fill="#1E1E2E" stroke="#5BAD7A" strokeWidth="1.5"/>
    <text x="210" y="50" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="24" fontWeight="bold">今天</text>
    <text x="210" y="76" textAnchor="middle" fill="#5BAD7A" fontFamily="sans-serif" fontSize="13">Today</text>
    <line x1="40" y1="95" x2="380" y2="95" stroke="#555570" strokeWidth="0.5" opacity="0.4"/>
    <circle cx="210" cy="170" r="40" fill="#5BAD7A" opacity="0.1"/>
    <path d="M210,140 L210,200 M190,160 L210,140 L230,160" fill="none" stroke="#5BAD7A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
    {[210, 240, 270, 300, 330].map((y, i) => (
      <rect key={i} x="60" y={y} width={200 + (i % 3) * 40} height="6" rx="3" fill="#555570" opacity={0.15 + (i % 3) * 0.05}/>
    ))}
    <text x="210" y="380" textAnchor="middle" fill="#5BAD7A" fontFamily="sans-serif" fontSize="13">技能 + 经验 + 努力</text>
  </g>
);

const AIBadge = (
  <g transform="translate(840, 115)">
    <rect x="0" y="0" width="60" height="30" rx="15" fill="#E8B84A"/>
    <text x="30" y="21" textAnchor="middle" fill="#1E1E2E" fontFamily="sans-serif" fontSize="15" fontWeight="900">AI</text>
    <circle cx="60" cy="0" r="8" fill="#E8B84A" opacity="0.4"/>
    <circle cx="66" cy="-8" r="5" fill="#E8B84A" opacity="0.25"/>
  </g>
);

const EqualsSign = (
  <g transform="translate(555, 300)">
    <text x="45" y="40" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="50" fontWeight="bold" opacity="0.5">≈</text>
    <text x="45" y="75" textAnchor="middle" fill="#E8B84A" fontFamily="sans-serif" fontSize="12" fontWeight="bold">+ AI</text>
  </g>
);

export const todayYesterdaySceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: Defs,
  background: Background,
  fragments: [
    { id: "title", content: Title, enterFrom: { x: 0, y: -120 }, enterDelay: 0, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 7, y: 8 } },
    { id: "yesterday", content: YesterdayCard, enterFrom: { x: -500, y: 0 }, enterDelay: 100, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 6, y: 7 }, exitTo: { x: -600, y: 0 } },
    { id: "today", content: TodayCard, enterFrom: { x: 500, y: 0 }, enterDelay: 150, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 5.5, y: 6.5 }, exitTo: { x: 600, y: 0 } },
    { id: "aiBadge", content: AIBadge, enterFrom: { x: 200, y: -200 }, enterDelay: 350, floatAmp: { x: 16, y: 18 }, floatPeriod: { x: 4, y: 5 }, exitTo: { x: 300, y: -300 }, exitSpin: 10 },
    { id: "equals", content: EqualsSign, enterFrom: { x: 0, y: 200 }, enterDelay: 300, floatAmp: { x: 12, y: 14 }, floatPeriod: { x: 5, y: 6 } },
  ],
};
