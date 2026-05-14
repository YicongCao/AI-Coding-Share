import type { SvgSceneDef } from "../SvgScene";

const Background = (
  <g>
    <rect width="1200" height="675" fill="#2B2B3D"/>
    <rect width="1200" height="675" fill="url(#vistaMenuBgGlow)"/>
  </g>
);

const Defs = (
  <defs>
    <radialGradient id="vistaMenuBgGlow" cx="50%" cy="30%" r="60%">
      <stop offset="0%" stopColor="#E8B84A" stopOpacity="0.12"/>
      <stop offset="100%" stopColor="#E8B84A" stopOpacity="0"/>
    </radialGradient>
  </defs>
);


const NotepadWindow = (
  <g>
    <rect x="105" y="90" width="450" height="360" rx="8" fill="#111827" stroke="#4A7BCC" strokeWidth="1.2"/>
    <rect x="105" y="90" width="450" height="34" rx="8" fill="#252538"/>
    <rect x="105" y="116" width="450" height="8" fill="#252538"/>
    <text x="130" y="112" fill="#FFFFFF" fontFamily="sans-serif" fontSize="12" opacity="0.78">Notepad - Windows</text>
    <g transform="translate(459, 90)">
      <rect x="0" y="0" width="32" height="34" fill="#252538"/>
      <line x1="10" y1="20" x2="22" y2="20" stroke="#FFFFFF" strokeWidth="1.4" opacity="0.72"/>
      <rect x="32" y="0" width="32" height="34" fill="#252538"/>
      <rect x="43" y="12" width="10" height="9" fill="none" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.72"/>
      <rect x="64" y="0" width="32" height="34" fill="#E85650" opacity="0.9"/>
      <line x1="75" y1="12" x2="85" y2="22" stroke="#FFFFFF" strokeWidth="1.4" strokeLinecap="round"/>
      <line x1="85" y1="12" x2="75" y2="22" stroke="#FFFFFF" strokeWidth="1.4" strokeLinecap="round"/>
    </g>
    <rect x="105" y="124" width="450" height="34" fill="#1E1E2E"/>
    <text x="130" y="145" fill="#FFFFFF" fontFamily="sans-serif" fontSize="11" opacity="0.52">File</text>
    <text x="174" y="145" fill="#FFFFFF" fontFamily="sans-serif" fontSize="11" opacity="0.52">Edit</text>
    <text x="218" y="145" fill="#FFFFFF" fontFamily="sans-serif" fontSize="11" opacity="0.52">View</text>
    <rect x="128" y="182" width="170" height="5" rx="2.5" fill="#FFFFFF" opacity="0.3"/>
    <rect x="128" y="198" width="236" height="5" rx="2.5" fill="#FFFFFF" opacity="0.24"/>
    <rect x="128" y="214" width="150" height="5" rx="2.5" fill="#FFFFFF" opacity="0.3"/>
    <rect x="128" y="230" width="218" height="5" rx="2.5" fill="#FFFFFF" opacity="0.2"/>
    <rect x="128" y="246" width="190" height="5" rx="2.5" fill="#FFFFFF" opacity="0.25"/>
    <rect x="128" y="262" width="262" height="5" rx="2.5" fill="#FFFFFF" opacity="0.2"/>
    <rect x="128" y="278" width="142" height="5" rx="2.5" fill="#FFFFFF" opacity="0.3"/>
    <rect x="128" y="294" width="204" height="5" rx="2.5" fill="#FFFFFF" opacity="0.2"/>
    <rect x="128" y="324" width="2" height="16" fill="#6EC8E6" opacity="0.85"/>
    <g transform="translate(430, 346)">
      <path d="M0,0 L0,38 L12,28 L21,46 L31,41 L22,24 L38,24 Z" fill="#FFFFFF" opacity="0.86"/>
      <circle cx="12" cy="12" r="24" fill="none" stroke="#E8B84A" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.65"/>
      <text x="12" y="-18" textAnchor="middle" fill="#E8B84A" fontFamily="sans-serif" fontSize="10">Right Click</text>
    </g>
  </g>
);

const ContextMenu = (
  <g>
    <rect x="640" y="150" width="230" height="286" rx="8" fill="#111827" stroke="#6EC8E6" strokeWidth="1.2"/>
    <rect x="640" y="150" width="230" height="34" rx="8" fill="#252538"/>
    <rect x="640" y="176" width="230" height="8" fill="#252538"/>
    <text x="662" y="172" fill="#FFFFFF" fontFamily="sans-serif" fontSize="12" opacity="0.8">Right-click Menu</text>
    <text x="848" y="172" textAnchor="end" fill="#6EC8E6" fontFamily="sans-serif" fontSize="10" opacity="0.8">右键菜单</text>
    <rect x="654" y="198" width="202" height="30" rx="4" fill="transparent"/>
    <text x="676" y="217" fill="#FFFFFF" fontFamily="sans-serif" fontSize="12" opacity="0.72">View</text>
    <text x="840" y="217" textAnchor="end" fill="#555570" fontFamily="sans-serif" fontSize="12">›</text>
    <rect x="654" y="230" width="202" height="30" rx="4" fill="transparent"/>
    <text x="676" y="249" fill="#FFFFFF" fontFamily="sans-serif" fontSize="12" opacity="0.72">Sort by</text>
    <text x="840" y="249" textAnchor="end" fill="#555570" fontFamily="sans-serif" fontSize="12">›</text>
    <rect x="654" y="262" width="202" height="30" rx="4" fill="transparent"/>
    <text x="676" y="281" fill="#FFFFFF" fontFamily="sans-serif" fontSize="12" opacity="0.72">Refresh</text>
    <line x1="654" y1="306" x2="856" y2="306" stroke="#555570" strokeWidth="0.6" opacity="0.45"/>
    <rect x="654" y="318" width="202" height="30" rx="4" fill="transparent"/>
    <text x="676" y="337" fill="#FFFFFF" fontFamily="sans-serif" fontSize="12" opacity="0.72">Open with</text>
    <text x="840" y="337" textAnchor="end" fill="#555570" fontFamily="sans-serif" fontSize="12">›</text>
    <rect x="654" y="350" width="202" height="34" rx="5" fill="#4A7BCC" opacity="0.52"/>
    <text x="676" y="371" fill="#FFFFFF" fontFamily="sans-serif" fontSize="13" fontWeight="bold">Properties</text>
    <text x="840" y="371" textAnchor="end" fill="#FFFFFF" fontFamily="sans-serif" fontSize="11" opacity="0.74">属性</text>
    <line x1="654" y1="398" x2="856" y2="398" stroke="#555570" strokeWidth="0.6" opacity="0.45"/>
    <rect x="654" y="408" width="202" height="18" rx="4" fill="#E8B84A" opacity="0.12"/>
    <text x="755" y="421" textAnchor="middle" fill="#E8B84A" fontFamily="sans-serif" fontSize="10">Command: open Properties</text>
  </g>
);

