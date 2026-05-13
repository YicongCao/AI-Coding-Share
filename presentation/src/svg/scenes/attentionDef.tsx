import type { SvgSceneDef } from "../SvgScene";

const Background = <rect width="1200" height="675" fill="#2B2B3D"/>;

const AttentionMatrix = (
  <g transform="translate(420, 180)">
    {Array.from({ length: 8 }, (_, row) =>
      Array.from({ length: 8 }, (_, col) => {
        const heat = ((row + col) * 37 + row * 13) % 100;
        const opacity = heat > 60 ? 0.7 : heat > 30 ? 0.35 : 0.12;
        return (
          <rect
            key={`${row}-${col}`}
            x={col * 42}
            y={row * 42}
            width="38"
            height="38"
            rx="4"
            fill="#6EC8E6"
            opacity={opacity}
          />
        );
      })
    )}
    <rect x="-2" y="-2" width="340" height="340" rx="8" fill="none" stroke="#555570" strokeWidth="1.5"/>
  </g>
);

const QKVBoxes = (
  <g>
    {[
      { x: 140, label: "Q", color: "#E8B84A" },
      { x: 140, label: "K", color: "#E8734A", yOff: 120 },
      { x: 140, label: "V", color: "#5BAD7A", yOff: 240 },
    ].map((box, i) => (
      <g key={i} transform={`translate(${box.x}, ${220 + (box.yOff || 0)})`}>
        <rect x="0" y="0" width="100" height="80" rx="12" fill="#1E1E2E" stroke={box.color} strokeWidth="2"/>
        <text x="50" y="48" textAnchor="middle" fontSize="28" fontWeight="bold" fill={box.color} fontFamily="sans-serif">{box.label}</text>
        <rect x="15" y="60" width="70" height="5" rx="2.5" fill={box.color} opacity="0.3"/>
      </g>
    ))}
  </g>
);

const ConnectionLines = (
  <g>
    <line x1="250" y1="260" x2="410" y2="300" stroke="#E8B84A" strokeWidth="1.5" opacity="0.5" strokeDasharray="6 3"/>
    <line x1="250" y1="380" x2="410" y2="350" stroke="#E8734A" strokeWidth="1.5" opacity="0.5" strokeDasharray="6 3"/>
    <line x1="250" y1="500" x2="410" y2="420" stroke="#5BAD7A" strokeWidth="1.5" opacity="0.5" strokeDasharray="6 3"/>
  </g>
);

const TitleText = (
  <g transform="translate(420, 60)">
    <text x="170" y="0" textAnchor="middle" fontSize="24" fontWeight="bold" fill="#FFFFFF" fontFamily="sans-serif">Attention Is All You Need</text>
    <text x="170" y="35" textAnchor="middle" fontSize="16" fill="#6EC8E6" fontFamily="sans-serif" opacity="0.85">自注意力机制</text>
  </g>
);

const YearTag = (
  <g transform="translate(900, 100)">
    <rect x="0" y="0" width="72" height="36" rx="8" fill="#252538" stroke="#E8734A" strokeWidth="1.5"/>
    <text x="36" y="24" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#E8734A" fontFamily="sans-serif">2017</text>
  </g>
);

const CoreIdeaLabel = (
  <g transform="translate(820, 205)">
    <rect x="0" y="0" width="260" height="72" rx="12" fill="#1E1E2E" stroke="#6EC8E6" strokeWidth="1.5"/>
    <text x="130" y="30" textAnchor="middle" fontSize="17" fontWeight="bold" fill="#6EC8E6" fontFamily="sans-serif">关注重要 token</text>
    <text x="130" y="54" textAnchor="middle" fontSize="14" fill="#FFFFFF" fontFamily="sans-serif" opacity="0.72">Attention is all you need</text>
  </g>
);

const OutputArrow = (
  <g>
    <line x1="760" y1="350" x2="900" y2="350" stroke="#FFFFFF" strokeWidth="2" opacity="0.5"/>
    <polygon points="900,350 885,342 885,358" fill="#FFFFFF" opacity="0.5"/>
    <rect x="910" y="310" width="180" height="80" rx="12" fill="#1E1E2E" stroke="#555570" strokeWidth="1.5"/>
    <text x="1000" y="345" textAnchor="middle" fontSize="14" fill="#FFFFFF" fontFamily="sans-serif" opacity="0.8">Weighted Sum</text>
    <text x="1000" y="370" textAnchor="middle" fontSize="13" fill="#555570" fontFamily="sans-serif">加权求和输出</text>
  </g>
);

export const attentionSceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: <defs/>,
  background: Background,
  fragments: [
    { id: "matrix", content: AttentionMatrix, enterFrom: { x: 0, y: 400 }, enterDelay: 100, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 6, y: 7 }, exitTo: { x: 0, y: -500 } },
    { id: "qkv", content: QKVBoxes, enterFrom: { x: -350, y: 0 }, enterDelay: 0, floatAmp: { x: 12, y: 14 }, floatPeriod: { x: 5, y: 6.5 }, exitTo: { x: -400, y: 0 } },
    { id: "lines", content: ConnectionLines, enterFrom: { x: -200, y: 0 }, enterDelay: 250, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 4.5, y: 5.5 }, exitTo: { x: -300, y: 0 } },
    { id: "title", content: TitleText, enterFrom: { x: 0, y: -200 }, enterDelay: 50, floatAmp: { x: 14, y: 9 }, floatPeriod: { x: 7, y: 9 }, exitTo: { x: 0, y: -300 }, exitSpin: 4 },
    { id: "year", content: YearTag, enterFrom: { x: 200, y: -150 }, enterDelay: 200, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 5.5, y: 7.5 }, exitTo: { x: 300, y: -200 } },
    { id: "core-idea", content: CoreIdeaLabel, enterFrom: { x: 250, y: 0 }, enterDelay: 320, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 5.5, y: 6.5 }, exitTo: { x: 350, y: 0 } },
    { id: "output", content: OutputArrow, enterFrom: { x: 300, y: 0 }, enterDelay: 400, floatAmp: { x: 11, y: 13 }, floatPeriod: { x: 5, y: 6 }, exitTo: { x: 400, y: 0 } },
  ],
};
