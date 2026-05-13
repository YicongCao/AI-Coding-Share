import type { SvgSceneDef } from "../SvgScene";

const Background = <rect width="1200" height="675" fill="#2B2B3D"/>;

const CenterPerson = (
  <g transform="translate(600, 300)">
    <circle cx="0" cy="-30" r="28" fill="#6EC8E6" opacity="0.7"/>
    <rect x="-22" y="5" width="44" height="55" rx="12" fill="#6EC8E6" opacity="0.55"/>
    {/* Eyes */}
    <circle cx="-8" cy="-35" r="3" fill="#1E1E2E"/>
    <circle cx="8" cy="-35" r="3" fill="#1E1E2E"/>
    <path d="M-6,-22 Q0,-16 6,-22" fill="none" stroke="#1E1E2E" strokeWidth="2" strokeLinecap="round"/>
  </g>
);

const SpiralArrow = (
  <g transform="translate(600, 300)">
    {/* Recursive spiral loop */}
    <path d="M55,0 A80,80 0 1,1 0,-80" fill="none" stroke="#5BAD7A" strokeWidth="2.5" strokeDasharray="8 4" opacity="0.6"/>
    <path d="M0,-80 A110,110 0 1,1 110,0" fill="none" stroke="#E8B84A" strokeWidth="2.5" strokeDasharray="8 4" opacity="0.5"/>
    <path d="M110,0 A140,140 0 0,1 -30,135" fill="none" stroke="#E8734A" strokeWidth="2.5" strokeDasharray="8 4" opacity="0.4"/>
    {/* Arrowhead */}
    <polygon points="-30,135 -22,125 -38,128" fill="#E8734A" opacity="0.5"/>
    {/* "self-feedback" labels along the spiral */}
    <text x="0" y="-95" textAnchor="middle" fill="#5BAD7A" fontFamily="sans-serif" fontSize="12" opacity="0.7">Output</text>
    <text x="125" y="5" textAnchor="start" fill="#E8B84A" fontFamily="sans-serif" fontSize="12" opacity="0.7">Review</text>
    <text x="-55" y="150" textAnchor="middle" fill="#E8734A" fontFamily="sans-serif" fontSize="12" opacity="0.7">Input</text>
  </g>
);

const NexScreen = (
  <g transform="translate(800, 200)">
    <rect x="0" y="0" width="200" height="140" rx="10" fill="#1E1E2E" stroke="#555570" strokeWidth="1.5"/>
    <rect x="12" y="12" width="176" height="95" rx="6" fill="#252538"/>
    {/* App UI mockup */}
    <rect x="22" y="22" width="50" height="8" rx="3" fill="#6EC8E6" opacity="0.6"/>
    <rect x="22" y="38" width="156" height="5" rx="2" fill="#555570" opacity="0.4"/>
    <rect x="22" y="50" width="130" height="5" rx="2" fill="#555570" opacity="0.3"/>
    <rect x="22" y="62" width="148" height="5" rx="2" fill="#555570" opacity="0.35"/>
    <rect x="22" y="78" width="80" height="20" rx="6" fill="#5BAD7A" opacity="0.5"/>
    <text x="62" y="92" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="10">Nex</text>
    {/* Stand */}
    <rect x="75" y="118" width="50" height="8" rx="2" fill="#555570" opacity="0.5"/>
    <rect x="60" y="126" width="80" height="6" rx="3" fill="#555570" opacity="0.35"/>
  </g>
);

const FeedbackArrow = (
  <g>
    {/* Arrow from screen output back to person */}
    <path d="M800,280 Q720,320 660,300" fill="none" stroke="#6EC8E6" strokeWidth="2" strokeDasharray="6 4" opacity="0.5"/>
    <polygon points="660,300 672,295 670,306" fill="#6EC8E6" opacity="0.5"/>
  </g>
);

const CompletionBadge = (
  <g transform="translate(360, 170)">
    <circle cx="50" cy="50" r="48" fill="none" stroke="#5BAD7A" strokeWidth="4" opacity="0.7"/>
    <circle cx="50" cy="50" r="48" fill="none" stroke="#252538" strokeWidth="4" strokeDasharray="301.6" strokeDashoffset="30.16" opacity="0.3"/>
    <text x="50" y="44" textAnchor="middle" fill="#5BAD7A" fontFamily="sans-serif" fontSize="28" fontWeight="bold">90%</text>
    <text x="50" y="66" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="11">完成度</text>
  </g>
);

const Labels = (
  <g>
    <text x="600" y="60" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="26" fontWeight="bold">用 Nex 来做 Nex</text>
    <text x="600" y="88" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="14">Using Nex to Build Nex — Self-feedback Loop</text>
    <g transform="translate(440, 490)">
      <rect x="0" y="0" width="140" height="40" rx="10" fill="#252538" stroke="#E8B84A" strokeWidth="1.5"/>
      <text x="70" y="27" textAnchor="middle" fill="#E8B84A" fontFamily="sans-serif" fontSize="16" fontWeight="bold">自我反馈</text>
    </g>
  </g>
);

export const nexEchoSceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: <defs/>,
  background: Background,
  fragments: [
    { id: "person", content: CenterPerson, enterFrom: { x: 0, y: 400 }, enterDelay: 0, floatAmp: { x: 8, y: 12 }, floatPeriod: { x: 6, y: 7 }, exitTo: { x: 0, y: -500 }, exitScale: 0.9 },
    { id: "spiral", content: SpiralArrow, enterFrom: { x: 0, y: 0 }, enterDelay: 200, floatAmp: { x: 8, y: 12 }, floatPeriod: { x: 6, y: 7 }, exitTo: { x: 0, y: 0 }, exitScale: 1.5, exitOpacity: 1.5 },
    { id: "screen", content: NexScreen, enterFrom: { x: 400, y: -200 }, enterDelay: 150, floatAmp: { x: 12, y: 14 }, floatPeriod: { x: 5.5, y: 6.5 }, exitTo: { x: 500, y: -300 }, exitSpin: -6 },
    { id: "fbArrow", content: FeedbackArrow, enterFrom: { x: 200, y: -100 }, enterDelay: 350, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 5.5, y: 6.5 }, exitTo: { x: 200, y: -200 } },
    { id: "badge", content: CompletionBadge, enterFrom: { x: -400, y: 0 }, enterDelay: 300, floatAmp: { x: 16, y: 20 }, floatPeriod: { x: 4, y: 5 }, exitTo: { x: -500, y: 100 }, exitSpin: -10 },
    { id: "labels", content: Labels, enterFrom: { x: 0, y: -300 }, enterDelay: 100, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 8, y: 9 }, exitTo: { x: 0, y: -400 } },
  ],
};
