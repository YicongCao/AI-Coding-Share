import type { SvgSceneDef } from "../SvgScene";

const Background = (
  <g>
    <rect width="1200" height="675" fill="#2B2B3D"/>
    <rect width="1200" height="675" fill="url(#jobsEnvelopeBgGlow)"/>
  </g>
);

const Defs = (
  <defs>
    <radialGradient id="jobsEnvelopeBgGlow" cx="50%" cy="30%" r="60%">
      <stop offset="0%" stopColor="#E8B84A" stopOpacity="0.12"/>
      <stop offset="100%" stopColor="#E8B84A" stopOpacity="0"/>
    </radialGradient>
  </defs>
);


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
  <g transform="translate(390, 120)">
    {/* Compact Macintosh shell with a square face and rounded beige body. */}
    <path d="M22,0 H258 Q280,0 284,24 L304,300 Q306,328 278,328 H2 Q-26,328 -24,300 L-4,24 Q-2,0 22,0 Z" fill="#D8D3C7" stroke="#B8B4A8" strokeWidth="2"/>
    <path d="M20,18 H260 Q268,18 269,27 L282,286 H2 L15,27 Q16,18 20,18 Z" fill="#E4E0D4" opacity="0.52"/>

    {/* Bezel and screen */}
    <rect x="38" y="34" width="220" height="166" rx="16" fill="#1E1E2E" stroke="#8D897E" strokeWidth="2"/>
    <rect x="56" y="52" width="184" height="130" rx="8" fill="#1C3C30" stroke="#FFFFFF" strokeOpacity="0.08" strokeWidth="1"/>
    <rect x="68" y="66" width="104" height="5" rx="2.5" fill="#5BAD7A" opacity="0.85"/>
    <rect x="68" y="84" width="142" height="5" rx="2.5" fill="#5BAD7A" opacity="0.62"/>
    <rect x="68" y="102" width="84" height="5" rx="2.5" fill="#5BAD7A" opacity="0.72"/>
    <rect x="68" y="120" width="124" height="5" rx="2.5" fill="#5BAD7A" opacity="0.5"/>
    <rect x="68" y="150" width="24" height="9" rx="2" fill="#5BAD7A" opacity="0.9"/>

    {/* Drive bay, vents, and front badge */}
    <rect x="72" y="224" width="154" height="14" rx="4" fill="#BDB8AB" stroke="#9C978C" strokeWidth="1.2"/>
    <rect x="196" y="252" width="44" height="10" rx="5" fill="#BDB8AB" opacity="0.65" stroke="#FFFFFF" strokeOpacity="0.08" strokeWidth="1"/>
    {[252, 264, 276].map((y, i) => (
      <line key={i} x1="62" y1={y} x2="156" y2={y} stroke="#B8B4A8" strokeWidth="1.6" opacity="0.62"/>
    ))}
    <g transform="translate(136, 292) scale(0.58)">
      <path d="M24,18 C20,10 13,10 9,16 C5,22 8,35 17,42 C20,44 22,41 25,41 C28,41 30,44 33,42 C41,35 44,23 40,17 C36,11 29,11 25,18 C24,19 24,19 24,18 Z" fill="#8C887E"/>
      <path d="M25,13 C26,5 32,1 38,1 C37,8 32,13 25,13 Z" fill="#8C887E"/>
      <circle cx="40" cy="20" r="5" fill="#E4E0D4"/>
    </g>
    <rect x="-32" y="328" width="328" height="16" rx="5" fill="#C6C1B6" stroke="#FFFFFF" strokeOpacity="0.08" strokeWidth="1"/>
  </g>
);

const SpeechBubble = (
  <g transform="translate(720, 140)">
    <rect x="0" y="0" width="340" height="180" rx="20" fill="#252538" stroke="#5BAD7A" strokeWidth="2"/>
    {/* Tail pointing left */}
    <polygon points="0,80 -30,100 0,110" fill="#252538" stroke="#5BAD7A" strokeWidth="2"/>
    <rect x="0" y="80" width="4" height="30" fill="#252538"/>
    {/* Spoken text */}
    <text x="30" y="46" fill="#5BAD7A" fontFamily="monospace" fontSize="14" opacity="0.8">Hello, I'm Macintosh</text>
    <rect x="30" y="60" width="260" height="5" rx="2.5" fill="#FFFFFF" opacity="0.25"/>
    <rect x="30" y="76" width="220" height="5" rx="2.5" fill="#FFFFFF" opacity="0.2"/>
    <text x="30" y="110" fill="#FFFFFF" fontFamily="sans-serif" fontSize="11" opacity="0.35">It sure is great to get</text>
    <text x="30" y="128" fill="#FFFFFF" fontFamily="sans-serif" fontSize="11" opacity="0.35">out of that bag.</text>
    <rect x="30" y="145" width="200" height="5" rx="2.5" fill="#FFFFFF" opacity="0.15"/>
  </g>
);

