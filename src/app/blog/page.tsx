import type { Metadata } from 'next';
import BlogHero from '@/components/heroes/BlogHero';
import BlogContent from './BlogContent';

export const metadata: Metadata = {
  title: 'Finance, Loans & Vehicle Blog | SM Associate News & Insights',
  description: 'Read the latest articles on finance, loans, and vehicles from SM Associate. Search and filter by category, and subscribe for financial tips & insights.',
  keywords: 'finance blog India, loan tips and insights, vehicle buying guide blog, SM Associate news, financial literacy articles',
  alternates: {
    canonical: 'https://www.smassociate.in/blog',
  },
  openGraph: {
    title: 'Financial Blog - Loan Tips & Guides',
    description: 'Expert financial insights and guides to help you make better decisions',
    url: 'https://www.smassociate.in/blog',
    type: 'website',
    images: [
      {
        url: 'https://smassociate.com/og-blog.jpg',
        width: 1200,
        height: 630,
        alt: 'SM Associate Financial Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Financial Blog - Loan Tips & Guides',
    description: 'Expert financial insights and guides to help you make better decisions',
    images: ['https://smassociate.com/og-blog.jpg'],
  },
};

export default function BlogPage() {
  return (
    <div>
      <BlogHero />
      <BlogContent />
    </div>
  );
}
