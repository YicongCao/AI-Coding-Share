import type { SvgSceneDef } from "../SvgScene";

const Background = <rect width="1200" height="675" fill="#2B2B3D"/>;

const InputArrow = (
  <g transform="translate(80, 270)">
    <rect x="0" y="20" width="160" height="60" rx="12" fill="#1E1E2E" stroke="#6EC8E6" strokeWidth="2"/>
    <text x="80" y="58" textAnchor="middle" fill="#6EC8E6" fontFamily="sans-serif" fontSize="18" fontWeight="bold">Input</text>
    <line x1="160" y1="50" x2="260" y2="50" stroke="#6EC8E6" strokeWidth="2.5" strokeDasharray="8 5" opacity="0.6"/>
    <polygon points="260,50 248,42 248,58" fill="#6EC8E6" opacity="0.6"/>
    <text x="80" y="105" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="14">问题输入</text>
  </g>
);

const ProcessingBox = (
  <g transform="translate(370, 240)">
    <rect x="0" y="0" width="200" height="120" rx="14" fill="#252538" stroke="#5BAD7A" strokeWidth="2.5"/>
    <text x="100" y="55" textAnchor="middle" fill="#5BAD7A" fontFamily="sans-serif" fontSize="20" fontWeight="bold">Processing</text>
    <text x="100" y="85" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="15">AI 处理</text>
    <rect x="30" y="98" width="140" height="5" rx="2.5" fill="#5BAD7A" opacity="0.3"/>
  </g>
);

const CircularLoop = (
  <g transform="translate(660, 200)">
    <path d="M140,0 A140,140 0 1,1 139,0" fill="none" stroke="#E8B84A" strokeWidth="3" strokeDasharray="12 6" opacity="0.5"/>
    <polygon points="140,0 130,12 150,12" fill="#E8B84A" opacity="0.6"/>
    <circle cx="140" cy="140" r="50" fill="#1E1E2E" stroke="#E8B84A" strokeWidth="2"/>
    <text x="140" y="135" textAnchor="middle" fill="#E8B84A" fontFamily="sans-serif" fontSize="32" fontWeight="bold">闭环</text>
    <text x="140" y="160" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="13">Closed Loop</text>
  </g>
);

const OutputBox = (
  <g transform="translate(960, 270)">
    <rect x="0" y="20" width="160" height="60" rx="12" fill="#1E1E2E" stroke="#E8734A" strokeWidth="2"/>
    <text x="80" y="58" textAnchor="middle" fill="#E8734A" fontFamily="sans-serif" fontSize="18" fontWeight="bold">Output</text>
    <text x="80" y="105" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="14">结果输出</text>
  </g>
);

const FeedbackArrow = (
  <g transform="translate(400, 440)">
    <path d="M660,0 Q330,120 0,0" fill="none" stroke="#4A7BCC" strokeWidth="2.5" strokeDasharray="10 6" opacity="0.5"/>
    <polygon points="0,0 14,4 10,-8" fill="#4A7BCC" opacity="0.6"/>
    <text x="330" y="80" textAnchor="middle" fill="#4A7BCC" fontFamily="sans-serif" fontSize="15" opacity="0.7">Feedback 反馈</text>
  </g>
);

const ConnectArrows = (
  <g>
    <line x1="570" y1="300" x2="660" y2="300" stroke="#5BAD7A" strokeWidth="2" strokeDasharray="6 4" opacity="0.5"/>
    <polygon points="660,300 650,294 650,306" fill="#5BAD7A" opacity="0.5"/>
    <line x1="900" y1="300" x2="960" y2="300" stroke="#E8B84A" strokeWidth="2" strokeDasharray="6 4" opacity="0.5"/>
    <polygon points="960,300 950,294 950,306" fill="#E8734A" opacity="0.5"/>
  </g>
);

const SubTitle = (
  <g transform="translate(600, 590)">
    <text x="0" y="0" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="16" opacity="0.6">将问题转化为 AI 可自主解决的循环</text>
  </g>
);

export const closedLoopIntroSceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: <defs/>,
  background: Background,
  fragments: [
    { id: "input", content: InputArrow, enterFrom: { x: -400, y: 0 }, enterDelay: 0, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 6, y: 7 }, exitTo: { x: -500, y: 0 } },
    { id: "processing", content: ProcessingBox, enterFrom: { x: 0, y: -300 }, enterDelay: 150, floatAmp: { x: 10, y: 14 }, floatPeriod: { x: 5, y: 6 }, exitTo: { x: 0, y: -400 } },
    { id: "loop", content: CircularLoop, enterFrom: { x: 0, y: 400 }, enterDelay: 250, floatAmp: { x: 12, y: 16 }, floatPeriod: { x: 5.5, y: 6.5 }, exitTo: { x: 0, y: -500 }, exitSpin: 10 },
    { id: "output", content: OutputBox, enterFrom: { x: 400, y: 0 }, enterDelay: 200, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 6, y: 7 }, exitTo: { x: 500, y: 0 } },
    { id: "connects", content: ConnectArrows, enterFrom: { x: 0, y: 200 }, enterDelay: 350, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 7, y: 8 } },
    { id: "feedback", content: FeedbackArrow, enterFrom: { x: 0, y: 300 }, enterDelay: 450, floatAmp: { x: 10, y: 14 }, floatPeriod: { x: 5, y: 6 }, exitTo: { x: 0, y: 400 } },
    { id: "subtitle", content: SubTitle, enterFrom: { x: 0, y: 200 }, enterDelay: 550, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 7, y: 9 } },
  ],
};
