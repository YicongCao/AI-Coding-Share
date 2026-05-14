import type { SvgSceneDef } from "../SvgScene";

const Background = (
  <g>
    <rect width="1200" height="675" fill="#2B2B3D"/>
    <rect width="1200" height="675" fill="url(#prePostChatBgGlow)"/>
  </g>
);

const Defs = (
  <defs>
    <radialGradient id="prePostChatBgGlow" cx="50%" cy="30%" r="60%">
      <stop offset="0%" stopColor="#6EC8E6" stopOpacity="0.12"/>
      <stop offset="100%" stopColor="#6EC8E6" stopOpacity="0"/>
    </radialGradient>
  </defs>
);


const PrechatStage = (
  <g transform="translate(80, 200)">
    <rect x="0" y="0" width="240" height="180" rx="14" fill="#1E1E2E" stroke="#4A7BCC" strokeWidth="2"/>
    <rect x="0" y="0" width="240" height="40" rx="14" fill="#4A7BCC" opacity="0.15" stroke="#6A9BE0" strokeOpacity="0.3" strokeWidth="1"/>
    <rect x="0" y="26" width="240" height="14" fill="#4A7BCC" opacity="0.15" stroke="#6A9BE0" strokeOpacity="0.3" strokeWidth="1"/>
    <text x="120" y="28" textAnchor="middle" fill="#4A7BCC" fontFamily="sans-serif" fontSize="16" fontWeight="bold">Prechat</text>
    <circle cx="120" cy="90" r="22" fill="#252538" stroke="#4A7BCC" strokeWidth="1.5"/>
    <text x="120" y="95" textAnchor="middle" fill="#4A7BCC" fontFamily="sans-serif" fontSize="11" fontWeight="bold">小模型</text>
    <rect x="40" y="125" width="160" height="30" rx="8" fill="#252538" stroke="#555570" strokeWidth="1"/>
    <text x="120" y="145" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="12">复杂度评估</text>
    <text x="120" y="200" textAnchor="middle" fill="#4A7BCC" fontFamily="sans-serif" fontSize="11" opacity="0.6">小模型评估</text>
  </g>
);

const MainAgent = (
  <g transform="translate(440, 180)">
    <rect x="0" y="0" width="280" height="220" rx="14" fill="#1E1E2E" stroke="#5BAD7A" strokeWidth="2.5"/>
    <rect x="0" y="0" width="280" height="44" rx="14" fill="#5BAD7A" opacity="0.12" stroke="#7DD49A" strokeOpacity="0.3" strokeWidth="1"/>
    <rect x="0" y="30" width="280" height="14" fill="#5BAD7A" opacity="0.12" stroke="#7DD49A" strokeOpacity="0.3" strokeWidth="1"/>
    <text x="140" y="30" textAnchor="middle" fill="#5BAD7A" fontFamily="sans-serif" fontSize="18" fontWeight="bold">Main Agent</text>
    <circle cx="140" cy="100" r="30" fill="#252538" stroke="#5BAD7A" strokeWidth="2"/>
    <text x="140" y="96" textAnchor="middle" fill="#5BAD7A" fontFamily="sans-serif" fontSize="22" fontWeight="bold">AI</text>
    <text x="140" y="113" textAnchor="middle" fill="#5BAD7A" fontFamily="sans-serif" fontSize="10">主模型</text>
    <rect x="50" y="145" width="180" height="28" rx="8" fill="#252538" stroke="#555570" strokeWidth="1"/>
    <text x="140" y="164" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="12" opacity="0.6">Thinking Depth: adaptive</text>
    <rect x="80" y="185" width="120" height="24" rx="12" fill="#5BAD7A" opacity="0.15"/>
    <text x="140" y="202" textAnchor="middle" fill="#5BAD7A" fontFamily="sans-serif" fontSize="12" fontWeight="bold">Processing...</text>
  </g>
);

