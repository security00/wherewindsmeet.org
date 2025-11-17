'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const colorMap = {
    cyan: 'rgba(103, 232, 249, ',
    purple: 'rgba(167, 139, 250, ',
    emerald: 'rgba(52, 211, 153, ',
  };

  const glowColor = colorMap[color];

  return (
    <motion.div
      className="pointer-events-none fixed z-50 hidden lg:block"
      style={{
        left: mousePosition.x - size / 2,
        top: mousePosition.y - size / 2,
        width: size,
        height: size,
      }}
      animate={{
        opacity: isVisible ? intensity : 0,
      }}
      transition={{
        duration: 0.2,
        ease: 'easeOut',
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
