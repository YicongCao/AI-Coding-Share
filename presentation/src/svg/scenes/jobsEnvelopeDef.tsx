import type { SvgSceneDef } from "../SvgScene";

const Background = <rect width="1200" height="675" fill="#2B2B3D"/>;

const Curtains = (
  <g>
    {/* Left curtain */}
    <path d="M0,0 Q60,100 40,340 Q30,500 0,675 L0,0 Z" fill="#4A2838" opacity="0.35"/>
    <path d="M0,0 Q40,80 30,280 Q20,450 0,675 L0,0 Z" fill="#5A3048" opacity="0.2"/>
    {/* Right curtain */}
    <path d="M1200,0 Q1140,100 1160,340 Q1170,500 1200,675 L1200,0 Z" fill="#4A2838" opacity="0.35"/>
    <path d="M1200,0 Q1160,80 1170,280 Q1180,450 1200,675 L1200,0 Z" fill="#5A3048" opacity="0.2"/>
  </g>
);

const ClassicMac = (
  <g transform="translate(420, 130)">
    {/* Outer shell */}
    <rect x="0" y="0" width="240" height="320" rx="18" fill="#D4D0C8" stroke="#B8B4A8" strokeWidth="2"/>
    {/* Bezel */}
    <rect x="20" y="20" width="200" height="160" rx="10" fill="#1E1E2E" stroke="#999" strokeWidth="1.5"/>
    {/* Screen */}
    <rect x="30" y="30" width="180" height="140" rx="6" fill="#2A4A2A"/>
    {/* Green text lines on screen */}
    <rect x="44" y="50" width="100" height="5" rx="2.5" fill="#5BAD7A" opacity="0.8"/>
    <rect x="44" y="65" width="140" height="5" rx="2.5" fill="#5BAD7A" opacity="0.6"/>
    <rect x="44" y="80" width="80" height="5" rx="2.5" fill="#5BAD7A" opacity="0.7"/>
    <rect x="44" y="95" width="120" height="5" rx="2.5" fill="#5BAD7A" opacity="0.5"/>
    <rect x="44" y="110" width="90" height="5" rx="2.5" fill="#5BAD7A" opacity="0.6"/>
    <rect x="44" y="130" width="20" height="8" rx="2" fill="#5BAD7A" opacity="0.9"/>
    {/* Floppy drive slot */}
    <rect x="60" y="205" width="120" height="12" rx="3" fill="#B8B4A8" stroke="#999" strokeWidth="1"/>
    {/* Vent lines */}
    {[240, 252, 264, 276].map((y, i) => (
      <line key={i} x1="60" y1={y} x2="180" y2={y} stroke="#B8B4A8" strokeWidth="1.5" opacity="0.5"/>
    ))}
    {/* Apple logo outline */}
    <g transform="translate(105, 290)">
      <path d="M15,0 Q20,-8 15,-12 Q8,-8 8,0 Q8,10 15,14 Q22,10 22,0 Q22,-8 15,-12" fill="none" stroke="#999" strokeWidth="1.5" opacity="0.6"/>
      <line x1="15" y1="-12" x2="18" y2="-18" stroke="#999" strokeWidth="1.2" opacity="0.5"/>
    </g>
    {/* Base/foot */}
    <rect x="-10" y="320" width="260" height="14" rx="4" fill="#C4C0B4"/>
  </g>
);

const SpeechBubble = (
  <g transform="translate(720, 140)">
    <rect x="0" y="0" width="340" height="180" rx="20" fill="#252538" stroke="#5BAD7A" strokeWidth="2"/>
    {/* Tail pointing left */}
    <polygon points="0,80 -30,100 0,110" fill="#252538" stroke="#5BAD7A" strokeWidth="2"/>
    <rect x="0" y="80" width="4" height="30" fill="#252538"/>
    {/* Text lines inside */}
    <rect x="30" y="30" width="180" height="8" rx="4" fill="#FFFFFF" opacity="0.6"/>
    <rect x="30" y="52" width="260" height="6" rx="3" fill="#FFFFFF" opacity="0.35"/>
    <rect x="30" y="70" width="220" height="6" rx="3" fill="#FFFFFF" opacity="0.3"/>
    <rect x="30" y="100" width="150" height="8" rx="4" fill="#5BAD7A" opacity="0.5"/>
    <rect x="30" y="122" width="280" height="6" rx="3" fill="#FFFFFF" opacity="0.25"/>
    <rect x="30" y="140" width="200" height="6" rx="3" fill="#FFFFFF" opacity="0.2"/>
  </g>
);

