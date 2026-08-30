import type { Metadata } from 'next';
import BusinessLoanHero from '@/components/heroes/BusinessLoanHero';
import BusinessLoanContent from './BusinessLoanContent';

export const metadata: Metadata = {
  title: 'Business Loan Up To $500K | Flexible Terms – SM Associate',
  description: 'Scale your business faster with SM Associate business loans up to $500K. Flexible terms for established businesses across retail, services, tech & more industries.',
  keywords: 'business loan online, SME business finance, working capital loan, small business loan India, business growth financing',
  alternates: {
    canonical: 'https://www.smassociate.in/business-loan',
  },
  openGraph: {
    title: 'Business Loans - Expansion & Working Capital',
    description: 'Financing solutions for business expansion and working capital needs',
    url: 'https://www.smassociate.in/business-loan',
    type: 'website',
    images: [
      {
        url: 'https://smassociate.com/og-business-loan.jpg',
        width: 1200,
        height: 630,
        alt: 'Business Loans from SM Associate',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Loans - Expansion & Working Capital',
    description: 'Financing solutions for business expansion and working capital needs',
    images: ['https://smassociate.com/og-business-loan.jpg'],
  },
};

export default function BusinessLoanPage() {
  return (
    <div>
      <BusinessLoanHero />
      <BusinessLoanContent />
    </div>
  );
}
