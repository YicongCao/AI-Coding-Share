import type { SvgSceneDef } from "../SvgScene";

const Background = (
  <g>
    <rect width="1200" height="675" fill="#2B2B3D"/>
    <rect width="1200" height="675" fill="url(#bsArchitectureBgGlow)"/>
  </g>
);

const Defs = (
  <defs>
    <marker id="arrowBlue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 Z" fill="#6EC8E6"/>
    </marker>
    <radialGradient id="bsArchitectureBgGlow" cx="50%" cy="30%" r="60%">
      <stop offset="0%" stopColor="#4A7BCC" stopOpacity="0.12"/>
      <stop offset="100%" stopColor="#4A7BCC" stopOpacity="0"/>
    </radialGradient>
  </defs>
);

const Title = (
  <g>
    <text x="600" y="52" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="28" fontWeight="bold">B/S 架构</text>
    <text x="600" y="78" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="14">Browser / Server Architecture</text>
  </g>
);

const BrowserWindow = (
  <g>
    <rect x="60" y="120" width="420" height="440" rx="14" fill="#1E1E2E" stroke="#6EC8E6" strokeWidth="2"/>
    <rect x="60" y="120" width="420" height="36" rx="14" fill="#252538" stroke="#FFFFFF" strokeOpacity="0.1" strokeWidth="1.5"/>
    <circle cx="86" cy="138" r="5" fill="#E85650"/><circle cx="104" cy="138" r="5" fill="#E8B84A"/><circle cx="122" cy="138" r="5" fill="#5BAD7A"/>
    <rect x="180" y="130" width="180" height="16" rx="8" fill="#1E1E2E" stroke="#FFFFFF" strokeOpacity="0.1" strokeWidth="1.5"/>
    <text x="270" y="143" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="10">localhost:3000</text>
    <text x="270" y="108" textAnchor="middle" fill="#6EC8E6" fontFamily="sans-serif" fontSize="20" fontWeight="bold">Browser</text>
    {/* Code editor inside */}
    <rect x="80" y="170" width="380" height="220" rx="6" fill="#252538" stroke="#FFFFFF" strokeOpacity="0.1" strokeWidth="1.5"/>
    <g opacity="0.7">
      {[0,1,2,3,4,5,6,7,8].map((i) => (
        <g key={i}>
          <rect x="96" y={186 + i * 22} width={40 + (i % 3) * 25} height="5" rx="2.5" fill="#5BAD7A" opacity={0.5 + (i % 3) * 0.15}/>
          <rect x={146 + (i % 3) * 25} y={186 + i * 22} width={50 + (i % 2) * 20} height="5" rx="2.5" fill="#6EC8E6" opacity={0.4 + (i % 2) * 0.2}/>
        </g>
      ))}
    </g>
    {/* WebContainer badge */}
    <rect x="100" y="410" width="140" height="32" rx="8" fill="#252538" stroke="#E8B84A" strokeWidth="1.2"/>
    <text x="170" y="431" textAnchor="middle" fill="#E8B84A" fontFamily="sans-serif" fontSize="12" fontWeight="bold">WebContainer</text>
    <rect x="280" y="410" width="120" height="32" rx="8" fill="#252538" stroke="#5BAD7A" strokeWidth="1.2"/>
    <text x="340" y="431" textAnchor="middle" fill="#5BAD7A" fontFamily="sans-serif" fontSize="12">Terminal</text>
  </g>
);

