"use client";

import { useState, useEffect } from "react";
import { getProjects, getExperience, type Experience } from "@/lib/data";
import type { Project } from "@/lib/github";
import { ExternalLink, ArrowUp, Download, Send, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Technologies", href: "#technologies" },
  { label: "Contact", href: "#contact" },
  { label: "Resume", href: "#resume" },
];

const SKILLS = [
  "Full-Stack Development",
  "React & React Native",
  "Next.js & NestJS",
  "TypeScript & JavaScript",
  "Node.js & Express",
  "TanStack & Prisma",
  "Mobile Development",
  "AI Integration",
  "API Development",
  "Swift & Flutter",
];

const TECHNOLOGIES: Record<string, string[]> = {
  Frontend: [
    "Next.js",
    "React",
    "React Native",
    "Angular",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Swift",
    "Flutter",
    "TanStack Start",
  ],
  Backend: [
    "Node.js",
    "NestJS",
    "Express",
    "Prisma",
    "MongoDB",
    "PostgreSQL",
    "Convex",
  ],
  "Programming Languages": [
    "TypeScript",
    "JavaScript",
    "C++",
    "C#",
    "C",
  ],
  "DevOps & Tools": [
    "Docker",
    "Git",
    "AWS",
    "Linux",
    "REST APIs",
    "WebSockets",
    "CI/CD",
  ],
};

