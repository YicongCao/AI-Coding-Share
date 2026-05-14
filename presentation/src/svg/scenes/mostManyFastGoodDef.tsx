import type { SvgSceneDef } from "../SvgScene";

const Background = (
  <g>
    <rect width="1200" height="675" fill="#2B2B3D"/>
    <rect width="1200" height="675" fill="url(#mostManyFastGoodBgGlow)"/>
  </g>
);

const Defs = (
  <defs>
    <radialGradient id="mostManyFastGoodBgGlow" cx="50%" cy="30%" r="60%">
      <stop offset="0%" stopColor="#5BAD7A" stopOpacity="0.12"/>
      <stop offset="100%" stopColor="#5BAD7A" stopOpacity="0"/>
    </radialGradient>
  </defs>
);


const Title = (
  <g>
    <text x="600" y="60" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="28" fontWeight="bold">多快好省？</text>
    <text x="600" y="88" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="14">More · Fast · Good · Save</text>
  </g>
);

const QuadrantGrid = (
  <g transform="translate(250, 130)">
    <line x1="350" y1="0" x2="350" y2="470" stroke="#555570" strokeWidth="1.5" opacity="0.4"/>
    <line x1="0" y1="235" x2="700" y2="235" stroke="#555570" strokeWidth="1.5" opacity="0.4"/>
  </g>
);

const QuadMore = (
  <g transform="translate(280, 150)">
    <rect x="0" y="0" width="290" height="200" rx="14" fill="#1E1E2E"/>
    <text x="145" y="55" textAnchor="middle" fill="#5BAD7A" fontFamily="sans-serif" fontSize="52" fontWeight="bold">多</text>
    <text x="145" y="80" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="13">More</text>
    {/* Stack icon */}
    <rect x="100" y="100" width="50" height="12" rx="3" fill="#5BAD7A" opacity="0.4"/>
    <rect x="90" y="118" width="70" height="12" rx="3" fill="#5BAD7A" opacity="0.5"/>
    <rect x="80" y="136" width="90" height="12" rx="3" fill="#5BAD7A" opacity="0.6"/>
    {/* Checkmark */}
    <circle cx="250" cy="40" r="20" fill="#5BAD7A" opacity="0.2"/>
    <path d="M240,40 L248,48 L262,32" fill="none" stroke="#5BAD7A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </g>
);

const QuadFast = (
  <g transform="translate(630, 150)">
    <rect x="0" y="0" width="290" height="200" rx="14" fill="#1E1E2E"/>
    <text x="145" y="55" textAnchor="middle" fill="#6EC8E6" fontFamily="sans-serif" fontSize="52" fontWeight="bold">快</text>
    <text x="145" y="80" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="13">Fast</text>
    {/* Lightning icon */}
    <path d="M135,95 L150,125 L140,125 L155,160 L130,125 L142,125 Z" fill="#6EC8E6" opacity="0.5"/>
    {/* Checkmark */}
    <circle cx="250" cy="40" r="20" fill="#6EC8E6" opacity="0.2"/>
    <path d="M240,40 L248,48 L262,32" fill="none" stroke="#6EC8E6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </g>
);

const QuadGood = (
  <g transform="translate(280, 385)">
    <rect x="0" y="0" width="290" height="200" rx="14" fill="#1E1E2E"/>
    <text x="145" y="55" textAnchor="middle" fill="#E8B84A" fontFamily="sans-serif" fontSize="52" fontWeight="bold">好</text>
    <text x="145" y="80" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="13">Good</text>
    {/* Star icon */}
    <polygon points="145,100 151,120 172,120 155,132 162,152 145,140 128,152 135,132 118,120 139,120" fill="#E8B84A" opacity="0.45"/>
    {/* Checkmark */}
    <circle cx="250" cy="40" r="20" fill="#E8B84A" opacity="0.2"/>
    <path d="M240,40 L248,48 L262,32" fill="none" stroke="#E8B84A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </g>
);

const QuadSave = (
  <g transform="translate(630, 385)">
    <rect x="0" y="0" width="290" height="200" rx="14" fill="#1E1E2E"/>
    <text x="145" y="55" textAnchor="middle" fill="#E85650" fontFamily="sans-serif" fontSize="52" fontWeight="bold">省</text>
    <text x="145" y="80" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="13">Save</text>
    {/* X mark */}
    <circle cx="250" cy="40" r="20" fill="#E85650" opacity="0.2"/>
    <path d="M240,30 L260,50 M260,30 L240,50" stroke="#E85650" strokeWidth="3" strokeLinecap="round"/>
    {/* Token coins scattered */}
    {[
      { x: 90, y: 105 }, { x: 130, y: 120 }, { x: 170, y: 100 },
      { x: 110, y: 145 }, { x: 155, y: 150 }, { x: 200, y: 130 },
      { x: 125, y: 170 }, { x: 175, y: 170 }, { x: 95, y: 130 },
    ].map((p, i) => (
      <g key={i} transform={`translate(${p.x}, ${p.y})`}>
        <ellipse cx="0" cy="0" rx="14" ry="9" fill="#E8B84A" opacity={0.3 + i * 0.05}/>
        <text x="0" y="4" textAnchor="middle" fill="#1E1E2E" fontFamily="sans-serif" fontSize="7" fontWeight="bold">T</text>
      </g>
    ))}
    {/* Laughing indicator */}
    <text x="250" y="180" textAnchor="middle" fill="#E85650" fontFamily="sans-serif" fontSize="24">😅</text>
  </g>
);

export const mostManyFastGoodSceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: Defs,
  background: Background,
  fragments: [
    { id: "title", content: Title, enterFrom: { x: 0, y: -300 }, enterDelay: 0, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 8, y: 9 }, exitTo: { x: 0, y: -400 } },
    { id: "grid", content: QuadrantGrid, enterFrom: { x: 0, y: 0 }, enterDelay: 50, floatAmp: { x: 8, y: 8 }, floatPeriod: { x: 9, y: 8 } },
    { id: "quadMore", content: QuadMore, enterFrom: { x: -400, y: -300 }, enterDelay: 100, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 6, y: 7 }, exitTo: { x: -500, y: -300 }, exitSpin: -4 },
    { id: "quadFast", content: QuadFast, enterFrom: { x: 400, y: -300 }, enterDelay: 200, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 5.5, y: 6.5 }, exitTo: { x: 500, y: -300 }, exitSpin: 4 },
    { id: "quadGood", content: QuadGood, enterFrom: { x: -400, y: 300 }, enterDelay: 300, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 6.5, y: 7.5 }, exitTo: { x: -500, y: 300 }, exitSpin: -4 },
    { id: "quadSave", content: QuadSave, enterFrom: { x: 400, y: 300 }, enterDelay: 400, floatAmp: { x: 12, y: 14 }, floatPeriod: { x: 5, y: 6 }, exitTo: { x: 500, y: 300 }, exitSpin: 6 },
  ],
};
