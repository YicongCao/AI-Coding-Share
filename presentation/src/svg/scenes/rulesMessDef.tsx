import type { SvgSceneDef } from "../SvgScene";

const Background = (
  <g>
    <rect width="1200" height="675" fill="#2B2B3D"/>
    <rect width="1200" height="675" fill="url(#rulesMessBgGlow)"/>
  </g>
);

const Defs = (
  <defs>
    <radialGradient id="rulesMessBgGlow" cx="50%" cy="30%" r="60%">
      <stop offset="0%" stopColor="#E8734A" stopOpacity="0.12"/>
      <stop offset="100%" stopColor="#E8734A" stopOpacity="0"/>
    </radialGradient>
  </defs>
);


const DocIcon = (
  <g transform="translate(520, 180)">
    <rect x="0" y="0" width="160" height="200" rx="10" fill="#1E1E2E" stroke="#555570" strokeWidth="1.5"/>
    <rect x="20" y="30" width="80" height="6" rx="3" fill="#6EC8E6" opacity="0.6"/>
    <rect x="20" y="48" width="120" height="5" rx="2.5" fill="#555570" opacity="0.4"/>
    <rect x="20" y="62" width="100" height="5" rx="2.5" fill="#555570" opacity="0.35"/>
    <rect x="20" y="76" width="110" height="5" rx="2.5" fill="#555570" opacity="0.3"/>
    <rect x="20" y="96" width="70" height="6" rx="3" fill="#5BAD7A" opacity="0.5"/>
    <rect x="20" y="114" width="120" height="5" rx="2.5" fill="#555570" opacity="0.35"/>
    <rect x="20" y="128" width="90" height="5" rx="2.5" fill="#555570" opacity="0.3"/>
    <rect x="20" y="148" width="60" height="6" rx="3" fill="#E8734A" opacity="0.5"/>
    <rect x="20" y="166" width="110" height="5" rx="2.5" fill="#555570" opacity="0.3"/>
  </g>
);

const TangledLines = (
  <g stroke="#E85650" strokeWidth="2" fill="none" opacity="0.6">
    <path d="M520,280 Q400,200 320,260 Q240,320 280,400 Q320,460 400,420 Q460,380 440,300 Q420,220 340,240"/>
    <path d="M680,280 Q800,200 880,260 Q960,320 920,400 Q880,460 800,420 Q740,380 760,300 Q780,220 860,240"/>
    <path d="M600,180 Q560,100 480,120 Q400,140 440,220 Q480,280 560,260"/>
    <path d="M600,380 Q640,460 720,440 Q800,420 760,340 Q720,280 640,300"/>
  </g>
);

const RuleTags = (
  <g>
    {[
      { x: 260, y: 150, label: "rule-A", color: "#4A7BCC" },
      { x: 180, y: 320, label: "rule-B", color: "#5BAD7A" },
      { x: 340, y: 450, label: "rule-C", color: "#E8B84A" },
      { x: 850, y: 140, label: "skill-1", color: "#6EC8E6" },
      { x: 920, y: 340, label: "skill-2", color: "#E8734A" },
      { x: 780, y: 480, label: "MCP-X", color: "#4A7BCC" },
    ].map((t, i) => (
      <g key={i} transform={`translate(${t.x},${t.y}) rotate(${(i % 2 === 0 ? 1 : -1) * (8 + i * 3)})`}>
        <rect x="-36" y="-13" width="72" height="26" rx="6" fill="#252538" stroke={t.color} strokeWidth="1.2"/>
        <text x="0" y="4" textAnchor="middle" fill={t.color} fontFamily="sans-serif" fontSize="11" fontWeight="bold">{t.label}</text>
      </g>
    ))}
  </g>
);

const ConflictMarks = (
  <g>
    {[[380, 260], [720, 260], [500, 420], [700, 420]].map(([cx, cy], i) => (
      <g key={i} transform={`translate(${cx},${cy})`}>
        <line x1="-10" y1="-10" x2="10" y2="10" stroke="#E85650" strokeWidth="3" strokeLinecap="round"/>
        <line x1="10" y1="-10" x2="-10" y2="10" stroke="#E85650" strokeWidth="3" strokeLinecap="round"/>
      </g>
    ))}
  </g>
);

const TitleLabel = (
  <g>
    <rect x="520" y="560" width="160" height="40" rx="8" fill="#252538" stroke="#E85650" strokeWidth="1.2"/>
    <text x="600" y="586" textAnchor="middle" fill="#E85650" fontFamily="sans-serif" fontSize="18" fontWeight="bold">Rules 冲突</text>
  </g>
);

export const rulesMessSceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: Defs,
  background: Background,
  fragments: [
    { id: "docIcon", content: DocIcon, enterFrom: { x: 0, y: -400 }, enterDelay: 0, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 6, y: 7 }, exitTo: { x: 0, y: -500 } },
    { id: "tangledLines", content: TangledLines, enterFrom: { x: 0, y: 0 }, enterDelay: 150, floatAmp: { x: 14, y: 16 }, floatPeriod: { x: 5, y: 6 }, exitTo: { x: 0, y: 400 } },
    { id: "ruleTags", content: RuleTags, enterFrom: { x: 0, y: 300 }, enterDelay: 200, floatAmp: { x: 18, y: 20 }, floatPeriod: { x: 4, y: 5 }, exitTo: { x: 0, y: 500 }, exitSpin: 8 },
    { id: "conflictMarks", content: ConflictMarks, enterFrom: { x: 0, y: 0 }, enterDelay: 400, floatAmp: { x: 12, y: 14 }, floatPeriod: { x: 3.5, y: 4.5 }, exitTo: { x: 0, y: -300 } },
    { id: "titleLabel", content: TitleLabel, enterFrom: { x: 0, y: 200 }, enterDelay: 500, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 7, y: 8 }, exitTo: { x: 0, y: 300 } },
  ],
};
