'use client';

import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface PatternBackgroundProps {
  variant?: 'default' | 'subtle' | 'dots';
  className?: string;
}

export function PatternBackground({ variant = 'default', className }: PatternBackgroundProps) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === 'dark';

  if (variant === 'dots') {
    return (
      <div className="absolute inset-0 overflow-hidden opacity-50">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, ${
              isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.2)'
            } 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
          }}
        />
      </div>
    );
  }

  if (variant === 'subtle') {
    return (
      <div className="absolute inset-0 overflow-hidden opacity-50">
        <svg
          className="absolute h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="subtle-pattern"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(45)"
            >
              <rect width="100%" height="100%" fill="none" />
              <line
                x1="20"
                y1="0"
                x2="20"
                y2="40"
                stroke={isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.1)'}
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#subtle-pattern)" />
        </svg>
      </div>
    );
  }

  // Default pattern
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.5 }}
      transition={{ duration: 1 }}
      className="absolute inset-0 overflow-hidden"
    >
      <svg
        className="absolute h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern id="grid-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
            <rect width="60" height="60" fill="none" />
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke={isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.2)'}
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
      </svg>

      {/* Gradient overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-b from-transparent via-transparent ${
          isDark ? 'to-background' : 'to-gray-200'
        }`}
      />
    </motion.div>
  );
}
