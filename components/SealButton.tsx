'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface SealButtonProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'seal';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function SealButton({
  href,
  onClick,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
}: SealButtonProps) {
  const baseClasses = clsx(
    'inline-flex items-center justify-center font-medium transition-all duration-300',
    'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-950',
    {
      // Sizes
      'px-4 py-2 text-sm': size === 'sm',
      'px-5 py-2.5 text-sm': size === 'md',
      'px-6 py-3 text-base': size === 'lg',

      // Variants
      'rounded-full bg-emerald-400 text-slate-950 shadow-md shadow-emerald-500/50 hover:bg-emerald-300 focus:ring-emerald-400':
        variant === 'primary',
      'rounded-full border border-slate-500/60 bg-slate-950/60 text-slate-100 hover:border-emerald-400/80 hover:text-emerald-200 focus:ring-emerald-400':
        variant === 'secondary',
      'relative rounded-full border-2 border-red-600/80 bg-gradient-to-br from-red-950/40 via-red-900/30 to-red-950/40 text-amber-100 shadow-lg shadow-red-900/40 hover:border-red-500 hover:shadow-red-800/60 focus:ring-red-500':
        variant === 'seal',
    },
    className
  );

  const content = (
    <>
      {variant === 'seal' && (
        <>
          {/* 印章纹理 */}
          <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-br from-red-600/20 to-transparent opacity-50" />
          {/* 印章边框装饰 */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
          >
            <circle
              cx="50"
              cy="50"
              r="48"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.3"
              strokeDasharray="4 4"
            />
          </svg>
        </>
      )}
      <span className="relative z-10">{children}</span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="contents"
        >
          {content}
        </motion.div>
      </Link>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={baseClasses}
    >
      {content}
    </motion.button>
  );
}