const SoundWaves = (
  <g transform="translate(680, 220)">
    <path d="M0,0 Q-15,30 0,60" fill="none" stroke="#5BAD7A" strokeWidth="2.5" strokeLinecap="round" opacity="0.6"/>
    <path d="M-15,-15 Q-35,30 -15,75" fill="none" stroke="#5BAD7A" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
    <path d="M-28,-25 Q-55,30 -28,85" fill="none" stroke="#5BAD7A" strokeWidth="1.5" strokeLinecap="round" opacity="0.25"/>
    {/* Musical notes */}
    <circle cx="-50" cy="10" r="5" fill="#5BAD7A" opacity="0.35"/>
    <line x1="-45" y1="10" x2="-45" y2="-10" stroke="#5BAD7A" strokeWidth="1.5" opacity="0.35"/>
    <circle cx="-65" cy="70" r="4" fill="#E8B84A" opacity="0.3"/>
    <line x1="-61" y1="70" x2="-61" y2="52" stroke="#E8B84A" strokeWidth="1.5" opacity="0.3"/>
  </g>
);

const YearLabel = (
  <g transform="translate(100, 60)">
    <rect x="0" y="0" width="140" height="50" rx="12" fill="#1E1E2E" stroke="#E8B84A" strokeWidth="1.5"/>
    <rect x="20" y="16" width="80" height="10" rx="5" fill="#E8B84A" opacity="0.7"/>
    <rect x="20" y="32" width="50" height="6" rx="3" fill="#E8B84A" opacity="0.35"/>
  </g>
);

const AppleLogo = (
  <g transform="translate(1020, 60)">
    <path d="M40,15 Q50,0 40,-10 Q25,0 25,15 Q25,35 40,45 Q55,35 55,15 Q55,0 40,-10" fill="none" stroke="#B8B4A8" strokeWidth="2.5" opacity="0.4"/>
    <line x1="40" y1="-10" x2="46" y2="-22" stroke="#B8B4A8" strokeWidth="2" opacity="0.35"/>
    <path d="M46,-22 Q52,-18 50,-12" fill="none" stroke="#5BAD7A" strokeWidth="1.5" opacity="0.3"/>
  </g>
);

export const jobsEnvelopeSceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: <defs/>,
  background: Background,
  fragments: [
    { id: "curtains", content: Curtains, enterFrom: { x: 0, y: 0 }, enterDelay: 0, floatAmp: { x: 3, y: 4 }, floatPeriod: { x: 9.0, y: 10.0 } },
    { id: "mac", content: ClassicMac, enterFrom: { x: -500, y: 0 }, enterDelay: 100, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 5.5, y: 7.0 } },
    { id: "bubble", content: SpeechBubble, enterFrom: { x: 400, y: 0 }, enterDelay: 300, floatAmp: { x: 12, y: 14 }, floatPeriod: { x: 4.8, y: 6.0 } },
    { id: "waves", content: SoundWaves, enterFrom: { x: 0, y: -200 }, enterDelay: 400, floatAmp: { x: 16, y: 18 }, floatPeriod: { x: 3.5, y: 4.5 } },
    { id: "year", content: YearLabel, enterFrom: { x: -300, y: -200 }, enterDelay: 200, floatAmp: { x: 14, y: 16 }, floatPeriod: { x: 4.0, y: 5.0 } },
    { id: "apple", content: AppleLogo, enterFrom: { x: 300, y: -200 }, enterDelay: 500, floatAmp: { x: 18, y: 22 }, floatPeriod: { x: 3.2, y: 4.0 } },
  ],
};
