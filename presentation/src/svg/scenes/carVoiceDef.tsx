import type { SvgSceneDef } from "../SvgScene";

const Background = (
  <g>
    <rect width="1200" height="675" fill="#2B2B3D"/>
    <rect width="1200" height="675" fill="url(#carVoiceBgGlow)"/>
  </g>
);

const Defs = (
  <defs>
    <radialGradient id="carVoiceBgGlow" cx="50%" cy="40%" r="60%">
      <stop offset="0%" stopColor="#6EC8E6" stopOpacity="0.12"/>
      <stop offset="100%" stopColor="#6EC8E6" stopOpacity="0"/>
    </radialGradient>
  </defs>
);


const CockpitView = (
  <g>
    <path d="M150,68 L1050,68 L972,382 L228,382 Z" fill="#101827" stroke="#4A7BCC" strokeWidth="1.4"/>
    <path d="M210,330 C360,258 480,240 600,240 C720,240 840,258 990,330 L972,382 L228,382 Z" fill="#182235" opacity="0.75"/>
    <rect x="240" y="108" width="720" height="56" rx="28" fill="#6EC8E6" opacity="0.12"/>
    <path d="M420,382 L522,170 L678,170 L780,382 Z" fill="#1E1E2E"/>
    <path d="M566,382 L586,170" stroke="#E8B84A" strokeWidth="3" opacity="0.55" strokeDasharray="16 14"/>
    <path d="M634,382 L614,170" stroke="#E8B84A" strokeWidth="3" opacity="0.55" strokeDasharray="16 14"/>
    <path d="M214,316 C302,276 372,252 452,236" fill="none" stroke="#5BAD7A" strokeWidth="3" opacity="0.45"/>
    <path d="M986,316 C898,276 828,252 748,236" fill="none" stroke="#5BAD7A" strokeWidth="3" opacity="0.45"/>
    <circle cx="360" cy="146" r="20" fill="#E8B84A" opacity="0.18"/>
    <rect x="180" y="382" width="840" height="160" rx="42" fill="#111827" stroke="#555570" strokeWidth="1.2"/>
    <path d="M180,382 C300,432 900,432 1020,382 L1020,542 L180,542 Z" fill="#1E1E2E" opacity="0.92"/>
    <path d="M150,68 L252,382 L176,542 L72,122 Z" fill="#252538" stroke="#555570" strokeWidth="1.2"/>
    <path d="M1050,68 L948,382 L1024,542 L1128,122 Z" fill="#252538" stroke="#555570" strokeWidth="1.2"/>
    <rect x="282" y="346" width="230" height="84" rx="38" fill="#151A28" stroke="#555570" strokeWidth="1.2"/>
    <rect x="310" y="366" width="174" height="42" rx="21" fill="#0F172A"/>
    <path d="M330,394 A68,68 0 0 1 462,394" fill="none" stroke="#6EC8E6" strokeWidth="2" opacity="0.55"/>
    <line x1="396" y1="386" x2="430" y2="374" stroke="#E8B84A" strokeWidth="2" strokeLinecap="round"/>
    <text x="396" y="406" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="11" opacity="0.68">Instrument Cluster</text>
    <circle cx="390" cy="500" r="96" fill="#0F172A" stroke="#555570" strokeWidth="8"/>
    <circle cx="390" cy="500" r="46" fill="#1E1E2E" stroke="#4A7BCC" strokeWidth="2"/>
    <path d="M390,454 L390,404" stroke="#555570" strokeWidth="8" strokeLinecap="round"/>
    <path d="M350,520 L282,556" stroke="#555570" strokeWidth="8" strokeLinecap="round"/>
    <path d="M430,520 L498,556" stroke="#555570" strokeWidth="8" strokeLinecap="round"/>
    <text x="390" y="506" textAnchor="middle" fill="#6EC8E6" fontFamily="sans-serif" fontSize="12" fontWeight="bold">Driver</text>
    <rect x="658" y="328" width="268" height="138" rx="14" fill="#0F172A" stroke="#6EC8E6" strokeWidth="1.6"/>
    <rect x="674" y="344" width="236" height="106" rx="10" fill="#1E1E2E"/>
    <text x="792" y="370" textAnchor="middle" fill="#6EC8E6" fontFamily="sans-serif" fontSize="13" fontWeight="bold">Infotainment</text>
    <text x="792" y="394" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="12" opacity="0.68">车机中控屏</text>
  </g>
);

