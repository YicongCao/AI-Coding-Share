import type { SvgSceneDef } from "../SvgScene";

const Background = <rect width="1200" height="675" fill="#2B2B3D"/>;

const CodeWindow = (
  <g transform="translate(340, 100)">
    <rect x="0" y="0" width="520" height="380" rx="12" fill="#1E1E2E" stroke="#555570" strokeWidth="1"/>
    <circle cx="22" cy="20" r="5" fill="#E85650"/>
    <circle cx="40" cy="20" r="5" fill="#E8B84A"/>
    <circle cx="58" cy="20" r="5" fill="#5BAD7A"/>
    <line x1="0" y1="38" x2="520" y2="38" stroke="#555570" strokeWidth="0.5"/>
    {Array.from({ length: 14 }, (_, i) => {
      const y = 54 + i * 22;
      const colors = ["#6EC8E6", "#5BAD7A", "#E8B84A", "#E8734A", "#4A7BCC"];
      return (
        <g key={i}>
          <text x="16" y={y + 12} fill="#555570" fontFamily="sans-serif" fontSize="11" opacity="0.5">{i + 1}</text>
          <rect x={40 + (i % 3) * 8} y={y + 4} width={50 + (i % 4) * 15} height="5" rx="2.5" fill={colors[i % 5]} opacity={0.5 + (i % 3) * 0.15}/>
          <rect x={100 + (i % 3) * 20} y={y + 4} width={40 + (i % 5) * 12} height="5" rx="2.5" fill="#555570" opacity={0.3 + (i % 2) * 0.1}/>
        </g>
      );
    })}
  </g>
);

const MagnifyingGlass = (
  <g transform="translate(280, 220)">
    <circle cx="0" cy="0" r="80" fill="none" stroke="#6EC8E6" strokeWidth="4" opacity="0.7"/>
    <circle cx="0" cy="0" r="74" fill="#6EC8E6" opacity="0.06"/>
    <line x1="56" y1="56" x2="100" y2="100" stroke="#6EC8E6" strokeWidth="6" strokeLinecap="round" opacity="0.7"/>
    <rect x="86" y="86" width="28" height="12" rx="4" fill="#6EC8E6" opacity="0.5" transform="rotate(45,100,92)"/>
  </g>
);

const QuestionBubbles = (
  <g>
    {[
      { x: 920, y: 160, size: 50 },
      { x: 980, y: 280, size: 40 },
      { x: 940, y: 400, size: 44 },
    ].map((b, i) => (
      <g key={i} transform={`translate(${b.x},${b.y})`}>
        <rect x={-b.size / 2} y={-b.size / 2} width={b.size} height={b.size} rx="10" fill="#252538" stroke="#E8B84A" strokeWidth="1.2"/>
        <text x="0" y={b.size * 0.15} textAnchor="middle" fill="#E8B84A" fontFamily="sans-serif" fontSize={b.size * 0.6} fontWeight="bold">?</text>
      </g>
    ))}
  </g>
);

const Checkmark = (
  <g transform="translate(1040, 300)">
    <circle cx="0" cy="0" r="32" fill="#5BAD7A" opacity="0.2"/>
    <circle cx="0" cy="0" r="26" fill="none" stroke="#5BAD7A" strokeWidth="3"/>
    <path d="M-12,2 L-4,12 L14,-8" fill="none" stroke="#5BAD7A" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
  </g>
);

const TitleLabel = (
  <g>
    <rect x="490" y="530" width="220" height="48" rx="10" fill="#252538"/>
    <text x="600" y="560" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="22" fontWeight="bold">通读代码</text>
    <text x="600" y="600" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="13">Read Code First</text>
  </g>
);

export const readCodeSceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: <defs/>,
  background: Background,
  fragments: [
    { id: "codeWindow", content: CodeWindow, enterFrom: { x: 0, y: 400 }, enterDelay: 0, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 6, y: 7 }, exitTo: { x: 0, y: -500 } },
    { id: "magnifyingGlass", content: MagnifyingGlass, enterFrom: { x: -400, y: -200 }, enterDelay: 150, floatAmp: { x: 16, y: 18 }, floatPeriod: { x: 5, y: 6 }, exitTo: { x: -500, y: -300 }, exitSpin: -10 },
    { id: "questionBubbles", content: QuestionBubbles, enterFrom: { x: 400, y: 0 }, enterDelay: 300, floatAmp: { x: 14, y: 20 }, floatPeriod: { x: 4.5, y: 5.5 }, exitTo: { x: 500, y: 0 } },
    { id: "checkmark", content: Checkmark, enterFrom: { x: 300, y: -200 }, enterDelay: 450, floatAmp: { x: 12, y: 16 }, floatPeriod: { x: 4, y: 5 }, exitTo: { x: 400, y: -300 }, exitScale: 1.3 },
    { id: "titleLabel", content: TitleLabel, enterFrom: { x: 0, y: 200 }, enterDelay: 500, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 7, y: 8 }, exitTo: { x: 0, y: 300 } },
  ],
};
