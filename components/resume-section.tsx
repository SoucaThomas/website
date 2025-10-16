'use client';

import { Section } from '@/components/section';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileDown, Download, Eye, Calendar, Award, Briefcase } from 'lucide-react';
import Link from 'next/link';
import { PatternBackground } from '@/components/pattern-background';

export function ResumeSection() {
  const highlights = [
    {
      icon: Briefcase,
      title: 'Professional Experience',
      description: '3+ years in full-stack development',
      color: 'from-blue-500/20 to-blue-600/20',
    },
    {
      icon: Award,
      title: 'Key Skills',
      description: 'React, Next.js, Node.js, TypeScript',
      color: 'from-green-500/20 to-green-600/20',
    },
    {
      icon: Calendar,
      title: 'Latest Update',
      description: 'Updated August 2025',
      color: 'from-purple-500/20 to-purple-600/20',
    },
  ];

  return (
    <Section className="pb-32">
      <div className="relative">
        <div className="text-center mb-16">
          <h2 className="section-title relative z-10">Resume & Experience</h2>
          <p className="section-subtitle mx-auto text-center relative z-10 max-w-3xl">
            Get a comprehensive overview of my professional journey, technical skills, and
            achievements
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {highlights.map((highlight) => (
            <Card
              key={highlight.title}
              className={`border-0 bg-gradient-to-br ${highlight.color} backdrop-blur-sm h-full`}
            >
              <CardContent className="p-6 text-center">
                <div className="mx-auto w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <highlight.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{highlight.title}</h3>
                <p className="text-muted-foreground text-sm">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center">
          <div className="relative z-10">
            <Card className="max-w-2xl mx-auto border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm shadow-2xl">
              <CardHeader className="text-center pb-6">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <FileDown className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Download My Resume</CardTitle>
                <CardDescription className="text-base">
                  Get a detailed overview of my professional experience, technical skills,
                  education, and achievements.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    My resume includes comprehensive details about my work experience, technical
                    expertise, project highlights, and professional development journey.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      asChild
                      size="lg"
                      className="h-12 px-8 rounded-full hover:scale-105 transition-transform duration-200"
                    >
                      <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                        <Download className="mr-2 h-5 w-5" />
                        Download PDF
                      </Link>
                    </Button>

                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="h-12 px-8 rounded-full hover:scale-105 transition-transform duration-200"
                    >
                      <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                        <Eye className="mr-2 h-5 w-5" />
                        View Online
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center text-sm">
                    <div>
                      <p className="font-semibold text-foreground">File Size</p>
                      <p className="text-muted-foreground">~2.5 MB</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Format</p>
                      <p className="text-muted-foreground">PDF</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Last Updated</p>
                      <p className="text-muted-foreground">Aug 2025</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Prefer to discuss opportunities directly?</p>
          <Button asChild variant="outline" size="lg" className="rounded-full px-8">
            <Link href="#contact">Let's Talk</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
