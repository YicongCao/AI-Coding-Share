# 粒子演讲系统

基于 React + Vite + WebSocket 的反传统 PPT 演讲页面，根据 `../speech.txt` 的每个中文句号切分成一页，每页用粒子拟合 SVG 组成的图示。后台控制端通过 WebSocket 广播翻页指令，所有观众浏览器同步播放。

演讲稿首段（标题）作为封面页，正文按 `。` 切分；末尾以 `！` 收尾的“演讲完毕，谢谢大家！”作为致谢页保留。共 78 页。

## 启动

```bash
npm install
npm run dev      # 前后端同时启动；前端 http://localhost:5173 ，WS 5174
```

生产构建并运行（同一进程同时托管静态资源和 WebSocket）：

```bash
npm run build
npm run start    # 监听 5174
```

## URL

- `/` — 观众端：全屏粒子图示 + 底部字幕。所有观众应打开该页面而不是观看屏幕分享。
- `/admin` — 演讲者后台：当前/下一页预览、控制按钮、演讲稿全文（当前句子红色加粗）、进度条、已用时间、预估剩余时间。

## 演讲者快捷键（仅 `/admin`）

- `→` / `Space` / `PageDown` 下一页
- `←` / `PageUp` 上一页
- `Home` 回到第 1 页
- `End` 跳到最后一页
- `S` 开始计时
- `R` 重置

## 同步机制

服务器维护权威状态 `{ currentIndex, seed, transitionStartedAt, ... }`，仅广播状态变化（不传逐帧像素或粒子坐标）。客户端用相同的 `seed` 在本地生成相同的 SVG 路径并采样为粒子目标，使所有观众看到一致画面。`transitionStartedAt` 是服务器墙钟时间，客户端通过每条消息携带的 `serverTime` 计算本地与服务器的时钟偏移，使切换时机近似一致。

## 目录

- `server/index.ts` — WebSocket + 静态文件服务
- `src/slides.ts` — 解析演讲稿、为每句指定场景类型
- `src/particle/sceneShapes.ts` — SVG 图示模板库与路径采样
- `src/particle/ParticleScene.tsx` — Canvas 粒子渲染与 morph 动画
- `src/sync/wsClient.ts` — 同步 hook
- `src/pages/AudiencePage.tsx` — 观众端
- `src/pages/AdminPage.tsx` — 后台控制端
