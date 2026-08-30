'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FAQ_DATA, FAQCategory, FAQItem } from '@/data/faqData';
import { ROUTES } from '@/lib/constants';

interface FAQSectionProps {
  category?: FAQCategory;
  eyebrow?: string;
  title?: React.ReactNode;
  subtitle?: string;
  items?: FAQItem[];
  footerNote?: React.ReactNode;
  id?: string;
  className?: string;
  includeSchema?: boolean;
}

export default function FAQSection({
  category = 'home',
  eyebrow,
  title,
  subtitle,
  items,
  footerNote,
  id = 'faq',
  className = '',
  includeSchema = true,
}: FAQSectionProps) {
  const categoryConfig = FAQ_DATA[category] || FAQ_DATA.home;
  const faqItems = items || categoryConfig.items;
  const displayTitle = title ?? categoryConfig.title ?? 'Frequently Asked Questions';
  const displaySubtitle =
    subtitle ?? categoryConfig.subtitle ?? 'Got questions? We have got clear answers.';

  // Track flipped card indexes
  const [flippedIndices, setFlippedIndices] = useState<Record<number, boolean>>({});

  const toggleFlip = (index: number) => {
    setFlippedIndices((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // Schema.org FAQPage structured data
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <section
      id={id}
      className={`relative w-full py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-gray-50 to-white ${className}`}
    >
      {includeSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header - Styled exactly like all other sections */}
        <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
          {eyebrow && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal/10 text-teal text-xs font-semibold uppercase tracking-wider mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
              {eyebrow}
            </div>
          )}
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            {displayTitle}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            {displaySubtitle}
          </p>
        </div>

        {/* FAQ Flip Cards Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-x-5 md:gap-y-3">
          {faqItems.map((faq, index) => {
            const isFlipped = !!flippedIndices[index];
            const formattedIdx = String(index + 1).padStart(2, '0');

            return (
              <div
                key={index}
                className={`faq-item faq-flip-card bg-white border border-[#D7DBE2] hover:border-[#C7CEDA] rounded-[14px] shadow-[0_1px_2px_rgba(20,26,36,0.04),0_8px_20px_-14px_rgba(20,26,36,0.12)] transition-colors duration-200 ${
                  isFlipped ? 'flipped' : ''
                }`}
              >
                <div className="faq-flip-inner">
                  {/* Front Face (Question) */}
                  <div className="faq-flip-face">
                    <button
                      type="button"
                      onClick={() => toggleFlip(index)}
                      aria-expanded={isFlipped}
                      aria-label={`Question: ${faq.question}. Click to see answer.`}
                      className="w-full bg-transparent border-none cursor-pointer flex items-start gap-3 p-3 sm:p-[12px_16px] text-left text-[#141A24] text-[15px] font-semibold rounded-[14px] group focus-visible:outline-2 focus-visible:outline-[#2F63E0] focus-visible:outline-offset-4"
                    >
                      <span className="text-[13px] font-bold text-[#636D7C] w-[26px] flex-none pt-[2px]">
                        {formattedIdx}
                      </span>
                      <span className="flex-1 pt-[1px] text-[#141A24] group-hover:text-[#2F63E0] transition-colors duration-200 leading-snug">
                        {faq.question}
                      </span>
                      <span className="w-7 h-7 flex-none flex items-center justify-center mt-[1px]">
                        <svg
                          viewBox="0 0 20 20"
                          fill="none"
                          className="w-4 h-4 transition-transform duration-350 ease-[cubic-bezier(0.3,0.6,0.2,1.2)]"
                        >
                          <path
                            d="M5 8l5 5 5-5"
                            stroke="#2F63E0"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </button>
                  </div>

                  {/* Back Face (Answer) */}
                  <div className="faq-flip-face faq-flip-back">
                    <button
                      type="button"
                      onClick={() => toggleFlip(index)}
                      aria-expanded={isFlipped}
                      aria-label={`Answer for: ${faq.question}. Click to return to question.`}
                      className="w-full bg-transparent border-none cursor-pointer flex items-start gap-3 p-3 sm:p-[12px_16px] text-left rounded-[14px] group focus-visible:outline-2 focus-visible:outline-[#178F52] focus-visible:outline-offset-4"
                    >
                      <span className="text-[13px] text-[#178F52] font-bold w-[26px] flex-none pt-[2px]">
                        {formattedIdx}
                      </span>
                      <span className="flex-1 pt-[1px] text-[#636D7C] font-normal text-[14.5px] leading-[1.65]">
                        {faq.answer}
                      </span>
                      <span className="w-7 h-7 flex-none flex items-center justify-center mt-[1px]">
                        <svg
                          viewBox="0 0 20 20"
                          fill="none"
                          className="w-4 h-4 transition-transform duration-350 ease-[cubic-bezier(0.3,0.6,0.2,1.2)] rotate-180"
                        >
                          <path
                            d="M5 8l5 5 5-5"
                            stroke="#178F52"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Prompt */}
        <div className="text-center mt-10 sm:mt-12 text-sm text-gray-600">
          {footerNote ? (
            footerNote
          ) : (
            <p className="m-0">
              Still have questions?{' '}
              <Link
                href={ROUTES.CONTACT}
                className="text-teal hover:text-cyan font-semibold transition-colors underline"
              >
                Talk to our expert team
              </Link>{' '}
              — we are always here to help.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
