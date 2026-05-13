import type { SvgSceneDef } from "../SvgScene";

const Background = <rect width="1200" height="675" fill="#2B2B3D"/>;

const TimelineAxis = (
  <g>
    <line x1="80" y1="340" x2="1100" y2="340" stroke="#555570" strokeWidth="2.5"/>
    <polygon points="1100,340 1080,330 1080,350" fill="#555570"/>
    {[140, 280, 420, 560, 700, 840, 980].map((x, i) => (
      <line key={i} x1={x} y1="332" x2={x} y2="348" stroke="#555570" strokeWidth="2"/>
    ))}
    <text x="90" y="370" fill="#555570" fontFamily="sans-serif" fontSize="11" opacity="0.6">1950</text>
    <text x="1060" y="370" fill="#555570" fontFamily="sans-serif" fontSize="11" opacity="0.6">NOW</text>
    <text x="540" y="370" fill="#FFFFFF" fontFamily="sans-serif" fontSize="10" opacity="0.3">AI / NLP Timeline</text>
  </g>
);

const MilestoneNodes = (
  <g>
    {[
      { x: 130, color: "#555570", year: "1950s", event: "NLP", note: "自然语言处理" },
      { x: 285, color: "#5BAD7A", year: "1984", event: "Macintosh", note: "图形界面普及" },
      { x: 430, color: "#6EC8E6", year: "2007", event: "Vista", note: "语音交互尝试" },
      { x: 575, color: "#E8B84A", year: "2011", event: "Siri", note: "手机语音助手" },
      { x: 720, color: "#E8734A", year: "2013", event: "Word2Vec", note: "词向量爆发" },
      { x: 865, color: "#E85650", year: "2017-18", event: "Attention/BERT", note: "大模型底座" },
      { x: 1010, color: "#4A7BCC", year: "2022+", event: "ChatGPT/Agent", note: "对话到执行" },
    ].map((m, i) => {
      const up = i % 2 === 0;
      const cardY = up ? 205 : 385;
      const cardWidth = 128;
      return (
        <g key={i}>
          <circle cx={m.x} cy={340} r="10" fill={m.color}/>
          <line x1={m.x} y1={up ? 330 : 350} x2={m.x} y2={cardY + (up ? 66 : 0)} stroke={m.color} strokeWidth="1.5" opacity="0.5" strokeDasharray="4 3"/>
          <rect x={m.x - cardWidth / 2} y={cardY} width={cardWidth} height={66} rx="9" fill="#1E1E2E" stroke={m.color} strokeWidth="1.2" opacity="0.88"/>
          <text x={m.x} y={cardY + 18} textAnchor="middle" fill={m.color} fontFamily="sans-serif" fontSize="11" fontWeight="bold">{m.year}</text>
          <text x={m.x} y={cardY + 39} textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="13" fontWeight="bold">{m.event}</text>
          <text x={m.x} y={cardY + 56} textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="10" opacity="0.55">{m.note}</text>
        </g>
      );
    })}
  </g>
);

const Rocket = (
  <g transform="translate(1030, 50)">
    {/* Rocket body */}
    <path d="M30,80 L30,30 Q30,5 50,0 Q70,5 70,30 L70,80 Z" fill="#E8734A" opacity="0.85"/>
    <rect x="36" y="40" width="28" height="14" rx="4" fill="#FFFFFF" opacity="0.3"/>
    <circle cx="50" cy="46" r="6" fill="#4A7BCC" opacity="0.7"/>
    {/* Fins */}
    <path d="M30,70 L15,90 L30,80" fill="#E85650" opacity="0.7"/>
    <path d="M70,70 L85,90 L70,80" fill="#E85650" opacity="0.7"/>
    {/* Flame */}
    <path d="M38,80 Q50,110 62,80" fill="#E8B84A" opacity="0.7"/>
    <path d="M42,80 Q50,100 58,80" fill="#E8734A" opacity="0.6"/>
    {/* Trail */}
    <line x1="50" y1="110" x2="50" y2="140" stroke="#E8B84A" strokeWidth="2" opacity="0.3" strokeDasharray="6 4"/>
  </g>
);

