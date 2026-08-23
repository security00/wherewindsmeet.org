'use client';

import { usePathname } from 'next/navigation';
import ParallaxBackground from './ParallaxBackground';
import MouseGlowEffect from './MouseGlowEffect';
import { getBackgroundForRoute } from '@/lib/background-system';

export default function BackgroundWrapper() {
  const pathname = usePathname();
  const background = getBackgroundForRoute(pathname);
  const normalizedPath = pathname.replace(/\/$/, "") || "/";
  const isLocaleHome = normalizedPath === "/" || normalizedPath === "/vn" || normalizedPath === "/de";

  return (
    <>
      <ParallaxBackground
        background={background}
        opacity={0.8}
        enableVideo={isLocaleHome}
      />
      <MouseGlowEffect color="emerald" intensity={0.22} size={420} />
    </>
  );
}
