'use client';

import { motion } from 'framer-motion';
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
    <motion.div
      className={cn(
        'relative flex items-center justify-center rounded-md bg-primary text-primary-foreground font-bold',
        sizes[size]
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
        ST
      </motion.span>
    </motion.div>
  );
}
