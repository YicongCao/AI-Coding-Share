import type { SvgSceneDef } from "../SvgScene";

const Background = (
  <g>
    <rect width="1200" height="675" fill="#2B2B3D"/>
    <rect width="1200" height="675" fill="url(#userIssuesBgGlow)"/>
  </g>
);

const Defs = (
  <defs>
    <radialGradient id="userIssuesBgGlow" cx="50%" cy="30%" r="60%">
      <stop offset="0%" stopColor="#E8734A" stopOpacity="0.12"/>
      <stop offset="100%" stopColor="#E8734A" stopOpacity="0"/>
    </radialGradient>
  </defs>
);


const Title = (
  <g>
    <text x="600" y="55" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="28" fontWeight="bold">用户遭遇的各种 Bug</text>
    <text x="600" y="82" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="14">Common Issues Users Face</text>
  </g>
);

const BugFace = ({ cx, cy, label, color }: { cx: number; cy: number; label: string; color: string }) => (
  <g>
    <circle cx={cx} cy={cy} r="60" fill="#1E1E2E" stroke={color} strokeWidth="2"/>
    <circle cx={cx - 18} cy={cy - 12} r="6" fill={color}/>
    <circle cx={cx + 18} cy={cy - 12} r="6" fill={color}/>
    <path d={`M${cx - 14},${cy + 14} Q${cx},${cy + 4} ${cx + 14},${cy + 14}`} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
    <path d={`M${cx - 22},${cy - 22} L${cx - 12},${cy - 18}`} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d={`M${cx + 22},${cy - 22} L${cx + 12},${cy - 18}`} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <rect x={cx - 45} y={cy + 72} width="90" height="26" rx="6" fill="#252538" stroke="#FFFFFF" strokeOpacity="0.1" strokeWidth="1.5"/>
    <text x={cx} y={cy + 90} textAnchor="middle" fill={color} fontFamily="sans-serif" fontSize="13" fontWeight="bold">{label}</text>
  </g>
);

const BugRow1 = (
  <g>
    <BugFace cx={200} cy={220} label="文本重复" color="#E85650"/>
    <BugFace cx={600} cy={220} label="Tool 转圈" color="#E8B84A"/>
    <BugFace cx={1000} cy={220} label="语法错误" color="#E8734A"/>
  </g>
);

const BugRow2 = (
  <g>
    <BugFace cx={400} cy={440} label="上下文丢失" color="#6EC8E6"/>
    <BugFace cx={800} cy={440} label="幻觉输出" color="#4A7BCC"/>
  </g>
);

const BugIcons = (
  <g opacity="0.25">
    <path d="M80,580 L90,570 M90,580 L80,570" stroke="#E85650" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M1100,100 L1110,90 M1110,100 L1100,90" stroke="#E8734A" strokeWidth="2.5" strokeLinecap="round"/>
    <circle cx="1130" cy="560" r="4" fill="#E8B84A"/>
    <circle cx="70" cy="130" r="3" fill="#6EC8E6"/>
  </g>
);

export const userIssuesSceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: Defs,
  background: Background,
  fragments: [
    { id: "title", content: Title, enterFrom: { x: 0, y: -120 }, enterDelay: 0, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 7, y: 8 } },
    { id: "row1", content: BugRow1, enterFrom: { x: 0, y: -300 }, enterDelay: 100, floatAmp: { x: 10, y: 14 }, floatPeriod: { x: 5, y: 6 }, exitTo: { x: 0, y: -400 } },
    { id: "row2", content: BugRow2, enterFrom: { x: 0, y: 300 }, enterDelay: 250, floatAmp: { x: 12, y: 16 }, floatPeriod: { x: 5.5, y: 6.5 }, exitTo: { x: 0, y: 400 } },
    { id: "bugIcons", content: BugIcons, enterFrom: { x: 0, y: 0 }, enterDelay: 400, floatAmp: { x: 18, y: 20 }, floatPeriod: { x: 3.5, y: 4.5 } },
  ],
};
