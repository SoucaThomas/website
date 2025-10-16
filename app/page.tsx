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
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision';

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
      <Navbar sections={sections} activeSection={activeSection} scrollToSection={scrollToSection} />

      <main className="relative" role="main">
        {/* Hero Section with enhanced background */}
        <section
          ref={heroRef}
          id="hero"
          className="relative"
          aria-label="Hero section - Introduction to Souca Thomas"
        >
          <BackgroundBeamsWithCollision className="relative min-h-screen flex w-full flex-col justify-center items-center text-center pt-16 overflow-hidden bg-transparent">
            <HeroSection />
          </BackgroundBeamsWithCollision>
        </section>

        {/* About Section with subtle pattern */}
        <section
          ref={aboutRef}
          id="about"
          className="relative"
          aria-label="About Souca Thomas - Professional background and skills"
        >
          <PatternBackground variant="subtle" />
          <AboutSection />
        </section>

        {/* Projects Section - clean background */}
        <section
          ref={projectsRef}
          id="projects"
          className="relative"
          aria-label="Projects - Showcase of work and open-source contributions"
        >
          <ProjectsSection />
        </section>

        {/* Experience Section with dots pattern */}
        <section
          ref={experienceRef}
          id="experience"
          className="relative"
          aria-label="Professional Experience - Career journey and achievements"
        >
          <PatternBackground variant="dots" />
          <ExperienceSection />
        </section>

        {/* Technologies Section with subtle pattern */}
        <section
          ref={technologiesRef}
          id="technologies"
          className="relative"
          aria-label="Technologies and Skills - Tools and frameworks expertise"
        >
          <PatternBackground variant="subtle" />
          <TechnologiesSection />
        </section>

        {/* Contact Section with clean background */}
        <section
          ref={contactRef}
          id="contact"
          className="relative"
          aria-label="Contact - Get in touch for opportunities and collaboration"
        >
          <ContactSection />
        </section>

        {/* Resume Section with dots pattern */}
        <section
          ref={resumeRef}
          id="resume"
          className="relative"
          aria-label="Resume - Download professional experience and qualifications"
        >
          <PatternBackground variant="dots" />
          <ResumeSection />
        </section>
      </main>

      <Footer />
    </div>
  );
}
