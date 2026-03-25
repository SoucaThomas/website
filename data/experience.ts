import type { Experience } from '@/lib/data';

const experienceData: Experience[] = [
  {
    title: 'Co-Founder & CTO',
    company: 'TSC',
    period: '2025 – Present',
    description:
      'Co-founded a technology company building marketplace products and consumer apps. Leading all technical decisions, architecture, and development across multiple products including Krumb, a handyman marketplace, and upcoming puzzle games.',
    responsibilities: [
      'Architecting and building the TSC Marketplace — a two-sided platform connecting handymen with customers through a gig-based bidding system',
      'Leading development of Krumb, an AI-powered recipe app currently in beta testing with 200+ early sign-ups',
      'Designing the technical roadmap for upcoming puzzle game products',
      'Making all technology choices: TanStack Start, NestJS, Swift, Flutter, PostgreSQL',
    ],
    technologies: [
      'TanStack Start',
      'Swift',
      'Flutter',
      'NestJS',
      'TypeScript',
      'PostgreSQL',
      'Prisma',
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
      "Led a major upgrade that powers ~30% of the app's core functionality",
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
