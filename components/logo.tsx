'use client';

import { cn } from '@/lib/utils';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
}

export function Logo({ size = 'medium' }: LogoProps) {
  const sizes = {
    small: 'h-6 w-6',
    medium: 'h-8 w-8',
    large: 'h-16 w-16',
  };

  return (
    <div
      className={cn('relative flex items-center justify-center rounded-md font-bold', sizes[size])}
    >
      <img src="/memoji.png" alt="Logo" className="h-full w-full object-contain" />
    </div>
  );
}
