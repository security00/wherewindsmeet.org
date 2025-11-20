/**
 * 江湖背景映射系统
 * 将29张武侠背景图按场景类型分类，并为每个页面路由映射对应背景
 */

export type BackgroundCategory =
  | 'mountain'    // 山林场景
  | 'city'        // 城镇场景
  | 'battlefield' // 战场场景
  | 'snow'        // 雪景场景
  | 'water'       // 水景场景
  | 'temple'      // 寺庙/宫殿场景
  | 'forest';     // 森林场景

export interface BackgroundInfo {
  path: string;
  category: BackgroundCategory;
  description: string;
  mood: 'calm' | 'intense' | 'mysterious' | 'majestic';
}

/**
 * 29张背景图的完整映射
 * 根据实际图片内容进行分类（需要根据实际图片调整）
 */
export const backgroundLibrary: Record<string, BackgroundInfo> = {
  'bg1': { path: '/background/1.png', category: 'mountain', description: '青山远眺', mood: 'majestic' },
  'bg2': { path: '/background/2.png', category: 'forest', description: '竹林深处', mood: 'calm' },
  'bg3': { path: '/background/3.png', category: 'battlefield', description: '战场硝烟', mood: 'intense' },
  'bg4': { path: '/background/4.png', category: 'city', description: '古城夜色', mood: 'mysterious' },
  'bg5': { path: '/background/5.png', category: 'mountain', description: '华山论剑', mood: 'majestic' },
  'bg6': { path: '/background/6.png', category: 'water', description: '江南水乡', mood: 'calm' },
  'bg7': { path: '/background/7.png', category: 'temple', description: '古刹钟声', mood: 'calm' },
  'bg8': { path: '/background/8.png', category: 'snow', description: '雪山之巅', mood: 'majestic' },
  'bg9': { path: '/background/9.png', category: 'battlefield', description: '剑气纵横', mood: 'intense' },
  'bg10': { path: '/background/10.png', category: 'forest', description: '幽林秘境', mood: 'mysterious' },
  'bg11': { path: '/background/11.png', category: 'city', description: '繁华街市', mood: 'calm' },
  'bg12': { path: '/background/12.png', category: 'mountain', description: '峰峦叠嶂', mood: 'majestic' },
  'bg13': { path: '/background/13.png', category: 'battlefield', description: '决战之地', mood: 'intense' },
  'bg14': { path: '/background/14.png', category: 'water', description: '湖光山色', mood: 'calm' },
  'bg15': { path: '/background/15.png', category: 'temple', description: '宫殿威严', mood: 'majestic' },
  'bg16': { path: '/background/16.png', category: 'snow', description: '冰封千里', mood: 'calm' },
  'bg17': { path: '/background/17.png', category: 'forest', description: '密林追踪', mood: 'mysterious' },
  'bg18': { path: '/background/18.png', category: 'mountain', description: '云海仙境', mood: 'majestic' },
  'bg19': { path: '/background/19.png', category: 'battlefield', description: '血战沙场', mood: 'intense' },
  'bg20': { path: '/background/20.png', category: 'city', description: '夜幕降临', mood: 'mysterious' },
  'bg21': { path: '/background/21.png', category: 'water', description: '渔舟唱晚', mood: 'calm' },
  'bg22': { path: '/background/22.png', category: 'temple', description: '禅院静修', mood: 'calm' },
  'bg23': { path: '/background/23.png', category: 'snow', description: '寒梅傲雪', mood: 'majestic' },
  'bg24': { path: '/background/24.png', category: 'forest', description: '古木参天', mood: 'mysterious' },
  'bg25': { path: '/background/25.png', category: 'battlefield', description: '刀光剑影', mood: 'intense' },
  'bg26': { path: '/background/26.png', category: 'mountain', description: '绝壁天险', mood: 'majestic' },
  'bg27': { path: '/background/27.png', category: 'city', description: '市井烟火', mood: 'calm' },
  'bg28': { path: '/background/28.png', category: 'water', description: '碧波荡漾', mood: 'calm' },
  'bg29': { path: '/background/29.png', category: 'temple', description: '皇城根下', mood: 'majestic' },
  'bg30': { path: '/background/30.png', category: 'city', description: '新手指南背景', mood: 'calm' },
  'bg_home': { path: '/background/bg.jpg', category: 'mountain', description: '首页背景', mood: 'majestic' },
};

/**
 * 页面路由到背景的映射
 * 根据页面内容和氛围选择合适的背景
 */
export const routeBackgroundMap: Record<string, string> = {
  // 首页 - 使用壮丽的山景作为江湖入口
  '/': 'bg_home',

  // 指南页面
  '/guides': 'bg24',
  '/guides/new-players': 'bg30',        // 新手村 - 城镇场景
  '/guides/tier-list': 'bg5',           // 华山论剑 - 山峰场景
  '/guides/builds': 'bg18',             // 武学殿堂 - 云海仙境
  '/guides/codes': 'bg4',               // 兑换码 - 神秘夜色
  '/guides/weapons': 'bg25',            // 武器库 - 刀光剑影
  '/guides/bosses': 'bg13',             // Boss攻略 - 决战之地

  // 新闻页面 - 使用江南水乡，整体更清爽
  '/news': 'bg6',

  // 视频页面 - 使用战场场景
  '/videos': 'bg9',

  // 法律页面 - 使用平静场景
  '/privacy': 'bg22',
  '/terms': 'bg22',
};

/**
 * 根据路由获取背景信息
 */
export function getBackgroundForRoute(pathname: string): BackgroundInfo {
  const bgKey = routeBackgroundMap[pathname] || 'bg1';
  return backgroundLibrary[bgKey];
}

/**
 * 根据分类获取随机背景
 */
export function getRandomBackgroundByCategory(category: BackgroundCategory): BackgroundInfo {
  const backgrounds = Object.values(backgroundLibrary).filter(
    bg => bg.category === category
  );
  const randomIndex = Math.floor(Math.random() * backgrounds.length);
  return backgrounds[randomIndex];
}

/**
 * 获取所有背景（用于预加载）
 */
export function getAllBackgrounds(): BackgroundInfo[] {
  return Object.values(backgroundLibrary);
}

/**
 * 根据心情获取背景
 */
export function getBackgroundsByMood(mood: BackgroundInfo['mood']): BackgroundInfo[] {
  return Object.values(backgroundLibrary).filter(bg => bg.mood === mood);
}
