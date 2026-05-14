import type { SvgSceneDef } from "../SvgScene";

const SharedDefs = (
  <defs>
    <linearGradient id="hairGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor="#E8734A"/>
      <stop offset="100%" stopColor="#D4612F"/>
    </linearGradient>
    <linearGradient id="sweaterGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#5BAD7A"/>
      <stop offset="100%" stopColor="#4A9968"/>
    </linearGradient>
    <linearGradient id="barGrad" x1="0" y1="1" x2="0" y2="0">
      <stop offset="0%" stopColor="#3D8B5E"/>
      <stop offset="100%" stopColor="#5BAD7A"/>
    </linearGradient>
    <clipPath id="mainWindowClip">
      <rect x="400" y="55" width="720" height="450" rx="12"/>
    </clipPath>
    <clipPath id="codeWindowClip">
      <rect x="870" y="150" width="280" height="340" rx="10"/>
    </clipPath>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000" floodOpacity="0.3"/>
    </filter>
    <radialGradient id="coverBgGlow" cx="50%" cy="40%" r="60%">
      <stop offset="0%" stopColor="#6EC8E6" stopOpacity="0.12"/>
      <stop offset="100%" stopColor="#6EC8E6" stopOpacity="0"/>
    </radialGradient>
  </defs>
);

const Background = (
  <g>
    <rect width="1200" height="675" fill="#2B2B3D"/>
    <rect width="1200" height="675" fill="url(#coverBgGlow)"/>
  </g>
);

