import type { MetadataRoute } from "next";
import { getAllProjects } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://souca.dev";

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  const projects = getAllProjects();
  const blogPages: MetadataRoute.Sitemap = projects.flatMap((project) =>
    project.posts.map((post) => ({
      url: `${baseUrl}/blog/${project.slug}/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))
  );

  return [...staticPages, ...blogPages];
}
