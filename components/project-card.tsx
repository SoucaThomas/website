'use client';

import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Project } from '@/lib/github';

interface ProjectCardProps {
  project: Project;
  delay?: number;
}

export function ProjectCard({ project, delay = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Card className="overflow-hidden h-full flex flex-col">
        <div className="relative aspect-video">
          <Image
            src={project.image || '/placeholder.svg?height=225&width=400'}
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
                {project.description || 'No description available'}
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
              <Link href={project.homepage} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Demo
              </Link>
            </Button>
          )}
          <Button asChild variant="outline" size="sm">
            <Link href={project.html_url} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
