import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import { getAllProjects, getPostBySlug, getProjectPosts } from "@/lib/blog";
import { mdxComponents } from "@/components/mdx-components";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface PageProps {
  params: Promise<{ project: string; slug: string }>;
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  const params: { project: string; slug: string }[] = [];

  for (const project of projects) {
    for (const post of project.posts) {
      params.push({ project: project.slug, slug: post.slug });
    }
  }

  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { project, slug } = await params;
  const post = getPostBySlug(project, slug);
  if (!post) return {};

  const url = `https://souca.dev/blog/${project}/${slug}`;

  return {
    title: post.title,
    description: post.description,
    authors: [{ name: "Souca Thomas", url: "https://souca.dev" }],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      publishedTime: post.date,
      authors: ["Souca Thomas"],
      tags: post.tags,
      siteName: "Souca Thomas",
      ...(post.image && { images: [{ url: post.image }] }),
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { project, slug } = await params;
  const post = getPostBySlug(project, slug);

  if (!post) {
    notFound();
  }

  // Get sibling posts for prev/next navigation
  const siblings = getProjectPosts(project);
  const currentIndex = siblings.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? siblings[currentIndex - 1] : null;
  const nextPost = currentIndex < siblings.length - 1 ? siblings[currentIndex + 1] : null;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: "Souca Thomas",
      url: "https://souca.dev",
    },
    publisher: {
      "@type": "Person",
      name: "Souca Thomas",
      url: "https://souca.dev",
    },
    url: `https://souca.dev/blog/${project}/${slug}`,
    keywords: post.tags.join(", "),
    ...(post.image && { image: post.image }),
  };

  return (
    <div className="min-h-screen" style={{ fontFamily: "var(--font-body)" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
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
          <Link
            href="/blog"
            className="flex items-center gap-1.5 px-3 py-1.5 text-[13px] font-medium rounded-full transition-all duration-200 text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:bg-[var(--color-bg-elevated)]"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Blog
          </Link>
        </div>
      </nav>

      {/* Article */}
      <article className="mx-auto max-w-[680px] px-6 pt-12 pb-24">
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <time
              className="text-sm font-medium"
              style={{ color: "var(--color-text-muted)" }}
            >
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            {post.part && (
              <span
                className="text-xs font-semibold px-2 py-0.5 rounded-full"
                style={{ backgroundColor: "var(--color-bg-elevated)", color: "var(--color-text-muted)", border: "1px solid var(--color-border)" }}
              >
                Part {post.part}
              </span>
            )}
          </div>
          <h1
            className="text-3xl font-bold tracking-tight md:text-4xl lg:text-[2.75rem] lg:leading-[1.1]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {post.title}
          </h1>
          <div className="mt-5 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium px-2.5 py-1 rounded-md"
                style={{
                  backgroundColor: "var(--color-bg-elevated)",
                  color: "var(--color-text-muted)",
                  border: "1px solid var(--color-border)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Content */}
        <div className="prose-custom">
          <MDXRemote
            source={post.content}
            components={mdxComponents}
            options={{
              mdxOptions: {
                rehypePlugins: [
                  [
                    rehypePrettyCode,
                    {
                      theme: "github-light",
                      keepBackground: false,
                    },
                  ],
                ],
              },
            }}
          />
        </div>

        {/* Prev / Next navigation */}
        {(prevPost || nextPost) && (
          <nav
            className="mt-16 pt-8 grid gap-4 sm:grid-cols-2"
            style={{ borderTop: "1px solid var(--color-border)" }}
          >
            {prevPost ? (
              <Link
                href={`/blog/${project}/${prevPost.slug}`}
                className="group flex flex-col gap-1 p-4 rounded-lg transition-colors duration-200 hover:bg-[var(--color-bg-elevated)]"
              >
                <span className="text-xs font-medium flex items-center gap-1" style={{ color: "var(--color-text-muted)" }}>
                  <ArrowLeft className="h-3 w-3" /> Previous
                </span>
                <span className="text-sm font-semibold group-hover:text-[var(--color-accent)] transition-colors">
                  {prevPost.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
            {nextPost && (
              <Link
                href={`/blog/${project}/${nextPost.slug}`}
                className="group flex flex-col gap-1 p-4 rounded-lg transition-colors duration-200 hover:bg-[var(--color-bg-elevated)] text-right"
              >
                <span className="text-xs font-medium flex items-center gap-1 justify-end" style={{ color: "var(--color-text-muted)" }}>
                  Next <ArrowRight className="h-3 w-3" />
                </span>
                <span className="text-sm font-semibold group-hover:text-[var(--color-accent)] transition-colors">
                  {nextPost.title}
                </span>
              </Link>
            )}
          </nav>
        )}

        {/* Back link */}
        <footer className="mt-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200 hover:text-[var(--color-accent)]"
            style={{ color: "var(--color-text-secondary)" }}
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            All posts
          </Link>
        </footer>
      </article>
    </div>
  );
}
