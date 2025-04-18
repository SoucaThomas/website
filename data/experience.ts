import type { Experience } from "@/lib/data";

const experienceData: Experience[] = [
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

export default experienceData;
