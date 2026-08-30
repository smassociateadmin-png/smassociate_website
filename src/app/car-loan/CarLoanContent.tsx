'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Calculator, ChevronRight, DollarSign, Car } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ROUTES } from '@/lib/constants';
import Testimonials from '@/components/sections/Testimonials';
import VaultContactSection from '@/components/sections/VaultContactSection';
import FAQSection from '@/components/sections/FAQSection';

const carLoan = {
  icon: Car,
  title: 'Car Loan',
  subtitle: 'Drive Your Dream Car',
  description: 'Easy financing for new and pre-owned vehicles with flexible payment options, minimal documentation, and quick approval.',
  features: [
    'Instant processing and approval (same-day possible)',
    'Best market interest rates starting from 7.2%',
    'Minimal documentation required',
    'Finance both new and used vehicles',
    'Online application process',
    'Quick disbursement within 48 hours',
    'Flexible loan tenure from 1 to 7 years',
    'No prepayment penalties'
  ],
  eligibility: [
    'Age between 21-70 years',
    'Stable employment (private/government/self-employed)',
    'Monthly income minimum ₹15,000',
    'Good credit profile and credit score 650+',
    'Indian citizen or NRI',
    'Employment stability of 1+ year',
    'Existing relationship with SM Associate (optional)'
  ],
  documents: [
    'Valid ID proof (Passport, Aadhar, Driving License)',
    'Address proof (Recent utility bill, rental agreement)',
    'Income proof (Salary slips for last 3 months)',
    'Bank account statement (6-12 months)',
    'Vehicle registration and insurance documents',
    'PAN card',
    'Spouse consent letter (if married)',
    'Recent photographs'
  ],
  interestRates: [
    'New Car: Starting from 7.2% p.a.',
    'Used Car: Starting from 7.8% p.a.',
    'Second car: Starting from 8.5% p.a.',
    'Rates vary based on credit profile and income',
    'Special rates for repeat customers'
  ]
};

export default function CarLoanContent() {
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
                <Car size={32} className="text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-navy mb-2">{carLoan.title}</h1>
                <p className="text-xl text-teal font-semibold">{carLoan.subtitle}</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">{carLoan.description}</p>
            <div className="mt-6 p-5 bg-teal/5 border-l-4 border-teal rounded">
              <p className="text-gray-700 font-semibold">
                Looking for a reliable car loan in Tirunelveli? SM Associate offers competitive interest rates from 7.2% with quick approval and hassle-free documentation. Whether you&apos;re looking to finance a new sedan, SUV, or pre-owned vehicle, we have flexible options tailored to your needs.
              </p>
            </div>
          </div>

          {/* Key Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {carLoan.features.map((feature, idx) => (
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

          {/* Interest Rates Section */}
          <motion.div
            initial={isMounted ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={isMounted ? { duration: 0.5 } : { duration: 0 }}
            className="bg-gradient-to-br from-teal/10 to-cyan/10 p-8 rounded-xl border border-teal/20 mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <DollarSign size={28} className="text-teal" />
              <h2 className="text-2xl font-bold text-navy">Car Loan Interest Rates & EMI</h2>
            </div>
            <p className="text-gray-700 mb-6">Our competitive car loan interest rates are designed to fit your budget. Whether financing a new car or pre-owned vehicle, we offer transparent pricing with no hidden charges.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {carLoan.interestRates.map((rate, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-teal rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{rate}</span>
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
                  {carLoan.eligibility.map((criterion, idx) => (
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
                  {carLoan.documents.map((doc, idx) => (
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
              <h3 className="text-2xl font-bold text-navy">Calculate Your Car Loan EMI</h3>
            </div>
            <p className="text-gray-700 mb-6">
              Find out your exact monthly payment with our advanced EMI calculator. Enter your loan amount, interest rate, and tenure.
            </p>
            <Link
              href={ROUTES.EMI_CALCULATOR}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal to-cyan text-white font-semibold rounded-lg hover:shadow-lg transition-all"
            >
              Calculate EMI
              <Calculator size={20} />
            </Link>
          </motion.div>

          {/* Browse Vehicles Section */}
          <motion.div
            initial={isMounted ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={isMounted ? { duration: 0.5 } : { duration: 0 }}
            className="bg-gradient-to-r from-cyan/5 to-teal/5 p-8 rounded-xl border border-cyan/20 mb-16"
          >
            <h3 className="text-2xl font-bold text-navy mb-4">Browse Our Vehicle Collection</h3>
            <p className="text-gray-700 mb-6">
              Explore our curated selection of pre-owned cars. We help you find the perfect vehicle and arrange financing for it.
            </p>
            <Link
              href={ROUTES.VEHICLES}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal to-cyan text-white font-semibold rounded-lg hover:shadow-lg transition-all"
            >
              Browse Cars
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
            <h3 className="text-2xl font-bold text-navy mb-4">Ready to Apply for a Car Loan?</h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Complete your car loan application in minutes. Our team will review your details and contact you with an offer.
            </p>
            <Link
              href={ROUTES.CONTACT}
              className="px-8 py-3 bg-gradient-to-r from-teal to-cyan text-white font-semibold rounded-lg hover:shadow-lg transition-all inline-flex items-center justify-center gap-2 mx-auto"
            >
              Apply for Car Loan
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

    {/* Vaultline Car Loan Contact Section */}
    <VaultContactSection
      theme="blue-cyan"
      brandTag="SM Associate · Auto Finance Desk"
      title={
        <>
          Drive your dream car with <em>smart financing</em>.
        </>
      }
      subtitle="Fast approval, best interest rates from 7.2%, and flexible tenures for both new & pre-owned cars across Tamil Nadu."
      stats={[
        { label: 'Vehicles Financed, YTD', target: 850, suffix: '+' },
        { label: 'Fastest Disbursal', target: '48 hrs', isStatic: true },
        { label: 'Starting Interest Rate', target: '7.2% p.a.', isStatic: true },
      ]}
      formEyebrow="Car Loan Inquiry"
      formTitle="Get an instant auto loan quote."
      formSubtitle="Tell us about the vehicle and loan amount you need — our specialist will respond within hours."
      reasonLabel="Financing Type"
      reasonOptions={[
        { value: 'new_car', label: 'New Car Loan' },
        { value: 'used_car', label: 'Used Car Loan' },
        { value: 'refinance', label: 'Car Loan Refinancing' },
        { value: 'topup', label: 'Top-up on Existing Loan' },
      ]}
      defaultReason="new_car"
      valueLabel="Vehicle / Loan Value"
      valuePlaceholder="e.g. ₹6,50,000"
      phoneLabel="Phone Number"
      phonePlaceholder="+91 97902 19874"
      messagePlaceholder="Mention car brand/model, required loan amount, preferred tenure, or any questions..."
      submitButtonText="Submit Car Loan Inquiry"
    />

    {/* FAQ Section */}
    <FAQSection category="carLoan" />

    {/* Testimonials Section */}
    <Testimonials />
    </>
  );
}
