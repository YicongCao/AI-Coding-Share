# AI Coding 反直觉的那些事 · SVG 插画演讲

这是一份"反传统 PPT"的演讲项目：

- [`speech.txt`](speech.txt) — 完整演讲稿《AI Coding 反直觉的那些事》。
- [`prompt.txt`](prompt.txt) — 最初的需求描述（产物即本仓库）。
- [`presentation/`](presentation/) — 基于 React + Vite + WebSocket 的前端演讲页面，按演讲稿每个中文句号 `。` 切分为独立页面，每页使用 SVG 插画展示主题内容，各元素块带飞入/漂浮/飞出动画。后台控制端通过 WebSocket 广播翻页"指令流"，所有观众浏览器各自渲染动画，画面保持一致。

整套演讲共 **78 张幻灯片**（1 张封面 + 77 个句子），覆盖 **78 套独立 SVG 插画场景**。

## 快速启动

```bash
cd presentation
npm install

# 本地开发：Vite 5173 + WS 5174
npm run dev

# 演讲日：单进程同时托管静态资源和 WebSocket（默认 5174）
npm run build
npm run start
```

- 观众访问 `http://<主机>:5174/`（直接看 / 看本机的 5173 用于开发）。
- 演讲者打开 `http://<主机>:5174/admin` 操控演讲。

## 工作原理

```mermaid
flowchart LR
  speech["speech.txt"] -->|"build-time ?raw 导入"| slides["slides.ts<br/>(78 slides)"]
  slides --> renderer["SvgScene.tsx<br/>(SVG 插画渲染器)"]
  scenes["scenes/*Def.tsx<br/>(78 场景定义)"] --> renderer
  admin["/admin<br/>(演讲者)"] -->|"next / prev / jumpTo"| wsServer["Node WS Server<br/>权威状态"]
  wsServer -->|"currentIndex, seed,<br/>transitionStartedAt"| audienceA["/<br/>观众 A"]
  wsServer -->|"同样的指令流"| audienceB["/<br/>观众 B"]
  wsServer -->|"同步给后台预览"| admin
  renderer -.->|"相同 seed + 场景 ⇒ 一致画面"| audienceA
```

服务器只下发"翻页指令"和随机种子，**不**通过网络传输逐帧像素。每个场景由多个 SVG 元素块组成，各块独立做飞入/漂浮/飞出动画，`seed` 控制漂浮相位，`transitionStartedAt` 控制动画时序，所有观众看到一致的画面。

## 关键特性

- **SVG 插画场景**：每页对应一幅 Material Design 风格的 SVG 插画，按主题拆分为 4-7 个元素块，每块独立漂浮运动。
- **主题过渡动画**：每个场景的主题元素有定制的退出方向/旋转/缩放；支持 `zipper` 拉链扫描特效等场景级过渡。
- **飞入/飞出**：切页时旧场景元素从当前漂浮位置平滑飞出，新场景元素依次从屏幕外飞入。
- **文本标注**：技术术语用英文，说明性文字用中文，直接嵌入 SVG 中。
- **观众端**：全屏 SVG 插画 + 底部圆角灰底白字字幕（当前句子）。
- **后台控制端**：
  - 当前页大预览 + 下一页缩略预览。
  - 上一页 / 下一页 / 开始计时 / 重置 按钮。
  - 进度条 + 当前页号 / 已用时间 / 平均每页 / **实时刷新的预估剩余时间**。
  - 演讲稿全文：当前句子 **红色加粗**，前文淡灰，点击任意句子可跳页。
  - 键盘快捷键：`→` `Space` `PageDown` 下一页，`←` `PageUp` 上一页，`Home` 首页，`End` 末页，`S` 开始计时，`R` 重置。
- **断线自动重连**：观众侧 WebSocket 指数退避，掉线期间页面提示"正在重连"。

## 仓库结构

```
ai-coding-share/
├── speech.txt              # 演讲稿原文
├── prompt.txt              # 项目最初的需求
├── README.md               # 本文件
└── presentation/           # 演讲前端 + 同步服务
    ├── README.md           # 子项目详细文档（含启动、目录说明）
    ├── package.json
    ├── server/index.ts     # Node WS + 静态文件服务
    └── src/
        ├── App.tsx
        ├── main.tsx
        ├── styles.css
        ├── slides.ts                       # 演讲稿解析 + 句子→场景映射
        ├── svg/
        │   ├── SvgScene.tsx                # SVG 插画渲染器（飞入/漂浮/飞出动画引擎）
        │   ├── registry.ts                # 场景注册表
        │   └── scenes/                    # 78 个场景定义（每页一个 *Def.tsx）
        │       ├── coverDef.tsx
        │       ├── introBadgeDef.tsx
        │       ├── ...
        │       └── finaleDef.tsx
        ├── sync/wsClient.ts                # WebSocket 同步 hook
        └── pages/
            ├── AudiencePage.tsx
            └── AdminPage.tsx
```

详细的子项目用法见 [`presentation/README.md`](presentation/README.md)。
