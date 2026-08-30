'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ChevronLeft, AlertCircle, Shield, Download, Eye } from 'lucide-react';
import FAQSection from '@/components/sections/FAQSection';

export default function TermsConditionsContent() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const sections = [
    {
      title: 'Agreement to Terms',
      content: 'By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.'
    },
    {
      title: 'Use License',
      content: 'Permission is granted to temporarily download one copy of the materials (information or software) on SM Associate website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not: modify or copy the materials; use the materials for any commercial purpose or for any public display; attempt to decompile or reverse engineer any software contained on the website; remove any copyright or other proprietary notations from the materials; or transmit the materials to any other person or mirror the materials on any other server.'
    },
    {
      title: 'Disclaimer',
      content: 'The materials on SM Associate website are provided on an as is basis. SM Associate makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.'
    },
    {
      title: 'Limitations',
      content: 'In no event shall SM Associate or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the SM Associate website.'
    },
    {
      title: 'Accuracy of Materials',
      content: 'The materials appearing on SM Associate website could include technical, typographical, or photographic errors. SM Associate does not warrant that any of the materials on the website are accurate, complete, or current. SM Associate may make changes to the materials contained on the website at any time without notice.'
    },
    {
      title: 'Links',
      content: 'SM Associate has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by SM Associate of the site. Use of any such linked website is at the users own risk.'
    },
    {
      title: 'Modifications',
      content: 'SM Associate may revise these terms of service for the website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.'
    },
    {
      title: 'Governing Law',
      content: 'These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in that location.'
    }
  ];

  const userResponsibilities = [
    { title: 'Accurate Information', description: 'You agree to provide accurate, current, and complete information during registration and transactions.' },
    { title: 'Lawful Use', description: 'You agree not to use the service for any unlawful purpose or in violation of any applicable laws.' },
    { title: 'Account Security', description: 'You are responsible for maintaining the confidentiality of your account credentials.' },
    { title: 'Compliance', description: 'You agree to comply with all applicable local, state, national, and international laws and regulations.' }
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
              <h3 className="font-bold text-blue-900 mb-1">Effective Date: January 1, 2024</h3>
              <p className="text-blue-800 text-sm">Please review our terms of service before using our website. Continued use signifies acceptance.</p>
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

      {/* User Responsibilities */}
      <section className="py-16 bg-gray-50">
        <div className="container-padded max-w-4xl">
          <h2 className="text-3xl font-bold text-navy mb-12 text-center">User Responsibilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {userResponsibilities.map((responsibility, idx) => (
              <motion.div
                key={idx}
                initial={false}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-teal transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-teal/10 rounded-lg flex-shrink-0">
                    <Eye size={24} className="text-teal" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-2">{responsibility.title}</h3>
                    <p className="text-gray-700 text-sm">{responsibility.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Limitation of Liability */}
      <section className="py-16 bg-white">
        <div className="container-padded max-w-4xl">
          <h2 className="text-3xl font-bold text-navy mb-8 text-center">Limitation of Liability</h2>
          <div className="bg-red-50 border border-red-200 rounded-xl p-8">
            <div className="flex gap-4 mb-4">
              <Shield size={28} className="text-red-600 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-red-900 mb-3">Important Limitation</h3>
                <p className="text-red-800 mb-3">
                  SM Associate shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use this website or services, even if advised of such possibility.
                </p>
                <p className="text-red-800">
                  This limitation applies to all damages regardless of cause or theory of liability, whether based on contract, tort, strict liability, or any other legal theory.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Links Section */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="container-padded max-w-4xl">
          <h3 className="text-lg font-bold text-navy mb-6 text-center">Related Legal Documents</h3>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/privacy-policy"
              className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-semibold"
            >
              Privacy Policy
            </Link>
            <Link
              href="/disclaimer"
              className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-semibold"
            >
              Disclaimer
            </Link>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-2 bg-teal/10 text-teal rounded-lg hover:bg-teal/20 transition-colors font-semibold"
            >
              <Download size={18} />
              Download Terms PDF
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection category="termsConditions" />

      {/* CTA Section */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="container-padded max-w-4xl text-center">
          <h3 className="text-lg font-bold text-navy mb-4">Questions About Our Terms?</h3>
          <p className="text-gray-600 mb-6">If you have concerns or need clarification about any terms, please contact our legal team.</p>
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
