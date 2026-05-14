import type { SvgSceneDef } from "../SvgScene";

const Background = (
  <g>
    <rect width="1200" height="675" fill="#2B2B3D"/>
    <rect width="1200" height="675" fill="url(#conceptToolsBgGlow)"/>
  </g>
);

const Defs = (
  <defs>
    <radialGradient id="conceptToolsBgGlow" cx="50%" cy="30%" r="60%">
      <stop offset="0%" stopColor="#4A7BCC" stopOpacity="0.12"/>
      <stop offset="100%" stopColor="#4A7BCC" stopOpacity="0"/>
    </radialGradient>
  </defs>
);


const CodeEditor = (
  <g transform="translate(80, 100)">
    <rect x="0" y="0" width="400" height="420" rx="12" fill="#1E1E2E" stroke="#555570" strokeWidth="1"/>
    <circle cx="22" cy="20" r="5" fill="#E85650"/>
    <circle cx="40" cy="20" r="5" fill="#E8B84A"/>
    <circle cx="58" cy="20" r="5" fill="#5BAD7A"/>
    <line x1="0" y1="38" x2="400" y2="38" stroke="#555570" strokeWidth="0.5"/>
    <text x="20" y="65" fill="#6EC8E6" fontFamily="monospace" fontSize="13" opacity="0.8">{"async function"}</text>
    <text x="160" y="65" fill="#E8B84A" fontFamily="monospace" fontSize="13" opacity="0.8">{"think()"}</text>
    <text x="240" y="65" fill="#555570" fontFamily="monospace" fontSize="13" opacity="0.6">{"{"}</text>
    <text x="34" y="88" fill="#555570" fontFamily="monospace" fontSize="13" opacity="0.6">{"const result ="}</text>
    <text x="34" y="111" fill="#6EC8E6" fontFamily="monospace" fontSize="13" opacity="0.7">{"  await"}</text>
    <text x="100" y="111" fill="#5BAD7A" fontFamily="monospace" fontSize="13" opacity="0.8">{"callTool("}</text>
    <text x="48" y="134" fill="#E8734A" fontFamily="monospace" fontSize="13" opacity="0.7">{"    'readFile',"}</text>
    <text x="48" y="157" fill="#E8734A" fontFamily="monospace" fontSize="13" opacity="0.7">{"    { path: '...' }"}</text>
    <text x="34" y="180" fill="#555570" fontFamily="monospace" fontSize="13" opacity="0.6">{"  );"}</text>
    <text x="34" y="210" fill="#4A7BCC" fontFamily="monospace" fontSize="13" opacity="0.7">{"  // SSE stream back"}</text>
    <text x="34" y="233" fill="#6EC8E6" fontFamily="monospace" fontSize="13" opacity="0.7">{"  yield"}</text>
    <text x="80" y="233" fill="#5BAD7A" fontFamily="monospace" fontSize="13" opacity="0.8">{"result;"}</text>
    <text x="20" y="256" fill="#555570" fontFamily="monospace" fontSize="13" opacity="0.6">{"}"}</text>
    {Array.from({ length: 7 }, (_, i) => (
      <g key={i}>
        <rect x="20" y={280 + i * 18} width={60 + (i % 3) * 30} height="5" rx="2.5" fill="#555570" opacity={0.2 + (i % 3) * 0.08}/>
        <rect x={90 + (i % 3) * 30} y={280 + i * 18} width={50 + (i % 2) * 20} height="5" rx="2.5" fill="#555570" opacity={0.15 + (i % 2) * 0.08}/>
      </g>
    ))}
  </g>
);

const SseArrow = (
  <g>
    <line x1="510" y1="310" x2="660" y2="310" stroke="#E8B84A" strokeWidth="3" strokeDasharray="12 6" opacity="0.7"/>
    <polygon points="660,300 688,310 660,320" fill="#E8B84A" opacity="0.7"/>
    <text x="585" y="295" textAnchor="middle" fill="#E8B84A" fontFamily="sans-serif" fontSize="13" fontWeight="bold">SSE / Event</text>
  </g>
);

const FunctionBlocks = (
  <g transform="translate(720, 95)">
    <rect x="-20" y="-20" width="390" height="450" rx="16" fill="#E8B84A" opacity="0.08"/>
    {[
      { name: "readFile()", color: "#5BAD7A", desc: "读取文件" },
      { name: "writeFile()", color: "#6EC8E6", desc: "写入文件" },
      { name: "grep()", color: "#E8734A", desc: "搜索代码" },
      { name: "shell()", color: "#4A7BCC", desc: "执行命令" },
      { name: "editFile()", color: "#E8B84A", desc: "编辑文件" },
    ].map((fn, i) => (
      <g key={i} transform={`translate(0,${i * 82})`}>
        <rect x="0" y="0" width="350" height="68" rx="10" fill="#1E1E2E" stroke={fn.color} strokeWidth="1.5"/>
        <text x="24" y="28" fill={fn.color} fontFamily="monospace" fontSize="15" fontWeight="bold">{fn.name}</text>
        <text x="24" y="50" fill="#555570" fontFamily="sans-serif" fontSize="12">{fn.desc}</text>
        <path d={`M310,20 L330,34 L310,48`} fill="none" stroke={fn.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
      </g>
    ))}
  </g>
);

const TitleLabel = (
  <g>
    <rect x="350" y="580" width="300" height="44" rx="10" fill="#252538" stroke="#FFFFFF" strokeOpacity="0.1" strokeWidth="1.5"/>
    <text x="500" y="608" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="20" fontWeight="bold">Tools = 回调函数</text>
  </g>
);

const CallbackArrows = (
  <g stroke="#555570" strokeWidth="1" opacity="0.3" fill="none">
    <path d="M688,340 Q700,380 688,400" strokeDasharray="4 3"/>
    <path d="M688,240 Q700,220 688,200" strokeDasharray="4 3"/>
  </g>
);

export const conceptToolsSceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: Defs,
  background: Background,
  fragments: [
    { id: "codeEditor", content: CodeEditor, enterFrom: { x: -500, y: 0 }, enterDelay: 0, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 6, y: 7 }, exitTo: { x: -600, y: 0 } },
    { id: "sseArrow", content: SseArrow, enterFrom: { x: 0, y: 0 }, enterDelay: 200, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 5, y: 6 }, exitTo: { x: 0, y: -200 } },
    { id: "functionBlocks", content: FunctionBlocks, enterFrom: { x: 500, y: 0 }, enterDelay: 100, floatAmp: { x: 12, y: 14 }, floatPeriod: { x: 5.5, y: 6.5 }, exitTo: { x: 600, y: 0 } },
    { id: "titleLabel", content: TitleLabel, enterFrom: { x: 0, y: 200 }, enterDelay: 400, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 7, y: 8 }, exitTo: { x: 0, y: 300 } },
    { id: "callbackArrows", content: CallbackArrows, enterFrom: { x: 0, y: 0 }, enterDelay: 500, floatAmp: { x: 10, y: 10 }, floatPeriod: { x: 4, y: 5 }, exitTo: { x: 200, y: 0 } },
  ],
};
