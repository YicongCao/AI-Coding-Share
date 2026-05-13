import type { SvgSceneDef } from "../SvgScene";

const Background = <rect width="1200" height="675" fill="#2B2B3D"/>;

const CodeBox1 = (
  <g transform="translate(60, 220)">
    <rect x="0" y="0" width="140" height="100" rx="10" fill="#1E1E2E" stroke="#6EC8E6" strokeWidth="1.5"/>
    <text x="70" y="40" textAnchor="middle" fill="#6EC8E6" fontFamily="sans-serif" fontSize="13" fontWeight="bold">Fix Bug</text>
    <rect x="20" y="55" width="100" height="4" rx="2" fill="#555570" opacity="0.4"/>
    <rect x="20" y="66" width="70" height="4" rx="2" fill="#555570" opacity="0.3"/>
    <rect x="20" y="77" width="85" height="4" rx="2" fill="#555570" opacity="0.35"/>
    <text x="70" y="125" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="12">修复代码</text>
  </g>
);

const Arrow1 = (
  <g>
    <line x1="200" y1="270" x2="280" y2="270" stroke="#555570" strokeWidth="2" strokeDasharray="6 4" opacity="0.5"/>
    <polygon points="280,270 270,264 270,276" fill="#555570" opacity="0.5"/>
  </g>
);

const Person1 = (
  <g transform="translate(290, 210)">
    <circle cx="55" cy="20" r="18" fill="#E85650" opacity="0.8"/>
    <rect x="35" y="42" width="40" height="55" rx="10" fill="#E85650" opacity="0.7"/>
    <text x="55" y="120" textAnchor="middle" fill="#E85650" fontFamily="sans-serif" fontSize="13" fontWeight="bold">验证</text>
    <circle cx="55" cy="20" r="26" fill="none" stroke="#E85650" strokeWidth="2" opacity="0.4" strokeDasharray="4 3"/>
  </g>
);

const Arrow2 = (
  <g>
    <line x1="400" y1="270" x2="470" y2="270" stroke="#555570" strokeWidth="2" strokeDasharray="6 4" opacity="0.5"/>
    <polygon points="470,270 460,264 460,276" fill="#555570" opacity="0.5"/>
  </g>
);

const XMark = (
  <g transform="translate(480, 240)">
    <circle cx="30" cy="30" r="28" fill="#252538" stroke="#E85650" strokeWidth="2.5"/>
    <line x1="16" y1="16" x2="44" y2="44" stroke="#E85650" strokeWidth="4" strokeLinecap="round"/>
    <line x1="44" y1="16" x2="16" y2="44" stroke="#E85650" strokeWidth="4" strokeLinecap="round"/>
    <text x="30" y="80" textAnchor="middle" fill="#E85650" fontFamily="sans-serif" fontSize="12">未修复</text>
  </g>
);

const Arrow3 = (
  <g>
    <line x1="540" y1="270" x2="620" y2="270" stroke="#555570" strokeWidth="2" strokeDasharray="6 4" opacity="0.5"/>
    <polygon points="620,270 610,264 610,276" fill="#555570" opacity="0.5"/>
  </g>
);

const CodeBox2 = (
  <g transform="translate(630, 220)">
    <rect x="0" y="0" width="140" height="100" rx="10" fill="#1E1E2E" stroke="#6EC8E6" strokeWidth="1.5"/>
    <text x="70" y="40" textAnchor="middle" fill="#6EC8E6" fontFamily="sans-serif" fontSize="13" fontWeight="bold">Fix Again</text>
    <rect x="20" y="55" width="100" height="4" rx="2" fill="#555570" opacity="0.4"/>
    <rect x="20" y="66" width="80" height="4" rx="2" fill="#555570" opacity="0.3"/>
    <text x="70" y="125" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="12">再次修复</text>
  </g>
);

