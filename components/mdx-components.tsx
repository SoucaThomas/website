import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h1: ({ children }) => (
    <h1
      className="mt-14 mb-4 text-2xl font-bold tracking-tight md:text-3xl"
      style={{ fontFamily: "var(--font-display)" }}
    >
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2
      className="mt-12 mb-3 text-xl font-bold tracking-tight md:text-2xl"
      style={{ fontFamily: "var(--font-display)" }}
    >
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3
      className="mt-8 mb-2 text-lg font-semibold"
      style={{ fontFamily: "var(--font-display)" }}
    >
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="mt-6 mb-2 text-base font-semibold">{children}</h4>
  ),
  p: ({ children }) => (
    <p
      className="mb-5 text-[0.95rem] leading-[1.75]"
      style={{ color: "var(--color-text-secondary)" }}
    >
      {children}
    </p>
  ),
  ul: ({ children }) => (
    <ul
      className="mb-5 ml-1 space-y-2 text-[0.95rem]"
      style={{ color: "var(--color-text-secondary)" }}
    >
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol
      className="mb-5 ml-4 list-decimal space-y-2 text-[0.95rem]"
      style={{ color: "var(--color-text-secondary)" }}
    >
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="leading-[1.75] flex gap-2">
      <span
        className="mt-[0.7rem] block h-1 w-1 flex-shrink-0 rounded-full"
        style={{ backgroundColor: "var(--color-border-strong)" }}
      />
      <span>{children}</span>
    </li>
  ),
  blockquote: ({ children }) => (
    <blockquote
      className="my-6 pl-5 italic"
      style={{
        borderLeft: "2px solid var(--color-accent)",
        color: "var(--color-text-secondary)",
      }}
    >
      {children}
    </blockquote>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      className="font-medium underline underline-offset-3 decoration-[var(--color-border-strong)] hover:decoration-[var(--color-accent)] transition-colors duration-200"
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  ),
  img: ({ src, alt }) => (
    <figure className="my-8">
      <img
        src={src}
        alt={alt || ""}
        className="w-full rounded-lg"
        style={{ border: "1px solid var(--color-border)" }}
      />
      {alt && (
        <figcaption
          className="mt-3 text-center text-sm"
          style={{ color: "var(--color-text-muted)" }}
        >
          {alt}
        </figcaption>
      )}
    </figure>
  ),
  pre: ({ children, ...props }) => (
    <pre
      {...props}
      className="my-6 overflow-x-auto rounded-md text-[13px] leading-[1.6] [&>code]:block [&>code]:px-4 [&>code]:py-4 outline-none"
      style={{
        fontFamily: "var(--font-mono)",
        backgroundColor: "var(--color-surface-code)",
        border: "1px solid var(--color-border)",
      }}
    >
      {children}
    </pre>
  ),
  code: ({ children, ...props }) => {
    // rehype-pretty-code sets data-language on code blocks inside pre
    const isBlock = !!(props as Record<string, unknown>)["data-language"];
    if (!isBlock) {
      return (
        <code
          className="text-[0.85em] font-medium px-1.5 py-0.5 rounded"
          style={{
            backgroundColor: "var(--color-bg-elevated)",
            border: "1px solid var(--color-border)",
            fontFamily: "var(--font-mono)",
          }}
        >
          {children}
        </code>
      );
    }
    return <code {...props}>{children}</code>;
  },
  hr: () => (
    <hr
      className="my-10 border-0 h-px"
      style={{ backgroundColor: "var(--color-border)" }}
    />
  ),
  table: ({ children }) => (
    <div className="my-6 overflow-x-auto rounded-lg" style={{ border: "1px solid var(--color-border)" }}>
      <table className="w-full text-sm">{children}</table>
    </div>
  ),
  th: ({ children }) => (
    <th
      className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider"
      style={{
        backgroundColor: "var(--color-bg-elevated)",
        color: "var(--color-text-muted)",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td
      className="px-4 py-3 text-sm"
      style={{
        borderBottom: "1px solid var(--color-border)",
        color: "var(--color-text-secondary)",
      }}
    >
      {children}
    </td>
  ),
};
