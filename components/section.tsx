'use client';

import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  withPattern?: boolean;
}

export function Section({ children, className, id, withPattern = false }: SectionProps) {
  return (
    <section id={id} className={cn('container section relative z-10', className)}>
      {children}
    </section>
  );
}
