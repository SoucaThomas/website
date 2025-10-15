import type { Project } from '@/lib/github';

const projectsData: Project[] = [
  {
    id: 1,
    name: 'Krumb - AI Cooking App',
    description:
      'A social cooking app where users share short recipe videos, and the app automatically generates step-by-step instructions using AI. Built with React Native, NestJS, and Prisma.',
    homepage: 'https://krumb.app',
    html_url: '',
    topics: ['react-native', 'expo', 'nestjs', 'prisma', 'ai', 'mobile'],
    image: '/krumb.png',
  },
  {
    id: 2,
    name: 'Next.js Portfolio',
    description:
      'A portfolio website showcasing personal projects, built with Next.js and Tailwind CSS.',
    html_url: 'https://github.com/SoucaThomas/website',
    homepage: 'https://souca.dev',
    topics: ['next.js', 'tailwindcss', 'typescript', 'portfolio'],
    image: '/portfolio.png',
  },
  {
    id: 3,
    name: 'Wish',
    description:
      'A MVP built for a samsung competition, allowing users to create short stories for their kids with learning disabilities using ai.',
    html_url: 'https://github.com/SoucaThomas/wish',
    homepage: null,
    topics: ['Ai', 'Next', 'postgreSQL', 'MVP'],
    image: '/wish.png',
  },
  {
    id: 4,
    name: 'Spotify Poster Generator',
    description: 'A web app that generates Spotify posters using the Spotify API and Next.js.',
    html_url: 'https://github.com/SoucaThomas/Spotify-Poster-generator',
    homepage: 'https://album.souca.dev',
    topics: ['react', 'material-ui', 'dashboard', 'typescript'],
    image: '/album.png',
  },
  {
    id: 5,
    name: 'Sudoku Online',
    description:
      'A multiplayer Sudoku game with real-time collaboration, built with Node.js, Next and Socket.io.',
    html_url: 'https://github.com/SoucaThomas/sudoku',
    homepage: null,
    topics: ['node.js', 'express.js', 'next', 'mongodb', 'socket.io'],
    image: '/sudoku.png',
  },
  {
    id: 6,
    name: 'Car Marketplace',
    description:
      'A comprehensive car marketplace platform with product management, favorites, and admin features.',
    html_url: 'https://github.com/SoucaThomas/car-marketplace',
    homepage: 'https://carmarket.souca.dev',
    topics: ['marketplace', 'full-stack', 'next', 'postgreSQL'],
    image: '/car-market.png',
  },
  {
    id: 7,
    name: 'AI Math Notes',
    description: 'A notes app with math equation evaluation capabilities, inspired by Apple Notes.',
    html_url: 'https://github.com/SoucaThomas/ai-mathnotes',
    homepage: 'https://notes.souca.dev',
    topics: ['next.js', 'api', 'math', 'tailwindcss'],
    image: '/math.png',
  },
];

export default projectsData;
