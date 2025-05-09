'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';
import { PatternBackground } from '@/components/pattern-background';

export function HeroSection() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      const y = aboutSection.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-center items-center text-center px-4 pt-16 overflow-hidden z-10">
      <PatternBackground />

      <motion.div
        className="space-y-8 relative z-10"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item} className="flex justify-center">
          <Logo size="large" />
        </motion.div>

        <motion.h1 variants={item} className="text-4xl md:text-6xl font-bold tracking-tighter">
          Souca Thomas
        </motion.h1>

        <motion.p
          variants={item}
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto"
        >
          I&apos;m a Full-Stack Web Developer from <span className="text-foreground">Romania</span>,
          focused on creating user-friendly and efficient web applications.
        </motion.p>

        <motion.div variants={item}>
          <Button onClick={scrollToAbout} variant="outline" size="lg" className="rounded-full mt-8">
            Learn More <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-12 z-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
        >
          <Button variant="outline" className="rounded-full size-10 p-2" onClick={scrollToAbout}>
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
