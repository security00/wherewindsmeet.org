# CTR/点击收益优先的改造清单（可执行）

更新时间：2025-12-16  
目标：优先做能带来 **新增搜索点击（CTR/覆盖）** + **站内二跳点击** 的改造；避免把整站做成 SPA。

> 说明：下面每条都按「可借鉴点 → 对点击的影响路径 → 落地成本」展开，并给出建议路由与交付物。

---

## P0（最高优先）：工具型入口吃增量点击

### 1) Where Winds Meet Interactive Map 落地页

- **可借鉴点**：`wwmcompanion.dev` 把 MapGenie/6Fast 直接嵌入流程，用户不用离站找资源。
- **对点击的影响路径**
  - 搜索 “Where Winds Meet interactive map / mapgenie / 6fast map” → **高意图用户点击进入**  
  - 首屏解释 + FAQ → 降低跳出  
  - 页面内链接到 `npc-list` / `bosses` / `items` → 提升二跳点击（站内浏览深度）
- **落地成本**：低（页面 + iframe + FAQ + sitemap + nav）
- **建议路由**：`/tools/interactive-map`
- **状态**：已落地（2025-12-16）：`/tools/interactive-map`（EN/DE/VN）+ Tools Hub + sitemap + Header/Footer 入口
- **页面结构（首屏必须可被搜索理解）**
  - 5–8 行：这张互动地图适合找什么（NPC/宝箱/采集/传送点/任务点）
  - 2 个 Tab：MapGenie（全球用户习惯）、6Fast（CN 备选）
  - FAQ：进度是否可同步？两张图差异？打不开怎么办？广告/弹窗说明？
  - “下一步”内链：`/guides/npc-list`、`/guides/bosses`、`/guides/items`
- **合规/风险**
  - Terms/Privacy 里补一条：第三方 iframe 工具免责声明（可复用 wwmcompanion 的写法思路）

### 1b) Desktop Widget / Daily Assistant（趋势词承接页）

- **可借鉴点**：社区/Google Trends 会出现“突然爆量”的疑问词（用户不是要百科，而是要“我现在该去哪下载/怎么用”）。
- **对点击的影响路径**
  - 搜索 “where winds meet desktop widget / daily assistant widget” → 进站  
  - 首屏解释“它通常是 mobile widget，并非 PC 下载包” → 降低跳出  
  - 给出 Desktop 替代方案（pin `reset timer` + `checklist`）→ 提升二跳与工具使用
- **落地成本**：低（指南页 + 内链 + sitemap）
- **建议路由**：`/guides/desktop-widget`
- **状态**：已落地（2025-12-16）：`/guides/desktop-widget`（EN/DE/VN）+ 首页快捷入口 + Guides Hub 卡片 + sitemap

---

## P1：复访型页面（提升回访 + 二跳点击）

### 2) Reset Timer（每日/每周重置倒计时）

- **可借鉴点**：`wwmcompanion.dev` 在指南里写“New Day/Weekly”，但没有做成工具；我们可以更进一步。
- **对点击的影响路径**
  - 搜索 “Where Winds Meet reset time / daily reset / weekly reset” → 新增点击  
  - 用户收藏/复访 → 提升品牌查询与回访流量  
  - 倒计时下方放 “趁重置前要做什么” → 引导去 `codes/free-outfits/news`
- **落地成本**：低-中（纯前端计算 + 时区选择）
- **建议路由**：`/tools/reset-timer`
- **状态**：已落地（2025-12-16）：`/tools/reset-timer`（EN/DE/VN，localStorage 保存设置）
- **关键交互**
  - 服务器/时区下拉（至少提供：UTC、US East/West、Europe、Asia；默认用用户本地）
  - 今日剩余时间、下次周重置时间、明确“以游戏内为准”的免责声明

### 3) Checklist（日/周清单，可自定义）

- **可借鉴点**：对方用“静态清单 + 例行化内容”驱动复访；我们可以做交互 + 本地保存。
- **对点击的影响路径**
  - 搜索 “Where Winds Meet daily checklist / weekly checklist” → 新增点击  
  - 用户在站内打勾 → 增加停留与复访  
  - “每条任务”附推荐阅读 → 提升深层内链点击（例如：做 Boss 前看 boss guide）
- **落地成本**：中（localStorage、模板、重置逻辑、可选导入导出）
- **建议路由**：`/tools/checklist`
- **状态**：已落地（2025-12-16）：`/tools/checklist`（EN/DE/VN，本地保存 + 自动按重置周期清空）
- **MVP 功能**
  - 默认模板：Daily / Weekly 两列
  - 允许添加自定义条目（本地保存）
  - 一键清空/下次重置自动清空（和 reset timer 逻辑复用）

---

## P2：外部资源整合（增二跳，但 CTR 取决于关键词）

### 4) PVP Combos & Videos 聚合页

- **可借鉴点**：PVP 里把 `wwmcombos.com` 嵌进来，再配视频分类。
- **对点击的影响路径**
  - 搜索 “Where Winds Meet combos / pvp combos” → 进站  
  - iframe + 视频 → 提升停留  
  - 内链到 `pvp-tier-list/builds/weapons` → 提升二跳
- **落地成本**：低（iframe + curated 视频列表）
- **建议路由**：`/tools/pvp-combos` 或 `/guides/pvp-combos`
- **状态**：已落地（2025-12-16）：`/tools/pvp-combos`（EN/DE/VN）+ 从 `pvp-tier-list` 加入 CTA 内链

---

## P3：高意图长尾（小而强的点击）

### 5) 象棋/棋局（Ye Buxiu 等）专页 +（可选）模拟器

- **可借鉴点**：对方做了象棋引擎工具，解决“我现在卡住了”的即时问题。
- **对点击的影响路径**
  - 搜索 “Where Winds Meet chess / xiangqi / Ye Buxiu” → 进站（长尾 CTR 往往高）  
  - 页面内提供：解法步骤 + 常见陷阱 +（可选）工具 → 低跳出
- **落地成本**
  - 仅做攻略页：低
  - 做可交互棋盘 + 引擎：高（且有许可/性能/安全与维护成本）
- **建议路由**
  - MVP：`/guides/xiangqi`（先吃 SEO）
  - 后续：如 GSC 出现明确需求，再考虑独立工具页（避免整站 iframe 形态）
- **状态**：已落地（2025-12-16）：`/guides/xiangqi`（EN/DE/VN）；Solver 工具页因无查询证据暂不做

---

## P0-P1 配套改造（保证“工具页能被发现”）

### 6) 增加 Tools Hub + 全站入口

- **可借鉴点**：对方“底部 Tab”是强入口；我们用“Tools Hub + 快捷入口”替代。
- **对点击的影响路径**
  - 任何页面 → 一次点击到 Tools → 增加二跳  
  - Tools 页作为内链中心 → 帮新工具页更快被抓取/传递权重
- **落地成本**：低
- **建议路由**：`/tools`（列出 Map / Reset / Checklist / PVP）
- **入口位置建议**
  - Header 增加 `Tools`
  - 首页增加 “Tools” 卡片区（至少 3 张：Map/Reset/Checklist）
- **状态**：已落地（2025-12-16）：Header/Footer 已增加 Tools，`/tools`（EN/DE/VN）上线，三语首页已加入 Tools 快捷卡片区
