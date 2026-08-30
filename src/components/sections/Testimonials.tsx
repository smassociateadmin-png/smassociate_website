"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import testimonialData from "@/data/testimonialdata";
import AnimatedNumber from "@/components/AnimatedNumber";

// Dynamically import Marquee with no SSR to avoid hydration mismatch
const Marquee = dynamic(
  () => import("react-fast-marquee").then((mod) => ({ default: mod.default })),
  {
    ssr: false,
    loading: () => <div className="h-[300px]" />,
  }
);

export default function Testimonial() {
  return (
    <section className="bg-[#E7EDE9] text-[#1E2B25] py-20 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            Testimonials
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Straight from the people we&apos;ve built for. Real reviews backed by verified transactions.
          </p>
        </div>
      </div>

      {/* Marquee Wrapper with side fade gradient masks */}
      <div
        className="w-full relative py-3.5 pb-10"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent, black 6%, black 94%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, black 6%, black 94%, transparent)",
        }}
      >
        <Marquee speed={36} pauseOnHover={true} gradient={false} className="py-4 overflow-visible">
          {testimonialData.map((item, index) => {
            const isEven = index % 2 === 1;
            const tiltClass = isEven ? "rotate-[0.9deg]" : "-rotate-[1deg]";

            return (
              <article
                key={item.id}
                tabIndex={0}
                className={`group relative flex-none w-[320px] mx-3.5 bg-[#F3F6F4] rounded-t-[14px] px-6 pt-6 pb-9 shadow-[inset_0_1px_0_rgba(0,0,0,0.02),0_12px_28px_-18px_rgba(22,33,28,0.14)] hover:shadow-[0_20px_34px_-16px_rgba(22,33,28,0.18)] hover:rotate-0 hover:-translate-y-1.5 focus-within:rotate-0 focus-within:-translate-y-1.5 transition-all duration-[220ms] ease-out ${tiltClass}`}
              >
                {/* Stub Top: Label & Stamp */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.08em] text-[#62716A] mb-1.5 font-semibold">
                      {item.category}
                    </p>
                    <p className="font-semibold text-[17px] text-[#1E2B25] leading-snug">
                      {item.service}
                    </p>
                  </div>

                  {/* Stamp */}
                  <div className="shrink-0 w-[54px] h-[54px] rounded-full border-[1.5px] border-dashed border-[#A66C17] bg-[#F2E4C8] text-[#A66C17] flex items-center justify-center text-center text-[7.5px] font-bold tracking-[0.05em] uppercase -rotate-8 leading-[1.2] select-none whitespace-pre-line">
                    {item.stamp || "VERIFIED\nPAID"}
                  </div>
                </div>

                {/* Perforated Divider with Circular Edge Cutouts */}
                <div className="relative h-[1px] my-4 border-t border-dashed border-[#D5DED9] bg-[radial-gradient(circle,#E7EDE9_1.6px,transparent_1.7px)] [background-size:10px_1px] bg-repeat-x bg-left">
                  <span className="absolute -top-[9px] -left-6 w-[18px] h-[18px] rounded-full bg-[#E7EDE9] border border-[#D5DED9] pointer-events-none" />
                  <span className="absolute -top-[9px] -right-6 w-[18px] h-[18px] rounded-full bg-[#E7EDE9] border border-[#D5DED9] pointer-events-none" />
                </div>

                {/* Payout Row */}
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-xs text-[#62716A]">Paid out</span>
                  <span className="text-2xl sm:text-[26px] font-bold text-[#1F8A5C] tracking-tight">
                    {item.amount}
                  </span>
                </div>

                {/* Quote Message */}
                <blockquote className="m-0 mb-5 text-[#45564D] text-[15px] leading-[1.6] font-normal min-h-[96px]">
                  &ldquo;{item.message}&rdquo;
                </blockquote>

                {/* Customer Details */}
                <div className="flex items-center justify-between pt-4 border-t border-[#D5DED9]">
                  <div className="flex items-center gap-3">
                    <div className="w-[38px] h-[38px] rounded-lg bg-gradient-to-br from-[#1F8A5C] to-[#14563A] text-white font-semibold text-sm flex items-center justify-center shrink-0 shadow-sm">
                      {item.initials}
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-[#1E2B25] leading-tight">
                        {item.name}
                      </p>
                      <p className="text-[12.5px] text-[#62716A] mt-0.5 leading-tight">
                        {item.role}, {item.company}
                      </p>
                    </div>
                  </div>

                  {/* Verified LinkedIn Badge */}
                  <div className="shrink-0 opacity-80 hover:opacity-100 transition-opacity" title="Verified Review">
                    <Image
                      src="/icons/linkedintestimonial.svg"
                      alt="Verified Testimonial Review"
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                  </div>
                </div>

                {/* Torn Bottom Edge (Zigzag CSS Clip-path) */}
                <div
                  className="absolute left-0 right-0 -bottom-[15px] h-[16px] bg-[#F3F6F4] pointer-events-none"
                  style={{
                    clipPath:
                      "polygon(0% 0%, 8% 100%, 16% 0%, 24% 100%, 32% 0%, 40% 100%, 48% 0%, 56% 100%, 64% 0%, 72% 100%, 80% 0%, 88% 100%, 96% 0%, 100% 60%, 100% 0%)",
                  }}
                />
              </article>
            );
          })}
        </Marquee>
      </div>

      <div className="max-w-[1180px] mx-auto">
        {/* Trust Bar */}
        <div className="mt-14 sm:mt-16 pt-8 border-t border-[#D5DED9] flex flex-wrap gap-8 justify-between items-start">
          <div className="min-w-[140px]">
            <span className="text-2xl sm:text-[28px] font-bold text-[#1E2B25] block mb-1">
              $<span className="text-[#1F8A5C]"><AnimatedNumber value="18.4" decimals={1} />M</span>
            </span>
            <span className="text-xs sm:text-[13px] text-[#62716A]">
              paid out to sellers since 2021
            </span>
          </div>

          <div className="min-w-[140px]">
            <span className="text-2xl sm:text-[28px] font-bold text-[#1E2B25] block mb-1">
              <span className="text-[#1F8A5C]"><AnimatedNumber value="36" /></span> hrs
            </span>
            <span className="text-xs sm:text-[13px] text-[#62716A]">
              average quote-to-payout time
            </span>
          </div>

          <div className="min-w-[140px]">
            <span className="text-2xl sm:text-[28px] font-bold text-[#1E2B25] block mb-1">
              <span className="text-[#1F8A5C]"><AnimatedNumber value="4.9" decimals={1} /></span>/5
            </span>
            <span className="text-xs sm:text-[13px] text-[#62716A]">
              from <AnimatedNumber value="12,600" /> verified sellers
            </span>
          </div>

          <div className="min-w-[140px]">
            <span className="text-2xl sm:text-[28px] font-bold text-[#1E2B25] block mb-1">
              <span className="text-[#1F8A5C]"><AnimatedNumber value="0%" /></span>
            </span>
            <span className="text-xs sm:text-[13px] text-[#62716A]">
              hidden fees deducted at payout
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
