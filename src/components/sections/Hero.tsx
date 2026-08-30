'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { ROUTES } from '@/lib/constants';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-navy text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-teal rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 h-full pt-16 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className='-mt-28'
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Finance Made Simple.<br />
              <span className="bg-gradient-to-r from-teal to-cyan bg-clip-text text-transparent">
                Vehicles Made Accessible
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg">
              Home loans, car loans, bike loans and quality pre-owned vehicles — all under one trusted platform.
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-4 flex-wrap mb-12">
              <Link href={ROUTES.LOANS}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-teal to-cyan text-white font-semibold rounded-lg hover:shadow-xl transition-shadow"
                >
                  Apply for a Loan
                </motion.button>
              </Link>
              <Link href={ROUTES.VEHICLES}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border-2 border-teal text-teal font-semibold rounded-lg hover:bg-teal/10 transition-colors flex items-center gap-2"
                >
                  Explore Vehicles
                  <ChevronRight size={20} />
                </motion.button>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4">
              {['500+ Customers', '100+ Vehicles', 'Fast Process'].map((stat, idx) => (
                <div key={idx} className="p-3 bg-white/10 backdrop-blur rounded-lg">
                  <p className="text-sm text-gray-300">{stat}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square overflow-hidden rounded-2xl border border-slate-700 shadow-2xl shadow-cyan-500/10">
              <Image
                src="/hero-finance.jpg"
                alt="SM Associate finance consultation and vehicle services in Tirunelveli"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/3 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 translate-x-4">
          <p className="text-sm text-gray-400">Scroll to explore</p>
          <div className="w-6 h-10 border-2 border-teal rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 bg-teal rounded-full mt-2"
            />
          </div>
        </div>
      </motion.div> */}
    </section>
  );
}
