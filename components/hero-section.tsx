'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Code, Zap } from 'lucide-react';
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

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const y = contactSection.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const floatingIcons = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.2 }
    }
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-center items-center text-center px-4 pt-16 overflow-hidden z-10">
      <PatternBackground />

      {/* Floating background icons */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        variants={container}
        initial="hidden"
        animate="show"
        aria-hidden="true"
      >
        <motion.div
          variants={floatingIcons}
          whileHover="hover"
          className="absolute top-20 left-10 text-muted-foreground/20"
        >
          <Code className="w-8 h-8" aria-hidden="true" />
        </motion.div>
        <motion.div
          variants={floatingIcons}
          whileHover="hover"
          className="absolute top-32 right-16 text-muted-foreground/20"
        >
          <Zap className="w-6 h-6" aria-hidden="true" />
        </motion.div>
        <motion.div
          variants={floatingIcons}
          whileHover="hover"
          className="absolute bottom-32 left-20 text-muted-foreground/20"
        >
          <Sparkles className="w-7 h-7" aria-hidden="true" />
        </motion.div>
        <motion.div
          variants={floatingIcons}
          whileHover="hover"
          className="absolute bottom-40 right-10 text-muted-foreground/20"
        >
          <Code className="w-5 h-5" aria-hidden="true" />
        </motion.div>
      </motion.div>

      <motion.div
        className="space-y-8 relative z-10 max-w-4xl mx-auto"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item} className="flex justify-center">
          <Logo size="large" />
        </motion.div>

        <motion.div variants={item} className="space-y-4">
          <motion.h1
            className="text-5xl md:text-7xl font-bold tracking-tight leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
              Souca Thomas
            </span>
          </motion.h1>

          <motion.div
            className="flex items-center justify-center gap-2 text-muted-foreground"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" aria-hidden="true" />
            <span className="text-sm font-medium">Full-Stack Developer</span>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" aria-hidden="true" />
          </motion.div>
        </motion.div>

        <motion.p
          variants={item}
          className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
        >
          I&apos;m a Full-Stack Developer and Founding Engineer from <span className="text-foreground font-semibold">Romania</span>,
          building innovative web and mobile applications with AI integration.
        </motion.p>

        <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={scrollToAbout}
            size="lg"
            className="rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            aria-label="Learn more about Souca Thomas and view portfolio"
          >
            Learn More <ArrowDown className="ml-2 h-5 w-5" aria-hidden="true" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-8 py-6 text-lg font-semibold border-2 hover:bg-muted/50 transition-all duration-300 hover:scale-105"
            onClick={scrollToContact}
            aria-label="Get in touch with Souca Thomas for opportunities"
          >
            Get In Touch
          </Button>
        </motion.div>

        <motion.div
          variants={item}
          className="flex items-center justify-center gap-6 text-sm text-muted-foreground pt-4"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" aria-hidden="true" />
            <span>Available for opportunities</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" aria-hidden="true" />
            <span>Open to remote work</span>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-12 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        >
          <Button
            variant="outline"
            className="rounded-full size-12 p-2 border-2 hover:bg-muted/50 transition-all duration-300 hover:scale-110"
            onClick={scrollToAbout}
            aria-label="Scroll down to learn more"
          >
            <ArrowDown className="h-6 w-6 text-muted-foreground" aria-hidden="true" />
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
