'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Wallet, CreditCard, TrendingUp, Zap, ArrowRight, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { ROUTES } from '@/lib/constants';
import AnimatedNumber from '@/components/AnimatedNumber';

export default function PersonalLoanHero() {
  const [activeCard, setActiveCard] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const cards = [
    {
      id: 1,
      amount: '₹50,000',
      label: 'Instant Cash Credit',
      badge: '⚡ Approval in 5 Min',
      description:
        'Get instant cash credit credited directly to your bank account with minimal digital documentation, zero hidden charges, and transparent flexi-EMI terms.',
      rate: '8.5% p.a.',
      tenure: '3 - 24 Months',
      color: 'from-teal-600 via-teal-500 to-cyan-600',
    },
    {
      id: 2,
      amount: '₹2,50,000',
      label: 'Express Personal Loan',
      badge: '🔥 Most Popular',
      description:
        'Ideal for home renovation, wedding expenses, or medical needs. Enjoy high loan amounts with flexible tenure options and hassle-free paperless processing.',
      rate: '8.9% p.a.',
      tenure: '6 - 36 Months',
      color: 'from-cyan-600 via-blue-600 to-indigo-600',
    },
    {
      id: 3,
      amount: '₹10,000',
      label: 'Emergency Micro Loan',
      badge: '🛡️ 100% Digital',
      description:
        'Fast micro-funding for urgent bills and unexpected expenses. Pre-approved for salaried & self-employed individuals with 24/7 instant disbursal.',
      rate: '7.9% p.a.',
      tenure: '1 - 12 Months',
      color: 'from-blue-600 via-indigo-600 to-teal-600',
    },
  ];

  // Initialize on mount to prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Auto-swipe up effect every 3.2 seconds, pauses on hover
  useEffect(() => {
    if (isPaused || !isMounted) return;
    const timer = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % cards.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [isPaused, isMounted, cards.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <div className="relative min-h-[500px] h-auto bg-gradient-to-br from-slate-900 via-slate-950 to-slate-800 overflow-hidden pt-4 pb-2">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-1 h-8 bg-gradient-to-b from-teal-500 to-cyan-500" />
                <span className="text-[#2dd4bf] font-semibold text-sm uppercase tracking-wider">
                  Instant Personal Loans
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Get Funds
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#2dd4bf] via-[#22d3ee] to-[#60a5fa]">
                  Instantly
                </span>
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
                Access up to ₹5,00,000 in personal funds within minutes. No collateral needed, no lengthy paperwork — just instant approval and quick disbursement.
              </p>

              <p className="text-base text-slate-300 leading-relaxed max-w-xl">
                Need funds urgently? Our Emergency Micro Loan starts at ₹10,000 with rates from 7.9% p.a. — pre-approved for salaried and self-employed individuals with 24/7 instant disbursal.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-slate-200 font-semibold">Lightning Fast Approval</p>
                  <p className="text-sm text-slate-300 font-medium">
                    Get approved in under 5 minutes
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <Wallet className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-slate-200 font-semibold">Flexible Amounts</p>
                  <p className="text-sm text-slate-300 font-medium">
                    Borrow what you need, up to ₹5,00,000
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-slate-200 font-semibold">No Collateral Needed</p>
                  <p className="text-sm text-slate-300 font-medium">
                    Get approved without pledging any asset
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-slate-200 font-semibold">Quick Processing</p>
                  <p className="text-sm text-slate-300 font-medium">
                    Application approval and fund disbursal within 24 hours
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4 pt-4 flex-wrap">
              <Link
                href={ROUTES.CONTACT}
                className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300 inline-block"
              >
                Apply Now
              </Link>
              <Link
                href={ROUTES.LOANS}
                className="px-8 py-3.5 rounded-xl border border-slate-600 text-slate-200 font-semibold hover:border-teal-400 hover:text-teal-400 transition-all duration-300 inline-block"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>

          {/* Right - Auto-Swiping Larger Card Stack */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative min-h-[520px] flex items-center justify-center"
          >
            {/* Auto-Swiping Container with Hover Pause */}
            <div
              className="relative w-full max-w-[500px] lg:max-w-[540px] h-[380px] flex items-center justify-center"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {cards.map((card, index) => {
                // Calculate position relative to activeCard
                const offset = (index - activeCard + cards.length) % cards.length;

                return (
                  <motion.div
                    key={card.id}
                    layout
                    initial={{
                      y: offset * 28,
                      scale: 1 - offset * 0.05,
                      opacity: offset === 0 ? 1 : offset === 1 ? 0.85 : 0.65,
                      zIndex: cards.length - offset,
                    }}
                    animate={{
                      y: offset * 28,
                      scale: 1 - offset * 0.05,
                      opacity: offset === 0 ? 1 : offset === 1 ? 0.85 : 0.65,
                      zIndex: cards.length - offset,
                    }}
                    transition={{
                      duration: 0.6,
                      ease: [0.34, 1.56, 0.64, 1],
                    }}
                    onClick={() => setActiveCard(index)}
                    className="absolute inset-x-0 mx-auto w-full cursor-pointer"
                  >
                    <div
                      className={`rounded-3xl bg-gradient-to-br ${card.color} p-7 sm:p-8 shadow-2xl border border-white/25 relative overflow-hidden backdrop-blur-md transition-all duration-300 hover:shadow-teal-500/30`}
                    >
                      {/* Decorative Background Blob */}
                      <div className="absolute -top-16 -right-16 w-52 h-52 bg-white/10 rounded-full blur-3xl pointer-events-none" />

                      {/* Header Row */}
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold text-white tracking-wide uppercase shadow-sm">
                            {card.badge}
                          </span>
                          <h3 className="text-white font-bold text-xl sm:text-2xl mt-2 tracking-tight">
                            {card.label}
                          </h3>
                        </div>
                        <div className="p-3 rounded-2xl bg-white/20 text-white shadow-inner">
                          <CreditCard className="w-7 h-7" />
                        </div>
                      </div>

                      {/* Amount & Rate Row */}
                      <div className="flex items-baseline justify-between mb-4 border-b border-white/20 pb-3">
                        <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                          {card.amount}
                        </span>
                        <span className="text-xs sm:text-sm font-bold text-white bg-black/30 px-3 py-1.5 rounded-xl border border-white/10">
                          Rates: {card.rate}
                        </span>
                      </div>

                      {/* Paragraph Description */}
                      <p className="text-sm sm:text-base text-white/95 leading-relaxed font-normal mb-5">
                        {card.description}
                      </p>

                      {/* Footer Specs & CTA */}
                      <div className="flex items-center justify-between pt-2 text-xs sm:text-sm text-white/90 font-semibold border-t border-white/10">
                        <span className="flex items-center gap-1.5">
                          <ShieldCheck className="w-4 h-4 text-white" />
                          {card.tenure}
                        </span>
                        <Link
                          href={ROUTES.CONTACT}
                          className="flex items-center gap-1.5 font-bold text-white bg-white/20 hover:bg-white/30 px-4 py-2 rounded-xl transition-all"
                        >
                          Apply Now <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Auto-Swipe Pagination Dots */}
            <div className="absolute -bottom-2 flex gap-2 justify-center z-30">
              {cards.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveCard(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${i === activeCard ? 'w-8 bg-teal-400' : 'w-2.5 bg-slate-600 hover:bg-slate-400'
                    }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-3 gap-6 mt-10 pt-6 border-t border-slate-700/50"
        >
          {[
            { label: '50K+', description: 'Happy Customers' },
            { label: '5 min', description: 'Avg Approval Time' },
            { label: '99%', description: 'Approval Rate' },
          ].map((stat, index) => (
            <motion.div key={index} variants={itemVariants} className="text-center">
              <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#2dd4bf] to-[#22d3ee]">
                <AnimatedNumber value={stat.label} />
              </p>
              <p className="text-slate-300 font-medium mt-2">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}