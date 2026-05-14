import type { SvgSceneDef } from "../SvgScene";

const Background = (
  <g>
    <rect width="1200" height="675" fill="#2B2B3D"/>
    <rect width="1200" height="675" fill="url(#smartCageBgGlow)"/>
  </g>
);

const Defs = (
  <defs>
    <radialGradient id="smartCageBgGlow" cx="50%" cy="40%" r="60%">
      <stop offset="0%" stopColor="#6EC8E6" stopOpacity="0.12"/>
      <stop offset="100%" stopColor="#6EC8E6" stopOpacity="0"/>
    </radialGradient>
  </defs>
);


const Divider = (
  <g>
    <line x1="600" y1="80" x2="600" y2="600" stroke="#555570" strokeWidth="1.5" strokeDasharray="10 6" opacity="0.35"/>
    <text x="600" y="640" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="14" opacity="0.4">VS</text>
  </g>
);

const CagedPerson = (
  <g transform="translate(140, 160)">
    {/* Person */}
    <circle cx="120" cy="120" r="24" fill="#E85650" opacity="0.7"/>
    <rect x="102" y="148" width="36" height="55" rx="10" fill="#E85650" opacity="0.6"/>
    <circle cx="110" cy="116" r="3" fill="#2B2B3D"/>
    <circle cx="130" cy="116" r="3" fill="#2B2B3D"/>
    <path d="M110,132 Q120,126 130,132" fill="none" stroke="#2B2B3D" strokeWidth="2" strokeLinecap="round"/>
    {/* Cage bars */}
    {[60, 90, 120, 150, 180].map((x, i) => (
      <line key={i} x1={x} y1="60" x2={x} y2="280" stroke="#555570" strokeWidth="4" strokeLinecap="round" opacity="0.6"/>
    ))}
    <line x1="50" y1="60" x2="190" y2="60" stroke="#555570" strokeWidth="4" opacity="0.6"/>
    <line x1="50" y1="280" x2="190" y2="280" stroke="#555570" strokeWidth="4" opacity="0.6"/>
    <line x1="50" y1="170" x2="190" y2="170" stroke="#555570" strokeWidth="3" opacity="0.3"/>
    {/* AI icons on bars */}
    <text x="75" y="48" textAnchor="middle" fill="#6EC8E6" fontFamily="sans-serif" fontSize="11" fontWeight="bold" opacity="0.6">AI</text>
    <text x="135" y="48" textAnchor="middle" fill="#6EC8E6" fontFamily="sans-serif" fontSize="11" fontWeight="bold" opacity="0.6">AI</text>
    <text x="165" y="48" textAnchor="middle" fill="#6EC8E6" fontFamily="sans-serif" fontSize="11" fontWeight="bold" opacity="0.6">AI</text>
    {/* Stress indicators */}
    <path d="M80,90 L90,100 L80,100" fill="none" stroke="#E85650" strokeWidth="2" opacity="0.5"/>
    <path d="M160,90 L150,100 L160,100" fill="none" stroke="#E85650" strokeWidth="2" opacity="0.5"/>
  </g>
);

const CageLabel = (
  <g transform="translate(160, 490)">
    <rect x="0" y="0" width="200" height="44" rx="10" fill="#252538" stroke="#E85650" strokeWidth="2"/>
    <text x="100" y="30" textAnchor="middle" fill="#E85650" fontFamily="sans-serif" fontSize="20" fontWeight="bold">AI 牢笼</text>
  </g>
);

