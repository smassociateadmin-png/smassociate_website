import type { Metadata } from 'next';
import CarResaleHero from '@/components/heroes/CarResaleHero';
import CarResaleContent from './CarResaleContent';

export const metadata: Metadata = {
  title: 'Sell Your Car or Bike Online | Instant Valuation – SM Associate',
  description: 'Sell & find your dream vehicle with SM Associate\'s marketplace. Get top valuation for your pre-owned car or bike with no middleman & instant approval.',
  keywords: 'sell used car online, sell my bike online, car resale value calculator, vehicle resale marketplace, sell car for best price India',
  alternates: {
    canonical: 'https://www.smassociate.in/car-resale',
  },
  openGraph: {
    title: 'Sell Your Used Car Online',
    description: 'Sell your car with instant valuation and fast payment processing',
    url: 'https://www.smassociate.in/car-resale',
    type: 'website',
    images: [
      {
        url: 'https://smassociate.com/og-car-resale.jpg',
        width: 1200,
        height: 630,
        alt: 'Sell Your Car at SM Associate',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sell Your Used Car Online',
    description: 'Sell your car with instant valuation and fast payment processing',
    images: ['https://smassociate.com/og-car-resale.jpg'],
  },
};

export default function CarResalePage() {
  return (
    <div>
      <CarResaleHero />
      <CarResaleContent />
    </div>
  );
}
