import type { Metadata } from 'next';
import BikeLoanHero from '@/components/heroes/BikeLoanHero';
import BikeLoanContent from './BikeLoanContent';

export const metadata: Metadata = {
  title: 'Bike Loan – Ride Your Perfect Bike | 24-48 Hr Approval – SM Associate',
  description: 'Hassle-free two-wheeler loans for new & used bikes. Instant approval in 24-48 hours, minimal documentation & flexible EMIs. Ride today, pay later with SM Associate.',
  keywords: 'two wheeler loan, bike finance India, instant bike loan approval, used bike loan Tamil Nadu, motorcycle loan online apply',
  alternates: {
    canonical: 'https://www.smassociate.in/bike-loan',
  },
  openGraph: {
    title: 'Bike Loans - Quick 2-Wheeler Finance',
    description: 'Fast bike loan approval with competitive interest rates and minimal documentation',
    url: 'https://www.smassociate.in/bike-loan',
    type: 'website',
    images: [
      {
        url: 'https://smassociate.com/og-bike-loan.jpg',
        width: 1200,
        height: 630,
        alt: 'Bike Loans from SM Associate',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bike Loans - Quick 2-Wheeler Finance',
    description: 'Fast bike loan approval with competitive interest rates and minimal documentation',
    images: ['https://smassociate.com/og-bike-loan.jpg'],
  },
};

export default function BikeLoanPage() {
  return (
    <>
      <BikeLoanHero />
      <BikeLoanContent />
    </>
  );
}