const STATS = [
  { value: "2+", label: "Years Experience" },
  { value: "10+", label: "Projects" },
  { value: "20+", label: "Technologies" },
];

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [experience, setExperience] = useState<Experience[]>([]);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    setProjects(getProjects());
    setExperience(getExperience());
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);

      const sections = NAV_ITEMS.map((item) => item.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [popupProject, setPopupProject] = useState<string | null>(null);

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-40 border-b-2 border-black bg-white">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-end px-6">
          <div className="hidden md:flex items-center">
            {NAV_ITEMS.map((item, i) => (
              <div key={item.label} className="flex items-center">
                {i > 0 && (
                  <div className="mx-0 h-4 w-px bg-black" />
                )}
                <button
                  onClick={() => scrollToSection(item.href)}
                  className={`px-4 py-1 text-xs font-bold uppercase tracking-widest transition-colors duration-200 hover:bg-black hover:text-white rounded-none ${
                    activeSection === item.href.replace("#", "")
                      ? "bg-black text-white"
                      : "text-black"
                  }`}
                >
                  {item.label}
                </button>
              </div>
            ))}
          </div>

          {/* Mobile menu */}
          <div className="flex md:hidden items-center gap-2 overflow-x-auto">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`whitespace-nowrap px-2 py-1 text-[10px] font-bold uppercase tracking-wider transition-colors duration-200 hover:bg-black hover:text-white rounded-none ${
                  activeSection === item.href.replace("#", "")
                    ? "bg-black text-white"
                    : "text-black"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col justify-center border-b-2 border-black pt-14">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="relative">
            <p className="mb-4 text-sm font-bold uppercase tracking-widest text-neutral-500">
              Full-Stack Developer & Co-Founder
            </p>

            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight leading-none">
              Souca
              <br />
              Thomas
            </h1>

            <div className="mt-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-black" />
              <p className="text-sm font-bold uppercase tracking-widest">
                Est. 2024
              </p>
            </div>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-neutral-700">
              Building modern web and mobile applications with React, React
              Native, and AI-powered solutions.
            </p>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-0 border-2 border-black">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="border-r-2 border-black p-6 last:border-r-0 text-center"
                >
                  <p className="text-3xl font-black md:text-5xl">{stat.value}</p>
                  <p className="mt-2 text-xs font-bold uppercase tracking-widest text-neutral-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
              Scroll
            </span>
            <div className="h-8 w-px bg-black" />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-b-2 border-black py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading number="01" title="About" />

          <div className="mt-16 grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-lg leading-relaxed text-neutral-700">
                I&apos;m a full-stack developer and co-founder of TSC, building
                marketplace products and consumer apps. I specialize in React,
                React Native, and AI-powered solutions, creating scalable
                products that generate real revenue and serve real users.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-neutral-700">
                From AI-powered recipe extraction at Krumb to connecting
                handymen with customers at TSC Marketplace, I build products
                from zero to launch. Previously a Founding Engineer at Wavelink
                where I shipped features generating $1K+ MRR.
              </p>
            </div>

            <div>
              <h3 className="mb-6 text-xs font-bold uppercase tracking-widest">
                Core Skills
              </h3>
              <div className="grid grid-cols-2 gap-0 border-2 border-black">
                {SKILLS.map((skill, i) => (
                  <div
                    key={skill}
                    className={`border-b-2 border-r-2 border-black p-4 text-sm font-bold uppercase tracking-wider ${
                      i % 2 !== 0 ? "border-r-0" : ""
                    } ${i >= SKILLS.length - 2 ? "border-b-0" : ""}`}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="border-b-2 border-black py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading number="02" title="Projects" />

          {/* Featured Projects */}
          {featuredProjects.length > 0 && (
            <div className="mt-16">
              <h3 className="mb-8 text-xs font-bold uppercase tracking-widest border-b-2 border-black pb-3">
                Featured Projects
              </h3>
              <div className="grid gap-8">
                {featuredProjects.map((project, i) => (
                  <FeaturedProjectCard
                    key={project.id}
                    project={project}
                    index={i}
                    onLiveClick={(name) => setPopupProject(name)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Other Projects */}
          {otherProjects.length > 0 && (
            <div className="mt-20">
              <h3 className="mb-8 text-xs font-bold uppercase tracking-widest border-b-2 border-black pb-3">
                Other Projects
              </h3>
              <div className="grid gap-0 border-2 border-black">
                {otherProjects.map((project, i) => (
                  <CompactProjectCard
                    key={project.id}
                    project={project}
                    isLast={i === otherProjects.length - 1}
                    onLiveClick={(name) => setPopupProject(name)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="border-b-2 border-black py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading number="03" title="Experience" />

          <div className="mt-16">
            {experience.map((exp, i) => (
              <ExperienceRow key={i} experience={exp} index={i} isLast={i === experience.length - 1} />
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section id="technologies" className="border-b-2 border-black py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading number="04" title="Technologies" />

          <div className="mt-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {Object.entries(TECHNOLOGIES).map(([category, techs]) => (
              <div key={category}>
                <h3 className="mb-6 border-b-2 border-black pb-3 text-xs font-bold uppercase tracking-widest">
                  {category}
                </h3>
                <div className="flex flex-col gap-0">
                  {techs.map((tech) => (
                    <div
                      key={tech}
                      className="border-b border-neutral-200 py-3 text-sm font-bold uppercase tracking-wider transition-colors duration-200 hover:bg-black hover:text-white hover:pl-3"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-b-2 border-black py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading number="05" title="Contact" />

          <div className="mt-16 grid gap-16 lg:grid-cols-2">
            <div>
              <p className="text-lg leading-relaxed text-neutral-700">
                Interested in working together or have a question? Send me a
                message and I will get back to you.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">
                    Email
                  </span>
                  <div className="h-px flex-1 bg-neutral-200" />
                  <a
                    href="mailto:thomassouca@gmail.com"
                    className="text-sm font-bold underline underline-offset-4 transition-colors duration-200 hover:text-[#2563eb]"
                  >
                    thomassouca@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">
                    Email
                  </span>
                  <div className="h-px flex-1 bg-neutral-200" />
                  <a
                    href="mailto:thomas@souca.dev"
                    className="text-sm font-bold underline underline-offset-4 transition-colors duration-200 hover:text-[#2563eb]"
                  >
                    thomas@souca.dev
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">
                    GitHub
                  </span>
                  <div className="h-px flex-1 bg-neutral-200" />
                  <a
                    href="https://github.com/SoucaThomas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm font-bold underline underline-offset-4 transition-colors duration-200 hover:text-[#2563eb]"
                  >
                    SoucaThomas
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-0"
            >
              <div className="border-2 border-black">
                <input
                  type="text"
                  placeholder="YOUR NAME"
                  className="w-full border-b-2 border-black bg-white px-4 py-4 text-sm font-bold uppercase tracking-widest placeholder:text-neutral-400 focus:bg-neutral-50 focus:outline-none rounded-none"
                />
                <input
                  type="email"
                  placeholder="YOUR EMAIL"
                  className="w-full border-b-2 border-black bg-white px-4 py-4 text-sm font-bold uppercase tracking-widest placeholder:text-neutral-400 focus:bg-neutral-50 focus:outline-none rounded-none"
                />
                <input
                  type="text"
                  placeholder="SUBJECT"
                  className="w-full border-b-2 border-black bg-white px-4 py-4 text-sm font-bold uppercase tracking-widest placeholder:text-neutral-400 focus:bg-neutral-50 focus:outline-none rounded-none"
                />
                <textarea
                  rows={6}
                  placeholder="YOUR MESSAGE"
                  className="w-full resize-none bg-white px-4 py-4 text-sm font-bold uppercase tracking-widest placeholder:text-neutral-400 focus:bg-neutral-50 focus:outline-none rounded-none"
                />
              </div>
              <button
                type="submit"
                className="mt-0 flex w-full items-center justify-center gap-2 border-2 border-t-0 border-black bg-black px-6 py-4 text-sm font-bold uppercase tracking-widest text-white transition-colors duration-200 hover:bg-[#2563eb] hover:border-[#2563eb] rounded-none"
              >
                Send Message
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Resume */}
      <section id="resume" className="border-b-2 border-black py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading number="06" title="Resume" />

          <div className="mt-16 flex flex-col items-center text-center">
            <p className="max-w-md text-lg leading-relaxed text-neutral-700">
              Download my resume to learn more about my experience,
              education, and skills.
            </p>
            <a
              href="/resume.pdf"
              download
              className="mt-8 inline-flex items-center gap-3 border-2 border-black bg-black px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-colors duration-200 hover:bg-[#2563eb] hover:border-[#2563eb] rounded-none"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center gap-6 text-center">
            <p className="text-4xl font-black uppercase tracking-tight md:text-6xl">
              Souca Thomas
            </p>
            <div className="flex items-center gap-4">
              <a
                href="mailto:thomassouca@gmail.com"
                className="text-xs font-bold uppercase tracking-widest text-neutral-500 transition-colors duration-200 hover:text-black"
              >
                Email
              </a>
              <div className="h-3 w-px bg-neutral-300" />
              <a
                href="https://github.com/SoucaThomas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold uppercase tracking-widest text-neutral-500 transition-colors duration-200 hover:text-black"
              >
                GitHub
              </a>
              <div className="h-3 w-px bg-neutral-300" />
              <a
                href="/resume.pdf"
                download
                className="text-xs font-bold uppercase tracking-widest text-neutral-500 transition-colors duration-200 hover:text-black"
              >
                Resume
              </a>
            </div>
            <div className="mt-4 h-px w-full max-w-xs bg-neutral-200" />
            <p className="text-xs font-bold uppercase tracking-widest text-neutral-400">
              {new Date().getFullYear()} / All Rights Reserved
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 border-2 border-black bg-black p-3 text-white transition-colors duration-200 hover:bg-[#2563eb] hover:border-[#2563eb] rounded-none"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      )}

      {/* Live demo unavailable popup */}
      {popupProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={() => setPopupProject(null)}
        >
          <div
            className="relative mx-4 w-full max-w-md border-2 border-black bg-white p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPopupProject(null)}
              className="absolute top-4 right-4 text-neutral-400 transition-colors hover:text-black"
            >
              <X className="h-5 w-5" />
            </button>
            <h3 className="text-xl font-black uppercase tracking-wider">
              Demo Unavailable
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-neutral-600">
              The live demo for <span className="font-bold text-black">{popupProject}</span> is currently down for maintenance. Check back soon.
            </p>
            <button
              onClick={() => setPopupProject(null)}
              className="mt-6 w-full border-2 border-black bg-black px-6 py-3 text-xs font-bold uppercase tracking-widest text-white transition-colors duration-200 hover:bg-[#2563eb] hover:border-[#2563eb] rounded-none"
            >
              Got It
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

function SectionHeading({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div className="flex items-end gap-4">
      <span className="text-6xl font-black leading-none text-neutral-200 md:text-8xl">
        {number}
      </span>
      <div className="flex-1">
        <h2 className="text-3xl font-black uppercase tracking-widest md:text-5xl">
          {title}
        </h2>
        <div className="mt-2 h-0.5 w-full bg-black" />
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  return (
    <span className="inline-block border-2 border-black px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
      {status}
    </span>
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
  const number = String(index + 1).padStart(2, "0");

  return (
    <div className="group border-2 border-black transition-colors duration-200 hover:bg-black hover:text-white rounded-none">
      <div className="p-8 md:p-10">
        {/* Header: Number + Name + Status */}
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-baseline gap-3">
            <span className="text-4xl font-black text-neutral-300 transition-colors duration-200 group-hover:text-neutral-600 md:text-5xl">
              #{number}
            </span>
            <h3 className="text-2xl font-black uppercase tracking-wider md:text-3xl">
              {project.name}
            </h3>
          </div>
          {project.status && (
            <div className="transition-colors duration-200 group-hover:border-white [&>span]:group-hover:border-white [&>span]:group-hover:text-white">
              <StatusBadge status={project.status} />
            </div>
          )}
        </div>

        {/* Role */}
        {project.role && (
          <p className="mt-4 text-sm font-bold uppercase tracking-widest text-neutral-500 transition-colors duration-200 group-hover:text-neutral-400">
            {project.role}
          </p>
        )}

        {/* Long Description */}
        {project.longDescription && (
          <p className="mt-6 text-base leading-relaxed text-neutral-600 transition-colors duration-200 group-hover:text-neutral-300">
            {project.longDescription}
          </p>
        )}

        {/* Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="mt-6">
            <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-neutral-500 transition-colors duration-200 group-hover:text-neutral-400">
              Highlights
            </h4>
            <ul className="space-y-2">
              {project.highlights.map((highlight, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-sm leading-relaxed text-neutral-600 transition-colors duration-200 group-hover:text-neutral-300"
                >
                  <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 bg-black transition-colors duration-200 group-hover:bg-white" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Topics */}
        {project.topics.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {project.topics.map((topic) => (
              <span
                key={topic}
                className="border-2 border-neutral-300 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-neutral-500 transition-colors duration-200 group-hover:border-neutral-500 group-hover:text-neutral-300 rounded-none"
              >
                {topic}
              </span>
            ))}
          </div>
        )}

        {/* Links */}
        <div className="mt-8 flex items-center gap-6">
          {project.html_url && (
            <a
              href={project.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest transition-colors duration-200 hover:text-[#2563eb] group-hover:text-neutral-300 group-hover:hover:text-[#2563eb]"
            >
              Source
              <ExternalLink className="h-3 w-3" />
            </a>
          )}
          {project.homepage && (
            <button
              onClick={() => onLiveClick(project.name)}
              className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest transition-colors duration-200 hover:text-[#2563eb] group-hover:text-neutral-300 group-hover:hover:text-[#2563eb]"
            >
              Live
              <ExternalLink className="h-3 w-3" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function CompactProjectCard({
  project,
  isLast,
  onLiveClick,
}: {
  project: Project;
  isLast: boolean;
  onLiveClick: (name: string) => void;
}) {
  return (
    <div
      className={`group p-6 transition-colors duration-200 hover:bg-black hover:text-white ${
        !isLast ? "border-b-2 border-black" : ""
      }`}
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="flex-1">
          {/* Name + Role */}
          <div className="flex flex-wrap items-baseline gap-3">
            <h3 className="text-lg font-black uppercase tracking-wider">
              {project.name}
            </h3>
            {project.role && (
              <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 transition-colors duration-200 group-hover:text-neutral-400">
                {project.role}
              </span>
            )}
          </div>

          {/* Description */}
          {project.description && (
            <p className="mt-2 text-sm leading-relaxed text-neutral-600 transition-colors duration-200 group-hover:text-neutral-300">
              {project.description}
            </p>
          )}

          {/* Topics */}
          {project.topics.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {project.topics.map((topic) => (
                <span
                  key={topic}
                  className="border border-neutral-300 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-neutral-500 transition-colors duration-200 group-hover:border-neutral-500 group-hover:text-neutral-300 rounded-none"
                >
                  {topic}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Status + Links */}
        <div className="flex flex-shrink-0 items-center gap-4">
          {project.status && (
            <div className="transition-colors duration-200 group-hover:border-white [&>span]:group-hover:border-white [&>span]:group-hover:text-white">
              <StatusBadge status={project.status} />
            </div>
          )}
          {project.html_url && (
            <a
              href={project.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest transition-colors duration-200 hover:text-[#2563eb] group-hover:text-neutral-300 group-hover:hover:text-[#2563eb]"
            >
              Source
              <ExternalLink className="h-3 w-3" />
            </a>
          )}
          {project.homepage && (
            <button
              onClick={() => onLiveClick(project.name)}
              className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest transition-colors duration-200 hover:text-[#2563eb] group-hover:text-neutral-300 group-hover:hover:text-[#2563eb]"
            >
              Live
              <ExternalLink className="h-3 w-3" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function ExperienceRow({
  experience,
  index,
  isLast,
}: {
  experience: Experience;
  index: number;
  isLast: boolean;
}) {
  return (
    <div
      className={`grid gap-6 py-10 lg:grid-cols-12 ${
        !isLast ? "border-b-2 border-black" : ""
      } ${index === 0 ? "border-t-2 border-black" : ""}`}
    >
      {/* Left column: period + company */}
      <div className="lg:col-span-3">
        <p className="text-xs font-bold uppercase tracking-widest text-neutral-500">
          {experience.period}
        </p>
        <p className="mt-1 text-sm font-bold uppercase tracking-wider">
          {experience.company}
        </p>
      </div>

      {/* Middle column: title + description */}
      <div className="lg:col-span-5">
        <h3 className="text-xl font-black uppercase tracking-wider">
          {experience.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-neutral-600">
          {experience.description}
        </p>

        {/* Responsibilities */}
        {experience.responsibilities.length > 0 && (
          <ul className="mt-4 space-y-2">
            {experience.responsibilities.map((resp, i) => (
              <li
                key={i}
                className="flex gap-2 text-sm leading-relaxed text-neutral-600"
              >
                <span className="mt-1 block h-1.5 w-1.5 flex-shrink-0 bg-black" />
                {resp}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Right column: technologies */}
      <div className="lg:col-span-4">
        <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-neutral-500">
          Stack
        </h4>
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="border-2 border-black px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-none"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
