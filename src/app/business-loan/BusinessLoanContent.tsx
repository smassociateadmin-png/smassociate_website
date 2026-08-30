'use client';

import { motion } from 'framer-motion';
import { CheckCircle, TrendingUp, ChevronRight, BarChart3, Briefcase } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ROUTES } from '@/lib/constants';
import Testimonials from '@/components/sections/Testimonials';
import VaultContactSection from '@/components/sections/VaultContactSection';
import FAQSection from '@/components/sections/FAQSection';

export default function BusinessLoanContent() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const businessLoan = {
    icon: Briefcase,
    title: 'Business Loan',
    subtitle: 'Grow Your Business',
    description: 'Flexible financing solutions for business expansion, working capital, and equipment purchase with competitive rates.',
    features: [
      'Higher loan amounts up to ₹1 crore',
      'Flexible repayment tenure (12-84 months)',
      'Competitive interest rates starting from 9%',
      'Quick processing and approval',
      'Business growth support and guidance',
      'Minimal documentation for established businesses',
      'Equipment financing options available',
      'Working capital solutions'
    ],
    eligibility: [
      'Business operating for minimum 2 years',
      'Positive cash flow and profitability',
      'Good credit score (700+)',
      'Annual business turnover ₹25+ lakhs',
      'Age between 25-70 years',
      'Business registration and GST registration',
      'Audited financial statements available',
      'No pending legal/tax issues'
    ],
    documents: [
      'Business registration certificate',
      'GST registration and compliance',
      'Last 2 years audited financial statements',
      'Last 2 years income tax returns',
      'Latest 6-12 months bank statements',
      'Business plan and expansion proposal',
      'Ownership and partnership documents',
      'Personal ID proof and address proof',
      'Business address proof',
      'Balance sheet and profit/loss statement'
    ],
    uses: [
      'Business expansion and new ventures',
      'Working capital and operational needs',
      'Equipment and machinery purchase',
      'Stock/inventory investment',
      'Infrastructure development',
      'Technology and automation upgrades',
      'Debt consolidation',
      'International business expansion'
    ]
  };

  return (
    <>
      <section className="py-20 bg-white">
      <div className="container-padded max-w-5xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-teal to-cyan rounded-lg flex items-center justify-center">
                <Briefcase size={32} className="text-white" />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-navy mb-2">{businessLoan.title}</h2>
                <p className="text-xl text-teal font-semibold">{businessLoan.subtitle}</p>
              </div>
            </div>
            <p className="text-lg text-gray-700">{businessLoan.description}</p>
          </div>

          {/* Key Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {businessLoan.features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={isMounted ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
                animate={{ opacity: 1, x: 0 }}
                transition={isMounted ? { delay: idx * 0.05, duration: 0.3 } : { duration: 0 }}
                className="flex items-start gap-3"
              >
                <CheckCircle size={24} className="text-teal flex-shrink-0 mt-1" />
                <span className="text-gray-700">{feature}</span>
              </motion.div>
            ))}
          </div>

          {/* Uses Section */}
          <motion.div
            initial={isMounted ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={isMounted ? { duration: 0.5 } : { duration: 0 }}
            className="bg-gradient-to-br from-teal/10 to-cyan/10 p-8 rounded-xl border border-teal/20 mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp size={28} className="text-teal" />
              <h3 className="text-2xl font-bold text-navy">Business Loan Uses</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {businessLoan.uses.map((use, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-teal rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{use}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Eligibility & Documents */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Eligibility */}
            <motion.div
              initial={isMounted ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={isMounted ? { duration: 0.5 } : { duration: 0 }}
            >
              <div className="bg-gradient-to-br from-teal/10 to-cyan/10 p-8 rounded-xl border border-teal/20 h-full">
                <h3 className="text-2xl font-bold text-navy mb-6">Eligibility Criteria</h3>
                <ul className="space-y-3">
                  {businessLoan.eligibility.map((criterion, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700 text-sm">
                      <div className="w-2 h-2 bg-teal rounded-full mt-2 flex-shrink-0"></div>
                      <span>{criterion}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Documents */}
            <motion.div
              initial={isMounted ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={isMounted ? { delay: 0.1, duration: 0.5 } : { duration: 0 }}
            >
              <div className="bg-gradient-to-br from-cyan/10 to-teal/10 p-8 rounded-xl border border-cyan/20 h-full">
                <h3 className="text-2xl font-bold text-navy mb-6">Documents Required</h3>
                <ul className="space-y-3">
                  {businessLoan.documents.map((doc, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700 text-sm">
                      <div className="w-2 h-2 bg-cyan rounded-full mt-2 flex-shrink-0"></div>
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Why Business Loan */}
          <motion.div
            initial={isMounted ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={isMounted ? { duration: 0.5 } : { duration: 0 }}
            className="bg-gradient-to-r from-cyan/5 to-teal/5 p-8 rounded-xl border border-cyan/20 mb-16"
          >
            <h3 className="text-2xl font-bold text-navy mb-6">Why Choose Our Business Loan?</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-1 bg-teal flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-navy mb-2">High Loan Amounts</h4>
                  <p className="text-gray-700 text-sm">Access funding up to ₹1 crore for significant business needs.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1 bg-teal flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-navy mb-2">Expert Guidance</h4>
                  <p className="text-gray-700 text-sm">Our business finance experts help you structure your expansion plan.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1 bg-teal flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-navy mb-2">Competitive Rates</h4>
                  <p className="text-gray-700 text-sm">Interest rates starting from 9% for established businesses.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1 bg-teal flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-navy mb-2">Flexible Terms</h4>
                  <p className="text-gray-700 text-sm">Customizable repayment tenure aligned with your business cash flow.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1 bg-teal flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-navy mb-2">Quick Disbursal</h4>
                  <p className="text-gray-700 text-sm">Funds transferred to your account within 2-3 business days.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Business Loan vs Other Loans */}
          <motion.div
            initial={isMounted ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={isMounted ? { duration: 0.5 } : { duration: 0 }}
            className="bg-gradient-to-br from-teal/10 to-cyan/10 p-8 rounded-xl border border-teal/20 mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <BarChart3 size={28} className="text-teal" />
              <h3 className="text-2xl font-bold text-navy">Business Loan Benefits</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-teal/30">
                    <th className="text-left py-3 px-4 text-navy font-bold">Feature</th>
                    <th className="text-left py-3 px-4 text-navy font-bold">Business Loan</th>
                    <th className="text-left py-3 px-4 text-gray-600 font-semibold">Personal Loan</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 text-navy font-semibold">Loan Amount</td>
                    <td className="py-3 px-4 text-teal font-bold">Up to ₹1 Crore</td>
                    <td className="py-3 px-4">Up to ₹25 Lakh</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 text-navy font-semibold">Interest Rate</td>
                    <td className="py-3 px-4 text-teal font-bold">From 9%</td>
                    <td className="py-3 px-4">From 12%</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 text-navy font-semibold">Tenure</td>
                    <td className="py-3 px-4 text-teal font-bold">12-84 months</td>
                    <td className="py-3 px-4">12-60 months</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 text-navy font-semibold">Purpose</td>
                    <td className="py-3 px-4 text-teal font-bold">Business Use Only</td>
                    <td className="py-3 px-4">Any Personal Use</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-navy font-semibold">Documentation</td>
                    <td className="py-3 px-4 text-teal font-bold">Comprehensive</td>
                    <td className="py-3 px-4">Minimal</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* CTA Box */}
          <motion.div
            initial={isMounted ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={isMounted ? { duration: 0.5 } : { duration: 0 }}
            className="bg-gradient-to-br from-teal/10 to-cyan/10 p-8 rounded-xl border border-teal/20 text-center mb-16"
          >
            <h3 className="text-2xl font-bold text-navy mb-4">Ready to Grow Your Business?</h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Apply for a business loan today and get the capital you need to expand and thrive. Our business finance experts are ready to help.
            </p>
            <Link
              href={ROUTES.CONTACT}
              className="px-8 py-3 bg-gradient-to-r from-teal to-cyan text-white font-semibold rounded-lg hover:shadow-lg transition-all inline-flex items-center justify-center gap-2 mx-auto"
            >
              Apply for Business Loan
              <ChevronRight size={20} />
            </Link>
          </motion.div>

          {/* Other Loan Types */}
          <div className="pt-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-navy mb-8">Explore Other Loan Types</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link
                href={ROUTES.HOME_LOAN}
                className="p-4 bg-gray-50 rounded-lg hover:bg-teal/10 hover:border-teal border-2 border-transparent transition-all group"
              >
                <h4 className="font-bold text-navy group-hover:text-teal transition-colors">Home Loan</h4>
                <p className="text-sm text-gray-600 mt-1">Build your dream home</p>
              </Link>
              <Link
                href={ROUTES.CAR_LOAN}
                className="p-4 bg-gray-50 rounded-lg hover:bg-teal/10 hover:border-teal border-2 border-transparent transition-all group"
              >
                <h4 className="font-bold text-navy group-hover:text-teal transition-colors">Car Loan</h4>
                <p className="text-sm text-gray-600 mt-1">Finance your dream car</p>
              </Link>
              <Link
                href={ROUTES.BIKE_LOAN}
                className="p-4 bg-gray-50 rounded-lg hover:bg-teal/10 hover:border-teal border-2 border-transparent transition-all group"
              >
                <h4 className="font-bold text-navy group-hover:text-teal transition-colors">Bike Loan</h4>
                <p className="text-sm text-gray-600 mt-1">Quick bike financing</p>
              </Link>
              <Link
                href={ROUTES.PERSONAL_LOAN}
                className="p-4 bg-gray-50 rounded-lg hover:bg-teal/10 hover:border-teal border-2 border-transparent transition-all group"
              >
                <h4 className="font-bold text-navy group-hover:text-teal transition-colors">Personal Loan</h4>
                <p className="text-sm text-gray-600 mt-1">Quick personal funds</p>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Vaultline Business Loan Contact Section */}
    <VaultContactSection
      theme="emerald-teal"
      brandTag="SM Associate · Commercial Lending Desk"
      title={
        <>
          Fuel your enterprise growth with <em>smart capital</em>.
        </>
      }
      subtitle="Working capital, machinery loans, and commercial expansion funding up to ₹1 Crore with rapid 48-hour approval."
      stats={[
        { label: 'Enterprises Funded', target: 310, suffix: '+' },
        { label: 'Max Capital Line', target: '₹1 Crore', isStatic: true },
        { label: 'Flexible Tenure', target: 'Up to 7 Yrs', isStatic: true },
      ]}
      formEyebrow="Commercial Finance Inquiry"
      formTitle="Accelerate your business roadmap."
      formSubtitle="Tell us about your industry, funding requirement, and growth stage for a structured corporate proposal."
      reasonLabel="Commercial Facility Required"
      reasonOptions={[
        { value: 'working_capital', label: 'Working Capital / Cash Credit' },
        { value: 'machinery', label: 'Machinery & Equipment' },
        { value: 'business_expansion', label: 'Business Expansion Loan' },
        { value: 'msme', label: 'MSME Priority Loan' },
      ]}
      defaultReason="business_expansion"
      valueLabel="Required Business Capital"
      valuePlaceholder="e.g. ₹25,00,000"
      phoneLabel="Official Contact Number"
      phonePlaceholder="+91 97902 19874"
      messagePlaceholder="Mention business name, years in operation, annual turnover, and purpose of funding..."
      submitButtonText="Request Business Loan Proposal"
    />

    {/* FAQ Section */}
    <FAQSection category="businessLoan" />

    {/* Testimonials Section */}
    <Testimonials />
    </>
  );
}
