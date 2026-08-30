'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Calculator, ChevronRight, Bike, Award } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ROUTES } from '@/lib/constants';
import Testimonials from '@/components/sections/Testimonials';
import VaultContactSection from '@/components/sections/VaultContactSection';
import FAQSection from '@/components/sections/FAQSection';

export default function BikeLoanContent() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const bikeLoan = {
    icon: Bike,
    title: 'Bike Loan',
    subtitle: 'Easy Two-Wheeler Finance',
    description: 'Quick and hassle-free financing for new and used bikes at attractive rates with minimal documentation.',
    features: [
      'Quick approval in 24-48 hours',
      'Low processing fees (0.5-1%)',
      'Flexible repayment tenure (12 to 60 months)',
      'Easy documentation process',
      'Fast disbursement within 48 hours',
      'No hidden charges or penalties',
      'Finance both new and used bikes',
      'Balance transfer facility available'
    ],
    eligibility: [
      'Age between 18-65 years',
      'Regular income source',
      'Valid driving license',
      'Minimum monthly income ₹10,000',
      'Good credit history',
      'Indian citizen or NRI',
      'Employment stability of 6+ months',
      'Salaried or self-employed individuals'
    ],
    documents: [
      'Valid ID proof (Aadhar, Passport, Driving License)',
      'Address proof (Recent utility bill, rental agreement)',
      'Income proof (Salary slip or business proof)',
      'Recent bank statement (3-6 months)',
      'Driving license (valid)',
      'PAN card',
      'Recent passport-sized photographs',
      'Bike RC/registration certificate'
    ],
    benefits: [
      'Lower EMI compared to other loans',
      'Flexible loan tenure for manageable payments',
      'Process loan quickly for urgent needs',
      'Choose from new and used bikes',
      'No age restriction for bike type',
      'Same-day approval possible',
      'Expert guidance throughout application'
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
                <Bike size={32} className="text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-navy mb-2">{bikeLoan.title}</h1>
                <p className="text-xl text-teal font-semibold">{bikeLoan.subtitle}</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">{bikeLoan.description}</p>
            <div className="mt-6 p-5 bg-teal/5 border-l-4 border-teal rounded">
              <p className="text-gray-700 font-semibold">
                Looking for affordable bike financing in Tirunelveli? SM Associate offers quick two-wheeler loans with competitive interest rates from 8.5%, approval in 24-48 hours, and minimal documentation. Whether you need a new bike, used bike, or want to upgrade your two-wheeler, we have flexible financing solutions for you.
              </p>
            </div>
          </div>

          {/* Key Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {bikeLoan.features.map((feature, idx) => (
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

          {/* Benefits Highlight */}
          <motion.div
            initial={isMounted ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={isMounted ? { duration: 0.5 } : { duration: 0 }}
            className="bg-gradient-to-br from-teal/10 to-cyan/10 p-8 rounded-xl border border-teal/20 mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <Award size={28} className="text-teal" />
              <h2 className="text-2xl font-bold text-navy">Why Choose Our Bike Loan?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {bikeLoan.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-teal rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{benefit}</span>
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
                <h2 className="text-2xl font-bold text-navy mb-6">Eligibility Criteria</h2>
                <ul className="space-y-3">
                  {bikeLoan.eligibility.map((criterion, idx) => (
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
                <h2 className="text-2xl font-bold text-navy mb-6">Documents Required</h2>
                <ul className="space-y-3">
                  {bikeLoan.documents.map((doc, idx) => (
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
              <h2 className="text-2xl font-bold text-navy">Calculate Your Bike Loan EMI</h2>
            </div>
            <p className="text-gray-700 mb-6">
              Find your monthly payment amount with our easy-to-use EMI calculator. See exact payment details for different tenures.
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
            <h2 className="text-2xl font-bold text-navy mb-4">Browse Our Bike Collection</h2>
            <p className="text-gray-700 mb-6">
              Explore quality pre-owned bikes available for purchase. We can arrange financing for any bike in our collection.
            </p>
            <Link
              href={`${ROUTES.VEHICLES}?type=bike`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal to-cyan text-white font-semibold rounded-lg hover:shadow-lg transition-all"
            >
              Browse Bikes
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
            <h2 className="text-2xl font-bold text-navy mb-4">Ready to Get Your Dream Bike?</h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Apply for a bike loan today and ride away on your new bike within days. Simple process, quick approval!
            </p>
            <Link
              href={ROUTES.CONTACT}
              className="px-8 py-3 bg-gradient-to-r from-teal to-cyan text-white font-semibold rounded-lg hover:shadow-lg transition-all inline-flex items-center justify-center gap-2 mx-auto"
            >
              Apply for Bike Loan
              <ChevronRight size={20} />
            </Link>
          </motion.div>

          {/* Other Loan Types */}
          <div className="pt-12 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-navy mb-8">Explore Other Loan Types</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link
                href={ROUTES.HOME_LOAN}
                className="p-4 bg-gray-50 rounded-lg hover:bg-teal/10 hover:border-teal border-2 border-transparent transition-all group"
              >
                <h3 className="font-bold text-navy group-hover:text-teal transition-colors">Home Loan</h3>
                <p className="text-sm text-gray-600 mt-1">Build your dream home</p>
              </Link>
              <Link
                href={ROUTES.CAR_LOAN}
                className="p-4 bg-gray-50 rounded-lg hover:bg-teal/10 hover:border-teal border-2 border-transparent transition-all group"
              >
                <h3 className="font-bold text-navy group-hover:text-teal transition-colors">Car Loan</h3>
                <p className="text-sm text-gray-600 mt-1">Finance your dream car</p>
              </Link>
              <Link
                href={ROUTES.PERSONAL_LOAN}
                className="p-4 bg-gray-50 rounded-lg hover:bg-teal/10 hover:border-teal border-2 border-transparent transition-all group"
              >
                <h3 className="font-bold text-navy group-hover:text-teal transition-colors">Personal Loan</h3>
                <p className="text-sm text-gray-600 mt-1">Quick personal funds</p>
              </Link>
              <Link
                href={ROUTES.BUSINESS_LOAN}
                className="p-4 bg-gray-50 rounded-lg hover:bg-teal/10 hover:border-teal border-2 border-transparent transition-all group"
              >
                <h3 className="font-bold text-navy group-hover:text-teal transition-colors">Business Loan</h3>
                <p className="text-sm text-gray-600 mt-1">Grow your business</p>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Vaultline Bike Loan Contact Section */}
    <VaultContactSection
      theme="orange-amber"
      brandTag="SM Associate · Two-Wheeler Finance Desk"
      title={
        <>
          Ride your favorite bike with <em>instant approval</em>.
        </>
      }
      subtitle="Superfast 60-minute processing, minimal KYC documents, lowest processing fee, and flexible EMIs for new & pre-owned two-wheelers."
      stats={[
        { label: 'Bikes Financed, YTD', target: 980, suffix: '+' },
        { label: 'Approval Speed', target: '60 Mins', isStatic: true },
        { label: 'Down Payment From', target: '₹0 Down', isStatic: true },
      ]}
      formEyebrow="Two-Wheeler Loan Desk"
      formTitle="Get on the road faster."
      formSubtitle="Tell us the bike make, model, and city — we will get you on the saddle with lowest monthly EMIs."
      reasonLabel="Two-Wheeler Loan Category"
      reasonOptions={[
        { value: 'commuter_bike', label: 'Commuter Bike (100cc-160cc)' },
        { value: 'scooter', label: 'Scooter / EV Two-Wheeler' },
        { value: 'premium_sports', label: 'Sports / Cruiser (200cc+)' },
        { value: 'used_bike', label: 'Pre-Owned Bike Finance' },
      ]}
      defaultReason="commuter_bike"
      valueLabel="On-Road Price / Loan Needed"
      valuePlaceholder="e.g. ₹1,20,000"
      phoneLabel="Phone Number"
      phonePlaceholder="+91 97902 19874"
      messagePlaceholder="Mention preferred bike model, showroom quote, down-payment budget, or any inquiries..."
      submitButtonText="Submit Bike Loan Inquiry"
    />

    {/* FAQ Section */}
    <FAQSection category="bikeLoan" />

    {/* Testimonials Section */}
    <Testimonials />
    </>
  );
}
