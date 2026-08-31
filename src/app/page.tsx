import type { Metadata } from 'next';
import HomeHero from '@/components/heroes/HomeHero';
import Statistics from '@/components/sections/Statistics';
import FinancialServices from '@/components/sections/FinancialServices';
import EMICalculator from '@/components/sections/EMICalculator';
import FeaturedVehicles from '@/components/sections/FeaturedVehicles';
import VehicleMarketplace from '@/components/sections/VehicleMarketplace';
import HowItWorks from '@/components/sections/HowItWorks';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import Partners from '@/components/sections/Partners';
import Testimonials from '@/components/sections/Testimonials';
import FinancialInsights from '@/components/sections/FinancialInsights';
import ContactSection from '@/components/sections/ContactSection';
import FAQSection from '@/components/sections/FAQSection';

export const metadata: Metadata = {
  title: 'SM Associate | Finance & Vehicle Marketplace in Tirunelveli, Tamil Nadu',
  description: 'SM Associate offers home, car, bike, personal & business loans plus a trusted vehicle marketplace to buy or sell cars & bikes. Fast approval in 24-48 hrs. Apply now!',
  keywords: 'finance company Tirunelveli, vehicle marketplace India, buy and sell vehicles online, loan and insurance services, SM Associate finance',
  alternates: {
    canonical: 'https://www.smassociate.in',
  },
  openGraph: {
    title: 'SM Associate - Finance & Vehicle Marketplace',
    description: 'Your trusted partner for finance and mobility solutions in Tirunelveli',
    url: 'https://www.smassociate.in',
    type: 'website',
    images: [
      {
        url: 'https://smassociate.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SM Associate - Finance & Vehicle Marketplace',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SM Associate - Finance & Vehicle Marketplace',
    description: 'Your trusted partner for finance and mobility solutions in Tirunelveli',
    images: ['https://smassociate.com/og-image.jpg'],
  },
};

export default function Home() {
  return (
    <div>
      <HomeHero />
      <Statistics />
      <FinancialServices />
      <EMICalculator />
      <FeaturedVehicles />
      <VehicleMarketplace />
      <HowItWorks />
      <WhyChooseUs />
      <Partners />
      <ContactSection />
      <Testimonials />
      <FAQSection category="home" />
      <FinancialInsights />
    </div>
  );
}
