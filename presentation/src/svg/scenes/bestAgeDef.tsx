import type { SvgSceneDef } from "../SvgScene";

const Background = <rect width="1200" height="675" fill="#2B2B3D"/>;

const Defs = (
  <defs>
    <linearGradient id="warmGlow" x1="0" y1="1" x2="0" y2="0">
      <stop offset="0%" stopColor="#E8B84A" stopOpacity="0.15"/>
      <stop offset="100%" stopColor="#E8B84A" stopOpacity="0"/>
    </linearGradient>
  </defs>
);

const HandAndKeyboard = (
  <g transform="translate(200, 260)">
    {/* Keyboard base */}
    <rect x="0" y="180" width="420" height="120" rx="12" fill="#1E1E2E" stroke="#555570" strokeWidth="1.5"/>
    {/* Key rows */}
    {Array.from({ length: 12 }, (_, i) => (
      <rect key={`r1-${i}`} x={18 + i * 33} y={195} width="26" height="20" rx="3" fill="#252538" stroke="#555570" strokeWidth="0.8"/>
    ))}
    {Array.from({ length: 11 }, (_, i) => (
      <rect key={`r2-${i}`} x={28 + i * 33} y={222} width="26" height="20" rx="3" fill="#252538" stroke="#555570" strokeWidth="0.8"/>
    ))}
    {Array.from({ length: 9 }, (_, i) => (
      <rect key={`r3-${i}`} x={50 + i * 33} y={249} width="26" height="20" rx="3" fill="#252538" stroke="#555570" strokeWidth="0.8"/>
    ))}
    <rect x="100" y="276" width="220" height="18" rx="4" fill="#252538" stroke="#555570" strokeWidth="0.8"/>
    {/* Active glowing keys */}
    <rect x="150" y="195" width="26" height="20" rx="3" fill="#5BAD7A" opacity="0.5"/>
    <rect x="225" y="222" width="26" height="20" rx="3" fill="#6EC8E6" opacity="0.4"/>
    <rect x="182" y="249" width="26" height="20" rx="3" fill="#E8B84A" opacity="0.4"/>
    {/* Hand silhouette */}
    <path d="M130,165 Q140,120 160,90 Q170,70 180,80 Q190,90 185,120 L195,85 Q200,65 210,70 Q220,75 218,100 L225,75 Q230,55 242,60 Q252,65 248,95 L255,80 Q260,65 270,72 Q278,80 270,110 L275,130 Q278,160 265,180 L135,180 Z" fill="#2B2B3D" stroke="#555570" strokeWidth="1.5"/>
    <path d="M130,165 Q140,120 160,90 Q170,70 180,80 Q190,90 185,120 L195,85 Q200,65 210,70 Q220,75 218,100 L225,75 Q230,55 242,60 Q252,65 248,95 L255,80 Q260,65 270,72 Q278,80 270,110 L275,130 Q278,160 265,180 L135,180 Z" fill="url(#warmGlow)"/>
  </g>
);

const RisingParticles = (
  <g>
    {[
      { x: 380, y: 380, s: 6 }, { x: 430, y: 320, s: 5 }, { x: 470, y: 360, s: 7 },
      { x: 350, y: 300, s: 4 }, { x: 510, y: 340, s: 5 }, { x: 400, y: 250, s: 6 },
      { x: 460, y: 280, s: 4 }, { x: 340, y: 220, s: 5 }, { x: 500, y: 260, s: 7 },
      { x: 420, y: 190, s: 3 }, { x: 370, y: 160, s: 5 }, { x: 490, y: 200, s: 4 },
    ].map((p, i) => (
      <rect key={i} x={p.x} y={p.y} width={p.s} height={p.s} rx="1" fill="#E8B84A" opacity={0.2 + (i % 4) * 0.1} transform={`rotate(${i * 15}, ${p.x + p.s / 2}, ${p.y + p.s / 2})`}/>
    ))}
  </g>
);

