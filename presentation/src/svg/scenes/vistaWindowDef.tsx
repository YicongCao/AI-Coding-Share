import type { SvgSceneDef } from "../SvgScene";

const Background = (
  <g>
    <rect width="1200" height="675" fill="#2B2B3D"/>
    <rect width="1200" height="675" fill="url(#vistaWindowBgGlow)"/>
  </g>
);

const Defs = (
  <defs>
    <radialGradient id="vistaWindowBgGlow" cx="50%" cy="30%" r="60%">
      <stop offset="0%" stopColor="#E8B84A" stopOpacity="0.12"/>
      <stop offset="100%" stopColor="#E8B84A" stopOpacity="0"/>
    </radialGradient>
  </defs>
);


const VistaWindow = (
  <g>
    <rect x="251" y="71" width="700" height="470" rx="12" fill="#90C8E8" opacity="0.03"/>
    <rect x="250" y="70" width="700" height="470" rx="12" fill="#121A2A" stroke="#4A7BCC" strokeWidth="1.4" opacity="0.95"/>
    <path d="M250,420 C350,350 470,390 560,310 C650,230 780,260 950,150 L950,492 L250,492 Z" fill="#4A7BCC" opacity="0.14"/>
    <path d="M250,230 C390,180 460,230 560,170 C650,120 780,135 950,82" fill="none" stroke="#6EC8E6" strokeWidth="1.2" opacity="0.18"/>
    <rect x="250" y="492" width="700" height="48" rx="0" fill="#172033" opacity="0.96" stroke="#FFFFFF" strokeOpacity="0.08" strokeWidth="1"/>
    <rect x="250" y="520" width="700" height="20" rx="12" fill="#172033" stroke="#FFFFFF" strokeOpacity="0.08" strokeWidth="1"/>
    <g opacity="0.92" transform="translate(288, 514) scale(1.2) translate(-288, -514)">
      <rect x="282" y="508" width="9" height="9" fill="#FFFFFF"/>
      <rect x="294" y="508" width="9" height="9" fill="#FFFFFF"/>
      <rect x="282" y="520" width="9" height="9" fill="#FFFFFF"/>
      <rect x="294" y="520" width="9" height="9" fill="#FFFFFF"/>
    </g>
    <rect x="326" y="506" width="180" height="22" rx="11" fill="#252538" stroke="#555570" strokeWidth="0.8" opacity="0.95"/>
    <text x="360" y="521" fill="#FFFFFF" fontFamily="sans-serif" fontSize="10" opacity="0.55">Search</text>
    <rect x="858" y="510" width="58" height="14" rx="7" fill="#252538" opacity="0.7"/>
    <circle cx="928" cy="517" r="4" fill="#5BAD7A" opacity="0.8"/>
    <g transform="translate(275, 104)" opacity="0.8">
      <rect x="0" y="0" width="34" height="28" rx="5" fill="#252538" stroke="#555570" strokeWidth="1"/>
      <rect x="7" y="8" width="20" height="5" rx="2.5" fill="#6EC8E6" opacity="0.7"/>
      <text x="17" y="45" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="9" opacity="0.6">Apps</text>
    </g>
    <g transform="translate(275, 178)" opacity="0.8">
      <rect x="0" y="0" width="34" height="28" rx="5" fill="#252538" stroke="#555570" strokeWidth="1"/>
      <rect x="8" y="7" width="18" height="14" rx="3" fill="#E8B84A" opacity="0.7"/>
      <text x="17" y="45" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="9" opacity="0.6">Files</text>
    </g>
    <rect x="350" y="115" width="500" height="300" rx="6" fill="#1E1E2E" stroke="#6EC8E6" strokeWidth="1.2"/>
    <rect x="350" y="115" width="500" height="34" rx="6" fill="#252538" stroke="#FFFFFF" strokeOpacity="0.1" strokeWidth="1.5"/>
    <rect x="350" y="141" width="500" height="8" fill="#252538"/>
    <text x="374" y="137" fill="#FFFFFF" fontFamily="sans-serif" fontSize="12" opacity="0.78">Voice Assistant - Windows Desktop</text>
    <g transform="translate(735, 112) scale(1.2)">
      <rect x="0" y="0" width="32" height="34" fill="#252538"/>
      <line x1="10" y1="20" x2="22" y2="20" stroke="#FFFFFF" strokeWidth="1.4" opacity="0.72"/>
      <rect x="32" y="0" width="32" height="34" fill="#252538"/>
      <rect x="43" y="12" width="10" height="9" fill="none" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.72"/>
      <rect x="64" y="0" width="32" height="34" fill="#E85650" opacity="0.9"/>
      <line x1="75" y1="12" x2="85" y2="22" stroke="#FFFFFF" strokeWidth="1.4" strokeLinecap="round"/>
      <line x1="85" y1="12" x2="75" y2="22" stroke="#FFFFFF" strokeWidth="1.4" strokeLinecap="round"/>
    </g>
    <rect x="365" y="168" width="470" height="220" rx="6" fill="#151A28" stroke="#FFFFFF" strokeOpacity="0.08" strokeWidth="1"/>
    <rect x="385" y="190" width="170" height="12" rx="6" fill="#6EC8E6" opacity="0.42"/>
    <rect x="385" y="222" width="150" height="8" rx="4" fill="#FFFFFF" opacity="0.22"/>
    <rect x="385" y="246" width="132" height="8" rx="4" fill="#FFFFFF" opacity="0.16"/>
    <rect x="385" y="270" width="156" height="8" rx="4" fill="#FFFFFF" opacity="0.16"/>
    <rect x="610" y="190" width="190" height="112" rx="8" fill="#252538" stroke="#555570" strokeWidth="1"/>
    <text x="705" y="224" textAnchor="middle" fill="#6EC8E6" fontFamily="sans-serif" fontSize="13" fontWeight="bold">Voice Control</text>
    <text x="705" y="250" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="12" opacity="0.62">桌面语音命令</text>
    <rect x="632" y="270" width="146" height="14" rx="7" fill="#5BAD7A" opacity="0.28"/>
  </g>
);

