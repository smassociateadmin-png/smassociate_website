import type { Metadata } from 'next';
import TermsConditionsContent from './TermsConditionsContent';

export const metadata: Metadata = {
  title: 'Terms & Conditions - SM Associate - Legal Terms',
  description: 'Review SM Associate terms and conditions for website usage and services. Understand your rights and obligations. Legal agreement for using our platform.',
  keywords: 'terms and conditions, terms of service, legal agreement, website terms',
  alternates: {
    canonical: 'https://smassociate.com/terms-conditions',
  },
  openGraph: {
    title: 'Terms & Conditions - SM Associate',
    description: 'Legal terms and conditions for SM Associate services',
    url: 'https://smassociate.com/terms-conditions',
    type: 'website',
    images: [
      {
        url: 'https://smassociate.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Terms & Conditions - SM Associate',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms & Conditions - SM Associate',
    description: 'Legal terms and conditions for SM Associate services',
    images: ['https://smassociate.com/og-image.jpg'],
  },
};

export default function TermsConditionsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-navy text-white py-16">
        <div className="container-padded max-w-4xl">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms & Conditions</h1>
            <p className="text-gray-300">Last updated: January 2024</p>
          </div>
        </div>
      </section>

      <TermsConditionsContent />
    </div>
  );
}
