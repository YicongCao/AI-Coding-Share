import type { SvgSceneDef } from "../SvgScene";

const Background = <rect width="1200" height="675" fill="#2B2B3D"/>;

const Timeline = (
  <g transform="translate(100, 280)">
    <line x1="0" y1="0" x2="1000" y2="0" stroke="#555570" strokeWidth="2" strokeLinecap="round"/>
    {[0, 200, 400, 600, 800, 1000].map((x, i) => (
      <circle key={i} cx={x} cy="0" r={6 + i * 2} fill="#1E1E2E" stroke={i < 3 ? "#5BAD7A" : "#E85650"} strokeWidth="2"/>
    ))}
    {[0, 200, 400, 600, 800, 1000].map((x, i) => (
      <text key={`l${i}`} x={x} y="30" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="11">
        {["T1", "T2", "T3", "T4", "T5", "T6"][i]}
      </text>
    ))}
    <text x="500" y="-40" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="14" opacity="0.5">Token Generation Speed →</text>
    {[200, 400, 600, 800, 1000].map((x, i) => (
      <line key={`a${i}`} x1={x - 180} y1="0" x2={x - 20} y2="0" stroke={i < 2 ? "#5BAD7A" : "#E85650"} strokeWidth="1.5" opacity="0.3"/>
    ))}
  </g>
);

const TTFTIndicator = (
  <g transform="translate(520, 100)">
    <rect x="0" y="0" width="160" height="80" rx="12" fill="#1E1E2E" stroke="#E8B84A" strokeWidth="2"/>
    <text x="80" y="35" textAnchor="middle" fill="#E8B84A" fontFamily="sans-serif" fontSize="24" fontWeight="bold">TTFT</text>
    <text x="80" y="60" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="12">Time To First Token</text>
  </g>
);

const GrowingWait = (
  <g transform="translate(130, 380)">
    {[0, 1, 2, 3, 4].map(i => (
      <g key={i} transform={`translate(${i * 200}, 0)`}>
        <rect x="0" y={-10 - i * 12} width="80" height={30 + i * 24} rx="6" fill="#E85650" opacity={0.1 + i * 0.06}/>
        <text x="40" y={20 + i * 10} textAnchor="middle" fill="#E85650" fontFamily="sans-serif" fontSize="11" opacity={0.5 + i * 0.1}>
          {[`${0.5}s`, `${1.2}s`, `${3}s`, `${8}s`, `${15}s`][i]}
        </text>
      </g>
    ))}
    <text x="400" y="90" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="13" opacity="0.6">Prompt 越长 → TTFT 越慢</text>
  </g>
);

const Hourglass = (
  <g transform="translate(950, 100)">
    <path d="M0,0 L60,0 L60,10 L35,40 L60,70 L60,80 L0,80 L0,70 L25,40 L0,10 Z" fill="none" stroke="#E8B84A" strokeWidth="2"/>
    <path d="M10,72 L50,72 L35,50 L25,50 Z" fill="#E8B84A" opacity="0.3"/>
    {[0, 1, 2].map(i => (
      <circle key={i} cx="30" cy={18 + i * 6} r="2" fill="#E8B84A" opacity={0.6 - i * 0.15}/>
    ))}
  </g>
);

const StuckWarning = (
  <g transform="translate(850, 440)">
    <rect x="0" y="0" width="180" height="70" rx="12" fill="#E85650" opacity="0.12"/>
    <rect x="0" y="0" width="180" height="70" rx="12" fill="none" stroke="#E85650" strokeWidth="2" strokeDasharray="6 3"/>
    <text x="90" y="32" textAnchor="middle" fill="#E85650" fontFamily="sans-serif" fontSize="26" fontWeight="bold">卡住</text>
    <text x="90" y="55" textAnchor="middle" fill="#E85650" fontFamily="sans-serif" fontSize="13" opacity="0.7">Agent Stuck</text>
  </g>
);

const SpinnerHint = (
  <g transform="translate(80, 130)" opacity="0.4">
    <circle cx="25" cy="25" r="20" fill="none" stroke="#555570" strokeWidth="2.5" strokeDasharray="20 50" strokeLinecap="round"/>
    <circle cx="25" cy="25" r="20" fill="none" stroke="#6EC8E6" strokeWidth="2.5" strokeDasharray="10 60" strokeDashoffset="-20" strokeLinecap="round"/>
  </g>
);

export const slowTokenSceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: <defs/>,
  background: Background,
  fragments: [
    { id: "timeline", content: Timeline, enterFrom: { x: -800, y: 0 }, enterDelay: 0, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 7, y: 8 }, exitTo: { x: 800, y: 0 } },
    { id: "ttft", content: TTFTIndicator, enterFrom: { x: 0, y: -300 }, enterDelay: 150, floatAmp: { x: 12, y: 14 }, floatPeriod: { x: 5, y: 6 }, exitTo: { x: 0, y: -400 }, exitScale: 0.8 },
    { id: "growing", content: GrowingWait, enterFrom: { x: 0, y: 300 }, enterDelay: 250, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 6, y: 7 }, exitTo: { x: 0, y: 400 } },
    { id: "hourglass", content: Hourglass, enterFrom: { x: 300, y: -200 }, enterDelay: 350, floatAmp: { x: 16, y: 20 }, floatPeriod: { x: 4, y: 5 }, exitTo: { x: 300, y: -300 }, exitSpin: 12 },
    { id: "stuck", content: StuckWarning, enterFrom: { x: 400, y: 200 }, enterDelay: 450, floatAmp: { x: 18, y: 22 }, floatPeriod: { x: 3.5, y: 4.5 }, exitTo: { x: 400, y: 300 }, exitScale: 1.2 },
    { id: "spinner", content: SpinnerHint, enterFrom: { x: -200, y: -200 }, enterDelay: 550, floatAmp: { x: 14, y: 16 }, floatPeriod: { x: 4.5, y: 5.5 }, exitTo: { x: -300, y: -200 } },
  ],
};