// ── Fragment 1: Main UI/design window ──
const MainWindow = (
  <g filter="url(#shadow)">
    <rect x="400" y="55" width="720" height="450" rx="12" fill="#1E1E2E" stroke="#FFFFFF" strokeOpacity="0.1" strokeWidth="1.5"/>
    <circle cx="428" cy="79" r="5" fill="#E85650"/>
    <circle cx="446" cy="79" r="5" fill="#E8B84A"/>
    <circle cx="464" cy="79" r="5" fill="#5BAD7A"/>
    <g clipPath="url(#mainWindowClip)">
      <g stroke="#3A3A50" strokeWidth="0.5" opacity="0.4">
        <line x1="400" y1="155" x2="1120" y2="155"/>
        <line x1="400" y1="255" x2="1120" y2="255"/>
        <line x1="400" y1="355" x2="1120" y2="355"/>
        <line x1="550" y1="55" x2="550" y2="505"/>
        <line x1="700" y1="55" x2="700" y2="505"/>
        <line x1="850" y1="55" x2="850" y2="505"/>
        <line x1="1000" y1="55" x2="1000" y2="505"/>
      </g>
      <g stroke="#555570" strokeWidth="1.5" fill="none" opacity="0.6">
        <line x1="510" y1="185" x2="660" y2="185"/>
        <line x1="660" y1="185" x2="810" y2="185"/>
        <line x1="810" y1="185" x2="960" y2="185"/>
        <line x1="510" y1="185" x2="510" y2="305"/>
        <line x1="660" y1="185" x2="660" y2="305"/>
        <line x1="810" y1="185" x2="810" y2="305"/>
        <line x1="960" y1="185" x2="960" y2="305"/>
        <line x1="510" y1="305" x2="660" y2="305"/>
        <line x1="660" y1="305" x2="810" y2="305"/>
        <line x1="810" y1="305" x2="960" y2="305"/>
        <line x1="510" y1="305" x2="510" y2="405"/>
        <line x1="660" y1="305" x2="660" y2="405"/>
        <line x1="810" y1="305" x2="810" y2="405"/>
        <line x1="510" y1="185" x2="660" y2="305"/>
        <line x1="660" y1="185" x2="810" y2="305"/>
        <line x1="810" y1="185" x2="960" y2="305"/>
        <line x1="660" y1="185" x2="510" y2="305"/>
        <line x1="810" y1="185" x2="660" y2="305"/>
        <line x1="960" y1="185" x2="810" y2="305"/>
      </g>
      <g fill="#FFFFFF">
        <circle cx="510" cy="185" r="9"/>
        <circle cx="660" cy="185" r="9"/>
        <circle cx="510" cy="305" r="9"/>
        <circle cx="660" cy="305" r="9"/>
        <circle cx="810" cy="305" r="9"/>
        <circle cx="810" cy="405" r="7"/>
      </g>
      <circle cx="520" cy="245" r="38" fill="none" stroke="#555570" strokeWidth="2"/>
      <circle cx="520" cy="245" r="4" fill="#555570"/>
      <circle cx="670" cy="400" r="48" fill="none" stroke="#555570" strokeWidth="2"/>
      <g>
        <rect x="445" y="330" width="105" height="72" rx="6" fill="#252538" stroke="#FFFFFF" strokeOpacity="0.1" strokeWidth="1.5"/>
        <circle cx="465" cy="350" r="9" fill="#555570"/>
        <rect x="482" y="345" width="52" height="4" rx="2" fill="#555570"/>
        <rect x="482" y="355" width="36" height="4" rx="2" fill="#555570" opacity="0.6"/>
        <rect x="455" y="370" width="82" height="4" rx="2" fill="#555570" opacity="0.4"/>
        <rect x="455" y="380" width="62" height="4" rx="2" fill="#555570" opacity="0.3"/>
      </g>
      <rect x="600" y="205" width="125" height="38" rx="6" fill="#4A7BCC" stroke="#6A9BE0" strokeOpacity="0.3" strokeWidth="1"/>
      <rect x="740" y="300" width="42" height="42" rx="4" fill="#E85650"/>
      <g>
        <rect x="830" y="130" width="58" height="58" rx="8" fill="#E8B84A" stroke="#F0D070" strokeOpacity="0.3" strokeWidth="1"/>
        <text x="859" y="167" textAnchor="middle" fill="#1E1E2E" fontFamily="monospace" fontSize="18" fontWeight="bold">{"</>"}</text>
      </g>
      <g>
        <rect x="1050" y="72" width="58" height="58" rx="8" fill="#4A7BCC"/>
        <g transform="translate(1079, 101)" fill="none" stroke="#FFFFFF" strokeWidth="2">
          <circle r="8"/>
          <circle r="3" fill="#FFFFFF"/>
          <line x1="0" y1="-12" x2="0" y2="-8"/>
          <line x1="0" y1="8" x2="0" y2="12"/>
          <line x1="-12" y1="0" x2="-8" y2="0"/>
          <line x1="8" y1="0" x2="12" y2="0"/>
          <line x1="-8.5" y1="-8.5" x2="-5.7" y2="-5.7"/>
          <line x1="5.7" y1="5.7" x2="8.5" y2="8.5"/>
          <line x1="8.5" y1="-8.5" x2="5.7" y2="-5.7"/>
          <line x1="-5.7" y1="5.7" x2="-8.5" y2="8.5"/>
        </g>
      </g>
      <rect x="1020" y="275" width="85" height="135" rx="6" fill="#2D4A3D" stroke="#FFFFFF" strokeOpacity="0.1" strokeWidth="1.5"/>
      <rect x="1033" y="292" width="58" height="4" rx="2" fill="#5BAD7A" opacity="0.6"/>
      <rect x="1033" y="304" width="46" height="4" rx="2" fill="#5BAD7A" opacity="0.4"/>
      <rect x="1033" y="316" width="58" height="4" rx="2" fill="#5BAD7A" opacity="0.5"/>
      <rect x="1033" y="336" width="52" height="4" rx="2" fill="#5BAD7A" opacity="0.3"/>
      <rect x="1033" y="348" width="58" height="4" rx="2" fill="#5BAD7A" opacity="0.5"/>
      <rect x="1033" y="360" width="42" height="4" rx="2" fill="#5BAD7A" opacity="0.4"/>
      <rect x="1033" y="380" width="58" height="4" rx="2" fill="#5BAD7A" opacity="0.3"/>
      <rect x="1033" y="392" width="50" height="4" rx="2" fill="#5BAD7A" opacity="0.5"/>
    </g>
  </g>
);