const RelaxedPerson = (
  <g transform="translate(740, 180)">
    {/* Person leaning back */}
    <circle cx="100" cy="100" r="24" fill="#5BAD7A" opacity="0.7"/>
    <rect x="82" y="128" width="36" height="55" rx="10" fill="#5BAD7A" opacity="0.6"/>
    <circle cx="90" cy="96" r="3" fill="#2B2B3D"/>
    <circle cx="110" cy="96" r="3" fill="#2B2B3D"/>
    <path d="M92,112 Q100,120 108,112" fill="none" stroke="#2B2B3D" strokeWidth="2" strokeLinecap="round"/>
    {/* Arm holding tea cup */}
    <path d="M118,148 L150,165" fill="none" stroke="#5BAD7A" strokeWidth="4" strokeLinecap="round" opacity="0.6"/>
    {/* Tea cup */}
    <rect x="145" y="155" width="35" height="28" rx="4" fill="#E8B84A" opacity="0.7"/>
    <path d="M180,162 Q195,170 180,178" fill="none" stroke="#E8B84A" strokeWidth="2" opacity="0.5"/>
    <path d="M155,150 Q158,140 162,150" fill="none" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.3"/>
    <path d="M165,148 Q168,136 172,148" fill="none" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.25"/>
    {/* Chair suggestion */}
    <path d="M70,190 Q60,230 80,240 L120,240 Q140,230 130,190" fill="none" stroke="#555570" strokeWidth="2" opacity="0.3"/>
  </g>
);

const WorkingAI = (
  <g transform="translate(780, 380)">
    <rect x="0" y="0" width="140" height="80" rx="12" fill="#1E1E2E" stroke="#6EC8E6" strokeWidth="2"/>
    <circle cx="40" cy="30" r="10" fill="#6EC8E6" opacity="0.5"/>
    <circle cx="70" cy="30" r="10" fill="#6EC8E6" opacity="0.5"/>
    <path d="M36,48 Q55,58 74,48" fill="none" stroke="#6EC8E6" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
    <text x="70" y="72" textAnchor="middle" fill="#6EC8E6" fontFamily="sans-serif" fontSize="12" fontWeight="bold">AI Working</text>
    {/* Activity indicator */}
    <circle cx="125" cy="15" r="5" fill="#5BAD7A" opacity="0.8"/>
    <rect x="0" y="85" width="140" height="5" rx="2.5" fill="#5BAD7A" opacity="0.3"/>
  </g>
);

const RelaxLabel = (
  <g transform="translate(760, 510)">
    <rect x="0" y="0" width="200" height="44" rx="10" fill="#252538" stroke="#5BAD7A" strokeWidth="2"/>
    <text x="100" y="30" textAnchor="middle" fill="#5BAD7A" fontFamily="sans-serif" fontSize="20" fontWeight="bold">轻松</text>
  </g>
);

const ContrastTitle = (
  <g transform="translate(600, 40)">
    <text x="0" y="0" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="24" fontWeight="bold" opacity="0.8">聪明人 vs 轻松人</text>
  </g>
);

export const smartCageSceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: Defs,
  background: Background,
  fragments: [
    { id: "divider", content: Divider, enterFrom: { x: 0, y: -400 }, enterDelay: 0, floatAmp: { x: 8, y: 8 }, floatPeriod: { x: 9, y: 8 } },
    { id: "cagedPerson", content: CagedPerson, enterFrom: { x: -500, y: 0 }, enterDelay: 100, floatAmp: { x: 10, y: 14 }, floatPeriod: { x: 5.5, y: 6.5 }, exitTo: { x: -600, y: 0 }, exitSpin: -5 },
    { id: "cageLabel", content: CageLabel, enterFrom: { x: -300, y: 200 }, enterDelay: 250, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 6, y: 7 }, exitTo: { x: -400, y: 200 } },
    { id: "relaxedPerson", content: RelaxedPerson, enterFrom: { x: 500, y: 0 }, enterDelay: 150, floatAmp: { x: 10, y: 14 }, floatPeriod: { x: 5, y: 6 }, exitTo: { x: 600, y: 0 } },
    { id: "workingAI", content: WorkingAI, enterFrom: { x: 300, y: 300 }, enterDelay: 300, floatAmp: { x: 12, y: 16 }, floatPeriod: { x: 4.5, y: 5.5 }, exitTo: { x: 400, y: 300 } },
    { id: "relaxLabel", content: RelaxLabel, enterFrom: { x: 300, y: 200 }, enterDelay: 350, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 6, y: 7 }, exitTo: { x: 400, y: 200 } },
    { id: "title", content: ContrastTitle, enterFrom: { x: 0, y: -300 }, enterDelay: 450, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 7, y: 9 }, exitTo: { x: 0, y: -400 } },
  ],
};
