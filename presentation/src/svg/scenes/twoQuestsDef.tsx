import type { SvgSceneDef } from "../SvgScene";

const Background = (
  <g>
    <rect width="1200" height="675" fill="#2B2B3D"/>
    <rect width="1200" height="675" fill="url(#twoQuestsBgGlow)"/>
  </g>
);

const Defs = (
  <defs>
    <radialGradient id="twoQuestsBgGlow" cx="50%" cy="40%" r="60%">
      <stop offset="0%" stopColor="#6EC8E6" stopOpacity="0.12"/>
      <stop offset="100%" stopColor="#6EC8E6" stopOpacity="0"/>
    </radialGradient>
  </defs>
);


const Computer = (
  <g transform="translate(480, 160)">
    {/* Monitor body */}
    <rect x="0" y="0" width="240" height="180" rx="14" fill="#1E1E2E" stroke="#555570" strokeWidth="2"/>
    {/* Screen */}
    <rect x="14" y="14" width="212" height="130" rx="6" fill="#252538" stroke="#FFFFFF" strokeOpacity="0.1" strokeWidth="1.5"/>
    {/* Face on screen */}
    <circle cx="90" cy="70" r="6" fill="#6EC8E6" opacity="0.7" stroke="#90D8F0" strokeOpacity="0.3" strokeWidth="1"/>
    <circle cx="150" cy="70" r="6" fill="#6EC8E6" opacity="0.7" stroke="#90D8F0" strokeOpacity="0.3" strokeWidth="1"/>
    <path d="M90,100 Q120,125 150,100" fill="none" stroke="#5BAD7A" strokeWidth="2.5" strokeLinecap="round" opacity="0.6"/>
    {/* Stand */}
    <rect x="90" y="180" width="60" height="14" rx="2" fill="#555570"/>
    <rect x="70" y="194" width="100" height="8" rx="4" fill="#555570" opacity="0.7"/>
  </g>
);

const SpeakerIcon = (
  <g transform="translate(100, 200)">
    {/* Speaker body */}
    <rect x="40" y="60" width="50" height="70" rx="6" fill="#4A7BCC" opacity="0.8" stroke="#6A9BE0" strokeOpacity="0.3" strokeWidth="1"/>
    <path d="M90,60 L130,30 L130,160 L90,130 Z" fill="#4A7BCC" opacity="0.65"/>
    {/* Sound waves */}
    <path d="M145,70 Q170,95 145,120" fill="none" stroke="#6EC8E6" strokeWidth="2.5" strokeLinecap="round" opacity="0.6"/>
    <path d="M160,50 Q195,95 160,140" fill="none" stroke="#6EC8E6" strokeWidth="2" strokeLinecap="round" opacity="0.35"/>
    <path d="M175,35 Q220,95 175,155" fill="none" stroke="#6EC8E6" strokeWidth="1.5" strokeLinecap="round" opacity="0.15"/>
    {/* Label */}
    <rect x="0" y="150" width="160" height="44" rx="12" fill="#252538" stroke="#4A7BCC" strokeWidth="1.2" opacity="0.95"/>
    <text x="80" y="179" textAnchor="middle" fill="#4A7BCC" fontFamily="sans-serif" fontSize="22" fontWeight="bold" opacity="0.92">TTS 合成</text>
  </g>
);

const MicrophoneIcon = (
  <g transform="translate(860, 200)">
    {/* Mic body */}
    <rect x="35" y="30" width="50" height="80" rx="25" fill="#E8734A" opacity="0.8" stroke="#F09570" strokeOpacity="0.3" strokeWidth="1"/>
    <rect x="47" y="42" width="26" height="10" rx="3" fill="#FFFFFF" opacity="0.2"/>
    {/* Mic stand */}
    <path d="M25,110 Q25,140 60,140 Q95,140 95,110" fill="none" stroke="#E8734A" strokeWidth="2.5" opacity="0.6"/>
    <line x1="60" y1="140" x2="60" y2="170" stroke="#E8734A" strokeWidth="2.5" opacity="0.6"/>
    <line x1="40" y1="170" x2="80" y2="170" stroke="#E8734A" strokeWidth="2.5" opacity="0.5"/>
    {/* Sound waves (incoming) */}
    <path d="M-15,70 Q-40,95 -15,120" fill="none" stroke="#E8B84A" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" transform="scale(-1,1) translate(-120,0)"/>
    <path d="M-30,50 Q-65,95 -30,140" fill="none" stroke="#E8B84A" strokeWidth="2" strokeLinecap="round" opacity="0.35" transform="scale(-1,1) translate(-120,0)"/>
    {/* Label */}
    <rect x="-20" y="188" width="160" height="44" rx="12" fill="#252538" stroke="#E8734A" strokeWidth="1.2" opacity="0.95"/>
    <text x="60" y="217" textAnchor="middle" fill="#E8734A" fontFamily="sans-serif" fontSize="22" fontWeight="bold" opacity="0.92">ASR 识别</text>
  </g>
);

