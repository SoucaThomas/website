import type { Project } from '@/lib/github';

const projectsData: Project[] = [
  {
    id: 1,
    name: 'Krumb',
    description:
      'An AI-powered recipe app that transforms cooking videos from YouTube, Instagram, and TikTok into structured, step-by-step recipes you can save, organize, and cook from.',
    longDescription:
      'Krumb solves a problem every home cook knows — you find an amazing recipe video on social media, but there is no easy way to actually follow it in the kitchen. Share any cooking video link and Krumb uses AI to extract the full recipe: ingredients, steps, timing, everything. Your recipes live in one place, organized and searchable. Generate shopping lists from multiple recipes, leave reviews, and explore what others are cooking. Currently in beta testing, preparing for public launch.',
    role: 'Founder & Lead Developer',
    status: 'Beta Testing',
    highlights: [
      'AI-powered recipe extraction from video content',
      'Automated shopping list generation across multiple recipes',
      'Social features: reviews, explore feed, shared collections',
      '200+ early user sign-ups before launch',
    ],
    homepage: 'https://krumb.app',
    html_url: '',
    topics: ['Swift', 'NestJS', 'Prisma', 'AI', 'PostgreSQL'],
    featured: true,
  },
  {
    id: 2,
    name: 'TSC Marketplace',
    description:
      'A two-sided marketplace connecting trusted handymen with customers. Customers post their home repair and maintenance needs as gigs, and verified handymen bid on the work.',
    longDescription:
      'TSC Marketplace brings trust and transparency to the home services industry. Homeowners post their repair or maintenance needs — from plumbing to electrical work — and qualified handymen submit competitive bids. The platform handles verification, reviews, and dispute resolution, giving customers confidence that the work will be done right and giving handymen a steady pipeline of jobs. Built as part of TSC, a company co-founded to tackle real-world marketplace problems.',
    role: 'Co-Founder & CTO',
    status: 'In Development',
    highlights: [
      'Gig-based bidding system with real-time notifications',
      'Handyman verification and trust scoring',
      'Built with TanStack Start for type-safe full-stack development',
      'Part of TSC — also behind Krumb and upcoming Flutter-based puzzle games',
    ],
    homepage: null,
    html_url: '',
    topics: ['TanStack Start', 'NestJS', 'TypeScript', 'PostgreSQL', 'Marketplace'],
    featured: true,
  },
  {
    id: 3,
    name: 'StudyPal',
    description:
      'A social study app with shared timers, leaderboards, and Spotify-style monthly recaps — turning solo studying into a competitive, engaging experience.',
    longDescription:
      'StudyPal reimagined studying as a social activity. Start a timer and study alongside friends in real-time. Compete on daily and weekly leaderboards to stay motivated. At the end of each month, get a detailed recap of your study habits — total hours, most productive days, streaks, and comparisons with friends — inspired by Spotify Wrapped. The app was acquired before its public app store launch.',
    role: 'Founder & Developer',
    status: 'Acquired',
    highlights: [
      'Real-time shared study timers with presence indicators',
      'Gamified leaderboards driving daily engagement',
      'Monthly recap system inspired by Spotify Wrapped',
      'Acquired pre-launch — validated strong market demand',
    ],
    homepage: null,
    html_url: '',
    topics: ['React Native', 'Social', 'Gamification', 'Real-time'],
    featured: true,
  },
  {
    id: 10,
    name: 'UAV Flight Controller',
    description:
      'A custom flight controller for a 1.2m MQ-9 Reaper RC plane — bare metal STM32 with FreeRTOS, custom drivers, custom radio protocol, and a ground station app.',
    longDescription:
      'Building a flight controller from scratch for a 1.2m MQ-9 Reaper RC plane. No ArduPilot, no Betaflight — bare metal STM32 with FreeRTOS, custom drivers, custom radio protocol, and a ground station app. Currently in development.',
    role: 'Solo Builder',
    status: 'In Development',
    highlights: [
      'Bare metal STM32 drivers (SPI, I2C, UART, PWM) — no HAL, no vendor libraries',
      'FreeRTOS-based firmware with sensor fusion (complementary filter, 100Hz)',
      'NRF24L01 radio link with custom 32-byte packet protocol and CRC-16',
      '9-state flight state machine with two-stage failsafe (38 unit tests)',
      'Ground station app (React + TypeScript) with live map, PS5 controller input, and OpenAIP airspace overlay',
    ],
    html_url: 'https://github.com/SoucaThomas/uav-freertos',
    homepage: null,
    topics: ['C++', 'STM32', 'FreeRTOS', 'Embedded', 'React', 'TypeScript'],
    featured: true,
  },
  {
    id: 4,
    name: 'Wish',
    description:
      'An MVP built for a Samsung competition — an AI-powered app that generates personalized short stories for children with learning disabilities.',
    longDescription:
      'Wish was created for a Samsung innovation competition focused on using AI to improve the lives of people with disabilities. A team of friends came to me with the concept, and I built the working MVP they presented live to the judges. The app uses AI to generate engaging, personalized stories tailored to each child\'s learning needs and abilities, making reading more accessible and enjoyable. The project earned a strong placement in the competition.',
    role: 'Lead Developer (MVP)',
    status: 'Competition Project',
    highlights: [
      'AI-generated personalized stories for accessibility',
      'Built and delivered a working MVP under tight deadline',
      'Presented live to Samsung competition judges',
      'Earned strong placement among competing teams',
    ],
    html_url: 'https://github.com/SoucaThomas/wish',
    homepage: null,
    topics: ['AI', 'Next.js', 'PostgreSQL', 'Accessibility', 'MVP'],
    featured: true,
  },
  {
    id: 5,
    name: 'Spotify Poster Generator',
    description:
      'A web app that connects to the Spotify API to generate custom, print-ready album and playlist posters with cover art, track listings, and label info.',
    longDescription:
      'A fun side project born from wanting physical posters of favorite albums. Connect your Spotify account, pick any album or playlist, and customize a poster layout with cover art, tracklist, label information, and colors. Export at print-ready resolution. Simple, focused, and still live.',
    role: 'Creator',
    status: 'Live',
    highlights: [
      'Spotify API integration for album and playlist data',
      'Customizable poster layouts with print-ready export',
      'Clean, focused UI for quick poster generation',
    ],
    html_url: 'https://github.com/SoucaThomas/Spotify-Poster-generator',
    homepage: 'https://album.souca.dev',
    topics: ['React', 'Spotify API', 'Next.js', 'TypeScript'],
  },
  {
    id: 6,
    name: 'Sudoku Online',
    description:
      'A multiplayer Sudoku game with real-time collaboration — built as a deep-dive into WebSocket architecture and real-time state synchronization.',
    role: 'Developer',
    status: 'Learning Project',
    html_url: 'https://github.com/SoucaThomas/sudoku',
    homepage: null,
    topics: ['Node.js', 'Socket.io', 'Next.js', 'MongoDB', 'WebSockets'],
  },
  {
    id: 7,
    name: 'Car Marketplace',
    description:
      'A full-stack car marketplace with listings, search, favorites, and admin panel — built as a diploma thesis project.',
    role: 'Developer',
    status: 'Thesis Project',
    html_url: 'https://github.com/SoucaThomas/car-marketplace',
    homepage: 'https://carmarket.souca.dev',
    topics: ['Next.js', 'PostgreSQL', 'Full-Stack', 'Marketplace'],
  },
  {
    id: 8,
    name: 'AI Math Notes',
    description:
      'A notes app with AI-powered math equation evaluation — my first exploration into integrating AI capabilities into applications.',
    role: 'Developer',
    status: 'Exploration Project',
    html_url: 'https://github.com/SoucaThomas/ai-mathnotes',
    homepage: 'https://notes.souca.dev',
    topics: ['Next.js', 'AI', 'Math', 'Tailwind CSS'],
  },
  {
    id: 9,
    name: 'Portfolio',
    description:
      'This website — a Next.js portfolio showcasing my work, built with Tailwind CSS and deployed on Vercel.',
    role: 'Developer',
    status: 'Live',
    html_url: 'https://github.com/SoucaThomas/website',
    homepage: 'https://souca.dev',
    topics: ['Next.js', 'Tailwind CSS', 'TypeScript'],
  },
];

export default projectsData;
