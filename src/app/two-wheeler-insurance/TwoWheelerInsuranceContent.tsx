'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Calculator, ChevronRight, Zap, Bike, Award, Shield, FileText, Wrench } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ROUTES } from '@/lib/constants';
import Testimonials from '@/components/sections/Testimonials';
import VaultContactSection from '@/components/sections/VaultContactSection';
import FAQSection from '@/components/sections/FAQSection';

const insuranceData = {
  icon: Shield,
  title: 'Two Wheeler Insurance',
  subtitle: 'Instant Online Bike & Scooter Protection',
  description:
    'Protect your two-wheeler against accidents, theft, fire, natural disasters, and third-party liabilities with our instant online insurance plans.',
  features: [
    'Instant digital policy issuance in 60 seconds',
    '5,000+ cashless network garages across India',
    'Up to 50% No Claim Bonus (NCB) transfer facility',
    'Personal Accident Cover up to ₹15 Lakhs included',
    'Zero Depreciation add-on for 100% claim payout',
    '24/7 Roadside Assistance (towing, flat tire, fuel)',
    'Quick cashless claim settlement with zero hassle',
    'Cover for new and existing bikes/scooters'
  ],
  coveragePlans: [
    {
      title: 'Comprehensive Package Cover',
      tag: 'Recommended',
      description: 'Complete all-in-one protection covering own damage, third-party liability, theft, and natural disasters.',
      features: ['Own Damage Cover', 'Third-Party Liability', 'Theft & Fire Protection', 'Personal Accident Cover']
    },
    {
      title: 'Standalone Third-Party Cover',
      tag: 'Mandatory by Law',
      description: 'Covers legal & financial liabilities arising from injury, death, or property damage caused to third parties.',
      features: ['Legal Compliance', 'Third-Party Property Damage', 'Third-Party Injury/Death Cover', 'Affordable Premiums']
    },
    {
      title: 'Own Damage (OD) Cover',
      tag: 'Flexible Addition',
      description: 'Protects your two-wheeler against accidental damage, theft, and vandalism if you already have Third-Party cover.',
      features: ['Accidental Damage Cover', 'Theft & Vandalism', 'Natural Calamities Protection', 'Add-on Compatibility']
    }
  ],
  addOns: [
    { title: 'Zero Depreciation', icon: Award, desc: 'Get 100% claim payout on replaced bike parts without any depreciation deduction.' },
    { title: 'Engine Protection', icon: Wrench, desc: 'Covers expensive engine and gearbox repair costs caused by water ingression or oil leaks.' },
    { title: '24/7 Roadside Help', icon: Zap, desc: 'Emergency towing, flat tire replacement, fuel delivery, and battery jumpstart anywhere.' },
    { title: 'Consumables Cover', icon: FileText, desc: 'Cover expenses for engine oil, coolant, nuts, bolts, and brake oil used during repairs.' }
  ],
  eligibility: [
    'Valid Bike Registration Certificate (RC)',
    'Current or previous insurance policy details (for renewal)',
    'Valid driving license of owner/driver',
    'Indian citizen or resident',
    'Available for all two-wheeler makes & models',
    'No physical vehicle inspection needed for active renewals'
  ],
  documents: [
    'Vehicle Registration Certificate (RC)',
    'Previous Year Insurance Policy Copy (if renewing)',
    'Valid Driving License copy',
    'Owner identification (Aadhar / PAN)',
    'Address proof (Utility bill / Aadhar)',
    'Claim inspection photos (only in case of lapsed policies over 90 days)'
  ]
};

