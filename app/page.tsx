'use client';

import { useEffect, useRef, useState } from 'react';
import { Navbar } from '@/components/navbar';
import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { ProjectsSection } from '@/components/projects-section';
import { ExperienceSection } from '@/components/experience-section';
import { TechnologiesSection } from '@/components/technologies-section';
import { ContactSection } from '@/components/contact-section';
import { ResumeSection } from '@/components/resume-section';
import { Footer } from '@/components/footer';
import { PatternBackground } from '@/components/pattern-background';
import { ScrollProgressBar } from '@/components/scroll-progress-bar';

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const technologiesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const resumeRef = useRef<HTMLDivElement>(null);

  const sections = [
    { id: 'hero', ref: heroRef, label: 'Home' },
    { id: 'about', ref: aboutRef, label: 'About' },
    { id: 'projects', ref: projectsRef, label: 'Projects' },
    { id: 'experience', ref: experienceRef, label: 'Experience' },
    { id: 'technologies', ref: technologiesRef, label: 'Technologies' },
    { id: 'contact', ref: contactRef, label: 'Contact' },
    { id: 'resume', ref: resumeRef, label: 'Resume' },
  ];

  const scrollToSection = (id: string) => {
    const section = sections.find((s) => s.id === id);
    if (section && section.ref.current) {
      const yOffset = -80; // Navbar height offset
      const y = section.ref.current.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Track active section for navbar highlighting
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Add offset for better UX
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Special case for the last section (resume)
      // If we're near the bottom of the page, activate the last section
      if (window.innerHeight + window.scrollY >= documentHeight - 100) {
        setActiveSection('resume');
        return;
      }

      // Find the current section
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.ref.current) {
          const offsetTop = section.ref.current.offsetTop;
          if (scrollPosition >= offsetTop - 100) {
            // Reduced threshold for better detection
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <ScrollProgressBar />
      <Navbar sections={sections} activeSection={activeSection} scrollToSection={scrollToSection} />
      <main>
        <div ref={heroRef} id="hero">
          <HeroSection />
        </div>
        <div ref={aboutRef} id="about" className="relative">
          <PatternBackground variant="subtle" />
          <AboutSection />
        </div>
        <div ref={projectsRef} id="projects">
          <ProjectsSection />
        </div>
        <div ref={experienceRef} id="experience" className="relative">
          <PatternBackground variant="dots" />
          <ExperienceSection />
        </div>
        <div ref={technologiesRef} id="technologies">
          <TechnologiesSection />
        </div>
        <div ref={contactRef} id="contact" className="relative">
          <PatternBackground variant="subtle" />
          <ContactSection />
        </div>
        <div ref={resumeRef} id="resume">
          <ResumeSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
