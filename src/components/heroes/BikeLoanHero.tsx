'use client';

import { motion } from 'framer-motion';
import { Bike, ChevronRight, Flame } from 'lucide-react';
import Link from 'next/link';
import { ROUTES } from '@/lib/constants';
import AnimatedNumber from '@/components/AnimatedNumber';

export default function BikeLoanHero() {
  return (
    <section className="relative min-h-[480px] h-auto bg-gradient-to-br from-orange-900/20 via-gradient-navy to-red-900/10 text-white overflow-hidden pt-4 pb-2">
      {/* Dynamic animated background */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 30, repeat: Infinity, linear: true }}
          className="absolute top-1/4 -left-1/4 w-96 h-96 border-2 border-orange-500/30 rounded-full"
        ></motion.div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-teal/20 rounded-full blur-3xl"></div>
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/2 right-1/4 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl"
        ></motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-6 sm:py-8">
          {/* Left Visual - Dynamic Bike Theme */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            {/* Animated bike showcase */}
            <motion.div
              animate={{ rotate: [0, 5, -5, 0], y: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="relative w-full aspect-square max-h-[480px]"
            >
              <div className="w-full h-full bg-gradient-to-br from-orange-500/20 via-red-900/20 to-teal/10 rounded-3xl border-3 border-orange-500/40 p-12 flex flex-col justify-center items-center relative overflow-hidden">
                {/* Energy lines background */}
                <div className="absolute inset-0 opacity-20">
                  <svg className="w-full h-full" preserveAspectRatio="none">
                    <motion.line
                      x1="0%"
                      y1="50%"
                      x2="100%"
                      y2="50%"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-orange-500"
                      animate={{ x1: '-100%', x2: '200%' }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                    />
                  </svg>
                </div>

                {/* Bike icon */}
                <motion.div
                  animate={{ x: [0, 30, -30, 0], rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="relative z-10 mb-8"
                >
                  <Bike size={140} className="text-orange-400" strokeWidth={1.5} />
                </motion.div>

                {/* Stats overlay */}
                <div className="relative z-10 text-center">
                  <h3 className="text-2xl font-bold mb-4 text-white">Get Your Dream Bike</h3>
                  <div className="flex justify-center gap-4">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="p-3 bg-gradient-to-br from-orange-500/30 to-red-600/20 rounded-lg border border-orange-400/50"
                    >
                      <p className="text-orange-400 font-bold text-lg"><AnimatedNumber value="0.5%" decimals={1} /></p>
                      <p className="text-xs text-slate-200 font-medium">Processing Fee</p>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="p-3 bg-gradient-to-br from-orange-500/30 to-red-600/20 rounded-lg border border-orange-400/50"
                    >
                      <p className="text-orange-400 font-bold text-lg"><AnimatedNumber value="60" suffix=" Mo" /></p>
                      <p className="text-xs text-slate-200 font-medium">Max Tenure</p>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Pulsing energy rings */}
              <motion.div
                animate={{ scale: [1, 1.5], opacity: [0.8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -inset-20 border-2 border-orange-500/50 rounded-full"
              ></motion.div>
            </motion.div>
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
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-orange-500/20 rounded-full border border-orange-500/40"
            >
              <Bike size={18} className="text-orange-400" />
              <span className="text-orange-400 font-semibold text-sm">Easy Two-Wheeler Finance</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Ride Your
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 bg-clip-text text-transparent">
                Perfect Bike
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed">
              Hassle-free bike financing for both new and used two-wheelers. Get instant approval, minimal documentation, and EMI options that fit your budget. Ride today, pay later.
            </p>

            {/* Dynamic Feature Cards */}
            <div className="space-y-3 mb-10">
              {[
                'Quick approval in just 24-48 hours',
                'Minimal documentation and easy verification',
                'Flexible EMI plans tailored to your budget',
                'Low processing fees (0.5%-1%)'
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + idx * 0.08 }}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full group-hover:w-3 group-hover:h-3 transition-all"></div>
                  <span className="text-slate-200 group-hover:text-white transition-colors">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-3 gap-3 mb-10 p-4 bg-white/5 rounded-xl border border-white/10 backdrop-blur"
            >
              <div className="text-center">
                <p className="text-orange-400 font-bold text-xl"><AnimatedNumber value="48" suffix="h" /></p>
                <p className="text-xs text-slate-300 font-medium">Quick Disbursal</p>
              </div>
              <div className="text-center border-l border-r border-white/20">
                <p className="text-orange-400 font-bold text-xl"><AnimatedNumber value="₹25L" /></p>
                <p className="text-xs text-slate-300 font-medium">Max Loan</p>
              </div>
              <div className="text-center">
                <p className="text-orange-400 font-bold text-xl"><AnimatedNumber value="10k+" /></p>
                <p className="text-xs text-slate-300 font-medium">Happy Riders</p>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4 flex-wrap"
            >
              <Link
                href={ROUTES.CONTACT}
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-xl hover:shadow-2xl transition-all flex items-center gap-2 text-lg hover:scale-105"
              >
                <span>Get Bike Loan Now</span>
                <Flame size={20} />
              </Link>
              <Link
                href={ROUTES.EMI_CALCULATOR}
                className="px-8 py-4 border-2 border-orange-500 text-orange-400 font-semibold rounded-xl hover:bg-orange-500/10 transition-all flex items-center gap-2 text-lg"
              >
                <span>Check Eligibility</span>
                <ChevronRight size={20} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Animated accent line */}
      <motion.div
        animate={{ scaleX: [0, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute bottom-32 left-10 h-1 bg-gradient-to-r from-orange-500 to-transparent w-32"
      ></motion.div>
    </section>
  );
}