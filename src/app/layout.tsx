import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import '@/styles/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'SM Associate | Finance & Vehicle Marketplace in Tirunelveli, Tamil Nadu',
  description: 'SM Associate offers home, car, bike, personal & business loans plus a trusted vehicle marketplace to buy or sell cars & bikes. Fast approval in 24-48 hrs. Apply now!',
  keywords: 'finance company Tirunelveli, vehicle marketplace India, buy and sell vehicles online, loan and insurance services, SM Associate',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'SM Associate - Your Finance & Mobility Partner',
    description: 'Trusted finance and vehicle marketplace in Tirunelveli',
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.smassociate.in',
    siteName: 'SM Associate',
    images: [
      {
        url: 'https://www.smassociate.in/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SM Associate - Finance & Vehicle Marketplace',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SM Associate - Your Finance & Mobility Partner',
    description: 'Trusted finance and vehicle marketplace in Tirunelveli',
    images: ['https://www.smassociate.in/og-image.jpg'],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'SM Associate',
    description: 'Finance and vehicle marketplace providing loans and pre-owned vehicles in Tirunelveli',
    url: 'https://www.smassociate.in',
    telephone: '+91-9790219874',
    email: 'smassociateadmin@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'No 183 E4, Nellaiapper High Road, Thirunagar',
      addressLocality: 'Tirunelveli',
      addressRegion: 'Tamil Nadu',
      postalCode: '627001',
      addressCountry: 'IN'
    },
    image: 'https://www.smassociate.in/og-image.jpg',
    areaServed: {
      '@type': 'Region',
      name: 'Tirunelveli, Tamil Nadu, India'
    },
    priceRange: '₹',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '18:00'
      }
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: '+91-9790219874',
      email: 'smassociateadmin@gmail.com'
    },
    sameAs: [
      'https://www.facebook.com/smassociate',
      'https://www.instagram.com/smassociate'
    ]
  };

  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${plusJakartaSans.className} bg-white overflow-x-hidden`}>
        <Header />
        <main className="min-h-screen w-full overflow-x-hidden">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
