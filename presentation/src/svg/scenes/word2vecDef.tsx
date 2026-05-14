import type { SvgSceneDef } from "../SvgScene";

const Background = (
  <g>
    <rect width="1200" height="675" fill="#2B2B3D"/>
    <rect width="1200" height="675" fill="url(#word2vecBgGlow)"/>
  </g>
);

const Defs = (
  <defs>
    <radialGradient id="word2vecBgGlow" cx="50%" cy="30%" r="60%">
      <stop offset="0%" stopColor="#4A7BCC" stopOpacity="0.12"/>
      <stop offset="100%" stopColor="#4A7BCC" stopOpacity="0"/>
    </radialGradient>
  </defs>
);


const CoordinateAxes = (
  <g>
    <line x1="150" y1="580" x2="150" y2="80" stroke="#555570" strokeWidth="2"/>
    <polygon points="150,80 143,100 157,100" fill="#555570"/>
    <line x1="150" y1="580" x2="950" y2="580" stroke="#555570" strokeWidth="2"/>
    <polygon points="950,580 930,573 930,587" fill="#555570"/>
    <text x="960" y="585" fontSize="14" fill="#555570" fontFamily="sans-serif">dim 1</text>
    <text x="130" y="70" fontSize="14" fill="#555570" fontFamily="sans-serif">dim 2</text>
  </g>
);

const WordDots = (
  <g>
    {[
      { x: 320, y: 200, label: "king", color: "#E8B84A" },
      { x: 380, y: 260, label: "queen", color: "#E8B84A" },
      { x: 500, y: 420, label: "man", color: "#6EC8E6" },
      { x: 550, y: 480, label: "woman", color: "#6EC8E6" },
      { x: 700, y: 300, label: "apple", color: "#5BAD7A" },
      { x: 740, y: 350, label: "orange", color: "#5BAD7A" },
      { x: 780, y: 280, label: "banana", color: "#5BAD7A" },
      { x: 280, y: 450, label: "cat", color: "#E8734A" },
      { x: 330, y: 500, label: "dog", color: "#E8734A" },
    ].map((w, i) => (
      <g key={i}>
        <circle cx={w.x} cy={w.y} r="6" fill={w.color} opacity="0.9"/>
        <text x={w.x + 10} y={w.y + 5} fontSize="13" fill={w.color} fontFamily="sans-serif" opacity="0.85">{w.label}</text>
      </g>
    ))}
  </g>
);

const ClusterHighlights = (
  <g>
    <ellipse cx="350" cy="230" rx="80" ry="60" fill="none" stroke="#E8B84A" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.4"/>
    <ellipse cx="525" cy="450" rx="70" ry="55" fill="none" stroke="#6EC8E6" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.4"/>
    <ellipse cx="740" cy="310" rx="75" ry="60" fill="none" stroke="#5BAD7A" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.4"/>
    <ellipse cx="305" cy="475" rx="60" ry="50" fill="none" stroke="#E8734A" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.4"/>
  </g>
);

const EmbeddingBadge = (
  <g transform="translate(455, 110)">
    <rect x="0" y="0" width="290" height="74" rx="14" fill="#1E1E2E" stroke="#E8B84A" strokeWidth="2"/>
    <text x="145" y="36" textAnchor="middle" fontSize="28" fontWeight="bold" fill="#E8B84A" fontFamily="sans-serif">Embedding</text>
    <text x="145" y="58" textAnchor="middle" fontSize="14" fill="#FFFFFF" fontFamily="sans-serif" opacity="0.72">词 → 向量空间</text>
  </g>
);

const TitleTag = (
  <g transform="translate(950, 100)">
    <rect x="0" y="0" width="180" height="50" rx="10" fill="#1E1E2E" stroke="#6EC8E6" strokeWidth="1.5"/>
    <text x="90" y="33" textAnchor="middle" fontSize="22" fontWeight="bold" fill="#6EC8E6" fontFamily="sans-serif">Word2Vec</text>
  </g>
);

const YearLabel = (
  <g transform="translate(980, 170)">
    <rect x="0" y="0" width="72" height="32" rx="6" fill="#252538" stroke="#E8B84A" strokeWidth="1"/>
    <text x="36" y="22" textAnchor="middle" fontSize="16" fill="#E8B84A" fontFamily="sans-serif">2013</text>
  </g>
);

const ChineseLabel = (
  <g transform="translate(960, 220)">
    <text x="0" y="0" fontSize="18" fill="#FFFFFF" fontFamily="sans-serif" opacity="0.8">词向量诞生</text>
  </g>
);

export const word2vecSceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: Defs,
  background: Background,
  fragments: [
    { id: "axes", content: CoordinateAxes, enterFrom: { x: -400, y: 0 }, enterDelay: 0, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 7, y: 8 }, exitTo: { x: -500, y: 0 } },
    { id: "dots", content: WordDots, enterFrom: { x: 0, y: 300 }, enterDelay: 150, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 5, y: 6 }, exitTo: { x: 0, y: -400 }, exitScale: 0.6 },
    { id: "clusters", content: ClusterHighlights, enterFrom: { x: 0, y: 200 }, enterDelay: 350, floatAmp: { x: 12, y: 14 }, floatPeriod: { x: 6, y: 7.5 }, exitTo: { x: 0, y: -350 } },
    { id: "embedding", content: EmbeddingBadge, enterFrom: { x: 0, y: -180 }, enterDelay: 300, floatAmp: { x: 10, y: 9 }, floatPeriod: { x: 5.5, y: 6.5 }, exitTo: { x: 0, y: -260 }, exitScale: 1.1 },
    { id: "title", content: TitleTag, enterFrom: { x: 300, y: -200 }, enterDelay: 100, floatAmp: { x: 14, y: 10 }, floatPeriod: { x: 4, y: 5 }, exitTo: { x: 400, y: -300 }, exitSpin: 8 },
    { id: "year", content: YearLabel, enterFrom: { x: 200, y: -150 }, enterDelay: 250, floatAmp: { x: 10, y: 8 }, floatPeriod: { x: 5.5, y: 7 }, floatRotate: 1.5, exitTo: { x: 300, y: -200 } },
    { id: "chinese", content: ChineseLabel, enterFrom: { x: 200, y: 0 }, enterDelay: 400, floatAmp: { x: 9, y: 11 }, floatPeriod: { x: 6.5, y: 8 }, exitTo: { x: 300, y: 100 } },
  ],
};
