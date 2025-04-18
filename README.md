# Souca Thomas Portfolio

A modern, minimalist, dark-mode single-page developer portfolio website built with Next.js, Tailwind CSS, and Framer Motion.

![Portfolio Preview](public/portfolio-preview.png)

## 🚀 Features

- **Single-Page Application**: Smooth scrolling between sections with no page reloads
- **Responsive Design**: Fully responsive layout for mobile, tablet, and desktop devices
- **Dark Mode**: Clean, minimalist dark theme aesthetic
- **Framer Motion Animations**: Subtle animations for enhanced user experience
- **Sticky Navigation**: Navbar with active section highlighting
- **GitHub Integration**: Showcases projects from GitHub profile
- **Contact Form**: Integrated contact form with EmailJS
- **Downloadable Resume**: Option to download resume as PDF

## 📋 Sections

- **Hero**: Name, tagline, and stylized logo
- **About**: Professional bio highlighting expertise
- **Projects**: Grid layout of GitHub projects with details
- **Experience**: Timeline of professional experience
- **Technologies**: Horizontal carousel of tech stack
- **Contact**: Form and contact information
- **Resume**: Download option for resume

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Lucide React](https://lucide.dev/) - Icons
- [EmailJS](https://www.emailjs.com/) - Contact form functionality

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/SoucaThomas/portfolio.git
   cd portfolio
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install

   # or

   yarn install
   \`\`\`

3. Run the development server:
   \`\`\`bash
   npm run dev

   # or

   yarn dev
   \`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📝 Customization

### Personal Information

Update your personal information in the respective component files:

- `components/hero-section.tsx` - Name and tagline
- `components/about-section.tsx` - Bio information
- `components/experience-section.tsx` - Work experience
- `components/contact-section.tsx` - Contact details

### Projects

The project data is fetched from GitHub in `lib/github.ts`. In a production environment, you would replace the mock data with actual GitHub API calls.

### Resume

Replace the placeholder resume file at `public/resume.pdf` with your actual resume.

## 📱 Responsive Design

The portfolio is designed to be fully responsive across all device sizes:

- Mobile: 320px and up
- Tablet: 768px and up
- Desktop: 1024px and up

## 🎨 Styling

The site uses Tailwind CSS for styling with a custom dark theme. The theme configuration can be found in:

- `app/globals.css` - Base styles and theme variables
- `tailwind.config.ts` - Tailwind configuration

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [shadcn/ui](https://ui.shadcn.com/)

---

Built with ❤️ by Souca Thomas
