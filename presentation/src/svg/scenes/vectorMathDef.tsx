import type { SvgSceneDef } from "../SvgScene";

const Background = (
  <g>
    <rect width="1200" height="675" fill="#2B2B3D"/>
    <rect width="1200" height="675" fill="url(#vectorMathBgGlow)"/>
  </g>
);

const Defs = (
  <defs>
    <radialGradient id="vectorMathBgGlow" cx="50%" cy="30%" r="60%">
      <stop offset="0%" stopColor="#4A7BCC" stopOpacity="0.12"/>
      <stop offset="100%" stopColor="#4A7BCC" stopOpacity="0"/>
    </radialGradient>
  </defs>
);


const FormulaCards = (
  <g>
    {[
      { x: 120, word: "King", emoji: "🤴", color: "#E8B84A" },
      { x: 340, word: "Man", emoji: "👨", color: "#6EC8E6" },
      { x: 560, word: "Woman", emoji: "👩", color: "#E8734A" },
      { x: 830, word: "Queen", emoji: "👸", color: "#5BAD7A" },
    ].map((card, i) => (
      <g key={i} transform={`translate(${card.x}, 270)`}>
        <rect x="0" y="0" width="160" height="80" rx="14" fill="#1E1E2E" stroke={card.color} strokeWidth="2"/>
        <text x="80" y="30" textAnchor="middle" fontSize="24" fill="#FFFFFF" fontFamily="sans-serif" opacity="0.9">{card.emoji}</text>
        <text x="80" y="58" textAnchor="middle" fontSize="24" fontWeight="bold" fill={card.color} fontFamily="sans-serif">{card.word}</text>
        <rect x="20" y="66" width="120" height="4" rx="2" fill={card.color} opacity="0.3"/>
      </g>
    ))}
  </g>
);

const Operators = (
  <g>
    <text x="300" y="320" textAnchor="middle" fontSize="36" fontWeight="bold" fill="#E85650" fontFamily="sans-serif">−</text>
    <text x="520" y="320" textAnchor="middle" fontSize="36" fontWeight="bold" fill="#5BAD7A" fontFamily="sans-serif">+</text>
    <text x="755" y="320" textAnchor="middle" fontSize="36" fontWeight="bold" fill="#FFFFFF" fontFamily="sans-serif">=</text>
  </g>
);

const ArrowVectors = (
  <g>
    <line x1="200" y1="380" x2="200" y2="450" stroke="#E8B84A" strokeWidth="2" opacity="0.6"/>
    <polygon points="200,450 194,438 206,438" fill="#E8B84A" opacity="0.6"/>
    <line x1="420" y1="380" x2="420" y2="450" stroke="#6EC8E6" strokeWidth="2" opacity="0.6"/>
    <polygon points="420,450 414,438 426,438" fill="#6EC8E6" opacity="0.6"/>
    <line x1="640" y1="380" x2="640" y2="450" stroke="#E8734A" strokeWidth="2" opacity="0.6"/>
    <polygon points="640,450 634,438 646,438" fill="#E8734A" opacity="0.6"/>
    <line x1="910" y1="380" x2="910" y2="450" stroke="#5BAD7A" strokeWidth="2" opacity="0.6"/>
    <polygon points="910,450 904,438 916,438" fill="#5BAD7A" opacity="0.6"/>
    <path d="M200,470 Q560,530 910,470" fill="none" stroke="#555570" strokeWidth="1.5" strokeDasharray="8 4" opacity="0.5"/>
    <polygon points="910,470 898,464 898,476" fill="#555570" opacity="0.5"/>
  </g>
);

const TitleLabel = (
  <g transform="translate(400, 100)">
    <text x="200" y="0" textAnchor="middle" fontSize="28" fontWeight="bold" fill="#FFFFFF" fontFamily="sans-serif">词向量运算</text>
  </g>
);

const SubtitleQuote = (
  <g transform="translate(250, 560)">
    <rect x="0" y="0" width="700" height="44" rx="8" fill="#252538" opacity="0.7"/>
    <text x="350" y="30" textAnchor="middle" fontSize="16" fill="#555570" fontFamily="sans-serif">Vector("King") − Vector("Man") + Vector("Woman") ≈ Vector("Queen")</text>
  </g>
);

const DecorationDots = (
  <g>
    {[
      { x: 80, y: 150 }, { x: 1100, y: 180 }, { x: 100, y: 530 },
      { x: 1080, y: 520 }, { x: 600, y: 160 },
    ].map((d, i) => (
      <circle key={i} cx={d.x} cy={d.y} r="3" fill="#555570" opacity={0.3 + i * 0.08}/>
    ))}
  </g>
);

export const vectorMathSceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: Defs,
  background: Background,
  fragments: [
    { id: "cards", content: FormulaCards, enterFrom: { x: 0, y: 400 }, enterDelay: 0, floatAmp: { x: 10, y: 14 }, floatPeriod: { x: 5, y: 6 }, exitTo: { x: 0, y: -500 }, exitScale: 0.8 },
    { id: "operators", content: Operators, enterFrom: { x: 0, y: -200 }, enterDelay: 200, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 4, y: 5.5 }, exitTo: { x: 0, y: 300 } },
    { id: "arrows", content: ArrowVectors, enterFrom: { x: 0, y: 250 }, enterDelay: 350, floatAmp: { x: 12, y: 16 }, floatPeriod: { x: 6, y: 7 }, exitTo: { x: 0, y: 400 } },
    { id: "title", content: TitleLabel, enterFrom: { x: 0, y: -250 }, enterDelay: 100, floatAmp: { x: 10, y: 8 }, floatPeriod: { x: 7, y: 8.5 }, exitTo: { x: 0, y: -300 }, exitSpin: 5 },
    { id: "subtitle", content: SubtitleQuote, enterFrom: { x: 0, y: 200 }, enterDelay: 500, floatAmp: { x: 9, y: 11 }, floatPeriod: { x: 5.5, y: 6.5 }, exitTo: { x: 0, y: 300 } },
    { id: "deco", content: DecorationDots, enterFrom: { x: 0, y: -100 }, enterDelay: 600, floatAmp: { x: 14, y: 18 }, floatPeriod: { x: 3.5, y: 4.5 }, exitTo: { x: 0, y: -200 } },
  ],
};
