import type React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import { PostHogProvider } from '@/components/PostHogProvider';

export const metadata: Metadata = {
  metadataBase: new URL('https://souca.dev'),
  title: {
    default: 'Souca Thomas — Full-Stack Developer & Co-Founder',
    template: '%s — Souca Thomas',
  },
  description:
    'Souca Thomas is a full-stack developer and co-founder of TSC based in Romania, building marketplace products, consumer apps, and embedded systems with React, React Native, TypeScript, and C++.',
  keywords: [
    'Souca Thomas',
    'Thomas Souca',
    'souca.dev',
    'Full-Stack Developer',
    'Co-Founder',
    'TSC',
    'Krumb',
    'React Developer',
    'React Native Developer',
    'TypeScript Developer',
    'Swift Developer',
    'NestJS Developer',
    'Embedded Developer',
    'STM32',
    'FreeRTOS',
    'UAV Flight Controller',
    'Mobile Developer',
    'AI Developer',
    'Romania',
    'Web Development',
    'Mobile Development',
  ],
  authors: [{ name: 'Souca Thomas', url: 'https://souca.dev' }],
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
    title: 'Souca Thomas — Full-Stack Developer & Co-Founder',
    description:
      'Souca Thomas is a full-stack developer and co-founder of TSC, building marketplace products, consumer apps, and embedded systems.',
    siteName: 'Souca Thomas',
    images: [
      {
        url: '/memoji.png',
        width: 1200,
        height: 630,
        alt: 'Souca Thomas — Full-Stack Developer & Co-Founder',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Souca Thomas — Full-Stack Developer & Co-Founder',
    description:
      'Full-stack developer and co-founder of TSC, building marketplace products, consumer apps, and embedded systems.',
    images: ['/memoji.png'],
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
        <meta name="theme-color" content="#faf9f7" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&family=Manrope:wght@300..800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'Person',
                name: 'Souca Thomas',
                alternateName: 'Thomas Souca',
                jobTitle: 'Full-Stack Developer & Co-Founder',
                description:
                  'Souca Thomas is a full-stack developer and co-founder of TSC based in Romania, building marketplace products, consumer apps, and embedded flight controllers.',
                url: 'https://souca.dev',
                image: 'https://souca.dev/memoji.png',
                email: 'thomassouca@gmail.com',
                sameAs: [
                  'https://github.com/SoucaThomas',
                ],
                knowsAbout: [
                  'React',
                  'React Native',
                  'Next.js',
                  'TypeScript',
                  'NestJS',
                  'Swift',
                  'C++',
                  'STM32',
                  'FreeRTOS',
                  'Embedded Systems',
                  'Flight Controllers',
                  'AI Integration',
                  'Full-Stack Development',
                  'Mobile Development',
                ],
                worksFor: {
                  '@type': 'Organization',
                  name: 'TSC',
                },
                address: {
                  '@type': 'PostalAddress',
                  addressCountry: 'Romania',
                },
              },
              {
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                name: 'Souca Thomas',
                url: 'https://souca.dev',
                author: {
                  '@type': 'Person',
                  name: 'Souca Thomas',
                },
              },
            ]),
          }}
        />
      </head>
      <body>
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  );
}
