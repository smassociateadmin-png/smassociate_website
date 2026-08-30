import type { Metadata } from 'next';
import DisclaimerContent from './DisclaimerContent';

export const metadata: Metadata = {
  title: 'Disclaimer - SM Associate - Important Legal Information',
  description: 'Important disclaimer about SM Associate services. No guarantees on loan approval, interest rates, or vehicle availability. Read before using our services.',
  keywords: 'disclaimer, legal disclaimer, important notice, SM Associate',
  alternates: {
    canonical: 'https://smassociate.com/disclaimer',
  },
  openGraph: {
    title: 'Disclaimer - SM Associate',
    description: 'Important legal information and disclaimers',
    url: 'https://smassociate.com/disclaimer',
    type: 'website',
    images: [
      {
        url: 'https://smassociate.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Disclaimer - SM Associate',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Disclaimer - SM Associate',
    description: 'Important legal information and disclaimers',
    images: ['https://smassociate.com/og-image.jpg'],
  },
};

export default function DisclaimerPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-navy text-white py-16">
        <div className="container-padded max-w-4xl">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Disclaimer</h1>
            <p className="text-gray-300">Important Legal Information</p>
          </div>
        </div>
      </section>

      <DisclaimerContent />
    </div>
  );
}
