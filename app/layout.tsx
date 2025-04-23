import type React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { SetupEmailJS } from '@/components/setup-emailjs';
import { Toaster } from '@/components/ui/toaster';
import { Analytics } from '@/components/analytics';
import { PostHogProvider } from '@/components/PostHogProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Souca Thomas | Full-Stack Developer',
  description:
    'Personal portfolio of Souca Thomas, a Full-Stack Web Developer focused on crafting seamless user experiences with Next.js & Express.',
  generator: 'v0.dev',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background text-foreground`}>
        <PostHogProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            disableTransitionOnChange
          >
            <SetupEmailJS />
            <Toaster />
            {children}
          </ThemeProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}
