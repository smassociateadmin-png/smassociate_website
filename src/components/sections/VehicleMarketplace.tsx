import { Car, Bike, Sparkles, PlusCircle, ChevronRight, ShieldCheck, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { ROUTES } from '@/lib/constants';

const categories = [
  {
    title: 'Pre-Owned Cars',
    desc: 'Sedans, Hatchbacks & Luxury vehicles inspected on 150+ checkpoints',
    icon: Car,
    count: '60+ Available',
    href: `${ROUTES.VEHICLES}?type=car`,
    gradient: 'from-blue-600 to-cyan-600',
  },
  {
    title: 'Pre-Owned Two Wheelers',
    desc: 'Bikes & Scooters certified with service history and warranty options',
    icon: Bike,
    count: '40+ Available',
    href: `${ROUTES.VEHICLES}?type=bike`,
    gradient: 'from-emerald-600 to-teal-600',
  },
  {
    title: 'Sell Your Vehicle',
    desc: 'Instant online valuation and fair price purchase with same-day payment',
    icon: PlusCircle,
    count: 'Instant Cash Offer',
    href: ROUTES.SELL_VEHICLE,
    gradient: 'from-orange-500 to-red-500',
  },
];

export default function VehicleMarketplace() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal/10 text-teal text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles size={14} /> Buy, Sell &amp; Finance
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-navy mb-4">Find Your Next Vehicle or Sell Yours</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore verified cars and bikes with guaranteed documentation, easy financing, and instant resale assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl p-8 bg-gray-50 border border-gray-100 hover:border-teal/30 hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${cat.gradient} flex items-center justify-center text-white mb-6 shadow-md`}>
                    <Icon size={28} />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-navy">{cat.title}</h3>
                    <span className="text-xs font-bold text-teal bg-teal/10 px-2.5 py-1 rounded-full">{cat.count}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">{cat.desc}</p>
                </div>

                <Link
                  href={cat.href}
                  className="inline-flex items-center justify-between px-5 py-3 rounded-xl bg-white border border-gray-200 text-navy font-semibold text-sm hover:bg-teal hover:text-white hover:border-teal transition-all group shadow-sm"
                >
                  <span>Explore Now</span>
                  <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>

        <div className="rounded-2xl bg-gradient-navy p-8 md:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-teal text-sm font-bold mb-2">
              <ShieldCheck size={18} /> Direct Sale &amp; RC Transfer Included
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-2">Looking to Sell Your Used Car or Bike?</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Get an instant valuation online, doorstep vehicle inspection, free RC transfer, and instant payment into your bank account.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto flex-shrink-0">
            <Link
              href={ROUTES.SELL_VEHICLE}
              className="px-6 py-3 bg-gradient-to-r from-teal to-cyan text-white font-bold rounded-xl hover:shadow-lg transition-all text-center text-sm inline-flex items-center justify-center gap-2"
            >
              <span>Instant Valuation</span>
              <ChevronRight size={16} />
            </Link>
            <Link
              href={ROUTES.CAR_RESALE}
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-colors text-center text-sm border border-white/20"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
