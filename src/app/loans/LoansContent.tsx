'use client';

import { motion } from 'framer-motion';
import { Home, Car, Bike, Wallet, Briefcase, Shield, ChevronRight, CheckCircle, Zap, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ROUTES } from '@/lib/constants';
import Testimonials from '@/components/sections/Testimonials';
import VaultContactSection from '@/components/sections/VaultContactSection';
import FAQSection from '@/components/sections/FAQSection';

const loanProducts = [
  {
    icon: Home,
    title: 'Home Loan',
    subtitle: 'Build Your Dream Home',
    description: 'Affordable financing for home purchase, construction, and renovation projects.',
    shortFeatures: ['Competitive rates', 'Flexible tenure', 'Easy approval'],
    route: ROUTES.HOME_LOAN
  },
  {
    icon: Car,
    title: 'Car Loan',
    subtitle: 'Drive Your Dream Car',
    description: 'Easy financing for new and pre-owned vehicles with flexible payment options.',
    shortFeatures: ['Instant processing', 'Best rates', 'Online application'],
    route: ROUTES.CAR_LOAN
  },
  {
    icon: Bike,
    title: 'Bike Loan',
    subtitle: 'Easy Two-Wheeler Finance',
    description: 'Quick and hassle-free financing for new and used bikes at attractive rates.',
    shortFeatures: ['Quick approval', 'Low fees', 'Fast disbursement'],
    route: ROUTES.BIKE_LOAN
  },
  {
    icon: Wallet,
    title: 'Personal Loan',
    subtitle: 'Instant Personal Funds',
    description: 'Quick personal loans without collateral for any personal need.',
    shortFeatures: ['No collateral', 'Instant approval', 'Flexible tenure'],
    route: ROUTES.PERSONAL_LOAN
  },
  {
    icon: Briefcase,
    title: 'Business Loan',
    subtitle: 'Grow Your Business',
    description: 'Financing solutions for business expansion, working capital, and equipment purchase.',
    shortFeatures: ['Higher amounts', 'Flexible terms', 'Business support'],
    route: ROUTES.BUSINESS_LOAN
  },
  {
    icon: Shield,
    title: 'Two Wheeler Insurance',
    subtitle: 'Instant Bike Protection',
    description: 'Comprehensive & third-party 2-wheeler insurance online with up to 85% discount & 0 paperwork.',
    shortFeatures: ['60-sec issuance', '5,000+ garages', 'Up to 50% NCB'],
    route: ROUTES.TWO_WHEELER_INSURANCE
  }
];

