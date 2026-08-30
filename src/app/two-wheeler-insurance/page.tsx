import type { Metadata } from 'next';
import TwoWheelerInsuranceHero from '@/components/heroes/TwoWheelerInsuranceHero';
import TwoWheelerInsuranceContent from './TwoWheelerInsuranceContent';

export const metadata: Metadata = {
  title: 'Two Wheeler Insurance Online | Save Up to 85% – SM Associate',
  description: 'Get instant bike insurance online in 60 seconds. Comprehensive Bike Shield cover with zero depreciation, 5,000+ cashless garages & 24x7 roadside help from ₹482/year.',
  keywords: 'bike insurance online, two wheeler insurance renewal, comprehensive bike insurance, zero depreciation bike insurance, cashless bike insurance claim',
  alternates: {
    canonical: 'https://www.smassociate.in/two-wheeler-insurance',
  },
  openGraph: {
    title: 'Two Wheeler Insurance Online',
    description: 'Complete bike insurance protection with fast digital policies and cashless claims',
    url: 'https://www.smassociate.in/two-wheeler-insurance',
    type: 'website',
    images: [
      {
        url: 'https://smassociate.com/og-bike-loan.jpg',
        width: 1200,
        height: 630,
        alt: 'Two Wheeler Insurance Online - SM Associate',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Two Wheeler Insurance Online | SM Associate',
    description: 'Complete bike insurance protection with fast digital policies and cashless claims',
    images: ['https://smassociate.com/og-bike-loan.jpg'],
  },
};

export default function TwoWheelerInsurancePage() {
  return (
    <>
      <TwoWheelerInsuranceHero />
      <TwoWheelerInsuranceContent />
    </>
  );
}
