import type { SvgSceneDef } from "../SvgScene";

const Background = (
  <g>
    <rect width="1200" height="675" fill="#2B2B3D"/>
    <rect width="1200" height="675" fill="url(#agileEndBgGlow)"/>
  </g>
);

const Defs = (
  <defs>
    <radialGradient id="agileEndBgGlow" cx="50%" cy="30%" r="60%">
      <stop offset="0%" stopColor="#5BAD7A" stopOpacity="0.12"/>
      <stop offset="100%" stopColor="#5BAD7A" stopOpacity="0"/>
    </radialGradient>
  </defs>
);


const Title = (
  <g>
    <text x="600" y="70" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="27" fontWeight="bold">我们自己就是闭环</text>
    <text x="600" y="100" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="14">Product + Engineering + Core User</text>
  </g>
);

const RoleOverlap = (
  <g transform="translate(492, 168)">
    <circle cx="86" cy="90" r="84" fill="#4A7BCC" opacity="0.22" stroke="#4A7BCC" strokeWidth="2"/>
    <circle cx="174" cy="90" r="84" fill="#5BAD7A" opacity="0.22" stroke="#5BAD7A" strokeWidth="2"/>
    <circle cx="130" cy="166" r="84" fill="#E8B84A" opacity="0.22" stroke="#E8B84A" strokeWidth="2"/>
    <text x="66" y="76" textAnchor="middle" fill="#6EC8E6" fontFamily="sans-serif" fontSize="20" fontWeight="bold">产品</text>
    <text x="196" y="76" textAnchor="middle" fill="#5BAD7A" fontFamily="sans-serif" fontSize="20" fontWeight="bold">研发</text>
    <text x="130" y="210" textAnchor="middle" fill="#E8B84A" fontFamily="sans-serif" fontSize="20" fontWeight="bold">核心用户</text>
    <g transform="translate(130, 128)">
      <circle cx="0" cy="-24" r="28" fill="#FFFFFF" opacity="0.12"/>
      <path d="M-46,54 Q-38,8 -8,4 L8,4 Q38,8 46,54 Z" fill="#FFFFFF" opacity="0.12"/>
      <text x="0" y="-2" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="24" fontWeight="bold">我们自己</text>
      <text x="0" y="26" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="13" opacity="0.68">需求、实现、使用同一批人</text>
    </g>
  </g>
);

const ClarityPanel = (
  <g transform="translate(112, 174)">
    <rect x="0" y="0" width="300" height="250" rx="18" fill="#1E1E2E" stroke="#5BAD7A" strokeWidth="1.5"/>
    <rect x="22" y="24" width="156" height="16" rx="5" fill="#5BAD7A" opacity="0.68" stroke="#7DD49A" strokeOpacity="0.3" strokeWidth="1"/>
    <text x="150" y="82" textAnchor="middle" fill="#5BAD7A" fontFamily="sans-serif" fontSize="28" fontWeight="bold">知道要做什么</text>
    <line x1="34" y1="112" x2="266" y2="112" stroke="#555570" strokeWidth="1" opacity="0.45"/>
    {[
      "痛点来自自己的日常工作",
      "优先级不用层层转述",
      "好不好用当天就能判断",
    ].map((text, i) => (
      <g key={text} transform={`translate(38, ${144 + i * 38})`}>
        <circle cx="0" cy="-5" r="10" fill="#5BAD7A" opacity="0.18" stroke="#7DD49A" strokeOpacity="0.3" strokeWidth="1"/>
        <path d="M-5,-5 L-1,0 L7,-9" fill="none" stroke="#5BAD7A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <text x="24" y="0" fill="#FFFFFF" fontFamily="sans-serif" fontSize="14" opacity="0.78">{text}</text>
      </g>
    ))}
  </g>
);

