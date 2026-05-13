import type { SvgSceneDef } from "../SvgScene";

const Background = <rect width="1200" height="675" fill="#2B2B3D"/>;

const PersonFigure = (
  <g transform="translate(140, 280)">
    <circle cx="40" cy="15" r="18" fill="#6EC8E6" opacity="0.8"/>
    <path d="M40,33 L40,80 M40,50 L18,68 M40,50 L62,68 M40,80 L25,110 M40,80 L55,110" fill="none" stroke="#6EC8E6" strokeWidth="3" strokeLinecap="round" opacity="0.8"/>
    <rect x="-10" y="125" width="100" height="28" rx="6" fill="#E85650" opacity="0.15"/>
    <text x="40" y="144" textAnchor="middle" fill="#E85650" fontFamily="sans-serif" fontSize="13" fontWeight="bold">非前端开发</text>
    <line x1="-5" y1="139" x2="85" y2="139" stroke="#E85650" strokeWidth="1.5" opacity="0.6"/>
  </g>
);

const CapabilityCurve = (
  <g transform="translate(280, 120)">
    <line x1="0" y1="420" x2="680" y2="420" stroke="#555570" strokeWidth="1.5" opacity="0.4"/>
    <line x1="0" y1="420" x2="0" y2="20" stroke="#555570" strokeWidth="1.5" opacity="0.4"/>
    <text x="340" y="460" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="12">时间</text>
    <text x="-15" y="220" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="12" transform="rotate(-90, -15, 220)">能力</text>
    <path d="M20,400 Q120,390 220,340 Q340,260 460,150 Q540,90 640,50" fill="none" stroke="#5BAD7A" strokeWidth="3" strokeLinecap="round"/>
    <path d="M20,400 Q120,390 220,340 Q340,260 460,150 Q540,90 640,50 L640,420 L20,420 Z" fill="#5BAD7A" opacity="0.06"/>
  </g>
);

const EnablingLabel = (
  <g transform="translate(520, 440)">
    <rect x="0" y="0" width="280" height="48" rx="10" fill="#1E1E2E" stroke="#5BAD7A" strokeWidth="1.5"/>
    <text x="140" y="30" textAnchor="middle" fill="#5BAD7A" fontFamily="sans-serif" fontSize="16" fontWeight="bold">诊断日志 + AI 闭环</text>
  </g>
);

const AchievementStar = (
  <g transform="translate(895, 120)">
    <polygon points="30,0 38,20 60,22 44,36 48,58 30,48 12,58 16,36 0,22 22,20" fill="#E8B84A" opacity="0.8"/>
    <circle cx="30" cy="28" r="40" fill="#E8B84A" opacity="0.08"/>
    <text x="30" y="84" textAnchor="middle" fill="#E8B84A" fontFamily="sans-serif" fontSize="12" fontWeight="bold">达成</text>
  </g>
);

const Trajectory = (
  <g>
    <path d="M220,380 Q400,300 660,180 Q800,120 920,148" fill="none" stroke="#E8B84A" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.4"/>
    <polygon points="918,142 930,148 918,154" fill="#E8B84A" opacity="0.4"/>
  </g>
);

export const notAFrontendSceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: <defs/>,
  background: Background,
  fragments: [
    { id: "person", content: PersonFigure, enterFrom: { x: -400, y: 0 }, enterDelay: 0, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 6, y: 7 }, exitTo: { x: -500, y: 0 } },
    { id: "curve", content: CapabilityCurve, enterFrom: { x: 0, y: 300 }, enterDelay: 150, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 7, y: 8 }, exitTo: { x: 0, y: 400 } },
    { id: "label", content: EnablingLabel, enterFrom: { x: 0, y: 200 }, enterDelay: 300, floatAmp: { x: 12, y: 14 }, floatPeriod: { x: 5, y: 6 }, exitTo: { x: 0, y: 300 } },
    { id: "star", content: AchievementStar, enterFrom: { x: 300, y: -200 }, enterDelay: 400, floatAmp: { x: 18, y: 20 }, floatPeriod: { x: 4, y: 5 }, exitTo: { x: 400, y: -300 }, exitSpin: 12 },
    { id: "trajectory", content: Trajectory, enterFrom: { x: 0, y: 0 }, enterDelay: 500, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 5.5, y: 6.5 } },
  ],
};
