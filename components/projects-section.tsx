'use client';

import { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Section } from '@/components/section';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Star, GitBranch, Eye } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { getProjects } from '@/lib/data';
import type { Project } from '@/lib/github';
import { useIsMobile } from '@/hooks/use-mobile';

export function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = getProjects();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <Section>
      <div className="text-center mb-16">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle max-w-3xl mx-auto">
          A showcase of my work and open-source contributions that demonstrate my skills and creativity
        </p>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <ProjectCardSkeleton key={i} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      )}

      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <p className="text-muted-foreground mb-6">
          Want to see more of my work?
        </p>
        <Button asChild variant="outline" size="lg" className="rounded-full px-8">
          <Link href="https://github.com/soucathomas" target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-5 w-5" />
            View All Projects
          </Link>
        </Button>
      </motion.div>
    </Section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const isInView = useInView(ref, { once: true, amount: isMobile ? 0 : 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group"
    >
      <Card className="overflow-hidden h-full flex flex-col hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={project.image || '/placeholder.svg?height=225&width=400'}
            alt={project.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Project stats overlay */}
          <div className="absolute top-4 right-4 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center gap-1 bg-black/70 text-white px-2 py-1 rounded-full text-xs">
              <Star className="w-3 h-3" />
              <span>{project.stargazers_count || 0}</span>
            </div>
            <div className="flex items-center gap-1 bg-black/70 text-white px-2 py-1 rounded-full text-xs">
              <GitBranch className="w-3 h-3" />
              <span>{project.forks_count || 0}</span>
            </div>
          </div>
        </div>

        <CardContent className="flex-1 p-6">
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-xl group-hover:text-primary transition-colors duration-300">
                {project.name}
              </h3>
              <p className="text-sm text-muted-foreground mt-2 line-clamp-3 leading-relaxed">
                {project.description || 'No description available'}
              </p>
            </div>

            {project.topics && project.topics.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {project.topics.slice(0, 4).map((topic) => (
                  <Badge
                    key={topic}
                    variant="secondary"
                    className="text-xs px-2 py-1 bg-muted/50 hover:bg-muted transition-colors duration-200"
                  >
                    {topic}
                  </Badge>
                ))}
                {project.topics.length > 4 && (
                  <Badge variant="outline" className="text-xs px-2 py-1">
                    +{project.topics.length - 4} more
                  </Badge>
                )}
              </div>
            )}
          </div>
        </CardContent>

        <CardFooter className="px-6 pb-6 pt-0 flex gap-3">
          {project.homepage && (
            <Button
              asChild
              variant="default"
              size="sm"
              className="flex-1 rounded-full hover:scale-105 transition-transform duration-200"
            >
              <Link href={project.homepage} target="_blank" rel="noopener noreferrer">
                <Eye className="mr-2 h-4 w-4" />
                Live Demo
              </Link>
            </Button>
          )}
          <Button
            asChild
            variant="outline"
            size="sm"
            className="flex-1 rounded-full hover:scale-105 transition-transform duration-200"
          >
            <Link href={project.html_url} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              Code
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

function ProjectCardSkeleton() {
  return (
    <Card className="overflow-hidden h-full flex flex-col border-0 bg-gradient-to-br from-card to-card/50">
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
      <CardFooter className="px-6 pb-6 pt-0 flex gap-3">
        <div className="h-9 flex-1 bg-muted rounded-full animate-pulse" />
        <div className="h-9 flex-1 bg-muted rounded-full animate-pulse" />
      </CardFooter>
    </Card>
  );
}
