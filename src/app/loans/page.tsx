import type { Metadata } from 'next';
import LoansHero from '@/components/heroes/LoansHero';
import LoansContent from './LoansContent';

export const metadata: Metadata = {
  title: 'All Types of Loans - Home, Car, Bike, Personal & Business | SM',
  description: 'Compare all types of loans: Home loans, Car loans, Bike loans, Personal loans, Business loans. Understand features, interest rates, eligibility. Choose the perfect financing solution.',
  keywords: 'types of loans, loan comparison, personal finance, financial solutions, different loans, best loans',
  alternates: {
    canonical: 'https://smassociate.com/loans',
  },
  openGraph: {
    title: 'Loan Types - Find Your Perfect Financing',
    description: 'Compare all loan types and find the right financial solution for your needs',
    url: 'https://smassociate.com/loans',
    type: 'website',
    images: [
      {
        url: 'https://smassociate.com/og-loans.jpg',
        width: 1200,
        height: 630,
        alt: 'Loan Types from SM Associate',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Loan Types - Find Your Perfect Financing',
    description: 'Compare all loan types and find the right financial solution for your needs',
    images: ['https://smassociate.com/og-loans.jpg'],
  },
};

export default function LoansPage() {
  return (
    <>
      <LoansHero />
      <LoansContent />
    </>
  );
}
