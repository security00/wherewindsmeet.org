'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useCallback, useMemo, useState } from 'react';
import { usePathname } from 'next/navigation';

interface MapLandmark {
  id: string;
  slug: string;
  label: string;
  chineseName: string;
  icon: string;
  position: { x: number; y: number }; // percentage based positioning
  description: string;
  category: 'beginner' | 'combat' | 'rewards' | 'knowledge';
  backgroundPreview: string;
  tooltipSide?: 'top' | 'bottom';
}

const landmarks: MapLandmark[] = [
  {
    id: 'new-players',
    slug: '/guides/new-players',
    label: 'Beginner Guide',
    chineseName: 'Newcomer Village',
    icon: '🏯',
    position: { x: 30, y: 58 },
    description: 'Start your journey in the Jianghu',
    category: 'beginner',
    backgroundPreview: '/design/background/11.png',
  },
  {
    id: 'tier-list',
    slug: '/guides/tier-list',
    label: 'Tier List',
    chineseName: 'Peak Duel',
    icon: '🏔️',
    position: { x: 50, y: 24 },
    description: 'Compete at the peak of martial arts',
    category: 'combat',
    backgroundPreview: '/design/background/5.png',
  },
  {
    id: 'builds',
    slug: '/guides/builds',
    label: 'Builds',
    chineseName: 'Martial Hall',
    icon: '⚔️',
    position: { x: 68, y: 38 },
    description: 'Master your combat style',
    category: 'combat',
    backgroundPreview: '/design/background/18.png',
    tooltipSide: 'top',
  },
  {
    id: 'codes',
    slug: '/guides/codes',
    label: 'Codes',
    chineseName: 'Treasure Vault',
    icon: '💎',
    position: { x: 32, y: 38 },
    description: 'Claim your rewards',
    category: 'rewards',
    backgroundPreview: '/design/background/4.png',
    tooltipSide: 'top',
  },
  {
    id: 'weapons',
    slug: '/guides/weapons',
    label: 'Weapons',
    chineseName: 'Armory',
    icon: '🗡️',
    position: { x: 70, y: 60 },
    description: 'Explore legendary armaments',
    category: 'knowledge',
    backgroundPreview: '/design/background/25.png',
  },
  {
    id: 'bosses',
    slug: '/guides/bosses',
    label: 'Bosses',
    chineseName: 'Boss Arena',
    icon: '👹',
    position: { x: 50, y: 72 },
    description: 'Face formidable foes',
    category: 'combat',
    backgroundPreview: '/design/background/13.png',
  },
];

type LanguageCode = "en" | "vi" | "de";

const UI_TEXT: Record<
  LanguageCode,
  {
    badge: string;
    title: string;
    subtitle: string;
    quickLinks: { guides: string; news: string; videos: string };
    enter: string;
  }
> = {
  en: {
    badge: "Jianghu World · Guide Map",
    title: "Choose Your Path",
    subtitle: "Select a landmark to begin your journey through Where Winds Meet",
    quickLinks: { guides: "View All Guides", news: "Latest News", videos: "Watch Videos" },
    enter: "Enter",
  },
  vi: {
    badge: "Thế giới Jianghu · Bản đồ hướng dẫn",
    title: "Chọn lộ trình của bạn",
    subtitle: "Chọn một điểm đến để bắt đầu hành trình trong Where Winds Meet",
    quickLinks: { guides: "Xem tất cả hướng dẫn", news: "Tin tức mới nhất", videos: "Xem video" },
    enter: "Mở",
  },
  de: {
    badge: "Jianghu-Welt · Guide-Karte",
    title: "Wähle deinen Weg",
    subtitle: "Wähle einen Ort und starte deine Reise in Where Winds Meet",
    quickLinks: { guides: "Alle Guides", news: "Aktuelle News", videos: "Videos ansehen" },
    enter: "Öffnen",
  },
};

const LANDMARK_TEXT: Record<
  Exclude<LanguageCode, "en">,
  Record<string, Pick<MapLandmark, "label" | "chineseName" | "description">>