// ── Fragment 2: Code editor window ──
const CodeWindow = (
  <g filter="url(#shadow)">
    <rect x="870" y="150" width="280" height="340" rx="10" fill="#1E1E2E" stroke="#3A3A50" strokeWidth="1.5" strokeDasharray="6 4"/>
    <g clipPath="url(#codeWindowClip)">
      <rect x="895" y="180" width="60" height="6" rx="3" fill="#5BAD7A" opacity="0.8"/>
      <rect x="965" y="180" width="90" height="6" rx="3" fill="#5BAD7A" opacity="0.6"/>
      <rect x="895" y="198" width="45" height="6" rx="3" fill="#6EC8E6" opacity="0.7"/>
      <rect x="948" y="198" width="70" height="6" rx="3" fill="#5BAD7A" opacity="0.8"/>
      <rect x="1026" y="198" width="40" height="6" rx="3" fill="#E8C44A" opacity="0.7"/>
      <rect x="910" y="216" width="80" height="6" rx="3" fill="#5BAD7A" opacity="0.7"/>
      <rect x="998" y="216" width="55" height="6" rx="3" fill="#E8734A" opacity="0.6"/>
      <rect x="910" y="234" width="50" height="6" rx="3" fill="#E8C44A" opacity="0.7"/>
      <rect x="968" y="234" width="100" height="6" rx="3" fill="#5BAD7A" opacity="0.6"/>
      <rect x="895" y="252" width="70" height="6" rx="3" fill="#6EC8E6" opacity="0.7"/>
      <rect x="973" y="252" width="60" height="6" rx="3" fill="#5BAD7A" opacity="0.7"/>
      <rect x="910" y="270" width="90" height="6" rx="3" fill="#5BAD7A" opacity="0.8"/>
      <rect x="1008" y="270" width="40" height="6" rx="3" fill="#E8734A" opacity="0.5"/>
      <rect x="910" y="288" width="55" height="6" rx="3" fill="#E8C44A" opacity="0.6"/>
      <rect x="973" y="288" width="75" height="6" rx="3" fill="#6EC8E6" opacity="0.7"/>
      <rect x="895" y="306" width="40" height="6" rx="3" fill="#5BAD7A" opacity="0.7"/>
      <rect x="943" y="306" width="100" height="6" rx="3" fill="#5BAD7A" opacity="0.5"/>
      <rect x="910" y="324" width="85" height="6" rx="3" fill="#E8734A" opacity="0.6"/>
      <rect x="1003" y="324" width="50" height="6" rx="3" fill="#5BAD7A" opacity="0.7"/>
      <rect x="895" y="342" width="60" height="6" rx="3" fill="#6EC8E6" opacity="0.7"/>
      <rect x="963" y="342" width="80" height="6" rx="3" fill="#E8C44A" opacity="0.6"/>
      <rect x="910" y="360" width="70" height="6" rx="3" fill="#5BAD7A" opacity="0.8"/>
      <rect x="988" y="360" width="45" height="6" rx="3" fill="#5BAD7A" opacity="0.5"/>
      <rect x="895" y="378" width="50" height="6" rx="3" fill="#E8C44A" opacity="0.6"/>
      <rect x="953" y="378" width="90" height="6" rx="3" fill="#6EC8E6" opacity="0.7"/>
      <rect x="910" y="396" width="75" height="6" rx="3" fill="#5BAD7A" opacity="0.7"/>
      <rect x="895" y="414" width="55" height="6" rx="3" fill="#E8734A" opacity="0.5"/>
      <rect x="958" y="414" width="65" height="6" rx="3" fill="#5BAD7A" opacity="0.7"/>
      <rect x="910" y="432" width="40" height="6" rx="3" fill="#6EC8E6" opacity="0.6"/>
      <rect x="958" y="432" width="80" height="6" rx="3" fill="#5BAD7A" opacity="0.7"/>
      <rect x="895" y="450" width="95" height="6" rx="3" fill="#5BAD7A" opacity="0.8"/>
      <rect x="910" y="468" width="65" height="6" rx="3" fill="#E8C44A" opacity="0.6"/>
      <rect x="983" y="468" width="55" height="6" rx="3" fill="#5BAD7A" opacity="0.5"/>
    </g>
  </g>
);

