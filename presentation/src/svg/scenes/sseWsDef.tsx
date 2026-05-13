import type { SvgSceneDef } from "../SvgScene";

const Background = <rect width="1200" height="675" fill="#2B2B3D"/>;

const Defs = (
  <defs>
    <marker id="arwR" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 Z" fill="#E8734A"/>
    </marker>
    <marker id="arwG" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 Z" fill="#5BAD7A"/>
    </marker>
    <marker id="arwY" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 Z" fill="#E8B84A"/>
    </marker>
  </defs>
);

const Title = (
  <g>
    <text x="600" y="50" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="24" fontWeight="bold">Phase 2</text>
    <rect x="460" y="62" width="280" height="30" rx="8" fill="#5BAD7A" opacity="0.15"/>
    <text x="600" y="84" textAnchor="middle" fill="#5BAD7A" fontFamily="sans-serif" fontSize="18" fontWeight="bold">SSE + WebSocket</text>
  </g>
);

const AgentBox = (
  <g>
    <rect x="40" y="150" width="200" height="400" rx="14" fill="#1E1E2E" stroke="#E8734A" strokeWidth="2"/>
    <text x="140" y="185" textAnchor="middle" fill="#E8734A" fontFamily="sans-serif" fontSize="20" fontWeight="bold">Agent</text>
    <rect x="60" y="210" width="160" height="40" rx="6" fill="#252538"/>
    <text x="140" y="235" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="12" opacity="0.7">LLM Engine</text>
    <rect x="60" y="270" width="160" height="40" rx="6" fill="#252538"/>
    <text x="140" y="295" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="12" opacity="0.7">Tool Executor</text>
    <rect x="60" y="330" width="160" height="40" rx="6" fill="#252538"/>
    <text x="140" y="355" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="12" opacity="0.7">State Manager</text>
  </g>
);

const FrontendBox = (
  <g>
    <rect x="960" y="150" width="200" height="400" rx="14" fill="#1E1E2E" stroke="#4A7BCC" strokeWidth="2"/>
    <text x="1060" y="185" textAnchor="middle" fill="#4A7BCC" fontFamily="sans-serif" fontSize="20" fontWeight="bold">Frontend</text>
    <rect x="980" y="210" width="160" height="40" rx="6" fill="#252538"/>
    <text x="1060" y="235" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="12" opacity="0.7">Renderer</text>
    <rect x="980" y="270" width="160" height="40" rx="6" fill="#252538"/>
    <text x="1060" y="295" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="12" opacity="0.7">UI Controls</text>
    <rect x="980" y="330" width="160" height="40" rx="6" fill="#252538"/>
    <text x="1060" y="355" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="12" opacity="0.7">File Manager</text>
  </g>
);

const Lane1_SSE = (
  <g>
    <rect x="260" y="195" width="680" height="70" rx="10" fill="#E8734A" opacity="0.06" stroke="#E8734A" strokeWidth="1.2" strokeDasharray="6 4"/>
    <text x="310" y="220" fill="#E8734A" fontFamily="sans-serif" fontSize="13" fontWeight="bold">SSE 文本流</text>
    <text x="310" y="240" fill="#555570" fontFamily="sans-serif" fontSize="11">text/event-stream</text>
    <line x1="430" y1="230" x2="920" y2="230" stroke="#E8734A" strokeWidth="2.5" markerEnd="url(#arwR)"/>
    {[0,1,2,3].map(i => <rect key={i} x={480 + i * 110} y="222" width="50" height="16" rx="3" fill="#E8734A" opacity={0.15 + i * 0.08}/>)}
  </g>
);

