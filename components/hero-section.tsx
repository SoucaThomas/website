'use client';

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

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-center items-center text-center px-4 pt-16 overflow-hidden z-10">
      {/* Background Pattern */}
      <PatternBackground variant="subtle" />

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-8">
          <Logo size="large" />
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
          Souca Thomas
        </h1>

        {/* Subtitle */}
        <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-muted-foreground mb-8">
          Full-Stack Developer & Founding Engineer
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          Building modern web and mobile applications with React, React Native, and AI-powered
          solutions. Passionate about creating scalable products that make a real impact.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button
            onClick={scrollToAbout}
            size="lg"
            className="rounded-full px-8 py-6 text-lg font-semibold hover:scale-105 transition-transform duration-200"
          >
            Learn More
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
          <Button
            onClick={scrollToContact}
            variant="outline"
            size="lg"
            className="rounded-full px-8 py-6 text-lg font-semibold hover:scale-105 transition-transform duration-200"
          >
            Get In Touch
          </Button>
        </div>

        {/* Floating Icons */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-16 h-16 text-primary/20 hover:text-primary/40 transition-colors duration-300">
            <Code className="w-full h-full" />
          </div>
          <div className="absolute top-1/3 right-1/4 w-12 h-12 text-primary/20 hover:text-primary/40 transition-colors duration-300">
            <Sparkles className="w-full h-full" />
          </div>
          <div className="absolute bottom-1/3 left-1/3 w-14 h-14 text-primary/20 hover:text-primary/40 transition-colors duration-300">
            <Zap className="w-full h-full" />
          </div>
          <div className="absolute bottom-1/4 right-1/3 w-10 h-10 text-primary/20 hover:text-primary/40 transition-colors duration-300">
            <Code className="w-full h-full" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </div>
  );
}
