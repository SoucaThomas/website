import type React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { PostHogProvider } from '@/components/PostHogProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Souca Thomas - Full-Stack Developer & Co-Founder',
  description:
    'Full-Stack Developer and Co-Founder of TSC, building marketplace products and consumer apps with React, React Native, Swift, and AI-powered solutions.',
  keywords: [
    'Full-Stack Developer',
    'Co-Founder',
    'React Developer',
    'React Native Developer',
    'Swift Developer',
    'Flutter Developer',
    'NestJS Developer',
    'AI Developer',
    'Mobile Developer',
    'TypeScript Developer',
    'TanStack',
    'Portfolio',
    'Romania',
    'Web Development',
    'Mobile Development',
    'AI Integration',
    'Marketplace',
  ],
  authors: [{ name: 'Souca Thomas' }],
  creator: 'Souca Thomas',
  publisher: 'Souca Thomas',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://souca.dev',
    title: 'Souca Thomas - Full-Stack Developer & Co-Founder',
    description:
      'Full-Stack Developer and Co-Founder of TSC, building marketplace products and consumer apps with React, React Native, Swift, and AI-powered solutions.',
    siteName: 'Souca Thomas Portfolio',
    images: [
      {
        url: 'https://souca.dev/memoji.png',
        width: 1200,
        height: 630,
        alt: 'Souca Thomas - Full-Stack Developer & Co-Founder',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Souca Thomas - Full-Stack Developer & Co-Founder',
    description:
      'Full-Stack Developer and Co-Founder of TSC, building marketplace products and consumer apps with React, React Native, Swift, and AI-powered solutions.',
    images: ['https://souca.dev/memoji.png'],
  },
  alternates: {
    canonical: 'https://souca.dev',
  },
  category: 'Technology',
  classification: 'Portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/memoji.png" />
        <link rel="apple-touch-icon" href="/memoji.png" />
        <meta name="theme-color" content="#ffffff" />

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Souca Thomas',
              jobTitle: 'Full-Stack Developer & Co-Founder',
              description:
                'Full-Stack Developer and Co-Founder of TSC, building marketplace products and consumer apps with React, React Native, Swift, and AI-powered solutions.',
              url: 'https://souca.dev',
              image: 'https://souca.dev/memoji.png',
              sameAs: ['https://github.com/SoucaThomas'],
              knowsAbout: [
                'React',
                'React Native',
                'Swift',
                'Flutter',
                'NestJS',
                'TanStack',
                'TypeScript',
                'JavaScript',
                'AI Integration',
                'Mobile Development',
                'Full-Stack Development',
                'Marketplace Development',
              ],
              worksFor: {
                '@type': 'Organization',
                name: 'TSC',
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
