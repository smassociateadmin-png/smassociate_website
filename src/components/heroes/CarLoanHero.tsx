'use client';

import { motion } from 'framer-motion';
import { Car, ChevronRight, Zap, Clock } from 'lucide-react';
import Link from 'next/link';
import { ROUTES } from '@/lib/constants';
import AnimatedNumber from '@/components/AnimatedNumber';

export default function CarLoanHero() {
  const highlights = [
    { icon: Zap, label: 'Instant Approval', value: 'on eligible applications' },
    { icon: Clock, label: 'Quick Disbursal', value: 'after approval' },
    { icon: Car, label: 'Any Vehicle', value: 'new or pre-owned' },
  ];

  return (
    <section className="relative min-h-[480px] h-auto bg-gradient-to-b from-gray-900 via-blue-900 to-slate-950 text-white overflow-hidden pt-4 pb-2">
      {/* Dynamic background */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-20 w-80 h-80 bg-blue-500/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-6 sm:py-8">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-cyan-400/20 rounded-full border border-cyan-400/40"
            >
              <Car size={18} className="text-cyan-400" />
              <span className="text-cyan-400 font-semibold text-sm">Premium Car Financing</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Get Behind
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                The Wheel
              </span>
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <p className="text-lg md:text-xl text-cyan-300 font-semibold mb-3">Drive Your Dream Car Today.</p>
            </motion.div>

            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-lg">
              Finance your dream car with competitive rates, flexible tenure, and instant approval. Whether new or pre-owned, we make car ownership affordable and accessible.
            </p>

            {/* Feature Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="p-4 bg-gradient-to-br from-cyan-400/20 to-transparent border border-cyan-400/30 rounded-xl hover:border-cyan-400/60 transition-all"
                  >
                    <Icon size={24} className="text-cyan-400 mb-3" />
                    <p className="text-sm text-slate-300 font-medium mb-1">{item.label}</p>
                    <p className="font-semibold text-white text-sm">{item.value}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Interest Rate Showcase */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-10 p-6 bg-white/5 backdrop-blur border border-white/10 rounded-xl"
            >
              <div className="flex justify-between items-start gap-4">
                <div>
                  <p className="text-slate-300 text-sm font-medium mb-1">Starting Interest Rate</p>
                  <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                    <AnimatedNumber value="7.2%" decimals={1} />
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-slate-300 text-sm mb-1">No prepayment penalty</p>
                  <p className="text-teal-400 font-semibold">EMI-friendly terms</p>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4 flex-wrap"
            >
              <Link
                href={ROUTES.CONTACT}
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-xl hover:shadow-2xl transition-all flex items-center gap-2 text-lg hover:scale-105"
              >
                Apply for Car Loan
              </Link>
              <Link
                href={ROUTES.EMI_CALCULATOR}
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400/10 transition-all flex items-center gap-2 text-lg"
              >
                <span>Check Eligibility</span>
                <ChevronRight size={20} />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Visual - Car Dashboard Style */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: 20 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:flex items-center justify-center"
            style={{ perspective: '1000px' }}
          >
            {/* Car silhouette container */}
            <motion.div
              animate={{ y: [0, 30, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="relative w-full aspect-square"
            >
              {/* Main card with car visualization */}
              <div className="w-full h-full bg-gradient-to-br from-cyan-400/15 to-blue-900/30 rounded-3xl border-2 border-cyan-400/40 p-12 flex flex-col justify-center items-center relative overflow-hidden">
                {/* Animated background grid */}
                <div className="absolute inset-0 opacity-10">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                      <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" stroke="currentColor" className="text-cyan-400" />
                  </svg>
                </div>

                {/* Car visualization */}
                <motion.div
                  animate={{ x: [0, 20, -20, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="relative z-10 mb-8"
                >
                  <Car size={120} className="text-cyan-400" />
                </motion.div>

                {/* Stats */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">Premium Car Financing</h3>
                  <div className="grid grid-cols-2 gap-4 w-full">
                    <div className="p-3 bg-white/10 rounded-lg border border-white/20">
                      <p className="text-cyan-400 font-bold"><AnimatedNumber value="7.2%" decimals={1} /></p>
                      <p className="text-xs text-slate-200 font-medium">Interest Rate</p>
                    </div>
                    <div className="p-3 bg-white/10 rounded-lg border border-white/20">
                      <p className="text-cyan-400 font-bold"><AnimatedNumber value="7" suffix=" Years" /></p>
                      <p className="text-xs text-slate-200 font-medium">Max Tenure</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating element */}
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -bottom-16 -right-16 w-60 h-60 border-2 border-cyan-400/20 rounded-full pointer-events-none"
              ></motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}