'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, Fuel, Gauge, DollarSign, Heart, Star } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function CarResaleHero() {
  const [searchQuery, setSearchQuery] = useState('');

  const vehicles = [
    {
      id: 1,
      name: 'BMW X5 2022',
      price: '$45,500',
      image: '/vehicles/car-2.jpg',
      mileage: '12,450 km',
      fuel: 'Petrol',
      location: 'Mumbai',
      rating: 4.8,
      featured: true,
    },
    {
      id: 2,
      name: 'Honda City 2021',
      price: '$18,999',
      image: '/vehicles/city.jpg',
      mileage: '28,500 km',
      fuel: 'Diesel',
      location: 'Bangalore',
      rating: 4.6,
      featured: false,
    },
    {
      id: 3,
      name: 'Toyota Fortuner 2020',
      price: '$32,500',
      image: '/vehicles/creta.jpg',
      mileage: '35,200 km',
      fuel: 'Diesel',
      location: 'Delhi',
      rating: 4.7,
      featured: true,
    },
    {
      id: 4,
      name: 'Maruti Swift 2019',
      price: '$12,450',
      image: '/vehicles/swift.jpg',
      mileage: '42,100 km',
      fuel: 'Petrol',
      location: 'Pune',
      rating: 4.5,
      featured: false,
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
    hidden: { opacity: 0, scale: 0.85 },
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

  const filteredVehicles = vehicles.filter(
    (v) =>
      v.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-emerald-950 to-teal-950 overflow-hidden pt-4 pb-2">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/3 right-0 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        {/* Header Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center justify-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-emerald-500 to-teal-500" />
              <span className="text-emerald-400 font-semibold text-sm uppercase tracking-wider">
                Vehicle Marketplace &amp; Resale
              </span>
              <div className="w-1 h-8 bg-gradient-to-b from-teal-500 to-emerald-500" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              Sell &amp; Find Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">
                Dream Vehicle
              </span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Browse verified pre-owned vehicles with top valuation and flexible financing options — no middleman, instant approval. Sell your current car or bike, or find your next one, through a nationwide network spanning 50+ cities in India.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div variants={itemVariants} className="mt-10 max-w-2xl mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative flex items-center bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 group-hover:border-teal-500/30 transition-all px-6 py-4">
                <Search className="w-6 h-6 text-teal-400 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Search by car model or location..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 ml-4 bg-transparent text-white placeholder-slate-500 outline-none text-lg"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="ml-4 px-6 py-2 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold"
                >
                  Search
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Vehicle Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {filteredVehicles.map((vehicle, index) => (
              <motion.div
                key={vehicle.id}
                variants={cardVariants}
                whileHover="hover"
                layoutId={`vehicle-${vehicle.id}`}
                className="group cursor-pointer"
              >
                <div className="relative bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-teal-500/30 transition-all duration-300 backdrop-blur-sm h-full flex flex-col">
                  {/* Vehicle Image */}
                  <div className="relative h-44 bg-slate-900 overflow-hidden">
                    <Image
                      src={vehicle.image}
                      alt={`${vehicle.name} - Quality Pre-Owned Vehicle for Resale`}
                      fill
                      priority={index < 2}
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />

                    {vehicle.featured && (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="absolute top-4 left-4 px-3 py-1 rounded-full bg-amber-500/90 text-white text-xs font-bold z-10"
                      >
                        Featured
                      </motion.div>
                    )}
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center hover:bg-black/60 transition-all z-10"
                    >
                      <Heart className="w-5 h-5 text-white" />
                    </motion.button>
                  </div>

                  {/* Vehicle Info */}
                  <div className="flex-1 p-5 flex flex-col gap-3">
                    <div>
                      <p className="text-white font-bold text-lg leading-tight">{vehicle.name}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3 h-3 ${i < Math.floor(vehicle.rating)
                                  ? 'fill-amber-400 text-amber-400'
                                  : 'text-slate-500'
                                }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-slate-300 font-medium">{vehicle.rating}</span>
                      </div>
                    </div>

                    {/* Specs */}
                    <div className="space-y-2 text-sm text-slate-300">
                      <div className="flex items-center gap-2">
                        <Gauge className="w-4 h-4 text-teal-400 flex-shrink-0" />
                        <span>{vehicle.mileage}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Fuel className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span>{vehicle.fuel}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-teal-400 flex-shrink-0" />
                        <span>{vehicle.location}</span>
                      </div>
                    </div>

                    {/* Price & CTA */}
                    <div className="pt-3 border-t border-slate-700/50 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1">
                        <DollarSign className="w-4 h-4 text-teal-400" />
                        <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                          {vehicle.price}
                        </span>
                      </div>
                      <Link
                        href="/vehicles"
                        className="px-3 py-1 rounded-lg bg-teal-500/20 text-teal-300 text-xs font-semibold hover:bg-teal-500/30 transition-all inline-block"
                      >
                        View
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Features Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-slate-700/50"
        >
          {[
            {
              icon: Search,
              title: 'Verified Inventory',
              desc: '100% genuine pre-owned vehicles with complete history',
            },
            {
              icon: DollarSign,
              title: 'Transparent Pricing',
              desc: 'No hidden charges, competitive rates, flexible EMI',
            },
            {
              icon: MapPin,
              title: 'Nationwide Network',
              desc: 'Browse vehicles across 50+ cities in India',
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 rounded-xl bg-slate-800/30 border border-slate-700/30 hover:border-teal-500/30 transition-all"
            >
              <feature.icon className="w-8 h-8 text-teal-400 mb-4" />
              <p className="text-white font-semibold mb-2">{feature.title}</p>
              <p className="text-slate-300 text-sm font-medium">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
