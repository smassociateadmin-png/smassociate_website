import type { Metadata } from 'next';
import PersonalLoanHero from '@/components/heroes/PersonalLoanHero';
import PersonalLoanContent from './PersonalLoanContent';

export const metadata: Metadata = {
  title: 'Instant Personal Loan Up To ₹5 Lakhs | 100% Digital – SM Associate',
  description: 'Get instant personal loans up to ₹5,00,000 with no collateral. 100% digital process, approval in under 5 minutes. Apply for an emergency or personal loan today.',
  keywords: 'personal loan online, instant personal loan approval, no collateral personal loan, emergency micro loan, personal loan for salaried and self employed',
  alternates: {
    canonical: 'https://www.smassociate.in/personal-loan',
  },
  openGraph: {
    title: 'Personal Loans - Instant Approval',
    description: 'Get unsecured personal loans up to ₹25 lakhs with instant approval and flexible terms',
    url: 'https://www.smassociate.in/personal-loan',
    type: 'website',
    images: [
      {
        url: 'https://smassociate.com/og-personal-loan.jpg',
        width: 1200,
        height: 630,
        alt: 'Personal Loans from SM Associate',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Personal Loans - Instant Approval',
    description: 'Get unsecured personal loans up to ₹25 lakhs with instant approval and flexible terms',
    images: ['https://smassociate.com/og-personal-loan.jpg'],
  },
};

export default function PersonalLoanPage() {
  return (
    <>
      <PersonalLoanHero />
      <PersonalLoanContent />
    </>
  );
}
