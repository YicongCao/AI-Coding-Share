import type { SvgSceneDef } from "../SvgScene";

const Background = <rect width="1200" height="675" fill="#2B2B3D"/>;

const roleCards = [
  { x: 128, y: 250, width: 220, label: "研发", sub: "把想法落成代码", color: "#6EC8E6", path: "M348,289 C420,282 476,305 522,342" },
  { x: 852, y: 250, width: 220, label: "产品", sub: "定义问题和价值", color: "#5BAD7A", path: "M852,289 C780,282 724,305 678,342" },
  { x: 490, y: 512, width: 220, label: "PM", sub: "拆解节奏和协作", color: "#E8734A", path: "M600,512 C600,486 600,458 600,430" },
];

const TitleLabel = (
  <g>
    <text x="600" y="56" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="30" fontWeight="900">一人多角色</text>
    <text x="600" y="84" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="15">研发 / 产品 / PM 叠加到同一个人</text>
  </g>
);

const CenterAura = (
  <g opacity="0.75">
    <circle cx="600" cy="355" r="178" fill="#E8B84A" opacity="0.05"/>
    <circle cx="600" cy="355" r="132" fill="none" stroke="#555570" strokeWidth="1.5" strokeDasharray="7 8" opacity="0.55"/>
    <circle cx="600" cy="355" r="96" fill="none" stroke="#E8B84A" strokeWidth="1" strokeDasharray="4 6" opacity="0.28"/>
  </g>
);

const PersonFigure = (
  <g transform="translate(600, 372)">
    <ellipse cx="0" cy="136" rx="136" ry="28" fill="#1E1E2E" opacity="0.55"/>
    <path d="M-86,4 Q0,-48 86,4 L104,132 Q0,160 -104,132 Z" fill="#252538" stroke="#E8B84A" strokeWidth="2"/>
    <path d="M-72,28 Q0,70 72,28" fill="none" stroke="#E8B84A" strokeWidth="3" opacity="0.5"/>
    <path d="M-82,48 L-132,86" fill="none" stroke="#E8B84A" strokeWidth="10" strokeLinecap="round" opacity="0.72"/>
    <path d="M82,48 L132,86" fill="none" stroke="#E8B84A" strokeWidth="10" strokeLinecap="round" opacity="0.72"/>
    <rect x="-54" y="-34" width="108" height="42" rx="18" fill="#D9A83F" opacity="0.65"/>
    <circle cx="0" cy="-116" r="54" fill="#E8B84A"/>
    <circle cx="-18" cy="-126" r="5" fill="#2B2B3D"/>
    <circle cx="18" cy="-126" r="5" fill="#2B2B3D"/>
    <path d="M-20,-102 Q0,-88 20,-102" fill="none" stroke="#2B2B3D" strokeWidth="3" strokeLinecap="round"/>
    <rect x="-70" y="54" width="140" height="48" rx="12" fill="#1E1E2E" stroke="#555570" strokeWidth="1.5"/>
    <text x="0" y="84" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="16" fontWeight="bold">AI Coding Owner</text>
  </g>
);

const RoleHats = (
  <g transform="translate(600, 116)">
    <g transform="rotate(-7)">
      <rect x="-80" y="0" width="160" height="44" rx="13" fill="#E8734A" opacity="0.94"/>
      <text x="0" y="28" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="19" fontWeight="900">PM</text>
    </g>
    <g transform="translate(0, 42) rotate(4)">
      <rect x="-94" y="0" width="188" height="46" rx="14" fill="#5BAD7A" opacity="0.95"/>
      <text x="0" y="29" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="19" fontWeight="900">产品 Product</text>
    </g>
    <g transform="translate(0, 86) rotate(-2)">
      <rect x="-110" y="0" width="220" height="50" rx="15" fill="#6EC8E6" opacity="0.96"/>
      <text x="0" y="31" textAnchor="middle" fill="#1E1E2E" fontFamily="sans-serif" fontSize="20" fontWeight="900">研发 Developer</text>
    </g>
    <rect x="-122" y="132" width="244" height="10" rx="5" fill="#1E1E2E" opacity="0.18"/>
  </g>
);

const RoleSignals = (
  <g>
    {roleCards.map((role) => (
      <g key={role.label}>
        <path d={role.path} fill="none" stroke={role.color} strokeWidth="2.5" strokeDasharray="8 7" opacity="0.52"/>
        <rect x={role.x} y={role.y} width={role.width} height="78" rx="18" fill="#1E1E2E" stroke={role.color} strokeWidth="2" opacity="0.95"/>
        <circle cx={role.x + 34} cy={role.y + 39} r="14" fill={role.color} opacity="0.18"/>
        <circle cx={role.x + 34} cy={role.y + 39} r="5" fill={role.color}/>
        <text x={role.x + role.width / 2 + 12} y={role.y + 32} textAnchor="middle" fill={role.color} fontFamily="sans-serif" fontSize="20" fontWeight="900">{role.label}</text>
        <text x={role.x + role.width / 2 + 12} y={role.y + 56} textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="13" opacity="0.62">{role.sub}</text>
      </g>
    ))}
  </g>
);

const SubtitleNote = (
  <g transform="translate(600, 628)">
    <rect x="-190" y="-22" width="380" height="42" rx="21" fill="#252538" opacity="0.9"/>
    <text x="0" y="5" textAnchor="middle" fill="#E8B84A" fontFamily="sans-serif" fontSize="16" fontWeight="bold">同一个人，同时戴三顶帽子</text>
  </g>
);

export const roleStackSceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: <defs/>,
  background: Background,
  fragments: [
    { id: "title", content: TitleLabel, enterFrom: { x: 0, y: -120 }, enterDelay: 0, floatAmp: { x: 6, y: 7 }, floatPeriod: { x: 8, y: 9 }, exitTo: { x: 0, y: -220 } },
    { id: "aura", content: CenterAura, enterFrom: { x: 0, y: 0 }, enterDelay: 80, floatAmp: { x: 8, y: 9 }, floatPeriod: { x: 8, y: 9 }, exitTo: { x: 0, y: 260 } },
    { id: "roleSignals", content: RoleSignals, enterFrom: { x: 0, y: 220 }, enterDelay: 160, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 6, y: 7 }, exitTo: { x: 0, y: 320 } },
    { id: "person", content: PersonFigure, enterFrom: { x: 0, y: 360 }, enterDelay: 220, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 6, y: 7 }, exitTo: { x: 0, y: -500 } },
    { id: "roleHats", content: RoleHats, enterFrom: { x: 0, y: -260 }, enterDelay: 320, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 6, y: 7 }, exitTo: { x: 0, y: -440 } },
    { id: "subtitle", content: SubtitleNote, enterFrom: { x: 0, y: 160 }, enterDelay: 460, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 7, y: 9 }, exitTo: { x: 0, y: 260 } },
  ],
};
