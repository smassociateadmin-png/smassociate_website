import type { Metadata } from 'next';
import SellVehicleContent from './SellVehicleContent';

export const metadata: Metadata = {
  title: 'Sell Vehicle - Submit Details & Get Instant Valuation',
  description: 'Submit your vehicle details for instant valuation. Simple form, transparent process. Upload documents, get valuation, receive offer quickly at SM Associate.',
  keywords: 'sell vehicle online, vehicle submission form, car valuation, instant valuation',
  alternates: {
    canonical: 'https://smassociate.com/sell-vehicle',
  },
  openGraph: {
    title: 'Sell Vehicle - Instant Valuation',
    description: 'Submit your vehicle for quick valuation and best price offer',
    url: 'https://smassociate.com/sell-vehicle',
    type: 'website',
    images: [
      {
        url: 'https://smassociate.com/og-sell-vehicle.jpg',
        width: 1200,
        height: 630,
        alt: 'Sell Your Vehicle at SM Associate',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sell Vehicle - Instant Valuation',
    description: 'Submit your vehicle for quick valuation and best price offer',
    images: ['https://smassociate.com/og-sell-vehicle.jpg'],
  },
};

export default function SellVehiclePage() {
  return <SellVehicleContent />;
}