const SoundWaves = (
  <g transform="translate(658, 224)">
    {[
      { x: 0, opacity: 0.72, begin: "0s" },
      { x: 78, opacity: 0.5, begin: "-0.5s" },
      { x: 156, opacity: 0.32, begin: "-1s" },
      { x: 234, opacity: 0.16, begin: "-1.5s" },
    ].map((wave, i) => (
      <g key={i} transform={`translate(${wave.x}, 0)`} opacity={wave.opacity}>
        <animateTransform attributeName="transform" type="translate" values={`${wave.x} 0; ${wave.x + 92} 0`} dur="2.4s" begin={wave.begin} repeatCount="indefinite"/>
        <animate attributeName="opacity" values={`${wave.opacity};${wave.opacity * 0.55};0`} dur="2.4s" begin={wave.begin} repeatCount="indefinite"/>
        <path d="M0,-24 C18,-14 18,14 0,24" fill="none" stroke="#5BAD7A" strokeWidth="2.6" strokeLinecap="round"/>
        <path d="M18,-38 C42,-22 42,22 18,38" fill="none" stroke="#6EC8E6" strokeWidth="2.2" strokeLinecap="round"/>
        <path d="M40,-52 C70,-30 70,30 40,52" fill="none" stroke="#E8B84A" strokeWidth="1.8" strokeLinecap="round"/>
      </g>
    ))}
  </g>
);

const YearLabel = (
  <g transform="translate(100, 60)">
    <rect x="0" y="0" width="140" height="50" rx="12" fill="#1E1E2E" stroke="#E8B84A" strokeWidth="1.5"/>
    <text x="70" y="24" textAnchor="middle" fill="#E8B84A" fontFamily="sans-serif" fontSize="16" fontWeight="bold" opacity="0.85">1984</text>
    <text x="70" y="42" textAnchor="middle" fill="#E8B84A" fontFamily="sans-serif" fontSize="10" opacity="0.5">Macintosh</text>
  </g>
);

const AppleLogo = (
  <g transform="translate(1005, 46)">
    <rect x="0" y="0" width="112" height="112" rx="24" fill="#1E1E2E" stroke="#3A3A50" strokeWidth="1.5" opacity="0.72"/>
    <g transform="translate(30, 25) scale(1.18)">
      <path d="M24,18 C20,10 13,10 9,16 C5,22 8,35 17,42 C20,44 22,41 25,41 C28,41 30,44 33,42 C41,35 44,23 40,17 C36,11 29,11 25,18 C24,19 24,19 24,18 Z" fill="#B8B4A8" opacity="0.82"/>
      <path d="M25,13 C26,5 32,1 38,1 C37,8 32,13 25,13 Z" fill="#5BAD7A" opacity="0.82"/>
      <circle cx="40" cy="20" r="5" fill="#1E1E2E"/>
    </g>
    <text x="56" y="92" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="11" opacity="0.45">Apple</text>
  </g>
);

export const jobsEnvelopeSceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: Defs,
  background: Background,
  fragments: [
    { id: "curtains", content: Curtains, enterFrom: { x: 0, y: 0 }, enterDelay: 0, floatAmp: { x: 3, y: 4 }, floatPeriod: { x: 9.0, y: 10.0 }, exitTo: { x: 0, y: 0 }, exitScale: 1.08, exitOpacity: 0.6 },
    { id: "mac", content: ClassicMac, enterFrom: { x: -500, y: 0 }, enterDelay: 100, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 5.5, y: 7.0 }, exitTo: { x: -620, y: 0 }, exitSpin: -3 },
    { id: "bubble", content: SpeechBubble, enterFrom: { x: 400, y: 0 }, enterDelay: 300, floatAmp: { x: 12, y: 14 }, floatPeriod: { x: 4.8, y: 6.0 }, floatRotate: 2.5, exitTo: { x: 560, y: -80 }, exitScale: 1.1 },
    { id: "waves", content: SoundWaves, enterFrom: { x: -120, y: -80 }, enterDelay: 400, floatAmp: { x: 28, y: 10 }, floatPeriod: { x: 2.8, y: 4.5 }, exitTo: { x: 720, y: -120 }, exitSpin: 8, exitScale: 1.25, exitOpacity: 0 },
    { id: "year", content: YearLabel, enterFrom: { x: -300, y: -200 }, enterDelay: 200, floatAmp: { x: 14, y: 16 }, floatPeriod: { x: 4.0, y: 5.0 }, floatRotate: 1.5, exitTo: { x: -420, y: -260 }, exitSpin: -10 },
    { id: "apple", content: AppleLogo, enterFrom: { x: 300, y: -200 }, enterDelay: 500, floatAmp: { x: 18, y: 22 }, floatPeriod: { x: 3.2, y: 4.0 }, floatRotate: 2, exitTo: { x: 380, y: -320 }, exitSpin: 20, exitScale: 1.25 },
  ],
};
