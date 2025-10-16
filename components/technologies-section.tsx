'use client';

import { Section } from '@/components/section';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiAmazon,
  SiNestjs,
  SiPrisma,
  SiAngular,
  SiCplusplus,
  SiSharp,
  SiWebpack,
  SiLinux,
} from 'react-icons/si';

const technologyCategories = [
  {
    name: 'Frontend',
    technologies: [
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'React', icon: SiReact },
      { name: 'React Native', icon: SiReact },
      { name: 'Angular', icon: SiAngular },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'Framer Motion', icon: SiFramer },
    ],
  },
  {
    name: 'Backend',
    technologies: [
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'NestJS', icon: SiNestjs },
      { name: 'Express', icon: SiExpress },
      { name: 'Prisma', icon: SiPrisma },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'Convex', icon: null },
    ],
  },
  {
    name: 'Programming Languages',
    technologies: [
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'JavaScript', icon: null },
      { name: 'C++', icon: SiCplusplus },
      { name: 'C#', icon: SiSharp },
      { name: 'C', icon: null },
    ],
  },
  {
    name: 'DevOps & Tools',
    technologies: [
      { name: 'Docker', icon: SiDocker },
      { name: 'Git', icon: SiGit },
      { name: 'AWS', icon: SiAmazon },
      { name: 'Linux', icon: SiLinux },
      { name: 'REST APIs', icon: null },
      { name: 'WebSockets', icon: null },
      { name: 'CI/CD', icon: null },
    ],
  },
];

export function TechnologiesSection() {
  return (
    <Section>
      <div className="relative">
        <h2 className="section-title relative z-10 text-center">Technologies & Skills</h2>
        <p className="section-subtitle max-w-3xl mx-auto text-center relative z-10">
          A comprehensive toolkit of technologies and frameworks I use to build modern applications
        </p>

        <div className="mt-16 space-y-12">
          {technologyCategories.map((category) => (
            <TechnologyCategory key={category.name} category={category} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">Always learning and expanding my skill set</p>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="outline" className="px-3 py-1">
              Continuous Learning
            </Badge>
            <Badge variant="outline" className="px-3 py-1">
              Industry Best Practices
            </Badge>
            <Badge variant="outline" className="px-3 py-1">
              Performance Focus
            </Badge>
          </div>
        </div>
      </div>
    </Section>
  );
}

function TechnologyCategory({ category }: { category: any }) {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold text-center text-foreground">{category.name}</h3>

      <div className="flex flex-wrap min-w-full gap-20 justify-center items-center">
        {category.technologies.map((tech: any) => (
          <TechnologyCard key={tech.name} technology={tech} />
        ))}
      </div>
    </div>
  );
}

function TechnologyCard({ technology }: { technology: { name: string; icon: any } }) {
  // Handle technologies without icons
  if (!technology.icon) {
    return (
      <div className="hover:scale-105 transition-transform duration-200">
        <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm group">
          <CardContent className="flex flex-col items-center justify-center p-6 space-y-4 text-center">
            <div className="w-16 h-16 bg-muted/20 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-muted-foreground">
                {technology.name.charAt(0)}
              </span>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                {technology.name}
              </h4>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const IconComponent = technology.icon;

  return (
    <div className="hover:scale-105 transition-transform duration-200">
      <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm group">
        <CardContent className="flex flex-col items-center justify-center p-6 space-y-4 text-center">
          <div className="relative w-16 h-16 group-hover:scale-110 transition-transform duration-300">
            <IconComponent className="w-16 h-16 text-primary" />
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
              {technology.name}
            </h4>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
