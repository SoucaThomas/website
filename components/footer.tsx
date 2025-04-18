import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Github, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full border-t py-6 md:py-8">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="#hero" className="flex items-center gap-2">
            <Logo size="small" />
            <span className="font-semibold">Souca Thomas</span>
          </Link>
          <p className="text-sm text-muted-foreground text-center md:text-left">
            Full-stack developer specializing in Next.js and Express.js
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/SoucaThomas"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="mailto:thomas@souca.dev"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </Link>
        </div>

        <div className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Souca Thomas. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
