import type { SvgSceneDef } from "../SvgScene";

const Background = (
  <g>
    <rect width="1200" height="675" fill="#2B2B3D"/>
    <rect width="1200" height="675" fill="url(#ttsAsrSplitBgGlow)"/>
  </g>
);

const DividerLine = (
  <g>
    <line x1="600" y1="60" x2="600" y2="615" stroke="#555570" strokeWidth="2" strokeDasharray="8 6" opacity="0.6"/>
    <text x="600" y="46" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="13" opacity="0.7">vs</text>
  </g>
);

const TtsSide = (
  <g>
    {/* Speaker icon */}
    <rect x="120" y="200" width="160" height="120" rx="12" fill="#1E1E2E" stroke="#5BAD7A" strokeWidth="1.5"/>
    <path d="M170,240 L185,240 L210,220 L210,300 L185,280 L170,280 Z" fill="#5BAD7A"/>
    <path d="M220,245 Q235,260 220,275" fill="none" stroke="#5BAD7A" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M228,232 Q250,260 228,288" fill="none" stroke="#5BAD7A" strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
    <path d="M236,222 Q264,260 236,298" fill="none" stroke="#5BAD7A" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
    <path d="M244,212 Q278,260 244,308" fill="none" stroke="#5BAD7A" strokeWidth="1" strokeLinecap="round" opacity="0.2"/>
    {/* TTS label */}
    <text x="200" y="350" textAnchor="middle" fill="#5BAD7A" fontFamily="sans-serif" fontSize="28" fontWeight="bold">TTS</text>
    <text x="200" y="380" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="15" opacity="0.8">语音合成</text>
    {/* Outgoing arrow */}
    <line x1="290" y1="260" x2="400" y2="260" stroke="#5BAD7A" strokeWidth="2" markerEnd="url(#arrowGreen)"/>
    <text x="345" y="248" textAnchor="middle" fill="#5BAD7A" fontFamily="sans-serif" fontSize="11" opacity="0.7">Text → Speech</text>
  </g>
);

const AsrSide = (
  <g>
    {/* Microphone icon */}
    <rect x="920" y="200" width="160" height="120" rx="12" fill="#1E1E2E" stroke="#6EC8E6" strokeWidth="1.5"/>
    <rect x="985" y="228" width="30" height="48" rx="15" fill="#6EC8E6" stroke="#90D8F0" strokeOpacity="0.3" strokeWidth="1"/>
    <path d="M975,260 Q975,290 1000,290 Q1025,290 1025,260" fill="none" stroke="#6EC8E6" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="1000" y1="290" x2="1000" y2="305" stroke="#6EC8E6" strokeWidth="2.5"/>
    <line x1="988" y1="305" x2="1012" y2="305" stroke="#6EC8E6" strokeWidth="2.5" strokeLinecap="round"/>
    {/* Incoming sound waves */}
    <path d="M960,245 Q945,260 960,275" fill="none" stroke="#6EC8E6" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M950,232 Q930,260 950,288" fill="none" stroke="#6EC8E6" strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
    <path d="M940,222 Q914,260 940,298" fill="none" stroke="#6EC8E6" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
    <path d="M930,212 Q900,260 930,298" fill="none" stroke="#6EC8E6" strokeWidth="1" strokeLinecap="round" opacity="0.2"/>
    {/* ASR label */}
    <text x="1000" y="350" textAnchor="middle" fill="#6EC8E6" fontFamily="sans-serif" fontSize="28" fontWeight="bold">ASR</text>
    <text x="1000" y="380" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="15" opacity="0.8">语音识别</text>
    {/* Incoming arrow */}
    <line x1="800" y1="260" x2="910" y2="260" stroke="#6EC8E6" strokeWidth="2" markerEnd="url(#arrowCyan)"/>
    <text x="855" y="248" textAnchor="middle" fill="#6EC8E6" fontFamily="sans-serif" fontSize="11" opacity="0.7">Speech → Text</text>
  </g>
);

const CenterRobot = (
  <g>
    {/* Robot body */}
    <rect x="545" y="200" width="110" height="90" rx="14" fill="#252538" stroke="#E8B84A" strokeWidth="1.5"/>
    {/* Screen face */}
    <rect x="563" y="215" width="74" height="40" rx="6" fill="#1E1E2E" stroke="#FFFFFF" strokeOpacity="0.1" strokeWidth="1.5"/>
    <circle cx="582" cy="235" r="6" fill="#6EC8E6" opacity="0.9" stroke="#90D8F0" strokeOpacity="0.3" strokeWidth="1"/>
    <circle cx="618" cy="235" r="6" fill="#5BAD7A" opacity="0.9" stroke="#7DD49A" strokeOpacity="0.3" strokeWidth="1"/>
    <rect x="573" y="248" width="54" height="3" rx="1.5" fill="#E8B84A" opacity="0.5"/>
    {/* Antenna */}
    <line x1="600" y1="200" x2="600" y2="178" stroke="#E8B84A" strokeWidth="2"/>
    <circle cx="600" cy="174" r="5" fill="#E8B84A"/>
    {/* Arms */}
    <line x1="545" y1="240" x2="520" y2="260" stroke="#555570" strokeWidth="3" strokeLinecap="round"/>
    <line x1="655" y1="240" x2="680" y2="260" stroke="#555570" strokeWidth="3" strokeLinecap="round"/>
    {/* Label */}
    <text x="600" y="312" textAnchor="middle" fill="#E8B84A" fontFamily="sans-serif" fontSize="13" opacity="0.8">AI Engine</text>
    {/* Conversion symbol */}
    <path d="M576,340 A28,28 0 0,1 624,340" fill="none" stroke="#E8B84A" strokeWidth="2" strokeLinecap="round"/>
    <path d="M624,340 L618,334 M624,340 L618,346" fill="none" stroke="#E8B84A" strokeWidth="2" strokeLinecap="round"/>
    <path d="M624,362 A28,28 0 0,1 576,362" fill="none" stroke="#E8B84A" strokeWidth="2" strokeLinecap="round"/>
    <path d="M576,362 L582,356 M576,362 L582,368" fill="none" stroke="#E8B84A" strokeWidth="2" strokeLinecap="round"/>
    <text x="600" y="355" textAnchor="middle" fill="#E8B84A" fontFamily="sans-serif" fontSize="10" opacity="0.7">转化</text>
  </g>
);

