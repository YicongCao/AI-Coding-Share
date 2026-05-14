import type { SvgSceneDef } from "../SvgScene";

const Background = (
  <g>
    <rect width="1200" height="675" fill="#2B2B3D"/>
    <rect width="1200" height="675" fill="url(#busyAIBgGlow)"/>
  </g>
);

const Defs = (
  <defs>
    <radialGradient id="busyAIBgGlow" cx="50%" cy="30%" r="60%">
      <stop offset="0%" stopColor="#6EC8E6" stopOpacity="0.12"/>
      <stop offset="100%" stopColor="#6EC8E6" stopOpacity="0"/>
    </radialGradient>
  </defs>
);


const GearCluster = (
  <g transform="translate(350, 120)">
    {/* Large gear */}
    <circle cx="200" cy="200" r="100" fill="none" stroke="#6EC8E6" strokeWidth="3" opacity="0.6"/>
    <circle cx="200" cy="200" r="75" fill="#1E1E2E" stroke="#6EC8E6" strokeWidth="2" opacity="0.5"/>
    <circle cx="200" cy="200" r="20" fill="#6EC8E6" opacity="0.4"/>
    {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => {
      const rad = (deg * Math.PI) / 180;
      return <rect key={i} x={200 + Math.cos(rad) * 88 - 12} y={200 + Math.sin(rad) * 88 - 8} width="24" height="16" rx="3" fill="#6EC8E6" opacity="0.5" transform={`rotate(${deg}, ${200 + Math.cos(rad) * 88}, ${200 + Math.sin(rad) * 88})`}/>;
    })}
    {/* Medium gear */}
    <circle cx="370" cy="130" r="65" fill="none" stroke="#5BAD7A" strokeWidth="2.5" opacity="0.6"/>
    <circle cx="370" cy="130" r="45" fill="#1E1E2E" stroke="#5BAD7A" strokeWidth="1.5" opacity="0.5"/>
    <circle cx="370" cy="130" r="14" fill="#5BAD7A" opacity="0.4"/>
    {[0, 60, 120, 180, 240, 300].map((deg, i) => {
      const rad = (deg * Math.PI) / 180;
      return <rect key={i} x={370 + Math.cos(rad) * 55 - 10} y={130 + Math.sin(rad) * 55 - 7} width="20" height="14" rx="3" fill="#5BAD7A" opacity="0.5" transform={`rotate(${deg}, ${370 + Math.cos(rad) * 55}, ${130 + Math.sin(rad) * 55})`}/>;
    })}
    {/* Small gear */}
    <circle cx="90" cy="310" r="50" fill="none" stroke="#E8B84A" strokeWidth="2" opacity="0.6"/>
    <circle cx="90" cy="310" r="35" fill="#1E1E2E" stroke="#E8B84A" strokeWidth="1.5" opacity="0.5"/>
    <circle cx="90" cy="310" r="10" fill="#E8B84A" opacity="0.4"/>
    {[0, 72, 144, 216, 288].map((deg, i) => {
      const rad = (deg * Math.PI) / 180;
      return <rect key={i} x={90 + Math.cos(rad) * 42 - 8} y={310 + Math.sin(rad) * 42 - 6} width="16" height="12" rx="2" fill="#E8B84A" opacity="0.5" transform={`rotate(${deg}, ${90 + Math.cos(rad) * 42}, ${310 + Math.sin(rad) * 42})`}/>;
    })}
  </g>
);

const ProgressBar = (
  <g transform="translate(200, 530)">
    <rect x="0" y="0" width="800" height="28" rx="14" fill="#252538" stroke="#555570" strokeWidth="1"/>
    <rect x="4" y="4" width="620" height="20" rx="10" fill="#5BAD7A" opacity="0.75"/>
    <text x="400" y="19" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="12" fontWeight="bold" opacity="0.9">78%</text>
  </g>
);

const BusyLabel = (
  <g transform="translate(480, 480)">
    <rect x="0" y="0" width="240" height="42" rx="10" fill="#1E1E2E" stroke="#6EC8E6" strokeWidth="1.5"/>
    <text x="120" y="28" textAnchor="middle" fill="#6EC8E6" fontFamily="sans-serif" fontSize="20" fontWeight="bold">让 AI 保持忙碌</text>
  </g>
);

const SpeedLines = (
  <g opacity="0.35">
    <line x1="60" y1="200" x2="160" y2="200" stroke="#E8734A" strokeWidth="2" strokeLinecap="round"/>
    <line x1="80" y1="230" x2="180" y2="230" stroke="#E8734A" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="50" y1="260" x2="140" y2="260" stroke="#E8734A" strokeWidth="2" strokeLinecap="round"/>
    <line x1="920" y1="180" x2="1050" y2="180" stroke="#E8734A" strokeWidth="2" strokeLinecap="round"/>
    <line x1="940" y1="210" x2="1080" y2="210" stroke="#E8734A" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="960" y1="240" x2="1060" y2="240" stroke="#E8734A" strokeWidth="2" strokeLinecap="round"/>
  </g>
);

const ActiveIndicators = (
  <g>
    <circle cx="1050" cy="100" r="8" fill="#5BAD7A" opacity="0.8"/>
    <circle cx="1050" cy="100" r="14" fill="none" stroke="#5BAD7A" strokeWidth="1.5" opacity="0.4"/>
    <circle cx="1050" cy="100" r="22" fill="none" stroke="#5BAD7A" strokeWidth="1" opacity="0.2"/>
    <text x="1050" y="140" textAnchor="middle" fill="#5BAD7A" fontFamily="sans-serif" fontSize="12" opacity="0.6">ACTIVE</text>
  </g>
);

export const busyAISceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: Defs,
  background: Background,
  fragments: [
    { id: "gears", content: GearCluster, enterFrom: { x: 0, y: -400 }, enterDelay: 0, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 6, y: 7 }, exitTo: { x: 0, y: -600 }, exitSpin: 15 },
    { id: "speedLines", content: SpeedLines, enterFrom: { x: -300, y: 0 }, enterDelay: 150, floatAmp: { x: 18, y: 10 }, floatPeriod: { x: 3.5, y: 5 }, exitTo: { x: -400, y: 0 } },
    { id: "busyLabel", content: BusyLabel, enterFrom: { x: 0, y: 300 }, enterDelay: 300, floatAmp: { x: 10, y: 14 }, floatPeriod: { x: 5, y: 6 }, exitTo: { x: 0, y: 400 } },
    { id: "progress", content: ProgressBar, enterFrom: { x: 0, y: 200 }, enterDelay: 400, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 7, y: 8 }, exitTo: { x: 0, y: 300 } },
    { id: "indicators", content: ActiveIndicators, enterFrom: { x: 300, y: -200 }, enterDelay: 500, floatAmp: { x: 14, y: 18 }, floatPeriod: { x: 4, y: 5 }, exitTo: { x: 300, y: -300 } },
  ],
};
