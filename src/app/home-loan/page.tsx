import type { Metadata } from 'next';
import HomeLoanHero from '@/components/heroes/HomeLoanHero';
import HomeLoanContent from './HomeLoanContent';

export const metadata: Metadata = {
  title: 'Home Loan in Tirunelveli | Rates From 6.5% p.a. – SM Associate',
  description: 'Apply for a home loan with SM Associate — rates from 6.5% p.a., tenure up to 30 years, quick approval in 24-48 hours & up to ₹1.5L tax benefit. Apply online today.',
  keywords: 'home loan interest rates, home loan online apply, affordable housing loan India, home loan eligibility calculator, low interest home loan Tamil Nadu',
  alternates: {
    canonical: 'https://www.smassociate.in/home-loan',
  },
  openGraph: {
    title: 'Home Loans - Affordable Housing Finance from 6.5%',
    description: 'Build your dream home with flexible financing and competitive interest rates',
    url: 'https://www.smassociate.in/home-loan',
    type: 'website',
    images: [
      {
        url: 'https://smassociate.com/og-home-loan.jpg',
        width: 1200,
        height: 630,
        alt: 'Home Loans from SM Associate',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home Loans - Affordable Housing Finance from 6.5%',
    description: 'Build your dream home with flexible financing and competitive interest rates',
    images: ['https://smassociate.com/og-home-loan.jpg'],
  },
};

export default function HomeLoanPage() {
  return (
    <>
      <HomeLoanHero />
      <HomeLoanContent />
    </>
  );
}
