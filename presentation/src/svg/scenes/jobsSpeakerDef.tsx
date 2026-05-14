import type { SvgSceneDef } from "../SvgScene";

const Background = (
  <g>
    <rect width="1200" height="675" fill="#2B2B3D"/>
    <rect width="1200" height="675" fill="url(#jobsSpeakerBgGlow)"/>
  </g>
);

const Defs = (
  <defs>
    <radialGradient id="jobsSpeakerBgGlow" cx="50%" cy="30%" r="60%">
      <stop offset="0%" stopColor="#E8B84A" stopOpacity="0.12"/>
      <stop offset="100%" stopColor="#E8B84A" stopOpacity="0"/>
    </radialGradient>
  </defs>
);


const Spotlight = (
  <g>
    <path d="M600,0 L420,450 L780,450 Z" fill="#E8B84A" opacity="0.04"/>
    <path d="M600,0 L480,450 L720,450 Z" fill="#E8B84A" opacity="0.06"/>
    <circle cx="600" cy="0" r="30" fill="#E8B84A" opacity="0.15" stroke="#F0D070" strokeOpacity="0.3" strokeWidth="1"/>
    <text x="100" y="60" fill="#E8B84A" fontFamily="sans-serif" fontSize="14" opacity="0.5" fontWeight="bold">2008</text>
  </g>
);

const Stage = (
  <g>
    {/* Stage platform */}
    <path d="M250,520 L950,520 L1000,560 L200,560 Z" fill="#1E1E2E" stroke="#3A3A50" strokeWidth="1.5"/>
    <rect x="200" y="558" width="800" height="12" rx="2" fill="#252538" stroke="#FFFFFF" strokeOpacity="0.1" strokeWidth="1.5"/>
    {/* Podium */}
    <rect x="540" y="420" width="120" height="100" rx="8" fill="#252538" stroke="#555570" strokeWidth="1.2"/>
    <rect x="554" y="436" width="92" height="6" rx="3" fill="#555570" opacity="0.35"/>
    <rect x="554" y="450" width="70" height="5" rx="2.5" fill="#555570" opacity="0.25"/>
    {/* Microphone */}
    <line x1="600" y1="390" x2="600" y2="420" stroke="#555570" strokeWidth="2.5"/>
    <circle cx="600" cy="384" r="8" fill="#555570" opacity="0.7"/>
  </g>
);

const JobsFigure = (
  <g transform="translate(560, 200)">
    {/* Head */}
    <circle cx="40" cy="20" r="28" fill="#F5C5A3"/>
    {/* Glasses */}
    <circle cx="30" cy="16" r="10" fill="none" stroke="#333" strokeWidth="2"/>
    <circle cx="54" cy="16" r="10" fill="none" stroke="#333" strokeWidth="2"/>
    <line x1="40" y1="16" x2="44" y2="16" stroke="#333" strokeWidth="2"/>
    {/* Hair (short) */}
    <path d="M12,10 Q20,-8 40,-12 Q60,-8 68,10" fill="#555570" opacity="0.5"/>
    {/* Black turtleneck body */}
    <path d="M10,50 Q5,70 8,130 L72,130 Q75,70 70,50 Q60,42 40,42 Q20,42 10,50 Z" fill="#1E1E2E"/>
    {/* Turtleneck collar */}
    <path d="M22,48 Q40,40 58,48" fill="none" stroke="#333" strokeWidth="2.5" strokeLinecap="round"/>
    {/* Arms */}
    <path d="M10,70 Q-10,90 -20,120 Q-24,130 -15,132" fill="#1E1E2E" stroke="#333" strokeWidth="0.5"/>
    <path d="M70,70 Q90,90 100,120 Q104,130 95,132" fill="#1E1E2E" stroke="#333" strokeWidth="0.5"/>
    {/* Hands */}
    <circle cx="-15" cy="132" r="8" fill="#F5C5A3"/>
    <circle cx="95" cy="132" r="8" fill="#F5C5A3"/>
    {/* Jeans */}
    <rect x="15" y="130" width="50" height="60" rx="4" fill="#4A7BCC" opacity="0.7" stroke="#6A9BE0" strokeOpacity="0.3" strokeWidth="1"/>
    <line x1="40" y1="130" x2="40" y2="190" stroke="#3A6AAA" strokeWidth="1"/>
  </g>
);

const Envelope = (
  <g transform="translate(750, 280)">
    {/* Envelope body */}
    <rect x="0" y="20" width="200" height="120" rx="8" fill="#D4A44A" opacity="0.8" stroke="#FFFFFF" strokeOpacity="0.08" strokeWidth="1"/>
    <path d="M0,28 L100,90 L200,28" fill="none" stroke="#C49538" strokeWidth="2"/>
    {/* Flap open */}
    <path d="M0,28 L100,0 L200,28" fill="#E8C44A" opacity="0.7" stroke="#C49538" strokeWidth="1"/>
    {/* Slot where the closed MacBook is being pulled out */}
    <rect x="28" y="6" width="144" height="10" rx="5" fill="#1E1E2E" opacity="0.55" stroke="#FFFFFF" strokeOpacity="0.1" strokeWidth="1.5"/>
    <rect x="42" y="10" width="116" height="4" rx="2" fill="#C4C7CC" opacity="0.45"/>
    <text x="100" y="158" textAnchor="middle" fill="#E8C44A" fontFamily="sans-serif" fontSize="10" opacity="0.6">MacBook Air</text>
  </g>
);

