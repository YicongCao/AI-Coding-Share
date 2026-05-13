import type { SvgSceneDef } from "../SvgScene";

const Background = <rect width="1200" height="675" fill="#2B2B3D"/>;

const VistaWindow = (
  <g>
    <rect x="280" y="80" width="640" height="440" rx="10" fill="#1E1E2E" stroke="#555570" strokeWidth="1.5"/>
    <rect x="280" y="80" width="640" height="32" rx="10" fill="#252538"/>
    <rect x="280" y="100" width="640" height="12" fill="#252538"/>
    <circle cx="305" cy="96" r="6" fill="#E85650"/>
    <circle cx="325" cy="96" r="6" fill="#E8B84A"/>
    <circle cx="345" cy="96" r="6" fill="#5BAD7A"/>
    <text x="600" y="100" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="13" opacity="0.7">Windows Vista</text>
    {/* Aero glass hint - translucent gradient bar */}
    <rect x="280" y="112" width="640" height="4" fill="#6EC8E6" opacity="0.15"/>
    {/* Content area grid lines */}
    <line x1="300" y1="160" x2="900" y2="160" stroke="#555570" strokeWidth="0.5" opacity="0.3"/>
    <line x1="300" y1="240" x2="900" y2="240" stroke="#555570" strokeWidth="0.5" opacity="0.3"/>
    <line x1="300" y1="320" x2="900" y2="320" stroke="#555570" strokeWidth="0.5" opacity="0.3"/>
    <line x1="300" y1="400" x2="900" y2="400" stroke="#555570" strokeWidth="0.5" opacity="0.3"/>
  </g>
);

const Sidebar = (
  <g>
    <rect x="280" y="112" width="140" height="408" fill="#252538"/>
    <rect x="295" y="135" width="100" height="8" rx="4" fill="#555570" opacity="0.5"/>
    <rect x="295" y="158" width="80" height="6" rx="3" fill="#555570" opacity="0.3"/>
    <rect x="295" y="178" width="90" height="6" rx="3" fill="#555570" opacity="0.3"/>
    <rect x="295" y="198" width="70" height="6" rx="3" fill="#555570" opacity="0.3"/>
    <rect x="295" y="230" width="100" height="8" rx="4" fill="#4A7BCC" opacity="0.6"/>
    <rect x="295" y="253" width="85" height="6" rx="3" fill="#555570" opacity="0.3"/>
    <rect x="295" y="273" width="95" height="6" rx="3" fill="#555570" opacity="0.3"/>
  </g>
);

const VoiceIcon = (
  <g transform="translate(600, 310)">
    <circle r="52" fill="none" stroke="#6EC8E6" strokeWidth="2.5" opacity="0.6"/>
    <circle r="38" fill="#252538"/>
    {/* Microphone */}
    <rect x="-8" y="-20" width="16" height="28" rx="8" fill="#6EC8E6"/>
    <path d="M-14,4 C-14,18 -4,26 0,26 C4,26 14,18 14,4" fill="none" stroke="#6EC8E6" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="0" y1="26" x2="0" y2="34" stroke="#6EC8E6" strokeWidth="2.5"/>
    <line x1="-10" y1="34" x2="10" y2="34" stroke="#6EC8E6" strokeWidth="2.5" strokeLinecap="round"/>
  </g>
);

const YearTag = (
  <g transform="translate(100, 90)">
    <rect x="0" y="0" width="100" height="44" rx="8" fill="#E8734A"/>
    <text x="50" y="29" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="20" fontWeight="bold">2007</text>
  </g>
);

const Waveform = (
  <g transform="translate(480, 440)">
    {[0, 18, 36, 54, 72, 90, 108, 126, 144, 162, 180, 198, 216, 234].map((x, i) => {
      const h = 8 + Math.sin(i * 0.9) * 14 + Math.cos(i * 1.4) * 8;
      return <rect key={i} x={x} y={-h / 2} width="10" height={h} rx="3" fill="#5BAD7A" opacity={0.4 + (i % 3) * 0.15}/>;
    })}
  </g>
);

const VistaLabel = (
  <g transform="translate(820, 560)">
    <rect x="0" y="0" width="160" height="42" rx="6" fill="#1E1E2E" stroke="#555570" strokeWidth="1"/>
    <text x="80" y="18" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="13">Windows Vista</text>
    <text x="80" y="35" textAnchor="middle" fill="#6EC8E6" fontFamily="sans-serif" fontSize="12">语音助手</text>
  </g>
);

const AssistantText = (
  <g transform="translate(100, 540)">
    <text x="0" y="0" fill="#E8B84A" fontFamily="sans-serif" fontSize="16" opacity="0.8">Voice Assistant</text>
    <text x="0" y="24" fill="#FFFFFF" fontFamily="sans-serif" fontSize="14" opacity="0.6">首个消费级语音助手</text>
  </g>
);

export const vistaWindowSceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: <defs/>,
  background: Background,
  fragments: [
    { id: "vistaWindow", content: VistaWindow, enterFrom: { x: 600, y: 0 }, enterDelay: 0, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 5.5, y: 7.0 }, exitTo: { x: -700, y: -80 }, exitSpin: -3 },
    { id: "sidebar", content: Sidebar, enterFrom: { x: -400, y: 0 }, enterDelay: 100, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 5.5, y: 7.0 }, exitTo: { x: -700, y: -80 }, exitSpin: -3 },
    { id: "voiceIcon", content: VoiceIcon, enterFrom: { x: 0, y: -350 }, enterDelay: 200, floatAmp: { x: 14, y: 16 }, floatPeriod: { x: 4.2, y: 5.8 }, exitTo: { x: 0, y: -400 }, exitScale: 0.6 },
    { id: "yearTag", content: YearTag, enterFrom: { x: -300, y: -200 }, enterDelay: 300, floatAmp: { x: 18, y: 14 }, floatPeriod: { x: 3.8, y: 5.2 }, exitTo: { x: -350, y: -250 }, exitSpin: -12 },
    { id: "waveform", content: Waveform, enterFrom: { x: 0, y: 300 }, enterDelay: 400, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 6.0, y: 8.0 }, exitTo: { x: 0, y: 380 }, exitSpin: 4 },
    { id: "vistaLabel", content: VistaLabel, enterFrom: { x: 300, y: 200 }, enterDelay: 500, floatAmp: { x: 12, y: 10 }, floatPeriod: { x: 5.0, y: 6.5 }, exitTo: { x: 350, y: 250 }, exitSpin: 8 },
    { id: "assistantText", content: AssistantText, enterFrom: { x: -250, y: 200 }, enterDelay: 600, floatAmp: { x: 10, y: 8 }, floatPeriod: { x: 7.0, y: 8.5 }, exitTo: { x: -300, y: 250 } },
  ],
};
