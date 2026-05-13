import type { SvgSceneDef } from "../SvgScene";

const Background = <rect width="1200" height="675" fill="#2B2B3D"/>;

const Title = (
  <g>
    <text x="600" y="50" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="26" fontWeight="bold">独立完成的能力</text>
    <text x="600" y="78" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="14">Ability to Independently Deliver</text>
  </g>
);

const CenterPerson = (
  <g transform="translate(560, 280)">
    <circle cx="40" cy="15" r="22" fill="#6EC8E6" opacity="0.8"/>
    <path d="M40,37 L40,85 M40,55 L15,75 M40,55 L65,75 M40,85 L22,115 M40,85 L58,115" fill="none" stroke="#6EC8E6" strokeWidth="3" strokeLinecap="round" opacity="0.8"/>
    <circle cx="40" cy="65" r="60" fill="#6EC8E6" opacity="0.06"/>
  </g>
);

const SkillNodes = (
  <g>
    {[
      { label: "构思", x: 300, y: 160, color: "#E8734A" },
      { label: "创意", x: 740, y: 160, color: "#E8B84A" },
      { label: "方案", x: 180, y: 380, color: "#5BAD7A" },
      { label: "设计", x: 860, y: 380, color: "#4A7BCC" },
      { label: "施工", x: 340, y: 540, color: "#6EC8E6" },
      { label: "验收", x: 700, y: 540, color: "#E85650" },
    ].map((node, i) => (
      <g key={i}>
        <line x1="600" y1="340" x2={node.x} y2={node.y} stroke="#555570" strokeWidth="1" strokeDasharray="5 4" opacity="0.4"/>
        <circle cx={node.x} cy={node.y} r="36" fill="#1E1E2E" stroke={node.color} strokeWidth="2"/>
        <text x={node.x} y={node.y + 6} textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="16" fontWeight="bold">{node.label}</text>
      </g>
    ))}
  </g>
);

const IndependentLabel = (
  <g transform="translate(490, 610)">
    <rect x="0" y="0" width="220" height="36" rx="18" fill="#6EC8E6" opacity="0.15"/>
    <text x="110" y="24" textAnchor="middle" fill="#6EC8E6" fontFamily="sans-serif" fontSize="15" fontWeight="bold">独立完成</text>
  </g>
);

export const coreSkillsSceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: <defs/>,
  background: Background,
  fragments: [
    { id: "title", content: Title, enterFrom: { x: 0, y: -120 }, enterDelay: 0, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 7, y: 8 } },
    { id: "person", content: CenterPerson, enterFrom: { x: 0, y: 200 }, enterDelay: 100, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 6, y: 7 }, exitTo: { x: 0, y: -300 } },
    { id: "nodes", content: SkillNodes, enterFrom: { x: 0, y: 0 }, enterDelay: 250, floatAmp: { x: 12, y: 14 }, floatPeriod: { x: 5, y: 6 }, exitTo: { x: 0, y: 0 }, exitScale: 0.8 },
    { id: "label", content: IndependentLabel, enterFrom: { x: 0, y: 200 }, enterDelay: 450, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 4.5, y: 5.5 } },
  ],
};