const Laptop = (
  <g transform="translate(774, 218) rotate(-5 86 54)">
    {/* Closed MacBook lid */}
    <rect x="0" y="0" width="172" height="108" rx="14" fill="#C4C7CC" stroke="#F0F2F4" strokeWidth="1.5"/>
    <rect x="8" y="8" width="156" height="92" rx="10" fill="#D7DADE" opacity="0.55" stroke="#FFFFFF" strokeOpacity="0.08" strokeWidth="1"/>
    <path d="M16,94 L156,94" stroke="#A8ADB4" strokeWidth="1.4" opacity="0.45"/>
    <g transform="translate(72, 42)" fill="#1E1E2E" opacity="0.6">
      <path d="M14,2 C19,-5 25,-2 27,4 C21,5 17,7 14,12 C11,8 8,5 2,5 C5,-1 10,-3 14,2 Z"/>
      <path d="M14,14 C10,8 3,8 1,16 C-1,24 5,36 12,34 C15,33 17,33 20,34 C27,36 33,24 31,16 C29,8 22,8 18,14 C17,16 15,16 14,14 Z"/>
    </g>
    <path d="M-8,108 L180,108 L168,118 L4,118 Z" fill="#8E949B" opacity="0.75"/>
  </g>
);

const ExcitementStars = (
  <g>
    {[
      { x: 200, y: 480, s: 12 },
      { x: 350, y: 500, s: 8 },
      { x: 850, y: 490, s: 10 },
      { x: 1000, y: 470, s: 8 },
      { x: 450, y: 510, s: 6 },
      { x: 750, y: 510, s: 7 },
    ].map((st, i) => (
      <g key={i} transform={`translate(${st.x}, ${st.y})`} opacity={0.4 + (i % 3) * 0.1}>
        <line x1={-st.s} y1="0" x2={st.s} y2="0" stroke="#E8B84A" strokeWidth="2"/>
        <line x1="0" y1={-st.s} x2="0" y2={st.s} stroke="#E8B84A" strokeWidth="2"/>
        <line x1={-st.s * 0.6} y1={-st.s * 0.6} x2={st.s * 0.6} y2={st.s * 0.6} stroke="#E8B84A" strokeWidth="1.2"/>
        <line x1={st.s * 0.6} y1={-st.s * 0.6} x2={-st.s * 0.6} y2={st.s * 0.6} stroke="#E8B84A" strokeWidth="1.2"/>
      </g>
    ))}
  </g>
);

export const jobsSpeakerSceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: Defs,
  background: Background,
  fragments: [
    { id: "spotlight", content: Spotlight, enterFrom: { x: 0, y: -300 }, enterDelay: 0, floatAmp: { x: 4, y: 6 }, floatPeriod: { x: 8.0, y: 10.0 }, exitTo: { x: 0, y: -420 }, exitOpacity: 1.4 },
    { id: "stage", content: Stage, enterFrom: { x: 0, y: 400 }, enterDelay: 100, floatAmp: { x: 4, y: 6 }, floatPeriod: { x: 8.0, y: 9.0 }, exitTo: { x: 0, y: 420 } },
    { id: "jobs", content: JobsFigure, enterFrom: { x: -500, y: 0 }, enterDelay: 200, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 5.0, y: 6.5 }, exitTo: { x: -560, y: 60 }, exitSpin: -4 },
    { id: "envelope", content: Envelope, enterFrom: { x: 400, y: 200 }, enterDelay: 350, floatAmp: { x: 14, y: 16 }, floatPeriod: { x: 4.5, y: 5.5 }, floatRotate: 1.5, exitTo: { x: 360, y: -240 }, exitSpin: 18, exitScale: 1.15 },
    { id: "laptop", content: Laptop, enterFrom: { x: 20, y: 160 }, enterDelay: 450, floatAmp: { x: 10, y: 58 }, floatPeriod: { x: 4.0, y: 2.25 }, floatRotate: 2, exitTo: { x: -520, y: -360 }, exitSpin: -22, exitScale: 1.2, exitDelay: 80 },
    { id: "stars", content: ExcitementStars, enterFrom: { x: 0, y: 300 }, enterDelay: 500, floatAmp: { x: 12, y: 14 }, floatPeriod: { x: 3.5, y: 4.2 }, floatRotate: 3, exitTo: { x: 0, y: -220 }, exitScale: 1.35 },
  ],
};
