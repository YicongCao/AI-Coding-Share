import type { SvgSceneDef } from "../SvgScene";

const Background = <rect width="1200" height="675" fill="#2B2B3D"/>;

const Title = (
  <g>
    <text x="600" y="60" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="28" fontWeight="bold">Agent 开发技能树</text>
    <text x="600" y="88" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="14">Full-Stack Skills for Agent Development</text>
  </g>
);

const BackendColumn = (
  <g transform="translate(120, 120)">
    <rect x="0" y="0" width="400" height="440" rx="14" fill="#1E1E2E" stroke="#4A7BCC" strokeWidth="1.5"/>
    <text x="200" y="40" textAnchor="middle" fill="#4A7BCC" fontFamily="sans-serif" fontSize="22" fontWeight="bold">Backend</text>
    <line x1="40" y1="58" x2="360" y2="58" stroke="#555570" strokeWidth="0.5" opacity="0.5"/>
    {[{ label: "SSE", sub: "Server-Sent Events", y: 95 }, { label: "WebSocket", sub: "双向通信", y: 185 }, { label: "ReAct Loop", sub: "推理-行动循环", y: 275 }].map((item, i) => (
      <g key={i}>
        <rect x="30" y={item.y} width="340" height="70" rx="10" fill="#252538"/>
        <circle cx="70" cy={item.y + 35} r="18" fill="#4A7BCC" opacity="0.2"/>
        <text x="70" y={item.y + 40} textAnchor="middle" fill="#4A7BCC" fontFamily="sans-serif" fontSize="14" fontWeight="bold">{i + 1}</text>
        <text x="110" y={item.y + 30} fill="#FFFFFF" fontFamily="sans-serif" fontSize="17" fontWeight="bold">{item.label}</text>
        <text x="110" y={item.y + 52} fill="#555570" fontFamily="sans-serif" fontSize="13">{item.sub}</text>
      </g>
    ))}
    <rect x="30" y="365" width="340" height="50" rx="10" fill="#252538"/>
    <text x="200" y="396" textAnchor="middle" fill="#4A7BCC" fontFamily="sans-serif" fontSize="14">Prompt Engineering / Tool 注册</text>
  </g>
);

const FrontendColumn = (
  <g transform="translate(680, 120)">
    <rect x="0" y="0" width="400" height="440" rx="14" fill="#1E1E2E" stroke="#5BAD7A" strokeWidth="1.5"/>
    <text x="200" y="40" textAnchor="middle" fill="#5BAD7A" fontFamily="sans-serif" fontSize="22" fontWeight="bold">Frontend</text>
    <line x1="40" y1="58" x2="360" y2="58" stroke="#555570" strokeWidth="0.5" opacity="0.5"/>
    {[{ label: "State Machine", sub: "状态机管理", y: 95 }, { label: "Streaming", sub: "流式渲染", y: 185 }, { label: "Animation", sub: "交互动画", y: 275 }].map((item, i) => (
      <g key={i}>
        <rect x="30" y={item.y} width="340" height="70" rx="10" fill="#252538"/>
        <circle cx="70" cy={item.y + 35} r="18" fill="#5BAD7A" opacity="0.2"/>
        <text x="70" y={item.y + 40} textAnchor="middle" fill="#5BAD7A" fontFamily="sans-serif" fontSize="14" fontWeight="bold">{i + 1}</text>
        <text x="110" y={item.y + 30} fill="#FFFFFF" fontFamily="sans-serif" fontSize="17" fontWeight="bold">{item.label}</text>
        <text x="110" y={item.y + 52} fill="#555570" fontFamily="sans-serif" fontSize="13">{item.sub}</text>
      </g>
    ))}
    <rect x="30" y="365" width="340" height="50" rx="10" fill="#252538"/>
    <text x="200" y="396" textAnchor="middle" fill="#5BAD7A" fontFamily="sans-serif" fontSize="14">UX 反馈 / Error Boundary</text>
  </g>
);

const Arrows = (
  <g>
    <line x1="520" y1="280" x2="680" y2="280" stroke="#E8B84A" strokeWidth="2" markerEnd="url(#arrowR)"/>
    <line x1="680" y1="320" x2="520" y2="320" stroke="#E8B84A" strokeWidth="2" markerEnd="url(#arrowL)"/>
    <text x="600" y="268" textAnchor="middle" fill="#E8B84A" fontFamily="sans-serif" fontSize="12" opacity="0.8">API</text>
    <text x="600" y="345" textAnchor="middle" fill="#E8B84A" fontFamily="sans-serif" fontSize="12" opacity="0.8">Events</text>
  </g>
);

const Defs = (
  <defs>
    <marker id="arrowR" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#E8B84A"/></marker>
    <marker id="arrowL" viewBox="0 0 10 10" refX="1" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M10,0 L0,5 L10,10" fill="#E8B84A"/></marker>
  </defs>
);

export const agentDevSkillsSceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: Defs,
  background: Background,
  fragments: [
    { id: "title", content: Title, enterFrom: { x: 0, y: -120 }, enterDelay: 0, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 7, y: 8 } },
    { id: "backend", content: BackendColumn, enterFrom: { x: -500, y: 0 }, enterDelay: 100, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 6, y: 7 }, exitTo: { x: -600, y: 0 } },
    { id: "frontend", content: FrontendColumn, enterFrom: { x: 500, y: 0 }, enterDelay: 200, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 5.5, y: 6.5 }, exitTo: { x: 600, y: 0 } },
    { id: "arrows", content: Arrows, enterFrom: { x: 0, y: 200 }, enterDelay: 400, floatAmp: { x: 12, y: 14 }, floatPeriod: { x: 4, y: 5 }, exitTo: { x: 0, y: 300 } },
  ],
};
