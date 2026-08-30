'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Calculator, ChevronRight, Home } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ROUTES } from '@/lib/constants';
import Testimonials from '@/components/sections/Testimonials';
import VaultContactSection from '@/components/sections/VaultContactSection';
import FAQSection from '@/components/sections/FAQSection';

const homeLoan = {
  icon: Home,
  title: 'Home Loan',
  subtitle: 'Build Your Dream Home',
  description: 'Affordable financing for home purchase, construction, and renovation projects with flexible terms and competitive interest rates.',
  features: [
    'Competitive interest rates starting from 6.5%',
    'Flexible loan tenure up to 30 years',
    'Minimal documentation required',
    'Easy approval process (24-48 hours)',
    'Quick disbursement after approval',
    'Expert guidance throughout the process',
    'Balance transfer facility available',
    'Top-up loan option',
  ],
  eligibility: [
    'Age between 21-65 years',
    'Stable monthly income',
    'Good credit score (650+)',
    'Employment of minimum 2 years',
    'Self-employed with 3+ years business history',
    'Indian citizen or NRI',
  ],
  documents: [
    'Passport/Aadhar/Voter ID/Driving License',
    'Recent salary slips (last 3 months)',
    'Bank statements (6-12 months)',
    'Property documents and valuation report',
    'Proof of address',
    'ITR and form 16 (for salaried)',
    'Audited financial statements (for self-employed)',
    'Spouse consent letter (if applicable)',
  ],
  benefits: [
    'Tax deduction under Section 80C up to ₹1.5 lakh',
    'Tax deduction on interest paid under Section 24',
    'Lower EMI compared to other loans',
    'Long repayment tenure reduces monthly burden',
    'Build home equity over time',
    'No hidden charges or processing delays',
    'Transparent fee structure',
  ],
  interestRates: [
    'New Home Purchase: Starting from 6.5% p.a.',
    'Home Construction: Starting from 6.9% p.a.',
    'Home Renovation: Starting from 7.5% p.a.',
    'Balance Transfer: Starting from 6.5% p.a.',
    'Rates vary based on credit profile and bank',
  ],
};

