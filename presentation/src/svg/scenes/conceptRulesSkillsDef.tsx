import type { SvgSceneDef } from "../SvgScene";

const Background = <rect width="1200" height="675" fill="#2B2B3D"/>;

const SystemPromptDoc = (
  <g transform="translate(200, 60)">
    <rect x="0" y="0" width="800" height="480" rx="14" fill="#1E1E2E" stroke="#555570" strokeWidth="1.5"/>
    {/* Header */}
    <rect x="0" y="0" width="800" height="50" rx="14" fill="#252538"/>
    <rect x="0" y="30" width="800" height="20" fill="#252538"/>
    <text x="400" y="34" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="18" fontWeight="bold">System Prompt</text>
    {/* Divider */}
    <line x1="400" y1="60" x2="400" y2="470" stroke="#555570" strokeWidth="1" strokeDasharray="6 4"/>
    {/* Left column: Rules */}
    <text x="200" y="90" textAnchor="middle" fill="#E85650" fontFamily="sans-serif" fontSize="16" fontWeight="bold">Rules 约束行为</text>
    <line x1="100" y1="102" x2="300" y2="102" stroke="#E85650" strokeWidth="0.8" opacity="0.5"/>
    {[
      "只用中文回答用户",
      "禁止修改 .env 文件",
      "代码必须有类型注解",
      "不要添加无用注释",
      "测试覆盖率 > 80%",
      "使用 ESLint 规范",
      "遵循 Git 提交规范",
      "禁止 console.log",
    ].map((rule, i) => (
      <g key={`r${i}`}>
        <circle cx="60" cy={126 + i * 40} r="4" fill="#E85650" opacity="0.6"/>
        <text x="76" y={131 + i * 40} fill="#FFFFFF" fontFamily="sans-serif" fontSize="13" opacity={0.8 - i * 0.05}>{rule}</text>
      </g>
    ))}
    {/* Right column: Skills */}
    <text x="600" y="90" textAnchor="middle" fill="#5BAD7A" fontFamily="sans-serif" fontSize="16" fontWeight="bold">Skills 引导做事</text>
    <line x1="500" y1="102" x2="700" y2="102" stroke="#5BAD7A" strokeWidth="0.8" opacity="0.5"/>
    {[
      "创建 PR 的完整流程",
      "数据库迁移步骤",
      "部署 Checklist",
      "代码 Review 要点",
      "性能优化方法论",
      "调试排查 Workflow",
      "API 设计规范",
      "安全审计清单",
    ].map((skill, i) => (
      <g key={`s${i}`}>
        <circle cx="460" cy={126 + i * 40} r="4" fill="#5BAD7A" opacity="0.6"/>
        <text x="476" y={131 + i * 40} fill="#FFFFFF" fontFamily="sans-serif" fontSize="13" opacity={0.8 - i * 0.05}>{skill}</text>
      </g>
    ))}
  </g>
);

const ConcatArrow = (
  <g>
    <path d="M300,550 Q400,580 500,550 Q600,580 700,550" fill="none" stroke="#E8B84A" strokeWidth="2" strokeDasharray="8 5" opacity="0.5"/>
    <text x="500" y="600" textAnchor="middle" fill="#E8B84A" fontFamily="sans-serif" fontSize="13" opacity="0.7">← concatenated into System Prompt →</text>
  </g>
);

const RulesIcon = (
  <g transform="translate(80, 200)">
    <rect x="0" y="0" width="80" height="80" rx="12" fill="#252538" stroke="#E85650" strokeWidth="1.5"/>
    <text x="40" y="38" textAnchor="middle" fill="#E85650" fontFamily="sans-serif" fontSize="28" fontWeight="bold">R</text>
    <text x="40" y="60" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="10">Rules</text>
  </g>
);

const SkillsIcon = (
  <g transform="translate(1040, 200)">
    <rect x="0" y="0" width="80" height="80" rx="12" fill="#252538" stroke="#5BAD7A" strokeWidth="1.5"/>
    <text x="40" y="38" textAnchor="middle" fill="#5BAD7A" fontFamily="sans-serif" fontSize="28" fontWeight="bold">S</text>
    <text x="40" y="60" textAnchor="middle" fill="#555570" fontFamily="sans-serif" fontSize="10">Skills</text>
  </g>
);

const TitleLabel = (
  <g>
    <rect x="370" y="625" width="260" height="38" rx="8" fill="#252538"/>
    <text x="500" y="650" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="15" fontWeight="bold">Rules + Skills → System Prompt</text>
  </g>
);

export const conceptRulesSkillsSceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: <defs/>,
  background: Background,
  fragments: [
    { id: "systemPromptDoc", content: SystemPromptDoc, enterFrom: { x: 0, y: 400 }, enterDelay: 0, floatAmp: { x: 10, y: 12 }, floatPeriod: { x: 6, y: 7 }, exitTo: { x: 0, y: -500 } },
    { id: "concatArrow", content: ConcatArrow, enterFrom: { x: 0, y: 200 }, enterDelay: 300, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 5, y: 6 }, exitTo: { x: 0, y: 300 } },
    { id: "rulesIcon", content: RulesIcon, enterFrom: { x: -200, y: 0 }, enterDelay: 150, floatAmp: { x: 14, y: 16 }, floatPeriod: { x: 4.5, y: 5.5 }, exitTo: { x: -300, y: 0 }, exitSpin: -8 },
    { id: "skillsIcon", content: SkillsIcon, enterFrom: { x: 200, y: 0 }, enterDelay: 150, floatAmp: { x: 14, y: 16 }, floatPeriod: { x: 4.5, y: 5.5 }, exitTo: { x: 300, y: 0 }, exitSpin: 8 },
    { id: "titleLabel", content: TitleLabel, enterFrom: { x: 0, y: 100 }, enterDelay: 500, floatAmp: { x: 8, y: 8 }, floatPeriod: { x: 7, y: 8 }, exitTo: { x: 0, y: 200 } },
  ],
};
