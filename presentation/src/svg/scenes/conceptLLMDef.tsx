import type { SvgSceneDef } from "../SvgScene";

const Background = <rect width="1200" height="675" fill="#2B2B3D"/>;

const BrainIcon = (
  <g transform="translate(600, 300)">
    {/* Outer glow */}
    <circle cx="0" cy="0" r="140" fill="#4A7BCC" opacity="0.06"/>
    <circle cx="0" cy="0" r="110" fill="#4A7BCC" opacity="0.08"/>
    {/* Brain shape - left hemisphere */}
    <path d="M-8,-85 Q-60,-80 -80,-40 Q-100,0 -85,40 Q-70,75 -40,85 Q-15,92 -8,60" fill="none" stroke="#6EC8E6" strokeWidth="3" opacity="0.8"/>
    {/* Brain shape - right hemisphere */}
    <path d="M8,-85 Q60,-80 80,-40 Q100,0 85,40 Q70,75 40,85 Q15,92 8,60" fill="none" stroke="#6EC8E6" strokeWidth="3" opacity="0.8"/>
    {/* Center divide */}
    <path d="M0,-85 Q-5,-40 5,0 Q-5,40 0,85" fill="none" stroke="#6EC8E6" strokeWidth="2" opacity="0.5"/>
    {/* Inner folds */}
    <path d="M-50,-50 Q-30,-30 -50,0" fill="none" stroke="#6EC8E6" strokeWidth="2" opacity="0.4"/>
    <path d="M50,-50 Q30,-30 50,0" fill="none" stroke="#6EC8E6" strokeWidth="2" opacity="0.4"/>
    <path d="M-60,10 Q-35,30 -55,55" fill="none" stroke="#6EC8E6" strokeWidth="2" opacity="0.4"/>
    <path d="M60,10 Q35,30 55,55" fill="none" stroke="#6EC8E6" strokeWidth="2" opacity="0.4"/>
    {/* LLM label */}
    <text x="0" y="10" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="42" fontWeight="900" opacity="0.9">LLM</text>
  </g>
);

const NeuralLines = (
  <g stroke="#4A7BCC" strokeWidth="1.5" fill="none" opacity="0.35">
    {[
      "M460,300 Q380,240 300,200", "M460,300 Q380,360 300,420",
      "M460,300 Q400,180 340,100", "M460,300 Q400,440 340,540",
      "M740,300 Q820,240 900,200", "M740,300 Q820,360 900,420",
      "M740,300 Q800,180 860,100", "M740,300 Q800,440 860,540",
      "M600,160 Q600,100 560,50", "M600,160 Q600,100 640,50",
      "M600,440 Q600,520 560,580", "M600,440 Q600,520 640,580",
    ].map((d, i) => <path key={i} d={d} strokeDasharray="6 4"/>)}
    {/* Endpoint dots */}
    {[[300, 200], [300, 420], [340, 100], [340, 540], [900, 200], [900, 420], [860, 100], [860, 540], [560, 50], [640, 50], [560, 580], [640, 580]].map(([cx, cy], i) => (
      <circle key={i} cx={cx} cy={cy} r="4" fill="#4A7BCC" opacity="0.6"/>
    ))}
  </g>
);

const ThoughtBubbles = (
  <g>
    <circle cx="200" cy="180" r="28" fill="#252538" stroke="#555570" strokeWidth="1"/>
    <text x="200" y="186" textAnchor="middle" fill="#E8B84A" fontFamily="sans-serif" fontSize="13">推理</text>
    <circle cx="1000" cy="180" r="28" fill="#252538" stroke="#555570" strokeWidth="1"/>
    <text x="1000" y="186" textAnchor="middle" fill="#5BAD7A" fontFamily="sans-serif" fontSize="13">生成</text>
    <circle cx="200" cy="460" r="28" fill="#252538" stroke="#555570" strokeWidth="1"/>
    <text x="200" y="466" textAnchor="middle" fill="#6EC8E6" fontFamily="sans-serif" fontSize="13">理解</text>
    <circle cx="1000" cy="460" r="28" fill="#252538" stroke="#555570" strokeWidth="1"/>
    <text x="1000" y="466" textAnchor="middle" fill="#E8734A" fontFamily="sans-serif" fontSize="13">规划</text>
  </g>
);

const TitleLabel = (
  <g>
    <rect x="480" y="560" width="240" height="48" rx="10" fill="#252538"/>
    <text x="600" y="590" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="22" fontWeight="bold">大脑</text>
    <text x="600" y="624" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="13">The Only Part That Truly "Thinks"</text>
  </g>
);

const SubTitle = (
  <text x="600" y="52" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="14" opacity="0.7">LLM = Large Language Model</text>
);

export const conceptLLMSceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: <defs/>,
  background: Background,
  fragments: [
    { id: "brainIcon", content: BrainIcon, enterFrom: { x: 0, y: -400 }, enterDelay: 0, floatAmp: { x: 10, y: 14 }, floatPeriod: { x: 6, y: 7 }, exitTo: { x: 0, y: -500 }, exitScale: 0.8 },
    { id: "neuralLines", content: NeuralLines, enterFrom: { x: 0, y: 0 }, enterDelay: 200, floatAmp: { x: 12, y: 12 }, floatPeriod: { x: 5, y: 6 }, exitTo: { x: 0, y: 300 } },
    { id: "thoughtBubbles", content: ThoughtBubbles, enterFrom: { x: 0, y: 200 }, enterDelay: 300, floatAmp: { x: 16, y: 18 }, floatPeriod: { x: 4.5, y: 5.5 }, exitTo: { x: 0, y: 400 } },
    { id: "titleLabel", content: TitleLabel, enterFrom: { x: 0, y: 200 }, enterDelay: 450, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 7, y: 8 }, exitTo: { x: 0, y: 300 } },
    { id: "subTitle", content: SubTitle, enterFrom: { x: 0, y: -100 }, enterDelay: 500, floatAmp: { x: 8, y: 8 }, floatPeriod: { x: 8, y: 9 }, exitTo: { x: 0, y: -200 } },
  ],
};
