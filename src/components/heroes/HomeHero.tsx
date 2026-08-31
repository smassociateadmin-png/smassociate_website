import { ChevronRight, Shield, Zap, Award, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { ROUTES } from '@/lib/constants';
import AnimatedNumber from '@/components/AnimatedNumber';

const trustIndicators = [
  { icon: Shield, label: 'Customers', value: '500+' },
  { icon: Zap, label: 'Vehicles', value: '100+' },
  { icon: Award, label: 'Fast Process', value: '24-48h' },
];

const ledgerRows = [
  { label: 'Home Loan', status: 'Approved' },
  { label: 'Car Financing', status: '12-mo EMI' },
  { label: 'Two-Wheeler Loan', status: 'Verified' },
  { label: 'Pre-Owned Vehicle', status: 'Inspected' },
  { label: 'Insurance', status: 'Protected' },
];

const routeStops = ['Apply', 'Verify', 'Approve', 'Drive away'];

export default function HomeHero() {
  return (
    <section className="relative min-h-[480px] h-auto bg-gradient-navy text-white overflow-hidden pt-4 pb-2">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-teal rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch py-6 sm:py-8 lg:py-10">
          <div className="animate-fade-up">
            <div className="inline-block mb-6">
              <span className="text-teal font-semibold text-lg">Welcome to SM Associate</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Finance Made Simple.
              <br />
              <span className="bg-gradient-to-r from-teal to-cyan bg-clip-text text-transparent block mt-2 md:mt-4">
                Dreams Made Achievable
              </span>
            </h1>

            <div className="mb-6">
              <p className="text-lg md:text-lg text-teal font-semibold mb-3">
                Access home loans, car financing, two-wheeler loans, and premium pre-owned
                vehicles through one trusted platform. Your journey to financial freedom starts
                here.
              </p>
            </div>

            <p className="text-lg md:text-lg text-gray-200 mb-8 max-w-lg leading-relaxed">
              SM Associate is Tirunelveli&apos;s trusted finance and vehicle marketplace, helping
              customers across Tamil Nadu access transparent loans, two-wheeler insurance, and
              verified pre-owned vehicles — all under one roof. With 500+ customers served, 100+
              vehicles listed, and a 24-48 hour fast-track loan process, we make financial
              freedom and vehicle ownership simple, quick, and hassle-free.
            </p>

            <p className="text-base md:text-lg text-gray-200 mb-8 max-w-lg leading-relaxed">
              From home loans and car loans to personal and business financing, every product is
              built around transparent rates, minimal paperwork, and a customer-first approach.
              Explore our services, calculate your EMI instantly, or browse quality-checked
              vehicles ready for sale.
            </p>

            <div className="flex gap-4 flex-wrap mb-12">
              <Link
                href={ROUTES.LOANS}
                className="px-8 py-4 bg-gradient-to-r from-teal to-cyan text-white font-semibold rounded-xl hover:shadow-2xl transition-all text-lg hover:scale-105 inline-block text-center"
              >
                Get Started Today
              </Link>
              <Link
                href={ROUTES.LOANS}
                className="px-8 py-4 border-2 border-teal text-teal font-semibold rounded-xl hover:bg-teal/10 transition-all flex items-center gap-2 text-lg"
              >
                Explore Services
                <ChevronRight size={20} />
              </Link>
            </div>

            {/* Trust indicators — mobile/tablet only; on desktop these sit under the visual */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:hidden">
              {trustIndicators.map((indicator, idx) => {
                const Icon = indicator.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 bg-white/10 backdrop-blur rounded-xl border border-white/20 hover:border-teal/50 transition-colors animate-fade-up"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <div className="flex items-center gap-3">
                      <Icon size={24} className="text-teal flex-shrink-0" />
                      <div>
                        <p className="text-sm text-white/90 font-medium">{indicator.label}</p>
                        <p className="font-semibold text-teal text-sm">
                          <AnimatedNumber value={indicator.value} />
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ---------- RIGHT VISUAL: Loan & Vehicle Passbook + Journey strip ---------- */}
          <div className="relative hidden lg:flex lg:flex-col lg:h-full animate-float-slow lg:pt-8 lg:pb-6">
            <div className="relative flex-1 flex items-center justify-center">
              <div className="relative w-full max-w-md lg:mt-4">
                <div className="absolute -inset-12 bg-gradient-to-br from-teal/10 via-transparent to-cyan/10 rounded-3xl blur-3xl" />

                {/* Passbook card */}
                <div className="relative z-20 bg-[#F3ECDA] text-[#26210F] rounded-lg shadow-2xl pl-8 pr-6 py-6">
                  {/* stitched stub edge */}
                  <div
                    className="absolute left-0 top-3 bottom-3 w-3 border-r border-dashed border-[#D9CFAF]"
                    style={{
                      backgroundImage:
                        'repeating-linear-gradient(to bottom, #D9CFAF 0 2px, transparent 2px 9px)',
                    }}
                  />

                  {/* ink stamp */}
                  <div className="absolute -right-4 -top-5 z-10 animate-float-delayed">
                    <div className="w-24 h-24 rounded-full border-2 border-teal text-teal flex flex-col items-center justify-center text-center -rotate-[14deg] bg-teal/5 font-mono">
                      <span className="text-sm font-bold leading-none">
                        <AnimatedNumber value="100%" />
                      </span>
                      <span className="text-[10px] font-semibold tracking-wide">VERIFIED</span>
                      <span className="text-[10px] font-semibold tracking-wide">DOCS</span>
                    </div>
                  </div>

                  {/* header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#0A1830] text-teal flex items-center justify-center font-bold text-sm flex-shrink-0">
                      SM
                    </div>
                    <div>
                      <p className="font-bold text-base leading-tight">SM Associate</p>
                      <p className="text-[10px] font-mono tracking-widest uppercase text-[#7A7157]">
                        Loan &amp; Vehicle Passbook
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-dashed border-[#D9CFAF] mb-2" />

                  {/* ledger rows */}
                  <div>
                    {ledgerRows.map((row, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between py-2 text-sm border-b border-dotted border-[#D9CFAF] last:border-b-0"
                      >
                        <span className="font-medium text-[#2E2A17]">{row.label}</span>
                        <span className="flex items-center gap-1 text-xs font-mono text-teal">
                          <CheckCircle2 size={12} />
                          {row.status}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* approved amount */}
                  <div className="border-t border-dashed border-[#D9CFAF] mt-3 pt-3">
                    <p className="text-2xl font-mono font-bold text-[#26210F]">
                      <AnimatedNumber value="₹10L+" />
                    </p>
                    <p className="text-[10px] uppercase tracking-widest text-[#7A7157]">
                      Approved instantly
                    </p>
                  </div>
                </div>

                {/* journey / route strip */}
                <div className="relative z-20 mt-8 px-2">
                  <div
                    className="h-[2px] mb-3 mx-2"
                    style={{
                      backgroundImage:
                        'repeating-linear-gradient(to right, rgba(255,255,255,0.35) 0 10px, transparent 10px 18px)',
                    }}
                  />
                  <div className="flex justify-between text-center">
                    {routeStops.map((stop, idx) => (
                      <div key={stop} className="flex-1 flex flex-col items-center gap-2">
                        <div
                          className={`w-2 h-2 rounded-full ${idx === 0 ? 'bg-teal animate-pulse-soft' : 'bg-white/40'
                            }`}
                        />
                        <span
                          className={`text-[10px] font-mono uppercase tracking-wide ${idx === 0 ? 'text-teal font-semibold' : 'text-white/60'
                            }`}
                        >
                          {stop}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="grid grid-cols-3 gap-4 mt-3">
              {trustIndicators.map((indicator, idx) => {
                const Icon = indicator.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 bg-white/10 backdrop-blur rounded-xl border border-white/20 hover:border-teal/50 transition-colors animate-fade-up"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <div className="flex items-center gap-3">
                      <Icon size={24} className="text-teal flex-shrink-0" />
                      <div>
                        <p className="text-sm text-white/90 font-medium">{indicator.label}</p>
                        <p className="font-semibold text-teal text-sm">{indicator.value}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div> */}
          </div>
        </div>
      </div>

      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 translate-x-2 animate-bounce-soft">
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm text-white/70">Scroll to explore</p>
          <div className="w-6 h-10 border-2 border-teal rounded-full flex justify-center">
            <div className="w-1 h-2 bg-teal rounded-full mt-2 animate-scroll-indicator" />
          </div>
        </div>
      </div> */}
    </section>
  );
}