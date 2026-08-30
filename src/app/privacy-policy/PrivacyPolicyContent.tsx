'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ChevronLeft, Download, AlertCircle, Lock, Eye, Trash2, Mail } from 'lucide-react';
import FAQSection from '@/components/sections/FAQSection';

export default function PrivacyPolicyContent() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const sections = [
    {
      title: 'Introduction',
      content: 'SM Associate ("we", "us", or "our") operates the SM Associate website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.'
    },
    {
      title: 'Information Collection and Use',
      content: 'We collect several different types of information for various purposes to provide and improve our Service to you.'
    },
    {
      title: 'Types of Data Collected',
      content: 'Personal Data: While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. This may include email address, first name and last name, phone number, address, state, province, ZIP/Postal code, city, and cookies and usage data.'
    },
    {
      title: 'Use of Data',
      content: 'SM Associate uses the collected data for various purposes: To provide and maintain our Service, to notify you about changes to our Service, to allow you to participate in interactive features of our Service, to provide customer support, to gather analysis or valuable information so that we can improve our Service, to monitor the usage of our Service, and to detect, prevent and address technical issues.'
    },
    {
      title: 'Security of Data',
      content: 'The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.'
    },
    {
      title: 'Contact Us',
      content: 'If you have any questions about this Privacy Policy, please contact us at privacy@smassociate.com or by mail at our office address provided on our Contact page.'
    }
  ];

  const dataRights = [
    { icon: Eye, title: 'Right to Access', description: 'You have the right to request access to your personal data and know how we use it.' },
    { icon: Trash2, title: 'Right to Deletion', description: 'You may request deletion of your personal data under certain circumstances.' },
    { icon: Lock, title: 'Right to Correction', description: 'You can request correction of inaccurate or incomplete personal data.' },
    { icon: Mail, title: 'Data Portability', description: 'You can request your data in a portable format for transfer to another service.' },
  ];

  return (
    <>
      {/* Breadcrumb */}
      <section className="bg-gray-50 border-b border-gray-200 py-4">
        <div className="container-padded max-w-4xl">
          <Link href="/" className="flex items-center gap-2 text-teal hover:text-cyan transition-colors">
            <ChevronLeft size={20} />
            Back to Home
          </Link>
        </div>
      </section>

      {/* Alert Banner */}
      <section className="py-6 bg-blue-50 border-b border-blue-200">
        <div className="container-padded max-w-4xl">
          <div className="flex gap-4">
            <AlertCircle size={24} className="text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-blue-900 mb-1">Last Updated: 2024</h3>
              <p className="text-blue-800 text-sm">We take your privacy seriously. Please read our policy carefully. If you have questions, contact us anytime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-white">
        <div className="container-padded max-w-4xl">
          <motion.article
            initial={isMounted ? { opacity: 0 } : { opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={isMounted ? { duration: 0.6 } : { duration: 0 }}
            className="prose prose-lg max-w-none"
          >
            {sections.map((section, idx) => (
              <div key={idx} className="mb-8">
                <h2 className="text-2xl font-bold text-navy mb-4">{section.title}</h2>
                <p className="text-gray-700 leading-relaxed">{section.content}</p>
              </div>
            ))}
          </motion.article>
        </div>
      </section>

      {/* Your Data Rights Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-padded max-w-4xl">
          <h2 className="text-3xl font-bold text-navy mb-12 text-center">Your Data Rights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dataRights.map((right, idx) => {
              const Icon = right.icon;
              return (
                <motion.div
                  key={idx}
                  initial={isMounted ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={isMounted ? { delay: idx * 0.1, duration: 0.5 } : { duration: 0 }}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:border-teal hover:shadow-md transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-teal/10 rounded-lg flex-shrink-0">
                      <Icon size={24} className="text-teal" />
                    </div>
                    <div>
                      <h3 className="font-bold text-navy mb-2">{right.title}</h3>
                      <p className="text-gray-700 text-sm">{right.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cookie Policy Section */}
      <section className="py-16 bg-white">
        <div className="container-padded max-w-4xl">
          <h2 className="text-3xl font-bold text-navy mb-6">Cookie Policy</h2>
          <div className="bg-teal/5 border border-teal/20 rounded-xl p-8">
            <p className="text-gray-700 mb-4">
              We use cookies to enhance your browsing experience. Cookies help us remember your preferences, understand how you use our website, and improve our services. You can control cookie settings through your browser.
            </p>
            <p className="text-gray-700">
              Types of cookies we use:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm mt-2 space-y-2">
              <li>Essential cookies for website functionality</li>
              <li>Performance cookies to analyze site usage</li>
              <li>Preference cookies to remember your settings</li>
              <li>Marketing cookies for targeted content</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Data Request Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-padded max-w-4xl">
          <h2 className="text-3xl font-bold text-navy mb-6 text-center">Request Your Data</h2>
          <p className="text-gray-600 text-center mb-8">
            You can request a copy of your personal data, request deletion, or opt-out of communications.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/contact"
              className="p-6 bg-white rounded-xl border-2 border-teal text-center hover:shadow-lg transition-all"
            >
              <Mail size={32} className="mx-auto mb-3 text-teal" />
              <h3 className="font-bold text-navy mb-2">Request Data Copy</h3>
              <p className="text-sm text-gray-600 mb-4">Get all your personal data in portable format</p>
              <span className="text-teal font-semibold">Submit Request</span>
            </Link>
            <Link
              href="/contact"
              className="p-6 bg-white rounded-xl border-2 border-cyan text-center hover:shadow-lg transition-all"
            >
              <Trash2 size={32} className="mx-auto mb-3 text-cyan" />
              <h3 className="font-bold text-navy mb-2">Delete My Data</h3>
              <p className="text-sm text-gray-600 mb-4">Request permanent deletion of your account</p>
              <span className="text-cyan font-semibold">Submit Request</span>
            </Link>
            <Link
              href="/contact"
              className="p-6 bg-white rounded-xl border-2 border-emerald-500 text-center hover:shadow-lg transition-all"
            >
              <AlertCircle size={32} className="mx-auto mb-3 text-emerald-500" />
              <h3 className="font-bold text-navy mb-2">Opt-Out</h3>
              <p className="text-sm text-gray-600 mb-4">Unsubscribe from marketing communications</p>
              <span className="text-emerald-600 font-semibold">Update Preferences</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Legal Links Section */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="container-padded max-w-4xl">
          <h3 className="text-lg font-bold text-navy mb-6 text-center">Related Legal Documents</h3>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/disclaimer"
              className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-semibold"
            >
              Disclaimer
            </Link>
            <Link
              href="/terms-conditions"
              className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-semibold"
            >
              Terms & Conditions
            </Link>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-2 bg-teal/10 text-teal rounded-lg hover:bg-teal/20 transition-colors font-semibold"
            >
              <Download size={18} />
              Download Policy PDF
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection category="privacyPolicy" />

      {/* CTA Section */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="container-padded max-w-4xl text-center">
          <h3 className="text-lg font-bold text-navy mb-4">Questions About Our Privacy Policy?</h3>
          <p className="text-gray-600 mb-6">Our privacy team is here to help. Contact us anytime with your concerns or requests.</p>
          <Link
            href="/contact"
            className="inline-block px-6 py-2 bg-gradient-to-r from-teal to-cyan text-white font-semibold rounded-lg hover:shadow-lg transition-all"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
