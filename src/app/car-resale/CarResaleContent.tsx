'use client';

import { motion } from 'framer-motion';
import { CheckCircle, TrendingUp, DollarSign, FileText, ChevronRight, Car } from 'lucide-react';
import Link from 'next/link';
import { ROUTES } from '@/lib/constants';
import Testimonials from '@/components/sections/Testimonials';
import VaultContactSection from '@/components/sections/VaultContactSection';
import FAQSection from '@/components/sections/FAQSection';

export default function CarResaleContent() {
  const steps = [
    { number: '01', title: 'Share Vehicle Details', description: 'Tell us about your car' },
    { number: '02', title: 'Upload Documents', description: 'Share registration and photos' },
    { number: '03', title: 'Get Valuation', description: 'Our experts assess your car' },
    { number: '04', title: 'Complete Sale', description: 'Finalize the transaction' },
  ];

  const whySellWithUs = [
    {
      icon: TrendingUp,
      title: 'Best Market Value',
      description: 'Get competitive prices for your used car based on current market rates'
    },
    {
      icon: CheckCircle,
      title: 'Hassle-Free Process',
      description: 'Simple documentation and quick verification process'
    },
    {
      icon: DollarSign,
      title: 'Instant Payment',
      description: 'Fast payment processing once verification is complete'
    },
    {
      icon: Car,
      title: 'Verified Buyers',
      description: 'Connect with verified buyers from our network'
    },
  ];

  return (
    <div>
      {/* Why Sell Section */}
      <section className="py-20 bg-white">
        <div className="container-padded max-w-5xl">
          <h2 className="text-4xl font-bold text-navy mb-12 text-center">Why Sell Your Car with SM Associate?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whySellWithUs.map((reason, idx) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={idx}
                  initial={false}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-teal to-cyan rounded-lg flex items-center justify-center">
                      <Icon size={24} className="text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy mb-2">{reason.title}</h3>
                    <p className="text-gray-700">{reason.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="container-padded max-w-5xl">
          <h2 className="text-4xl font-bold text-navy mb-12 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={false}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="relative"
              >
                <div className="bg-white p-6 rounded-xl border border-gray-200 h-full">
                  <div className="text-4xl font-bold text-teal/30 mb-4">{step.number}</div>
                  <h3 className="font-bold text-navy mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-gray-300">
                    <ChevronRight size={24} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Valuation Form Teaser */}
      <section className="py-20 bg-white">
        <div className="container-padded max-w-2xl text-center">
          <h2 className="text-4xl font-bold text-navy mb-6">Get Instant Valuation</h2>
          <p className="text-gray-700 mb-8">
            Tell us about your vehicle and we&apos;ll provide a fair market valuation within hours. No obligation to sell.
          </p>
          <Link
            href={ROUTES.SELL_VEHICLE}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-teal to-cyan text-white font-semibold rounded-lg hover:shadow-lg transition-all"
          >
            Start Valuation
            <ChevronRight size={20} />
          </Link>
        </div>
      </section>

      {/* Documents Needed */}
      <section className="py-20 bg-gray-50">
        <div className="container-padded max-w-4xl">
          <h2 className="text-4xl font-bold text-navy mb-12 text-center">Documents You&apos;ll Need</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Registration Certificate (RC)',
                description: 'Original RC book/card with clear details of the vehicle and ownership.'
              },
              {
                title: 'Valid Insurance',
                description: 'Active insurance policy document (Comprehensive or Third Party).'
              },
              {
                title: 'Pollution Certificate (PUC)',
                description: 'Valid PUC certificate from an authorized testing center.'
              },
              {
                title: 'ID & Address Proof',
                description: 'Aadhar card, PAN card, and current address proof of the registered owner.'
              },
              {
                title: 'Service History',
                description: 'Maintenance records and service history help get better valuation.'
              },
              {
                title: 'Bank Details',
                description: 'Cancelled cheque or bank statement for instant payment transfer.'
              }
            ].map((doc, idx) => (
              <motion.div
                key={idx}
                initial={false}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex gap-4 p-6 bg-white rounded-lg border border-gray-200"
              >
                <FileText className="text-teal flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-navy mb-1">{doc.title}</h3>
                  <p className="text-gray-600 text-sm">{doc.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection category="carResale" />

      {/* Vaultline Car Resale Contact Section */}
      <VaultContactSection
        theme="emerald-gold"
        brandTag="SM Associate · Vehicle Resale Desk"
        title={
          <>
            Turn your vehicle into <em>instant cash</em>.
          </>
        }
        subtitle="Free doorstep inspection, best market valuation, immediate bank payout, and 100% legal ownership transfer handling."
        stats={[
          { label: 'Vehicles Sold, YTD', target: 540, suffix: '+' },
          { label: 'Valuation Turnaround', target: '2-4 hrs', isStatic: true },
          { label: 'Payment Speed', target: 'Same Day', isStatic: true },
        ]}
        formEyebrow="Vehicle Valuation Inquiry"
        formTitle="Get a guaranteed cash offer today."
        formSubtitle="Tell us about the car or bike you want to sell or exchange — our appraisal team will revert with top market rate."
        reasonLabel="Resale Request Type"
        reasonOptions={[
          { value: 'sell_car', label: 'Sell Pre-Owned Car' },
          { value: 'sell_bike', label: 'Sell Pre-Owned Bike' },
          { value: 'exchange', label: 'Vehicle Exchange / Upgrade' },
          { value: 'loan_settle', label: 'Sell Car with Active Loan' },
        ]}
        defaultReason="sell_car"
        valueLabel="Expected Selling Price"
        valuePlaceholder="e.g. ₹4,50,000"
        phoneLabel="Phone / WhatsApp Number"
        phonePlaceholder="+91 97902 19874"
        messagePlaceholder="Provide vehicle make, model, variant, registration year, kilometer reading, and city location..."
        submitButtonText="Request Instant Vehicle Valuation"
      />

      <Testimonials />
    </div>
  );
}