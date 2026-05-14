import type { SvgSceneDef } from "../SvgScene";

const Background = (
  <g>
    <rect width="1200" height="675" fill="#2B2B3D"/>
    <rect width="1200" height="675" fill="url(#hmmStatesBgGlow)"/>
  </g>
);

const states = [
  { x: 180, y: 200, label: "S₁", color: "#4A7BCC" },
  { x: 390, y: 200, label: "S₂", color: "#5BAD7A" },
  { x: 600, y: 200, label: "S₃", color: "#E8B84A" },
  { x: 810, y: 200, label: "S₄", color: "#E8734A" },
  { x: 1020, y: 200, label: "S₅", color: "#6EC8E6" },
];

const transitionProbs = [
  { from: 0, to: 1, label: "0.6" },
  { from: 1, to: 2, label: "0.7" },
  { from: 2, to: 3, label: "0.4" },
  { from: 3, to: 4, label: "0.5" },
  { from: 1, to: 0, label: "0.3", curve: -40 },
  { from: 3, to: 2, label: "0.3", curve: -40 },
];

const StateNodes = (
  <g>
    {states.map((s, i) => (
      <g key={i}>
        <circle cx={s.x} cy={s.y} r="38" fill="#1E1E2E" stroke={s.color} strokeWidth="2.5"/>
        <circle cx={s.x} cy={s.y} r="32" fill="none" stroke={s.color} strokeWidth="1" opacity="0.3"/>
        <text x={s.x} y={s.y + 6} textAnchor="middle" fill={s.color} fontFamily="sans-serif" fontSize="20" fontWeight="bold">{s.label}</text>
        {/* Self-loop arc */}
        <path d={`M${s.x - 12},${s.y - 38} Q${s.x},${s.y - 72} ${s.x + 12},${s.y - 38}`} fill="none" stroke={s.color} strokeWidth="1.5" opacity="0.4"/>
        <text x={s.x} y={s.y - 60} textAnchor="middle" fill={s.color} fontFamily="sans-serif" fontSize="10" opacity="0.5">{(0.4 - i * 0.05).toFixed(1)}</text>
      </g>
    ))}
  </g>
);

const TransitionArrows = (
  <g>
    {transitionProbs.map((t, i) => {
      const sx = states[t.from].x + 38;
      const ex = states[t.to].x - 38;
      const y = 200;
      const cy = y + (t.curve ?? 0);
      const mx = (sx + ex) / 2;
      const my = cy - 20;
      return (
        <g key={i}>
          <path
            d={t.curve ? `M${sx},${y} Q${mx},${cy} ${ex},${y}` : `M${sx},${y} L${ex},${y}`}
            fill="none" stroke="#555570" strokeWidth="2" markerEnd="url(#arrowHead)"
          />
          <text x={mx} y={my} textAnchor="middle" fill="#E8B84A" fontFamily="sans-serif" fontSize="12" fontWeight="bold">{t.label}</text>
        </g>
      );
    })}
  </g>
);

const observations = [
  { x: 180, label: "O₁" },
  { x: 390, label: "O₂" },
  { x: 600, label: "O₃" },
  { x: 810, label: "O₄" },
  { x: 1020, label: "O₅" },
];

const ObservationNodes = (
  <g>
    {observations.map((o, i) => (
      <g key={i}>
        {/* Dashed emission line */}
        <line x1={states[i].x} y1={states[i].y + 38} x2={o.x} y2={400} stroke="#555570" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.5"/>
        {/* Observation circle */}
        <circle cx={o.x} cy={420} r="24" fill="#252538" stroke="#555570" strokeWidth="1.5"/>
        <text x={o.x} y={426} textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="14" opacity="0.8">{o.label}</text>
        {/* Emission probability */}
        <text x={o.x + 18} y={380} textAnchor="start" fill="#E8734A" fontFamily="sans-serif" fontSize="10" opacity="0.6">{(0.5 + i * 0.08).toFixed(2)}</text>
      </g>
    ))}
  </g>
);

const HmmTitle = (
  <g>
    <rect x="440" y="520" width="320" height="68" rx="12" fill="#1E1E2E" stroke="#4A7BCC" strokeWidth="1.5"/>
    <text x="600" y="550" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="24" fontWeight="bold">HMM</text>
    <text x="600" y="574" textAnchor="middle" fill="#6EC8E6" fontFamily="sans-serif" fontSize="15">隐马尔可夫模型</text>
  </g>
);

const ProbTag = (
  <g>
    <rect x="50" y="520" width="150" height="44" rx="8" fill="#252538" stroke="#E8B84A" strokeWidth="1.2"/>
    <text x="125" y="548" textAnchor="middle" fill="#E8B84A" fontFamily="sans-serif" fontSize="15" fontWeight="bold">概率模型</text>
    <text x="125" y="580" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="11">Probability Model</text>
  </g>
);

const FormulaHint = (
  <g opacity="0.5">
    <rect x="900" y="520" width="220" height="58" rx="8" fill="#1E1E2E"/>
    <text x="1010" y="543" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="13">P(O|λ) = Σ P(O|Q,λ)P(Q|λ)</text>
    <text x="1010" y="564" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="11">前向算法 Forward Algorithm</text>
  </g>
);

const Defs = (
  <defs>
    <marker id="arrowHead" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,1 L10,5 L0,9 Z" fill="#555570"/>
    </marker>
    <radialGradient id="hmmStatesBgGlow" cx="50%" cy="30%" r="60%">
      <stop offset="0%" stopColor="#4A7BCC" stopOpacity="0.12"/>
      <stop offset="100%" stopColor="#4A7BCC" stopOpacity="0"/>
    </radialGradient>
  </defs>
);

export const hmmStatesSceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: Defs,
  background: Background,
  fragments: [
    { id: "states", content: StateNodes, enterFrom: { x: 0, y: -400 }, enterDelay: 0, floatAmp: { x: 10, y: 14 }, floatPeriod: { x: 5.5, y: 7.0 }, exitTo: { x: 0, y: -500 }, exitSpin: 3 },
    { id: "arrows", content: TransitionArrows, enterFrom: { x: 600, y: 0 }, enterDelay: 200, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 6.0, y: 8.0 }, exitTo: { x: -600, y: 0 } },
    { id: "observations", content: ObservationNodes, enterFrom: { x: 0, y: 350 }, enterDelay: 300, floatAmp: { x: 12, y: 16 }, floatPeriod: { x: 4.5, y: 5.5 }, exitTo: { x: 0, y: 400 } },
    { id: "hmmTitle", content: HmmTitle, enterFrom: { x: 0, y: 300 }, enterDelay: 400, floatAmp: { x: 14, y: 12 }, floatPeriod: { x: 5.0, y: 6.5 }, exitTo: { x: 0, y: 350 }, exitScale: 0.7 },
    { id: "probTag", content: ProbTag, enterFrom: { x: -350, y: 0 }, enterDelay: 500, floatAmp: { x: 18, y: 14 }, floatPeriod: { x: 3.8, y: 5.2 }, exitTo: { x: -400, y: 0 }, exitSpin: -6 },
    { id: "formula", content: FormulaHint, enterFrom: { x: 400, y: 200 }, enterDelay: 600, floatAmp: { x: 10, y: 8 }, floatPeriod: { x: 6.5, y: 8.0 }, exitTo: { x: 450, y: 250 } },
  ],
};
