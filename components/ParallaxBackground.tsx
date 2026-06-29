'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useMemo } from "react";
import type { BackgroundInfo } from '@/lib/background-system';
import { resolveCdnAssetSrc } from "@/lib/image-utils";

interface ParallaxBackgroundProps {
  background: BackgroundInfo;
  opacity?: number;
  parallaxSpeed?: number;
  enableMouseParallax?: boolean;
}

const immersiveVideoSources = {
  tranquil: "https://yysls-build-na.fp.ps.easebar.com/file/68f9e743aa64b1cb56a24497Kikt7VqB03",
  dramatic: "https://yysls-build-na.fp.ps.easebar.com/file/699eae257094faaf02815965yIYoBtIh03",
};

function getImmersiveVideoSource(background: BackgroundInfo) {
  if (background.mood === "intense" || background.category === "battlefield") {
    return immersiveVideoSources.dramatic;
  }

  return immersiveVideoSources.tranquil;
}

export default function ParallaxBackground({
  background,
  opacity = 0.9,
  parallaxSpeed = 0.5,
}: ParallaxBackgroundProps) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 120 * parallaxSpeed]);
  const resolved = useMemo(() => resolveCdnAssetSrc(background.path), [background.path]);
  const alt = `Where Winds Meet background art - ${background.description}`;
  const videoSource = useMemo(() => getImmersiveVideoSource(background), [background]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <motion.img
        src={resolved.src}
        {...(resolved.fallbackSrc ? { "data-fallback-src": resolved.fallbackSrc } : {})}
        alt={alt}
        aria-hidden="true"
        draggable={false}
        className="absolute inset-x-0 -inset-y-1/2 h-[200%] w-full object-cover"
        style={{
          y,
          opacity: Math.min(opacity, 0.22),
        }}
      />

      <motion.video
        key={videoSource}
        aria-hidden="true"
        className="immersive-video-background absolute inset-x-0 -inset-y-1/2 h-[200%] w-full object-cover"
        style={{
          y,
          opacity: Math.min(opacity, 0.82),
        }}
        poster={resolved.src}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src={videoSource} type="video/mp4" media="(prefers-reduced-motion: no-preference)" />
      </motion.video>

      <div
        className="absolute inset-0 bg-gradient-to-r from-slate-950/25 via-transparent to-slate-950/10"
        style={{ pointerEvents: 'none' }}
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-slate-950/18 via-transparent to-slate-950/30"
        style={{ pointerEvents: 'none' }}
      />

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
