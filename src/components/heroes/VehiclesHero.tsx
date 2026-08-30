'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Car, Bike, Search, TrendingUp, Shield, Zap, MapPin, Award } from 'lucide-react';
import Link from 'next/link';
import AnimatedNumber from '@/components/AnimatedNumber';

export default function VehiclesHero() {
  const vehicleTypes = [
    {
      type: 'Cars',
      icon: Car,
      count: '500+',
      desc: 'Verified vehicles',
      gradient: 'from-teal-500 to-cyan-500',
    },
    {
      type: 'Bikes',
      icon: Bike,
      count: '200+',
      desc: 'Two-wheelers',
      gradient: 'from-cyan-500 to-blue-500',
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Verified Vehicles',
      desc: 'Every vehicle is inspected',
    },
    {
      icon: TrendingUp,
      title: 'Fair Pricing',
      desc: 'Transparent market rates',
    },
    {
      icon: Zap,
      title: 'Quick Process',
      desc: 'Buy/sell in days',
    },
    {
      icon: MapPin,
      title: 'Multiple Locations',
      desc: '50+ cities coverage',
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

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-rose-950 to-slate-900 overflow-hidden pt-8 pb-6">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-rose-500/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-1/4 right-1/3 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"
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
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center justify-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-rose-500 to-pink-500" />
              <span className="text-rose-400 font-semibold text-sm uppercase tracking-wider">
                Vehicle Marketplace
              </span>
              <div className="w-1 h-8 bg-gradient-to-b from-pink-500 to-rose-500" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              Find Your Next
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-300 to-red-400">
                Perfect Vehicle
              </span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Browse SM Associate&apos;s growing inventory of quality-checked, verified pre-owned cars and bikes. Search and filter results to match your budget, and pair your purchase with instant financing.
            </p>
          </motion.div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left - Search & Stats */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Search Box */}
            <motion.div variants={itemVariants} className="space-y-3">
              <label className="block text-white font-semibold">Quick Search</label>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300" />
                <div className="relative bg-slate-900 rounded-2xl p-4 flex items-center gap-3">
                  <Search className="w-5 h-5 text-teal-400" />
                  <input
                    type="text"
                    placeholder="Search by brand, model, or location..."
                    className="flex-1 bg-transparent outline-none text-white placeholder-slate-500"
                  />
                </div>
              </div>
            </motion.div>

            {/* Vehicle Type Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
              {vehicleTypes.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={index}
                    href={`/vehicles?type=${item.type.toLowerCase()}`}
                    className="group"
                  >
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-teal-500/30 transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.gradient} flex items-center justify-center`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-white font-semibold">{item.type}</span>
                      </div>
                      <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                        <AnimatedNumber value={item.count} />
                      </p>
                      <p className="text-sm text-slate-300 font-medium mt-1">{item.desc}</p>
                    </motion.div>
                  </Link>
                );
              })}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex gap-4 pt-4 flex-wrap">
              <Link
                href="#inventory"
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold hover:shadow-lg hover:shadow-teal-500/50 transition-all inline-block"
              >
                Browse Now
              </Link>
              <Link
                href="/sell-vehicle"
                className="px-8 py-3 rounded-lg border border-slate-600 text-slate-200 font-semibold hover:border-teal-400 hover:text-teal-400 transition-all inline-block"
              >
                Sell Your Vehicle
              </Link>
            </motion.div>
          </motion.div>

          {/* Right - Showcase Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              {
                title: 'Luxury Cars',
                gradient: 'from-blue-600 to-cyan-600',
                image: '/vehicles/city.jpg',
              },
              {
                title: 'Economy Cars',
                gradient: 'from-cyan-600 to-teal-600',
                image: '/vehicles/swift.jpg',
              },
              {
                title: 'Premium Bikes',
                gradient: 'from-teal-600 to-green-600',
                image: '/vehicles/classic350.jpg',
              },
              {
                title: 'Scooters & Commuters',
                gradient: 'from-green-600 to-blue-600',
                image: '/vehicles/activa.jpg',
              },
            ].map((showcase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + 0.4, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className={`relative h-40 bg-gradient-to-br ${showcase.gradient} rounded-2xl overflow-hidden border border-white/10 cursor-pointer`}>
                  <Image
                    src={showcase.image}
                    alt={`${showcase.title} - SM Associate Verified Vehicles Showcase`}
                    fill
                    priority={index < 2}
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-slate-950/0" />
                  <div className="absolute inset-0 flex flex-col items-center justify-end text-center p-4">
                    <p className="text-white font-semibold text-sm">{showcase.title}</p>
                  </div>

                  {/* Shine Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{
                      x: [-100, 100],
                    }}
                    transition={{
                      duration: 3,
                      delay: index * 0.2,
                      repeat: Infinity,
                      repeatDelay: 2,
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Benefits Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="py-12 border-t border-slate-700/50"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-white mb-12 text-center">
            Why Buy or Sell With Us
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <div className="relative p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-slate-600/50 transition-all overflow-hidden h-full">
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300" />

                    <div className="relative">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        className="w-12 h-12 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center mb-4"
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </motion.div>

                      <h3 className="text-white font-bold text-lg mb-2">{benefit.title}</h3>
                      <p className="text-slate-300 text-sm leading-relaxed">{benefit.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-20 pt-12 border-t border-slate-700/50 text-center"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex items-center justify-center gap-3 flex-wrap">
              {[
                { icon: Award, label: 'Industry Certified' },
                { icon: Shield, label: '100% Verified' },
                { icon: TrendingUp, label: 'Fair Pricing' },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-center gap-2 text-slate-300">
                    <Icon className="w-5 h-5 text-teal-400" />
                    <span className="font-semibold">{item.label}</span>
                  </div>
                );
              })}
            </div>
            <p className="text-slate-300 font-medium">
              Trusted by 50,000+ vehicle buyers and sellers across India
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
