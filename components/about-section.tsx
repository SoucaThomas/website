'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Section } from '@/components/section';

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <Section>
      <div className="max-w-3xl mx-auto">
        <h2 className="section-title">About Me</h2>
        <div ref={ref} className="space-y-6">
          <motion.p
            className="text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            I'm Souca Thomas, a full-stack developer with expertise in building modern, responsive
            web applications. I focus on clean architecture, seamless user experiences, and creating
            solutions that are both functional and visually appealing.
          </motion.p>
        </div>
      </div>
    </Section>
  );
}
