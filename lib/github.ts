export interface Project {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  topics: string[];
  image?: string;
}

export async function getGithubProjects(): Promise<Project[]> {
  try {
    // In a real implementation, this would fetch from the GitHub API
    // const response = await fetch('https://api.github.com/users/SoucaThomas/repos');
    // const data = await response.json();

    // For demo purposes, we'll return mock data
    return [
      {
        id: 1,
        name: "Next.js Portfolio",
        description:
          "A personal portfolio website built with Next.js and Tailwind CSS",
        html_url: "https://github.com/SoucaThomas/nextjs-portfolio",
        homepage: "https://souca.dev",
        topics: ["next.js", "tailwindcss", "typescript", "portfolio"],
        image: "/placeholder.svg?height=225&width=400",
      },
      {
        id: 2,
        name: "Express API Starter",
        description:
          "A starter template for building RESTful APIs with Express.js and TypeScript",
        html_url: "https://github.com/SoucaThomas/express-api-starter",
        homepage: null,
        topics: ["express.js", "typescript", "api", "rest"],
        image: "/placeholder.svg?height=225&width=400",
      },
      {
        id: 3,
        name: "React Dashboard",
        description:
          "A responsive admin dashboard built with React and Material UI",
        html_url: "https://github.com/SoucaThomas/react-dashboard",
        homepage: "https://react-dashboard-demo.vercel.app",
        topics: ["react", "material-ui", "dashboard", "typescript"],
        image: "/placeholder.svg?height=225&width=400",
      },
      {
        id: 4,
        name: "Node.js Auth Service",
        description:
          "A complete authentication service built with Node.js, Express, and JWT",
        html_url: "https://github.com/SoucaThomas/nodejs-auth-service",
        homepage: null,
        topics: ["node.js", "express.js", "authentication", "jwt"],
        image: "/placeholder.svg?height=225&width=400",
      },
      {
        id: 5,
        name: "E-commerce API",
        description:
          "A full-featured e-commerce API with product management, cart, and checkout functionality",
        html_url: "https://github.com/SoucaThomas/ecommerce-api",
        homepage: null,
        topics: ["e-commerce", "api", "node.js", "mongodb"],
        image: "/placeholder.svg?height=225&width=400",
      },
      {
        id: 6,
        name: "Weather App",
        description:
          "A weather application built with React that uses the OpenWeather API",
        html_url: "https://github.com/SoucaThomas/weather-app",
        homepage: "https://weather-app-demo.vercel.app",
        topics: ["react", "api", "weather", "tailwindcss"],
        image: "/placeholder.svg?height=225&width=400",
      },
    ];
  } catch (error) {
    console.error("Error fetching GitHub projects:", error);
    return [];
  }
}