const Arrow4 = (
  <g>
    <line x1="770" y1="270" x2="850" y2="270" stroke="#555570" strokeWidth="2" strokeDasharray="6 4" opacity="0.5"/>
    <polygon points="850,270 840,264 840,276" fill="#555570" opacity="0.5"/>
  </g>
);

const Person2 = (
  <g transform="translate(860, 210)">
    <circle cx="55" cy="20" r="18" fill="#E85650" opacity="0.8"/>
    <rect x="35" y="42" width="40" height="55" rx="10" fill="#E85650" opacity="0.7"/>
    <text x="55" y="120" textAnchor="middle" fill="#E85650" fontFamily="sans-serif" fontSize="13" fontWeight="bold">验证</text>
    <circle cx="55" cy="20" r="26" fill="none" stroke="#E85650" strokeWidth="2" opacity="0.4" strokeDasharray="4 3"/>
  </g>
);

const BottleneckLabel = (
  <g transform="translate(340, 440)">
    <rect x="0" y="0" width="520" height="50" rx="12" fill="#252538" stroke="#E85650" strokeWidth="2"/>
    <text x="260" y="33" textAnchor="middle" fill="#E85650" fontFamily="sans-serif" fontSize="22" fontWeight="bold">人工验证瓶颈</text>
  </g>
);

const BottleneckArrows = (
  <g opacity="0.4">
    <line x1="345" y1="340" x2="450" y2="440" stroke="#E85650" strokeWidth="1.5" strokeDasharray="4 3"/>
    <line x1="915" y1="340" x2="750" y2="440" stroke="#E85650" strokeWidth="1.5" strokeDasharray="4 3"/>
  </g>
);

const InfinityHint = (
  <g transform="translate(1020, 240)">
    <text x="0" y="30" fill="#555570" fontFamily="sans-serif" fontSize="40" opacity="0.3">∞</text>
    <text x="20" y="60" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="11" opacity="0.4">循环...</text>
  </g>
);

export const closedLoopManualSceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: <defs/>,
  background: Background,
  fragments: [
    { id: "code1", content: CodeBox1, enterFrom: { x: -300, y: 0 }, enterDelay: 0, floatAmp: { x: 8, y: 12 }, floatPeriod: { x: 6, y: 7 }, exitTo: { x: -400, y: -100 } },
    { id: "person1", content: Person1, enterFrom: { x: 0, y: -300 }, enterDelay: 100, floatAmp: { x: 10, y: 14 }, floatPeriod: { x: 5, y: 6 }, exitTo: { x: 0, y: -400 } },
    { id: "xmark", content: XMark, enterFrom: { x: 0, y: 300 }, enterDelay: 200, floatAmp: { x: 14, y: 18 }, floatPeriod: { x: 4, y: 5 }, exitTo: { x: 0, y: 400 }, exitSpin: 15 },
    { id: "code2", content: CodeBox2, enterFrom: { x: 0, y: 300 }, enterDelay: 250, floatAmp: { x: 8, y: 12 }, floatPeriod: { x: 6, y: 7 }, exitTo: { x: 0, y: -300 } },
    { id: "person2", content: Person2, enterFrom: { x: 300, y: 0 }, enterDelay: 300, floatAmp: { x: 10, y: 14 }, floatPeriod: { x: 5, y: 6 }, exitTo: { x: 400, y: -100 } },
    { id: "arrows", content: <>{Arrow1}{Arrow2}{Arrow3}{Arrow4}</>, enterFrom: { x: 0, y: 200 }, enterDelay: 150, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 7, y: 8 } },
    { id: "bottleneck", content: <>{BottleneckLabel}{BottleneckArrows}</>, enterFrom: { x: 0, y: 300 }, enterDelay: 450, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 5.5, y: 6.5 }, exitTo: { x: 0, y: 400 } },
    { id: "infinity", content: InfinityHint, enterFrom: { x: 200, y: 0 }, enterDelay: 550, floatAmp: { x: 16, y: 20 }, floatPeriod: { x: 3.5, y: 4.5 }, exitTo: { x: 300, y: 0 } },
  ],
};
