import type { SvgSceneDef } from "../SvgScene";

const Background = (
  <g>
    <rect width="1200" height="675" fill="#2B2B3D"/>
    <rect width="1200" height="675" fill="url(#rulesGridBgGlow)"/>
  </g>
);

const Defs = (
  <defs>
    <radialGradient id="rulesGridBgGlow" cx="50%" cy="30%" r="60%">
      <stop offset="0%" stopColor="#E8734A" stopOpacity="0.12"/>
      <stop offset="100%" stopColor="#E8734A" stopOpacity="0"/>
    </radialGradient>
  </defs>
);


const RuleCards = (
  <g>
    {Array.from({ length: 24 }, (_, i) => {
      const col = i % 6;
      const row = Math.floor(i / 6);
      const x = 260 + col * 115;
      const y = 100 + row * 125;
      const failed = [2, 5, 7, 10, 13, 16, 19, 22].includes(i);
      const angle = failed ? ((i % 2 === 0) ? 3 : -4) : 0;
      return (
        <g key={i} opacity={failed ? 0.5 : 0.85} transform={angle ? `rotate(${angle}, ${x + 50}, ${y + 52})` : undefined}>
          <rect x={x} y={y} width="100" height="105" rx="8" fill="#1E1E2E" stroke={failed ? "#E85650" : "#555570"} strokeWidth={failed ? 1.5 : 1}/>
          <rect x={x + 12} y={y + 16} width={50 + (i % 3) * 10} height="5" rx="2.5" fill={failed ? "#555570" : "#6EC8E6"} opacity="0.6"/>
          <rect x={x + 12} y={y + 28} width={35 + (i % 4) * 8} height="4" rx="2" fill="#555570" opacity="0.4"/>
          <rect x={x + 12} y={y + 40} width={45 + (i % 2) * 12} height="4" rx="2" fill="#555570" opacity="0.3"/>
          <rect x={x + 12} y={y + 54} width={30 + (i % 3) * 10} height="4" rx="2" fill="#555570" opacity="0.25"/>
          <rect x={x + 12} y={y + 66} width={40 + (i % 2) * 8} height="4" rx="2" fill="#555570" opacity="0.2"/>
          {failed && (
            <g>
              <line x1={x + 5} y1={y + 8} x2={x + 95} y2={y + 98} stroke="#E85650" strokeWidth="4" strokeLinecap="round" opacity="0.8"/>
              <line x1={x + 95} y1={y + 8} x2={x + 5} y2={y + 98} stroke="#E85650" strokeWidth="4" strokeLinecap="round" opacity="0.8"/>
            </g>
          )}
        </g>
      );
    })}
  </g>
);

const FailedStamp = (
  <g transform="translate(600, 340) rotate(-12)">
    <rect x="-130" y="-42" width="260" height="84" rx="8" fill="none" stroke="#E85650" strokeWidth="5" opacity="0.75"/>
    <text x="0" y="12" textAnchor="middle" fill="#E85650" fontFamily="sans-serif" fontSize="52" fontWeight="bold" opacity="0.8">FAILED</text>
  </g>
);

