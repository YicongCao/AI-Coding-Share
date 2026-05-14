import type { SvgSceneDef } from "../SvgScene";

const Background = (
  <g>
    <rect width="1200" height="675" fill="#2B2B3D"/>
    <rect width="1200" height="675" fill="url(#nexEchoBgGlow)"/>
  </g>
);

const Defs = (
  <defs>
    <radialGradient id="nexEchoBgGlow" cx="50%" cy="30%" r="60%">
      <stop offset="0%" stopColor="#5BAD7A" stopOpacity="0.12"/>
      <stop offset="100%" stopColor="#5BAD7A" stopOpacity="0"/>
    </radialGradient>
  </defs>
);


const PMFigure = (
  <g transform="translate(135, 258)">
    <circle cx="58" cy="18" r="28" fill="#6EC8E6" opacity="0.72" stroke="#90D8F0" strokeOpacity="0.3" strokeWidth="1"/>
    <path d="M26,72 Q28,48 52,44 L64,44 Q88,48 90,72 L96,135 L20,135 Z" fill="#252538" stroke="#6EC8E6" strokeWidth="2"/>
    <circle cx="48" cy="14" r="3" fill="#1E1E2E"/>
    <circle cx="68" cy="14" r="3" fill="#1E1E2E"/>
    <path d="M49,28 Q58,35 67,28" fill="none" stroke="#1E1E2E" strokeWidth="2" strokeLinecap="round"/>
    <rect x="8" y="142" width="104" height="36" rx="18" fill="#6EC8E6" opacity="0.16" stroke="#90D8F0" strokeOpacity="0.3" strokeWidth="1"/>
    <text x="60" y="166" textAnchor="middle" fill="#6EC8E6" fontFamily="sans-serif" fontSize="18" fontWeight="bold">PM</text>
    <path d="M96,92 C136,82 158,90 182,116" fill="none" stroke="#6EC8E6" strokeWidth="2" opacity="0.65"/>
  </g>
);

const NexEditor = (
  <g transform="translate(330, 150)">
    <rect x="0" y="0" width="360" height="285" rx="14" fill="#1E1E2E" stroke="#555570" strokeWidth="1.5"/>
    <rect x="0" y="0" width="360" height="36" rx="14" fill="#252538" stroke="#FFFFFF" strokeOpacity="0.1" strokeWidth="1.5"/>
    <circle cx="22" cy="18" r="4" fill="#E85650" opacity="0.85"/>
    <circle cx="38" cy="18" r="4" fill="#E8B84A" opacity="0.85"/>
    <circle cx="54" cy="18" r="4" fill="#5BAD7A" opacity="0.85"/>
    <text x="180" y="23" textAnchor="middle" fill="#6EC8E6" fontFamily="sans-serif" fontSize="14" fontWeight="bold">Nex 编辑界面</text>

    <rect x="18" y="54" width="88" height="212" rx="8" fill="#252538" stroke="#FFFFFF" strokeOpacity="0.1" strokeWidth="1.5"/>
    {["背景", "目标", "方案", "风险"].map((item, i) => (
      <g key={item} transform={`translate(32, ${76 + i * 42})`}>
        <rect x="0" y="0" width="58" height="24" rx="6" fill={i === 2 ? "#6EC8E6" : "#555570"} opacity={i === 2 ? 0.45 : 0.28}/>
        <text x="29" y="17" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="10" opacity="0.75">{item}</text>
      </g>
    ))}

    <rect x="122" y="54" width="220" height="152" rx="10" fill="#2B2B3D" stroke="#6EC8E6" strokeWidth="1" opacity="0.95"/>
    <rect x="142" y="78" width="94" height="12" rx="4" fill="#6EC8E6" opacity="0.7"/>
    <rect x="142" y="108" width="170" height="8" rx="3" fill="#FFFFFF" opacity="0.18"/>
    <rect x="142" y="128" width="150" height="8" rx="3" fill="#FFFFFF" opacity="0.14"/>
    <rect x="142" y="148" width="124" height="8" rx="3" fill="#FFFFFF" opacity="0.14"/>
    <rect x="276" y="78" width="42" height="42" rx="10" fill="#5BAD7A" opacity="0.28"/>
    <text x="297" y="104" textAnchor="middle" fill="#5BAD7A" fontFamily="sans-serif" fontSize="12" fontWeight="bold">Nex</text>

    <rect x="122" y="224" width="220" height="42" rx="9" fill="#252538" stroke="#5BAD7A" strokeWidth="1" opacity="0.95"/>
    <text x="232" y="250" textAnchor="middle" fill="#5BAD7A" fontFamily="sans-serif" fontSize="14" fontWeight="bold">生成评审材料</text>
  </g>
);

const ReviewMaterials = (
  <g transform="translate(708, 330)">
    {[
      { title: "问题", color: "#6EC8E6", rotate: -6, x: 0, y: 18 },
      { title: "方案", color: "#5BAD7A", rotate: 4, x: 54, y: 0 },
      { title: "决策", color: "#E8B84A", rotate: -2, x: 108, y: 20 },
    ].map(card => (
      <g key={card.title} transform={`translate(${card.x}, ${card.y}) rotate(${card.rotate})`}>
        <rect x="0" y="0" width="118" height="76" rx="10" fill="#1E1E2E" stroke={card.color} strokeWidth="1.5"/>
        <rect x="14" y="16" width="52" height="9" rx="3" fill={card.color} opacity="0.65"/>
        <rect x="14" y="38" width="82" height="6" rx="3" fill="#FFFFFF" opacity="0.16"/>
        <rect x="14" y="52" width="68" height="6" rx="3" fill="#FFFFFF" opacity="0.12"/>
        <text x="59" y="68" textAnchor="middle" fill={card.color} fontFamily="sans-serif" fontSize="12" fontWeight="bold">{card.title}</text>
      </g>
    ))}
  </g>
);

