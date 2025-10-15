import type { Experience } from '@/lib/data';

const experienceData: Experience[] = [
  {
    title: 'Founder & Developer',
    company: 'Krumb - Personal Project',
    period: '2025 – Present',
    description:
      'Building a social cooking app where users share short recipe videos, and the app automatically generates step-by-step instructions using AI.',
    responsibilities: [
      'Designed the full product experience using React Native (Expo) and Node.js, with a NestJS backend and Prisma for database management',
      'Implemented user authentication, video upload pipeline, and AI-based step extraction',
      'Reached 200+ early user sign-ups prior to launch',
      'Preparing for public beta release in late 2025',
    ],
    technologies: [
      'React Native',
      'Expo',
      'Node.js',
      'NestJS',
      'Prisma',
      'TypeScript',
      'PostgreSQL',
    ],
  },
  {
    title: 'Founding Engineer',
    company: 'Wavelink',
    period: 'Apr 2025 – Present',
    description:
      "Built core features for the company's MVP, contributing directly to early product-market fit.",
    responsibilities: [
      'Developed and maintained the full-stack application using ReactJS and NestJS (migrated backend from Go to NestJS)',
      'Designed and implemented a new feature that generated $1K USD MRR, significantly improving revenue growth',
      'Collaborated with product and design teams to refine user experience and improve mobile performance',
      "Currently leading a major upgrade that will power ~30% of the app's core functionality",
      'Improved system performance and reliability through efficient API design and front-end optimizations',
    ],
    technologies: ['ReactJS', 'NestJS', 'TypeScript', 'PostgreSQL', 'Docker', 'AWS', 'REST APIs'],
  },
  {
    title: 'Web Developer',
    company: 'RentE',
    period: 'Jan 2024 – Aug 2024',
    description:
      'Built responsive user interfaces using Angular. Gained experience in frontend and backend development.',
    responsibilities: [
      'Developed responsive web pages using Angular',
      'Created interactive UI components with Angular Material',
      'Integrated RESTful APIs for data retrieval and manipulation',
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
