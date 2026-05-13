import type { SvgSceneDef } from "../SvgScene";

const Background = <rect width="1200" height="675" fill="#2B2B3D"/>;

const Title = (
  <g>
    <text x="600" y="55" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="28" fontWeight="bold">自我认知</text>
    <text x="600" y="82" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="14">Self-Awareness in AI-Augmented Work</text>
  </g>
);

const Cards = (
  <g>
    {[
      { x: 80, label: "知道做什么", sub: "Clear Goal", icon: "check", color: "#5BAD7A" },
      { x: 440, label: "知道需要什么", sub: "Know Requirements", icon: "qcheck", color: "#E8B84A" },
      { x: 800, label: "知道下一步", sub: "Know Next Step", icon: "arrow", color: "#6EC8E6" },
    ].map((card, i) => (
      <g key={i} transform={`translate(${card.x}, 120)`}>
        <rect x="0" y="0" width="320" height="240" rx="14" fill="#1E1E2E" stroke={card.color} strokeWidth="1.5"/>
        <circle cx="160" cy="80" r="36" fill={card.color} opacity="0.12"/>
        {card.icon === "check" && (
          <path d="M145,80 L155,90 L178,65" fill="none" stroke={card.color} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
        )}
        {card.icon === "qcheck" && (
          <g>
            <text x="150" y="86" textAnchor="middle" fill={card.color} fontFamily="sans-serif" fontSize="22">?</text>
            <path d="M163,72 L168,77 L175,68" fill="none" stroke={card.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
        )}
        {card.icon === "arrow" && (
          <g>
            <line x1="142" y1="80" x2="170" y2="80" stroke={card.color} strokeWidth="3" strokeLinecap="round"/>
            <polygon points="170,74 182,80 170,86" fill={card.color}/>
          </g>
        )}
        <text x="160" y="150" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="20" fontWeight="bold">{card.label}</text>
        <text x="160" y="180" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="13">{card.sub}</text>
      </g>
    ))}
  </g>
);

const PersonBelow = (
  <g transform="translate(560, 440)">
    <circle cx="40" cy="15" r="16" fill="#FFFFFF" opacity="0.7"/>
    <path d="M40,31 L40,70 M40,46 L22,62 M40,46 L58,62 M40,70 L28,95 M40,70 L52,95" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" opacity="0.7"/>
    <line x1="40" y1="10" x2="240" y2="-68" stroke="#555570" strokeWidth="1" strokeDasharray="4 3" opacity="0.4"/>
    <line x1="40" y1="10" x2="600" y2="-68" stroke="#555570" strokeWidth="1" strokeDasharray="4 3" opacity="0.4"/>
    <line x1="40" y1="10" x2="-120" y2="-68" stroke="#555570" strokeWidth="1" strokeDasharray="4 3" opacity="0.4"/>
  </g>
);

const SelfLabel = (
  <g transform="translate(510, 590)">
    <rect x="0" y="0" width="180" height="36" rx="18" fill="#FFFFFF" opacity="0.08"/>
    <text x="90" y="24" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="14" fontWeight="bold" opacity="0.7">自我认知</text>
  </g>
);

export const selfAwarenessSceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: <defs/>,
  background: Background,
  fragments: [
    { id: "title", content: Title, enterFrom: { x: 0, y: -120 }, enterDelay: 0, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 7, y: 8 } },
    { id: "cards", content: Cards, enterFrom: { x: 0, y: -250 }, enterDelay: 100, floatAmp: { x: 10, y: 14 }, floatPeriod: { x: 5.5, y: 6.5 }, exitTo: { x: 0, y: -350 } },
    { id: "person", content: PersonBelow, enterFrom: { x: 0, y: 300 }, enterDelay: 300, floatAmp: { x: 12, y: 14 }, floatPeriod: { x: 5, y: 6 }, exitTo: { x: 0, y: 400 } },
    { id: "selfLabel", content: SelfLabel, enterFrom: { x: 0, y: 150 }, enterDelay: 450, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 4.5, y: 5.5 } },
  ],
};
