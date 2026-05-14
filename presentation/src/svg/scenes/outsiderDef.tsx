import type { SvgSceneDef } from "../SvgScene";

const Background = (
  <g>
    <rect width="1200" height="675" fill="#2B2B3D"/>
    <rect width="1200" height="675" fill="url(#outsiderBgGlow)"/>
  </g>
);

const Defs = (
  <defs>
    <radialGradient id="outsiderBgGlow" cx="50%" cy="40%" r="60%">
      <stop offset="0%" stopColor="#6EC8E6" stopOpacity="0.12"/>
      <stop offset="100%" stopColor="#6EC8E6" stopOpacity="0"/>
    </radialGradient>
  </defs>
);


const CommunityCircle = (
  <g transform="translate(520, 310)">
    <ellipse cx="0" cy="0" rx="220" ry="200" fill="none" stroke="#5BAD7A" strokeWidth="2.5" strokeDasharray="12 6" opacity="0.5"/>
    <ellipse cx="0" cy="0" rx="220" ry="200" fill="#1E1E2E" opacity="0.3"/>
    <text x="0" y="-160" textAnchor="middle" fill="#5BAD7A" fontFamily="sans-serif" fontSize="14" opacity="0.7">Agent Dev Community</text>
    {/* silhouettes inside */}
    <g fill="#555570" opacity="0.6">
      <circle cx="-80" cy="-40" r="14"/><rect x="-92" y="-22" width="24" height="36" rx="8"/>
      <circle cx="0" cy="-60" r="14"/><rect x="-12" y="-42" width="24" height="36" rx="8"/>
      <circle cx="80" cy="-30" r="14"/><rect x="68" y="-12" width="24" height="36" rx="8"/>
      <circle cx="-50" cy="50" r="14"/><rect x="-62" y="68" width="24" height="36" rx="8"/>
      <circle cx="50" cy="60" r="14"/><rect x="38" y="78" width="24" height="36" rx="8"/>
      <circle cx="-130" cy="20" r="12"/><rect x="-140" y="36" width="20" height="30" rx="7"/>
      <circle cx="130" cy="30" r="12"/><rect x="120" y="46" width="20" height="30" rx="7"/>
    </g>
  </g>
);

const OutsiderPerson = (
  <g transform="translate(920, 320)">
    <circle cx="0" cy="-30" r="22" fill="#6EC8E6"/>
    <rect x="-18" y="-4" width="36" height="56" rx="12" fill="#4A7BCC"/>
    <circle cx="0" cy="-30" r="18" fill="#F5C5A3"/>
    <ellipse cx="-6" cy="-34" rx="2.5" ry="3" fill="#2B2B3D"/>
    <ellipse cx="6" cy="-34" rx="2.5" ry="3" fill="#2B2B3D"/>
    <path d="M-4,-26 Q0,-23 4,-26" fill="none" stroke="#2B2B3D" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M18,10 L55,0" stroke="#4A7BCC" strokeWidth="5" strokeLinecap="round"/>
    <path d="M-18,10 L-45,30" stroke="#4A7BCC" strokeWidth="5" strokeLinecap="round"/>
    <text x="0" y="76" textAnchor="middle" fill="#E8B84A" fontFamily="sans-serif" fontSize="24" fontWeight="bold">局外人</text>
  </g>
);

const DashedConnection = (
  <g>
    <line x1="740" y1="310" x2="880" y2="310" stroke="#E8B84A" strokeWidth="2" strokeDasharray="8 5" opacity="0.6"/>
    <circle cx="740" cy="310" r="4" fill="#E8B84A" opacity="0.6"/>
    <circle cx="880" cy="310" r="4" fill="#E8B84A" opacity="0.6"/>
    <text x="810" y="298" textAnchor="middle" fill="#E8B84A" fontFamily="sans-serif" fontSize="12" opacity="0.5">?</text>
  </g>
);

const QuestionMarks = (
  <g fill="#E8734A" fontFamily="sans-serif" opacity="0.35">
    <text x="960" y="220" fontSize="28">?</text>
    <text x="990" y="260" fontSize="20">?</text>
    <text x="1000" y="200" fontSize="16">?</text>
  </g>
);

const AccentDots = (
  <g opacity="0.3">
    <circle cx="120" cy="140" r="4" fill="#E8734A"/>
    <circle cx="140" cy="560" r="3" fill="#6EC8E6"/>
    <circle cx="1080" cy="520" r="3.5" fill="#5BAD7A"/>
    <circle cx="1060" cy="140" r="2.5" fill="#E8B84A"/>
  </g>
);

export const outsiderSceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: Defs,
  background: Background,
  fragments: [
    { id: "community", content: CommunityCircle, enterFrom: { x: -500, y: 0 }, enterDelay: 0, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 6, y: 7 }, exitTo: { x: -600, y: 0 }, exitSpin: -3 },
    { id: "outsider", content: OutsiderPerson, enterFrom: { x: 500, y: 0 }, enterDelay: 200, floatAmp: { x: 14, y: 18 }, floatPeriod: { x: 4.5, y: 5.5 }, exitTo: { x: 600, y: 0 }, exitSpin: 5 },
    { id: "connection", content: DashedConnection, enterFrom: { x: 0, y: -300 }, enterDelay: 350, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 5, y: 6.5 }, exitTo: { x: 0, y: -400 } },
    { id: "questions", content: QuestionMarks, enterFrom: { x: 200, y: -200 }, enterDelay: 450, floatAmp: { x: 18, y: 22 }, floatPeriod: { x: 3.5, y: 4.2 }, exitTo: { x: 300, y: -300 }, exitSpin: 10 },
    { id: "dots", content: AccentDots, enterFrom: { x: 0, y: 0 }, enterDelay: 550, floatAmp: { x: 12, y: 16 }, floatPeriod: { x: 7, y: 8 } },
  ],
};
