'use client';

import { motion } from 'framer-motion';
import { Shield, Zap, ChevronRight, CheckCircle2, Award, Bike } from 'lucide-react';
import Link from 'next/link';
import { ROUTES } from '@/lib/constants';
import AnimatedNumber from '@/components/AnimatedNumber';

export default function TwoWheelerInsuranceHero() {
  const highlights = [
    { icon: Zap, label: 'Instant Policy', value: 'Issued in 60 sec' },
    { icon: Shield, label: 'Cashless Network', value: '5,000+ Garages' },
    { icon: Award, label: 'No Claim Bonus', value: 'Up to 50% NCB' },
  ];

  const policySpecs = [
    { title: 'Third-Party Cover', desc: 'Mandatory coverage for property & injury liabilities' },
    { title: 'Own Damage (OD)', desc: 'Protection against theft, accidents, & natural disasters' },
    { title: 'Zero Depreciation', desc: 'Full claim value without depreciation deduction' },
    { title: '24x7 Roadside Help', desc: 'Towing, flat tire, and emergency fuel support' },
  ];

  return (
    <section className="relative min-h-[480px] h-auto bg-gradient-to-br from-zinc-950 via-emerald-950 to-zinc-900 text-white overflow-hidden pt-4 pb-2">
      {/* Ambient Background Glows */}
      <div className="absolute inset-0 opacity-25 pointer-events-none">
        <div className="absolute top-10 left-10 w-96 h-96 bg-emerald-500 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-amber-500 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-zinc-700/20 [mask-image:linear-gradient(0deg,transparent,black)] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-6 sm:py-8">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-emerald-500/20 rounded-full border border-emerald-400/40 shadow-sm"
            >
              <Shield size={18} className="text-emerald-300" />
              <span className="text-emerald-200 font-semibold text-sm">
                🛡️ Instant Two-Wheeler Protection
              </span>
            </motion.div>

            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              Protect Your Bike
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-green-300 to-amber-300 bg-clip-text text-transparent">
                With Complete Cover
              </span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-200 mb-8 max-w-lg leading-relaxed">
              Get instant 2-wheeler insurance online in 60 seconds. Enjoy up to 85% discount, 5,000+
              cashless garage network, zero paperwork, and hassle-free claim settlements.
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
                    className="p-4 bg-zinc-900/80 border border-zinc-800 rounded-xl hover:border-emerald-500/50 transition-all shadow-md backdrop-blur-sm"
                  >
                    <Icon size={24} className="text-emerald-400 mb-3" />
                    <p className="text-xs text-zinc-300 font-medium mb-1">{item.label}</p>
                    <p className="font-bold text-white text-sm"><AnimatedNumber value={item.value} /></p>
                  </motion.div>
                );
              })}
            </div>

            {/* Primary CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4 flex-wrap"
            >
              <Link
                href={ROUTES.CONTACT}
                className="px-8 py-4 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-emerald-500/40 transition-all text-lg flex items-center gap-2"
              >
                <span>Get Instant Quote</span>
                <Zap size={20} />
              </Link>
              <Link
                href={ROUTES.CONTACT}
                className="px-8 py-4 border-2 border-emerald-400/80 text-emerald-300 font-semibold rounded-xl hover:bg-emerald-500/10 transition-all flex items-center gap-2 text-lg"
              >
                <span>Renew Policy</span>
                <ChevronRight size={20} />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Visual - Policy Showcase Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-[480px]">
              {/* Main Card */}
              <div className="w-full bg-gradient-to-br from-zinc-900/95 via-emerald-950/90 to-zinc-900/95 rounded-3xl border-2 border-emerald-500/40 p-8 shadow-2xl backdrop-blur-md relative overflow-hidden">
                {/* Background Glow inside Card */}
                <div className="absolute -top-20 -right-20 w-48 h-48 bg-emerald-500/20 rounded-full blur-2xl pointer-events-none" />

                {/* Card Header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-800">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg">
                      <Bike className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">Comprehensive Bike Shield</h3>
                      <p className="text-xs text-emerald-400 font-medium">Instant Issuance • 0 Paperwork</p>
                    </div>
                  </div>
                </div>

                {/* Policy Specs */}
                <div className="space-y-4 mb-6">
                  {policySpecs.map((spec, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-zinc-100 font-semibold text-sm">{spec.title}</p>
                        <p className="text-xs text-zinc-300 font-medium">{spec.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Starting Price Banner */}
                <div className="p-4 rounded-2xl bg-zinc-900/80 border border-emerald-500/30 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-zinc-300 font-medium">Starting Premium</p>
                    <p className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-300">
                      <AnimatedNumber value="482" prefix="₹" suffix=" / year*" />
                    </p>
                  </div>
                  <span className="px-3 py-1.5 rounded-xl bg-emerald-500/20 text-emerald-300 font-bold text-xs border border-emerald-400/40">
                    Save up to 85%
                  </span>
                </div>
              </div>

              {/* Floating Discount Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm font-semibold shadow-xl border border-white/20 z-20"
              >
                Instant Policy PDF ⚡
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
