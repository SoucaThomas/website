'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  sections: { id: string; label: string }[];
  activeSection: string;
  scrollToSection: (id: string) => void;
}

export function Navbar({ sections, activeSection, scrollToSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled ? 'bg-background/80 backdrop-blur-md border-b py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Logo />
          <span className="font-semibold">Souca Thomas</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={cn(
                'text-sm font-medium transition-colors hover:text-foreground/80 relative',
                activeSection === section.id ? 'text-foreground' : 'text-muted-foreground'
              )}
            >
              {section.label}
              {activeSection === section.id && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-foreground"
                  layoutId="activeSection"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="md:hidden"
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isMobileMenuOpen ? 'auto' : 0,
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        {isMobileMenuOpen && (
          <div className="container py-4 bg-background/95 backdrop-blur-md border-b">
            <nav className="flex flex-col gap-4">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => {
                    scrollToSection(section.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={cn(
                    'text-left py-2 text-lg font-medium transition-colors hover:text-foreground/80',
                    activeSection === section.id ? 'text-foreground' : 'text-muted-foreground'
                  )}
                >
                  {section.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </motion.div>
    </header>
  );
}
