import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'FEMOG — Find Engineering Masters on GitHub',
  description:
    'A curated dark-mode directory of exceptional software engineers, AI researchers, and open source contributors on GitHub. Filter by role and discover who to follow.',
  keywords: [
    'github',
    'engineers',
    'developers',
    'AI',
    'machine learning',
    'frontend',
    'backend',
    'fullstack',
    'devops',
    'open source',
    'who to follow',
    'github profiles',
  ],
  authors: [
    { name: 'Eduardo J. Barrios', url: 'https://github.com/edujbarrios' },
  ],
  creator: 'Eduardo J. Barrios',
  openGraph: {
    title: 'FEMOG — Find Engineering Masters on GitHub',
    description:
      'Discover exceptional engineers and researchers on GitHub, curated by engineering discipline.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FEMOG — Find Engineering Masters on GitHub',
    description:
      'Curated directory of exceptional GitHub engineers by role: AI, backend, frontend, DevOps, and more.',
    creator: '@edujbarrios',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans bg-[#080e0d] text-white antialiased`}
        suppressHydrationWarning
      >
        <Header />
        <div className="min-h-[calc(100dvh-4rem)]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
