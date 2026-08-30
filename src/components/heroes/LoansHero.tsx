'use client';

import { motion } from 'framer-motion';
import {
  Home,
  Zap,
  TrendingUp,
  Car,
  AlertCircle,
  Award,
  Clock,
  Shield,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';
import Link from 'next/link';
import { ROUTES } from '@/lib/constants';

export default function LoansHero() {
  const services = [
    {
      id: 1,
      icon: Home,
      title: 'Home Loans',
      description: 'Flexible home loans up to 1 Cr with minimal documentation',
      rate: 'From 6.5%',
      color: 'from-teal-500 to-cyan-500',
      highlight: true,
      href: ROUTES.HOME_LOAN,
    },
    {
      id: 2,
      icon: Car,
      title: 'Car Loans',
      description: 'Finance your dream car with easy installment plans',
      rate: 'From 8.5%',
      color: 'from-cyan-500 to-blue-500',
      highlight: false,
      href: ROUTES.CAR_LOAN,
    },
    {
      id: 3,
      icon: TrendingUp,
      title: 'Business Loans',
      description: 'Grow your business with capital up to 50 lakhs',
      rate: 'From 7.5%',
      color: 'from-blue-500 to-slate-600',
      highlight: false,
      href: ROUTES.BUSINESS_LOAN,
    },
    {
      id: 4,
      icon: AlertCircle,
      title: 'Personal Loans',
      description: 'Quick personal loans for any need, up to 25 lakhs',
      rate: 'From 8%',
      color: 'from-slate-600 to-teal-500',
      highlight: false,
      href: ROUTES.PERSONAL_LOAN,
    },
    {
      id: 5,
      icon: Zap,
      title: 'Two-Wheeler Insurance',
      description: 'Instant 60-sec insurance issuance & bike protection',
      rate: 'From ₹499/yr',
      color: 'from-amber-500 to-orange-500',
      highlight: false,
      href: ROUTES.TWO_WHEELER_INSURANCE,
    },
  ];

  const features = [
    {
      icon: Clock,
      title: 'Instant Approval',
      description: 'Get approved in minutes, not days',
    },
    {
      icon: Shield,
      title: 'Secure Process',
      description: 'Bank-level security for your data',
    },
    {
      icon: Award,
      title: 'Best Rates',
      description: 'Competitive interest rates in the market',
    },
    {
      icon: TrendingUp,
      title: 'Flexible Terms',
      description: 'Choose tenure that fits your budget',
    },
    {
      icon: CheckCircle,
      title: 'Zero Paperwork',
      description: '100% digital application process',
    },
    {
      icon: Zap,
      title: 'Quick Disbursal',
      description: 'Funds in your account within 24 hours',
    },
  ];

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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
    hover: {
      y: -10,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-navy to-slate-800 overflow-hidden pt-8 pb-6">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/3 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-10"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center justify-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-teal-500 to-cyan-500" />
              <span className="text-teal-400 font-semibold text-sm uppercase tracking-wider">
                Complete Loan Solutions
              </span>
              <div className="w-1 h-8 bg-gradient-to-b from-cyan-500 to-teal-500" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              All Loans You Need
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400">
                In One Place
              </span>
            </h1>
            <p className="text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto">
              From homes to cars to business growth—we have the right loan for every goal. Choose
              from our diverse portfolio of financial solutions.
            </p>
          </motion.div>
        </motion.div>

        {/* Services Grid - 5 Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              transition={{ delay: index * 0.05 }}
              className="group"
            >
              <Link
                href={service.href}
                className={`relative h-full rounded-2xl overflow-hidden border transition-all flex flex-col justify-between ${service.highlight
                    ? 'border-teal-500/50 bg-gradient-to-br from-slate-800/80 to-slate-900/80 shadow-lg shadow-teal-500/20'
                    : 'border-slate-700/50 bg-gradient-to-br from-slate-800/50 to-slate-900/50 hover:border-teal-500/30'
                  }`}
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* Content */}
                <div className="relative p-6 flex flex-col h-full">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}
                  >
                    <service.icon className="w-6 h-6 text-white" />
                  </motion.div>

                  {/* Title & Description */}
                  <h3 className="text-white font-bold text-lg mb-2">{service.title}</h3>
                  <p className="text-slate-300 text-sm mb-4 flex-grow">{service.description}</p>

                  {/* Rate */}
                  <div className="pt-4 border-t border-slate-700/50">
                    <p className="text-slate-300 text-xs uppercase tracking-wider font-medium">Interest Rate</p>
                    <p
                      className={`text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r ${service.color} mt-1`}
                    >
                      {service.rate}
                    </p>
                  </div>

                  {/* CTA Arrow */}
                  <div className="mt-4 flex items-center gap-2 text-teal-400 text-sm font-semibold opacity-80 group-hover:opacity-100 transition-opacity">
                    <span>Apply Now</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Highlight Badge */}
                {service.highlight && (
                  <div
                    className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-xs font-bold"
                  >
                    Popular
                  </div>
                )}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid - 3x2 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16 pt-12 border-t border-slate-700/50"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-white mb-12">
            Why Choose Us
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="relative p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-teal-500/30 transition-all overflow-hidden h-full">
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500/0 via-teal-500/5 to-teal-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Content */}
                  <div className="relative">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      className="w-12 h-12 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center mb-4"
                    >
                      <feature.icon className="w-6 h-6 text-white" />
                    </motion.div>

                    <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Comparison Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="pt-12 border-t border-slate-700/50"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-white mb-12">
            Our Loan Products Comparison
          </motion.h2>

          {/* Comparison Table */}
          <motion.div variants={itemVariants} className="overflow-x-auto">
            <div className="min-w-[700px]">
              <div className="grid grid-cols-6 gap-2">
                <div className="p-4 rounded-tl-xl bg-slate-800/50 border border-slate-700/50 text-slate-200 font-bold text-sm">
                  Feature
                </div>
                <div className="p-4 bg-slate-800/50 border border-slate-700/50 text-center">
                  <p className="text-white font-bold text-sm">Home Loans</p>
                  <p className="text-slate-300 text-xs font-medium mt-1">Up to 1 Cr</p>
                </div>
                <div className="p-4 bg-slate-800/50 border border-slate-700/50 text-center">
                  <p className="text-white font-bold text-sm">Car Loans</p>
                  <p className="text-slate-300 text-xs font-medium mt-1">Up to 25L</p>
                </div>
                <div className="p-4 bg-slate-800/50 border border-slate-700/50 text-center">
                  <p className="text-white font-bold text-sm">Business</p>
                  <p className="text-slate-300 text-xs font-medium mt-1">Up to 50L</p>
                </div>
                <div className="p-4 bg-slate-800/50 border border-slate-700/50 text-center">
                  <p className="text-white font-bold text-sm">Personal</p>
                  <p className="text-slate-300 text-xs font-medium mt-1">Up to 25L</p>
                </div>
                <div className="p-4 rounded-tr-xl bg-slate-800/50 border border-slate-700/50 text-center">
                  <p className="text-white font-bold text-sm">Emergency</p>
                  <p className="text-slate-300 text-xs font-medium mt-1">Up to 10L</p>
                </div>
              </div>

              {[
                { feature: 'Interest Rate', values: ['6.5%+', '8.5%+', '7.5%+', '8%+', '9%+'] },
                { feature: 'Approval Time', values: ['3-7 days', '2-3 days', '2-3 days', '5 min', '5 min'] },
                { feature: 'Documentation', values: ['Standard', 'Minimal', 'Standard', 'Minimal', 'Minimal'] },
                { feature: 'Tenure Range', values: ['15-20 yrs', '3-7 yrs', '2-7 yrs', '1-7 yrs', '1-3 yrs'] },
              ].map((row, index) => (
                <div key={index} className="grid grid-cols-6 gap-2">
                  <div className="p-4 bg-slate-800/30 border border-slate-700/50 text-slate-200 font-semibold text-sm">
                    {row.feature}
                  </div>
                  {row.values.map((value, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-slate-800/30 border border-slate-700/50 text-center"
                    >
                      <p className="text-teal-300 text-sm font-medium">{value}</p>
                    </div>
                  ))}
                </div>
              ))}

              <div className="grid grid-cols-6 gap-2">
                <div className="p-4 rounded-bl-xl bg-slate-800/50 border border-slate-700/50 text-slate-200 font-semibold text-sm">
                  Apply Now
                </div>
                {services.map((service, idx) => (
                  <Link
                    key={idx}
                    href={service.href}
                    className={`p-4 rounded-br-xl border transition-all text-center flex items-center justify-center ${idx === 0
                        ? 'bg-gradient-to-r from-teal-500 to-cyan-500 border-transparent text-white'
                        : 'bg-slate-800/50 border-slate-700/50 hover:border-teal-500/50 text-white hover:bg-slate-700/50'
                      }`}
                  >
                    <span className="text-sm font-semibold text-white">Apply</span>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-10 pt-6 border-t border-slate-700/50 text-center pb-4"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-3xl font-bold text-white">
              Ready to Start Your Financial Journey?
            </h2>
            <p className="text-slate-300 max-w-xl mx-auto">
              Join thousands of satisfied customers who have achieved their financial goals with us.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href={ROUTES.CONTACT}
                className="px-8 py-4 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold hover:shadow-lg hover:shadow-teal-500/50 transition-all inline-block"
              >
                Apply for Loan
              </Link>
              <Link
                href={ROUTES.CONTACT}
                className="px-8 py-4 rounded-lg border border-slate-500 text-slate-200 font-semibold hover:border-teal-400 hover:text-teal-400 transition-all inline-block"
              >
                Talk to Advisor
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
