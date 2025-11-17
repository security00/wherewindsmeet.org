'use client';

import { usePathname } from 'next/navigation';
import ParallaxBackground from './ParallaxBackground';
import MouseGlowEffect from './MouseGlowEffect';
import { getBackgroundForRoute } from '@/lib/background-system';

export default function BackgroundWrapper() {
  const pathname = usePathname();
  const background = getBackgroundForRoute(pathname);

  return (
    <>
      <ParallaxBackground
        background={background}
        opacity={0.65}
        parallaxSpeed={0.5}
        enableMouseParallax={true}
      />
      <MouseGlowEffect color="cyan" intensity={0.25} size={400} />
    </>
  );
}
