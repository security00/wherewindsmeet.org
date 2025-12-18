# wherewindsmeet.org 对标 wwmcompanion.dev：结构差异与机会点

更新时间：2025-12-16

---

## 1) wherewindsmeet.org 当前信息架构（现状）

### 核心定位

- **SEO Guides Hub**（Next.js App Router，多页面 SSR/静态内容页为主）
- 目标：覆盖 “where winds meet” 相关搜索（guides / tier list / builds / codes / news / videos），通过内链提升二跳与停留

### 主要路由（English）

- `/`：长内容首页 + 热门入口卡片（偏“内容目录”）
- `/guides/*`：大量长文指南（含 Boss、武器百科、任务/谜题/活动等）
- `/news`：新闻汇总（并强调与 guides/tools 的联动，但目前工具页较少）
- `/videos`：视频聚合
- `/privacy`、`/terms`：合规与免责声明

### 导航形态

- 顶部 Header：多链接（Home/Guides/Bosses/Weapons/…/News）
- Footer：基础免责声明 + 站内入口 + 邮箱

### 已有“轻交互/工具雏形”

- 首页 `JianghuMap`：更像“站内内容地图”，不是“游戏资源互动地图”
- `npc-list`：有“互动地图 pins / click-to-zoom gallery”等（说明站内已有交互组件基础）

---

## 2) wwmcompanion.dev 的结构优势（对 click/复访更直接）

- **工具型主入口**：Map / PVP / Chess 都是强意图任务，天然“来了就要用”
- **外部资源整合进流程**：MapGenie、6Fast、wwmcombos 直接 iframe，减少跳出与决策成本
- **移动端“底部 Tab”**：用户不迷路、切换快，更像 App
- **信任与归因明确**：作者署名、内容信用、第三方免责声明、Donate

---

## 3) 我们的机会：不做 SPA，也能复制“入口逻辑”

wherewindsmeet.org 的优势是 SEO 与可索引内容；要补的是：

1) **新增“工具页”承接强意图搜索**（并且做成可索引的内容页，而不是纯 iframe）

2) **把工具页和现有长文互相导流**

- 典型路径：
  - 搜索 → 进入工具页（高 CTR）→ 工具页内推荐相关攻略（提升二跳点击）
  - 搜索 → 进入攻略页 → 攻略页内给“工具快捷入口”（提升解决效率/降低跳出）

3) **移动端快速入口**

- 不必改成底部 Tab，但可以在：
  - 首页首屏/第二屏增加“Tools 快捷四宫格”
  - Guide 顶部加“常用工具”胶囊按钮（Map / Reset / Checklist / Codes）

---

## 4) 风险与边界（避免反噬）

- 不建议整站改 SPA：会稀释现有 SEO 优势
- 外链/热链要控风险：
  - 允许 “引用 + 署名 + 跳转”
  - 关键页面尽量自托管核心解释文本与结构化 FAQ（即便工具本体是 iframe）
  - Terms/Privacy 中增加 “第三方工具 iframe” 的补充说明（若我们大量引入）

