'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Section } from '@/components/section';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { getExperience, type Experience } from '@/lib/data';
import { useIsMobile } from '@/hooks/use-mobile';
import { Calendar, MapPin, Building2, ArrowRight } from 'lucide-react';

export function ExperienceSection() {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadExperience = async () => {
      try {
        const data = getExperience();
        setExperiences(data);
      } catch (error) {
        console.error('Error loading experience data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadExperience();
  }, []);

  return (
    <Section>
      <div className="text-center mb-16">
        <h2 className="section-title">Professional Experience</h2>
        <p className="section-subtitle max-w-3xl mx-auto">
          My professional journey and career highlights that showcase my growth and expertise
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary to-primary/20 hidden md:block" />

        <div className="space-y-12">
          {isLoading
            ? Array.from({ length: 3 }).map((_, index) => <ExperienceCardSkeleton key={index} />)
            : experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} index={index} />
            ))}
        </div>
      </div>
    </Section>
  );
}

function ExperienceCard({ experience, index }: { experience: Experience; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const isInView = useInView(ref, { once: true, amount: isMobile ? 0.02 : 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isMobile ? 0 : (index % 2 === 0 ? -50 : 50) }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isMobile ? 0 : (index % 2 === 0 ? -50 : 50) }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative"
    >
      {/* Timeline dot */}
      <div className="absolute left-8 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg hidden md:block" />

      <div className={`md:ml-16 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
        <Card className="overflow-hidden hover:shadow-xl transition-all duration-500 border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm group">
          <CardHeader className="pb-4">
            <div className="flex flex-col gap-3">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
                <div className="space-y-2">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {experience.title}
                  </CardTitle>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Building2 className="w-4 h-4" />
                    <CardDescription className="text-base font-medium">
                      {experience.company}
                    </CardDescription>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="px-3 py-1 border-2">
                    <Calendar className="w-3 h-3 mr-1" />
                    {experience.period}
                  </Badge>
                </div>
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              {experience.description}
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2 text-foreground">
                  <ArrowRight className="w-4 h-4 text-primary" />
                  Key Responsibilities
                </h4>
                <ul className="space-y-2">
                  {experience.responsibilities.map((responsibility, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="leading-relaxed">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2 text-foreground">
                  <ArrowRight className="w-4 h-4 text-primary" />
                  Technologies & Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="px-3 py-1 bg-muted/50 hover:bg-muted transition-colors duration-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}

function ExperienceCardSkeleton() {
  return (
    <div className="relative md:ml-16">
      <div className="w-4 h-4 bg-muted rounded-full border-4 border-background shadow-lg absolute left-8 top-6 hidden md:block" />

      <Card className="overflow-hidden border-0 bg-gradient-to-br from-card to-card/50">
        <CardHeader className="pb-4">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
              <div className="space-y-2">
                <div className="h-6 w-48 bg-muted rounded animate-pulse" />
                <div className="h-5 w-32 bg-muted rounded animate-pulse" />
              </div>
              <div className="h-8 w-24 bg-muted rounded animate-pulse" />
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <div className="h-4 w-full bg-muted rounded animate-pulse" />
            <div className="h-4 w-5/6 bg-muted rounded animate-pulse" />
          </div>
          <div className="space-y-4">
            <div>
              <div className="h-5 w-40 bg-muted rounded mb-3 animate-pulse" />
              <div className="space-y-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-4 w-full bg-muted rounded animate-pulse" />
                ))}
              </div>
            </div>
            <div>
              <div className="h-5 w-40 bg-muted rounded mb-3 animate-pulse" />
              <div className="flex flex-wrap gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-6 w-20 bg-muted rounded animate-pulse" />
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
