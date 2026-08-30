import type { Metadata } from 'next';
import EMICalculatorHero from '@/components/heroes/EMICalculatorHero';
import EMICalculatorContent from './EMICalculatorContent';

export const metadata: Metadata = {
  title: 'EMI Calculator Online – Calculate Loan EMI Instantly | SM Associate',
  description: 'Use SM Associate\'s free EMI calculator to instantly calculate your monthly loan installment. Adjust loan amount & tenure and apply directly with your results.',
  keywords: 'loan EMI calculator, home loan EMI calculator, car loan EMI calculator, personal loan EMI calculator, monthly installment calculator',
  alternates: {
    canonical: 'https://www.smassociate.in/emi-calculator',
  },
  openGraph: {
    title: 'EMI Calculator - Calculate Loan Payments',
    description: 'Use our free EMI calculator to calculate your monthly loan installments',
    url: 'https://www.smassociate.in/emi-calculator',
    type: 'website',
    images: [
      {
        url: 'https://smassociate.com/og-emi-calculator.jpg',
        width: 1200,
        height: 630,
        alt: 'EMI Calculator from SM Associate',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EMI Calculator - Calculate Loan Payments',
    description: 'Use our free EMI calculator to calculate your monthly loan installments',
    images: ['https://smassociate.com/og-emi-calculator.jpg'],
  },
};

export default function EMICalculatorPage() {
  return (
    <>
      <EMICalculatorHero />
      <EMICalculatorContent />
    </>
  );
}
