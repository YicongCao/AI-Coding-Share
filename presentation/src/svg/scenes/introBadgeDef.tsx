import type { SvgSceneDef } from "../SvgScene";

const SharedDefs = (
  <defs>
    <linearGradient id="introBoardGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor="#18382E"/>
      <stop offset="100%" stopColor="#102821"/>
    </linearGradient>
    <linearGradient id="introFloorGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#252538"/>
      <stop offset="100%" stopColor="#1E1E2E"/>
    </linearGradient>
    <filter id="introShadow" x="-8%" y="-8%" width="116%" height="116%">
      <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#000" floodOpacity="0.28"/>
    </filter>
    <radialGradient id="introBadgeBgGlow" cx="50%" cy="40%" r="60%">
      <stop offset="0%" stopColor="#6EC8E6" stopOpacity="0.12"/>
      <stop offset="100%" stopColor="#6EC8E6" stopOpacity="0"/>
    </radialGradient>
  </defs>
);

const Background = (
  <g>
    <rect width="1200" height="675" fill="#2B2B3D"/>
    <rect width="1200" height="675" fill="url(#introBadgeBgGlow)"/>
    <rect y="462" width="1200" height="213" fill="url(#introFloorGrad)"/>
    <g stroke="#3A3A50" strokeWidth="1" opacity="0.45">
      <line x1="0" y1="520" x2="1200" y2="520"/>
      <line x1="0" y1="590" x2="1200" y2="590"/>
      <line x1="180" y1="462" x2="100" y2="675"/>
      <line x1="420" y1="462" x2="390" y2="675"/>
      <line x1="780" y1="462" x2="810" y2="675"/>
      <line x1="1020" y1="462" x2="1100" y2="675"/>
    </g>
  </g>
);

const Blackboard = (
  <g filter="url(#introShadow)">
    <rect x="220" y="72" width="760" height="330" rx="18" fill="#121620" stroke="#3A3A50" strokeWidth="2"/>
    <rect x="242" y="96" width="716" height="282" rx="10" fill="url(#introBoardGrad)" stroke="#5BAD7A" strokeWidth="1.5" opacity="0.95"/>
    <text x="600" y="150" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="34" fontWeight="bold">Welcome to AI Coding</text>
    <text x="600" y="184" textAnchor="middle" fill="#6EC8E6" fontFamily="sans-serif" fontSize="16" opacity="0.88">欢迎来到 AI 编程分享</text>

    <g transform="translate(292, 226)">
      <rect x="0" y="0" width="260" height="86" rx="12" fill="#1E1E2E" opacity="0.72" stroke="#5BAD7A" strokeWidth="1"/>
      <text x="24" y="30" fill="#5BAD7A" fontFamily="sans-serif" fontSize="18" fontWeight="bold">打开群里 URL</text>
      <text x="24" y="58" fill="#FFFFFF" fontFamily="monospace" fontSize="15" opacity="0.76">Open the shared link</text>
      <rect x="24" y="68" width="172" height="5" rx="2.5" fill="#6EC8E6" opacity="0.55"/>
    </g>

    <g transform="translate(602, 226)">
      <rect x="0" y="0" width="306" height="86" rx="12" fill="#1E1E2E" opacity="0.72" stroke="#E8B84A" strokeWidth="1"/>
      <text x="26" y="30" fill="#E8B84A" fontFamily="sans-serif" fontSize="18" fontWeight="bold">30s countdown</text>
      <text x="26" y="58" fill="#FFFFFF" fontFamily="sans-serif" fontSize="15" opacity="0.76">30 秒内完成准备</text>
      <g transform="translate(234, 18)">
        <circle cx="24" cy="24" r="22" fill="none" stroke="#E8B84A" strokeWidth="4" opacity="0.3"/>
        <path d="M24,2 A22,22 0 1 1 8,39" fill="none" stroke="#E8B84A" strokeWidth="4" strokeLinecap="round"/>
        <text x="24" y="30" textAnchor="middle" fill="#E8B84A" fontFamily="sans-serif" fontSize="16" fontWeight="bold">30</text>
      </g>
    </g>

    <g transform="translate(306, 338)" fill="#FFFFFF" fontFamily="sans-serif" fontSize="13" opacity="0.72">
      <text x="0" y="0">1. Open URL / 打开链接</text>
      <text x="245" y="0">2. Join prompt / 准备提问</text>
      <text x="510" y="0">3. Keep Cursor open / 保持环境</text>
    </g>
  </g>
);

