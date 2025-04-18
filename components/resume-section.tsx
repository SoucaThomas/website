'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Section } from '@/components/section';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileDown } from 'lucide-react';
import Link from 'next/link';
import { PatternBackground } from '@/components/pattern-background';

export function ResumeSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <Section className="pb-32">
      {/* Added extra padding to ensure scrollability */}
      <div className="relative">
        <h2 className="section-title relative z-10">Resume</h2>
        <p className="section-subtitle mx-auto text-center relative z-10">
          Download my resume to learn more about my experience and skills
        </p>

        <div className="flex justify-center mt-12">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <Card className="max-w-md mx-auto">
              <CardHeader>
                <CardTitle>My Resume</CardTitle>
                <CardDescription>
                  Get a comprehensive overview of my professional experience, skills, and education.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <p className="text-center mb-6 text-muted-foreground">
                  Click the button below to download my resume in PDF format.
                </p>
                <Button asChild size="lg">
                  <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    <FileDown className="mr-2 h-5 w-5" /> Download Resume
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
