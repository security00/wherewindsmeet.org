'use client';

interface CloudDecorationProps {
  position?: 'top' | 'bottom';
  side?: 'left' | 'right';
  className?: string;
}

export default function CloudDecoration({
  position = 'top',
  side = 'left',
  className = '',
}: CloudDecorationProps) {
  const positionClasses = {
    top: 'top-0',
    bottom: 'bottom-0',
  };

  const sideClasses = {
    left: 'left-0',
    right: 'right-0',
  };

  return (
    <div
      className={`pointer-events-none absolute ${positionClasses[position]} ${sideClasses[side]} z-0 opacity-20 ${className}`}
    >
      <svg
        width="200"
        height="100"
        viewBox="0 0 200 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="animate-drift"
      >
        {/* 祥云主体 */}
        <path
          d="M 20 60 Q 10 50, 20 40 Q 30 30, 45 35 Q 55 25, 70 30 Q 85 25, 95 35 Q 110 30, 120 40 Q 130 35, 140 45 Q 145 55, 135 65 Q 125 75, 110 70 Q 95 75, 80 70 Q 65 75, 50 70 Q 35 75, 20 60 Z"
          fill="currentColor"
          opacity="0.3"
        />
        {/* 祥云细节 */}
        <ellipse cx="40" cy="50" rx="15" ry="10" fill="currentColor" opacity="0.2" />
        <ellipse cx="70" cy="45" rx="18" ry="12" fill="currentColor" opacity="0.25" />
        <ellipse cx="100" cy="50" rx="16" ry="11" fill="currentColor" opacity="0.2" />
        <ellipse cx="120" cy="55" rx="14" ry="9" fill="currentColor" opacity="0.15" />

        {/* 云纹装饰 */}
        <path
          d="M 30 55 Q 35 50, 40 55"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          opacity="0.3"
        />
        <path
          d="M 60 50 Q 65 45, 70 50"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          opacity="0.3"
        />
        <path
          d="M 90 52 Q 95 47, 100 52"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          opacity="0.3"
        />
      </svg>
    </div>
  );
}
