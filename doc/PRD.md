# Where Winds Meet - 产品需求文档（PRD）

## 版本信息
- 文档版本：v1.0
- 创建日期：2025-11-16
- 最后更新：2025-11-16
- 项目域名：wherewindsmeet.org

---

## 1. 项目概述

### 1.1 产品定位
Where Winds Meet 是一个以武侠开放世界 RPG 游戏为核心的资讯聚合平台，主要面向喜欢 Wuxia、MMO 和动作冒险类游戏的休闲玩家群体。通过提供实时新闻、深度攻略、工具和社区内容，获取搜索流量。

### 1.2 一句话描述
基于 Where Winds Meet 全球上线流量红利，打造的武侠 RPG 资讯站点，通过 SEO 优化和内容运营获取自然流量。

### 1.3 目标用户
- **核心用户**：18-35 岁的 RPG/MMO 玩家
- **地理分布**：主要市场为美国，次要市场包括英语系国家（如英国、加拿大）
- **用户特征**：
  - 对 Wuxia、开放世界、PVP/Co-op 游戏感兴趣
  - 习惯搜索攻略、兑换码、Tier List
  - 倾向于免费（F2P）、跨平台游戏体验
  - 通过 Google 搜索发现游戏资讯

---

## 2. 市场背景与机会

### 2.1 市场趋势分析

#### 搜索热度
- **关键词**：where winds meet
- **分类**：爆发热词
- **趋势**：2025年11月14日全球上线后搜索量飙升，Trends 兴趣度高涨
- **对比**：热度超越部分 MMO 新游，玩家超 2000 万
- **Google Trends**：https://trends.google.com/trends/explore?date=now%207-d&q=where%20winds%20meet

#### 热度爆发原因
1. **游戏全球上线**：2025年11月14日 PC（Steam/Epic/官方）+ PS5 同步发布，免费 F2P
2. **社交媒体传播**：X/Twitter、Reddit、YouTube/Twitch 上 PVP、自定义、照片模式视频火爆
3. **病毒式传播**：武侠物理效果、Tier List/Builds 讨论，玩家分享自定义角色
4. **玩家需求**：Bug 修复、能量系统攻略、武器 Tier List、跨平台指南搜索量大

#### 主要需求市场
- **首要市场**：美国（占比最高）
- **次要市场**：英国、加拿大、澳大利亚等英语国家

### 2.2 竞品分析

#### 当前 SERP 排名（where winds meet）
1. **第一名**：官方站点
   - URL: https://www.wherewindsmeetgame.com/
   - 优势：下载/新闻官方权威
2. **第二名**：Steam 页面
   - URL: https://store.steampowered.com/app/3564740/Where_Winds_Meet/
   - 优势：评论/成就
3. **其他竞品**：Reddit（r/MMORPG）、PS5 官网、YouTube 攻略（如 Tier List）

#### 竞品游戏类型
- **资讯集合**：Reddit Threads、YouTube Builds/Tips
  - URL: https://www.reddit.com/r/MMORPG/comments/1ow4n0b/where_winds_meet_reviews_thread/
  - 策略：聚合攻略/评测

#### 内容趋势（YouTube/X）
- 最近爆款视频主题：武器 Tier List、PVP Builds、Beginner Tips、Photo Mode
- 内容形式：短视频（Shorts）+ 长视频评测
- 用户需求：Tier List、Codes、Bug Fixes、Crossplay

### 2.3 市场机会
✅ **搜索热度爆发中**，上线后流量峰值，成本低
✅ **SERP 前位非纯资讯站**，攻略站点有排名机会
✅ **用户扩展需求强**，Tier List/Codes/Bug 指南空白
✅ **域名精准匹配**，SEO 天然优势
✅ **内容扩展大**，可聚合 Wuxia RPG 相关资讯

---

## 3. 商业模式

### 3.1 站点类型
游戏资讯聚合站（Gaming Hub）


### 3.3 流量获取策略
1. **SEO 自然流量**（主要）
   - 核心关键词排名优化（如 release date、ps5、tier list）
   - 长尾关键词内容建设
2. **社交媒体流量**（辅助）
   - X、Reddit、YouTube 引流
3. **外链建设**（长期）
   - 游戏论坛、Discord 外链

### 3.4 数据监测指标
- Google Search Console（GSC）：搜索表现、点击率
- Google Analytics（GA）：用户行为、转化率
- Microsoft Clarity：用户热力图、录屏分析

---

## 4. 功能需求

### 4.1 核心功能

#### 4.1.1 首页资讯嵌入
- **需求描述**：首页嵌入最新新闻轮播、下载按钮、平台链接
- **技术实现**：动态 RSS + 视频嵌入
- **数据源**：官方 X (@WhereWindsMeet_)、Steam 更新

#### 4.1.2 资讯页面设计
**页面布局**：
```
[Header - Logo + Navigation]
[News Banner + Search]
[Tier List / Hot Guides Cards]
[Embedded Videos / Tools]
[Related Content Section]
[Footer - Links + SEO Text]
```

**必需元素**：
- 响应式布局（移动优先）
- 搜索框（关键词如 codes、builds）
- 加载提示
- 分享按钮（X/Reddit）
- FAQ 折叠

#### 4.1.3 相关内容推荐
- **功能**：主页面下方展示 Tier List、Builds、类似 Wuxia 游戏
- **数据源**：
  - YouTube: Tier List 视频
  - Reddit: Hot Threads
- **展示数量**：首页 6-12 个卡片

### 4.2 内容功能

#### 4.2.1 游戏攻略/指南(置于首页)
**内容类型**：
- 入门指南（How to Play / Beginner Tips）
- 武器 Tier List（PVE/PVP）
- Builds 推荐（武器组合）
- Bug Fixes / Energy System FAQ

**SEO 目标**：
- 覆盖长尾关键词（如 where winds meet tier list、codes）
- 提升页面停留时间
- 增加内链建设机会

#### 4.2.2 内容集合列表
- **参考**：Game8 / GameRant 的指南页
- **URL 结构**：`/guides/tier-list`, `/guides/builds`, `/guides/codes`, `/news`
- **功能**：列表 + 侧边栏工具（服务器状态、Code 兑换器）