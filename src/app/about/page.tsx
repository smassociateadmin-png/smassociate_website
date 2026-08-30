import type { Metadata } from 'next';
import AboutHero from '@/components/heroes/AboutHero';
import AboutContent from './AboutContent';

export const metadata: Metadata = {
  title: 'About SM Associate | Building Financial Freedom Since 2018',
  description: 'Since 2018, SM Associate has helped 10,000+ customers access affordable credit. Discover our story, milestones, core values & $500M+ loans disbursed.',
  keywords: 'SM Associate about us, finance company history India, trusted loan provider story, SM Associate company profile, finance and mobility company Tirunelveli',
  alternates: {
    canonical: 'https://www.smassociate.in/about',
  },
  openGraph: {
    title: 'About SM Associate',
    description: 'Your trusted partner for finance and mobility solutions',
    url: 'https://www.smassociate.in/about',
    type: 'website',
    images: [
      {
        url: 'https://smassociate.com/og-about.jpg',
        width: 1200,
        height: 630,
        alt: 'About SM Associate',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About SM Associate',
    description: 'Your trusted partner for finance and mobility solutions',
    images: ['https://smassociate.com/og-about.jpg'],
  },
};

export default function AboutPage() {
  return (
    <div className="w-full overflow-x-hidden">
      <AboutHero />
      <AboutContent />
    </div>
  );
}
