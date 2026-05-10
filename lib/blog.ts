import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export interface BlogPost {
  slug: string;
  project: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  image?: string;
  part?: number;
  content: string;
}

export interface BlogProject {
  slug: string;
  title: string;
  description: string;
  status: string;
  posts: BlogPost[];
}

export function getAllProjects(): BlogProject[] {
  const entries = fs.readdirSync(BLOG_DIR, { withFileTypes: true });
  const projects: BlogProject[] = [];

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;

    const projectSlug = entry.name;
    const projectDir = path.join(BLOG_DIR, projectSlug);

    // Read project metadata
    const metaPath = path.join(projectDir, "_project.json");
    let meta = { title: projectSlug, description: "", status: "In Progress" };
    if (fs.existsSync(metaPath)) {
      meta = JSON.parse(fs.readFileSync(metaPath, "utf-8"));
    }

    // Read all posts in this project
    const posts = getProjectPosts(projectSlug);

    projects.push({
      slug: projectSlug,
      title: meta.title,
      description: meta.description,
      status: meta.status,
      posts,
    });
  }

  // Sort projects by most recent post date
  return projects.sort((a, b) => {
    const aDate = a.posts[0]?.date || "";
    const bDate = b.posts[0]?.date || "";
    return new Date(bDate).getTime() - new Date(aDate).getTime();
  });
}

export function getProjectPosts(projectSlug: string): BlogPost[] {
  const projectDir = path.join(BLOG_DIR, projectSlug);

  if (!fs.existsSync(projectDir)) return [];

  const files = fs.readdirSync(projectDir).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const filePath = path.join(projectDir, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    return {
      slug,
      project: projectSlug,
      title: data.title,
      date: data.date,
      description: data.description,
      tags: data.tags || [],
      image: data.image,
      part: data.part,
      content,
    };
  });

  // Sort by part number if available, otherwise by date
  return posts.sort((a, b) => {
    if (a.part && b.part) return a.part - b.part;
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });
}

export function getPostBySlug(projectSlug: string, postSlug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, projectSlug, `${postSlug}.mdx`);

  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    slug: postSlug,
    project: projectSlug,
    title: data.title,
    date: data.date,
    description: data.description,
    tags: data.tags || [],
    image: data.image,
    part: data.part,
    content,
  };
}

export function getAllPosts(): BlogPost[] {
  const projects = getAllProjects();
  return projects
    .flatMap((p) => p.posts)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
