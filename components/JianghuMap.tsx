'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

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

const categoryColors = {
  beginner: 'emerald',
  combat: 'red',
  rewards: 'amber',
  knowledge: 'cyan',
};

export default function JianghuMap() {
  const [hoveredLandmark, setHoveredLandmark] = useState<string | null>(null);

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
          Jianghu World · Guide Map
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-balance text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl"
        >
          Choose Your Path
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-2 text-sm text-slate-300 sm:text-base"
        >
          Select a landmark to begin your journey through Where Winds Meet
        </motion.p>
      </div>

      {/* 地图区域 */}
      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="relative aspect-[16/10] w-full">
          {/* 地标点 */}
          {landmarks.map((landmark, index) => {
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
                      Enter
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
              d={`M ${landmarks[0].position.x}% ${landmarks[0].position.y}% Q ${(landmarks[0].position.x + landmarks[3].position.x) / 2}% ${landmarks[0].position.y - 10}% ${landmarks[3].position.x}% ${landmarks[3].position.y}%`}
              stroke="url(#pathGradient)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="5,5"
            />
            {/* 藏宝阁 -> 华山论剑 */}
            <path
              d={`M ${landmarks[3].position.x}% ${landmarks[3].position.y}% Q ${(landmarks[3].position.x + landmarks[1].position.x) / 2}% ${(landmarks[3].position.y + landmarks[1].position.y) / 2}% ${landmarks[1].position.x}% ${landmarks[1].position.y}%`}
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
        <Link
          href="/guides"
          className="inline-flex items-center justify-center rounded-full border border-slate-500/60 bg-slate-950/60 px-5 py-2.5 text-slate-100 transition hover:border-emerald-400/80 hover:text-emerald-200"
        >
          View All Guides
        </Link>
        <Link
          href="/news"
          className="inline-flex items-center justify-center rounded-full border border-slate-500/60 bg-slate-950/60 px-5 py-2.5 text-slate-100 transition hover:border-cyan-400/80 hover:text-cyan-200"
        >
          Latest News
        </Link>
        <Link
          href="/videos"
          className="inline-flex items-center justify-center rounded-full border border-slate-500/60 bg-slate-950/60 px-5 py-2.5 text-slate-100 transition hover:border-purple-400/80 hover:text-purple-200"
        >
          Watch Videos
        </Link>
      </motion.div>
    </div>
  );
}