// ── Fragment 3: Bottom small code window ──
const BottomCode = (
  <g filter="url(#shadow)">
    <rect x="440" y="420" width="310" height="165" rx="10" fill="#1E1E2E" stroke="#3A3A50" strokeWidth="1.5" strokeDasharray="6 4"/>
    <rect x="466" y="448" width="55" height="5" rx="2.5" fill="#5BAD7A" opacity="0.7"/>
    <rect x="529" y="448" width="80" height="5" rx="2.5" fill="#6EC8E6" opacity="0.6"/>
    <rect x="466" y="462" width="40" height="5" rx="2.5" fill="#E8C44A" opacity="0.6"/>
    <rect x="514" y="462" width="95" height="5" rx="2.5" fill="#5BAD7A" opacity="0.5"/>
    <rect x="481" y="476" width="70" height="5" rx="2.5" fill="#5BAD7A" opacity="0.7"/>
    <rect x="559" y="476" width="45" height="5" rx="2.5" fill="#E8734A" opacity="0.5"/>
    <rect x="626" y="476" width="30" height="5" rx="2.5" fill="#4A7BCC" opacity="0.5"/>
    <rect x="481" y="490" width="50" height="5" rx="2.5" fill="#6EC8E6" opacity="0.6"/>
    <rect x="539" y="490" width="65" height="5" rx="2.5" fill="#E8C44A" opacity="0.5"/>
    <rect x="466" y="504" width="85" height="5" rx="2.5" fill="#5BAD7A" opacity="0.6"/>
    <rect x="559" y="504" width="40" height="5" rx="2.5" fill="#5BAD7A" opacity="0.4"/>
    <rect x="481" y="518" width="60" height="5" rx="2.5" fill="#E8734A" opacity="0.5"/>
    <rect x="549" y="518" width="75" height="5" rx="2.5" fill="#6EC8E6" opacity="0.6"/>
    <rect x="466" y="532" width="45" height="5" rx="2.5" fill="#5BAD7A" opacity="0.7"/>
    <rect x="519" y="532" width="90" height="5" rx="2.5" fill="#5BAD7A" opacity="0.4"/>
    <rect x="481" y="546" width="70" height="5" rx="2.5" fill="#E8C44A" opacity="0.5"/>
    <rect x="559" y="546" width="50" height="5" rx="2.5" fill="#6EC8E6" opacity="0.6"/>
    <rect x="466" y="560" width="55" height="5" rx="2.5" fill="#5BAD7A" opacity="0.6"/>
    <rect x="529" y="560" width="40" height="5" rx="2.5" fill="#E8734A" opacity="0.4"/>
  </g>
);

