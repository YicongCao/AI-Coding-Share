import type { SvgSceneDef } from "../SvgScene";

const Background = (
  <g>
    <rect width="1200" height="675" fill="#2B2B3D"/>
    <rect width="1200" height="675" fill="url(#bertBgGlow)"/>
  </g>
);

const Defs = (
  <defs>
    <radialGradient id="bertBgGlow" cx="50%" cy="30%" r="60%">
      <stop offset="0%" stopColor="#4A7BCC" stopOpacity="0.12"/>
      <stop offset="100%" stopColor="#4A7BCC" stopOpacity="0"/>
    </radialGradient>
  </defs>
);


const NeuralNetwork = (
  <g transform="translate(200, 130)">
    {Array.from({ length: 4 }, (_, layer) => {
      const colors = ["#6EC8E6", "#5BAD7A", "#E8B84A", "#E8734A"];
      const x = layer * 160;
      return (
        <g key={layer}>
          {Array.from({ length: 7 }, (_, node) => {
            const y = node * 62 + 20;
            return (
              <g key={node}>
                <circle cx={x + 40} cy={y} r="12" fill={colors[layer]} opacity={0.5 + (node % 3) * 0.15}/>
                {layer < 3 && Array.from({ length: 7 }, (_, next) => (
                  <line
                    key={next}
                    x1={x + 52}
                    y1={y}
                    x2={x + 188}
                    y2={next * 62 + 20}
                    stroke={colors[layer]}
                    strokeWidth="0.6"
                    opacity={0.12 + ((node + next) % 4) * 0.05}
                  />
                ))}
              </g>
            );
          })}
          <text x={x + 40} y={470} textAnchor="middle" fontSize="11" fill="#555570" fontFamily="sans-serif">L{layer + 1}</text>
        </g>
      );
    })}
  </g>
);

const BertTitle = (
  <g transform="translate(830, 100)">
    <text x="0" y="0" fontSize="56" fontWeight="bold" fill="#FFFFFF" fontFamily="sans-serif" opacity="0.95">BERT</text>
    <rect x="0" y="15" width="180" height="4" rx="2" fill="#4A7BCC" opacity="0.5"/>
  </g>
);

const ParameterBadge = (
  <g transform="translate(820, 180)">
    <rect x="0" y="0" width="180" height="48" rx="24" fill="#252538" stroke="#E85650" strokeWidth="2"/>
    <text x="90" y="32" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#E85650" fontFamily="sans-serif">0.3 Billion</text>
  </g>
);

const YearTag = (
  <g transform="translate(1020, 180)">
    <rect x="0" y="0" width="72" height="36" rx="8" fill="#252538" stroke="#E8B84A" strokeWidth="1.5"/>
    <text x="36" y="24" textAnchor="middle" fontSize="16" fill="#E8B84A" fontFamily="sans-serif">2018</text>
  </g>
);

const ScaleNote = (
  <g transform="translate(830, 250)">
    <text x="0" y="0" fontSize="15" fill="#E85650" fontFamily="sans-serif" opacity="0.9">语言模型走向大规模的开始</text>
  </g>
);

const ContextLabel = (
  <g transform="translate(840, 295)">
    <text x="0" y="0" fontSize="20" fill="#6EC8E6" fontFamily="sans-serif">上下文理解</text>
    <text x="0" y="28" fontSize="14" fill="#555570" fontFamily="sans-serif">Contextual Understanding</text>
  </g>
);

const OutputBox = (
  <g transform="translate(830, 365)">
    <rect x="0" y="0" width="260" height="200" rx="14" fill="#1E1E2E" stroke="#555570" strokeWidth="1.5"/>
    <text x="20" y="35" fontSize="13" fill="#FFFFFF" fontFamily="sans-serif" opacity="0.7">[CLS] token representation</text>
    {[0, 1, 2, 3, 4].map(i => (
      <g key={i}>
        <rect x="20" y={55 + i * 28} width={160 - i * 15} height="8" rx="4" fill="#4A7BCC" opacity={0.6 - i * 0.08}/>
        <rect x="20" y={67 + i * 28} width={120 - i * 10} height="5" rx="2.5" fill="#555570" opacity="0.25"/>
      </g>
    ))}
  </g>
);

export const bertSceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: Defs,
  background: Background,
  fragments: [
    { id: "network", content: NeuralNetwork, enterFrom: { x: -500, y: 0 }, enterDelay: 0, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 6.5, y: 8 }, exitTo: { x: -600, y: 0 } },
    { id: "title", content: BertTitle, enterFrom: { x: 300, y: -200 }, enterDelay: 50, floatAmp: { x: 16, y: 10 }, floatPeriod: { x: 5, y: 6.5 }, exitTo: { x: 400, y: -250 }, exitSpin: 6 },
    { id: "badge", content: ParameterBadge, enterFrom: { x: 200, y: -150 }, enterDelay: 200, floatAmp: { x: 12, y: 14 }, floatPeriod: { x: 4, y: 5 }, floatRotate: 1.5, exitTo: { x: 300, y: -200 }, exitScale: 1.3 },
    { id: "year", content: YearTag, enterFrom: { x: 250, y: -100 }, enterDelay: 300, floatAmp: { x: 9, y: 11 }, floatPeriod: { x: 5.5, y: 7 }, floatRotate: 1.5, exitTo: { x: 300, y: -150 } },
    { id: "scale-note", content: ScaleNote, enterFrom: { x: 200, y: 0 }, enterDelay: 260, floatAmp: { x: 9, y: 10 }, floatPeriod: { x: 5, y: 6.5 }, exitTo: { x: 300, y: 80 } },
    { id: "context", content: ContextLabel, enterFrom: { x: 200, y: 0 }, enterDelay: 150, floatAmp: { x: 11, y: 13 }, floatPeriod: { x: 6, y: 7.5 }, exitTo: { x: 300, y: 100 } },
    { id: "output", content: OutputBox, enterFrom: { x: 350, y: 200 }, enterDelay: 400, floatAmp: { x: 10, y: 14 }, floatPeriod: { x: 5, y: 6 }, exitTo: { x: 400, y: 300 } },
  ],
};