> = {
  vi: {
    "new-players": {
      label: "Hướng dẫn tân thủ",
      chineseName: "Làng Tân Thủ",
      description: "Bắt đầu hành trình giang hồ của bạn",
    },
    "tier-list": {
      label: "Xếp hạng",
      chineseName: "Đỉnh Luận Kiếm",
      description: "Tranh tài ở đỉnh cao võ học",
    },
    builds: {
      label: "Bộ build",
      chineseName: "Võ đường",
      description: "Làm chủ phong cách chiến đấu",
    },
    codes: {
      label: "Mã quà",
      chineseName: "Kho báu",
      description: "Nhận phần thưởng",
    },
    weapons: {
      label: "Vũ khí",
      chineseName: "Kho binh khí",
      description: "Khám phá binh khí huyền thoại",
    },
    bosses: {
      label: "Boss",
      chineseName: "Đấu trường Boss",
      description: "Đối đầu kẻ thù đáng gờm",
    },
  },
  de: {
    "new-players": {
      label: "Einsteiger-Guide",
      chineseName: "Neulingsdorf",
      description: "Starte deine Reise im Jianghu",
    },
    "tier-list": {
      label: "Tierliste",
      chineseName: "Gipfelduell",
      description: "Miss dich an der Spitze der Kampfkünste",
    },
    builds: {
      label: "Builds",
      chineseName: "Kampfhalle",
      description: "Meistere deinen Kampfstil",
    },
    codes: {
      label: "Codes",
      chineseName: "Schatzkammer",
      description: "Sichere dir Belohnungen",
    },
    weapons: {
      label: "Waffen",
      chineseName: "Waffenkammer",
      description: "Entdecke legendäre Waffen",
    },
    bosses: {
      label: "Bosse",
      chineseName: "Boss-Arena",
      description: "Stell dich gefährlichen Gegnern",
    },
  },
};

const CATEGORY_LABEL: Record<LanguageCode, Record<MapLandmark["category"], string>> = {
  en: { beginner: "Beginner", combat: "Combat", rewards: "Rewards", knowledge: "Knowledge" },
  vi: { beginner: "Tân thủ", combat: "Giao tranh", rewards: "Phần thưởng", knowledge: "Kiến thức" },
  de: { beginner: "Einsteiger", combat: "Kampf", rewards: "Belohnungen", knowledge: "Wissen" },
};

const categoryColors = {
  beginner: 'emerald',
  combat: 'red',
  rewards: 'amber',
  knowledge: 'cyan',
};