const EnergyLines = (
  <g>
    <path d="M360,460 Q380,350 400,200 Q410,140 430,100" fill="none" stroke="#E8B84A" strokeWidth="1.5" opacity="0.3" strokeDasharray="6 4"/>
    <path d="M440,460 Q450,380 460,250 Q470,180 490,120" fill="none" stroke="#E8B84A" strokeWidth="1.5" opacity="0.25" strokeDasharray="6 4"/>
    <path d="M520,460 Q530,360 520,220 Q515,150 530,90" fill="none" stroke="#E8B84A" strokeWidth="1.5" opacity="0.2" strokeDasharray="6 4"/>
  </g>
);

const YearsLabel = (
  <g transform="translate(780, 200)">
    <rect width="260" height="100" rx="16" fill="#252538" stroke="#E8B84A" strokeWidth="1.5"/>
    <text x="130" y="50" textAnchor="middle" fill="#E8B84A" fontFamily="sans-serif" fontSize="44" fontWeight="bold">5000年</text>
    <text x="130" y="78" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="15" opacity="0.6">人类知识积累</text>
  </g>
);

const BooksStack = (
  <g transform="translate(850, 380)">
    <rect x="0" y="0" width="100" height="18" rx="3" fill="#4A7BCC" opacity="0.7"/>
    <rect x="5" y="-22" width="90" height="18" rx="3" fill="#5BAD7A" opacity="0.65"/>
    <rect x="10" y="-44" width="80" height="18" rx="3" fill="#6EC8E6" opacity="0.6"/>
    <rect x="15" y="-66" width="70" height="18" rx="3" fill="#E8B84A" opacity="0.55"/>
    <rect x="20" y="-88" width="60" height="18" rx="3" fill="#E8734A" opacity="0.5"/>
    {/* Glow atop books */}
    <circle cx="50" cy="-100" r="16" fill="#E8B84A" opacity="0.12"/>
    <circle cx="50" cy="-100" r="8" fill="#E8B84A" opacity="0.2"/>
  </g>
);

const FingertipLabel = (
  <g>
    <text x="600" y="630" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="18" opacity="0.5">指尖跃动的字节 = 人类五千年知识</text>
  </g>
);

export const bestAgeSceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: Defs,
  background: Background,
  fragments: [
    { id: "handAndKeyboard", content: HandAndKeyboard, enterFrom: { x: -400, y: 200 }, enterDelay: 0, floatAmp: { x: 8, y: 12 }, floatPeriod: { x: 6.0, y: 7.5 }, exitTo: { x: -500, y: 200 }, exitSpin: -2 },
    { id: "risingParticles", content: RisingParticles, enterFrom: { x: 0, y: 200 }, enterDelay: 150, floatAmp: { x: 14, y: 20 }, floatPeriod: { x: 3.5, y: 4.5 }, exitTo: { x: 0, y: -300 } },
    { id: "energyLines", content: EnergyLines, enterFrom: { x: 0, y: 300 }, enterDelay: 200, floatAmp: { x: 10, y: 16 }, floatPeriod: { x: 5.0, y: 6.5 }, exitTo: { x: 0, y: -400 } },
    { id: "yearsLabel", content: YearsLabel, enterFrom: { x: 400, y: -200 }, enterDelay: 300, floatAmp: { x: 16, y: 18 }, floatPeriod: { x: 4.0, y: 5.5 }, exitTo: { x: 500, y: -300 }, exitScale: 1.1 },
    { id: "booksStack", content: BooksStack, enterFrom: { x: 300, y: 200 }, enterDelay: 400, floatAmp: { x: 12, y: 14 }, floatPeriod: { x: 5.5, y: 7.0 }, exitTo: { x: 400, y: 300 }, exitSpin: 5 },
    { id: "fingertipLabel", content: FingertipLabel, enterFrom: { x: 0, y: 100 }, enterDelay: 500, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 7.0, y: 8.5 }, exitTo: { x: 0, y: 200 } },
  ],
};
