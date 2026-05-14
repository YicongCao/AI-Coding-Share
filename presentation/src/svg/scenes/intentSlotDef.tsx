import type { SvgSceneDef } from "../SvgScene";

const Background = (
  <g>
    <rect width="1200" height="675" fill="#2B2B3D"/>
    <rect width="1200" height="675" fill="url(#intentSlotBgGlow)"/>
  </g>
);

const Defs = (
  <defs>
    <radialGradient id="intentSlotBgGlow" cx="50%" cy="30%" r="60%">
      <stop offset="0%" stopColor="#4A7BCC" stopOpacity="0.12"/>
      <stop offset="100%" stopColor="#4A7BCC" stopOpacity="0"/>
    </radialGradient>
  </defs>
);


const SentenceBar = (
  <g transform="translate(250, 60)">
    <rect x="0" y="0" width="700" height="56" rx="10" fill="#1E1E2E" stroke="#555570" strokeWidth="1.5"/>
    {/* Sentence with slot highlights */}
    <text x="40" y="35" fill="#FFFFFF" fontFamily="sans-serif" fontSize="20" opacity="0.9">
      <tspan fill="#FFFFFF">播放</tspan>
      <tspan fill="#E8B84A"> 周杰伦 </tspan>
      <tspan fill="#FFFFFF">的</tspan>
      <tspan fill="#6EC8E6"> 歌</tspan>
    </text>
    {/* Slot highlight underlines */}
    <rect x="88" y="44" width="72" height="3" rx="1.5" fill="#E8B84A" opacity="0.7"/>
    <rect x="196" y="44" width="28" height="3" rx="1.5" fill="#6EC8E6" opacity="0.7"/>
  </g>
);

const FlowArrows = (
  <g>
    {/* Center flow arrow down from sentence */}
    <line x1="600" y1="120" x2="600" y2="180" stroke="#555570" strokeWidth="2" strokeDasharray="6 3"/>
    <polygon points="600,185 595,175 605,175" fill="#555570"/>
    {/* Split into two */}
    <path d="M600,185 C600,210 450,220 420,240" fill="none" stroke="#E8734A" strokeWidth="2" strokeDasharray="6 3"/>
    <polygon points="416,244 424,236 426,246" fill="#E8734A"/>
    <path d="M600,185 C600,210 750,220 780,240" fill="none" stroke="#6EC8E6" strokeWidth="2" strokeDasharray="6 3"/>
    <polygon points="784,244 776,236 774,246" fill="#6EC8E6"/>
    {/* Down to result */}
    <line x1="420" y1="400" x2="540" y2="470" stroke="#E8734A" strokeWidth="2" strokeDasharray="6 3"/>
    <line x1="780" y1="400" x2="660" y2="470" stroke="#6EC8E6" strokeWidth="2" strokeDasharray="6 3"/>
    <polygon points="545,472 535,466 540,458" fill="#E8734A"/>
    <polygon points="655,472 665,466 660,458" fill="#6EC8E6"/>
  </g>
);

const IntentBox = (
  <g transform="translate(280, 250)">
    <rect x="0" y="0" width="280" height="145" rx="10" fill="#1E1E2E" stroke="#E8734A" strokeWidth="2"/>
    <rect x="0" y="0" width="280" height="36" rx="10" fill="#E8734A" opacity="0.15" stroke="#F09570" strokeOpacity="0.3" strokeWidth="1"/>
    <rect x="0" y="26" width="280" height="10" fill="#E8734A" opacity="0.15" stroke="#F09570" strokeOpacity="0.3" strokeWidth="1"/>
    <text x="140" y="25" textAnchor="middle" fill="#E8734A" fontFamily="sans-serif" fontSize="14" fontWeight="bold">Intent 意图识别</text>
    {/* Classification results */}
    <text x="24" y="62" fill="#FFFFFF" fontFamily="sans-serif" fontSize="12" opacity="0.8">Classification:</text>
    <rect x="24" y="74" width="100" height="24" rx="5" fill="#E8734A" opacity="0.2"/>
    <text x="74" y="90" textAnchor="middle" fill="#E8734A" fontFamily="sans-serif" fontSize="12">play_music</text>
    <rect x="134" y="74" width="80" height="24" rx="5" fill="#555570" opacity="0.2"/>
    <text x="174" y="90" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="11">search</text>
    <rect x="24" y="110" width="220" height="6" rx="3" fill="#5BAD7A" opacity="0.5"/>
    <text x="24" y="134" fill="#5BAD7A" fontFamily="sans-serif" fontSize="11" opacity="0.7">confidence: 0.94</text>
  </g>
);