// ── Fragment 4: Miku-style girl (back view, twin tails, holding leek) ──
const Woman = (
  <g transform="translate(205, 180)">
    {/* Long twin tails hang from red ribbons high on the back of the head. */}
    <path d="M-24,25 C-52,58 -64,128 -58,210 C-54,270 -50,330 -62,372 C-42,364 -31,324 -33,264 C-36,188 -34,92 -16,38 Z" fill="#39C5BB"/>
    <path d="M48,25 C76,58 88,128 82,210 C78,270 74,330 86,372 C66,364 55,324 57,264 C60,188 58,92 40,38 Z" fill="#39C5BB"/>
    <path d="M-36,54 C-51,118 -50,224 -52,332" fill="none" stroke="#2DA8A0" strokeWidth="2.4" opacity="0.45"/>
    <path d="M62,54 C77,118 76,224 78,332" fill="none" stroke="#2DA8A0" strokeWidth="2.4" opacity="0.45"/>

    {/* Head and hair cap, back view only. */}
    <rect x="4" y="45" width="18" height="18" rx="5" fill="#F5C5A3" opacity="0.72"/>
    <ellipse cx="13" cy="24" rx="26" ry="31" fill="#F5C5A3" opacity="0.72"/>
    <ellipse cx="13" cy="15" rx="31" ry="30" fill="#39C5BB"/>
    <path d="M-18,12 Q13,-20 44,12 Q45,32 38,48 Q22,57 4,53 Q-14,49 -19,31 Z" fill="#39C5BB"/>
    <path d="M-8,3 Q13,-12 34,3 Q30,18 13,23 Q-3,18 -8,3 Z" fill="#4DE8D8" opacity="0.25"/>
    <path d="M-16,34 Q13,58 42,34 L36,52 Q13,68 -10,52 Z" fill="#2DA8A0" opacity="0.35"/>

    {/* Red ribbon bows at the left-up/right-up tie points. */}
    <g fill="#E85650">
      <circle cx="-24" cy="25" r="5"/>
      <path d="M-28,24 L-52,14 L-45,35 Z"/>
      <path d="M-20,24 L-2,10 L-5,33 Z"/>
      <circle cx="48" cy="25" r="5"/>
      <path d="M44,24 L26,10 L29,33 Z"/>
      <path d="M52,24 L76,14 L69,35 Z"/>
    </g>

    {/* Sleeves and arms */}
    <path d="M-24,84 C-35,96 -42,124 -39,152" fill="none" stroke="#2C2C3F" strokeWidth="16" strokeLinecap="round"/>
    <path d="M50,84 C62,98 70,128 68,154" fill="none" stroke="#2C2C3F" strokeWidth="16" strokeLinecap="round"/>
    <path d="M-39,151 C-41,162 -42,175 -39,185" fill="none" stroke="#F5C5A3" strokeWidth="8" strokeLinecap="round" opacity="0.75"/>
    <path d="M68,153 C72,166 78,178 84,188" fill="none" stroke="#F5C5A3" strokeWidth="8" strokeLinecap="round" opacity="0.75"/>

    {/* Leek */}
    <line x1="80" y1="178" x2="105" y2="90" stroke="#5BAD7A" strokeWidth="5" strokeLinecap="round"/>
    <line x1="105" y1="90" x2="108" y2="78" stroke="#4A9968" strokeWidth="4" strokeLinecap="round"/>
    <path d="M105,90 C115,75 125,68 130,72 C128,80 118,88 108,92" fill="#5BAD7A" opacity="0.8"/>
    <path d="M106,86 C112,70 120,60 126,62 C125,70 116,80 108,86" fill="#4A9968" opacity="0.6"/>

    {/* Back torso: gray Miku-inspired top with teal trim. */}
    <path d="M-10,62 C-18,70 -23,87 -24,112 L-24,190 C-24,197 -18,202 -10,202 L36,202 C45,202 50,197 50,190 L48,112 C46,87 40,70 31,62 Z" fill="#3A3A50"/>
    <path d="M-8,66 Q13,79 34,66" fill="none" stroke="#39C5BB" strokeWidth="4" strokeLinecap="round" opacity="0.9"/>
    <rect x="-15" y="106" width="5" height="78" rx="2.5" fill="#39C5BB" opacity="0.75"/>
    <rect x="38" y="106" width="5" height="78" rx="2.5" fill="#39C5BB" opacity="0.75"/>
    <rect x="-22" y="188" width="74" height="8" rx="4" fill="#39C5BB" opacity="0.85"/>

    {/* Ultra-short pleated skirt, visible thighs, black stockings. */}
    <path d="M-24,194 L-35,232 L-14,235 L-4,202 L5,202 L14,235 L36,235 L52,231 L42,194 Z" fill="#2C2C3F"/>
    <line x1="-20" y1="199" x2="-29" y2="229" stroke="#555570" strokeWidth="1" opacity="0.55"/>
    <line x1="0" y1="199" x2="-5" y2="232" stroke="#555570" strokeWidth="1" opacity="0.55"/>
    <line x1="22" y1="199" x2="28" y2="232" stroke="#555570" strokeWidth="1" opacity="0.55"/>
    <rect x="-20" y="232" width="22" height="38" rx="7" fill="#F5C5A3" opacity="0.78"/>
    <rect x="22" y="232" width="22" height="38" rx="7" fill="#F5C5A3" opacity="0.78"/>
    <rect x="-22" y="268" width="25" height="92" rx="7" fill="#11111A"/>
    <rect x="20" y="268" width="25" height="92" rx="7" fill="#11111A"/>
    <rect x="-22" y="268" width="25" height="5" rx="2.5" fill="#39C5BB" opacity="0.8"/>
    <rect x="20" y="268" width="25" height="5" rx="2.5" fill="#39C5BB" opacity="0.8"/>

    {/* Shoes */}
    <path d="M-24,358 C-26,362 -26,370 -20,372 L4,372 C6,370 6,362 2,358" fill="#1E1E2E"/>
    <path d="M18,358 C16,362 16,370 22,372 L46,372 C48,370 48,362 44,358" fill="#1E1E2E"/>
  </g>
);

