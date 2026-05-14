import type { SvgSceneDef } from "../SvgScene";

const Background = (
  <g>
    <rect width="1200" height="675" fill="#2B2B3D"/>
    <rect width="1200" height="675" fill="url(#seq2seqBgGlow)"/>
  </g>
);

const Defs = (
  <defs>
    <radialGradient id="seq2seqBgGlow" cx="50%" cy="30%" r="60%">
      <stop offset="0%" stopColor="#CC884A" stopOpacity="0.12"/>
      <stop offset="100%" stopColor="#CC884A" stopOpacity="0"/>
    </radialGradient>
  </defs>
);


const EncoderBox = (
  <g transform="translate(120, 180)">
    <rect x="0" y="0" width="280" height="320" rx="16" fill="#1E1E2E" stroke="#6EC8E6" strokeWidth="2"/>
    <text x="140" y="40" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#6EC8E6" fontFamily="sans-serif">Encoder 编码器</text>
    {[0, 1, 2, 3, 4].map(i => (
      <g key={i}>
        <rect x="60" y={70 + i * 48} width="160" height="32" rx="8" fill="#252538" stroke="#6EC8E6" strokeWidth="1" opacity="0.7"/>
        <circle cx="100" cy={86 + i * 48} r="6" fill="#6EC8E6" opacity={0.5 + i * 0.1} stroke="#90D8F0" strokeOpacity="0.3" strokeWidth="1"/>
        <rect x="116" y={82 + i * 48} width="80" height="8" rx="4" fill="#6EC8E6" opacity="0.3"/>
      </g>
    ))}
    <text x="140" y="300" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#6EC8E6" fontFamily="sans-serif">Encoder reads</text>
  </g>
);

const DecoderBox = (
  <g transform="translate(750, 180)">
    <rect x="0" y="0" width="280" height="320" rx="16" fill="#1E1E2E" stroke="#5BAD7A" strokeWidth="2"/>
    <text x="140" y="40" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#5BAD7A" fontFamily="sans-serif">Decoder 解码器</text>
    {[0, 1, 2, 3, 4].map(i => (
      <g key={i}>
        <rect x="60" y={70 + i * 48} width="160" height="32" rx="8" fill="#252538" stroke="#5BAD7A" strokeWidth="1" opacity="0.7"/>
        <circle cx="100" cy={86 + i * 48} r="6" fill="#5BAD7A" opacity={0.5 + i * 0.1} stroke="#7DD49A" strokeOpacity="0.3" strokeWidth="1"/>
        <rect x="116" y={82 + i * 48} width="80" height="8" rx="4" fill="#5BAD7A" opacity="0.3"/>
      </g>
    ))}
    <text x="140" y="300" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#5BAD7A" fontFamily="sans-serif">Decoder writes</text>
  </g>
);

const BigArrow = (
  <g>
    <line x1="420" y1="340" x2="720" y2="340" stroke="#E8B84A" strokeWidth="4" strokeDasharray="12 6"/>
    <polygon points="720,340 695,325 695,355" fill="#E8B84A"/>
    <rect x="510" y="315" width="100" height="50" rx="10" fill="#252538" stroke="#E8B84A" strokeWidth="1.5"/>
    <text x="560" y="345" textAnchor="middle" fontSize="14" fill="#E8B84A" fontFamily="sans-serif">Context</text>
  </g>
);

const InputTokens = (
  <g>
    {["Hello", "World", "!"].map((t, i) => (
      <g key={i} transform={`translate(${160 + i * 70}, 540)`}>
        <rect x="0" y="0" width="60" height="30" rx="6" fill="#252538" stroke="#555570" strokeWidth="1"/>
        <text x="30" y="20" textAnchor="middle" fontSize="12" fill="#FFFFFF" fontFamily="sans-serif" opacity="0.8">{t}</text>
      </g>
    ))}
    <line x1="260" y1="530" x2="260" y2="505" stroke="#555570" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.5"/>
    <polygon points="260,505 255,515 265,515" fill="#555570" opacity="0.5"/>
  </g>
);

const OutputTokens = (
  <g>
    {["你好", "世界", "！"].map((t, i) => (
      <g key={i} transform={`translate(${790 + i * 70}, 540)`}>
        <rect x="0" y="0" width="60" height="30" rx="6" fill="#252538" stroke="#555570" strokeWidth="1"/>
        <text x="30" y="20" textAnchor="middle" fontSize="12" fill="#FFFFFF" fontFamily="sans-serif" opacity="0.8">{t}</text>
      </g>
    ))}
    <line x1="890" y1="505" x2="890" y2="530" stroke="#555570" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.5"/>
    <polygon points="890,530 885,520 895,520" fill="#555570" opacity="0.5"/>
  </g>
);

const SequenceFlowLabel = (
  <g transform="translate(435, 535)">
    <rect x="0" y="0" width="330" height="42" rx="10" fill="#252538" stroke="#E8B84A" strokeWidth="1" opacity="0.85"/>
    <text x="165" y="27" textAnchor="middle" fontSize="15" fill="#E8B84A" fontFamily="sans-serif">输入序列 → 输出序列</text>
  </g>
);

const TitleAndLabels = (
  <g>
    <text x="600" y="80" textAnchor="middle" fontSize="30" fontWeight="bold" fill="#FFFFFF" fontFamily="sans-serif">Seq2Seq</text>
    <g transform="translate(520, 100)">
      <rect x="0" y="0" width="60" height="28" rx="6" fill="#252538" stroke="#E8734A" strokeWidth="1"/>
      <text x="30" y="19" textAnchor="middle" fontSize="14" fill="#E8734A" fontFamily="sans-serif">2014</text>
    </g>
    <text x="600" y="150" textAnchor="middle" fontSize="18" fill="#E8734A" fontFamily="sans-serif" opacity="0.9">翻译</text>
  </g>
);

export const seq2seqSceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: Defs,
  background: Background,
  fragments: [
    { id: "encoder", content: EncoderBox, enterFrom: { x: -400, y: 0 }, enterDelay: 0, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 6, y: 7 }, exitTo: { x: -500, y: 0 } },
    { id: "decoder", content: DecoderBox, enterFrom: { x: 400, y: 0 }, enterDelay: 100, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 6, y: 7 }, exitTo: { x: 500, y: 0 } },
    { id: "arrow", content: BigArrow, enterFrom: { x: 0, y: -200 }, enterDelay: 250, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 5, y: 6 }, exitTo: { x: 0, y: -300 }, exitSpin: 5 },
    { id: "input", content: InputTokens, enterFrom: { x: -200, y: 200 }, enterDelay: 350, floatAmp: { x: 12, y: 14 }, floatPeriod: { x: 4.5, y: 5.5 }, exitTo: { x: -300, y: 200 } },
    { id: "output", content: OutputTokens, enterFrom: { x: 200, y: 200 }, enterDelay: 400, floatAmp: { x: 12, y: 14 }, floatPeriod: { x: 4.5, y: 5.5 }, exitTo: { x: 300, y: 200 } },
    { id: "flow-label", content: SequenceFlowLabel, enterFrom: { x: 0, y: 180 }, enterDelay: 450, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 5.5, y: 6.5 }, exitTo: { x: 0, y: 260 } },
    { id: "title", content: TitleAndLabels, enterFrom: { x: 0, y: -250 }, enterDelay: 50, floatAmp: { x: 14, y: 10 }, floatPeriod: { x: 7, y: 9 }, exitTo: { x: 0, y: -350 }, exitScale: 1.2 },
  ],
};
