import type { SvgSceneDef } from "../SvgScene";

const Background = (
  <g>
    <rect width="1200" height="675" fill="#2B2B3D"/>
    <rect width="1200" height="675" fill="url(#chatgptBgGlow)"/>
  </g>
);

const Defs = (
  <defs>
    <radialGradient id="chatgptBgGlow" cx="50%" cy="30%" r="60%">
      <stop offset="0%" stopColor="#5BAD7A" stopOpacity="0.12"/>
      <stop offset="100%" stopColor="#5BAD7A" stopOpacity="0"/>
    </radialGradient>
  </defs>
);


const ChatBubble = (
  <g transform="translate(340, 120)">
    <rect width="520" height="340" rx="24" fill="#1E1E2E" stroke="#555570" strokeWidth="1.5"/>
    <path d="M200,340 L230,390 L260,340" fill="#1E1E2E" stroke="#555570" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M201,340 L230,388 L259,340" fill="#1E1E2E"/>
    {/* Text lines */}
    <rect x="40" y="50" width="260" height="8" rx="4" fill="#5BAD7A" opacity="0.7"/>
    <rect x="40" y="72" width="340" height="8" rx="4" fill="#6EC8E6" opacity="0.6"/>
    <rect x="40" y="94" width="200" height="8" rx="4" fill="#555570" opacity="0.5"/>
    <rect x="40" y="130" width="300" height="8" rx="4" fill="#5BAD7A" opacity="0.6"/>
    <rect x="40" y="152" width="420" height="8" rx="4" fill="#6EC8E6" opacity="0.5"/>
    <rect x="40" y="174" width="180" height="8" rx="4" fill="#555570" opacity="0.45"/>
    <rect x="40" y="210" width="360" height="8" rx="4" fill="#5BAD7A" opacity="0.55"/>
    <rect x="40" y="232" width="240" height="8" rx="4" fill="#6EC8E6" opacity="0.5"/>
    <rect x="40" y="268" width="160" height="8" rx="4" fill="#4A7BCC" opacity="0.5"/>
    <rect x="40" y="290" width="280" height="8" rx="4" fill="#555570" opacity="0.4"/>
  </g>
);

const OpenAILogo = (
  <g transform="translate(600, 290)">
    <circle r="86" fill="#252538" stroke="#555570" strokeWidth="1.5" opacity="0.78"/>
    <circle r="56" fill="none" stroke="#6EC8E6" strokeWidth="1.2" opacity="0.18"/>
    {Array.from({ length: 6 }, (_, i) => (
      <g key={i} transform={`rotate(${i * 60})`}>
        <path
          d="M0,-74 C28,-74 48,-54 48,-28 C48,-7 35,10 15,17 C31,27 42,44 37,62 C31,83 5,91 -13,77 C-25,68 -29,51 -20,36 C-42,35 -60,21 -64,0 C-68,-24 -50,-47 -25,-50 C-15,-51 -6,-46 0,-38 Z"
          fill="none"
          stroke="#5BAD7A"
          strokeWidth="9"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.88"
        />
      </g>
    ))}
    <circle r="10" fill="#5BAD7A" opacity="0.72" stroke="#7DD49A" strokeOpacity="0.3" strokeWidth="1"/>
  </g>
);

const Title = (
  <g>
    <text x="600" y="560" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="42" fontWeight="bold">ChatGPT</text>
  </g>
);

const YearTag = (
  <g transform="translate(920, 80)">
    <rect width="120" height="52" rx="12" fill="#E8734A" stroke="#F09570" strokeOpacity="0.3" strokeWidth="1"/>
    <text x="60" y="36" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="28" fontWeight="bold">2023</text>
  </g>
);

const QuoteLabel = (
  <g transform="translate(300, 610)">
    <rect x="0" y="0" width="340" height="42" rx="8" fill="#252538" stroke="#E8B84A" strokeWidth="1.2"/>
    <text x="170" y="28" textAnchor="middle" fill="#E8B84A" fontFamily="sans-serif" fontSize="18">AI 的 iPhone 时刻</text>
  </g>
);

