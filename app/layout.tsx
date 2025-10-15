import type React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { PostHogProvider } from '@/components/PostHogProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Souca Thomas - Full-Stack Developer & Founding Engineer',
  description:
    'Full-Stack Developer and Founding Engineer specializing in React, React Native, NestJS, and AI-powered applications. Building innovative solutions at Wavelink and Krumb.',
  keywords: [
    'Full-Stack Developer',
    'Founding Engineer',
    'React Developer',
    'React Native Developer',
    'NestJS Developer',
    'AI Developer',
    'Mobile Developer',
    'TypeScript Developer',
    'Portfolio',
    'Romania',
    'Web Development',
    'Mobile Development',
    'AI Integration',
  ],
  authors: [{ name: 'Souca Thomas' }],
  creator: 'Souca Thomas',
  publisher: 'Souca Thomas',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://souca.dev',
    title: 'Souca Thomas - Full-Stack Developer & Founding Engineer',
    description:
      'Full-Stack Developer and Founding Engineer specializing in React, React Native, NestJS, and AI-powered applications.',
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
    title: 'Souca Thomas - Full-Stack Developer & Founding Engineer',
    description:
      'Full-Stack Developer and Founding Engineer specializing in React, React Native, NestJS, and AI-powered applications.',
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
              jobTitle: 'Full-Stack Developer & Founding Engineer',
              description:
                'Full-Stack Developer and Founding Engineer specializing in React, React Native, NestJS, and AI-powered applications',
              url: 'https://souca.dev',
              image: 'https://souca.dev/memoji.png',
              sameAs: ['https://github.com/SoucaThomas'],
              knowsAbout: [
                'React',
                'React Native',
                'NestJS',
                'TypeScript',
                'JavaScript',
                'AI Integration',
                'Mobile Development',
                'Full-Stack Development',
              ],
              worksFor: {
                '@type': 'Organization',
                name: 'Wavelink',
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
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <PostHogProvider>{children}</PostHogProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
