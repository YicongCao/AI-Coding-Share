import type { SvgSceneDef } from "../SvgScene";

const Background = <rect width="1200" height="675" fill="#2B2B3D"/>;

const BadgeCard = (
  <g>
    <rect x="340" y="180" width="520" height="280" rx="18" fill="#1E1E2E" stroke="#3A3A50" strokeWidth="1.5"/>
    {/* Avatar circle */}
    <circle cx="460" cy="320" r="65" fill="#252538" stroke="#555570" strokeWidth="2"/>
    <circle cx="460" cy="300" r="22" fill="#6EC8E6" opacity="0.6"/>
    <path d="M425,350 Q460,380 495,350" fill="none" stroke="#6EC8E6" strokeWidth="2.5" opacity="0.5"/>
    {/* Name & title */}
    <text x="560" y="278" fill="#FFFFFF" fontFamily="sans-serif" fontSize="18" opacity="0.9">pixelcao</text>
    <text x="560" y="302" fill="#6EC8E6" fontFamily="sans-serif" fontSize="12" opacity="0.6">R&D 研发中心</text>
    <rect x="560" y="320" width="170" height="6" rx="3" fill="#555570" opacity="0.4"/>
    <rect x="560" y="340" width="130" height="6" rx="3" fill="#555570" opacity="0.3"/>
    {/* IgniteX tag */}
    <rect x="560" y="370" width="100" height="28" rx="6" fill="#E8734A" opacity="0.85"/>
    <text x="610" y="389" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="11" fontWeight="bold">IgniteX</text>
  </g>
);

const PhoneIcon = (
  <g transform="translate(100, 220)">
    <rect x="0" y="0" width="80" height="140" rx="14" fill="#1E1E2E" stroke="#555570" strokeWidth="1.5"/>
    <rect x="10" y="20" width="60" height="90" rx="4" fill="#252538"/>
    <circle cx="40" cy="125" r="8" fill="none" stroke="#555570" strokeWidth="1.5"/>
    <rect x="25" y="8" width="30" height="4" rx="2" fill="#555570" opacity="0.5"/>
    {/* Screen glow */}
    <rect x="18" y="40" width="44" height="5" rx="2.5" fill="#4A7BCC" opacity="0.6"/>
    <rect x="18" y="52" width="36" height="5" rx="2.5" fill="#5BAD7A" opacity="0.5"/>
    <rect x="18" y="64" width="44" height="5" rx="2.5" fill="#4A7BCC" opacity="0.4"/>
  </g>
);

const GlobeIcon = (
  <g transform="translate(1000, 240)">
    <circle cx="50" cy="50" r="45" fill="none" stroke="#4A7BCC" strokeWidth="2.5" opacity="0.7"/>
    <ellipse cx="50" cy="50" rx="22" ry="45" fill="none" stroke="#4A7BCC" strokeWidth="1.5" opacity="0.5"/>
    <line x1="5" y1="50" x2="95" y2="50" stroke="#4A7BCC" strokeWidth="1.5" opacity="0.4"/>
    <line x1="50" y1="5" x2="50" y2="95" stroke="#4A7BCC" strokeWidth="1.5" opacity="0.4"/>
    {/* Link chain */}
    <rect x="28" y="100" width="44" height="18" rx="9" fill="none" stroke="#6EC8E6" strokeWidth="2"/>
    <rect x="38" y="108" width="24" height="2" rx="1" fill="#6EC8E6" opacity="0.7"/>
  </g>
);

const WifiSignal = (
  <g transform="translate(980, 60)">
    <path d="M40,55 L50,70 L60,55" fill="none" stroke="#5BAD7A" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M30,42 Q50,20 70,42" fill="none" stroke="#5BAD7A" strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
    <path d="M20,30 Q50,0 80,30" fill="none" stroke="#5BAD7A" strokeWidth="2" strokeLinecap="round" opacity="0.45"/>
    <path d="M10,20 Q50,-16 90,20" fill="none" stroke="#5BAD7A" strokeWidth="1.5" strokeLinecap="round" opacity="0.25"/>
  </g>
);

const AudienceGroup = (
  <g transform="translate(300, 530)">
    {[0, 90, 180, 270, 360, 450, 540].map((x, i) => (
      <g key={i} transform={`translate(${x}, 0)`} opacity={0.35 + (i % 3) * 0.12}>
        <circle cx="20" cy="10" r="12" fill="#555570"/>
        <rect x="6" y="26" width="28" height="35" rx="8" fill="#555570"/>
      </g>
    ))}
  </g>
);

const SpeechBubble = (
  <g transform="translate(420, 80)">
    <rect x="0" y="0" width="200" height="60" rx="14" fill="#252538" stroke="#555570" strokeWidth="1.2"/>
    <polygon points="60,60 50,82 80,60" fill="#252538" stroke="#555570" strokeWidth="1.2"/>
    <rect x="24" y="18" width="110" height="8" rx="4" fill="#FFFFFF" opacity="0.5"/>
    <rect x="24" y="34" width="80" height="6" rx="3" fill="#FFFFFF" opacity="0.3"/>
  </g>
);

export const introBadgeSceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: <defs/>,
  background: Background,
  fragments: [
    { id: "badge", content: BadgeCard, enterFrom: { x: 0, y: -400 }, enterDelay: 0, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 5.5, y: 7.0 }, exitTo: { x: 0, y: -520 }, exitScale: 0.92 },
    { id: "phone", content: PhoneIcon, enterFrom: { x: -300, y: 0 }, enterDelay: 150, floatAmp: { x: 12, y: 15 }, floatPeriod: { x: 4.2, y: 5.8 }, exitTo: { x: -520, y: 140 }, exitSpin: -14 },
    { id: "globe", content: GlobeIcon, enterFrom: { x: 300, y: 0 }, enterDelay: 200, floatAmp: { x: 14, y: 12 }, floatPeriod: { x: 6.0, y: 4.5 }, exitTo: { x: 520, y: -120 }, exitSpin: 12 },
    { id: "wifi", content: WifiSignal, enterFrom: { x: 200, y: -300 }, enterDelay: 300, floatAmp: { x: 16, y: 18 }, floatPeriod: { x: 3.8, y: 5.0 }, exitTo: { x: 280, y: -420 }, exitScale: 1.25 },
    { id: "audience", content: AudienceGroup, enterFrom: { x: 0, y: 300 }, enterDelay: 350, floatAmp: { x: 6, y: 8 }, floatPeriod: { x: 6.5, y: 8.0 }, exitTo: { x: 0, y: 360 }, exitDelay: 80 },
    { id: "bubble", content: SpeechBubble, enterFrom: { x: 0, y: -350 }, enterDelay: 100, floatAmp: { x: 10, y: 14 }, floatPeriod: { x: 5.0, y: 6.2 }, exitTo: { x: 460, y: -300 }, exitSpin: 8 },
  ],
};