export default function TwoWheelerInsuranceContent() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div>
      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container-padded max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Header */}
            <div className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Shield size={32} className="text-white" />
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-navy mb-2">{insuranceData.title}</h2>
                  <p className="text-xl text-emerald-600 font-semibold">{insuranceData.subtitle}</p>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">{insuranceData.description}</p>
            </div>

            {/* Key Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {insuranceData.features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={false}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100"
                >
                  <CheckCircle size={20} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Coverage Plans */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-navy mb-6">Choose Your Protection Plan</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {insuranceData.coveragePlans.map((plan, idx) => (
                  <motion.div
                    key={idx}
                    initial={false}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-6 rounded-2xl border border-emerald-500/20 bg-gradient-to-b from-emerald-500/5 to-transparent flex flex-col justify-between"
                  >
                    <div>
                      <span className="inline-block text-xs font-semibold px-3 py-1 bg-emerald-500/10 text-emerald-600 rounded-full mb-3">
                        {plan.tag}
                      </span>
                      <h4 className="text-xl font-bold text-navy mb-2">{plan.title}</h4>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">{plan.description}</p>
                      <ul className="space-y-2 mb-6">
                        {plan.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-2 text-xs text-gray-700">
                            <CheckCircle size={14} className="text-emerald-500" />
                            {feat}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link
                      href={ROUTES.CONTACT}
                      className="w-full py-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-xl text-center text-sm hover:shadow-lg transition-all"
                    >
                      Get Quote
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Add-Ons */}
            <motion.div
              initial={false}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-transparent p-8 rounded-2xl border border-emerald-500/20 mb-16"
            >
              <div className="flex items-center gap-3 mb-6">
                <Award size={28} className="text-emerald-600" />
                <h3 className="text-2xl font-bold text-navy">Popular Insurance Add-On Covers</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {insuranceData.addOns.map((addon, idx) => {
                  const Icon = addon.icon;
                  return (
                    <div key={idx} className="p-4 rounded-xl bg-white border border-emerald-500/20 shadow-sm flex items-start gap-4">
                      <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600 flex-shrink-0">
                        <Icon size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-navy text-base mb-1">{addon.title}</h4>
                        <p className="text-xs text-gray-600 leading-relaxed">{addon.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Eligibility & Documents */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {/* Eligibility */}
              <motion.div initial={isMounted ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }} animate={{ opacity: 1, y: 0 }} transition={isMounted ? { duration: 0.5 } : { duration: 0 }}>
                <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 p-8 rounded-2xl border border-emerald-500/20 h-full">
                  <h3 className="text-2xl font-bold text-navy mb-6">Policy Renewal Criteria</h3>
                  <ul className="space-y-3">
                    {insuranceData.eligibility.map((criterion, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-700 text-sm">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
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
                <div className="bg-gradient-to-br from-teal-500/10 to-emerald-500/10 p-8 rounded-2xl border border-teal-500/20 h-full">
                  <h3 className="text-2xl font-bold text-navy mb-6">Documents Required</h3>
                  <ul className="space-y-3">
                    {insuranceData.documents.map((doc, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-700 text-sm">
                        <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0" />
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* Related Tools & Vehicle Links */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {/* EMI / Premium Calculator Link */}
              <motion.div
                initial={false}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
                className="p-6 rounded-2xl bg-gradient-to-r from-emerald-500/5 to-teal-500/5 border border-emerald-500/20 flex flex-col justify-between"
              >
                <div>
                  <Calculator size={28} className="text-emerald-600 mb-3" />
                  <h4 className="text-lg font-bold text-navy mb-2">EMI &amp; Premium Calculator</h4>
                  <p className="text-xs text-gray-600 mb-4">Calculate exact installment payments and plan your budget easily.</p>
                </div>
                <Link
                  href={ROUTES.EMI_CALCULATOR}
                  className="inline-flex items-center justify-between px-4 py-2.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 text-white font-semibold rounded-xl text-xs hover:shadow-lg transition-all"
                >
                  <span>Open Calculator</span>
                  <ChevronRight size={16} />
                </Link>
              </motion.div>

              {/* Bike Loan Link */}
              <motion.div
                initial={false}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="p-6 rounded-2xl bg-gradient-to-r from-teal-500/5 to-emerald-500/5 border border-teal-500/20 flex flex-col justify-between"
              >
                <div>
                  <Bike size={28} className="text-teal-600 mb-3" />
                  <h4 className="text-lg font-bold text-navy mb-2">Two Wheeler Loans</h4>
                  <p className="text-xs text-gray-600 mb-4">Looking to buy a new bike? Get quick bike finance up to 100% value.</p>
                </div>
                <Link
                  href={ROUTES.BIKE_LOAN}
                  className="inline-flex items-center justify-between px-4 py-2.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 text-white font-semibold rounded-xl text-xs hover:shadow-lg transition-all"
                >
                  <span>Explore Bike Loans</span>
                  <ChevronRight size={16} />
                </Link>
              </motion.div>

              {/* Browse Pre-owned Bikes */}
              <motion.div
                initial={false}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="p-6 rounded-2xl bg-gradient-to-r from-emerald-500/5 to-teal-500/5 border border-emerald-500/20 flex flex-col justify-between"
              >
                <div>
                  <Bike size={28} className="text-emerald-600 mb-3" />
                  <h4 className="text-lg font-bold text-navy mb-2">Pre-Owned Bike Marketplace</h4>
                  <p className="text-xs text-gray-600 mb-4">Explore verified pre-owned bikes available for instant purchase.</p>
                </div>
                <Link
                  href={`${ROUTES.VEHICLES}?type=bike`}
                  className="inline-flex items-center justify-between px-4 py-2.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 text-white font-semibold rounded-xl text-xs hover:shadow-lg transition-all"
                >
                  <span>Browse Bikes</span>
                  <ChevronRight size={16} />
                </Link>
              </motion.div>
            </div>

            {/* Other Financial Products Grid */}
            <div className="pt-12 border-t border-gray-200">
              <h3 className="text-2xl font-bold text-navy mb-8">Explore Other Finance &amp; Loan Solutions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link
                  href={ROUTES.BIKE_LOAN}
                  className="p-4 bg-gray-50 rounded-xl hover:bg-emerald-500/10 hover:border-emerald-500 border-2 border-transparent transition-all group"
                >
                  <h4 className="font-bold text-navy group-hover:text-emerald-600 transition-colors">Bike Loan</h4>
                  <p className="text-sm text-gray-600 mt-1">Easy 2-wheeler finance</p>
                </Link>
                <Link
                  href={ROUTES.HOME_LOAN}
                  className="p-4 bg-gray-50 rounded-xl hover:bg-emerald-500/10 hover:border-emerald-500 border-2 border-transparent transition-all group"
                >
                  <h4 className="font-bold text-navy group-hover:text-emerald-600 transition-colors">Home Loan</h4>
                  <p className="text-sm text-gray-600 mt-1">Build your dream home</p>
                </Link>
                <Link
                  href={ROUTES.CAR_LOAN}
                  className="p-4 bg-gray-50 rounded-xl hover:bg-emerald-500/10 hover:border-emerald-500 border-2 border-transparent transition-all group"
                >
                  <h4 className="font-bold text-navy group-hover:text-emerald-600 transition-colors">Car Loan</h4>
                  <p className="text-sm text-gray-600 mt-1">Finance your dream car</p>
                </Link>
                <Link
                  href={ROUTES.PERSONAL_LOAN}
                  className="p-4 bg-gray-50 rounded-xl hover:bg-emerald-500/10 hover:border-emerald-500 border-2 border-transparent transition-all group"
                >
                  <h4 className="font-bold text-navy group-hover:text-emerald-600 transition-colors">Personal Loan</h4>
                  <p className="text-sm text-gray-600 mt-1">Instant personal credit</p>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vaultline Two-Wheeler Insurance Contact Section */}
      <VaultContactSection
        theme="zinc-emerald"
        brandTag="SM Associate · Motor Insurance Desk"
        title={
          <>
            Protect your ride with <em>instant digital cover</em>.
          </>
        }
        subtitle="Cashless claim support across 5,000+ garages, up to 50% NCB bonus transfer, zero depreciation add-ons, and instant policy delivery."
        stats={[
          { label: 'Policies Issued, YTD', target: 2400, suffix: '+' },
          { label: 'Network Garages', target: '5,000+', isStatic: true },
          { label: 'Max NCB Discount', target: 'Up to 50%', isStatic: true },
        ]}
        formEyebrow="Insurance Policy Desk"
        formTitle="Instant policy quotation in 60 seconds."
        formSubtitle="Tell us about your bike or scooter — we will compare the top insurers to find your highest discount."
        reasonLabel="Policy Type Needed"
        reasonOptions={[
          { value: 'comprehensive', label: 'Comprehensive Package Cover' },
          { value: 'third_party', label: 'Third-Party Mandatory' },
          { value: 'own_damage', label: 'Standalone Own Damage (OD)' },
          { value: 'renewal_ncb', label: 'Policy Renewal / NCB Transfer' },
        ]}
        defaultReason="comprehensive"
        valueLabel="Vehicle IDV / Expected Value"
        valuePlaceholder="e.g. ₹95,000"
        phoneLabel="Contact / WhatsApp Number"
        phonePlaceholder="+91 97902 19874"
        messagePlaceholder="Provide bike registration number, manufacturing year, current policy expiry date, or any questions..."
        submitButtonText="Get Instant Insurance Quote"
      />

      {/* FAQ Section */}
      <FAQSection category="twoWheelerInsurance" />

      {/* Testimonials Section */}
      <Testimonials />
    </div>
  );
}
