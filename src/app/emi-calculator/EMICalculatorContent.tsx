'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Calculator } from 'lucide-react';
import Link from 'next/link';
import { ROUTES } from '@/lib/constants';
import Testimonials from '@/components/sections/Testimonials';
import VaultContactSection from '@/components/sections/VaultContactSection';
import FAQSection from '@/components/sections/FAQSection';

export default function EMICalculatorContent() {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [loanTenure, setLoanTenure] = useState(60);
  const [interestRate, setInterestRate] = useState(9.5);
  // isMounted prevents locale-dependent formatting from running during SSR
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => { setIsMounted(true); }, []);

  const calculateEMI = () => {
    const principal = loanAmount;
    const monthlyRate = interestRate / 12 / 100;
    const months = loanTenure;

    if (monthlyRate === 0) {
      return {
        emi: Math.round(principal / months),
        totalAmount: principal,
        totalInterest: 0,
      };
    }

    const emi =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);
    const totalAmount = emi * months;
    const totalInterest = totalAmount - principal;

    return {
      emi: Math.round(emi),
      totalAmount: Math.round(totalAmount),
      totalInterest: Math.round(totalInterest),
    };
  };

  const { emi, totalAmount, totalInterest } = calculateEMI();

  const calculatorFeatures = [
    'Home Loan EMI Calculator',
    'Car Loan EMI Calculator',
    'Bike Loan EMI Calculator',
    'Personal Loan EMI Calculator',
    'Business Loan EMI Calculator'
  ];

  return (
    <>
      {/* Calculator Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container-padded max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Input Form */}
            <motion.div
              initial={false}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, x: 0 }}
              className="lg:col-span-2"
            >
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
                <h2 className="text-2xl font-bold text-navy mb-8 flex items-center gap-2">
                  <Calculator size={28} className="text-teal" />
                  Calculate Your EMI
                </h2>

                <div className="space-y-8">
                  {/* Loan Amount */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-sm font-semibold text-gray-700">Loan Amount</label>
                      <span className="text-lg font-bold text-teal">
                        ₹{isMounted ? loanAmount.toLocaleString('en-IN') : loanAmount}
                      </span>
                    </div>
                    <input
                      type="range"
                      min="50000"
                      max="10000000"
                      step="50000"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-teal"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>₹50K</span>
                      <span>₹1 Cr</span>
                    </div>
                  </div>

                  {/* Interest Rate */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-sm font-semibold text-gray-700">Interest Rate (% p.a.)</label>
                      <span className="text-lg font-bold text-teal">{interestRate}%</span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="20"
                      step="0.1"
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-teal"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>5%</span>
                      <span>20%</span>
                    </div>
                  </div>

                  {/* Loan Tenure */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-sm font-semibold text-gray-700">Loan Tenure</label>
                      <span className="text-lg font-bold text-teal">
                        {Math.floor(loanTenure / 12)} Yrs ({loanTenure} Mos)
                      </span>
                    </div>
                    <input
                      type="range"
                      min="12"
                      max="360"
                      step="12"
                      value={loanTenure}
                      onChange={(e) => setLoanTenure(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-teal"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>1 Year</span>
                      <span>30 Years</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Results Card */}
            <motion.div
              initial={false}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <div className="bg-gradient-navy text-white p-8 rounded-xl shadow-lg h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-8">Loan Summary</h3>

                  <div className="space-y-6">
                    <div>
                      <p className="text-gray-300 text-sm mb-1">Monthly EMI</p>
                      <p className="text-3xl font-bold text-cyan">
                        ₹{isMounted ? emi.toLocaleString('en-IN') : emi}
                      </p>
                    </div>

                    <div className="border-t border-gray-700 pt-4">
                      <p className="text-gray-300 text-sm mb-1">Principal Amount</p>
                      <p className="text-xl font-semibold">
                        ₹{isMounted ? loanAmount.toLocaleString('en-IN') : loanAmount}
                      </p>
                    </div>

                    <div>
                      <p className="text-gray-300 text-sm mb-1">Total Interest</p>
                      <p className="text-xl font-semibold text-teal">
                        ₹{isMounted ? totalInterest.toLocaleString('en-IN') : totalInterest}
                      </p>
                    </div>

                    <div className="border-t border-gray-700 pt-4">
                      <p className="text-gray-300 text-sm mb-1">Total Amount Payable</p>
                      <p className="text-xl font-semibold">
                        ₹{isMounted ? totalAmount.toLocaleString('en-IN') : totalAmount}
                      </p>
                    </div>
                  </div>
                </div>

                <Link
                  href={ROUTES.CONTACT}
                  className="w-full mt-8 py-3 bg-gradient-to-r from-teal to-cyan text-white font-semibold rounded-lg hover:shadow-lg transition-all text-center block"
                >
                  Apply with this EMI
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="py-12 bg-white">
        <div className="container-padded max-w-4xl">
          <h2 className="text-2xl font-bold text-navy mb-6 text-center">Calculators We Provide</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {calculatorFeatures.map((feature, idx) => (
              <div key={idx} className="p-4 bg-gray-50 rounded-lg border border-gray-200 text-center">
                <p className="font-semibold text-gray-700">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Understanding EMI */}
      <section className="py-20 bg-white">
        <div className="container-padded max-w-4xl">
          <h2 className="text-3xl font-bold text-navy mb-12 text-center">Understanding EMI</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'What is EMI?',
                description: 'EMI (Equated Monthly Installment) is the fixed amount you pay monthly towards your loan. It includes both principal and interest portions.'
              },
              {
                title: 'How is EMI Calculated?',
                description: 'EMI is calculated using a formula that considers the loan amount, rate of interest, and tenure. It remains the same throughout the loan period.'
              },
              {
                title: 'How to Reduce EMI?',
                description: 'You can reduce your EMI by increasing the loan tenure or by getting a lower rate of interest. A larger down payment also helps.'
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={false}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 bg-gradient-to-br from-teal/10 to-cyan/10 rounded-xl border border-teal/20"
              >
                <h3 className="text-lg font-bold text-navy mb-3">{item.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vaultline EMI Calculator Contact Section */}
      <VaultContactSection
        theme="cyan-teal"
        brandTag="SM Associate · Financial Advisory Desk"
        title={
          <>
            Lock in your lowest monthly <em>repayment EMI</em>.
          </>
        }
        subtitle="Found your ideal monthly installment? Let our advisors negotiate custom interest discounts and fee waivers with partner banks."
        stats={[
          { label: 'Calculations Run, YTD', target: 15800, suffix: '+' },
          { label: 'Avg. Interest Savings', target: '0.50% - 1.25%', isStatic: true },
          { label: 'Bank Partners', target: '25+ Banks', isStatic: true },
        ]}
        formEyebrow="Loan Structure Request"
        formTitle="Lock in your calculated EMI."
        formSubtitle="Submit your preferred loan amount and tenure — we will issue an eligibility certificate within 24 hours."
        reasonLabel="Loan Category"
        reasonOptions={[
          { value: 'home_emi', label: 'Home Loan EMI' },
          { value: 'car_emi', label: 'Car Loan EMI' },
          { value: 'personal_emi', label: 'Personal Loan EMI' },
          { value: 'business_emi', label: 'Business Loan EMI' },
        ]}
        defaultReason="home_emi"
        valueLabel="Target Loan Amount"
        valuePlaceholder="e.g. ₹5,00,000"
        phoneLabel="Phone Number"
        phonePlaceholder="+91 97902 19874"
        messagePlaceholder="Mention your desired monthly EMI budget, current income, or pre-existing loans..."
        submitButtonText="Request Loan Eligibility Check"
      />

      {/* FAQ Section */}
      <FAQSection category="emiCalculator" />

      {/* Testimonials Section */}
      <Testimonials />
    </>
  );
}
