import type { SvgSceneDef } from "../SvgScene";

const Background = <rect width="1200" height="675" fill="#2B2B3D"/>;

const CarSilhouette = (
  <g transform="translate(100, 280)">
    {/* Car body - modern EV side view */}
    <path d="M80,100 C80,100 100,40 180,20 C260,0 500,-5 620,10 C700,20 780,40 820,70 C850,90 870,100 870,100 L870,130 C870,140 860,145 850,145 L120,145 C110,145 80,140 80,130 Z" fill="#252538" stroke="#555570" strokeWidth="2"/>
    {/* Roof line */}
    <path d="M200,20 C240,-5 400,-15 550,-10 C650,-5 720,10 750,30" fill="none" stroke="#555570" strokeWidth="1.5" opacity="0.5"/>
    {/* Windows */}
    <path d="M220,30 C250,10 380,5 480,8 L480,65 L200,65 Z" fill="#1E1E2E" stroke="#555570" strokeWidth="1" opacity="0.7"/>
    <path d="M500,8 C580,5 660,15 710,35 L680,65 L500,65 Z" fill="#1E1E2E" stroke="#555570" strokeWidth="1" opacity="0.7"/>
    {/* Wheels */}
    <circle cx="220" cy="145" r="38" fill="#1E1E2E" stroke="#555570" strokeWidth="2"/>
    <circle cx="220" cy="145" r="22" fill="#252538" stroke="#555570" strokeWidth="1.5"/>
    <circle cx="220" cy="145" r="6" fill="#555570"/>
    <circle cx="720" cy="145" r="38" fill="#1E1E2E" stroke="#555570" strokeWidth="2"/>
    <circle cx="720" cy="145" r="22" fill="#252538" stroke="#555570" strokeWidth="1.5"/>
    <circle cx="720" cy="145" r="6" fill="#555570"/>
    {/* Headlights */}
    <rect x="840" y="85" width="30" height="12" rx="6" fill="#6EC8E6" opacity="0.6"/>
    <rect x="80" y="95" width="25" height="10" rx="5" fill="#E85650" opacity="0.5"/>
    {/* Door line */}
    <line x1="460" y1="25" x2="460" y2="135" stroke="#555570" strokeWidth="1" opacity="0.4"/>
  </g>
);

const DashboardVoice = (
  <g transform="translate(480, 330)">
    {/* Dashboard area */}
    <rect x="0" y="0" width="120" height="50" rx="8" fill="#1E1E2E" stroke="#4A7BCC" strokeWidth="1.5"/>
    {/* Mic icon */}
    <circle cx="35" cy="25" r="14" fill="#4A7BCC" opacity="0.3"/>
    <rect x="31" y="14" width="8" height="14" rx="4" fill="#6EC8E6"/>
    <path d="M26,26 C26,34 31,38 35,38 C39,38 44,34 44,26" fill="none" stroke="#6EC8E6" strokeWidth="1.5" strokeLinecap="round"/>
    {/* Display lines */}
    <rect x="60" y="16" width="44" height="4" rx="2" fill="#5BAD7A" opacity="0.6"/>
    <rect x="60" y="26" width="36" height="4" rx="2" fill="#5BAD7A" opacity="0.4"/>
    <rect x="60" y="36" width="40" height="4" rx="2" fill="#555570" opacity="0.3"/>
  </g>
);

const SoundWaves = (
  <g transform="translate(490, 290)">
    <path d="M0,0 C-10,-15 -10,-30 0,-45" fill="none" stroke="#6EC8E6" strokeWidth="2" opacity="0.5" strokeLinecap="round"/>
    <path d="M-16,5 C-30,-12 -30,-35 -16,-52" fill="none" stroke="#6EC8E6" strokeWidth="2" opacity="0.35" strokeLinecap="round"/>
    <path d="M-32,10 C-50,-10 -50,-40 -32,-58" fill="none" stroke="#6EC8E6" strokeWidth="2" opacity="0.2" strokeLinecap="round"/>
    <path d="M120,0 C130,-15 130,-30 120,-45" fill="none" stroke="#6EC8E6" strokeWidth="2" opacity="0.5" strokeLinecap="round"/>
    <path d="M136,5 C150,-12 150,-35 136,-52" fill="none" stroke="#6EC8E6" strokeWidth="2" opacity="0.35" strokeLinecap="round"/>
  </g>
);

