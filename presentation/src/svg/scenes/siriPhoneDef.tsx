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
    <circle r="96" fill="none" stroke="#6EC8E6" strokeWidth="2" opacity="0.12"/>
    <circle r="72" fill="none" stroke="#6EC8E6" strokeWidth="2.5" opacity="0.2"/>
    <circle r="48" fill="none" stroke="#6EC8E6" strokeWidth="3" opacity="0.34"/>
    <circle r="28" fill="#4A7BCC" opacity="0.62"/>
    <circle r="14" fill="#6EC8E6" opacity="0.85"/>
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
    { id: "iPhoneLabel", content: IPhoneLabel, enterFrom: { x: -300, y: 200 }, enterDelay: 600, floatAmp: { x: 10, y: 8 }, floatPeriod: { x: 7.0, y: 9.0 }, exitTo: { x: -350, y: 250 } },
  ],
};
