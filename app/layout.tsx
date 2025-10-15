import type React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { PostHogProvider } from '@/components/PostHogProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Souca Thomas - Full-Stack Developer Portfolio',
  description:
    'Full-Stack Web Developer specializing in React, Next.js, Node.js, and modern web technologies. View my projects, experience, and get in touch for collaboration opportunities.',
  keywords: [
    'Full-Stack Developer',
    'React Developer',
    'Next.js Developer',
    'Node.js Developer',
    'Web Developer',
    'Frontend Developer',
    'Backend Developer',
    'TypeScript Developer',
    'Portfolio',
    'Romania',
    'Web Development',
    'Software Development',
  ],
  authors: [{ name: 'Souca Thomas' }],
  creator: 'Souca Thomas',
  publisher: 'Souca Thomas',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://souca.dev',
    title: 'Souca Thomas - Full-Stack Developer Portfolio',
    description:
      'Full-Stack Web Developer specializing in React, Next.js, Node.js, and modern web technologies.',
    siteName: 'Souca Thomas Portfolio',
    images: [
      {
        url: '/memoji.png',
        width: 1200,
        height: 630,
        alt: 'Souca Thomas - Full-Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Souca Thomas - Full-Stack Developer Portfolio',
    description:
      'Full-Stack Web Developer specializing in React, Next.js, Node.js, and modern web technologies.',
    images: ['/memoji.png'],
  },
  alternates: {
    canonical: 'https://souca.dev',
  },
  category: 'Technology',
  classification: 'Portfolio',
  other: {
    'google-site-verification': 'your-verification-code',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/memoji.png" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Souca Thomas',
              jobTitle: 'Full-Stack Developer',
              description:
                'Full-Stack Web Developer specializing in React, Next.js, Node.js, and modern web technologies',
              url: 'https://souca.dev',
              image: 'https://souca.dev/memoji.png',
              sameAs: ['https://github.com/SoucaThomas'],
              knowsAbout: [
                'React',
                'Next.js',
                'Node.js',
                'TypeScript',
                'JavaScript',
                'Web Development',
                'Full-Stack Development',
              ],
              worksFor: {
                '@type': 'Organization',
                name: 'Freelance',
              },
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'Romania',
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <PostHogProvider>{children}</PostHogProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