const HumanFigure = (
  <g transform="translate(1020, 250)">
    <circle cx="40" cy="20" r="22" fill="#555570" opacity="0.6"/>
    <rect x="18" y="48" width="44" height="65" rx="12" fill="#555570" opacity="0.5"/>
    {/* Speech lines coming from mouth */}
    <line x1="0" y1="25" x2="-25" y2="20" stroke="#E8B84A" strokeWidth="1.5" opacity="0.5"/>
    <line x1="0" y1="30" x2="-30" y2="35" stroke="#E8B84A" strokeWidth="1.5" opacity="0.4"/>
    <line x1="0" y1="35" x2="-25" y2="45" stroke="#E8B84A" strokeWidth="1.5" opacity="0.3"/>
  </g>
);

const Arrows = (
  <g>
    {/* Left arrow: computer -> speaker (speak) */}
    <path d="M480,310 Q400,265 320,310" fill="none" stroke="#4A7BCC" strokeWidth="2" strokeDasharray="8 5" opacity="0.5"/>
    <polygon points="320,310 335,300 330,316" fill="#4A7BCC" opacity="0.5"/>
    {/* Right arrow: mic -> computer (listen) */}
    <path d="M720,310 Q790,355 860,310" fill="none" stroke="#E8734A" strokeWidth="2" strokeDasharray="8 5" opacity="0.5"/>
    <polygon points="860,310 845,316 850,300" fill="#E8734A" opacity="0.5"/>
  </g>
);

const QuestionBubble = (
  <g transform="translate(540, 80)">
    <circle cx="60" cy="35" r="35" fill="#252538" stroke="#E8B84A" strokeWidth="1.5" opacity="0.7"/>
    <text x="60" y="44" textAnchor="middle" fill="#E8B84A" fontFamily="sans-serif" fontSize="32" fontWeight="bold" opacity="0.7">?</text>
  </g>
);

export const twoQuestsSceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: Defs,
  background: Background,
  fragments: [
    { id: "computer", content: Computer, enterFrom: { x: 0, y: -400 }, enterDelay: 0, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 6.0, y: 7.5 }, exitTo: { x: 0, y: -520 }, exitScale: 0.9 },
    { id: "speaker", content: SpeakerIcon, enterFrom: { x: -400, y: 0 }, enterDelay: 200, floatAmp: { x: 14, y: 12 }, floatPeriod: { x: 4.5, y: 5.5 }, exitTo: { x: -620, y: -80 }, exitSpin: -8 },
    { id: "mic", content: MicrophoneIcon, enterFrom: { x: 400, y: 0 }, enterDelay: 250, floatAmp: { x: 14, y: 12 }, floatPeriod: { x: 5.0, y: 4.8 }, exitTo: { x: 620, y: -80 }, exitSpin: 8 },
    { id: "human", content: HumanFigure, enterFrom: { x: 300, y: 0 }, enterDelay: 350, floatAmp: { x: 10, y: 14 }, floatPeriod: { x: 5.5, y: 6.0 }, exitTo: { x: 460, y: 140 }, exitSpin: 5 },
    { id: "arrows", content: Arrows, enterFrom: { x: 0, y: 200 }, enterDelay: 400, floatAmp: { x: 6, y: 8 }, floatPeriod: { x: 7.0, y: 8.0 }, exitTo: { x: 0, y: 0 }, exitScale: 1.35, exitOpacity: 1.4 },
    { id: "question", content: QuestionBubble, enterFrom: { x: 0, y: -300 }, enterDelay: 500, floatAmp: { x: 18, y: 22 }, floatPeriod: { x: 3.5, y: 4.2 }, floatRotate: 3, exitTo: { x: 0, y: -520 }, exitSpin: 20, exitScale: 1.25 },
  ],
};
