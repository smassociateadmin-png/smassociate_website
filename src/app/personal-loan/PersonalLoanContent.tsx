'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Calculator, Zap, ChevronRight, Wallet } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ROUTES } from '@/lib/constants';
import Testimonials from '@/components/sections/Testimonials';
import VaultContactSection from '@/components/sections/VaultContactSection';
import FAQSection from '@/components/sections/FAQSection';

const personalLoan = {
  icon: Wallet,
  title: 'Personal Loan',
  subtitle: 'Instant Personal Funds',
  description: 'Quick personal loans without collateral for any personal need with minimal documentation and instant approval.',
  features: [
    'No collateral required',
    'Instant disbursal within 24 hours',
    'Flexible tenure from 12 to 60 months',
    'Minimal documentation process',
    'Online application available',
    'Instant approval possible',
    'Flexible loan amount up to ₹25 lakhs',
    'No usage restrictions'
  ],
  eligibility: [
    'Age between 21-60 years',
    'Stable and regular income',
    'Good credit history and score 650+',
    'Employment stability of 1+ year',
    'Indian citizen or NRI',
    'Salaried or self-employed',
    'Any reason to borrow is acceptable',
    'No questions asked policy'
  ],
  documents: [
    'Valid ID proof (Aadhar, Passport, Driving License)',
    'Address proof (Utility bill, rental agreement)',
    'Income proof (Salary slip or business proof)',
    'Last 3-6 months bank statement',
    'PAN card',
    'Recent passport-sized photographs',
    'Employer letter (for salaried individuals)',
    'Business registration (for self-employed)'
  ],
  uses: [
    'Medical and healthcare expenses',
    'Wedding and celebration expenses',
    'Education and skill development',
    'Home renovation and improvement',
    'Travel and vacation',
    'Debt consolidation',
    'Business expansion',
    'Any personal expense'
  ]
};

export default function PersonalLoanContent() {
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
                <Wallet size={32} className="text-white" />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-navy mb-2">{personalLoan.title}</h2>
                <p className="text-xl text-teal font-semibold">{personalLoan.subtitle}</p>
              </div>
            </div>
            <p className="text-lg text-gray-700">{personalLoan.description}</p>
          </div>

          {/* Key Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {personalLoan.features.map((feature, idx) => (
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
              <Zap size={28} className="text-teal" />
              <h3 className="text-2xl font-bold text-navy">Personal Loan Uses</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {personalLoan.uses.map((use, idx) => (
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
                  {personalLoan.eligibility.map((criterion, idx) => (
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
                  {personalLoan.documents.map((doc, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700 text-sm">
                      <div className="w-2 h-2 bg-cyan rounded-full mt-2 flex-shrink-0"></div>
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* EMI Calculator Section */}
          <motion.div
            initial={isMounted ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={isMounted ? { duration: 0.5 } : { duration: 0 }}
            className="bg-gradient-to-r from-teal/5 to-cyan/5 p-8 rounded-xl border border-teal/20 mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <Calculator size={28} className="text-teal" />
              <h3 className="text-2xl font-bold text-navy">Calculate Your Personal Loan EMI</h3>
            </div>
            <p className="text-gray-700 mb-6">
              Calculate your monthly payment with our easy-to-use EMI calculator. See different repayment options for your loan amount.
            </p>
            <Link
              href={ROUTES.EMI_CALCULATOR}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal to-cyan text-white font-semibold rounded-lg hover:shadow-lg transition-all"
            >
              Calculate EMI
              <Calculator size={20} />
            </Link>
          </motion.div>

          {/* Why Personal Loan */}
          <motion.div
            initial={isMounted ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={isMounted ? { duration: 0.5 } : { duration: 0 }}
            className="bg-gradient-to-r from-cyan/5 to-teal/5 p-8 rounded-xl border border-cyan/20 mb-16"
          >
            <h3 className="text-2xl font-bold text-navy mb-6">Why Choose a Personal Loan?</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-1 bg-teal flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-navy mb-2">No Collateral Needed</h4>
                  <p className="text-gray-700 text-sm">Get approved without pledging any asset or property.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1 bg-teal flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-navy mb-2">Quick Processing</h4>
                  <p className="text-gray-700 text-sm">Application approval and fund disbursal within 24 hours.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1 bg-teal flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-navy mb-2">Flexible Amounts</h4>
                  <p className="text-gray-700 text-sm">Choose loan amount that fits your needs, up to ₹25 lakhs.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1 bg-teal flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-navy mb-2">No Questions Asked</h4>
                  <p className="text-gray-700 text-sm">Use the loan for any personal purpose without restrictions.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Box */}
          <motion.div
            initial={isMounted ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={isMounted ? { duration: 0.5 } : { duration: 0 }}
            className="bg-gradient-to-br from-teal/10 to-cyan/10 p-8 rounded-xl border border-teal/20 text-center mb-16"
          >
            <h3 className="text-2xl font-bold text-navy mb-4">Need Instant Funds?</h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Get your personal loan approved instantly. Apply now and receive funds in your account within hours.
            </p>
            <Link
              href={ROUTES.CONTACT}
              className="px-8 py-3 bg-gradient-to-r from-teal to-cyan text-white font-semibold rounded-lg hover:shadow-lg transition-all inline-flex items-center justify-center gap-2 mx-auto"
            >
              Apply for Personal Loan
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
                href={ROUTES.BUSINESS_LOAN}
                className="p-4 bg-gray-50 rounded-lg hover:bg-teal/10 hover:border-teal border-2 border-transparent transition-all group"
              >
                <h4 className="font-bold text-navy group-hover:text-teal transition-colors">Business Loan</h4>
                <p className="text-sm text-gray-600 mt-1">Grow your business</p>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Vaultline Personal Loan Contact Section */}
    <VaultContactSection
      theme="indigo-cyan"
      brandTag="SM Associate · Instant Credit Desk"
      title={
        <>
          Instant personal capital without <em>collateral</em>.
        </>
      }
      subtitle="Fast digital disbursal within 24 hours, competitive rates from 7.9%, flexible tenures up to 5 years, and zero hidden charges."
      stats={[
        { label: 'Instant Credits Disbursed', target: 1250, suffix: '+' },
        { label: 'Approval Speed', target: '5 Mins', isStatic: true },
        { label: 'Starting Rate', target: '7.9% p.a.', isStatic: true },
      ]}
      formEyebrow="Personal Credit Inquiry"
      formTitle="Get pre-approved in minutes."
      formSubtitle="Need funds for emergencies, medical expenses, weddings, or home improvement? Tell us below."
      reasonLabel="Funding Requirement"
      reasonOptions={[
        { value: 'instant_cash', label: 'Instant Micro Loan (₹10K-₹50K)' },
        { value: 'express_loan', label: 'Express Personal Loan (Up to ₹5L)' },
        { value: 'high_value', label: 'High-Value Loan (₹5L - ₹25L)' },
        { value: 'debt_consolidation', label: 'Debt Consolidation' },
      ]}
      defaultReason="express_loan"
      valueLabel="Desired Loan Amount"
      valuePlaceholder="e.g. ₹2,00,000"
      phoneLabel="Phone Number"
      phonePlaceholder="+91 97902 19874"
      messagePlaceholder="Tell us about the purpose, your monthly income, or tenure preference..."
      submitButtonText="Submit Personal Loan Request"
    />

    {/* FAQ Section */}
    <FAQSection category="personalLoan" />

    {/* Testimonials Section */}
    <Testimonials />
    </>
  );
}
