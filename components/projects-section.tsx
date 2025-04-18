"use client";

import { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Section } from "@/components/section";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getGithubProjects, type Project } from "@/lib/github";

export function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getGithubProjects();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <Section>
      <h2 className="section-title">Projects</h2>
      <p className="section-subtitle mx-auto text-center">
        A showcase of my work and open-source contributions
      </p>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <ProjectCardSkeleton key={i} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      )}
    </Section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
        <div className="relative aspect-video">
          <Image
            src={project.image || "/placeholder.svg?height=225&width=400"}
            alt={project.name}
            fill
            className="object-cover"
          />
        </div>
        <CardContent className="flex-1 p-6">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-xl">{project.name}</h3>
              <p className="text-sm text-muted-foreground mt-1 line-clamp-3">
                {project.description || "No description available"}
              </p>
            </div>

            {project.topics && project.topics.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {project.topics.map((topic) => (
                  <Badge key={topic} variant="secondary">
                    {topic}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter className="px-6 pb-6 pt-0 flex gap-2">
          {project.homepage && (
            <Button asChild variant="default" size="sm">
              <Link
                href={project.homepage}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Demo
              </Link>
            </Button>
          )}
          <Button asChild variant="outline" size="sm">
            <Link
              href={project.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

function ProjectCardSkeleton() {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative aspect-video bg-muted animate-pulse" />
      <CardContent className="flex-1 p-6">
        <div className="space-y-4">
          <div>
            <div className="h-6 w-2/3 bg-muted rounded animate-pulse" />
            <div className="h-4 w-full bg-muted rounded mt-2 animate-pulse" />
            <div className="h-4 w-5/6 bg-muted rounded mt-1 animate-pulse" />
          </div>
          <div className="flex flex-wrap gap-2">
            <div className="h-5 w-16 bg-muted rounded animate-pulse" />
            <div className="h-5 w-20 bg-muted rounded animate-pulse" />
            <div className="h-5 w-14 bg-muted rounded animate-pulse" />
          </div>
        </div>
      </CardContent>
      <CardFooter className="px-6 pb-6 pt-0 flex gap-2">
        <div className="h-9 w-20 bg-muted rounded animate-pulse" />
        <div className="h-9 w-24 bg-muted rounded animate-pulse" />
      </CardFooter>
    </Card>
  );
}