const DashboardVoice = (
  <g transform="translate(704, 374)">
    <circle cx="24" cy="24" r="18" fill="#4A7BCC" opacity="0.3"/>
    <rect x="19" y="10" width="10" height="18" rx="5" fill="#6EC8E6"/>
    <path d="M12,26 C12,38 20,44 24,44 C28,44 36,38 36,26" fill="none" stroke="#6EC8E6" strokeWidth="1.8" strokeLinecap="round"/>
    <line x1="24" y1="44" x2="24" y2="52" stroke="#6EC8E6" strokeWidth="1.8"/>
    <line x1="15" y1="52" x2="33" y2="52" stroke="#6EC8E6" strokeWidth="1.8" strokeLinecap="round"/>
    <text x="128" y="18" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="13" fontWeight="bold">Car Voice Assistant</text>
    <text x="128" y="40" textAnchor="middle" fill="#5BAD7A" fontFamily="sans-serif" fontSize="11">导航到最近充电站</text>
    <rect x="68" y="58" width="120" height="10" rx="5" fill="#5BAD7A" opacity="0.35"/>
  </g>
);

const SoundWaves = (
  <g transform="translate(792, 392)">
    <path d="M-82,0 C-96,-18 -96,-42 -82,-60" fill="none" stroke="#6EC8E6" strokeWidth="2" opacity="0.5" strokeLinecap="round"/>
    <path d="M-104,8 C-124,-18 -124,-50 -104,-76" fill="none" stroke="#6EC8E6" strokeWidth="2" opacity="0.32" strokeLinecap="round"/>
    <path d="M82,0 C96,-18 96,-42 82,-60" fill="none" stroke="#6EC8E6" strokeWidth="2" opacity="0.5" strokeLinecap="round"/>
    <path d="M104,8 C124,-18 124,-50 104,-76" fill="none" stroke="#6EC8E6" strokeWidth="2" opacity="0.32" strokeLinecap="round"/>
  </g>
);

const VoiceAssistantCore = (
  <g transform="translate(940, 170)">
    <circle r="48" fill="#1E1E2E" stroke="#6EC8E6" strokeWidth="2"/>
    <circle r="34" fill="none" stroke="#6EC8E6" strokeWidth="1.5" opacity="0.4"/>
    <circle r="22" fill="none" stroke="#6EC8E6" strokeWidth="2" opacity="0.6"/>
    <circle r="10" fill="#6EC8E6" opacity="0.8"/>
    <text x="0" y="68" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="12" opacity="0.7">Car AI</text>
  </g>
);

const ConnectionLine = (
  <g>
    <path d="M840,354 C880,300 910,244 928,214" fill="none" stroke="#E8B84A" strokeWidth="2" strokeDasharray="8 5"/>
    <polygon points="932,207 922,213 933,219" fill="#E8B84A"/>
    <rect x="850" y="260" width="140" height="34" rx="6" fill="#1E1E2E" stroke="#E8B84A" strokeWidth="1"/>
    <text x="920" y="281" textAnchor="middle" fill="#E8B84A" fontFamily="sans-serif" fontSize="11">On-device NLU</text>
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
  defs: Defs,
  background: Background,
  fragments: [
    { id: "cockpitView", content: CockpitView, enterFrom: { x: -700, y: 0 }, enterDelay: 0, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 6.0, y: 8.0 }, exitTo: { x: -800, y: 0 }, exitSpin: -2 },
    { id: "dashboardVoice", content: DashboardVoice, enterFrom: { x: -400, y: 100 }, enterDelay: 150, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 6.0, y: 8.0 }, exitTo: { x: -500, y: 100 } },
    { id: "soundWaves", content: SoundWaves, enterFrom: { x: 0, y: -200 }, enterDelay: 300, floatAmp: { x: 12, y: 14 }, floatPeriod: { x: 4.5, y: 5.5 }, exitTo: { x: 0, y: -280 }, exitScale: 0.5 },
    { id: "voiceAssistantCore", content: VoiceAssistantCore, enterFrom: { x: 350, y: -300 }, enterDelay: 200, floatAmp: { x: 18, y: 20 }, floatPeriod: { x: 4.0, y: 5.0 }, exitTo: { x: 400, y: -350 }, exitSpin: 12 },
    { id: "connectionLine", content: ConnectionLine, enterFrom: { x: 200, y: -150 }, enterDelay: 400, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 5.5, y: 7.0 }, exitTo: { x: 250, y: -200 } },
    { id: "carVoiceLabel", content: CarVoiceLabel, enterFrom: { x: -300, y: 200 }, enterDelay: 500, floatAmp: { x: 14, y: 10 }, floatPeriod: { x: 5.0, y: 6.5 }, exitTo: { x: -350, y: 250 }, exitSpin: -8 },
    { id: "techStack", content: TechStack, enterFrom: { x: 300, y: 200 }, enterDelay: 600, floatAmp: { x: 16, y: 12 }, floatPeriod: { x: 3.8, y: 5.2 }, exitTo: { x: 350, y: 250 }, exitSpin: 8 },
  ],
};