const PodiumAndTeacher = (
  <g filter="url(#introShadow)">
    <g transform="translate(520, 394)">
      <rect x="0" y="56" width="160" height="96" rx="12" fill="#252538" stroke="#555570" strokeWidth="1.5"/>
      <rect x="18" y="76" width="124" height="8" rx="4" fill="#555570" opacity="0.35"/>
      <rect x="18" y="96" width="90" height="6" rx="3" fill="#6EC8E6" opacity="0.45"/>
      <rect x="52" y="24" width="56" height="46" rx="18" fill="#3A3A50" stroke="#FFFFFF" strokeOpacity="0.1" strokeWidth="1.5"/>
      <circle cx="80" cy="8" r="24" fill="#F5C5A3"/>
      <path d="M56,2 Q66,-22 92,-14 Q106,-6 103,10 Q84,0 56,14 Z" fill="#555570"/>
      <path d="M37,76 Q14,58 8,34" fill="none" stroke="#F5C5A3" strokeWidth="8" strokeLinecap="round" opacity="0.85"/>
      <path d="M123,76 Q148,58 154,34" fill="none" stroke="#F5C5A3" strokeWidth="8" strokeLinecap="round" opacity="0.85"/>
      <text x="80" y="132" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="13" opacity="0.7">Speaker</text>
    </g>
  </g>
);

const StudentRows = (
  <g>
    {[
      { y: 548, scale: 1, opacity: 0.8 },
      { y: 604, scale: 0.88, opacity: 0.58 },
    ].map((row, rowIndex) => (
      <g key={rowIndex} transform={`translate(${rowIndex === 0 ? 150 : 226}, ${row.y}) scale(${row.scale})`} opacity={row.opacity}>
        {[0, 140, 280, 560, 700, 840].map((x, i) => (
          <g key={i} transform={`translate(${x}, 0)`}>
            <path d="M0,44 L96,44 L112,74 L-16,74 Z" fill="#1E1E2E" stroke="#3A3A50" strokeWidth="1.2"/>
            <circle cx="48" cy="0" r="18" fill="#555570"/>
            <rect x="26" y="22" width="44" height="36" rx="12" fill="#555570"/>
            <rect x="18" y="44" width="60" height="5" rx="2.5" fill={i % 2 === 0 ? "#4A7BCC" : "#5BAD7A"} opacity="0.5"/>
          </g>
        ))}
      </g>
    ))}
  </g>
);

const ClassroomDetails = (
  <g>
    <g transform="translate(88, 126)" opacity="0.7">
      <rect x="0" y="0" width="92" height="150" rx="14" fill="#1E1E2E" stroke="#3A3A50" strokeWidth="1.5"/>
      <rect x="14" y="22" width="64" height="88" rx="6" fill="#252538" stroke="#FFFFFF" strokeOpacity="0.1" strokeWidth="1.5"/>
      <rect x="24" y="42" width="44" height="6" rx="3" fill="#4A7BCC"/>
      <rect x="24" y="58" width="34" height="6" rx="3" fill="#5BAD7A" opacity="0.75"/>
      <circle cx="46" cy="126" r="7" fill="none" stroke="#555570" strokeWidth="1.5"/>
    </g>
    <g transform="translate(1018, 122)" opacity="0.68">
      <rect x="0" y="0" width="112" height="68" rx="12" fill="#1E1E2E" stroke="#3A3A50" strokeWidth="1.5"/>
      <text x="56" y="28" textAnchor="middle" fill="#E8B84A" fontFamily="sans-serif" fontSize="16" fontWeight="bold">READY?</text>
      <text x="56" y="50" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="11" opacity="0.55">30 秒后开始</text>
    </g>
    <g stroke="#5BAD7A" strokeWidth="2" strokeLinecap="round" opacity="0.45">
      <path d="M1024,250 Q1060,218 1096,250"/>
      <path d="M1038,268 Q1060,248 1082,268"/>
      <circle cx="1060" cy="284" r="4" fill="#5BAD7A" stroke="none"/>
    </g>
  </g>
);

export const introBadgeSceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: SharedDefs,
  background: Background,
  fragments: [
    { id: "blackboard", content: Blackboard, enterFrom: { x: 0, y: -420 }, enterDelay: 0, floatAmp: { x: 6, y: 8 }, floatPeriod: { x: 7.0, y: 8.5 }, exitTo: { x: 0, y: -520 }, exitScale: 0.96 },
    { id: "teacher", content: PodiumAndTeacher, enterFrom: { x: 0, y: 320 }, enterDelay: 120, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 5.5, y: 7.0 }, exitTo: { x: 0, y: 360 }, exitDelay: 80 },
    { id: "students", content: StudentRows, enterFrom: { x: 0, y: 360 }, enterDelay: 220, floatAmp: { x: 5, y: 7 }, floatPeriod: { x: 6.5, y: 8.0 }, exitTo: { x: 0, y: 420 } },
    { id: "details", content: ClassroomDetails, enterFrom: { x: 0, y: 0 }, enterDelay: 320, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 5.0, y: 6.2 }, exitTo: { x: 420, y: -260 }, exitSpin: 8 },
  ],
};