const CompletionGauge = (
  <g transform="translate(850, 168)">
    <rect x="0" y="0" width="240" height="250" rx="18" fill="#1E1E2E" stroke="#E8B84A" strokeWidth="1.5"/>
    <circle cx="120" cy="102" r="70" fill="none" stroke="#252538" strokeWidth="16"/>
    <circle cx="120" cy="102" r="70" fill="none" stroke="#5BAD7A" strokeWidth="16" strokeDasharray="396 44" strokeLinecap="round" transform="rotate(-90 120 102)"/>
    <text x="120" y="96" textAnchor="middle" fill="#5BAD7A" fontFamily="sans-serif" fontSize="44" fontWeight="bold">90%</text>
    <text x="120" y="126" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="13">成品完成度</text>
    <rect x="40" y="190" width="160" height="36" rx="18" fill="#5BAD7A" opacity="0.15" stroke="#7DD49A" strokeOpacity="0.3" strokeWidth="1"/>
    <text x="120" y="214" textAnchor="middle" fill="#5BAD7A" fontFamily="sans-serif" fontSize="16" fontWeight="bold">已经能拿来用</text>
  </g>
);

const FinishedProduct = (
  <g transform="translate(412, 462)">
    <rect x="0" y="0" width="376" height="82" rx="20" fill="#1E1E2E" stroke="#6EC8E6" strokeWidth="1.5"/>
    <rect x="28" y="28" width="230" height="16" rx="6" fill="#6EC8E6" opacity="0.65" stroke="#90D8F0" strokeOpacity="0.3" strokeWidth="1"/>
    <rect x="28" y="56" width="286" height="8" rx="4" fill="#FFFFFF" opacity="0.12"/>
    <rect x="286" y="20" width="58" height="42" rx="12" fill="#5BAD7A" opacity="0.2" stroke="#7DD49A" strokeOpacity="0.3" strokeWidth="1"/>
    <path d="M302,42 L314,52 L334,28" fill="none" stroke="#5BAD7A" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    <text x="188" y="118" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="16" fontWeight="bold" opacity="0.78">
      成品不是纸面方案，而是接近完成的可用结果
    </text>
  </g>
);

const ClosedLoopArrow = (
  <g>
    <path d="M408,318 C446,388 514,424 598,424 C686,424 758,388 800,318" fill="none" stroke="#6EC8E6" strokeWidth="2.5" strokeDasharray="9 6" opacity="0.58"/>
    <polygon points="800,318 785,326 800,334" fill="#6EC8E6" opacity="0.62"/>
    <text x="604" y="408" textAnchor="middle" fill="#6EC8E6" fontFamily="sans-serif" fontSize="14" fontWeight="bold" opacity="0.72">决策更短，反馈更快</text>
  </g>
);

export const agileEndSceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: Defs,
  background: Background,
  fragments: [
    { id: "title", content: Title, enterFrom: { x: 0, y: -300 }, enterDelay: 0, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 7, y: 8 }, exitTo: { x: 0, y: -400 } },
    { id: "clarity", content: ClarityPanel, enterFrom: { x: -500, y: 0 }, enterDelay: 100, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 6, y: 7 }, exitTo: { x: -600, y: 0 } },
    { id: "roles", content: RoleOverlap, enterFrom: { x: 0, y: 280 }, enterDelay: 160, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 7, y: 8 }, exitTo: { x: 0, y: 320 }, exitScale: 0.9 },
    { id: "completion", content: CompletionGauge, enterFrom: { x: 500, y: 0 }, enterDelay: 220, floatAmp: { x: 14, y: 16 }, floatPeriod: { x: 4.5, y: 5.5 }, exitTo: { x: 600, y: 0 }, exitSpin: 5 },
    { id: "loop", content: ClosedLoopArrow, enterFrom: { x: 0, y: 260 }, enterDelay: 330, floatAmp: { x: 12, y: 14 }, floatPeriod: { x: 5, y: 6 }, exitTo: { x: 0, y: 300 } },
    { id: "product", content: FinishedProduct, enterFrom: { x: 0, y: 260 }, enterDelay: 420, floatAmp: { x: 12, y: 14 }, floatPeriod: { x: 5.5, y: 6.5 }, exitTo: { x: 0, y: 300 } },
  ],
};