const PostchatStage = (
  <g transform="translate(840, 200)">
    <rect x="0" y="0" width="240" height="180" rx="14" fill="#1E1E2E" stroke="#E8B84A" strokeWidth="2"/>
    <rect x="0" y="0" width="240" height="40" rx="14" fill="#E8B84A" opacity="0.15" stroke="#F0D070" strokeOpacity="0.3" strokeWidth="1"/>
    <rect x="0" y="26" width="240" height="14" fill="#E8B84A" opacity="0.15" stroke="#F0D070" strokeOpacity="0.3" strokeWidth="1"/>
    <text x="120" y="28" textAnchor="middle" fill="#E8B84A" fontFamily="sans-serif" fontSize="16" fontWeight="bold">Postchat</text>
    <circle cx="120" cy="90" r="22" fill="#252538" stroke="#E8B84A" strokeWidth="1.5"/>
    <text x="120" y="95" textAnchor="middle" fill="#E8B84A" fontFamily="sans-serif" fontSize="11" fontWeight="bold">小模型</text>
    <rect x="40" y="125" width="160" height="30" rx="8" fill="#252538" stroke="#555570" strokeWidth="1"/>
    <text x="120" y="145" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="12">结果校验</text>
  </g>
);

const Arrows = (
  <g>
    <line x1="330" y1="290" x2="430" y2="290" stroke="#555570" strokeWidth="2.5"/>
    <polygon points="430,290 420,284 420,296" fill="#555570"/>
    <line x1="730" y1="290" x2="830" y2="290" stroke="#555570" strokeWidth="2.5"/>
    <polygon points="830,290 820,284 820,296" fill="#555570"/>
  </g>
);

const DepthToggle = (
  <g transform="translate(460, 460)">
    <rect x="0" y="0" width="240" height="50" rx="25" fill="#252538" stroke="#555570" strokeWidth="1.5"/>
    <rect x="5" y="5" width="80" height="40" rx="20" fill="#5BAD7A" opacity="0.3"/>
    <text x="45" y="32" textAnchor="middle" fill="#5BAD7A" fontFamily="sans-serif" fontSize="14" fontWeight="bold">low</text>
    <text x="160" y="32" textAnchor="middle" fill="#E8734A" fontFamily="sans-serif" fontSize="14">high</text>
    <text x="120" y="80" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="12">Thinking Depth Toggle</text>
  </g>
);

const Caption = (
  <text x="600" y="600" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="14" opacity="0.5">三阶段流水线：小模型做分流，大模型做推理</text>
);

export const prePostChatSceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: Defs,
  background: Background,
  fragments: [
    { id: "prechat", content: PrechatStage, enterFrom: { x: -500, y: 0 }, enterDelay: 0, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 6, y: 7 }, exitTo: { x: -600, y: 0 }, exitSpin: -4 },
    { id: "mainAgent", content: MainAgent, enterFrom: { x: 0, y: -400 }, enterDelay: 150, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 7, y: 8 }, exitTo: { x: 0, y: -500 }, exitScale: 0.85 },
    { id: "postchat", content: PostchatStage, enterFrom: { x: 500, y: 0 }, enterDelay: 200, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 6, y: 7 }, exitTo: { x: 600, y: 0 }, exitSpin: 4 },
    { id: "arrows", content: Arrows, enterFrom: { x: 0, y: 200 }, enterDelay: 300, floatAmp: { x: 8, y: 8 }, floatPeriod: { x: 7, y: 8 }, exitTo: { x: 0, y: 200 } },
    { id: "toggle", content: DepthToggle, enterFrom: { x: 0, y: 300 }, enterDelay: 400, floatAmp: { x: 14, y: 16 }, floatPeriod: { x: 4.5, y: 5.5 }, exitTo: { x: 0, y: 300 } },
    { id: "caption", content: Caption, enterFrom: { x: 0, y: 200 }, enterDelay: 550, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 8, y: 9 }, exitTo: { x: 0, y: 200 } },
  ],
};
