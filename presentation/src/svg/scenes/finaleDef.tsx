import type { SvgSceneDef } from "../SvgScene";

const Background = <rect width="1200" height="675" fill="#2B2B3D"/>;

const ConcentricCircles = (
  <g transform="translate(600, 338)">
    <circle cx="0" cy="0" r="260" fill="none" stroke="#E8B84A" strokeWidth="1" opacity="0.08"/>
    <circle cx="0" cy="0" r="200" fill="none" stroke="#E8B84A" strokeWidth="1.5" opacity="0.12"/>
    <circle cx="0" cy="0" r="140" fill="none" stroke="#E8B84A" strokeWidth="2" opacity="0.18"/>
    <circle cx="0" cy="0" r="80" fill="none" stroke="#E8B84A" strokeWidth="2.5" opacity="0.25"/>
    <circle cx="0" cy="0" r="50" fill="#E8B84A" opacity="0.06"/>
  </g>
);

const Checkmark = (
  <g transform="translate(600, 338)">
    <circle cx="0" cy="0" r="44" fill="#5BAD7A" opacity="0.2"/>
    <path d="M-18,-2 L-6,12 L20,-14" fill="none" stroke="#5BAD7A" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
  </g>
);

const CornerStars = (
  <g>
    <polygon points="120,80 128,100 148,100 132,112 138,132 120,120 102,132 108,112 92,100 112,100" fill="#E8B84A" opacity="0.5"/>
    <polygon points="1080,80 1088,100 1108,100 1092,112 1098,132 1080,120 1062,132 1068,112 1052,100 1072,100" fill="#E8B84A" opacity="0.5"/>
    <polygon points="120,560 128,580 148,580 132,592 138,612 120,600 102,612 108,592 92,580 112,580" fill="#E8B84A" opacity="0.5"/>
    <polygon points="1080,560 1088,580 1108,580 1092,592 1098,612 1080,600 1062,612 1068,592 1052,580 1072,580" fill="#E8B84A" opacity="0.5"/>
  </g>
);

const Sparkles = (
  <g opacity="0.4">
    <path d="M300,150 L305,160 L315,160 L307,167 L310,178 L300,172 L290,178 L293,167 L285,160 L295,160 Z" fill="#6EC8E6"/>
    <path d="M900,180 L904,188 L912,188 L905,193 L908,202 L900,197 L892,202 L895,193 L888,188 L896,188 Z" fill="#E8734A"/>
    <path d="M250,450 L253,456 L260,456 L255,460 L257,467 L250,463 L243,467 L245,460 L240,456 L247,456 Z" fill="#5BAD7A"/>
    <path d="M950,420 L953,426 L960,426 L955,430 L957,437 L950,433 L943,437 L945,430 L940,426 L947,426 Z" fill="#E8B84A"/>
    <circle cx="450" cy="200" r="3" fill="#E8B84A"/>
    <circle cx="750" cy="180" r="2.5" fill="#6EC8E6"/>
    <circle cx="400" cy="500" r="2" fill="#E8734A"/>
    <circle cx="800" cy="480" r="3" fill="#5BAD7A"/>
  </g>
);

const ThankYouText = (
  <g>
    <text x="600" y="470" textAnchor="middle" fill="#E8B84A" fontFamily="sans-serif" fontSize="48" fontWeight="bold">谢谢</text>
    <text x="600" y="516" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="20" opacity="0.7">演讲完毕，谢谢大家！</text>
    <text x="600" y="545" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="14">Thank You for Listening</text>
  </g>
);

export const finaleSceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: <defs/>,
  background: Background,
  fragments: [
    { id: "circles", content: ConcentricCircles, enterFrom: { x: 0, y: 0 }, enterDelay: 0, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 8, y: 9 }, exitScale: 1.2 },
    { id: "checkmark", content: Checkmark, enterFrom: { x: 0, y: -300 }, enterDelay: 100, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 6, y: 7 }, exitTo: { x: 0, y: -400 } },
    { id: "stars", content: CornerStars, enterFrom: { x: 0, y: 0 }, enterDelay: 200, floatAmp: { x: 14, y: 16 }, floatPeriod: { x: 5, y: 6 }, exitSpin: 8 },
    { id: "sparkles", content: Sparkles, enterFrom: { x: 0, y: 0 }, enterDelay: 350, floatAmp: { x: 18, y: 22 }, floatPeriod: { x: 3.5, y: 4.5 } },
    { id: "thanks", content: ThankYouText, enterFrom: { x: 0, y: 200 }, enterDelay: 250, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 6.5, y: 7.5 }, exitTo: { x: 0, y: 300 } },
  ],
};
