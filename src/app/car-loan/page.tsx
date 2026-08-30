import type { Metadata } from 'next';
import CarLoanHero from '@/components/heroes/CarLoanHero';
import CarLoanContent from './CarLoanContent';

export const metadata: Metadata = {
  title: 'Car Loan Online | Instant Approval & Low Interest – SM Associate',
  description: 'Get instant car loan approval with SM Associate. Competitive rates, flexible tenure & fast disbursement for new and used cars. Apply for your car loan today.',
  keywords: 'car loan interest rate, new car loan, used car loan finance, car loan EMI calculator, car finance company Tamil Nadu',
  alternates: {
    canonical: 'https://www.smassociate.in/car-loan',
  },
  openGraph: {
    title: 'Car Loans - Easy Auto Finance from 7.2%',
    description: 'Quick car loan approval with competitive interest rates and minimal documentation',
    url: 'https://www.smassociate.in/car-loan',
    type: 'website',
    images: [
      {
        url: 'https://smassociate.com/og-car-loan.jpg',
        width: 1200,
        height: 630,
        alt: 'Car Loans from SM Associate',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Car Loans - Easy Auto Finance from 7.2%',
    description: 'Quick car loan approval with competitive interest rates and minimal documentation',
    images: ['https://smassociate.com/og-car-loan.jpg'],
  },
};

export default function CarLoanPage() {
  return (
    <>
      <CarLoanHero />
      <CarLoanContent />
    </>
  );
}