const Linguist = (
  <g transform="translate(95, 180)">
    {/* Head */}
    <circle cx="0" cy="0" r="28" fill="#F5C5A3"/>
    {/* Hair */}
    <path d="M-28,-8 Q-30,-30 -10,-38 Q10,-42 26,-28 Q32,-18 30,-4 Q28,-14 18,-24 Q4,-32 -12,-28 Q-24,-20 -24,-6 Z" fill="#555570"/>
    {/* Eyes */}
    <circle cx="-10" cy="2" r="3" fill="#2B2B3D"/>
    <circle cx="10" cy="2" r="3" fill="#2B2B3D"/>
    {/* Frown */}
    <path d="M-8,16 Q0,12 8,16" fill="none" stroke="#D4856A" strokeWidth="2" strokeLinecap="round"/>
    {/* Body */}
    <path d="M-22,28 Q-32,40 -34,70 L-36,140 L36,140 L34,70 Q32,40 22,28 Z" fill="#4A7BCC"/>
    {/* Raised hand (frustrated gesture) */}
    <path d="M-34,70 L-55,40 L-50,35 L-30,62" fill="#4A7BCC"/>
    <circle cx="-52" cy="34" r="8" fill="#F5C5A3"/>
    {/* Another hand */}
    <path d="M34,70 L55,50 L50,45 L30,65" fill="#4A7BCC"/>
    <circle cx="52" cy="44" r="8" fill="#F5C5A3"/>
    {/* Sweat drop */}
    <path d="M32,-12 Q36,-20 38,-12 Q38,-6 32,-12 Z" fill="#6EC8E6" opacity="0.7"/>
  </g>
);

const TitleLabel = (
  <g>
    <rect x="60" y="400" width="130" height="38" rx="8" fill="#252538" stroke="#FFFFFF" strokeOpacity="0.1" strokeWidth="1.5"/>
    <text x="125" y="425" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="16" fontWeight="bold">语法规则</text>
    <text x="125" y="460" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="12">Grammar Rules</text>
  </g>
);

const CountLabel = (
  <g>
    <rect x="58" y="500" width="136" height="50" rx="8" fill="#1E1E2E" stroke="#E85650" strokeWidth="1"/>
    <text x="126" y="522" textAnchor="middle" fill="#E8B84A" fontFamily="sans-serif" fontSize="13">规则数量</text>
    <text x="126" y="540" textAnchor="middle" fill="#E85650" fontFamily="sans-serif" fontSize="16" fontWeight="bold">10,000+</text>
  </g>
);

const DecoArrows = (
  <g opacity="0.35" stroke="#555570" strokeWidth="1.5" fill="none">
    <path d="M170,300 Q200,280 240,290" strokeDasharray="4 3"/>
    <path d="M170,350 Q210,340 250,355" strokeDasharray="4 3"/>
    <path d="M160,400 Q190,410 250,400" strokeDasharray="4 3"/>
  </g>
);

export const rulesGridSceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: Defs,
  background: Background,
  fragments: [
    { id: "ruleCards", content: RuleCards, enterFrom: { x: 0, y: 400 }, enterDelay: 0, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 6.0, y: 7.5 }, exitTo: { x: 0, y: -500 }, exitSpin: 2 },
    { id: "failedStamp", content: FailedStamp, enterFrom: { x: 0, y: -500 }, enterDelay: 350, floatAmp: { x: 14, y: 18 }, floatPeriod: { x: 4.0, y: 5.0 }, exitTo: { x: 0, y: -600 }, exitScale: 1.3, exitSpin: 8 },
    { id: "linguist", content: Linguist, enterFrom: { x: -400, y: 0 }, enterDelay: 150, floatAmp: { x: 8, y: 14 }, floatPeriod: { x: 5.5, y: 6.8 }, exitTo: { x: -450, y: 0 }, exitSpin: -5 },
    { id: "titleLabel", content: TitleLabel, enterFrom: { x: -350, y: 0 }, enterDelay: 200, floatAmp: { x: 10, y: 8 }, floatPeriod: { x: 6.5, y: 8.0 }, exitTo: { x: -400, y: 100 } },
    { id: "countLabel", content: CountLabel, enterFrom: { x: -300, y: 200 }, enterDelay: 400, floatAmp: { x: 12, y: 10 }, floatPeriod: { x: 5.0, y: 6.2 }, exitTo: { x: -380, y: 250 } },
    { id: "decoArrows", content: DecoArrows, enterFrom: { x: -200, y: 0 }, enterDelay: 500, floatAmp: { x: 8, y: 8 }, floatPeriod: { x: 7.0, y: 8.5 }, exitTo: { x: -300, y: 0 } },
  ],
};
