'use client';

import { Section } from '@/components/section';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Users, Clock, Star } from 'lucide-react';

export function AboutSection() {
  const stats = [
    { icon: Code, label: 'Years Experience', value: '2+' },
    { icon: Users, label: 'Projects Completed', value: '15+' },
    { icon: Star, label: 'Technologies', value: '20+' },
  ];

  const skills = [
    'Full-Stack Development',
    'React & React Native',
    'Next.js & NestJS',
    'TypeScript & JavaScript',
    'Node.js & Express',
    'Prisma & PostgreSQL',
    'Mobile Development',
    'AI Integration',
    'API Development',
    'Database Design',
  ];

  return (
    <Section>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Creating digital experiences that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Main content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm Souca Thomas, a full-stack developer and founding engineer with expertise in
                building modern web and mobile applications. I specialize in React, React Native,
                and AI-powered solutions, currently working on innovative projects that combine
                technology with real-world impact.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                As a founding engineer at Wavelink and founder of Krumb, I've built applications
                that generate real revenue and serve hundreds of users. My passion lies in creating
                scalable solutions that solve complex problems through clean code and innovative
                thinking.
              </p>
            </div>

            {/* Skills */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Core Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Stats and visual elements */}
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.slice(0, 2).map((stat) => (
                <Card
                  key={stat.label}
                  className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <CardContent className="p-0">
                    <div className="flex justify-center mb-3">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <stat.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}

              {/* Last stat takes up 2 columns */}
              <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 col-span-2">
                <CardContent className="p-0">
                  <div className="flex justify-center mb-3">
                    <div className="p-3 bg-primary/10 rounded-full">
                      {(() => {
                        const IconComponent = stats[2].icon;
                        return <IconComponent className="w-6 h-6 text-primary" />;
                      })()}
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">{stats[2].value}</div>
                  <div className="text-sm text-muted-foreground">{stats[2].label}</div>
                </CardContent>
              </Card>
            </div>

            {/* Additional info card */}
            <Card className="p-6 bg-gradient-to-br from-muted/50 to-muted/30 border-0">
              <CardContent className="p-0">
                <h4 className="font-semibold text-lg mb-3">What I Bring</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Problem-solving mindset
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Clean, maintainable code
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    User-centered design approach
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Continuous learning attitude
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  );
}
