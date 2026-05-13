import type { SvgSceneDef } from "../SvgScene";

const Background = <rect width="1200" height="675" fill="#2B2B3D"/>;

const PersonFigure = (
  <g transform="translate(520, 200)">
    <circle cx="80" cy="30" r="35" fill="#E8B84A" opacity="0.8"/>
    <rect x="48" y="70" width="64" height="90" rx="18" fill="#E8B84A" opacity="0.7"/>
    <circle cx="65" cy="24" r="4" fill="#2B2B3D"/>
    <circle cx="95" cy="24" r="4" fill="#2B2B3D"/>
    <path d="M65,42 Q80,55 95,42" fill="none" stroke="#2B2B3D" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M48,100 L20,130" fill="none" stroke="#E8B84A" strokeWidth="5" strokeLinecap="round" opacity="0.6"/>
    <path d="M112,100 L140,130" fill="none" stroke="#E8B84A" strokeWidth="5" strokeLinecap="round" opacity="0.6"/>
  </g>
);

const HatDev = (
  <g transform="translate(520, 100)">
    <rect x="30" y="0" width="100" height="40" rx="8" fill="#6EC8E6" opacity="0.85"/>
    <text x="80" y="27" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="16" fontWeight="bold">研发</text>
    <text x="80" y="56" textAnchor="middle" fill="#6EC8E6" fontFamily="sans-serif" fontSize="11">Developer</text>
  </g>
);

const HatProduct = (
  <g transform="translate(520, 50)">
    <rect x="20" y="0" width="120" height="40" rx="8" fill="#5BAD7A" opacity="0.85"/>
    <text x="80" y="27" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="16" fontWeight="bold">产品</text>
    <text x="80" y="56" textAnchor="middle" fill="#5BAD7A" fontFamily="sans-serif" fontSize="11">Product</text>
  </g>
);

const HatPM = (
  <g transform="translate(520, 0)">
    <rect x="10" y="0" width="140" height="40" rx="8" fill="#E8734A" opacity="0.85"/>
    <text x="80" y="27" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="16" fontWeight="bold">PM</text>
    <text x="80" y="56" textAnchor="middle" fill="#E8734A" fontFamily="sans-serif" fontSize="11">Project Manager</text>
  </g>
);

const MergeArrowLeft = (
  <g transform="translate(180, 150)">
    <rect x="0" y="30" width="120" height="45" rx="10" fill="#1E1E2E" stroke="#6EC8E6" strokeWidth="1.5"/>
    <text x="60" y="58" textAnchor="middle" fill="#6EC8E6" fontFamily="sans-serif" fontSize="14">研发</text>
    <line x1="120" y1="52" x2="280" y2="200" stroke="#6EC8E6" strokeWidth="2" strokeDasharray="8 5" opacity="0.5"/>
    <polygon points="280,200 268,196 272,208" fill="#6EC8E6" opacity="0.5"/>
  </g>
);

const MergeArrowCenter = (
  <g transform="translate(180, 280)">
    <rect x="0" y="0" width="120" height="45" rx="10" fill="#1E1E2E" stroke="#5BAD7A" strokeWidth="1.5"/>
    <text x="60" y="28" textAnchor="middle" fill="#5BAD7A" fontFamily="sans-serif" fontSize="14">产品</text>
    <line x1="120" y1="22" x2="320" y2="260" stroke="#5BAD7A" strokeWidth="2" strokeDasharray="8 5" opacity="0.5" transform="translate(0,-238)"/>
    <polygon points="320,22 308,18 312,30" fill="#5BAD7A" opacity="0.5"/>
  </g>
);

const MergeArrowRight = (
  <g transform="translate(180, 410)">
    <rect x="0" y="0" width="120" height="45" rx="10" fill="#1E1E2E" stroke="#E8734A" strokeWidth="1.5"/>
    <text x="60" y="28" textAnchor="middle" fill="#E8734A" fontFamily="sans-serif" fontSize="14">PM</text>
    <line x1="120" y1="22" x2="280" y2="-108" stroke="#E8734A" strokeWidth="2" strokeDasharray="8 5" opacity="0.5"/>
    <polygon points="280,-108 268,-104 272,-116" fill="#E8734A" opacity="0.5"/>
  </g>
);

const EqualsLabel = (
  <g transform="translate(750, 260)">
    <rect x="0" y="0" width="50" height="10" rx="5" fill="#FFFFFF" opacity="0.7"/>
    <rect x="0" y="20" width="50" height="10" rx="5" fill="#FFFFFF" opacity="0.7"/>
  </g>
);

const ResultLabel = (
  <g transform="translate(840, 220)">
    <rect x="0" y="0" width="260" height="100" rx="14" fill="#252538" stroke="#E8B84A" strokeWidth="2"/>
    <text x="130" y="42" textAnchor="middle" fill="#E8B84A" fontFamily="sans-serif" fontSize="24" fontWeight="bold">一人多角色</text>
    <text x="130" y="72" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="15">One Person, All Roles</text>
  </g>
);

const SubtitleNote = (
  <g transform="translate(600, 580)">
    <text x="0" y="0" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="16" opacity="0.5">你同时是研发 + 产品 + PM</text>
  </g>
);

export const roleStackSceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: <defs/>,
  background: Background,
  fragments: [
    { id: "person", content: PersonFigure, enterFrom: { x: 0, y: 400 }, enterDelay: 0, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 6, y: 7 }, exitTo: { x: 0, y: -500 } },
    { id: "hatDev", content: HatDev, enterFrom: { x: 0, y: -200 }, enterDelay: 100, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 6, y: 7 }, exitTo: { x: 0, y: -300 } },
    { id: "hatProduct", content: HatProduct, enterFrom: { x: 0, y: -300 }, enterDelay: 200, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 6, y: 7 }, exitTo: { x: 0, y: -400 } },
    { id: "hatPM", content: HatPM, enterFrom: { x: 0, y: -400 }, enterDelay: 300, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 6, y: 7 }, exitTo: { x: 0, y: -500 } },
    { id: "mergeL", content: MergeArrowLeft, enterFrom: { x: -400, y: 0 }, enterDelay: 200, floatAmp: { x: 12, y: 14 }, floatPeriod: { x: 5, y: 6 }, exitTo: { x: -500, y: 0 } },
    { id: "mergeC", content: MergeArrowCenter, enterFrom: { x: -400, y: 0 }, enterDelay: 300, floatAmp: { x: 12, y: 14 }, floatPeriod: { x: 5, y: 6 }, exitTo: { x: -500, y: 0 } },
    { id: "mergeR", content: MergeArrowRight, enterFrom: { x: -400, y: 0 }, enterDelay: 400, floatAmp: { x: 12, y: 14 }, floatPeriod: { x: 5, y: 6 }, exitTo: { x: -500, y: 0 } },
    { id: "equals", content: EqualsLabel, enterFrom: { x: 200, y: 0 }, enterDelay: 400, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 7, y: 8 } },
    { id: "result", content: ResultLabel, enterFrom: { x: 400, y: 0 }, enterDelay: 450, floatAmp: { x: 10, y: 14 }, floatPeriod: { x: 5.5, y: 6.5 }, exitTo: { x: 500, y: 0 } },
    { id: "subtitle", content: SubtitleNote, enterFrom: { x: 0, y: 200 }, enterDelay: 550, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 7, y: 9 } },
  ],
};
