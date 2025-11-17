'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import clsx from 'clsx';

interface ScrollContainerProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'elegant' | 'simple';
}

export default function ScrollContainer({
  children,
  className = '',
  variant = 'default',
}: ScrollContainerProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={clsx(
        'relative overflow-hidden rounded-3xl border bg-slate-950/80 p-6 shadow-lg',
        {
          'border-slate-800': variant === 'default',
          'border-amber-900/40 bg-gradient-to-br from-amber-950/20 via-slate-950/80 to-slate-950/80':
            variant === 'elegant',
          'border-slate-700': variant === 'simple',
        },
        className
      )}
    >
      {/* 卷轴顶部装饰 */}
      {variant === 'elegant' && (
        <>
          <div className="absolute left-0 right-0 top-0 h-8 bg-gradient-to-b from-amber-900/20 to-transparent" />
          <svg
            className="absolute left-1/2 top-0 -translate-x-1/2"
            width="120"
            height="12"
            viewBox="0 0 120 12"
            fill="none"
          >
            <rect x="0" y="0" width="120" height="4" fill="#78350f" opacity="0.3" rx="2" />
            <rect x="10" y="2" width="100" height="8" fill="#451a03" opacity="0.2" rx="1" />
            <circle cx="15" cy="6" r="2" fill="#92400e" opacity="0.4" />
            <circle cx="105" cy="6" r="2" fill="#92400e" opacity="0.4" />
          </svg>

          {/* 卷轴底部装饰 */}
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-amber-900/20 to-transparent" />
          <svg
            className="absolute bottom-0 left-1/2 -translate-x-1/2"
            width="120"
            height="12"
            viewBox="0 0 120 12"
            fill="none"
          >
            <rect x="0" y="8" width="120" height="4" fill="#78350f" opacity="0.3" rx="2" />
            <rect x="10" y="2" width="100" height="8" fill="#451a03" opacity="0.2" rx="1" />
            <circle cx="15" cy="6" r="2" fill="#92400e" opacity="0.4" />
            <circle cx="105" cy="6" r="2" fill="#92400e" opacity="0.4" />
          </svg>
        </>
      )}

      {/* 竹简纹理背景 */}
      {variant === 'elegant' && (
        <div
          className="pointer-events-none absolute inset-0 opacity-5"
          style={{
            backgroundImage: `repeating-linear-gradient(
              90deg,
              transparent,
              transparent 10px,
              rgba(245, 158, 11, 0.1) 10px,
              rgba(245, 158, 11, 0.1) 11px
            )`,
          }}
        />
      )}

      {/* 内容区域 */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