const Boat = (
  <g transform="translate(60, 480)">
    {/* Hull */}
    <path d="M20,50 Q60,70 120,50 L110,30 Q65,15 30,30 Z" fill="#4A7BCC" opacity="0.7"/>
    {/* Mast and sail */}
    <line x1="70" y1="50" x2="70" y2="0" stroke="#FFFFFF" strokeWidth="2" opacity="0.5"/>
    <path d="M72,5 L72,40 L100,35 Z" fill="#FFFFFF" opacity="0.25"/>
    {/* Waves */}
    <path d="M0,65 Q20,55 40,65 Q60,75 80,65 Q100,55 120,65 Q140,75 160,65" fill="none" stroke="#6EC8E6" strokeWidth="2" opacity="0.4"/>
    <path d="M-10,80 Q15,70 40,80 Q65,90 90,80 Q115,70 140,80 Q165,90 180,80" fill="none" stroke="#6EC8E6" strokeWidth="1.5" opacity="0.25"/>
  </g>
);

const Stars = (
  <g>
    {[
      { x: 200, y: 100, r: 4 },
      { x: 500, y: 60, r: 3 },
      { x: 750, y: 80, r: 5 },
      { x: 920, y: 140, r: 3 },
      { x: 350, y: 560, r: 4 },
    ].map((s, i) => (
      <g key={i} transform={`translate(${s.x}, ${s.y})`} opacity={0.3 + (i % 3) * 0.15}>
        <line x1={-s.r} y1="0" x2={s.r} y2="0" stroke="#E8B84A" strokeWidth="1.5"/>
        <line x1="0" y1={-s.r} x2="0" y2={s.r} stroke="#E8B84A" strokeWidth="1.5"/>
        <line x1={-s.r * 0.7} y1={-s.r * 0.7} x2={s.r * 0.7} y2={s.r * 0.7} stroke="#E8B84A" strokeWidth="1"/>
        <line x1={s.r * 0.7} y1={-s.r * 0.7} x2={-s.r * 0.7} y2={s.r * 0.7} stroke="#E8B84A" strokeWidth="1"/>
      </g>
    ))}
  </g>
);

export const timelineSceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: <defs/>,
  background: Background,
  transitionEffect: "zipper",
  fragments: [
    { id: "axis", content: TimelineAxis, enterFrom: { x: -600, y: 0 }, enterDelay: 0, floatAmp: { x: 6, y: 8 }, floatPeriod: { x: 7.0, y: 9.0 }, exitTo: { x: 1220, y: 0 }, exitOpacity: 0.55 },
    { id: "milestones", content: MilestoneNodes, enterFrom: { x: 0, y: 300 }, enterDelay: 200, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 5.5, y: 6.5 }, exitTo: { x: 0, y: -520 }, exitSpin: 3 },
    { id: "rocket", content: Rocket, enterFrom: { x: 300, y: -400 }, enterDelay: 400, floatAmp: { x: 16, y: 20 }, floatPeriod: { x: 3.5, y: 4.0 }, exitTo: { x: 420, y: -520 }, exitSpin: 16, exitScale: 1.15, exitOpacity: 0.5 },
    { id: "boat", content: Boat, enterFrom: { x: -400, y: 300 }, enterDelay: 300, floatAmp: { x: 18, y: 14 }, floatPeriod: { x: 4.0, y: 5.5 }, exitTo: { x: -420, y: 340 }, exitSpin: -6 },
    { id: "stars", content: Stars, enterFrom: { x: 0, y: -200 }, enterDelay: 500, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 6.0, y: 7.5 }, exitTo: { x: 0, y: -320 }, exitScale: 1.25 },
  ],
};
