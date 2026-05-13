import type { SvgSceneDef } from "../SvgScene";

const Background = <rect width="1200" height="675" fill="#2B2B3D"/>;

const Spotlight = (
  <g>
    <path d="M600,0 L420,450 L780,450 Z" fill="#E8B84A" opacity="0.04"/>
    <path d="M600,0 L480,450 L720,450 Z" fill="#E8B84A" opacity="0.06"/>
    <circle cx="600" cy="0" r="30" fill="#E8B84A" opacity="0.15"/>
    <text x="100" y="60" fill="#E8B84A" fontFamily="sans-serif" fontSize="14" opacity="0.5" fontWeight="bold">2008</text>
  </g>
);

const Stage = (
  <g>
    {/* Stage platform */}
    <path d="M250,520 L950,520 L1000,560 L200,560 Z" fill="#1E1E2E" stroke="#3A3A50" strokeWidth="1.5"/>
    <rect x="200" y="558" width="800" height="12" rx="2" fill="#252538"/>
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
    <rect x="15" y="130" width="50" height="60" rx="4" fill="#4A7BCC" opacity="0.7"/>
    <line x1="40" y1="130" x2="40" y2="190" stroke="#3A6AAA" strokeWidth="1"/>
  </g>
);

const Envelope = (
  <g transform="translate(750, 280)">
    {/* Envelope body */}
    <rect x="0" y="20" width="200" height="120" rx="8" fill="#D4A44A" opacity="0.8"/>
    <path d="M0,28 L100,90 L200,28" fill="none" stroke="#C49538" strokeWidth="2"/>
    {/* Flap open */}
    <path d="M0,28 L100,0 L200,28" fill="#E8C44A" opacity="0.7" stroke="#C49538" strokeWidth="1"/>
    {/* Laptop peeking out */}
    <rect x="30" y="5" width="140" height="6" rx="3" fill="#555570"/>
    <rect x="40" y="-2" width="120" height="4" rx="2" fill="#3A3A50"/>
    <text x="100" y="158" textAnchor="middle" fill="#E8C44A" fontFamily="sans-serif" fontSize="10" opacity="0.6">MacBook Air</text>
  </g>
);

const Laptop = (
  <g transform="translate(790, 200)">
    {/* Screen */}
    <rect x="0" y="0" width="120" height="75" rx="6" fill="#1E1E2E" stroke="#555570" strokeWidth="1.5"/>
    <rect x="8" y="8" width="104" height="55" rx="3" fill="#252538"/>
    <rect x="20" y="20" width="60" height="4" rx="2" fill="#5BAD7A" opacity="0.5"/>
    <rect x="20" y="30" width="80" height="4" rx="2" fill="#4A7BCC" opacity="0.4"/>
    <rect x="20" y="40" width="50" height="4" rx="2" fill="#6EC8E6" opacity="0.4"/>
    {/* Keyboard base */}
    <path d="M-10,75 L130,75 L140,85 L-20,85 Z" fill="#3A3A50"/>
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
  defs: <defs/>,
  background: Background,
  fragments: [
    { id: "spotlight", content: Spotlight, enterFrom: { x: 0, y: -300 }, enterDelay: 0, floatAmp: { x: 4, y: 6 }, floatPeriod: { x: 8.0, y: 10.0 }, exitTo: { x: 0, y: -420 }, exitOpacity: 1.4 },
    { id: "stage", content: Stage, enterFrom: { x: 0, y: 400 }, enterDelay: 100, floatAmp: { x: 4, y: 6 }, floatPeriod: { x: 8.0, y: 9.0 }, exitTo: { x: 0, y: 420 } },
    { id: "jobs", content: JobsFigure, enterFrom: { x: -500, y: 0 }, enterDelay: 200, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 5.0, y: 6.5 }, exitTo: { x: -560, y: 60 }, exitSpin: -4 },
    { id: "envelope", content: Envelope, enterFrom: { x: 400, y: 200 }, enterDelay: 350, floatAmp: { x: 14, y: 16 }, floatPeriod: { x: 4.5, y: 5.5 }, exitTo: { x: 360, y: -240 }, exitSpin: 18, exitScale: 1.15 },
    { id: "laptop", content: Laptop, enterFrom: { x: 300, y: -300 }, enterDelay: 450, floatAmp: { x: 16, y: 20 }, floatPeriod: { x: 4.0, y: 4.8 }, exitTo: { x: -520, y: -360 }, exitSpin: -22, exitScale: 1.2, exitDelay: 80 },
    { id: "stars", content: ExcitementStars, enterFrom: { x: 0, y: 300 }, enterDelay: 500, floatAmp: { x: 12, y: 14 }, floatPeriod: { x: 3.5, y: 4.2 }, exitTo: { x: 0, y: -220 }, exitScale: 1.35 },
  ],
};
