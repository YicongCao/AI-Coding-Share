import type { SvgSceneDef } from "../SvgScene";

const Background = <rect width="1200" height="675" fill="#2B2B3D"/>;

const MainProcess = (
  <g transform="translate(100, 110)">
    <rect x="0" y="0" width="380" height="400" rx="14" fill="#1E1E2E" stroke="#4A7BCC" strokeWidth="2"/>
    <text x="190" y="36" textAnchor="middle" fill="#4A7BCC" fontFamily="sans-serif" fontSize="18" fontWeight="bold">Main Process</text>
    <line x1="20" y1="52" x2="360" y2="52" stroke="#555570" strokeWidth="0.5"/>
    {/* Agent box */}
    <rect x="30" y="72" width="320" height="80" rx="10" fill="#252538" stroke="#6EC8E6" strokeWidth="1.2"/>
    <text x="190" y="105" textAnchor="middle" fill="#6EC8E6" fontFamily="sans-serif" fontSize="15" fontWeight="bold">Agent (ReAct Loop)</text>
    <text x="190" y="128" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="12">LLM + Built-in Tools</text>
    {/* LLM block */}
    <rect x="30" y="175" width="150" height="60" rx="8" fill="#252538" stroke="#E8B84A" strokeWidth="1.2"/>
    <text x="105" y="210" textAnchor="middle" fill="#E8B84A" fontFamily="sans-serif" fontSize="14" fontWeight="bold">LLM</text>
    {/* Tools block */}
    <rect x="200" y="175" width="150" height="60" rx="8" fill="#252538" stroke="#5BAD7A" strokeWidth="1.2"/>
    <text x="275" y="210" textAnchor="middle" fill="#5BAD7A" fontFamily="sans-serif" fontSize="14" fontWeight="bold">Tools</text>
    {/* System prompt */}
    <rect x="30" y="260" width="320" height="50" rx="8" fill="#252538" stroke="#555570" strokeWidth="1"/>
    <text x="190" y="290" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="13">System Prompt + Rules + Skills</text>
    {/* Process indicator */}
    <circle cx="50" cy="350" r="6" fill="#5BAD7A" opacity="0.8"/>
    <text x="66" y="354" fill="#555570" fontFamily="sans-serif" fontSize="12">PID: main</text>
  </g>
);

const ExternalProcess = (
  <g transform="translate(700, 110)">
    <rect x="0" y="0" width="380" height="400" rx="14" fill="#1E1E2E" stroke="#E8734A" strokeWidth="2" strokeDasharray="8 4"/>
    <text x="190" y="36" textAnchor="middle" fill="#E8734A" fontFamily="sans-serif" fontSize="18" fontWeight="bold">External Process</text>
    <line x1="20" y1="52" x2="360" y2="52" stroke="#555570" strokeWidth="0.5"/>
    {/* MCP Server boxes */}
    {[
      { name: "MCP Server A", sub: "Git operations", y: 72, color: "#6EC8E6" },
      { name: "MCP Server B", sub: "Database queries", y: 165, color: "#5BAD7A" },
      { name: "MCP Server C", sub: "Cloud APIs", y: 258, color: "#E8B84A" },
    ].map((srv, i) => (
      <g key={i}>
        <rect x="30" y={srv.y} width="320" height="72" rx="10" fill="#252538" stroke={srv.color} strokeWidth="1.2"/>
        <text x="190" y={srv.y + 30} textAnchor="middle" fill={srv.color} fontFamily="sans-serif" fontSize="14" fontWeight="bold">{srv.name}</text>
        <text x="190" y={srv.y + 50} textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="12">{srv.sub}</text>
      </g>
    ))}
    <circle cx="50" cy="370" r="6" fill="#E8734A" opacity="0.8"/>
    <text x="66" y="374" fill="#555570" fontFamily="sans-serif" fontSize="12">PID: external</text>
  </g>
);

const ConnectionLines = (
  <g>
    {/* Shell connection */}
    <line x1="480" y1="260" x2="700" y2="260" stroke="#6EC8E6" strokeWidth="2.5" strokeDasharray="10 5"/>
    <text x="590" y="248" textAnchor="middle" fill="#6EC8E6" fontFamily="sans-serif" fontSize="13" fontWeight="bold">Shell</text>
    <polygon points="694,254 708,260 694,266" fill="#6EC8E6"/>
    {/* RPC connection */}
    <line x1="480" y1="370" x2="700" y2="370" stroke="#E8B84A" strokeWidth="2.5" strokeDasharray="10 5"/>
    <text x="590" y="358" textAnchor="middle" fill="#E8B84A" fontFamily="sans-serif" fontSize="13" fontWeight="bold">RPC</text>
    <polygon points="694,364 708,370 694,376" fill="#E8B84A"/>
  </g>
);

const MCPTitle = (
  <text x="600" y="52" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="28" fontWeight="bold">MCP</text>
);

const TitleLabel = (
  <g>
    <rect x="440" y="570" width="320" height="48" rx="10" fill="#252538"/>
    <text x="600" y="594" textAnchor="middle" fill="#E8734A" fontFamily="sans-serif" fontSize="16" fontWeight="bold">外部进程</text>
    <text x="600" y="612" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="12">Model Context Protocol</text>
  </g>
);

export const conceptMCPSceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: <defs/>,
  background: Background,
  fragments: [
    { id: "mainProcess", content: MainProcess, enterFrom: { x: -500, y: 0 }, enterDelay: 0, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 6, y: 7 }, exitTo: { x: -600, y: 0 } },
    { id: "externalProcess", content: ExternalProcess, enterFrom: { x: 500, y: 0 }, enterDelay: 100, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 5.5, y: 6.5 }, exitTo: { x: 600, y: 0 } },
    { id: "connectionLines", content: ConnectionLines, enterFrom: { x: 0, y: 0 }, enterDelay: 300, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 5, y: 6 }, exitTo: { x: 0, y: -200 } },
    { id: "mcpTitle", content: MCPTitle, enterFrom: { x: 0, y: -150 }, enterDelay: 200, floatAmp: { x: 8, y: 8 }, floatPeriod: { x: 7, y: 8 }, exitTo: { x: 0, y: -200 } },
    { id: "titleLabel", content: TitleLabel, enterFrom: { x: 0, y: 200 }, enterDelay: 450, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 7, y: 8 }, exitTo: { x: 0, y: 300 } },
  ],
};
