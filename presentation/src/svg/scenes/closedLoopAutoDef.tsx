import type { SvgSceneDef } from "../SvgScene";

const Background = (
  <g>
    <rect width="1200" height="675" fill="#2B2B3D"/>
    <rect width="1200" height="675" fill="url(#closedLoopAutoBgGlow)"/>
  </g>
);

const Defs = (
  <defs>
    <radialGradient id="closedLoopAutoBgGlow" cx="50%" cy="30%" r="60%">
      <stop offset="0%" stopColor="#4A7BCC" stopOpacity="0.12"/>
      <stop offset="100%" stopColor="#4A7BCC" stopOpacity="0"/>
    </radialGradient>
  </defs>
);


const LoopRing = (
  <g transform="translate(600, 310)">
    {/* Outer loop circle */}
    <circle cx="0" cy="0" r="200" fill="none" stroke="#555570" strokeWidth="1.5" opacity="0.2"/>
    <circle cx="0" cy="0" r="200" fill="none" stroke="#5BAD7A" strokeWidth="2.5" strokeDasharray="18 10" opacity="0.5"/>
    {/* Directional arrows on the loop */}
    <polygon points="0,-200 -10,-188 10,-188" fill="#5BAD7A" opacity="0.6"/>
    <polygon points="200,0 188,-10 188,10" fill="#5BAD7A" opacity="0.6"/>
    <polygon points="0,200 10,188 -10,188" fill="#5BAD7A" opacity="0.6"/>
  </g>
);

const StepReproduce = (
  <g transform="translate(510, 70)">
    <rect x="0" y="0" width="180" height="70" rx="12" fill="#1E1E2E" stroke="#6EC8E6" strokeWidth="2"/>
    <text x="90" y="35" textAnchor="middle" fill="#6EC8E6" fontFamily="sans-serif" fontSize="22" fontWeight="bold">复现</text>
    <text x="90" y="57" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="13">Reproduce</text>
  </g>
);

const StepFix = (
  <g transform="translate(810, 240)">
    <rect x="0" y="0" width="180" height="70" rx="12" fill="#1E1E2E" stroke="#E8B84A" strokeWidth="2"/>
    <text x="90" y="35" textAnchor="middle" fill="#E8B84A" fontFamily="sans-serif" fontSize="22" fontWeight="bold">修复</text>
    <text x="90" y="57" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="13">Fix</text>
  </g>
);

const StepVerify = (
  <g transform="translate(510, 470)">
    <rect x="0" y="0" width="180" height="70" rx="12" fill="#1E1E2E" stroke="#5BAD7A" strokeWidth="2"/>
    <text x="90" y="35" textAnchor="middle" fill="#5BAD7A" fontFamily="sans-serif" fontSize="22" fontWeight="bold">验证</text>
    <text x="90" y="57" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="13">Verify</text>
  </g>
);

const AgentIcon = (
  <g transform="translate(560, 270)">
    <rect x="0" y="0" width="80" height="80" rx="16" fill="#252538" stroke="#4A7BCC" strokeWidth="2"/>
    <circle cx="28" cy="30" r="6" fill="#4A7BCC" opacity="0.8" stroke="#6A9BE0" strokeOpacity="0.3" strokeWidth="1"/>
    <circle cx="52" cy="30" r="6" fill="#4A7BCC" opacity="0.8" stroke="#6A9BE0" strokeOpacity="0.3" strokeWidth="1"/>
    <path d="M24,52 Q40,65 56,52" fill="none" stroke="#4A7BCC" strokeWidth="2.5" strokeLinecap="round" opacity="0.7"/>
    <text x="40" y="105" textAnchor="middle" fill="#4A7BCC" fontFamily="sans-serif" fontSize="14" fontWeight="bold">Agent</text>
  </g>
);

const GreenCheck = (
  <g transform="translate(220, 280)">
    <circle cx="30" cy="30" r="28" fill="#252538" stroke="#5BAD7A" strokeWidth="2.5"/>
    <path d="M16,30 L26,40 L44,20" fill="none" stroke="#5BAD7A" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
  </g>
);

const AutoLabel = (
  <g transform="translate(420, 590)">
    <rect x="0" y="0" width="360" height="50" rx="12" fill="#1E1E2E" stroke="#5BAD7A" strokeWidth="2"/>
    <text x="180" y="33" textAnchor="middle" fill="#5BAD7A" fontFamily="sans-serif" fontSize="22" fontWeight="bold">自动闭环 — 无需人工</text>
  </g>
);

const NoPerson = (
  <g transform="translate(160, 180)">
    <circle cx="30" cy="15" r="14" fill="#555570" opacity="0.25"/>
    <rect x="16" y="33" width="28" height="40" rx="8" fill="#555570" opacity="0.2"/>
    <line x1="8" y1="8" x2="52" y2="62" stroke="#E85650" strokeWidth="3" strokeLinecap="round" opacity="0.5"/>
    <circle cx="30" cy="35" r="35" fill="none" stroke="#E85650" strokeWidth="2" opacity="0.35"/>
    <text x="30" y="90" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="11" opacity="0.5">不需要人</text>
  </g>
);

export const closedLoopAutoSceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: Defs,
  background: Background,
  fragments: [
    { id: "loopRing", content: LoopRing, enterFrom: { x: 0, y: 400 }, enterDelay: 0, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 7, y: 8 }, exitTo: { x: 0, y: -500 }, exitSpin: 8 },
    { id: "reproduce", content: StepReproduce, enterFrom: { x: 0, y: -300 }, enterDelay: 100, floatAmp: { x: 12, y: 14 }, floatPeriod: { x: 5.5, y: 6 }, exitTo: { x: 0, y: -400 } },
    { id: "fix", content: StepFix, enterFrom: { x: 400, y: 0 }, enterDelay: 200, floatAmp: { x: 12, y: 14 }, floatPeriod: { x: 5, y: 6.5 }, exitTo: { x: 500, y: 0 } },
    { id: "verify", content: StepVerify, enterFrom: { x: 0, y: 300 }, enterDelay: 300, floatAmp: { x: 12, y: 14 }, floatPeriod: { x: 5.5, y: 6 }, exitTo: { x: 0, y: 400 } },
    { id: "agent", content: AgentIcon, enterFrom: { x: 0, y: 0 }, enterDelay: 200, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 6, y: 7 }, exitTo: { x: 0, y: -300 }, exitScale: 1.2 },
    { id: "check", content: GreenCheck, enterFrom: { x: -300, y: 0 }, enterDelay: 400, floatAmp: { x: 16, y: 20 }, floatPeriod: { x: 4, y: 5 }, exitTo: { x: -400, y: 0 } },
    { id: "noPerson", content: NoPerson, enterFrom: { x: -200, y: -200 }, enterDelay: 350, floatAmp: { x: 14, y: 16 }, floatPeriod: { x: 4.5, y: 5.5 }, floatRotate: 1.5, exitTo: { x: -300, y: -200 } },
    { id: "autoLabel", content: AutoLabel, enterFrom: { x: 0, y: 200 }, enterDelay: 500, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 7, y: 9 }, floatRotate: 1, exitTo: { x: 0, y: 300 } },
  ],
};