const SlotBox = (
  <g transform="translate(640, 250)">
    <rect x="0" y="0" width="280" height="145" rx="10" fill="#1E1E2E" stroke="#6EC8E6" strokeWidth="2"/>
    <rect x="0" y="0" width="280" height="36" rx="10" fill="#6EC8E6" opacity="0.15" stroke="#90D8F0" strokeOpacity="0.3" strokeWidth="1"/>
    <rect x="0" y="26" width="280" height="10" fill="#6EC8E6" opacity="0.15" stroke="#90D8F0" strokeOpacity="0.3" strokeWidth="1"/>
    <text x="140" y="25" textAnchor="middle" fill="#6EC8E6" fontFamily="sans-serif" fontSize="14" fontWeight="bold">Slot 槽位提取</text>
    {/* Extraction results */}
    <text x="24" y="62" fill="#FFFFFF" fontFamily="sans-serif" fontSize="12" opacity="0.8">Extraction:</text>
    <rect x="24" y="72" width="110" height="24" rx="5" fill="#E8B84A" opacity="0.2" stroke="#F0D070" strokeOpacity="0.3" strokeWidth="1"/>
    <text x="79" y="88" textAnchor="middle" fill="#E8B84A" fontFamily="sans-serif" fontSize="11">artist: 周杰伦</text>
    <rect x="144" y="72" width="110" height="24" rx="5" fill="#6EC8E6" opacity="0.2" stroke="#90D8F0" strokeOpacity="0.3" strokeWidth="1"/>
    <text x="199" y="88" textAnchor="middle" fill="#6EC8E6" fontFamily="sans-serif" fontSize="11">type: 歌曲</text>
    <rect x="24" y="108" width="230" height="6" rx="3" fill="#555570" opacity="0.3"/>
    <text x="24" y="130" fill="#555570" fontFamily="sans-serif" fontSize="11" opacity="0.6">B-artist I-artist O B-type</text>
  </g>
);

const ResultBox = (
  <g transform="translate(380, 480)">
    <rect x="0" y="0" width="440" height="80" rx="10" fill="#1E1E2E" stroke="#5BAD7A" strokeWidth="2"/>
    <text x="220" y="30" textAnchor="middle" fill="#5BAD7A" fontFamily="sans-serif" fontSize="14" fontWeight="bold">Structured Output</text>
    <text x="220" y="56" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="13" opacity="0.8">{"{ intent: play_music, artist: \"周杰伦\", type: \"歌\" }"}</text>
  </g>
);

const TitleLabel = (
  <g transform="translate(40, 590)">
    <text x="0" y="0" fill="#E8B84A" fontFamily="sans-serif" fontSize="15" opacity="0.7">NLU Pipeline</text>
    <text x="0" y="22" fill="#FFFFFF" fontFamily="sans-serif" fontSize="12" opacity="0.5">自然语言理解流水线</text>
  </g>
);

export const intentSlotSceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: Defs,
  background: Background,
  fragments: [
    { id: "sentenceBar", content: SentenceBar, enterFrom: { x: 0, y: -200 }, enterDelay: 0, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 6.0, y: 8.0 }, exitTo: { x: 0, y: -300 }, exitSpin: 2 },
    { id: "flowArrows", content: FlowArrows, enterFrom: { x: 0, y: 0 }, enterDelay: 150, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 6.0, y: 8.0 }, exitTo: { x: 0, y: -200 } },
    { id: "intentBox", content: IntentBox, enterFrom: { x: -400, y: 200 }, enterDelay: 250, floatAmp: { x: 12, y: 14 }, floatPeriod: { x: 5.0, y: 6.5 }, exitTo: { x: -500, y: 250 }, exitSpin: -6 },
    { id: "slotBox", content: SlotBox, enterFrom: { x: 400, y: 200 }, enterDelay: 350, floatAmp: { x: 12, y: 14 }, floatPeriod: { x: 5.2, y: 6.8 }, exitTo: { x: 500, y: 250 }, exitSpin: 6 },
    { id: "resultBox", content: ResultBox, enterFrom: { x: 0, y: 300 }, enterDelay: 500, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 5.5, y: 7.0 }, exitTo: { x: 0, y: 380 }, exitScale: 0.8 },
    { id: "titleLabel", content: TitleLabel, enterFrom: { x: -200, y: 150 }, enterDelay: 600, floatAmp: { x: 8, y: 8 }, floatPeriod: { x: 7.0, y: 9.0 }, exitTo: { x: -250, y: 200 } },
  ],
};
