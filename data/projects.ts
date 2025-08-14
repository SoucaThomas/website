import type { Project } from '@/lib/github';

const projectsData: Project[] = [
  {
    id: 1,
    name: 'Next.js Portfolio',
    description:
      'A portfolio website showcasing personal projects, built with Next.js and Tailwind CSS.',
    html_url: 'https://github.com/SoucaThomas/website',
    homepage: 'https://souca.dev',
    topics: ['next.js', 'tailwindcss', 'typescript', 'portfolio'],
    image: '/portfolio.png',
  },
  {
    id: 2,
    name: 'Wish',
    description:
      'A MVP built for a samsung competition, allowing users to create short stories for their kids with learning disabilities using ai.',
    html_url: 'https://github.com/SoucaThomas/wish',
    homepage: null,
    topics: ['Ai', 'Next', 'postgreSQL', 'MVP'],
    image: '/wish.png',
  },
  {
    id: 3,
    name: 'Spotify Poster Generator',
    description: 'A web app that generates Spotify posters using the Spotify API and Next.js.',
    html_url: 'https://github.com/SoucaThomas/Spotify-Poster-generator',
    homepage: 'https://album.souca.dev',
    topics: ['react', 'material-ui', 'dashboard', 'typescript'],
    image: '/album.png',
  },
  {
    id: 4,
    name: 'Sudoku Online',
    description:
      'A multiplayer Sudoku game with real-time collaboration, built with Node.js, Next and Socket.io.',
    html_url: 'https://github.com/SoucaThomas/sudoku',
    homepage: null,
    topics: ['node.js', 'express.js', 'next', 'mongodb', 'socket.io'],
    image: '/sudoku.png',
  },
  {
    id: 5,
    name: 'Car Marketplace',
    description:
      'A comprehensive car marketplace platform with product management, favorites, and admin features.',
    html_url: 'https://github.com/SoucaThomas/car-marketplace',
    homepage: 'https://carmarket.souca.dev',
    topics: ['marketplace', 'full-stack', 'next', 'postgreSQL'],
    image: '/car-market.png',
  },
  {
    id: 6,
    name: 'AI Math Notes',
    description: 'A notes app with math equation evaluation capabilities, inspired by Apple Notes.',
    html_url: 'https://github.com/SoucaThomas/ai-mathnotes',
    homepage: 'https://notes.souca.dev',
    topics: ['next.js', 'api', 'math', 'tailwindcss'],
    image: '/math.png',
  },
];

export default projectsData;
