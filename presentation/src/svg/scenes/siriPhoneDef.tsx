import type { SvgSceneDef } from "../SvgScene";

const Background = <rect width="1200" height="675" fill="#2B2B3D"/>;

const IPhone = (
  <g transform="translate(480, 60)">
    {/* Phone body */}
    <rect x="0" y="0" width="240" height="480" rx="28" fill="#252538" stroke="#555570" strokeWidth="2"/>
    {/* Screen */}
    <rect x="14" y="50" width="212" height="370" rx="4" fill="#1E1E2E"/>
    {/* Top notch area */}
    <rect x="80" y="14" width="80" height="6" rx="3" fill="#555570" opacity="0.5"/>
    <circle cx="120" cy="32" r="5" fill="#555570" opacity="0.4"/>
    {/* Home button */}
    <circle cx="120" cy="450" r="18" fill="none" stroke="#555570" strokeWidth="1.5"/>
    <rect x="110" y="442" width="20" height="16" rx="4" fill="none" stroke="#555570" strokeWidth="1" opacity="0.5"/>
    {/* Screen content - gradient background */}
    <rect x="14" y="50" width="212" height="370" rx="4" fill="#1E1E2E"/>
    {/* Status bar */}
    <rect x="24" y="56" width="30" height="4" rx="2" fill="#FFFFFF" opacity="0.3"/>
    <rect x="180" y="56" width="36" height="4" rx="2" fill="#FFFFFF" opacity="0.3"/>
  </g>
);

const SiriRipples = (
  <g transform="translate(600, 300)">
    <circle r="80" fill="none" stroke="#6EC8E6" strokeWidth="2" opacity="0.15"/>
    <circle r="60" fill="none" stroke="#6EC8E6" strokeWidth="2.5" opacity="0.25"/>
    <circle r="40" fill="none" stroke="#6EC8E6" strokeWidth="3" opacity="0.4"/>
    <circle r="22" fill="#4A7BCC" opacity="0.6"/>
    <circle r="12" fill="#6EC8E6" opacity="0.8"/>
  </g>
);

const HeySiriText = (
  <g transform="translate(520, 420)">
    <text x="80" y="0" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="22" fontWeight="bold" opacity="0.9">Hey Siri</text>
    <text x="80" y="28" textAnchor="middle" fill="#6EC8E6" fontFamily="sans-serif" fontSize="14" opacity="0.7">语音唤醒</text>
  </g>
);

const YearTag = (
  <g transform="translate(80, 120)">
    <rect x="0" y="0" width="100" height="44" rx="8" fill="#5BAD7A"/>
    <text x="50" y="29" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="20" fontWeight="bold">2010</text>
  </g>
);

const AppleLogo = (
  <g transform="translate(900, 200)">
    {/* Simplified apple outline */}
    <path d="M0,-30 C15,-30 25,-20 30,-10 C35,5 30,25 20,35 C10,48 0,50 -5,50 C-10,50 -15,48 -20,45 C-25,48 -30,50 -35,50 C-40,48 -50,35 -55,20 C-60,5 -58,-10 -50,-20 C-42,-30 -30,-32 -20,-28 C-15,-26 -10,-28 -5,-30 C-3,-30 -2,-30 0,-30 Z" fill="none" stroke="#FFFFFF" strokeWidth="2" opacity="0.4"/>
    {/* Leaf */}
    <path d="M0,-30 C5,-42 15,-48 25,-45" fill="none" stroke="#5BAD7A" strokeWidth="2" opacity="0.5"/>
  </g>
);

const SoundWaves = (
  <g transform="translate(750, 280)">
    <path d="M0,0 C10,-20 10,-40 0,-60" fill="none" stroke="#6EC8E6" strokeWidth="2" opacity="0.4" strokeLinecap="round"/>
    <path d="M20,10 C35,-15 35,-50 20,-75" fill="none" stroke="#6EC8E6" strokeWidth="2" opacity="0.3" strokeLinecap="round"/>
    <path d="M40,20 C60,-10 60,-55 40,-85" fill="none" stroke="#6EC8E6" strokeWidth="2" opacity="0.2" strokeLinecap="round"/>
    <path d="M-30,0 C-40,-20 -40,-40 -30,-60" fill="none" stroke="#6EC8E6" strokeWidth="2" opacity="0.4" strokeLinecap="round"/>
    <path d="M-50,10 C-65,-15 -65,-50 -50,-75" fill="none" stroke="#6EC8E6" strokeWidth="2" opacity="0.3" strokeLinecap="round"/>
  </g>
);

const IPhoneLabel = (
  <g transform="translate(80, 520)">
    <rect x="0" y="0" width="180" height="50" rx="8" fill="#1E1E2E" stroke="#4A7BCC" strokeWidth="1.2"/>
    <text x="90" y="22" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="14">iPhone 4S + Siri</text>
    <text x="90" y="42" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="11">首个主流语音助手</text>
  </g>
);

export const siriPhoneSceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: <defs/>,
  background: Background,
  fragments: [
    { id: "iPhone", content: IPhone, enterFrom: { x: 0, y: 500 }, enterDelay: 0, floatAmp: { x: 8, y: 12 }, floatPeriod: { x: 5.5, y: 7.0 }, exitTo: { x: 0, y: -550 }, exitSpin: -2 },
    { id: "siriRipples", content: SiriRipples, enterFrom: { x: 0, y: 0 }, enterDelay: 200, floatAmp: { x: 10, y: 10 }, floatPeriod: { x: 4.0, y: 5.0 }, exitTo: { x: 0, y: -400 }, exitScale: 1.5 },
    { id: "heySiriText", content: HeySiriText, enterFrom: { x: 0, y: 300 }, enterDelay: 300, floatAmp: { x: 12, y: 8 }, floatPeriod: { x: 6.0, y: 7.5 }, exitTo: { x: 0, y: 350 } },
    { id: "yearTag", content: YearTag, enterFrom: { x: -300, y: -200 }, enterDelay: 150, floatAmp: { x: 18, y: 14 }, floatPeriod: { x: 3.5, y: 4.8 }, exitTo: { x: -350, y: -250 }, exitSpin: -10 },
    { id: "appleLogo", content: AppleLogo, enterFrom: { x: 400, y: -200 }, enterDelay: 400, floatAmp: { x: 20, y: 16 }, floatPeriod: { x: 4.5, y: 6.0 }, exitTo: { x: 450, y: -250 }, exitSpin: 15 },
    { id: "soundWaves", content: SoundWaves, enterFrom: { x: 300, y: 0 }, enterDelay: 500, floatAmp: { x: 14, y: 12 }, floatPeriod: { x: 5.0, y: 6.5 }, exitTo: { x: 350, y: 0 }, exitScale: 0.5 },
    { id: "iPhoneLabel", content: IPhoneLabel, enterFrom: { x: -300, y: 200 }, enterDelay: 600, floatAmp: { x: 10, y: 8 }, floatPeriod: { x: 7.0, y: 9.0 }, exitTo: { x: -350, y: 250 } },
  ],
};
