import type { Experience } from '@/lib/data';

const experienceData: Experience[] = [
  {
    title: 'Full-Stack Developer',
    company: 'WaveLink',
    period: 'Apr 2025 - Present',
    description:
      "Contributed to the development of the company's MVP, focusing on product details and mobile experience.",
    responsibilities: [
      'Developed a full-stack application using ReactJS and Go',
      'Optimized application performance.',
      'Collaborated with product managers to define and prioritize features',
      'Worked closely with designers to implement user-friendly interfaces',
      'Contributed to the development of RESTful APIs for data retrieval and manipulation',
    ],
    technologies: ['ReactJS', 'Go', 'TypeScript', 'PostgreSQL', 'Docker', 'AWS'],
  },
  {
    title: 'Junior Web Developer',
    company: 'RentE',
    period: 'Jan 2024 - Aug 2024',
    description:
      'Built responsive user interfaces using Angular. Gained experience in frontend and backend development.',
    responsibilities: [
      'Developed responsive web pages using Angular',
      'Created interactive UI components with Angular Material',
      'Integrated RESTful APIs for data retrieval and manipulation',
      'Participated in code reviews',
      'Learned about responsive design principles and implemented them in projects',
      'Learned about deployment processes and tools for web applications',
    ],
    technologies: [
      'Angular',
      'TypeScript',
      'HTML5',
      'CSS3',
      'SASS',
      'Git',
      'MongoDB',
      'Node.js',
      'Express',
    ],
  },
];

export default experienceData;
