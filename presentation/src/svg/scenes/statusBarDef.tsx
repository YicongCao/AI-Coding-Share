import { useEffect, useState } from "react";
import type { SvgSceneDef } from "../SvgScene";

const Background = (
  <g>
    <rect width="1200" height="675" fill="#2B2B3D"/>
    <rect width="1200" height="675" fill="url(#statusBarBgGlow)"/>
  </g>
);

const Defs = (
  <defs>
    <radialGradient id="statusBarBgGlow" cx="50%" cy="30%" r="60%">
      <stop offset="0%" stopColor="#6EC8E6" stopOpacity="0.12"/>
      <stop offset="100%" stopColor="#6EC8E6" stopOpacity="0"/>
    </radialGradient>
  </defs>
);


const Title = (
  <g>
    <text x="600" y="80" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="28" fontWeight="bold">状态条</text>
    <text x="600" y="108" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="14">Status Bar — 给用户期待</text>
  </g>
);

const STATUS_LINES = [
  { text: "Reading project structure...", color: "#5BAD7A" },
  { text: "Analyzing dependencies...", color: "#6EC8E6" },
  { text: "Generating solution...", color: "#4A7BCC" },
];

const CHAR_MS = 60;
const LINE_PAUSE = 500;
const CYCLE_PAUSE = 1600;

function StatusBarUI() {
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [displayLines, setDisplayLines] = useState<string[]>([]);

  useEffect(() => {
    const line = STATUS_LINES[lineIdx];
    if (!line) {
      const t = setTimeout(() => { setDisplayLines([]); setLineIdx(0); setCharIdx(0); }, CYCLE_PAUSE);
      return () => clearTimeout(t);
    }
    if (charIdx <= line.text.length) {
      const t = setTimeout(() => {
        setDisplayLines((prev) => { const n = [...prev]; n[lineIdx] = line.text.slice(0, charIdx); return n; });
        setCharIdx((c) => c + 1);
      }, charIdx === 0 ? LINE_PAUSE : CHAR_MS);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => { setLineIdx((l) => l + 1); setCharIdx(0); }, LINE_PAUSE);
    return () => clearTimeout(t);
  }, [lineIdx, charIdx]);

  const cursorVisible = lineIdx < STATUS_LINES.length;
  const cursorY = 65 + lineIdx * 30;
  const cursorX = 30 + 22 + (displayLines[lineIdx]?.length ?? 0) * 8.4;

  return (
    <g transform="translate(150, 200)">
      <rect x="0" y="0" width="900" height="200" rx="16" fill="#1E1E2E" stroke="#555570" strokeWidth="2"/>
      <rect x="0" y="0" width="900" height="48" rx="16" fill="#252538" stroke="#FFFFFF" strokeOpacity="0.1" strokeWidth="1.5"/>
      <rect x="0" y="32" width="900" height="16" fill="#252538" stroke="#FFFFFF" strokeOpacity="0.1" strokeWidth="1.5"/>
      <circle cx="28" cy="24" r="6" fill="#E85650" stroke="#F07870" strokeOpacity="0.3" strokeWidth="1"/>
      <circle cx="50" cy="24" r="6" fill="#E8B84A" stroke="#F0D070" strokeOpacity="0.3" strokeWidth="1"/>
      <circle cx="72" cy="24" r="6" fill="#5BAD7A" stroke="#7DD49A" strokeOpacity="0.3" strokeWidth="1"/>
      <text x="450" y="30" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="13">Agent Status Panel</text>

      {STATUS_LINES.map((line, i) => {
        const shown = displayLines[i] ?? "";
        return (
          <g key={i} transform={`translate(30, ${65 + i * 30})`}>
            <circle cx="8" cy="8" r="5" fill={line.color} opacity={shown ? 0.8 : 0.2}/>
            <text x="22" y="13" fill={line.color} fontFamily="monospace" fontSize="14">{shown}</text>
          </g>
        );
      })}

      {cursorVisible && (
        <rect x={cursorX} y={cursorY} width="3" height="18" rx="1.5" fill="#5BAD7A" opacity="0.9"/>
      )}

      <g transform="translate(30, 155)">
        <rect x="0" y="0" width="12" height="18" rx="1" fill="#FFFFFF" opacity="0.6"/>
        <rect x="16" y="0" width="12" height="18" rx="1" fill="#FFFFFF" opacity="0.3"/>
        <rect x="32" y="0" width="12" height="18" rx="1" fill="#FFFFFF" opacity="0.15"/>
        <text x="58" y="14" fill="#555570" fontFamily="sans-serif" fontSize="12">typing...</text>
      </g>

      <rect x="600" y="60" width="270" height="120" rx="10" fill="#252538" stroke="#555570" strokeWidth="1"/>
      <text x="735" y="90" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="13" opacity="0.55">现在正在做</text>
      <text x="735" y="122" textAnchor="middle" fill="#6EC8E6" fontFamily="sans-serif" fontSize="18" fontWeight="bold">分析报错上下文</text>
      <text x="735" y="150" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="12">接下来会给出修改方案</text>
      <circle cx="715" cy="166" r="3" fill="#E8B84A" opacity="0.55"/>
      <circle cx="735" cy="166" r="3" fill="#E8B84A" opacity="0.35"/>
      <circle cx="755" cy="166" r="3" fill="#E8B84A" opacity="0.2"/>
    </g>
  );
}

const TypewriterDots = (
  <g transform="translate(500, 460)">
    {[0, 1, 2].map(i => (
      <circle key={i} cx={i * 20} cy="0" r="5" fill="#FFFFFF" opacity={0.3 + i * 0.2}/>
    ))}
    <text x="80" y="5" fill="#555570" fontFamily="sans-serif" fontSize="13">Typewriter effect</text>
  </g>
);

const ExpectationLabel = (
  <g transform="translate(150, 500)">
    <rect x="0" y="0" width="200" height="50" rx="25" fill="#E8B84A" opacity="0.15" stroke="#F0D070" strokeOpacity="0.3" strokeWidth="1"/>
    <text x="100" y="32" textAnchor="middle" fill="#E8B84A" fontFamily="sans-serif" fontSize="18" fontWeight="bold">给用户期待</text>
  </g>
);

const Caption = (
  <text x="600" y="620" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="14" opacity="0.5">让用户知道 Agent 正在做什么，而非空等</text>
);

export const statusBarSceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: Defs,
  background: Background,
  fragments: [
    { id: "title", content: Title, enterFrom: { x: 0, y: -300 }, enterDelay: 0, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 8, y: 9 }, exitTo: { x: 0, y: -400 } },
    { id: "statusBar", content: <StatusBarUI />, enterFrom: { x: 0, y: 400 }, enterDelay: 150, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 7, y: 8 }, exitTo: { x: 0, y: 500 }, exitScale: 0.9 },
    { id: "dots", content: TypewriterDots, enterFrom: { x: 0, y: 200 }, enterDelay: 350, floatAmp: { x: 14, y: 18 }, floatPeriod: { x: 4, y: 5 }, exitTo: { x: 0, y: 200 } },
    { id: "expectation", content: ExpectationLabel, enterFrom: { x: -400, y: 200 }, enterDelay: 450, floatAmp: { x: 16, y: 20 }, floatPeriod: { x: 4.5, y: 5.5 }, exitTo: { x: -400, y: 200 }, exitSpin: -6 },
    { id: "caption", content: Caption, enterFrom: { x: 0, y: 200 }, enterDelay: 550, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 8, y: 9 }, exitTo: { x: 0, y: 200 } },
  ],
};
