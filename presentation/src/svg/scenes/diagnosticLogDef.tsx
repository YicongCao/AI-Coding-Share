import type { SvgSceneDef } from "../SvgScene";

const Background = (
  <g>
    <rect width="1200" height="675" fill="#2B2B3D"/>
    <rect width="1200" height="675" fill="url(#diagnosticLogBgGlow)"/>
  </g>
);

const Defs = (
  <defs>
    <radialGradient id="diagnosticLogBgGlow" cx="50%" cy="30%" r="60%">
      <stop offset="0%" stopColor="#5BAD7A" stopOpacity="0.12"/>
      <stop offset="100%" stopColor="#5BAD7A" stopOpacity="0"/>
    </radialGradient>
  </defs>
);


const Title = (
  <g>
    <text x="600" y="50" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="28" fontWeight="bold">诊断日志</text>
    <text x="600" y="78" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="14">One-Click Diagnostic Log</text>
  </g>
);

const Clipboard = (
  <g transform="translate(300, 100)">
    <rect x="0" y="20" width="600" height="480" rx="14" fill="#1E1E2E" stroke="#555570" strokeWidth="1.5"/>
    <rect x="220" y="6" width="160" height="28" rx="14" fill="#252538" stroke="#555570" strokeWidth="1"/>
    <circle cx="300" cy="20" r="6" fill="#555570"/>
    {[
      { label: "SSE Events", color: "#6EC8E6", y: 70 },
      { label: "Tool Calls", color: "#5BAD7A", y: 160 },
      { label: "Prechat Context", color: "#E8B84A", y: 250 },
      { label: "Postchat Context", color: "#E8734A", y: 340 },
      { label: "LLM Feedback", color: "#4A7BCC", y: 430 },
    ].map((section, i) => (
      <g key={i}>
        <rect x="30" y={section.y} width="540" height="72" rx="8" fill="#252538" stroke="#FFFFFF" strokeOpacity="0.1" strokeWidth="1.5"/>
        <rect x="30" y={section.y} width="6" height="72" rx="3" fill={section.color}/>
        <text x="56" y={section.y + 22} fill={section.color} fontFamily="sans-serif" fontSize="14" fontWeight="bold">{section.label}</text>
        <rect x="56" y={section.y + 34} width="180" height="5" rx="2.5" fill="#555570" opacity="0.4"/>
        <rect x="56" y={section.y + 46} width="140" height="5" rx="2.5" fill="#555570" opacity="0.3"/>
        <rect x="56" y={section.y + 58} width="200" height="5" rx="2.5" fill="#555570" opacity="0.2"/>
      </g>
    ))}
  </g>
);

const CopyButton = (
  <g transform="translate(940, 260)">
    <rect x="0" y="0" width="180" height="76" rx="14" fill="#5BAD7A" stroke="#7DD49A" strokeOpacity="0.3" strokeWidth="1"/>
    {/* Copy icon centered */}
    <rect x="48" y="14" width="18" height="22" rx="3" fill="none" stroke="#FFFFFF" strokeWidth="2"/>
    <rect x="54" y="20" width="18" height="22" rx="3" fill="#5BAD7A" stroke="#FFFFFF" strokeWidth="2"/>
    {/* Label centered below icon */}
    <text x="90" y="62" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="15" fontWeight="bold">一键复制</text>
    {/* Checkmark badge */}
    <circle cx="190" cy="-10" r="12" fill="#E8B84A" opacity="0.8" stroke="#F0D070" strokeOpacity="0.3" strokeWidth="1"/>
    <text x="190" y="-5" textAnchor="middle" fill="#1E1E2E" fontFamily="sans-serif" fontSize="14" fontWeight="bold">✓</text>
  </g>
);

const ClickRipple = (
  <g transform="translate(1020, 308)" opacity="0.3">
    <circle cx="0" cy="0" r="30" fill="none" stroke="#5BAD7A" strokeWidth="1.5"/>
    <circle cx="0" cy="0" r="50" fill="none" stroke="#5BAD7A" strokeWidth="1"/>
    <circle cx="0" cy="0" r="70" fill="none" stroke="#5BAD7A" strokeWidth="0.5"/>
  </g>
);

export const diagnosticLogSceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: Defs,
  background: Background,
  fragments: [
    { id: "title", content: Title, enterFrom: { x: 0, y: -120 }, enterDelay: 0, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 7, y: 8 } },
    { id: "clipboard", content: Clipboard, enterFrom: { x: -400, y: 0 }, enterDelay: 100, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 6, y: 7 }, exitTo: { x: -500, y: 0 } },
    { id: "copyBtn", content: CopyButton, enterFrom: { x: 300, y: 0 }, enterDelay: 300, floatAmp: { x: 14, y: 16 }, floatPeriod: { x: 4.5, y: 5.5 }, floatRotate: 1.5, exitTo: { x: 400, y: 0 } },
    { id: "ripple", content: ClickRipple, enterFrom: { x: 0, y: 0 }, enterDelay: 500, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 3, y: 4 }, floatRotate: 2 },
  ],
};
