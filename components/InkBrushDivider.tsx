'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface InkBrushDividerProps {
  className?: string;
  color?: 'emerald' | 'red' | 'amber' | 'slate';
}

export default function InkBrushDivider({
  className = '',
  color = 'emerald'
}: InkBrushDividerProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const colorMap = {
    emerald: '#34d399',
    red: '#dc2626',
    amber: '#f59e0b',
    slate: '#64748b',
  };

  const strokeColor = colorMap[color];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scaleX: 0 }}
      animate={inView ? { opacity: 1, scaleX: 1 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`my-6 flex justify-center ${className}`}
    >
      <svg
        width="200"
        height="20"
        viewBox="0 0 200 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-60"
      >
        {/* 水墨笔触路径 */}
        <path
          d="M 5 10 Q 30 5, 50 10 T 100 10 Q 130 12, 150 10 T 195 10"
          stroke={strokeColor}
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          opacity="0.8"
        />
        {/* 笔触飞白效果 */}
        <path
          d="M 20 8 Q 40 6, 60 9"
          stroke={strokeColor}
          strokeWidth="1"
          strokeLinecap="round"
          fill="none"
          opacity="0.4"
        />
        <path
          d="M 110 11 Q 130 9, 150 11"
          stroke={strokeColor}
          strokeWidth="1"
          strokeLinecap="round"
          fill="none"
          opacity="0.4"
        />
        {/* 墨点装饰 */}
        <circle cx="10" cy="10" r="1.5" fill={strokeColor} opacity="0.6" />
        <circle cx="100" cy="10" r="2" fill={strokeColor} opacity="0.5" />
        <circle cx="190" cy="10" r="1.5" fill={strokeColor} opacity="0.6" />
      </svg>
    </motion.div>
  );
}
