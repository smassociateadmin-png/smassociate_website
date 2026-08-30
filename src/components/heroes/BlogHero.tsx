'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { BookOpen, TrendingUp, Lightbulb, MessageCircle, Search, ArrowRight, Zap, Star } from 'lucide-react';
import Link from 'next/link';

export default function BlogHero() {
  const topicTags = [
    { icon: TrendingUp, label: 'Finance Tips', count: '12', color: 'from-teal-500 to-cyan-500' },
    { icon: Lightbulb, label: 'Loan Guides', count: '18', color: 'from-cyan-500 to-blue-500' },
    { icon: BookOpen, label: 'Vehicle Advice', count: '15', color: 'from-blue-500 to-slate-600' },
    { icon: MessageCircle, label: 'Expert Q&A', count: '10', color: 'from-slate-600 to-teal-500' },
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

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hover: { y: -5, transition: { duration: 0.3 } },
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-navy to-slate-800 overflow-hidden pt-4 pb-2">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center justify-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-cyan-500" />
              <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">
                Knowledge Hub
              </span>
              <div className="w-1 h-8 bg-gradient-to-b from-cyan-500 to-blue-500" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              Financial Knowledge
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
                & Insights
              </span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Explore our growing knowledge hub covering finance, loans, and vehicles — practical guides on borrowing smart, choosing the right loan, and buying or selling vehicles. Subscribe to our newsletter for the latest financial tips and insights.
            </p>
          </motion.div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Left - Featured Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Featured Article Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300" />
              <div className="relative bg-slate-900 rounded-2xl p-8 border border-slate-700/50">
                <div className="relative h-44 mb-5 rounded-xl overflow-hidden bg-slate-800">
                  <Image
                    src="/blog/loan-eligibility.jpg"
                    alt="The Complete Guide to EMI Calculations and Loan Eligibility - SM Associate"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <Star className="w-5 h-5 text-blue-400" />
                  <span className="text-blue-400 font-semibold text-sm">Featured Article</span>
                </div>

                <h2 className="text-2xl font-bold text-white mb-3">
                  The Complete Guide to EMI Calculations
                </h2>

                <p className="text-slate-300 mb-4 leading-relaxed">
                  Understand how EMI works, calculate your monthly payments accurately, and make informed decisions about your loans.
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-slate-700/50">
                  <span className="text-xs text-slate-300">August 20, 2024</span>
                  <span className="text-xs text-slate-300">•</span>
                  <span className="text-xs text-slate-300">8 min read</span>
                </div>

                <Link
                  href="/blog/improve-loan-eligibility"
                  className="mt-4 inline-flex items-center gap-2 text-blue-400 hover:text-cyan-400 font-semibold transition-colors"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Search Bar */}
            <motion.div variants={itemVariants} className="space-y-3">
              <label className="block text-white font-semibold">Search Articles</label>
              <div className="relative">
                <Search className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search by topic, keyword, or author..."
                  className="w-full pl-12 pr-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700/50 text-white placeholder-slate-400 outline-none focus:border-blue-500/50 transition-all"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Topic Categories */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            {topicTags.map((topic, index) => {
              const Icon = topic.icon;
              return (
                <motion.div
                  key={index}
                  custom={index}
                  variants={tagVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="group cursor-pointer"
                >
                  <div className="relative p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-slate-600/50 transition-all overflow-hidden">
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${topic.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                    {/* Content */}
                    <div className="relative flex items-center gap-4">
                      <motion.div
                        whileHover={{ scale: 1.15, rotate: -10 }}
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${topic.color} flex items-center justify-center flex-shrink-0`}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </motion.div>

                      <div className="flex-1">
                        <p className="text-slate-300 text-sm font-semibold uppercase tracking-wide">
                          {topic.label}
                        </p>
                        <p className="text-slate-300 text-xs font-medium mt-1">
                          {topic.count}+ articles
                        </p>
                      </div>

                      <motion.div
                        whileHover={{ x: 5 }}
                        className="text-slate-400 group-hover:text-blue-400 transition-colors"
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Content Highlights */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="py-12 border-t border-slate-700/50"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-white mb-8 text-center">
            What You&apos;ll Learn
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Smart Borrowing',
                desc: 'Learn best practices for taking loans and managing debt effectively',
                icon: TrendingUp,
              },
              {
                title: 'Vehicle Insights',
                desc: 'Expert advice on buying, selling, and maintaining vehicles',
                icon: BookOpen,
              },
              {
                title: 'Money Management',
                desc: 'Master personal finance and build wealth systematically',
                icon: Zap,
              },
            ].map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <div className="relative p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-slate-600/50 transition-all overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300" />

                    <div className="relative">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4"
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </motion.div>

                      <h3 className="text-white font-bold text-lg mb-2">{highlight.title}</h3>
                      <p className="text-slate-300 text-sm leading-relaxed">{highlight.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-20 pt-12 border-t border-slate-700/50 text-center"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-3xl font-bold text-white">Stay Updated</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Subscribe to our newsletter and receive the latest articles, tips, and financial insights directly in your inbox.
            </p>

            <div className="flex gap-3 justify-center flex-wrap max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 min-w-[200px] px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700/50 text-white placeholder-slate-500 outline-none focus:border-blue-500/50 transition-all"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
