'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calculator, DollarSign, Percent, Calendar, TrendingUp, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { ROUTES } from '@/lib/constants';

export default function EMICalculatorHero() {
  const [loanAmount, setLoanAmount] = useState(300000);
  const [interestRate, setInterestRate] = useState(9.5);
  const [tenure, setTenure] = useState(60);
  // isMounted prevents toLocaleString() from running during SSR where the
  // system locale may differ from the browser, causing a hydration mismatch.
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => { setIsMounted(true); }, []);

  // Calculate EMI
  const monthlyRate = interestRate / 12 / 100;
  const emi =
    loanAmount *
    (monthlyRate * Math.pow(1 + monthlyRate, tenure)) /
    (Math.pow(1 + monthlyRate, tenure) - 1);
  const totalAmount = emi * tenure;
  const totalInterest = totalAmount - loanAmount;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const counterVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-900 overflow-hidden pt-8 pb-6">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-8"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center justify-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-cyan-500 to-sky-500" />
              <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">
                Financial Planning Tool
              </span>
              <div className="w-1 h-8 bg-gradient-to-b from-sky-500 to-cyan-500" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              Calculate Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-teal-300">
                Perfect EMI
              </span>
            </h1>
            <p className="text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto">
              Plan your finances with confidence using our free, interactive EMI calculator. Adjust the loan amount (₹1 Lakh–₹50 Lakhs), interest rate (5%–15%), and tenure (1–10 years) to instantly see your monthly EMI, principal, total interest, and total amount payable — then apply directly using your calculated details.
            </p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left - Calculator */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative pb-8"
          >
            {/* Calculator Container */}
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 rounded-2xl p-8 border border-slate-700/50 backdrop-blur-sm">
              {/* Calculator Header */}
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-700/50">
                <div className="flex items-center gap-3">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center"
                  >
                    <Calculator className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <p className="text-white font-bold">EMI Calculator</p>
                    <p className="text-xs text-slate-300 font-medium">Real-time calculations</p>
                  </div>
                </div>
              </div>

              {/* Input Controls */}
              <div className="space-y-8">
                {/* Loan Amount */}
                <motion.div variants={itemVariants} className="space-y-4">
                  <div className="flex items-center justify-between">
                    <label className="text-slate-200 font-semibold flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-teal-400" />
                      Loan Amount
                    </label>
                    <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                      ₹{(loanAmount / 100000).toFixed(1)}L
                    </span>
                  </div>
                  <div className="relative">
                    <input
                      type="range"
                      min="100000"
                      max="5000000"
                      step="50000"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(Number(e.target.value))}
                      className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-teal-500"
                    />
                    <div className="flex justify-between text-xs text-slate-300 font-medium mt-2">
                      <span>₹1L</span>
                      <span>₹50L</span>
                    </div>
                  </div>
                </motion.div>

                {/* Interest Rate */}
                <motion.div variants={itemVariants} className="space-y-4">
                  <div className="flex items-center justify-between">
                    <label className="text-slate-200 font-semibold flex items-center gap-2">
                      <Percent className="w-5 h-5 text-cyan-400" />
                      Interest Rate
                    </label>
                    <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                      {interestRate.toFixed(2)}%
                    </span>
                  </div>
                  <div className="relative">
                    <input
                      type="range"
                      min="5"
                      max="15"
                      step="0.1"
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                    />
                    <div className="flex justify-between text-xs text-slate-300 font-medium mt-2">
                      <span>5%</span>
                      <span>15%</span>
                    </div>
                  </div>
                </motion.div>

                {/* Tenure */}
                <motion.div variants={itemVariants} className="space-y-4">
                  <div className="flex items-center justify-between">
                    <label className="text-slate-200 font-semibold flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-blue-400" />
                      Tenure (Months)
                    </label>
                    <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                      {tenure}
                    </span>
                  </div>
                  <div className="relative">
                    <input
                      type="range"
                      min="12"
                      max="120"
                      step="6"
                      value={tenure}
                      onChange={(e) => setTenure(Number(e.target.value))}
                      className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                    />
                    <div className="flex justify-between text-xs text-slate-300 font-medium mt-2">
                      <span>1 year</span>
                      <span>10 years</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Floating Badge — inside flow, not absolute-clipping */}
            <motion.div
              className="mt-4 mx-auto w-fit px-4 py-2 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-sm font-semibold shadow-lg"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Adjust &amp; Calculate
            </motion.div>
          </motion.div>

          {/* Right - Results */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {/* Main EMI Display */}
            <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
              <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 rounded-2xl p-8 border border-slate-700/50 hover:border-teal-500/30 transition-all backdrop-blur-sm">
                <p className="text-slate-300 text-sm uppercase tracking-wider font-semibold mb-3">
                  Monthly EMI
                </p>
                <motion.p
                  key={Math.round(emi)}
                  variants={counterVariants}
                  className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400"
                >
                  ₹{isMounted ? Math.round(emi).toLocaleString() : Math.round(emi).toString()}
                </motion.p>
                <p className="text-slate-300 text-sm mt-4">
                  Your easy monthly installment for {tenure} months
                </p>
              </div>
            </motion.div>

            {/* Breakdown Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="p-6 rounded-xl bg-slate-800/40 border border-slate-700/40 hover:border-teal-500/30 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-300 text-sm font-medium mb-2">Principal Amount</p>
                    <p className="text-2xl font-bold text-white">
                      ₹{(loanAmount / 100000).toFixed(2)}L
                    </p>
                  </div>
                  <DollarSign className="w-8 h-8 text-teal-400/60" />
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="p-6 rounded-xl bg-slate-800/40 border border-slate-700/40 hover:border-cyan-500/30 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-300 text-sm font-medium mb-2">Total Interest</p>
                    <p className="text-2xl font-bold text-white">
                      ₹{(totalInterest / 100000).toFixed(2)}L
                    </p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-cyan-400/60" />
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="p-6 rounded-xl bg-slate-800/40 border border-slate-700/40 hover:border-blue-500/30 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-300 text-sm font-medium mb-2">Total Amount</p>
                    <p className="text-2xl font-bold text-white">
                      ₹{(totalAmount / 100000).toFixed(2)}L
                    </p>
                  </div>
                  <Calculator className="w-8 h-8 text-blue-400/60" />
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="p-6 rounded-xl bg-slate-800/40 border border-slate-700/40 hover:border-green-500/30 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-300 text-sm font-medium mb-2">Loan Tenure</p>
                    <p className="text-2xl font-bold text-white">{tenure} months</p>
                  </div>
                  <Calendar className="w-8 h-8 text-green-400/60" />
                </div>
              </motion.div>
            </div>

            {/* Features */}
            <motion.div variants={itemVariants} className="space-y-3 pt-6 border-t border-slate-700/50">
              {[
                'Instant approval process',
                'Flexible tenure options',
                'No hidden charges',
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3 text-slate-200">
                  <CheckCircle className="w-5 h-5 text-teal-400 flex-shrink-0" />
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <Link
              href={ROUTES.LOANS}
              className="w-full py-4 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold hover:shadow-lg hover:shadow-teal-500/50 transition-all block text-center mt-6"
            >
              Apply with These Details
            </Link>
          </motion.div>
        </div>

        {/* Bottom Info */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 pt-6 border-t border-slate-700/50"
        >
          {[
            {
              title: 'Transparent Pricing',
              desc: 'No hidden charges or surprise fees',
            },
            {
              title: '24/7 Support',
              desc: 'Our team available anytime you need',
            },
            {
              title: 'Quick Processing',
              desc: 'Funds within 24 hours of approval',
            },
          ].map((info, index) => (
            <motion.div key={index} variants={itemVariants} className="text-center">
              <p className="text-white font-semibold mb-2">{info.title}</p>
              <p className="text-slate-300 text-sm font-medium">{info.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
