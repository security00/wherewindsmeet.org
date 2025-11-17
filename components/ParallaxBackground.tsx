'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import type { BackgroundInfo } from '@/lib/background-system';

interface ParallaxBackgroundProps {
  background: BackgroundInfo;
  opacity?: number;
  parallaxSpeed?: number;
  enableMouseParallax?: boolean;
}

export default function ParallaxBackground({
  background,
  opacity = 0.9,
  parallaxSpeed = 0.5,
}: ParallaxBackgroundProps) {
  const { scrollY } = useScroll();

  // 控制背景整体轻微上下移动，幅度限制在一屏以内，避免露出纯色底。
  const y = useTransform(scrollY, [0, 1000], [0, 120 * parallaxSpeed]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      {/* 背景图层：高度拉伸到视口的 2 倍，用单张图做视差位移且不平铺，避免出现分割线 */}
      <motion.div
        className="absolute inset-x-0 -inset-y-1/2"
        style={{
          y,
          backgroundImage: `url(${background.path})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity,
        }}
      />

      {/* 渐变遮罩层 - 减弱遮盖，只在边缘添加渐变 */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-slate-950/40 via-transparent to-slate-950/20"
        style={{ pointerEvents: 'none' }}
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-transparent to-slate-950/45"
        style={{ pointerEvents: 'none' }}
      />

      {/* 氛围光效层 - 根据mood添加不同颜色的光晕 */}
      {background.mood === 'intense' && (
        <div className="absolute inset-0 bg-gradient-radial from-red-500/15 via-transparent to-transparent" />
      )}
      {background.mood === 'mysterious' && (
        <div className="absolute inset-0 bg-gradient-radial from-purple-500/15 via-transparent to-transparent" />
      )}
      {background.mood === 'majestic' && (
        <div className="absolute inset-0 bg-gradient-radial from-amber-500/15 via-transparent to-transparent" />
      )}
    </div>
  );
}
