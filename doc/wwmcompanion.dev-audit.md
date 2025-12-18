# wwmcompanion.dev 信息架构与策略拆解（对标 wherewindsmeet.org）

更新时间：2025-12-16（基于线上页面 HTML + `assets/index-*.js.map` 反编译到源码结构的分析）

> 结论先行：`wwmcompanion.dev` 更像“Companion/助手 App”，用**工具入口（地图/连招/象棋）**承接强意图访问，再用**长文流程型指南**承接留存与复访；整套体验是移动端优先的“底部 Tab 导航 + 子 Tab + 长文侧栏目录”。

---

## 1) 信息架构（IA）= 4 个主 Tab + 若干子模块

该站是一个 **Vite + React 的 SPA**（GitHub Pages 静态托管），核心 IA 不是“多页面 SEO”，而是“单应用内多模块”：

### A. 顶部 Header（全局）

- 品牌区：Winds Meet Companion + “Created by …” 作者署名，且提供 Reddit 个人主页跳转
- 右侧转化：Donate（PayPal）按钮
- 法务入口：Terms / Privacy（点击后切换到 Legal 视图）

### B. 底部 Tab（全局主导航）

1. `Guide`（指南）
2. `Map`（地图）
3. `PVP`
4. `Chess`（中国象棋/棋局工具）

### C. Guide（指南 Tab）

Guide 内部是“左侧目录 + 右侧长文”的结构（移动端为汉堡菜单）：

- App Guide (General)
- Part 1: F2P & Spending
- Part 2: Gameplay & UI
- Part 3: Weapon Skins
- Part 4: Merchant Trading
- Part 5: Cosmetics Roadmap

在 **App Guide (General)** 里就嵌入了对“日/周例行”与“重置时间”的说明（但不是交互式工具）：

- Daily Checklist（静态清单）
- Weekly Checklist（静态清单）
- Resets/Schedules（比如 New Day: 21:00 UST；New Week: Monday）

此外它对内容有明确“来源信用”：在侧栏顶部单独标注 Guide Credit（指向 Reddit 作者）。

### D. Map（地图 Tab）

Map 内部是 2 个子 Tab（切换 iframe）：

- MapGenie（`mapgenie.io/...`）
- 6Fast（CN 备选，`yysls-map.6fast.com/...`）

特点：不自建地图数据，直接把社区最强外部资源整合进自己的流程。

### E. PVP（PVP Tab）

PVP 内部 2 个子 Tab：

- Combos：直接 iframe 打开 `wwmcombos.com`（并带 `?hasVideo=true`）
- PVP Videos：分类嵌入 YouTube 视频卡片

### F. Chess（象棋 Tab）

这是该站的“自研工具亮点”：

- 提供可交互的中国象棋棋盘（拖拽摆子/删除/清空）
- 调用引擎计算最佳走法（源码里可见引擎通过 `./wukong.js` fetch 初始化）
- 典型场景：玩家卡在游戏内棋局/残局（强意图、强复访）

### G. Legal（Terms/Privacy）

- Terms 明确写了：非官方、与 NetEase / Everstone 无关
- 包含第三方链接免责声明（MapGenie 等）
- 提及 AI/引擎准确性免责声明、开源引擎许可等

---

## 2) 逐模块拆解：它怎么做内容/工具/导航/信任

### 内容策略（Content）

- **任务导向/流程导向**：大量“先做什么→后做什么→不要浪费”的结构化指导，而不是百科式铺量
- **重置/例行化**：把“周常/日常”当作留存锚点（哪怕只是文字清单）
- **强外部素材依赖**：大量引用 Reddit 图、外链图、Drive 链接、YouTube 等（优点：快；风险：稳定性/版权/失效）
- **信用与归因清晰**：对内容作者的 Reddit 账号做显著标注，降低“抄袭感”与信任成本

### 工具策略（Tools）

- **Best-of-breed 嵌入**：地图（MapGenie/6Fast）、PVP 连招（wwmcombos）直接 iframe，不自研
- **差异化自研 1 个点**：象棋棋局工具（引擎+交互棋盘），形成“只有它能解决”的理由

### 导航与交互（Nav/UX）

- **移动端优先**：底部 Tab 是“App 模式”的典型做法，减少迷路
- **子 Tab 解决“同类资源对比”**：地图/ PVP 都用子 Tab 让用户快速切换
- **长文侧栏目录**：长内容不靠滚动硬读，先用目录“承诺能解决”

### 信任与转化（Trust/Conversion）

- 作者署名 + Reddit 主页：让用户知道“谁在维护”
- 明确非官方免责声明：减少合规风险，也减少用户误解
- Donate：把价值捕获放在全局可见的位置（但不影响核心使用）

---

## 3) 这套模式对 wherewindsmeet.org 的启发（不照搬 SPA，但照搬“入口逻辑”）

wherewindsmeet.org 现状偏“SEO Guides Hub”（多页面 SSR/静态内容页），优势是可索引与可扩展；`wwmcompanion.dev` 的优势是工具入口与复访。

我们更适合做成：

- **“SSR/静态内容页（可索引） + 少量工具页（强复访）”** 的组合
- 工具页要有**可被搜索理解的首屏文本 + FAQ + 内链**，而不是纯 iframe

---

## 4) 可借鉴点清单（用于后续优先级评估）

1. “工具型入口”承接强意图关键词（Interactive Map / Reset / Chess Puzzle）
2. 把最强外部资源整合进流程（而不是只放外链）
3. 以“周常/重置/例行”驱动复访（哪怕先做静态，后做交互）
4. 清晰的作者/来源归因，降低信任成本
5. 移动端低摩擦导航（尤其是工具页的固定入口）

