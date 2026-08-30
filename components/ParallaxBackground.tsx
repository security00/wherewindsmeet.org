import Image from "next/image";
import type { BackgroundInfo } from '@/lib/background-system';
import { resolveCdnAssetSrc } from "@/lib/image-utils";

interface ParallaxBackgroundProps {
  background: BackgroundInfo;
  opacity?: number;
}

export default function ParallaxBackground({
  background,
  opacity = 0.9,
}: ParallaxBackgroundProps) {
  const resolved = resolveCdnAssetSrc(background.path);
  const alt = `Where Winds Meet background art - ${background.description}`;

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <Image
        src={resolved.src}
        {...(resolved.fallbackSrc ? { "data-fallback-src": resolved.fallbackSrc } : {})}
        alt={alt}
        aria-hidden="true"
        fill
        sizes="100vw"
        unoptimized
        className="object-cover"
        fetchPriority="low"
        style={{
          opacity: Math.min(opacity, 0.22),
        }}
      />

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
