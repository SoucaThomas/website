import { AnimatedSection } from "@/components/animated-section";
import { ProjectCard } from "@/components/project-card";
import { getGithubProjects } from "@/lib/github";

export default async function ProjectsPage() {
  const projects = await getGithubProjects();

  return (
    <div className="container max-w-5xl py-12 md:py-24">
      <AnimatedSection className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter">Projects</h1>
        <p className="text-xl text-muted-foreground">
          A showcase of my work and open-source contributions
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.1} className="mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              delay={0.1 + index * 0.05}
            />
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}
