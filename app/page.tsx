"use client";

import { useState, useEffect } from "react";
import { getProjects, getExperience, type Experience } from "@/lib/data";
import type { Project } from "@/lib/github";
import { ExternalLink, ArrowUp, Download, ArrowRight, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Blog", href: "/blog" },
];

const TECHNOLOGIES: Record<string, string[]> = {
  Frontend: ["Next.js", "React", "React Native", "TypeScript", "Tailwind", "Swift", "Flutter"],
  Backend: ["Node.js", "NestJS", "Prisma", "PostgreSQL", "MongoDB", "Convex"],
  Languages: ["TypeScript", "JavaScript", "C++", "C#", "C"],
  Infra: ["Docker", "AWS", "Git", "Linux", "CI/CD"],
};

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [experience, setExperience] = useState<Experience[]>([]);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [popupProject, setPopupProject] = useState<string | null>(null);

  useEffect(() => {
    setProjects(getProjects());
    setExperience(getExperience());
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
      const sections = ["projects", "experience"];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <div className="min-h-screen" style={{ fontFamily: "var(--font-body)" }}>
      {/* Nav — minimal, out of the way */}
      <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-[var(--color-bg)]/80">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6 lg:px-10">
          <a
            href="/"
            className="text-base font-bold tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            souca.dev
          </a>
          <div className="flex items-center gap-1">
            {NAV_ITEMS.map((item) =>
              item.href.startsWith("#") ? (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className={`px-3 py-1.5 text-[13px] font-medium rounded-full transition-all duration-200 ${
                    activeSection === item.href.replace("#", "")
                      ? "bg-[var(--color-text)] text-[var(--color-bg)]"
                      : "text-[var(--color-text-secondary)] hover:text-[var(--color-text)]"
                  }`}
                >
                  {item.label}
                </button>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-3 py-1.5 text-[13px] font-medium rounded-full text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors duration-200"
                >
                  {item.label}
                </a>
              )
            )}
            <a
              href="mailto:thomassouca@gmail.com"
              className="ml-2 px-4 py-1.5 text-[13px] font-semibold rounded-full text-[var(--color-bg)] transition-opacity duration-200 hover:opacity-90"
              style={{ backgroundColor: "var(--color-text)" }}
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* =============================================
          HERO — Full viewport, asymmetric two-column
          ============================================= */}
      <section className="min-h-screen grid lg:grid-cols-[1.4fr,1fr] items-end lg:items-center pt-14">
        {/* Left — name and intro */}
        <div className="px-6 lg:px-10 lg:pl-[max(2.5rem,calc((100vw-72rem)/2+2.5rem))] pb-16 lg:pb-0 pt-24 lg:pt-0">
          <p
            className="text-sm font-semibold tracking-wide mb-5"
            style={{ color: "var(--color-accent)" }}
          >
            Full-Stack Developer & Co-Founder
          </p>

          <h1
            className="text-[clamp(3.5rem,9vw,8rem)] font-extrabold leading-[0.85] tracking-tighter"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Souca
            <br />
            Thomas
          </h1>

          <p
            className="mt-8 text-base leading-relaxed max-w-md"
            style={{ color: "var(--color-text-secondary)" }}
          >
            I build products from zero to launch — marketplace apps, AI-powered tools,
            and consumer mobile experiences. Co-founder of TSC.
          </p>

          <div className="mt-10 flex items-center gap-5">
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); scrollToSection("#projects"); }}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-full text-[var(--color-bg)] transition-opacity duration-200 hover:opacity-90"
              style={{ backgroundColor: "var(--color-accent)" }}
            >
              See my work
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200 hover:text-[var(--color-accent)]"
              style={{ color: "var(--color-text-secondary)" }}
            >
              <Download className="h-3.5 w-3.5" />
              Resume
            </a>
          </div>
        </div>

        {/* Right — quick facts / stats panel */}
        <div
          className="hidden lg:flex flex-col justify-center h-full px-10 py-20"
          style={{ backgroundColor: "var(--color-bg-elevated)", borderLeft: "1px solid var(--color-border)" }}
        >
          <div className="space-y-10 max-w-sm">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--color-text-muted)" }}>
                Currently
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                Building a <span className="font-semibold text-[var(--color-text)]">UAV flight controller</span> — bare metal STM32 + FreeRTOS
              </p>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                Shipping <span className="font-semibold text-[var(--color-text)]">Krumb</span> — AI-powered recipe extraction
              </p>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                Co-founding <span className="font-semibold text-[var(--color-text)]">TSC Marketplace</span>
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--color-text-muted)" }}>
                Stack
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["React", "React Native", "Next.js", "TypeScript", "C/C++", "STM32", "Swift"].map((t) => (
                  <span
                    key={t}
                    className="text-xs font-medium px-2.5 py-1 rounded-md"
                    style={{ backgroundColor: "var(--color-bg)", border: "1px solid var(--color-border)", color: "var(--color-text-secondary)" }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--color-text-muted)" }}>
                Links
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/SoucaThomas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium underline underline-offset-4 decoration-[var(--color-border)] hover:decoration-[var(--color-accent)] transition-colors"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  GitHub
                </a>
                <a
                  href="mailto:thomas@souca.dev"
                  className="text-sm font-medium underline underline-offset-4 decoration-[var(--color-border)] hover:decoration-[var(--color-accent)] transition-colors"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =============================================
          PROJECTS — Offset grid, staggered cards
          ============================================= */}
      <section id="projects" className="py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          {/* Section header — offset to create tension */}
          <div className="max-w-3xl">
            <SectionLabel>Selected Work</SectionLabel>
            <h2
              className="mt-3 text-3xl font-bold tracking-tight md:text-[2.75rem] md:leading-[1.1]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Products I&apos;ve built
            </h2>
            <p className="mt-4 text-base max-w-lg" style={{ color: "var(--color-text-secondary)" }}>
              From AI recipe extraction to marketplace platforms — shipping production apps that serve real users.
            </p>
          </div>

          {/* Featured — alternating layout */}
          {featuredProjects.length > 0 && (
            <div className="mt-16 space-y-4">
              {featuredProjects.map((project, i) => (
                <FeaturedProjectCard
                  key={project.id}
                  project={project}
                  index={i}
                  onLiveClick={(name) => setPopupProject(name)}
                />
              ))}
            </div>
          )}

          {/* Other projects — compact horizontal list */}
          {otherProjects.length > 0 && (
            <div className="mt-20">
              <p className="text-xs font-semibold uppercase tracking-wider mb-5" style={{ color: "var(--color-text-muted)" }}>
                Other projects
              </p>
              <div
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px rounded-xl overflow-hidden"
                style={{ backgroundColor: "var(--color-border)" }}
              >
                {otherProjects.map((project) => (
                  <CompactProjectCard
                    key={project.id}
                    project={project}
                    onLiveClick={(name) => setPopupProject(name)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* =============================================
          EXPERIENCE — Timeline with offset columns
          ============================================= */}
      <section id="experience" className="py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-[1fr,2fr] gap-16 lg:gap-24">
            {/* Left — sticky section header */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              <SectionLabel>Experience</SectionLabel>
              <h2
                className="mt-3 text-3xl font-bold tracking-tight md:text-[2.75rem] md:leading-[1.1]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Where I&apos;ve
                <br />
                worked
              </h2>
              <p className="mt-4 text-sm" style={{ color: "var(--color-text-secondary)" }}>
                From founding my own company to shipping features at high-growth startups.
              </p>
            </div>

            {/* Right — experience entries */}
            <div className="space-y-0">
              {experience.map((exp, i) => (
                <ExperienceRow key={i} experience={exp} isLast={i === experience.length - 1} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =============================================
          TECHNOLOGIES — Full-bleed, compact
          ============================================= */}
      <section
        className="py-20"
        style={{ backgroundColor: "var(--color-bg-elevated)", borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)" }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {Object.entries(TECHNOLOGIES).map(([category, techs]) => (
              <div key={category}>
                <h3
                  className="text-[11px] font-semibold uppercase tracking-wider mb-4"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {category}
                </h3>
                <p className="text-sm leading-loose" style={{ color: "var(--color-text-secondary)" }}>
                  {techs.join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =============================================
          CONTACT — Wide, statement-style
          ============================================= */}
      <section className="py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-[2fr,1fr] gap-12 items-end">
            <div>
              <h2
                className="text-4xl font-bold tracking-tight md:text-[3.5rem] md:leading-[1.05]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Let&apos;s build
                <br />
                something together
              </h2>
              <p className="mt-5 text-base max-w-md" style={{ color: "var(--color-text-secondary)" }}>
                Always open to interesting projects and collaborations. Drop me a line.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="mailto:thomassouca@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-full text-[var(--color-bg)] transition-opacity duration-200 hover:opacity-90"
                  style={{ backgroundColor: "var(--color-accent)" }}
                >
                  thomassouca@gmail.com
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold rounded-full transition-all duration-200"
                  style={{ border: "1px solid var(--color-border-strong)", color: "var(--color-text-secondary)" }}
                >
                  <Download className="h-3.5 w-3.5" />
                  Resume
                </a>
              </div>
            </div>
            <div className="hidden lg:block text-right">
              <a
                href="https://github.com/SoucaThomas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium underline underline-offset-4 decoration-[var(--color-border)] hover:decoration-[var(--color-accent)] transition-colors"
                style={{ color: "var(--color-text-muted)" }}
              >
                github.com/SoucaThomas
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8" style={{ borderTop: "1px solid var(--color-border)" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between">
          <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
            {new Date().getFullYear()} Souca Thomas
          </p>
          <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
            Romania
          </p>
        </div>
      </footer>

      {/* Scroll to top */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full text-[var(--color-bg)] shadow-lg transition-opacity duration-200 hover:opacity-90"
          style={{ backgroundColor: "var(--color-text)" }}
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      )}

      {/* Demo unavailable popup */}
      {popupProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
          onClick={() => setPopupProject(null)}
        >
          <div
            className="relative mx-4 w-full max-w-sm rounded-2xl bg-[var(--color-bg)] p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPopupProject(null)}
              className="absolute top-4 right-4 text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
            <h3 className="text-lg font-bold" style={{ fontFamily: "var(--font-display)" }}>
              Demo Unavailable
            </h3>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
              The live demo for <span className="font-semibold text-[var(--color-text)]">{popupProject}</span> is currently down.
            </p>
            <button
              onClick={() => setPopupProject(null)}
              className="mt-6 w-full py-2.5 text-sm font-semibold rounded-full text-[var(--color-bg)] hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "var(--color-text)" }}
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* =========================================
   Sub-components
   ========================================= */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-xs font-semibold uppercase tracking-wider"
      style={{ color: "var(--color-accent)" }}
    >
      {children}
    </p>
  );
}

function FeaturedProjectCard({
  project,
  index,
  onLiveClick,
}: {
  project: Project;
  index: number;
  onLiveClick: (name: string) => void;
}) {
  return (
    <div
      className="group grid lg:grid-cols-[1fr,1.5fr] gap-6 rounded-xl p-6 lg:p-8 transition-all duration-300 hover:shadow-md"
      style={{
        backgroundColor: "var(--color-bg-elevated)",
        border: "1px solid var(--color-border)",
      }}
    >
      {/* Left — meta */}
      <div className="flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3">
            <h3
              className="text-xl font-bold lg:text-2xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {project.name}
            </h3>
            {project.status && (
              <span
                className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full"
                style={{ backgroundColor: "oklch(0.62 0.22 28 / 0.08)", color: "var(--color-accent)" }}
              >
                {project.status}
              </span>
            )}
          </div>
          {project.role && (
            <p className="mt-1.5 text-sm font-medium" style={{ color: "var(--color-text-muted)" }}>
              {project.role}
            </p>
          )}
        </div>

        {/* Links at bottom of left column */}
        <div className="mt-6 flex items-center gap-4">
          {project.html_url && (
            <a
              href={project.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-200 hover:text-[var(--color-accent)]"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Source <ExternalLink className="h-3 w-3" />
            </a>
          )}
          {project.homepage && (
            <button
              onClick={() => onLiveClick(project.name)}
              className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-200 hover:text-[var(--color-accent)]"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Live <ExternalLink className="h-3 w-3" />
            </button>
          )}
        </div>
      </div>

      {/* Right — description and details */}
      <div>
        {project.longDescription && (
          <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
            {project.longDescription}
          </p>
        )}

        {project.highlights && project.highlights.length > 0 && (
          <ul className="mt-4 space-y-1.5">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex gap-2 text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                <span className="mt-[0.45rem] block h-1 w-1 flex-shrink-0 rounded-full" style={{ backgroundColor: "var(--color-accent)" }} />
                {h}
              </li>
            ))}
          </ul>
        )}

        {project.topics.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.topics.map((topic) => (
              <span
                key={topic}
                className="text-[11px] font-medium px-2 py-0.5 rounded"
                style={{ backgroundColor: "var(--color-bg)", border: "1px solid var(--color-border)", color: "var(--color-text-muted)" }}
              >
                {topic}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function CompactProjectCard({
  project,
  onLiveClick,
}: {
  project: Project;
  onLiveClick: (name: string) => void;
}) {
  return (
    <div className="group p-5 transition-colors duration-200" style={{ backgroundColor: "var(--color-bg)" }}>
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="text-sm font-semibold truncate">{project.name}</h3>
          {project.description && (
            <p className="mt-1 text-xs truncate" style={{ color: "var(--color-text-muted)" }}>
              {project.description}
            </p>
          )}
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          {project.html_url && (
            <a
              href={project.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-medium transition-colors hover:text-[var(--color-accent)]"
              style={{ color: "var(--color-text-muted)" }}
            >
              Source
            </a>
          )}
          {project.homepage && (
            <button
              onClick={() => onLiveClick(project.name)}
              className="text-[11px] font-medium transition-colors hover:text-[var(--color-accent)]"
              style={{ color: "var(--color-text-muted)" }}
            >
              Live
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function ExperienceRow({
  experience,
  isLast,
}: {
  experience: Experience;
  isLast: boolean;
}) {
  return (
    <div
      className="grid md:grid-cols-[140px,1fr] gap-4 py-8"
      style={{ borderBottom: isLast ? "none" : "1px solid var(--color-border)" }}
    >
      {/* Period */}
      <div>
        <p className="text-xs font-medium" style={{ color: "var(--color-text-muted)" }}>
          {experience.period}
        </p>
      </div>

      {/* Content */}
      <div>
        <div className="flex flex-wrap items-baseline gap-2">
          <h3 className="text-base font-bold" style={{ fontFamily: "var(--font-display)" }}>
            {experience.title}
          </h3>
          <span className="text-sm font-medium" style={{ color: "var(--color-text-muted)" }}>
            {experience.company}
          </span>
        </div>

        <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
          {experience.description}
        </p>

        {experience.responsibilities.length > 0 && (
          <ul className="mt-3 space-y-1">
            {experience.responsibilities.map((r, i) => (
              <li key={i} className="flex gap-2 text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                <span className="mt-[0.45rem] block h-1 w-1 flex-shrink-0 rounded-full" style={{ backgroundColor: "var(--color-border-strong)" }} />
                {r}
              </li>
            ))}
          </ul>
        )}

        {experience.technologies.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-medium px-2 py-0.5 rounded"
                style={{ backgroundColor: "var(--color-bg-elevated)", color: "var(--color-text-muted)" }}
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
