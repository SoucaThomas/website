"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const experiences = [
  {
    title: "Senior Full-Stack Developer",
    company: "Company Name",
    period: "2021 - Present",
    description:
      "Leading development of modern web applications using Next.js, Express.js, and TypeScript. Implementing best practices for performance and scalability.",
    responsibilities: [
      "Architected and developed full-stack applications using Next.js and Express.js",
      "Led a team of 5 developers, providing technical guidance and code reviews",
      "Implemented CI/CD pipelines to streamline deployment processes",
      "Optimized application performance and improved loading times by 40%",
      "Collaborated with product managers to define and prioritize features",
    ],
    technologies: [
      "Next.js",
      "Express.js",
      "TypeScript",
      "MongoDB",
      "PostgreSQL",
      "Docker",
      "AWS",
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "Previous Company",
    period: "2018 - 2021",
    description:
      "Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions.",
    responsibilities: [
      "Built responsive user interfaces with React and Redux",
      "Developed RESTful APIs using Node.js and Express",
      "Implemented authentication and authorization systems",
      "Wrote unit and integration tests to ensure code quality",
      "Participated in agile development processes",
    ],
    technologies: [
      "React",
      "Redux",
      "Node.js",
      "Express",
      "JavaScript",
      "MySQL",
      "Jest",
    ],
  },
  {
    title: "Frontend Developer",
    company: "First Company",
    period: "2016 - 2018",
    description:
      "Built responsive user interfaces using HTML, CSS, and JavaScript. Worked closely with designers to implement pixel-perfect designs.",
    responsibilities: [
      "Developed responsive web pages using HTML5, CSS3, and JavaScript",
      "Implemented designs from Figma and Adobe XD",
      "Optimized websites for cross-browser compatibility",
      "Created interactive UI components and animations",
      "Collaborated with backend developers to integrate APIs",
    ],
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "jQuery",
      "SASS",
      "Bootstrap",
      "Git",
    ],
  },
];

export function ExperienceSection() {
  return (
    <Section>
      <h2 className="section-title">Experience</h2>
      <p className="section-subtitle mx-auto text-center">
        My professional journey and career highlights
      </p>

      <div className="space-y-8 mt-12">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} index={index} />
        ))}
      </div>
    </Section>
  );
}

function ExperienceCard({
  experience,
  index,
}: {
  experience: any;
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
              {experience.responsibilities.map(
                (responsibility: string, i: number) => (
                  <li key={i}>{responsibility}</li>
                ),
              )}
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Technologies Used:</h4>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech: string) => (
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
