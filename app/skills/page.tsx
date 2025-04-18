import { AnimatedSection } from '@/components/animated-section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export default function SkillsPage() {
  const frontendSkills = [
    { name: 'Next.js', level: 95 },
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'JavaScript', level: 90 },
    { name: 'HTML/CSS', level: 85 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'Framer Motion', level: 80 },
  ];

  const backendSkills = [
    { name: 'Express.js', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'MongoDB', level: 80 },
    { name: 'PostgreSQL', level: 75 },
    { name: 'REST API', level: 90 },
    { name: 'GraphQL', level: 70 },
  ];

  const otherSkills = [
    { name: 'Git/GitHub', level: 85 },
    { name: 'Docker', level: 75 },
    { name: 'CI/CD', level: 80 },
    { name: 'AWS', level: 70 },
    { name: 'Testing (Jest, React Testing Library)', level: 75 },
    { name: 'Agile/Scrum', level: 80 },
  ];

  return (
    <div className="container max-w-4xl py-12 md:py-24">
      <AnimatedSection className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter">Skills</h1>
        <p className="text-xl text-muted-foreground">My technical expertise and proficiencies</p>
      </AnimatedSection>

      <div className="mt-12 grid gap-8">
        <AnimatedSection delay={0.1}>
          <Card>
            <CardHeader>
              <CardTitle>Frontend Development</CardTitle>
              <CardDescription>
                Building modern, responsive, and interactive user interfaces
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {frontendSkills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <Card>
            <CardHeader>
              <CardTitle>Backend Development</CardTitle>
              <CardDescription>Creating robust server-side applications and APIs</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {backendSkills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <Card>
            <CardHeader>
              <CardTitle>Other Skills</CardTitle>
              <CardDescription>Additional technical and professional competencies</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {otherSkills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </div>
  );
}
