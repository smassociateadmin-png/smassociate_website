'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronLeft, AlertCircle, DollarSign, TrendingUp, Home } from 'lucide-react';
import FAQSection from '@/components/sections/FAQSection';

export default function DisclaimerContent() {
  const disclaimerItems = [
    {
      icon: DollarSign,
      title: 'Interest Rates & Offers',
      content: 'All rates are indicative and subject to change based on individual eligibility, credit score, and market conditions.'
    },
    {
      icon: TrendingUp,
      title: 'Market Performance',
      content: 'Past performance of vehicles or financial products is not indicative of future results.'
    },
    {
      icon: Home,
      title: 'Property Valuations',
      content: 'Property valuations are estimates and may differ from actual market value. Professional appraisal recommended.'
    }
  ];

  return (
    <div>
      {/* Breadcrumb */}
      <section className="bg-gray-50 border-b border-gray-200 py-4">
        <div className="container-padded max-w-4xl">
          <Link href="/" className="flex items-center gap-2 text-teal hover:text-cyan transition-colors">
            <ChevronLeft size={20} />
            Back to Home
          </Link>
        </div>
      </section>

      {/* Alert */}
      <section className="py-8 bg-orange-50 border-b border-orange-200">
        <div className="container-padded max-w-4xl">
          <div className="flex gap-4">
            <AlertCircle size={24} className="text-orange-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-orange-900 mb-2">Important Disclaimer</h3>
              <p className="text-orange-800">
                Please read this disclaimer carefully before using our services. Your use of SM Associate website indicates your acceptance of this disclaimer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-white">
        <div className="container-padded max-w-4xl">
          <motion.article
            initial={false}
            viewport={{ once: true }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-navy mb-4">1. General Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The information provided on SM Associate website is for general informational purposes only. While we endeavor to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the website or the information, products, services, or related graphics contained on the website.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-navy mb-4">2. Financial Services Disclaimer</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                SM Associate acts as a financial services facilitator and intermediary. We do not directly issue loans or make credit decisions. All loan approvals, interest rates, terms, and conditions are solely determined by our partner banks and financial institutions based on their credit criteria and policies.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Interest rates, processing fees, and other charges mentioned on this website are indicative and subject to change without prior notice. The final terms of any loan will be communicated by the respective lending institution.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-navy mb-4">3. Vehicle Marketplace Disclaimer</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Vehicle listings, prices, and specifications displayed on our platform are provided by sellers or sourced from reliable databases. While we strive to verify all information, we cannot guarantee the complete accuracy of every detail. Buyers are advised to conduct physical inspections and verify all documentation before finalizing any transaction.
              </p>
              <p className="text-gray-700 leading-relaxed">
                SM Associate is not responsible for any disputes, damages, or losses arising from vehicle transactions between buyers and sellers.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-navy mb-4">4. Calculator and Tool Estimates</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The EMI calculators, affordability tools, and other estimation features on this website are provided for illustrative purposes only. The results are based on the inputs provided and standard calculation formulas. Actual repayment amounts, schedules, and costs may vary based on lender policies, taxes, insurance, and other applicable fees.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-navy mb-4">5. External Links</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Through this website, you may be able to link to other websites that are not under the control of SM Associate. We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-navy mb-4">6. Contact for Inquiries</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about this disclaimer or our services, please contact us at disclaimer@smassociate.com or through our Contact page.
              </p>
            </div>
          </motion.article>
        </div>
      </section>

      {/* Key Disclaimers Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-padded max-w-4xl">
          <h2 className="text-3xl font-bold text-navy mb-12 text-center">Key Disclaimer Points</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {disclaimerItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={false}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-6 rounded-xl border border-orange-200 hover:shadow-md transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-orange-100 rounded-lg flex-shrink-0">
                      <Icon size={24} className="text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-navy mb-2">{item.title}</h3>
                      <p className="text-gray-700 text-sm">{item.content}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Related Legal Documents */}
      <section className="py-12 bg-white border-t border-gray-200">
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
              href="/terms-conditions"
              className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-semibold"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection category="disclaimer" />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-navy text-white">
        <div className="container-padded text-center">
          <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Our team is here to clarify any concerns about our disclaimer or services.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/loans"
              className="px-8 py-3 bg-gradient-to-r from-teal to-cyan text-white font-semibold rounded-lg hover:shadow-xl transition-all inline-block"
            >
              Explore Loans
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors inline-block"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
