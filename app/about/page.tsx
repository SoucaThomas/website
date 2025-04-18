import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="container max-w-4xl py-12 md:py-24">
      <AnimatedSection className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter">About Me</h1>
        <p className="text-xl text-muted-foreground">
          Get to know more about my background and expertise
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.1} className="mt-12 space-y-6">
        <p className="text-lg">
          Hello! I'm Souca Thomas, a passionate full-stack developer with
          expertise in building modern web applications using Next.js and
          Express.js. I specialize in creating responsive, performant, and
          user-friendly applications that solve real-world problems.
        </p>

        <p className="text-lg">
          With a strong foundation in JavaScript and TypeScript, I enjoy working
          across the entire stack, from designing intuitive user interfaces to
          implementing robust backend systems. My approach to development
          focuses on writing clean, maintainable code that delivers exceptional
          user experiences.
        </p>

        <p className="text-lg">
          When I'm not coding, I'm constantly learning about new technologies
          and best practices to stay at the forefront of web development. I
          believe in the power of open-source and regularly contribute to the
          developer community through GitHub projects and knowledge sharing.
        </p>

        <div className="pt-4">
          <Button asChild>
            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <FileDown className="mr-2 h-4 w-4" /> Download Resume
            </Link>
          </Button>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.2} className="mt-16">
        <h2 className="text-2xl font-bold tracking-tight mb-6">My Journey</h2>

        <div className="space-y-8">
          <div className="relative pl-8 border-l border-muted pb-8">
            <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-1"></div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">
                Senior Full-Stack Developer
              </h3>
              <p className="text-muted-foreground">
                Company Name • 2021 - Present
              </p>
              <p>
                Leading development of modern web applications using Next.js,
                Express.js, and TypeScript. Implementing best practices for
                performance and scalability.
              </p>
            </div>
          </div>

          <div className="relative pl-8 border-l border-muted pb-8">
            <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-1"></div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Full-Stack Developer</h3>
              <p className="text-muted-foreground">
                Previous Company • 2018 - 2021
              </p>
              <p>
                Developed and maintained web applications using React and
                Node.js. Collaborated with cross-functional teams to deliver
                high-quality software solutions.
              </p>
            </div>
          </div>

          <div className="relative pl-8 border-l border-muted">
            <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-1"></div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Frontend Developer</h3>
              <p className="text-muted-foreground">
                First Company • 2016 - 2018
              </p>
              <p>
                Built responsive user interfaces using HTML, CSS, and
                JavaScript. Worked closely with designers to implement
                pixel-perfect designs.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
