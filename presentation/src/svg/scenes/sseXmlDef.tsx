import type { SvgSceneDef } from "../SvgScene";

const Background = (
  <g>
    <rect width="1200" height="675" fill="#2B2B3D"/>
    <rect width="1200" height="675" fill="url(#sseXmlBgGlow)"/>
  </g>
);

const Defs = (
  <defs>
    <marker id="arrowOrange" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 Z" fill="#E8734A"/>
    </marker>
    <radialGradient id="sseXmlBgGlow" cx="50%" cy="30%" r="60%">
      <stop offset="0%" stopColor="#4A7BCC" stopOpacity="0.12"/>
      <stop offset="100%" stopColor="#4A7BCC" stopOpacity="0"/>
    </radialGradient>
  </defs>
);

const Title = (
  <g>
    <text x="600" y="50" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="24" fontWeight="bold">Phase 1</text>
    <rect x="490" y="62" width="220" height="30" rx="8" fill="#E8734A" opacity="0.15"/>
    <text x="600" y="84" textAnchor="middle" fill="#E8734A" fontFamily="sans-serif" fontSize="18" fontWeight="bold">SSE + XML</text>
  </g>
);

const AgentBox = (
  <g>
    <rect x="60" y="180" width="280" height="340" rx="14" fill="#1E1E2E" stroke="#E8734A" strokeWidth="2"/>
    <text x="200" y="215" textAnchor="middle" fill="#E8734A" fontFamily="sans-serif" fontSize="20" fontWeight="bold">Agent</text>
    <line x1="80" y1="230" x2="320" y2="230" stroke="#555570" strokeWidth="1" opacity="0.4"/>
    {/* XML code preview */}
    <g fontFamily="sans-serif" fontSize="13" opacity="0.85">
      <text x="90" y="260" fill="#6EC8E6">{"<stream>"}</text>
      <text x="106" y="282" fill="#E8B84A">{"<think>"}</text>
      <text x="122" y="304" fill="#FFFFFF" opacity="0.7">分析用户需求...</text>
      <text x="106" y="326" fill="#E8B84A">{"</think>"}</text>
      <text x="106" y="354" fill="#5BAD7A">{"<code>"}</text>
      <text x="122" y="376" fill="#FFFFFF" opacity="0.7">function solve() {"{"}</text>
      <text x="122" y="398" fill="#FFFFFF" opacity="0.5">{"  // ..."}</text>
      <text x="106" y="420" fill="#5BAD7A">{"</code>"}</text>
      <text x="90" y="448" fill="#6EC8E6">{"</stream>"}</text>
    </g>
  </g>
);

const FrontendBox = (
  <g>
    <rect x="860" y="180" width="280" height="340" rx="14" fill="#1E1E2E" stroke="#4A7BCC" strokeWidth="2"/>
    <text x="1000" y="215" textAnchor="middle" fill="#4A7BCC" fontFamily="sans-serif" fontSize="20" fontWeight="bold">Frontend</text>
    <line x1="880" y1="230" x2="1120" y2="230" stroke="#555570" strokeWidth="1" opacity="0.4"/>
    {/* Rendered blocks */}
    <rect x="885" y="250" width="230" height="60" rx="8" fill="#252538"/>
    <rect x="900" y="262" width="80" height="5" rx="2.5" fill="#E8B84A" opacity="0.6"/>
    <rect x="900" y="274" width="140" height="5" rx="2.5" fill="#FFFFFF" opacity="0.3"/>
    <rect x="900" y="286" width="100" height="5" rx="2.5" fill="#FFFFFF" opacity="0.25"/>
    <rect x="885" y="325" width="230" height="80" rx="8" fill="#252538"/>
    <rect x="900" y="338" width="60" height="5" rx="2.5" fill="#5BAD7A" opacity="0.6"/>
    <rect x="900" y="350" width="180" height="5" rx="2.5" fill="#FFFFFF" opacity="0.35"/>
    <rect x="900" y="362" width="120" height="5" rx="2.5" fill="#FFFFFF" opacity="0.3"/>
    <rect x="900" y="374" width="160" height="5" rx="2.5" fill="#FFFFFF" opacity="0.25"/>
    <rect x="900" y="386" width="90" height="5" rx="2.5" fill="#FFFFFF" opacity="0.2"/>
    <rect x="885" y="420" width="230" height="40" rx="8" fill="#252538" stroke="#555570" strokeWidth="1" strokeDasharray="4 3"/>
    <rect x="900" y="434" width="100" height="5" rx="2.5" fill="#555570" opacity="0.3"/>
  </g>
);

const StreamArrow = (
  <g>
    <line x1="350" y1="340" x2="845" y2="340" stroke="#E8734A" strokeWidth="3" markerEnd="url(#arrowOrange)"/>
    {/* stream packets */}
    {[0,1,2,3,4].map((i) => (
      <rect key={i} x={400 + i * 90} y="330" width="40" height="20" rx="4" fill="#E8734A" opacity={0.2 + i * 0.1}/>
    ))}
    <text x="600" y="310" textAnchor="middle" fill="#E8734A" fontFamily="sans-serif" fontSize="14" fontWeight="bold">SSE text/event-stream</text>
    <rect x="550" y="370" width="100" height="26" rx="6" fill="#E85650" opacity="0.15" stroke="#E85650" strokeWidth="1"/>
    <text x="600" y="389" textAnchor="middle" fill="#E85650" fontFamily="sans-serif" fontSize="13" fontWeight="bold">单向 →</text>
  </g>
);

const AccentDots = (
  <g opacity="0.3">
    <circle cx="500" cy="580" r="3" fill="#6EC8E6"/>
    <circle cx="700" cy="600" r="2.5" fill="#5BAD7A"/>
    <circle cx="600" cy="620" r="3.5" fill="#E8B84A"/>
  </g>
);

export const sseXmlSceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: Defs,
  background: Background,
  fragments: [
    { id: "title", content: Title, enterFrom: { x: 0, y: -250 }, enterDelay: 0, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 7, y: 8 } },
    { id: "agent", content: AgentBox, enterFrom: { x: -500, y: 0 }, enterDelay: 100, floatAmp: { x: 10, y: 14 }, floatPeriod: { x: 5.5, y: 6.5 }, exitTo: { x: -600, y: 0 }, exitSpin: -3 },
    { id: "frontend", content: FrontendBox, enterFrom: { x: 500, y: 0 }, enterDelay: 100, floatAmp: { x: 10, y: 14 }, floatPeriod: { x: 5.2, y: 6.2 }, exitTo: { x: 600, y: 0 }, exitSpin: 3 },
    { id: "arrow", content: StreamArrow, enterFrom: { x: 0, y: -300 }, enterDelay: 300, floatAmp: { x: 12, y: 8 }, floatPeriod: { x: 4.5, y: 5.8 }, exitTo: { x: 0, y: -400 } },
    { id: "dots", content: AccentDots, enterFrom: { x: 0, y: 200 }, enterDelay: 500, floatAmp: { x: 16, y: 20 }, floatPeriod: { x: 3.5, y: 4.5 } },
  ],
};
