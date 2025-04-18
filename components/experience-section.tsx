"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getExperience, type Experience } from "@/lib/data";

export function ExperienceSection() {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading from an API for a smoother experience
    const loadExperience = async () => {
      try {
        const data = getExperience();
        setExperiences(data);
      } catch (error) {
        console.error("Error loading experience data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadExperience();
  }, []);

  return (
    <Section>
      <h2 className="section-title">Experience</h2>
      <p className="section-subtitle mx-auto text-center">
        My professional journey and career highlights
      </p>

      <div className="space-y-8 mt-12">
        {isLoading
          ? // Show skeleton loaders while loading
            Array.from({ length: 3 }).map((_, index) => (
              <ExperienceCardSkeleton key={index} />
            ))
          : experiences.map((experience, index) => (
              <ExperienceCard
                key={index}
                experience={experience}
                index={index}
              />
            ))}
      </div>
    </Section>
  );
}

function ExperienceCard({
  experience,
  index,
}: {
  experience: Experience;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
            <div>
              <CardTitle>{experience.title}</CardTitle>
              <CardDescription>{experience.company}</CardDescription>
            </div>
            <Badge variant="outline" className="w-fit">
              {experience.period}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>{experience.description}</p>
          <div>
            <h4 className="font-medium mb-2">Key Responsibilities:</h4>
            <ul className="list-disc pl-5 space-y-1">
              {experience.responsibilities.map((responsibility, i) => (
                <li key={i}>{responsibility}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Technologies Used:</h4>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function ExperienceCardSkeleton() {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
          <div>
            <div className="h-7 w-48 bg-muted rounded animate-pulse" />
            <div className="h-5 w-32 bg-muted rounded mt-1 animate-pulse" />
          </div>
          <div className="h-6 w-24 bg-muted rounded animate-pulse" />
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="h-4 w-full bg-muted rounded animate-pulse" />
        <div className="h-4 w-5/6 bg-muted rounded animate-pulse" />
        <div>
          <div className="h-5 w-40 bg-muted rounded mb-2 animate-pulse" />
          <div className="space-y-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-4 w-full bg-muted rounded animate-pulse"
              />
            ))}
          </div>
        </div>
        <div>
          <div className="h-5 w-40 bg-muted rounded mb-2 animate-pulse" />
          <div className="flex flex-wrap gap-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-6 w-20 bg-muted rounded animate-pulse"
              />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