const Smartphone = (
  <g transform="translate(960, 300)">
    <rect width="70" height="120" rx="10" fill="#252538" stroke="#6EC8E6" strokeWidth="1.5"/>
    <rect x="8" y="18" width="54" height="80" rx="4" fill="#1E1E2E" stroke="#FFFFFF" strokeOpacity="0.1" strokeWidth="1.5"/>
    <circle cx="35" cy="110" r="5" fill="none" stroke="#555570" strokeWidth="1.2"/>
    <rect x="22" y="6" width="26" height="4" rx="2" fill="#555570" opacity="0.5"/>
    <rect x="14" y="30" width="42" height="5" rx="2.5" fill="#5BAD7A" opacity="0.5"/>
    <rect x="14" y="42" width="34" height="5" rx="2.5" fill="#6EC8E6" opacity="0.4"/>
    <rect x="14" y="54" width="38" height="5" rx="2.5" fill="#5BAD7A" opacity="0.4"/>
    <rect x="14" y="66" width="30" height="5" rx="2.5" fill="#555570" opacity="0.35"/>
    <rect x="14" y="78" width="42" height="5" rx="2.5" fill="#6EC8E6" opacity="0.4"/>
  </g>
);

const Sparkles = (
  <g>
    {[
      { x: 160, y: 100, s: 10 }, { x: 880, y: 200, s: 8 },
      { x: 250, y: 480, s: 12 }, { x: 1050, y: 500, s: 9 },
      { x: 750, y: 80, s: 7 }, { x: 1100, y: 150, s: 11 },
    ].map((sp, i) => (
      <g key={i} transform={`translate(${sp.x}, ${sp.y})`} opacity={0.3 + (i % 3) * 0.12}>
        <line x1={-sp.s} y1="0" x2={sp.s} y2="0" stroke="#E8B84A" strokeWidth="1.5"/>
        <line x1="0" y1={-sp.s} x2="0" y2={sp.s} stroke="#E8B84A" strokeWidth="1.5"/>
        <line x1={-sp.s * 0.6} y1={-sp.s * 0.6} x2={sp.s * 0.6} y2={sp.s * 0.6} stroke="#E8B84A" strokeWidth="1"/>
        <line x1={sp.s * 0.6} y1={-sp.s * 0.6} x2={-sp.s * 0.6} y2={sp.s * 0.6} stroke="#E8B84A" strokeWidth="1"/>
      </g>
    ))}
  </g>
);

export const chatgptSceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: Defs,
  background: Background,
  fragments: [
    { id: "chatBubble", content: ChatBubble, enterFrom: { x: 0, y: -400 }, enterDelay: 0, floatAmp: { x: 10, y: 14 }, floatPeriod: { x: 5.5, y: 7.0 }, exitTo: { x: 0, y: 500 }, exitSpin: -3 },
    { id: "openaiLogo", content: OpenAILogo, enterFrom: { x: -300, y: 0 }, enterDelay: 100, floatAmp: { x: 14, y: 18 }, floatPeriod: { x: 4.0, y: 5.5 }, exitTo: { x: -400, y: 0 }, exitSpin: 8 },
    { id: "title", content: Title, enterFrom: { x: 0, y: 200 }, enterDelay: 200, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 6.0, y: 8.0 }, exitTo: { x: 0, y: 300 } },
    { id: "yearTag", content: YearTag, enterFrom: { x: 300, y: -200 }, enterDelay: 300, floatAmp: { x: 18, y: 22 }, floatPeriod: { x: 3.5, y: 4.5 }, floatRotate: 1.5, exitTo: { x: 400, y: -300 }, exitScale: 1.2 },
    { id: "quoteLabel", content: QuoteLabel, enterFrom: { x: 0, y: 200 }, enterDelay: 400, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 5.0, y: 6.5 }, exitTo: { x: -200, y: 200 } },
    { id: "smartphone", content: Smartphone, enterFrom: { x: 300, y: 0 }, enterDelay: 200, floatAmp: { x: 16, y: 20 }, floatPeriod: { x: 4.2, y: 5.8 }, exitTo: { x: 400, y: 200 }, exitSpin: 6 },
    { id: "sparkles", content: Sparkles, enterFrom: { x: 0, y: -100 }, enterDelay: 500, floatAmp: { x: 12, y: 16 }, floatPeriod: { x: 6.5, y: 8.5 }, floatRotate: 3, exitTo: { x: 0, y: -200 } },
  ],
};