const MeetingScreen = (
  <g transform="translate(790, 118)">
    <rect x="0" y="0" width="330" height="210" rx="14" fill="#1E1E2E" stroke="#E8B84A" strokeWidth="2"/>
    <rect x="18" y="18" width="294" height="158" rx="10" fill="#252538" stroke="#FFFFFF" strokeOpacity="0.1" strokeWidth="1.5"/>
    <rect x="42" y="42" width="112" height="12" rx="4" fill="#E8B84A" opacity="0.72"/>
    <text x="98" y="78" textAnchor="middle" fill="#E8B84A" fontFamily="sans-serif" fontSize="18" fontWeight="bold">项目评审</text>
    <rect x="42" y="102" width="184" height="8" rx="3" fill="#FFFFFF" opacity="0.18"/>
    <rect x="42" y="126" width="220" height="8" rx="3" fill="#FFFFFF" opacity="0.14"/>
    <rect x="42" y="150" width="154" height="8" rx="3" fill="#FFFFFF" opacity="0.14"/>
    <rect x="238" y="54" width="48" height="76" rx="8" fill="#6EC8E6" opacity="0.18" stroke="#90D8F0" strokeOpacity="0.3" strokeWidth="1"/>
    <path d="M250,112 L262,82 L274,112 Z" fill="#6EC8E6" opacity="0.55"/>
    <rect x="136" y="210" width="58" height="12" rx="3" fill="#555570" opacity="0.55"/>
    <rect x="102" y="224" width="126" height="8" rx="4" fill="#555570" opacity="0.35"/>
    <text x="165" y="258" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="13">会议屏 / 投影</text>
    <path d="M50,210 L0,330 L330,330 L280,210 Z" fill="#E8B84A" opacity="0.06"/>
  </g>
);

const MeetingRoom = (
  <g transform="translate(818, 420)">
    <path d="M0,54 Q140,0 280,54 L252,118 L28,118 Z" fill="#1E1E2E" stroke="#555570" strokeWidth="1.5"/>
    {[42, 102, 162, 222].map((x, i) => (
      <g key={x} transform={`translate(${x}, ${i % 2 === 0 ? 0 : 14})`}>
        <circle cx="0" cy="0" r="16" fill="#252538" stroke={i === 1 ? "#5BAD7A" : "#6EC8E6"} strokeWidth="1.5"/>
        <path d="M-18,28 Q0,12 18,28 L22,62 L-22,62 Z" fill="#252538" stroke={i === 1 ? "#5BAD7A" : "#6EC8E6"} strokeWidth="1"/>
      </g>
    ))}
    <text x="140" y="154" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="15" fontWeight="bold" opacity="0.78">项目汇报会议</text>
  </g>
);

const DeliveryArrow = (
  <g>
    <path d="M690,276 C744,248 744,218 790,210" fill="none" stroke="#5BAD7A" strokeWidth="3" strokeDasharray="9 6" opacity="0.75"/>
    <polygon points="790,210 775,205 779,220" fill="#5BAD7A" opacity="0.75"/>
    <text x="736" y="245" textAnchor="middle" fill="#5BAD7A" fontFamily="sans-serif" fontSize="13" fontWeight="bold">带到评审会</text>
  </g>
);

const Labels = (
  <g>
    <text x="600" y="60" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="26" fontWeight="bold">PM 用 Nex 做评审材料</text>
    <text x="600" y="88" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="14">From Nex editor to project review meeting</text>
    <g transform="translate(430, 490)">
      <rect x="0" y="0" width="260" height="46" rx="14" fill="#252538" stroke="#E8B84A" strokeWidth="1.5"/>
      <text x="130" y="29" textAnchor="middle" fill="#E8B84A" fontFamily="sans-serif" fontSize="16" fontWeight="bold">材料在会中被展示和讨论</text>
    </g>
  </g>
);

export const nexEchoSceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: Defs,
  background: Background,
  fragments: [
    { id: "person", content: PMFigure, enterFrom: { x: -400, y: 80 }, enterDelay: 0, floatAmp: { x: 8, y: 12 }, floatPeriod: { x: 6, y: 7 }, exitTo: { x: -500, y: 0 }, exitScale: 0.9 },
    { id: "editor", content: NexEditor, enterFrom: { x: 0, y: 350 }, enterDelay: 150, floatAmp: { x: 12, y: 14 }, floatPeriod: { x: 5.5, y: 6.5 }, exitTo: { x: 0, y: 380 }, exitSpin: -3 },
    { id: "materials", content: ReviewMaterials, enterFrom: { x: 120, y: 260 }, enterDelay: 260, floatAmp: { x: 14, y: 16 }, floatPeriod: { x: 4.5, y: 5.5 }, exitTo: { x: 180, y: 260 }, exitSpin: 5 },
    { id: "screen", content: MeetingScreen, enterFrom: { x: 400, y: -200 }, enterDelay: 300, floatAmp: { x: 12, y: 14 }, floatPeriod: { x: 5.5, y: 6.5 }, exitTo: { x: 500, y: -300 }, exitSpin: -6 },
    { id: "room", content: MeetingRoom, enterFrom: { x: 300, y: 200 }, enterDelay: 350, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 6, y: 7 }, exitTo: { x: 300, y: 250 } },
    { id: "deliveryArrow", content: DeliveryArrow, enterFrom: { x: 200, y: -100 }, enterDelay: 420, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 5.5, y: 6.5 }, exitTo: { x: 200, y: -200 } },
    { id: "labels", content: Labels, enterFrom: { x: 0, y: -300 }, enterDelay: 100, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 8, y: 9 }, exitTo: { x: 0, y: -400 } },
  ],
};
