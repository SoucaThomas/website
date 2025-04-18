import { AnimatedSection } from "@/components/animated-section";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ExperiencePage() {
  return (
    <div className="container max-w-4xl py-12 md:py-24">
      <AnimatedSection className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter">Experience</h1>
        <p className="text-xl text-muted-foreground">
          My professional journey and career highlights
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.1} className="mt-12 space-y-8">
        <Card>
          <CardHeader>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
              <div>
                <CardTitle>Senior Full-Stack Developer</CardTitle>
                <CardDescription>Company Name</CardDescription>
              </div>
              <Badge variant="outline" className="w-fit">
                2021 - Present
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Leading development of modern web applications using Next.js,
              Express.js, and TypeScript. Implementing best practices for
              performance and scalability.
            </p>
            <div>
              <h4 className="font-medium mb-2">Key Responsibilities:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Architected and developed full-stack applications using
                  Next.js and Express.js
                </li>
                <li>
                  Led a team of 5 developers, providing technical guidance and
                  code reviews
                </li>
                <li>
                  Implemented CI/CD pipelines to streamline deployment processes
                </li>
                <li>
                  Optimized application performance and improved loading times
                  by 40%
                </li>
                <li>
                  Collaborated with product managers to define and prioritize
                  features
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Next.js</Badge>
                <Badge variant="secondary">Express.js</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">MongoDB</Badge>
                <Badge variant="secondary">PostgreSQL</Badge>
                <Badge variant="secondary">Docker</Badge>
                <Badge variant="secondary">AWS</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
              <div>
                <CardTitle>Full-Stack Developer</CardTitle>
                <CardDescription>Previous Company</CardDescription>
              </div>
              <Badge variant="outline" className="w-fit">
                2018 - 2021
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Developed and maintained web applications using React and Node.js.
              Collaborated with cross-functional teams to deliver high-quality
              software solutions.
            </p>
            <div>
              <h4 className="font-medium mb-2">Key Responsibilities:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Built responsive user interfaces with React and Redux</li>
                <li>Developed RESTful APIs using Node.js and Express</li>
                <li>Implemented authentication and authorization systems</li>
                <li>Wrote unit and integration tests to ensure code quality</li>
                <li>Participated in agile development processes</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">Redux</Badge>
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">Express</Badge>
                <Badge variant="secondary">JavaScript</Badge>
                <Badge variant="secondary">MySQL</Badge>
                <Badge variant="secondary">Jest</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
              <div>
                <CardTitle>Frontend Developer</CardTitle>
                <CardDescription>First Company</CardDescription>
              </div>
              <Badge variant="outline" className="w-fit">
                2016 - 2018
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Built responsive user interfaces using HTML, CSS, and JavaScript.
              Worked closely with designers to implement pixel-perfect designs.
            </p>
            <div>
              <h4 className="font-medium mb-2">Key Responsibilities:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Developed responsive web pages using HTML5, CSS3, and
                  JavaScript
                </li>
                <li>Implemented designs from Figma and Adobe XD</li>
                <li>Optimized websites for cross-browser compatibility</li>
                <li>Created interactive UI components and animations</li>
                <li>Collaborated with backend developers to integrate APIs</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">HTML5</Badge>
                <Badge variant="secondary">CSS3</Badge>
                <Badge variant="secondary">JavaScript</Badge>
                <Badge variant="secondary">jQuery</Badge>
                <Badge variant="secondary">SASS</Badge>
                <Badge variant="secondary">Bootstrap</Badge>
                <Badge variant="secondary">Git</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>
    </div>
  );
}
