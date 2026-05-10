import Link from "next/link";
import { getAllProjects } from "@/lib/blog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Souca Thomas writes about embedded systems, STM32, FreeRTOS, flight controllers, React, and building things from scratch.",
  alternates: {
    canonical: "https://souca.dev/blog",
  },
  openGraph: {
    title: "Blog — Souca Thomas",
    description:
      "Deep dives into embedded systems, web development, and building things from scratch.",
    url: "https://souca.dev/blog",
    type: "website",
  },
};

export default function BlogPage() {
  const projects = getAllProjects();

  return (
    <div className="min-h-screen" style={{ fontFamily: "var(--font-body)" }}>
      {/* Nav */}
      <nav className="backdrop-blur-md bg-[var(--color-bg)]/80">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6 lg:px-10">
          <Link
            href="/"
            className="text-base font-bold tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            souca.dev
          </Link>
          <div className="flex items-center gap-1">
            <Link
              href="/"
              className="px-3 py-1.5 text-[13px] font-medium rounded-full transition-all duration-200 text-[var(--color-text-secondary)] hover:text-[var(--color-text)]"
            >
              Home
            </Link>
            <span className="px-3 py-1.5 text-[13px] font-medium rounded-full bg-[var(--color-text)] text-[var(--color-bg)]">
              Blog
            </span>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="mx-auto max-w-7xl px-6 lg:px-10 pt-12 pb-24">
        <header className="mb-20">
          <p
            className="text-xs font-semibold uppercase tracking-wider"
            style={{ color: "var(--color-accent)" }}
          >
            Writing
          </p>
          <h1
            className="mt-3 text-4xl font-bold tracking-tight md:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Blog
          </h1>
          <p className="mt-4 max-w-lg text-base" style={{ color: "var(--color-text-secondary)" }}>
            Deep dives into the projects I&apos;m building — embedded systems, web apps, and everything in between.
          </p>
        </header>

        {projects.length === 0 ? (
          <p style={{ color: "var(--color-text-muted)" }}>No posts yet.</p>
        ) : (
          <div className="space-y-20">
            {projects.map((project) => (
              <section key={project.slug}>
                {/* Project header */}
                <div className="flex items-start justify-between gap-4 mb-8">
                  <div>
                    <div className="flex items-center gap-3">
                      <h2
                        className="text-2xl font-bold tracking-tight"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {project.title}
                      </h2>
                      <span
                        className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full"
                        style={{ backgroundColor: "oklch(0.62 0.22 28 / 0.08)", color: "var(--color-accent)" }}
                      >
                        {project.status}
                      </span>
                    </div>
                    <p className="mt-2 text-sm max-w-xl" style={{ color: "var(--color-text-secondary)" }}>
                      {project.description}
                    </p>
                  </div>
                  <span className="text-xs font-medium flex-shrink-0 mt-1" style={{ color: "var(--color-text-muted)" }}>
                    {project.posts.length} {project.posts.length === 1 ? "part" : "parts"}
                  </span>
                </div>

                {/* Posts list */}
                <div
                  className="rounded-xl overflow-hidden"
                  style={{ border: "1px solid var(--color-border)" }}
                >
                  {project.posts.map((post, i) => (
                    <Link
                      key={post.slug}
                      href={`/blog/${project.slug}/${post.slug}`}
                      className="group flex items-start gap-4 p-5 transition-colors duration-200 hover:bg-[var(--color-bg-elevated)]"
                      style={{
                        borderBottom: i < project.posts.length - 1 ? "1px solid var(--color-border)" : "none",
                      }}
                    >
                      {/* Part number */}
                      {post.part && (
                        <span
                          className="text-xs font-bold mt-0.5 w-5 flex-shrink-0 text-center"
                          style={{ color: "var(--color-text-muted)" }}
                        >
                          {post.part}
                        </span>
                      )}

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-semibold group-hover:text-[var(--color-accent)] transition-colors duration-200">
                          {post.title}
                        </h3>
                        <p className="mt-1 text-sm truncate" style={{ color: "var(--color-text-muted)" }}>
                          {post.description}
                        </p>
                      </div>

                      {/* Date */}
                      <time
                        className="text-xs font-medium flex-shrink-0 mt-0.5"
                        style={{ color: "var(--color-text-muted)" }}
                      >
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </time>
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
