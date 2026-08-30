import type { Metadata } from 'next';
import VehiclesHero from '@/components/heroes/VehiclesHero';
import VehiclesContent from './VehiclesContent';

export const metadata: Metadata = {
  title: 'Buy Verified Used Cars & Bikes Online | SM Associate Vehicle Marketplace',
  description: 'Browse 100+ verified pre-owned cars & bikes with transparent pricing. Filter by brand, model & location. Finance available. Explore the SM Associate marketplace today.',
  keywords: 'used car marketplace India, buy second hand cars online, verified pre-owned vehicles, used bike for sale, vehicle marketplace Tamil Nadu',
  alternates: {
    canonical: 'https://www.smassociate.in/vehicles',
  },
  openGraph: {
    title: 'Pre-owned Vehicles - Quality Cars & Bikes',
    description: 'Browse certified pre-owned vehicles with warranty and financing options',
    url: 'https://www.smassociate.in/vehicles',
    type: 'website',
    images: [
      {
        url: 'https://smassociate.com/og-vehicles.jpg',
        width: 1200,
        height: 630,
        alt: 'Pre-owned Vehicles from SM Associate',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pre-owned Vehicles - Quality Cars & Bikes',
    description: 'Browse certified pre-owned vehicles with warranty and financing options',
    images: ['https://smassociate.com/og-vehicles.jpg'],
  },
};

export default function VehiclesPage() {
  return (
    <>
      <VehiclesHero />
      <VehiclesContent />
    </>
  );
}
