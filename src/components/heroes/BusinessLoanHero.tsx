'use client';

import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Building2, Briefcase, ArrowUpRight, Zap } from 'lucide-react';
import Link from 'next/link';
import { ROUTES } from '@/lib/constants';
import AnimatedNumber from '@/components/AnimatedNumber';

export default function BusinessLoanHero() {
  const chartBars = [
    { height: 30, label: 'Q1', value: '$2.3M', delay: 0 },
    { height: 45, label: 'Q2', value: '$3.5M', delay: 0.1 },
    { height: 60, label: 'Q3', value: '$4.8M', delay: 0.2 },
    { height: 75, label: 'Q4', value: '$6.2M', delay: 0.3 },
    { height: 85, label: 'Growth', value: '$7.5M', delay: 0.4 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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

  const barVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: (delay: number) => ({
      height: '100%',
      opacity: 1,
      transition: {
        delay: delay + 0.5,
        duration: 0.8,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <div className="relative min-h-[500px] h-auto bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950/80 overflow-hidden pt-4 pb-2 text-white">
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-40 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-slate-700/25 [mask-image:linear-gradient(0deg,transparent,black)] opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-1 h-8 bg-gradient-to-b from-emerald-500 to-teal-500" />
                <span className="text-emerald-400 font-semibold text-sm uppercase tracking-wider">
                  Business Growth Solutions
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Scale Your
                <span
                  className="block bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent"
                  style={{
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Business Faster
                </span>
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
                Secure business loans up to $500K with flexible terms. Designed for growing
                enterprises that need capital without complexity.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 transition-all">
                <Building2 className="w-8 h-8 text-emerald-400 mb-3" />
                <p className="text-slate-200 font-semibold text-sm">Established &amp; Growing</p>
                <p className="text-xs text-slate-300 font-medium mt-1">
                  For businesses 2+ years old
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-teal-500/40 transition-all">
                <Briefcase className="w-8 h-8 text-teal-400 mb-3" />
                <p className="text-slate-200 font-semibold text-sm">All Industries</p>
                <p className="text-xs text-slate-300 font-medium mt-1">
                  Retail, services, tech &amp; more
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-3">
              <div className="flex items-center gap-2 text-slate-200">
                <ArrowUpRight className="w-5 h-5 text-emerald-400" />
                <span>Loan amounts: $25,000 - $500,000</span>
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <Zap className="w-5 h-5 text-teal-400" />
                <span>Approval in 24-48 hours</span>
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <TrendingUp className="w-5 h-5 text-cyan-400" />
                <span>Competitive interest rates from 7.5%</span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4 pt-4 flex-wrap">
              <Link
                href={ROUTES.CONTACT}
                className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold hover:shadow-lg hover:shadow-emerald-500/40 transition-all duration-300 inline-block"
              >
                Get a Quote
              </Link>
              <Link
                href={ROUTES.LOANS}
                className="px-8 py-3.5 rounded-xl border border-slate-700 text-slate-200 font-semibold hover:border-emerald-400 hover:text-emerald-400 transition-all duration-300 inline-block"
              >
                View Details
              </Link>
            </motion.div>
          </motion.div>

          {/* Right - Animated Chart */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Chart Container */}
            <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-950/80 rounded-2xl p-6 border border-slate-800 backdrop-blur-sm shadow-xl">
              {/* Chart Header */}
              <div className="flex items-start justify-between gap-4 mb-8 min-h-[56px]">
                <div className="min-w-0 flex-1">
                  <p className="text-slate-200 font-semibold">Year-over-Year Growth</p>
                  <p className="text-sm text-slate-300 font-medium mt-1 truncate">
                    Projected business growth with our loans
                  </p>
                </div>
                <motion.div
                  className="flex-shrink-0"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                >
                  <BarChart3 className="w-8 h-8 text-emerald-400" />
                </motion.div>
              </div>

              {/* Chart Bars */}
              <div className="flex items-end justify-between gap-3 h-44 mt-16">
                {chartBars.map((bar, index) => (
                  <motion.div key={index} className="flex-1 flex flex-col items-center gap-3">
                    {/* Bar Container */}
                    <div className="w-full h-44 flex items-end justify-center rounded-t-lg bg-slate-800/40 relative group cursor-pointer">
                      {/* Animated Bar */}
                      <motion.div
                        custom={bar.delay}
                        variants={barVariants}
                        initial="hidden"
                        animate="visible"
                        className="w-full bg-gradient-to-t from-emerald-600 via-teal-500 to-cyan-400 rounded-t-lg relative overflow-hidden"
                        style={{ height: `${bar.height}%` }}
                      >
                        {/* Bar Shine Effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          animate={{
                            x: [-100, 100],
                          }}
                          transition={{
                            duration: 3,
                            delay: bar.delay + 0.8,
                            repeat: Infinity,
                            repeatDelay: 2,
                          }}
                        />
                      </motion.div>

                      {/* Value Tooltip */}
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 border border-emerald-500/30 px-3 py-1 rounded-lg text-xs text-emerald-300 whitespace-nowrap z-20 shadow-md">
                        {bar.value}
                      </div>
                    </div>

                    {/* Label */}
                    <div className="text-center">
                      <p className="text-slate-200 font-semibold text-sm">{bar.label}</p>
                      <p className="text-xs text-slate-300 font-medium mt-1">{bar.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Chart Footer Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-slate-800">
                {[
                  { label: '245%', desc: 'Avg Growth' },
                  { label: '1.2K+', desc: 'Businesses' },
                  { label: '$2.3B+', desc: 'Funded' },
                ].map((stat, index) => (
                  <motion.div key={index} variants={itemVariants} className="text-center">
                    <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                      <AnimatedNumber value={stat.label} />
                    </p>
                    <p className="text-xs text-slate-400 mt-2">{stat.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Floating Badge — top-right */}
            <motion.div
              className="absolute -top-4 right-4 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm font-semibold shadow-lg z-10"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              Trusted by 1200+
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-10 pt-6 border-t border-slate-800"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Building2,
                title: 'Quick Setup',
                desc: 'Complete application in minutes',
              },
              {
                icon: TrendingUp,
                title: 'Flexible Terms',
                desc: '2-7 year repayment options',
              },
              {
                icon: Zap,
                title: 'Fast Funding',
                desc: 'Funds in your account within 24 hours',
              },
            ].map((item, index) => (
              <motion.div key={index} variants={itemVariants} className="flex gap-4 p-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <p className="text-slate-200 font-semibold">{item.title}</p>
                  <p className="text-sm text-slate-300 font-medium mt-1">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}