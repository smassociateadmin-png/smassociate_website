import type { Metadata } from 'next';
import PrivacyPolicyContent from './PrivacyPolicyContent';

export const metadata: Metadata = {
  title: 'Privacy Policy - SM Associate - Data Protection',
  description: 'Read SM Associate privacy policy. Understand how we collect, use, and protect your personal data. Your privacy is our priority. Last updated January 2024.',
  keywords: 'privacy policy, data protection, personal data, privacy statement',
  alternates: {
    canonical: 'https://smassociate.com/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy - SM Associate',
    description: 'Data protection and privacy policy for SM Associate',
    url: 'https://smassociate.com/privacy-policy',
    type: 'website',
    images: [
      {
        url: 'https://smassociate.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Privacy Policy - SM Associate',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy - SM Associate',
    description: 'Data protection and privacy policy for SM Associate',
    images: ['https://smassociate.com/og-image.jpg'],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-navy text-white py-16">
        <div className="container-padded max-w-4xl">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-gray-300">Last updated: January 2024</p>
          </div>
        </div>
      </section>

      <PrivacyPolicyContent />
    </div>
  );
}
