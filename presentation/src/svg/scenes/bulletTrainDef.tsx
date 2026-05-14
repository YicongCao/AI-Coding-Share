import type { SvgSceneDef } from "../SvgScene";

const Background = (
  <g>
    <rect width="1200" height="675" fill="#2B2B3D"/>
    <rect width="1200" height="675" fill="url(#bulletTrainBgGlow)"/>
  </g>
);

const Defs = (
  <defs>
    <radialGradient id="bulletTrainBgGlow" cx="50%" cy="30%" r="60%">
      <stop offset="0%" stopColor="#6EC8E6" stopOpacity="0.12"/>
      <stop offset="100%" stopColor="#6EC8E6" stopOpacity="0"/>
    </radialGradient>
  </defs>
);


const StreamingRays = (
  <g opacity="0.2">
    {Array.from({ length: 9 }, (_, i) => (
      <line key={i} x1={110 + i * 12} y1={160 + i * 34} x2={1090 - i * 18} y2={105 + i * 46} stroke="#6EC8E6" strokeWidth={3 - i * 0.15} strokeLinecap="round"/>
    ))}
  </g>
);

const StreamingConsole = (
  <g transform="translate(250, 150)">
    <rect x="0" y="0" width="700" height="330" rx="18" fill="#1E1E2E" stroke="#6EC8E6" strokeWidth="2"/>
    <rect x="0" y="0" width="700" height="54" rx="18" fill="#252538" stroke="#FFFFFF" strokeOpacity="0.1" strokeWidth="1.5"/>
    <rect x="0" y="38" width="700" height="16" fill="#252538" stroke="#FFFFFF" strokeOpacity="0.1" strokeWidth="1.5"/>
    <circle cx="32" cy="27" r="6" fill="#E85650" stroke="#F07870" strokeOpacity="0.3" strokeWidth="1"/>
    <circle cx="56" cy="27" r="6" fill="#E8B84A" stroke="#F0D070" strokeOpacity="0.3" strokeWidth="1"/>
    <circle cx="80" cy="27" r="6" fill="#5BAD7A"/>
    <text x="350" y="33" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="13">response streaming</text>

    <text x="48" y="98" fill="#5BAD7A" fontFamily="monospace" fontSize="18">$ cursor agent --stream</text>
    <text x="48" y="142" fill="#FFFFFF" fontFamily="monospace" fontSize="24" fontWeight="bold">流式输出正在出现</text>
    <text x="48" y="184" fill="#FFFFFF" fontFamily="monospace" fontSize="18" opacity="0.75">先看到方向，再看到细节</text>
    <text x="48" y="224" fill="#6EC8E6" fontFamily="monospace" fontSize="16" opacity="0.85">token token token token token...</text>
    <rect x="405" y="205" width="12" height="24" rx="2" fill="#5BAD7A" opacity="0.85"/>

    {[0, 1, 2, 3].map(i => (
      <rect key={i} x={48 + i * 120} y="270" width={88 - i * 8} height="8" rx="4" fill="#6EC8E6" opacity={0.45 - i * 0.07}/>
    ))}
  </g>
);

const TokenStream = (
  <g opacity="0.65">
    {[0, 1, 2, 3, 4].map(i => (
      <g key={i} transform={`translate(${145 + i * 185}, ${520 + (i % 2) * 22})`}>
        <rect x="0" y="0" width="120" height="34" rx="17" fill="#252538" stroke="#555570" strokeWidth="1"/>
        <text x="60" y="22" textAnchor="middle" fill={i % 2 === 0 ? "#6EC8E6" : "#5BAD7A"} fontFamily="monospace" fontSize="13">chunk {i + 1}</text>
      </g>
    ))}
  </g>
);

const TypewriterEffect = (
  <g transform="translate(845, 245)">
    <rect x="0" y="0" width="210" height="92" rx="46" fill="#5BAD7A" opacity="0.16" stroke="#7DD49A" strokeOpacity="0.3" strokeWidth="1"/>
    <text x="105" y="36" textAnchor="middle" fill="#5BAD7A" fontFamily="sans-serif" fontSize="18" fontWeight="bold">打字机体验</text>
    <text x="105" y="62" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="13" opacity="0.55">不是等结果，是看它长出来</text>
  </g>
);

const SpeedBadge = (
  <g transform="translate(870, 380)">
    <rect x="0" y="0" width="160" height="48" rx="24" fill="#E8734A" opacity="0.2" stroke="#F09570" strokeOpacity="0.3" strokeWidth="1"/>
    <text x="80" y="31" textAnchor="middle" fill="#E8734A" fontFamily="sans-serif" fontSize="16" fontWeight="bold">即时反馈</text>
  </g>
);

const AccentParticles = (
  <g opacity="0.3">
    <circle cx="150" cy="200" r="3" fill="#E8B84A"/>
    <circle cx="1050" cy="250" r="4" fill="#6EC8E6"/>
    <circle cx="1080" cy="280" r="2.5" fill="#5BAD7A"/>
    <circle cx="180" cy="520" r="3" fill="#E8734A"/>
  </g>
);

export const bulletTrainSceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: Defs,
  background: Background,
  fragments: [
    { id: "streamingRays", content: StreamingRays, enterFrom: { x: -600, y: 0 }, enterDelay: 0, floatAmp: { x: 10, y: 8 }, floatPeriod: { x: 7, y: 9 } },
    { id: "console", content: StreamingConsole, enterFrom: { x: 0, y: 300 }, enterDelay: 100, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 6, y: 7 }, exitTo: { x: 0, y: 400 } },
    { id: "tokens", content: TokenStream, enterFrom: { x: -300, y: 0 }, enterDelay: 250, floatAmp: { x: 14, y: 8 }, floatPeriod: { x: 5, y: 6 }, exitTo: { x: 300, y: 0 } },
    { id: "typewriter", content: TypewriterEffect, enterFrom: { x: 300, y: 80 }, enterDelay: 350, floatAmp: { x: 10, y: 14 }, floatPeriod: { x: 5.5, y: 6.5 }, exitTo: { x: 300, y: 120 } },
    { id: "badge", content: SpeedBadge, enterFrom: { x: 300, y: 200 }, enterDelay: 450, floatAmp: { x: 18, y: 20 }, floatPeriod: { x: 4, y: 5 }, floatRotate: 1.5, exitTo: { x: 300, y: 200 }, exitSpin: 8 },
    { id: "particles", content: AccentParticles, enterFrom: { x: 0, y: 0 }, enterDelay: 550, floatAmp: { x: 16, y: 20 }, floatPeriod: { x: 3.5, y: 4.5 } },
  ],
};