const SiriIcon = (
  <g transform="translate(950, 160)">
    <circle r="48" fill="#1E1E2E" stroke="#6EC8E6" strokeWidth="2"/>
    <circle r="34" fill="none" stroke="#6EC8E6" strokeWidth="1.5" opacity="0.4"/>
    <circle r="22" fill="none" stroke="#6EC8E6" strokeWidth="2" opacity="0.6"/>
    <circle r="10" fill="#6EC8E6" opacity="0.8"/>
    <text x="0" y="68" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="12" opacity="0.7">Siri</text>
  </g>
);

const ConnectionLine = (
  <g>
    {/* Dashed connection from car dashboard to Siri icon */}
    <path d="M600,330 C680,300 820,240 900,200" fill="none" stroke="#E8B84A" strokeWidth="2" strokeDasharray="8 5"/>
    <polygon points="905,197 895,195 898,205" fill="#E8B84A"/>
    {/* "Same tech" label on the line */}
    <rect x="710" y="240" width="120" height="32" rx="6" fill="#1E1E2E" stroke="#E8B84A" strokeWidth="1"/>
    <text x="770" y="261" textAnchor="middle" fill="#E8B84A" fontFamily="sans-serif" fontSize="11">Same Tech 同源</text>
  </g>
);

const CarVoiceLabel = (
  <g transform="translate(100, 530)">
    <rect x="0" y="0" width="160" height="50" rx="8" fill="#1E1E2E" stroke="#5BAD7A" strokeWidth="1.2"/>
    <text x="80" y="22" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="14">车机语音</text>
    <text x="80" y="42" textAnchor="middle" fill="#5BAD7A" fontFamily="sans-serif" fontSize="11">Car Voice Assistant</text>
  </g>
);

const TechStack = (
  <g transform="translate(900, 440)">
    <rect x="0" y="0" width="180" height="90" rx="8" fill="#1E1E2E" stroke="#555570" strokeWidth="1"/>
    <text x="90" y="22" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="11">ASR + NLU + TTS</text>
    <rect x="16" y="34" width="60" height="18" rx="4" fill="#E8734A" opacity="0.2"/>
    <text x="46" y="47" textAnchor="middle" fill="#E8734A" fontFamily="sans-serif" fontSize="10">ASR</text>
    <rect x="84" y="34" width="60" height="18" rx="4" fill="#6EC8E6" opacity="0.2"/>
    <text x="114" y="47" textAnchor="middle" fill="#6EC8E6" fontFamily="sans-serif" fontSize="10">NLU</text>
    <rect x="50" y="60" width="60" height="18" rx="4" fill="#5BAD7A" opacity="0.2"/>
    <text x="80" y="73" textAnchor="middle" fill="#5BAD7A" fontFamily="sans-serif" fontSize="10">TTS</text>
  </g>
);

export const carVoiceSceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: <defs/>,
  background: Background,
  fragments: [
    { id: "carSilhouette", content: CarSilhouette, enterFrom: { x: -700, y: 0 }, enterDelay: 0, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 6.0, y: 8.0 }, exitTo: { x: -800, y: 0 }, exitSpin: -2 },
    { id: "dashboardVoice", content: DashboardVoice, enterFrom: { x: -400, y: 100 }, enterDelay: 150, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 6.0, y: 8.0 }, exitTo: { x: -500, y: 100 } },
    { id: "soundWaves", content: SoundWaves, enterFrom: { x: 0, y: -200 }, enterDelay: 300, floatAmp: { x: 12, y: 14 }, floatPeriod: { x: 4.5, y: 5.5 }, exitTo: { x: 0, y: -280 }, exitScale: 0.5 },
    { id: "siriIcon", content: SiriIcon, enterFrom: { x: 350, y: -300 }, enterDelay: 200, floatAmp: { x: 18, y: 20 }, floatPeriod: { x: 4.0, y: 5.0 }, exitTo: { x: 400, y: -350 }, exitSpin: 12 },
    { id: "connectionLine", content: ConnectionLine, enterFrom: { x: 200, y: -150 }, enterDelay: 400, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 5.5, y: 7.0 }, exitTo: { x: 250, y: -200 } },
    { id: "carVoiceLabel", content: CarVoiceLabel, enterFrom: { x: -300, y: 200 }, enterDelay: 500, floatAmp: { x: 14, y: 10 }, floatPeriod: { x: 5.0, y: 6.5 }, exitTo: { x: -350, y: 250 }, exitSpin: -8 },
    { id: "techStack", content: TechStack, enterFrom: { x: 300, y: 200 }, enterDelay: 600, floatAmp: { x: 16, y: 12 }, floatPeriod: { x: 3.8, y: 5.2 }, exitTo: { x: 350, y: 250 }, exitSpin: 8 },
  ],
};