export default function HomeLoanContent() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

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
                  <Home size={32} className="text-white" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-navy mb-2">{homeLoan.title}</h1>
                  <p className="text-xl text-teal font-semibold">{homeLoan.subtitle}</p>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">{homeLoan.description}</p>
              <div className="mt-6 p-5 bg-teal/5 border-l-4 border-teal rounded">
                <p className="text-gray-700 font-semibold">
                  Planning to buy or construct a home in Tirunelveli? SM Associate partners with leading banks and NBFCs to offer home loans at competitive rates with transparent documentation and personalized support at every step.
                </p>
              </div>
            </div>

            {/* Key Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {homeLoan.features.map((feature, idx) => (
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

            {/* Interest Rates */}
            <div className="bg-gradient-to-br from-navy/5 to-teal/5 p-8 rounded-xl border border-teal/10 mb-16">
              <h2 className="text-2xl font-bold text-navy mb-6">Interest Rates &amp; Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {homeLoan.interestRates.map((rate, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-teal rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{rate}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Eligibility & Documents & Benefits - 3 columns */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {/* Eligibility */}
              <motion.div
                initial={isMounted ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={isMounted ? { duration: 0.5 } : { duration: 0 }}
              >
                <div className="bg-gradient-to-br from-teal/10 to-cyan/10 p-8 rounded-xl border border-teal/20 h-full">
                  <h3 className="text-2xl font-bold text-navy mb-6">Eligibility</h3>
                  <ul className="space-y-3">
                    {homeLoan.eligibility.map((criterion, idx) => (
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
                    {homeLoan.documents.map((doc, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-700 text-sm">
                        <div className="w-2 h-2 bg-cyan rounded-full mt-2 flex-shrink-0"></div>
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Benefits */}
              <motion.div
                initial={isMounted ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={isMounted ? { delay: 0.2, duration: 0.5 } : { duration: 0 }}
              >
                <div className="bg-gradient-to-br from-teal/10 to-cyan/10 p-8 rounded-xl border border-teal/20 h-full">
                  <h3 className="text-2xl font-bold text-navy mb-6">Benefits</h3>
                  <ul className="space-y-3">
                    {homeLoan.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-700 text-sm">
                        <div className="w-2 h-2 bg-teal rounded-full mt-2 flex-shrink-0"></div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* EMI Calculator Prompt */}
            <motion.div
              initial={isMounted ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={isMounted ? { duration: 0.5 } : { duration: 0 }}
              className="p-8 bg-gradient-to-r from-teal/10 to-cyan/10 rounded-xl border border-teal/20 text-center mb-16"
            >
              <Calculator size={48} className="text-teal mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-navy mb-2">Calculate Your Home Loan EMI</h3>
              <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                Use our interactive EMI calculator to find the right loan amount, interest rate, and tenure for your budget.
              </p>
              <Link
                href={ROUTES.EMI_CALCULATOR}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal to-cyan text-white font-semibold rounded-lg hover:shadow-lg transition-all"
              >
                Calculate EMI Now
                <ChevronRight size={20} />
              </Link>
            </motion.div>

            {/* CTA Box */}
            <motion.div
              initial={isMounted ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={isMounted ? { duration: 0.5 } : { duration: 0 }}
              className="bg-gradient-to-br from-teal/10 to-cyan/10 p-8 rounded-xl border border-teal/20 text-center mb-16"
            >
              <h3 className="text-2xl font-bold text-navy mb-4">Ready to Apply for a Home Loan?</h3>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                Take the first step toward owning your dream home. Our team will guide you through the process and help you secure the best rate.
              </p>
              <Link
                href={ROUTES.CONTACT}
                className="px-8 py-3 bg-gradient-to-r from-teal to-cyan text-white font-semibold rounded-lg hover:shadow-lg transition-all inline-flex items-center justify-center gap-2 mx-auto"
              >
                Apply for Home Loan
                <ChevronRight size={20} />
              </Link>
            </motion.div>

            {/* Other Loan Types */}
            <div className="pt-12 border-t border-gray-200">
              <h3 className="text-2xl font-bold text-navy mb-8">Explore Other Loan Types</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link href={ROUTES.CAR_LOAN} className="p-4 bg-gray-50 rounded-lg hover:bg-teal/10 hover:border-teal border-2 border-transparent transition-all group">
                  <h4 className="font-bold text-navy group-hover:text-teal transition-colors">Car Loan</h4>
                  <p className="text-sm text-gray-600 mt-1">Finance your dream car</p>
                </Link>
                <Link href={ROUTES.BIKE_LOAN} className="p-4 bg-gray-50 rounded-lg hover:bg-teal/10 hover:border-teal border-2 border-transparent transition-all group">
                  <h4 className="font-bold text-navy group-hover:text-teal transition-colors">Bike Loan</h4>
                  <p className="text-sm text-gray-600 mt-1">Quick two-wheeler loan</p>
                </Link>
                <Link href={ROUTES.PERSONAL_LOAN} className="p-4 bg-gray-50 rounded-lg hover:bg-teal/10 hover:border-teal border-2 border-transparent transition-all group">
                  <h4 className="font-bold text-navy group-hover:text-teal transition-colors">Personal Loan</h4>
                  <p className="text-sm text-gray-600 mt-1">Quick personal funds</p>
                </Link>
                <Link href={ROUTES.BUSINESS_LOAN} className="p-4 bg-gray-50 rounded-lg hover:bg-teal/10 hover:border-teal border-2 border-transparent transition-all group">
                  <h4 className="font-bold text-navy group-hover:text-teal transition-colors">Business Loan</h4>
                  <p className="text-sm text-gray-600 mt-1">Grow your business</p>
                </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Vaultline Home Loan Contact Section */}
        <VaultContactSection
          theme="navy-cyan"
          brandTag="SM Associate · Home Mortgage Desk"
          title={
            <>
              Own your dream home with <em>trusted financing</em>.
            </>
          }
          subtitle="Low interest rates from 6.5% p.a., long tenures up to 30 years, and hassle-free paperless approvals."
          stats={[
            { label: 'Homes Funded, YTD', target: 420, suffix: '+' },
            { label: 'Starting Interest Rate', target: '6.5% p.a.', isStatic: true },
            { label: 'Max Tenure Available', target: '30 Years', isStatic: true },
          ]}
          formEyebrow="Home Loan Application"
          formTitle="Speak directly with a mortgage expert."
          formSubtitle="Share your property & budget details — we'll provide the best bank comparison within 24 hours."
          reasonLabel="Loan Purpose"
          reasonOptions={[
            { value: 'new_purchase', label: 'New Home Purchase' },
            { value: 'construction', label: 'Home Construction' },
            { value: 'renovation', label: 'Home Renovation / Extension' },
            { value: 'balance_transfer', label: 'Balance Transfer / Top-up' },
          ]}
          defaultReason="new_purchase"
          valueLabel="Estimated Property / Loan Value"
          valuePlaceholder="e.g. ₹35,00,000"
          phoneLabel="Phone Number"
          phonePlaceholder="+91 97902 19874"
          messagePlaceholder="Mention property location, required loan amount, employment type, or specific requests..."
          submitButtonText="Submit Mortgage Inquiry"
        />

        {/* FAQ Section */}
        <FAQSection category="homeLoan" />

        {/* Testimonials Section */}
        <Testimonials />
      </>
    );
  }
