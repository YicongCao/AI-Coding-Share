import type { SvgSceneDef } from "../SvgScene";

const Background = <rect width="1200" height="675" fill="#2B2B3D"/>;

const NotepadWindow = (
  <g>
    <rect x="120" y="100" width="420" height="340" rx="8" fill="#1E1E2E" stroke="#555570" strokeWidth="1.2"/>
    <rect x="120" y="100" width="420" height="28" rx="8" fill="#252538"/>
    <rect x="120" y="118" width="420" height="10" fill="#252538"/>
    <circle cx="142" cy="114" r="5" fill="#E85650"/>
    <circle cx="160" cy="114" r="5" fill="#E8B84A"/>
    <circle cx="178" cy="114" r="5" fill="#5BAD7A"/>
    <text x="330" y="118" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="11" opacity="0.6">Notepad</text>
    {/* Text lines in notepad */}
    <rect x="145" y="148" width="180" height="5" rx="2.5" fill="#FFFFFF" opacity="0.3"/>
    <rect x="145" y="164" width="240" height="5" rx="2.5" fill="#FFFFFF" opacity="0.25"/>
    <rect x="145" y="180" width="160" height="5" rx="2.5" fill="#FFFFFF" opacity="0.3"/>
    <rect x="145" y="196" width="220" height="5" rx="2.5" fill="#FFFFFF" opacity="0.2"/>
    <rect x="145" y="212" width="190" height="5" rx="2.5" fill="#FFFFFF" opacity="0.25"/>
    <rect x="145" y="228" width="260" height="5" rx="2.5" fill="#FFFFFF" opacity="0.2"/>
    <rect x="145" y="244" width="140" height="5" rx="2.5" fill="#FFFFFF" opacity="0.3"/>
    <rect x="145" y="260" width="200" height="5" rx="2.5" fill="#FFFFFF" opacity="0.2"/>
    {/* Blinking cursor */}
    <rect x="145" y="280" width="2" height="14" fill="#6EC8E6" opacity="0.8"/>
  </g>
);

const ContextMenu = (
  <g>
    <rect x="650" y="160" width="200" height="240" rx="6" fill="#1E1E2E" stroke="#555570" strokeWidth="1.2"/>
    {/* Menu items */}
    <rect x="665" y="176" width="170" height="28" rx="4" fill="transparent"/>
    <text x="680" y="195" fill="#FFFFFF" fontFamily="sans-serif" fontSize="12" opacity="0.7">Open</text>
    <rect x="665" y="206" width="170" height="28" rx="4" fill="transparent"/>
    <text x="680" y="225" fill="#FFFFFF" fontFamily="sans-serif" fontSize="12" opacity="0.7">Save</text>
    <line x1="665" y1="238" x2="835" y2="238" stroke="#555570" strokeWidth="0.5" opacity="0.4"/>
    <rect x="665" y="244" width="170" height="28" rx="4" fill="#4A7BCC" opacity="0.3"/>
    <text x="680" y="263" fill="#FFFFFF" fontFamily="sans-serif" fontSize="12" fontWeight="bold">Properties</text>
    <rect x="665" y="276" width="170" height="28" rx="4" fill="transparent"/>
    <text x="680" y="295" fill="#FFFFFF" fontFamily="sans-serif" fontSize="12" opacity="0.7">Print</text>
    <rect x="665" y="308" width="170" height="28" rx="4" fill="transparent"/>
    <text x="680" y="327" fill="#FFFFFF" fontFamily="sans-serif" fontSize="12" opacity="0.7">Exit</text>
    <line x1="665" y1="340" x2="835" y2="340" stroke="#555570" strokeWidth="0.5" opacity="0.4"/>
    <rect x="665" y="348" width="170" height="28" rx="4" fill="transparent"/>
    <text x="680" y="367" fill="#FFFFFF" fontFamily="sans-serif" fontSize="12" opacity="0.5">Help</text>
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
    <text x="120" y="22" textAnchor="middle" fill="#1E1E2E" fontFamily="sans-serif" fontSize="13">"点击属性菜单"</text>
    <text x="120" y="40" textAnchor="middle" fill="#1E1E2E" fontFamily="sans-serif" fontSize="11" opacity="0.7">Click Properties Menu</text>
  </g>
);

const ArrowToMenu = (
  <g>
    {/* Arrow from voice bubble to Properties menu item */}
    <path d="M740,460 C740,420 740,300 740,268" fill="none" stroke="#E8B84A" strokeWidth="2.5" strokeDasharray="8 4" markerEnd="url(#arrowHead)"/>
    <polygon points="740,260 735,270 745,270" fill="#E8B84A"/>
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
  defs: <defs/>,
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
