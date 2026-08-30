'use client';

import { motion } from 'framer-motion';
import { Home, ChevronRight, TrendingDown, Percent } from 'lucide-react';
import Link from 'next/link';
import { ROUTES } from '@/lib/constants';
import AnimatedNumber from '@/components/AnimatedNumber';

export default function HomeLoanHero() {
  const benefits = [
    { icon: TrendingDown, label: 'Rates From', value: '6.5%' },
    { icon: Home, label: 'Tenure Up To', value: '30 Years' },
    { icon: Percent, label: 'Tax Benefits', value: '₹1.5L Deduction' },
  ];

  return (
    <section className="relative min-h-[480px] h-auto bg-gradient-to-br from-slate-900 via-gradient-navy to-slate-800 text-white overflow-hidden pt-4 pb-2">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-teal/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-6 sm:py-8">
          {/* Left Visual - Property Focus */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="relative w-full aspect-square max-h-[480px]"
            >
              {/* Main property showcase */}
              <div className="w-full h-full bg-gradient-to-br from-cyan/10 via-teal/10 to-cyan/20 rounded-3xl border-2 border-teal/30 p-12 flex flex-col justify-end overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-gradient-navy/60 to-transparent"></div>

                {/* Property illustration */}
                <div className="absolute top-8 left-8 w-24 h-24 bg-gradient-to-br from-white/20 to-transparent rounded-2xl border border-white/30"></div>
                <div className="absolute top-8 right-8 w-20 h-20 bg-gradient-to-br from-cyan/30 to-transparent rounded-lg border border-cyan/50"></div>

                {/* Property details */}
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-2">Your Dream Home Awaits</h3>
                  <p className="text-white/85 text-lg mb-6">Build wealth through property ownership</p>

                  <div className="grid grid-cols-2 gap-4">
                    {benefits.map((benefit, idx) => {
                      const Icon = benefit.icon;
                      return (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 + idx * 0.1 }}
                          className="p-4 bg-white/10 backdrop-blur rounded-xl border border-white/20"
                        >
                          <Icon size={20} className="text-teal mb-2" />
                          <p className="text-xs text-slate-300 font-medium mb-1">{benefit.label}</p>
                          <p className="text-lg font-bold text-teal"><AnimatedNumber value={benefit.value} /></p>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Accent elements */}
            <motion.div
              animate={{ rotate: [0, -360] }}
              transition={{ duration: 20, repeat: Infinity, linear: true }}
              className="absolute -top-20 -right-20 w-40 h-40 border-2 border-teal/20 rounded-full"
            ></motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-teal/20 rounded-full border border-teal/40"
            >
              <Home size={18} className="text-teal" />
              <span className="text-teal font-semibold text-sm">Become a Homeowner</span>
            </motion.div>

            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              Own Your
              <br />
              <span className="bg-gradient-to-r from-cyan to-teal bg-clip-text text-transparent">
                Perfect Home
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/85 mb-8 leading-relaxed">
              Secure flexible home loan financing for purchase, construction, or renovation. Build your dream home with competitive rates, minimal documentation, and expert guidance at every step.
            </p>

            {/* Key Features */}
            <div className="space-y-4 mb-10">
              {[
                'Rates starting from 6.5% per annum',
                'Tenure up to 30 years for manageable EMIs',
                'Quick approval within 24-48 hours',
                'Up to ₹1.5 lakh tax deduction on principal',
                'Expert guidance throughout the process'
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + idx * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-2 h-2 bg-teal rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4 flex-wrap"
            >
              <Link
                href={ROUTES.CONTACT}
                className="px-8 py-4 bg-gradient-to-r from-cyan to-teal text-white font-semibold rounded-xl hover:shadow-2xl transition-all flex items-center gap-2 text-lg hover:scale-105"
              >
                Apply for Home Loan
              </Link>
              <Link
                href={ROUTES.EMI_CALCULATOR}
                className="px-8 py-4 border-2 border-teal text-teal font-semibold rounded-xl hover:bg-teal/10 transition-all flex items-center gap-2 text-lg"
              >
                <span>Check Eligibility</span>
                <ChevronRight size={20} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom accent */}
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute bottom-10 right-10 w-32 h-32 border border-teal/20 rounded-full opacity-50"
      ></motion.div>
    </section>
  );
}
