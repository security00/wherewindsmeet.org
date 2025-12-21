'use client';

import { useEffect, useMemo, useRef } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';

interface MouseGlowEffectProps {
  color?: 'cyan' | 'purple' | 'emerald';
  intensity?: number;
  size?: number;
}

export default function MouseGlowEffect({
  color = 'cyan',
  intensity = 0.3,
  size = 400,
}: MouseGlowEffectProps) {
  const prefersReducedMotion = useReducedMotion();

  const translateX = useMotionValue(0);
  const translateY = useMotionValue(0);
  const opacityTarget = useMotionValue(0);
  const opacity = useSpring(opacityTarget, { stiffness: 260, damping: 30, mass: 0.6 });

  const rafIdRef = useRef<number | null>(null);
  const pendingRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      pendingRef.current = { x: e.clientX, y: e.clientY };
      opacityTarget.set(intensity);

      if (rafIdRef.current !== null) return;
      rafIdRef.current = window.requestAnimationFrame(() => {
        rafIdRef.current = null;
        const pending = pendingRef.current;
        if (!pending) return;
        translateX.set(pending.x - size / 2);
        translateY.set(pending.y - size / 2);
      });
    };

    const handleMouseLeave = () => {
      opacityTarget.set(0);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (rafIdRef.current !== null) {
        window.cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
    };
  }, [intensity, opacityTarget, prefersReducedMotion, size, translateX, translateY]);

  const glowColor = useMemo(() => {
    const colorMap = {
      cyan: 'rgba(103, 232, 249, ',
      purple: 'rgba(167, 139, 250, ',
      emerald: 'rgba(22, 163, 74, ',
    };
    return colorMap[color];
  }, [color]);

  if (prefersReducedMotion) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-50 hidden lg:block"
      style={{
        x: translateX,
        y: translateY,
        width: size,
        height: size,
        opacity,
      }}
    >
      <div
        className="h-full w-full rounded-full blur-3xl"
        style={{
          background: `radial-gradient(circle, ${glowColor}${intensity}) 0%, ${glowColor}0) 70%)`,
        }}
      />
    </motion.div>
  );
}
