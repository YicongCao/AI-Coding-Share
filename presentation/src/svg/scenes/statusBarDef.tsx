import type { SvgSceneDef } from "../SvgScene";

const Background = <rect width="1200" height="675" fill="#2B2B3D"/>;

const Title = (
  <g>
    <text x="600" y="80" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="28" fontWeight="bold">状态条</text>
    <text x="600" y="108" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="14">Status Bar — 给用户期待</text>
  </g>
);

const StatusBarUI = (
  <g transform="translate(150, 200)">
    <rect x="0" y="0" width="900" height="200" rx="16" fill="#1E1E2E" stroke="#555570" strokeWidth="2"/>
    <rect x="0" y="0" width="900" height="48" rx="16" fill="#252538"/>
    <rect x="0" y="32" width="900" height="16" fill="#252538"/>
    <circle cx="28" cy="24" r="6" fill="#E85650"/>
    <circle cx="50" cy="24" r="6" fill="#E8B84A"/>
    <circle cx="72" cy="24" r="6" fill="#5BAD7A"/>
    <text x="450" y="30" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="13">Agent Status Panel</text>

    <g transform="translate(30, 65)">
      <circle cx="8" cy="8" r="5" fill="#5BAD7A" opacity="0.8"/>
      <text x="22" y="13" fill="#5BAD7A" fontFamily="monospace" fontSize="14">Reading project structure...</text>
    </g>
    <g transform="translate(30, 95)">
      <circle cx="8" cy="8" r="5" fill="#6EC8E6" opacity="0.6"/>
      <text x="22" y="13" fill="#6EC8E6" fontFamily="monospace" fontSize="14" opacity="0.7">Analyzing dependencies...</text>
    </g>
    <g transform="translate(30, 125)">
      <circle cx="8" cy="8" r="5" fill="#4A7BCC" opacity="0.4"/>
      <text x="22" y="13" fill="#4A7BCC" fontFamily="monospace" fontSize="14" opacity="0.5">Generating solution...</text>
    </g>
    <g transform="translate(30, 155)">
      <rect x="0" y="0" width="12" height="18" rx="1" fill="#FFFFFF" opacity="0.6"/>
      <rect x="16" y="0" width="12" height="18" rx="1" fill="#FFFFFF" opacity="0.3"/>
      <rect x="32" y="0" width="12" height="18" rx="1" fill="#FFFFFF" opacity="0.15"/>
    </g>

    <rect x="600" y="60" width="270" height="120" rx="10" fill="#252538" stroke="#555570" strokeWidth="1"/>
    <text x="735" y="90" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="13" opacity="0.5">Progress</text>
    <rect x="630" y="105" width="210" height="10" rx="5" fill="#1E1E2E"/>
    <rect x="630" y="105" width="140" height="10" rx="5" fill="#5BAD7A" opacity="0.6"/>
    <text x="735" y="140" textAnchor="middle" fill="#5BAD7A" fontFamily="sans-serif" fontSize="20" fontWeight="bold">67%</text>
    <text x="735" y="165" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="11">3 / 5 steps complete</text>
  </g>
);

const TypewriterDots = (
  <g transform="translate(500, 460)">
    {[0, 1, 2].map(i => (
      <circle key={i} cx={i * 20} cy="0" r="5" fill="#FFFFFF" opacity={0.3 + i * 0.2}/>
    ))}
    <text x="80" y="5" fill="#555570" fontFamily="sans-serif" fontSize="13">Typewriter effect</text>
  </g>
);

const ExpectationLabel = (
  <g transform="translate(150, 500)">
    <rect x="0" y="0" width="200" height="50" rx="25" fill="#E8B84A" opacity="0.15"/>
    <text x="100" y="32" textAnchor="middle" fill="#E8B84A" fontFamily="sans-serif" fontSize="18" fontWeight="bold">给用户期待</text>
  </g>
);

const Caption = (
  <text x="600" y="620" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="14" opacity="0.5">让用户知道 Agent 正在做什么，而非空等</text>
);

export const statusBarSceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: <defs/>,
  background: Background,
  fragments: [
    { id: "title", content: Title, enterFrom: { x: 0, y: -300 }, enterDelay: 0, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 8, y: 9 }, exitTo: { x: 0, y: -400 } },
    { id: "statusBar", content: StatusBarUI, enterFrom: { x: 0, y: 400 }, enterDelay: 150, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 7, y: 8 }, exitTo: { x: 0, y: 500 }, exitScale: 0.9 },
    { id: "dots", content: TypewriterDots, enterFrom: { x: 0, y: 200 }, enterDelay: 350, floatAmp: { x: 14, y: 18 }, floatPeriod: { x: 4, y: 5 }, exitTo: { x: 0, y: 200 } },
    { id: "expectation", content: ExpectationLabel, enterFrom: { x: -400, y: 200 }, enterDelay: 450, floatAmp: { x: 16, y: 20 }, floatPeriod: { x: 4.5, y: 5.5 }, exitTo: { x: -400, y: 200 }, exitSpin: -6 },
    { id: "caption", content: Caption, enterFrom: { x: 0, y: 200 }, enterDelay: 550, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 8, y: 9 }, exitTo: { x: 0, y: 200 } },
  ],
};