// ── Fragment 5: Bar chart icon ──
const BarChart = (
  <g transform="translate(810, 510)">
    <rect x="0" y="0" width="62" height="62" rx="6" fill="#2D4A3D" stroke="#FFFFFF" strokeOpacity="0.1" strokeWidth="1.5"/>
    <rect x="12" y="30" width="11" height="24" rx="2" fill="url(#barGrad)"/>
    <rect x="26" y="16" width="11" height="38" rx="2" fill="url(#barGrad)"/>
    <rect x="40" y="22" width="11" height="32" rx="2" fill="url(#barGrad)"/>
  </g>
);

// ── Fragment 6: Mouse cursor ──
const Cursor = (
  <g transform="translate(935, 490)">
    <path d="M0,0 L0,42 L12,31 L23,52 L30,48 L18,28 L32,25 Z" fill="#FFFFFF" stroke="#2B2B3D" strokeWidth="1.5"/>
  </g>
);

// ── Fragment 7: Decorative dashes + text labels ──
const Decorations = (
  <g>
    <g stroke="#555570" strokeWidth="1" strokeDasharray="4 3" fill="none" opacity="0.4">
      <path d="M750,505 Q770,480 800,512"/>
      <path d="M440,585 Q450,600 480,595"/>
    </g>
    {/* Window title bar label */}
    <text x="500" y="82" fill="#FFFFFF" fontFamily="sans-serif" fontSize="11" opacity="0.45">Design System</text>
    {/* Main title watermark */}
    <text x="600" y="620" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="13" opacity="0.2" letterSpacing="6">AI CODING</text>
  </g>
);

// ---------------------------------------------------------------------------
// Scene definition
// ---------------------------------------------------------------------------

export const coverSceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: SharedDefs,
  background: Background,
  fragments: [
    {
      id: "mainWindow",
      content: MainWindow,
      enterFrom: { x: 800, y: 0 },
      enterDelay: 0,
      floatAmp: { x: 10, y: 14 },
      floatPeriod: { x: 5.2, y: 6.8 },
      exitTo: { x: -760, y: -60 },
      exitSpin: -4,
    },
    {
      id: "woman",
      content: Woman,
      enterFrom: { x: -500, y: 0 },
      enterDelay: 150,
      floatAmp: { x: 8, y: 12 },
      floatPeriod: { x: 4.5, y: 5.5 },
      exitTo: { x: 760, y: 0 },
      exitDelay: 0,
      exitSpin: 2,
      exitOpacity: 0.35,
    },
    {
      id: "codeWindow",
      content: CodeWindow,
      enterFrom: { x: 400, y: -300 },
      enterDelay: 250,
      floatAmp: { x: 14, y: 18 },
      floatPeriod: { x: 6.0, y: 4.2 }, floatRotate: 1,
      exitTo: { x: -520, y: -260 },
      exitSpin: -8,
    },
    {
      id: "bottomCode",
      content: BottomCode,
      enterFrom: { x: 0, y: 400 },
      enterDelay: 350,
      floatAmp: { x: 12, y: 16 },
      floatPeriod: { x: 5.8, y: 7.0 }, floatRotate: 0.8,
      exitTo: { x: 0, y: 420 },
      exitSpin: 6,
    },
    {
      id: "barChart",
      content: BarChart,
      enterFrom: { x: 0, y: 300 },
      enterDelay: 450,
      floatAmp: { x: 18, y: 22 },
      floatPeriod: { x: 3.5, y: 4.8 }, floatRotate: 2.5,
      exitTo: { x: 120, y: 360 },
      exitSpin: 12,
    },
    {
      id: "cursor",
      content: Cursor,
      enterFrom: { x: 300, y: 300 },
      enterDelay: 550,
      floatAmp: { x: 22, y: 28 },
      floatPeriod: { x: 3.0, y: 3.6 }, floatRotate: 3,
      exitTo: { x: 420, y: 420 },
      exitSpin: 18,
    },
    {
      id: "decorations",
      content: Decorations,
      enterFrom: { x: 0, y: 0 },
      enterDelay: 600,
      floatAmp: { x: 4, y: 5 },
      floatPeriod: { x: 8.0, y: 9.0 }, floatRotate: 2,
    },
  ],
};