const ServerRack = (
  <g>
    <rect x="720" y="120" width="420" height="440" rx="14" fill="#1E1E2E" stroke="#E8734A" strokeWidth="2"/>
    <text x="930" y="108" textAnchor="middle" fill="#E8734A" fontFamily="sans-serif" fontSize="20" fontWeight="bold">Server</text>
    {/* Server rack units */}
    {[0,1,2,3].map((i) => (
      <g key={i}>
        <rect x="750" y={155 + i * 80} width="360" height="60" rx="8" fill="#252538" stroke="#555570" strokeWidth="1"/>
        <circle cx="775" cy={185 + i * 80} r="5" fill={["#5BAD7A","#6EC8E6","#E8B84A","#5BAD7A"][i]} opacity="0.8"/>
        <text x="800" y={190 + i * 80} fill="#FFFFFF" fontFamily="sans-serif" fontSize="13" opacity="0.8">{["GET /api/chat","POST /api/agent","WS  /api/stream","GET /api/tools"][i]}</text>
        <rect x="1000" y={172 + i * 80} width="80" height="22" rx="4" fill={["#5BAD7A","#6EC8E6","#E8B84A","#4A7BCC"][i]} opacity="0.2"/>
        <text x="1040" y={188 + i * 80} textAnchor="middle" fill={["#5BAD7A","#6EC8E6","#E8B84A","#4A7BCC"][i]} fontFamily="sans-serif" fontSize="11">{["200","201","101","200"][i]}</text>
      </g>
    ))}
    <rect x="750" y="490" width="360" height="50" rx="8" fill="#252538" stroke="#FFFFFF" strokeOpacity="0.1" strokeWidth="1.5"/>
    <text x="930" y="521" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="13">Database / Storage</text>
  </g>
);

const Arrows = (
  <g>
    <line x1="490" y1="280" x2="710" y2="280" stroke="#6EC8E6" strokeWidth="2.5" markerEnd="url(#arrowBlue)"/>
    <line x1="710" y1="320" x2="490" y2="320" stroke="#6EC8E6" strokeWidth="2.5" markerEnd="url(#arrowBlue)"/>
    <text x="600" y="268" textAnchor="middle" fill="#6EC8E6" fontFamily="sans-serif" fontSize="12" opacity="0.7">Request</text>
    <text x="600" y="345" textAnchor="middle" fill="#6EC8E6" fontFamily="sans-serif" fontSize="12" opacity="0.7">Response</text>
    <rect x="560" y="285" width="80" height="22" rx="6" fill="#1E1E2E" stroke="#6EC8E6" strokeWidth="1"/>
    <text x="600" y="301" textAnchor="middle" fill="#6EC8E6" fontFamily="sans-serif" fontSize="11">HTTP/WS</text>
  </g>
);

const AccentDots = (
  <g opacity="0.3">
    <circle cx="550" cy="600" r="3" fill="#E8734A"/>
    <circle cx="650" cy="620" r="2.5" fill="#5BAD7A"/>
    <circle cx="600" cy="640" r="3.5" fill="#4A7BCC"/>
  </g>
);

export const bsArchitectureSceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: Defs,
  background: Background,
  fragments: [
    { id: "title", content: Title, enterFrom: { x: 0, y: -300 }, enterDelay: 0, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 7, y: 8 } },
    { id: "browser", content: BrowserWindow, enterFrom: { x: -600, y: 0 }, enterDelay: 100, floatAmp: { x: 10, y: 14 }, floatPeriod: { x: 5.5, y: 6.5 }, exitTo: { x: -700, y: 0 }, exitSpin: -3 },
    { id: "server", content: ServerRack, enterFrom: { x: 600, y: 0 }, enterDelay: 100, floatAmp: { x: 10, y: 14 }, floatPeriod: { x: 5.2, y: 6.2 }, exitTo: { x: 700, y: 0 }, exitSpin: 3 },
    { id: "arrows", content: Arrows, enterFrom: { x: 0, y: -350 }, enterDelay: 300, floatAmp: { x: 12, y: 8 }, floatPeriod: { x: 4.5, y: 5.8 }, exitTo: { x: 0, y: -400 } },
    { id: "dots", content: AccentDots, enterFrom: { x: 0, y: 200 }, enterDelay: 500, floatAmp: { x: 16, y: 20 }, floatPeriod: { x: 3.5, y: 4.5 } },
  ],
};