const Lane2_WS = (
  <g>
    <rect x="260" y="290" width="680" height="90" rx="10" fill="#5BAD7A" opacity="0.06" stroke="#5BAD7A" strokeWidth="1.2" strokeDasharray="6 4"/>
    <text x="310" y="318" fill="#5BAD7A" fontFamily="sans-serif" fontSize="13" fontWeight="bold">WebSocket 控制流</text>
    <text x="310" y="338" fill="#555570" fontFamily="sans-serif" fontSize="11">bidirectional control</text>
    <line x1="430" y1="325" x2="920" y2="325" stroke="#5BAD7A" strokeWidth="2" markerEnd="url(#arwG)"/>
    <line x1="920" y1="350" x2="430" y2="350" stroke="#5BAD7A" strokeWidth="2" markerEnd="url(#arwG)"/>
    <text x="680" y="318" textAnchor="middle" fill="#5BAD7A" fontFamily="sans-serif" fontSize="11" opacity="0.7">confirm / cancel / approve</text>
    <text x="680" y="365" textAnchor="middle" fill="#5BAD7A" fontFamily="sans-serif" fontSize="11" opacity="0.7">user input / actions</text>
  </g>
);

const Lane3_Tools = (
  <g>
    <rect x="260" y="405" width="680" height="70" rx="10" fill="#E8B84A" opacity="0.06" stroke="#E8B84A" strokeWidth="1.2" strokeDasharray="6 4"/>
    <text x="310" y="432" fill="#E8B84A" fontFamily="sans-serif" fontSize="13" fontWeight="bold">Tools 数据通道</text>
    <text x="310" y="452" fill="#555570" fontFamily="sans-serif" fontSize="11">file ops / terminal / API</text>
    <line x1="430" y1="440" x2="920" y2="440" stroke="#E8B84A" strokeWidth="2" markerEnd="url(#arwY)"/>
    <line x1="920" y1="455" x2="430" y2="455" stroke="#E8B84A" strokeWidth="2" markerEnd="url(#arwY)"/>
  </g>
);

const DecoupledLabel = (
  <g>
    <rect x="530" y="510" width="140" height="36" rx="8" fill="#1E1E2E" stroke="#6EC8E6" strokeWidth="1.5"/>
    <text x="600" y="534" textAnchor="middle" fill="#6EC8E6" fontFamily="sans-serif" fontSize="16" fontWeight="bold">解耦</text>
    <text x="600" y="570" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="12">Decoupled channels</text>
  </g>
);

export const sseWsSceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: Defs,
  background: Background,
  fragments: [
    { id: "title", content: Title, enterFrom: { x: 0, y: -250 }, enterDelay: 0, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 7, y: 8 } },
    { id: "agent", content: AgentBox, enterFrom: { x: -500, y: 0 }, enterDelay: 80, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 5.5, y: 6.5 }, exitTo: { x: -600, y: 0 }, exitSpin: -3 },
    { id: "frontend", content: FrontendBox, enterFrom: { x: 500, y: 0 }, enterDelay: 80, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 5.2, y: 6.2 }, exitTo: { x: 600, y: 0 }, exitSpin: 3 },
    { id: "sse", content: Lane1_SSE, enterFrom: { x: 0, y: -300 }, enterDelay: 200, floatAmp: { x: 12, y: 8 }, floatPeriod: { x: 4.5, y: 5.8 }, exitTo: { x: 0, y: -350 } },
    { id: "ws", content: Lane2_WS, enterFrom: { x: 0, y: -200 }, enterDelay: 350, floatAmp: { x: 10, y: 10 }, floatPeriod: { x: 5, y: 6 }, exitTo: { x: 0, y: -300 } },
    { id: "tools", content: Lane3_Tools, enterFrom: { x: 0, y: 300 }, enterDelay: 450, floatAmp: { x: 10, y: 10 }, floatPeriod: { x: 5.5, y: 6.5 }, exitTo: { x: 0, y: 350 } },
    { id: "label", content: DecoupledLabel, enterFrom: { x: 0, y: 200 }, enterDelay: 550, floatAmp: { x: 14, y: 18 }, floatPeriod: { x: 3.5, y: 4.5 }, exitTo: { x: 0, y: 300 } },
  ],
};