const Sidebar = (
  <g>
    <rect x="365" y="168" width="210" height="220" fill="#202638" opacity="0.94" stroke="#FFFFFF" strokeOpacity="0.08" strokeWidth="1"/>
    <text x="385" y="192" fill="#FFFFFF" fontFamily="sans-serif" fontSize="12" opacity="0.72">Start Menu</text>
    <rect x="385" y="214" width="150" height="8" rx="4" fill="#555570" opacity="0.5"/>
    <rect x="385" y="238" width="130" height="6" rx="3" fill="#555570" opacity="0.35"/>
    <rect x="382" y="254" width="155" height="14" rx="4" fill="#5BAD7A" opacity="0.1"/>
    <rect x="385" y="258" width="146" height="6" rx="3" fill="#FFFFFF" opacity="0.45"/>
    <rect x="385" y="278" width="118" height="6" rx="3" fill="#555570" opacity="0.35"/>
    <rect x="385" y="310" width="150" height="22" rx="5" fill="#4A7BCC" opacity="0.45"/>
    <text x="405" y="325" fill="#FFFFFF" fontFamily="sans-serif" fontSize="11" opacity="0.82">Voice Shortcut</text>
    <rect x="385" y="348" width="126" height="6" rx="3" fill="#555570" opacity="0.35"/>
    <rect x="385" y="368" width="138" height="6" rx="3" fill="#555570" opacity="0.35"/>
  </g>
);

const VoiceIcon = (
  <g transform="translate(600, 310)">
    <circle r="52" fill="none" stroke="#6EC8E6" strokeWidth="2.5" opacity="0.6"/>
    <circle r="38" fill="#252538" stroke="#FFFFFF" strokeOpacity="0.1" strokeWidth="1.5"/>
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
    <text x="80" y="18" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="13">Windows Desktop</text>
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
  defs: Defs,
  background: Background,
  fragments: [
    { id: "vistaWindow", content: VistaWindow, enterFrom: { x: 600, y: 0 }, enterDelay: 0, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 5.5, y: 7.0 }, exitTo: { x: -700, y: -80 }, exitSpin: -3 },
    { id: "sidebar", content: Sidebar, enterFrom: { x: -400, y: 0 }, enterDelay: 100, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 5.5, y: 7.0 }, exitTo: { x: -700, y: -80 }, exitSpin: -3 },
    { id: "voiceIcon", content: VoiceIcon, enterFrom: { x: 0, y: -350 }, enterDelay: 200, floatAmp: { x: 14, y: 16 }, floatPeriod: { x: 4.2, y: 5.8 }, floatRotate: 1.5, exitTo: { x: 0, y: -400 }, exitScale: 0.6 },
    { id: "yearTag", content: YearTag, enterFrom: { x: -300, y: -200 }, enterDelay: 300, floatAmp: { x: 18, y: 14 }, floatPeriod: { x: 3.8, y: 5.2 }, floatRotate: 1.5, exitTo: { x: -350, y: -250 }, exitSpin: -12 },
    { id: "waveform", content: Waveform, enterFrom: { x: 0, y: 300 }, enterDelay: 400, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 6.0, y: 8.0 }, floatRotate: 1, exitTo: { x: 0, y: 380 }, exitSpin: 4 },
    { id: "vistaLabel", content: VistaLabel, enterFrom: { x: 300, y: 200 }, enterDelay: 500, floatAmp: { x: 12, y: 10 }, floatPeriod: { x: 5.0, y: 6.5 }, exitTo: { x: 350, y: 250 }, exitSpin: 8 },
    { id: "assistantText", content: AssistantText, enterFrom: { x: -250, y: 200 }, enterDelay: 600, floatAmp: { x: 10, y: 8 }, floatPeriod: { x: 7.0, y: 8.5 }, exitTo: { x: -300, y: 250 } },
  ],
};
