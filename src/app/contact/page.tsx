import type { Metadata } from 'next';
import ContactHero from '@/components/heroes/ContactHero';
import ContactContent from './ContactContent';

export const metadata: Metadata = {
  title: 'Contact SM Associate | Call, Email or Chat 24/7 – Tirunelveli',
  description: 'Get in touch with SM Associate for loans, insurance or vehicle queries. Call +91 9790219874, email us, or chat live 24/7. Visit our Tirunelveli office.',
  keywords: 'SM Associate contact number, finance company customer support, loan enquiry contact form, SM Associate Tirunelveli office address, 24/7 live chat support finance',
  alternates: {
    canonical: 'https://www.smassociate.in/contact',
  },
  openGraph: {
    title: 'Contact SM Associate',
    description: 'Get in touch with our team for support and inquiries',
    url: 'https://www.smassociate.in/contact',
    type: 'website',
    images: [
      {
        url: 'https://smassociate.com/og-contact.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact SM Associate',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact SM Associate',
    description: 'Get in touch with our team for support and inquiries',
    images: ['https://smassociate.com/og-contact.jpg'],
  },
};

export default function ContactPage() {
  return (
    <div>
      <ContactHero />
      <ContactContent />
    </div>
  );
}