const VoiceBubbleOpen = (
  <g transform="translate(160, 480)">
    <rect x="0" y="0" width="200" height="50" rx="25" fill="#5BAD7A" opacity="0.9"/>
    <text x="100" y="22" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="13">"打开记事本"</text>
    <text x="100" y="40" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="11" opacity="0.7">Open Notepad</text>
  </g>
);

const VoiceBubbleClick = (
  <g transform="translate(620, 460)">
    <rect x="0" y="0" width="240" height="50" rx="25" fill="#6EC8E6" opacity="0.9"/>
    <text x="120" y="22" textAnchor="middle" fill="#1E1E2E" fontFamily="sans-serif" fontSize="13">"打开属性"</text>
    <text x="120" y="40" textAnchor="middle" fill="#1E1E2E" fontFamily="sans-serif" fontSize="11" opacity="0.7">Open Properties</text>
  </g>
);

const ArrowToMenu = (
  <g>
    {/* Arrow from voice bubble to the Windows Properties command. */}
    <path d="M740,460 C740,430 752,410 754,382" fill="none" stroke="#E8B84A" strokeWidth="2.5" strokeDasharray="8 4"/>
    <polygon points="754,374 748,386 760,386" fill="#E8B84A"/>
  </g>
);

const RuleMatchTag = (
  <g transform="translate(900, 300)">
    <rect x="0" y="0" width="140" height="36" rx="6" fill="#1E1E2E" stroke="#E8734A" strokeWidth="1.5"/>
    <text x="70" y="15" textAnchor="middle" fill="#E8734A" fontFamily="sans-serif" fontSize="11">Rule Matching</text>
    <text x="70" y="30" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="12">规则匹配</text>
  </g>
);

const MatchArrows = (
  <g opacity="0.6">
    <path d="M380,500 C450,490 550,460 620,460" fill="none" stroke="#E8B84A" strokeWidth="1.5" strokeDasharray="6 3"/>
    <path d="M900,320 L870,260" fill="none" stroke="#E8734A" strokeWidth="1.5" strokeDasharray="6 3"/>
    <circle cx="380" cy="500" r="4" fill="#5BAD7A"/>
    <circle cx="870" cy="260" r="4" fill="#E8734A"/>
  </g>
);

export const vistaMenuSceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: Defs,
  background: Background,
  fragments: [
    { id: "notepadWindow", content: NotepadWindow, enterFrom: { x: -500, y: 0 }, enterDelay: 0, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 6.0, y: 7.5 }, exitTo: { x: -600, y: -100 }, exitSpin: -4 },
    { id: "contextMenu", content: ContextMenu, enterFrom: { x: 400, y: -300 }, enterDelay: 150, floatAmp: { x: 10, y: 14 }, floatPeriod: { x: 5.0, y: 6.0 }, exitTo: { x: 450, y: -350 }, exitSpin: 6 },
    { id: "voiceBubbleOpen", content: VoiceBubbleOpen, enterFrom: { x: -300, y: 250 }, enterDelay: 250, floatAmp: { x: 12, y: 8 }, floatPeriod: { x: 4.5, y: 6.0 }, exitTo: { x: -350, y: 280 }, exitScale: 0.7 },
    { id: "voiceBubbleClick", content: VoiceBubbleClick, enterFrom: { x: 300, y: 250 }, enterDelay: 350, floatAmp: { x: 12, y: 8 }, floatPeriod: { x: 4.8, y: 5.5 }, exitTo: { x: 350, y: 280 }, exitScale: 0.7 },
    { id: "arrowToMenu", content: ArrowToMenu, enterFrom: { x: 0, y: 200 }, enterDelay: 450, floatAmp: { x: 10, y: 14 }, floatPeriod: { x: 5.0, y: 6.0 }, exitTo: { x: 0, y: -300 } },
    { id: "ruleMatchTag", content: RuleMatchTag, enterFrom: { x: 300, y: -200 }, enterDelay: 500, floatAmp: { x: 16, y: 12 }, floatPeriod: { x: 3.8, y: 5.0 }, exitTo: { x: 350, y: -250 }, exitSpin: 10 },
    { id: "matchArrows", content: MatchArrows, enterFrom: { x: 0, y: 0 }, enterDelay: 600, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 7.0, y: 8.0 }, exitTo: { x: 0, y: 300 } },
  ],
};