export default function LoansContent() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div>
      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container-padded max-w-4xl">
          <motion.div
            initial={isMounted ? { opacity: 0 } : { opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={isMounted ? { duration: 0.5 } : { duration: 0 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-navy mb-6">Choose the Right Loan for You</h2>
            <p className="text-gray-700 mb-4">
              SM Associate offers a diverse range of loan products to meet every financial need. Whether you&apos;re buying a home, vehicle, or need personal funds, 
              we have the perfect financing solution for you.
            </p>
            <p className="text-gray-700">
              Each loan type is designed with flexibility, competitive rates, and customer-centric terms. Browse our products below to learn more.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Loan Products Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container-padded">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loanProducts.map((product, idx) => {
              const Icon = product.icon;
              return (
                <motion.div
                  key={idx}
                  initial={isMounted ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={isMounted ? { delay: idx * 0.1, duration: 0.5 } : { duration: 0 }}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:border-teal border-2 border-transparent transition-all group cursor-pointer"
                >
                  <div className="p-6 h-full flex flex-col">
                    {/* Icon */}
                    <div className="w-12 h-12 bg-gradient-to-r from-teal to-cyan rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon size={24} className="text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-bold text-navy mb-1 group-hover:text-teal transition-colors">{product.title}</h3>
                    <p className="text-sm text-teal font-semibold mb-3">{product.subtitle}</p>
                    <p className="text-sm text-gray-600 mb-4 flex-grow">{product.description}</p>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {product.shortFeatures.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle size={16} className="text-teal flex-shrink-0" />
                          <span className="text-xs text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <Link
                      href={product.route}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-teal to-cyan text-white font-semibold rounded-lg hover:shadow-lg transition-all text-sm group-hover:scale-105"
                    >
                      Learn More
                      <ChevronRight size={16} />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-white">
        <div className="container-padded max-w-5xl">
          <h2 className="text-4xl font-bold text-navy mb-12 text-center">Quick Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-teal/30">
                  <th className="text-left py-4 px-4 text-navy font-bold">Feature</th>
                  <th className="text-center py-4 px-4 text-navy font-bold">Home Loan</th>
                  <th className="text-center py-4 px-4 text-navy font-bold">Car Loan</th>
                  <th className="text-center py-4 px-4 text-navy font-bold">Bike Loan</th>
                  <th className="text-center py-4 px-4 text-navy font-bold">Personal Loan</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-4 text-navy font-semibold">Max Amount</td>
                  <td className="py-4 px-4 text-center">₹1 Cr+</td>
                  <td className="py-4 px-4 text-center">₹50 Lakh</td>
                  <td className="py-4 px-4 text-center">₹10 Lakh</td>
                  <td className="py-4 px-4 text-center">₹25 Lakh</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-4 text-navy font-semibold">Min Rate</td>
                  <td className="py-4 px-4 text-center">6.5%</td>
                  <td className="py-4 px-4 text-center">7.2%</td>
                  <td className="py-4 px-4 text-center">8.5%</td>
                  <td className="py-4 px-4 text-center">10%</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-4 text-navy font-semibold">Max Tenure</td>
                  <td className="py-4 px-4 text-center">30 years</td>
                  <td className="py-4 px-4 text-center">7 years</td>
                  <td className="py-4 px-4 text-center">5 years</td>
                  <td className="py-4 px-4 text-center">5 years</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-navy font-semibold">Collateral</td>
                  <td className="py-4 px-4 text-center">Property</td>
                  <td className="py-4 px-4 text-center">Vehicle</td>
                  <td className="py-4 px-4 text-center">Vehicle</td>
                  <td className="py-4 px-4 text-center">None</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container-padded max-w-5xl">
          <h2 className="text-4xl font-bold text-navy mb-12 text-center">Why Choose SM Associate?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={isMounted ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={isMounted ? { duration: 0.5 } : { duration: 0 }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-teal to-cyan rounded-lg flex items-center justify-center mb-4">
                <Zap size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Fast Processing</h3>
              <p className="text-gray-700">Quick approval and disbursement within 24-48 hours for most loans.</p>
            </motion.div>

            <motion.div
              initial={isMounted ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={isMounted ? { delay: 0.1, duration: 0.5 } : { duration: 0 }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-teal to-cyan rounded-lg flex items-center justify-center mb-4">
                <TrendingUp size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Competitive Rates</h3>
              <p className="text-gray-700">Industry-leading interest rates tailored to your credit profile.</p>
            </motion.div>

            <motion.div
              initial={isMounted ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={isMounted ? { delay: 0.2, duration: 0.5 } : { duration: 0 }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-teal to-cyan rounded-lg flex items-center justify-center mb-4">
                <CheckCircle size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Transparent Terms</h3>
              <p className="text-gray-700">No hidden charges or surprise fees. Complete transparency in all dealings.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vaultline Loans Overview Contact Section */}
      <VaultContactSection
        theme="navy-teal"
        brandTag="SM Associate · Multi-Product Loan Desk"
        title={
          <>
            Access all loans through a <em>single trusted desk</em>.
          </>
        }
        subtitle="Compare home, car, bike, personal, and commercial loan offers from top banks with customized repayment plans."
        stats={[
          { label: 'Total Loans Disbursed', target: 21400000, prefix: '₹', suffix: '+' },
          { label: 'Partner Bank Network', target: '25+ Banks', isStatic: true },
          { label: 'Fastest Loan Approval', target: '24-48 hrs', isStatic: true },
        ]}
        formEyebrow="Universal Loan Desk"
        formTitle="Apply for any loan product in one step."
        formSubtitle="Tell us your financing requirements — our financial advisors will match you with the lowest interest rate."
        reasonLabel="Select Loan Type"
        reasonOptions={[
          { value: 'home_loan', label: 'Home Loan (from 6.5%)' },
          { value: 'car_loan', label: 'Car Loan (from 7.2%)' },
          { value: 'personal_loan', label: 'Personal Loan (from 7.9%)' },
          { value: 'business_loan', label: 'Business Loan (from 9.0%)' },
          { value: 'bike_loan', label: 'Two-Wheeler Loan' },
        ]}
        defaultReason="home_loan"
        valueLabel="Total Loan Amount Required"
        valuePlaceholder="e.g. ₹15,00,000"
        phoneLabel="Phone Number"
        phonePlaceholder="+91 97902 19874"
        messagePlaceholder="Describe what you are financing, your city location, or any specific loan questions..."
        submitButtonText="Submit Loan Application"
      />

      {/* FAQ Section */}
      <FAQSection category="loans" />

      {/* Testimonials Section */}
      <Testimonials />
    </div>
  );
}