export default function JianghuMap() {
  const [hoveredLandmark, setHoveredLandmark] = useState<string | null>(null);
  const pathname = usePathname();
  const language: LanguageCode = pathname?.startsWith("/vn") ? "vi" : pathname?.startsWith("/de") ? "de" : "en";
  const uiText = UI_TEXT[language];

  const withLangPrefix = useCallback(
    (slug: string) => {
      if (language === "en") return slug;
      const prefix = language === "vi" ? "/vn" : "/de";
      return slug.startsWith(prefix) ? slug : `${prefix}${slug}`;
    },
    [language]
  );

  const localizedLandmarks = useMemo(
    () =>
      landmarks.map((landmark) => {
        const localized = language === "en" ? undefined : LANDMARK_TEXT[language]?.[landmark.id];
        return {
          ...landmark,
          ...localized,
          slug: withLangPrefix(landmark.slug),
        };
      }),
    [language, withLangPrefix]
  );

  const quickLinks = useMemo(
    () => [
      { label: uiText.quickLinks.guides, href: withLangPrefix('/guides'), color: 'emerald' },
      { label: uiText.quickLinks.news, href: withLangPrefix('/news'), color: 'cyan' },
      { label: uiText.quickLinks.videos, href: withLangPrefix('/videos'), color: 'purple' },
    ],
    [withLangPrefix, uiText]
  );

  return (
    <div className="relative min-h-[600px] overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-950/70 p-6 shadow-2xl shadow-emerald-500/15 sm:min-h-[700px] sm:p-10">
      {/* 标题区域 */}
      <div className="relative z-10 mb-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 rounded-full bg-slate-950/80 px-4 py-2 text-sm font-medium text-emerald-300 ring-1 ring-emerald-400/40"
        >
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-300">
            ●
          </span>
          {uiText.badge}
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-balance text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl"
        >
          {uiText.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-2 text-sm text-slate-300 sm:text-base"
        >
          {uiText.subtitle}
        </motion.p>
      </div>

      {/* 移动端：改为网格，避免图标重叠 */}
      <div className="mb-6 grid grid-cols-2 gap-3 sm:hidden">
        {localizedLandmarks.map((landmark) => (
          <Link
            key={landmark.id}
            href={landmark.slug}
            className="group flex items-center gap-3 rounded-2xl border border-slate-800/70 bg-slate-900/70 p-3 shadow-inner shadow-slate-950/40 transition hover:border-emerald-500/40 hover:shadow-emerald-900/30"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-700 bg-slate-950 text-2xl shadow-inner shadow-slate-900">
              {landmark.icon}
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold text-slate-100">{landmark.chineseName || landmark.label}</span>
              <span className="text-xs text-slate-400">{CATEGORY_LABEL[language][landmark.category]}</span>
            </div>
          </Link>
        ))}
      </div>

      {/* 地图区域 */}
      <div className="relative z-10 mx-auto hidden max-w-5xl sm:block">
        <div className="relative aspect-[16/10] w-full">
          {/* 地标点 */}
          {localizedLandmarks.map((landmark, index) => {
            const isHovered = hoveredLandmark === landmark.id;
            const color = categoryColors[landmark.category];
            const tooltipSide = landmark.tooltipSide ?? 'bottom';
            const tooltipPositionClass =
              tooltipSide === 'top'
                ? 'left-1/2 bottom-full mb-3 -translate-x-1/2'
                : 'left-1/2 top-full mt-3 -translate-x-1/2';

            return (
              <motion.div
                key={landmark.id}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + index * 0.1,
                  type: 'spring',
                  stiffness: 200,
                }}
                style={{
                  position: 'absolute',
                  left: `${landmark.position.x}%`,
                  top: `${landmark.position.y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
                onMouseEnter={() => setHoveredLandmark(landmark.id)}
                onMouseLeave={() => setHoveredLandmark(null)}
              >
                <Link href={landmark.slug} className="group relative block">
                  {/* 光晕效果 */}
                  <motion.div
                    className={`absolute inset-0 -z-10 rounded-full bg-${color}-500/20 blur-2xl`}
                    animate={{
                      scale: isHovered ? 2 : 1,
                      opacity: isHovered ? 0.6 : 0.3,
                    }}
                    transition={{ duration: 0.3 }}
                    style={{ width: '120px', height: '120px', left: '-35px', top: '-35px' }}
                  />

                  {/* 地标图标 */}
                  <motion.div
                    className={`relative flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-${color}-400/60 bg-slate-950/90 text-3xl shadow-lg shadow-${color}-500/30 backdrop-blur-sm transition-all group-hover:border-${color}-400 group-hover:shadow-${color}-500/60 sm:h-20 sm:w-20 sm:text-4xl`}
                    animate={{
                      y: isHovered ? -8 : 0,
                      scale: isHovered ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
                  >
                    {landmark.icon}

                    {/* 脉冲动画 */}
                    <motion.div
                      className={`absolute inset-0 rounded-2xl border-2 border-${color}-400`}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                  </motion.div>

                  {/* 地标信息卡片 */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                      opacity: isHovered ? 1 : 0,
                      y: isHovered ? 0 : 10,
                      pointerEvents: isHovered ? 'auto' : 'none',
                    }}
                    transition={{ duration: 0.2 }}
                    className={`absolute ${tooltipPositionClass} w-48 rounded-2xl border border-slate-700 bg-slate-950/95 p-3 shadow-xl backdrop-blur-sm`}
                  >
                    <div className={`text-xs font-semibold uppercase tracking-wide text-${color}-300`}>
                      {landmark.chineseName}
                    </div>
                    <div className="mt-1 text-sm font-semibold text-slate-50">
                      {landmark.label}
                    </div>
                    <div className="mt-1 text-xs text-slate-300">
                      {landmark.description}
                    </div>
                    <div className={`mt-2 inline-flex items-center gap-1 text-xs font-medium text-${color}-300`}>
                      {uiText.enter}
                      <span aria-hidden>→</span>
                    </div>
                  </motion.div>

                  {/* 地标名称（始终显示） */}
                  <div className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap text-center">
                    <div className="text-xs font-medium text-slate-300 sm:text-sm">
                      {landmark.chineseName}
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}

          {/* 连接线（可选） */}
          <svg className="absolute inset-0 h-full w-full opacity-20" style={{ pointerEvents: 'none' }}>
            <defs>
              <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgb(52, 211, 153)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="rgb(52, 211, 153)" stopOpacity="0" />
              </linearGradient>
            </defs>
            {/* 新手村 -> 藏宝阁 */}
            <path
              d={`M ${localizedLandmarks[0].position.x}% ${localizedLandmarks[0].position.y}% Q ${(localizedLandmarks[0].position.x + localizedLandmarks[3].position.x) / 2}% ${localizedLandmarks[0].position.y - 10}% ${localizedLandmarks[3].position.x}% ${localizedLandmarks[3].position.y}%`}
              stroke="url(#pathGradient)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="5,5"
            />
            {/* 藏宝阁 -> 华山论剑 */}
            <path
              d={`M ${localizedLandmarks[3].position.x}% ${localizedLandmarks[3].position.y}% Q ${(localizedLandmarks[3].position.x + localizedLandmarks[1].position.x) / 2}% ${(localizedLandmarks[3].position.y + localizedLandmarks[1].position.y) / 2}% ${localizedLandmarks[1].position.x}% ${localizedLandmarks[1].position.y}%`}
              stroke="url(#pathGradient)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="5,5"
            />
          </svg>
        </div>
      </div>

      {/* 底部快速链接 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="relative z-10 mt-8 flex flex-wrap justify-center gap-3 text-sm"
      >
        {quickLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`inline-flex items-center justify-center rounded-full border border-slate-500/60 bg-slate-950/60 px-5 py-2.5 text-slate-100 transition hover:border-${link.color}-400/80 hover:text-${link.color}-200`}
          >
            {link.label}
          </Link>
        ))}
      </motion.div>
    </div>
  );
}