const Waveform = (
  <g opacity="0.5">
    {/* Left waveform (TTS output) */}
    <polyline points="100,480 120,460 140,500 160,450 180,510 200,470 220,490 240,460 260,500 280,475 300,480" fill="none" stroke="#5BAD7A" strokeWidth="2" strokeLinejoin="round"/>
    <text x="200" y="530" textAnchor="middle" fill="#5BAD7A" fontFamily="sans-serif" fontSize="11" opacity="0.7">output waveform</text>
    {/* Right waveform (ASR input) */}
    <polyline points="900,480 920,455 940,505 960,445 980,515 1000,465 1020,495 1040,455 1060,505 1080,470 1100,480" fill="none" stroke="#6EC8E6" strokeWidth="2" strokeLinejoin="round"/>
    <text x="1000" y="530" textAnchor="middle" fill="#6EC8E6" fontFamily="sans-serif" fontSize="11" opacity="0.7">input waveform</text>
  </g>
);

const TextBlocks = (
  <g>
    {/* Text input block (left) */}
    <rect x="100" y="430" width="200" height="28" rx="6" fill="#1E1E2E" opacity="0.8" stroke="#FFFFFF" strokeOpacity="0.1" strokeWidth="1.5"/>
    <rect x="112" y="440" width="60" height="5" rx="2.5" fill="#FFFFFF" opacity="0.4"/>
    <rect x="180" y="440" width="45" height="5" rx="2.5" fill="#FFFFFF" opacity="0.3"/>
    <rect x="232" y="440" width="30" height="5" rx="2.5" fill="#FFFFFF" opacity="0.25"/>
    {/* Text output block (right) */}
    <rect x="900" y="430" width="200" height="28" rx="6" fill="#1E1E2E" opacity="0.8" stroke="#FFFFFF" strokeOpacity="0.1" strokeWidth="1.5"/>
    <rect x="912" y="440" width="55" height="5" rx="2.5" fill="#FFFFFF" opacity="0.4"/>
    <rect x="975" y="440" width="40" height="5" rx="2.5" fill="#FFFFFF" opacity="0.3"/>
    <rect x="1022" y="440" width="50" height="5" rx="2.5" fill="#FFFFFF" opacity="0.25"/>
  </g>
);

const Defs = (
  <defs>
    <marker id="arrowGreen" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 Z" fill="#5BAD7A"/>
    </marker>
    <marker id="arrowCyan" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 Z" fill="#6EC8E6"/>
    </marker>
    <radialGradient id="ttsAsrSplitBgGlow" cx="50%" cy="30%" r="60%">
      <stop offset="0%" stopColor="#4A7BCC" stopOpacity="0.12"/>
      <stop offset="100%" stopColor="#4A7BCC" stopOpacity="0"/>
    </radialGradient>
  </defs>
);

export const ttsAsrSplitSceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: Defs,
  background: Background,
  fragments: [
    { id: "divider", content: DividerLine, enterFrom: { x: 0, y: -400 }, enterDelay: 0, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 7.0, y: 8.5 }, exitTo: { x: 0, y: 700 } },
    { id: "tts", content: TtsSide, enterFrom: { x: -500, y: 0 }, enterDelay: 100, floatAmp: { x: 12, y: 14 }, floatPeriod: { x: 5.0, y: 6.2 }, exitTo: { x: -600, y: 0 }, exitSpin: -3 },
    { id: "asr", content: AsrSide, enterFrom: { x: 500, y: 0 }, enterDelay: 100, floatAmp: { x: 12, y: 14 }, floatPeriod: { x: 5.2, y: 6.0 }, exitTo: { x: 600, y: 0 }, exitSpin: 3 },
    { id: "robot", content: CenterRobot, enterFrom: { x: 0, y: -350 }, enterDelay: 300, floatAmp: { x: 10, y: 16 }, floatPeriod: { x: 4.5, y: 5.8 }, exitTo: { x: 0, y: -400 }, exitScale: 0.6 },
    { id: "waveform", content: Waveform, enterFrom: { x: 0, y: 300 }, enterDelay: 450, floatAmp: { x: 14, y: 10 }, floatPeriod: { x: 3.8, y: 5.0 }, floatRotate: 1, exitTo: { x: 0, y: 350 } },
    { id: "textBlocks", content: TextBlocks, enterFrom: { x: 0, y: 250 }, enterDelay: 550, floatAmp: { x: 8, y: 12 }, floatPeriod: { x: 6.5, y: 7.8 }, exitTo: { x: 0, y: 300 } },
  ],
};
