'use client';

import Image from 'next/image';
import { Mail, Linkedin, Phone, X, BadgeCheck, RotateCcw } from 'lucide-react';
import { useState } from 'react';

const partners = [
  {
    id: 0,
    name: '[Partner 1 Name]',
    role: 'Co-Founder',
    title: 'Managing Partner',
    bio: 'Experienced in customer relationships, financial assistance and business operations, with a strong focus on delivering transparent and reliable solutions.',
    expertise: ['Finance', 'Customer Relations', 'Business Operations'],
    color: '#2563eb',
    colorLight: '#93c5fd',
    // Replace with the real headshot path, e.g. '/partners/partner-1.jpg'
    image: '/partners/partner-1.png',
  },
  {
    id: 1,
    name: 'Mariappan G.M',
    role: 'Co-Founder',
    title: 'Managing Partner',
    bio: 'Mariappan G.M is a finance professional with 17 years of experience in corporate finance, financial planning, and risk management. He has a strong track record of driving process improvements and delivering data-driven insights that support strategic business decisions. Known for his analytical mindset and attention to detail, Mariappan combines financial expertise with a collaborative, results-oriented approach. He remains committed to continuous learning and upholding the highest standards of integrity in his work.',
    expertise: ['Finance', 'Business Development', 'Customer Service', 'Mobility Solutions'],
    color: '#0891b2',
    colorLight: '#67e8f9',
    image: '/partners/partner-2.png',
  },
];

function FlipCard({ partner }: { partner: typeof partners[0] }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="relative w-full max-w-[27rem] mx-auto" style={{ perspective: '1400px' }}>
      {/* Click hint badge — shown only when not flipped */}
      <div
        className={`absolute -top-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border whitespace-nowrap pointer-events-none transition-all duration-300 ${
          flipped ? 'opacity-0 scale-90' : 'opacity-100 scale-100'
        }`}
        style={{
          background: partner.color,
          color: '#ffffff',
          borderColor: partner.colorLight,
        }}
      >
        <RotateCcw className="w-3 h-3" /> Click to reveal
      </div>

      {/* Card wrapper — rotates on click */}
      <div
        className={`relative w-full cursor-pointer transition-transform duration-700 [transform-style:preserve-3d] ${
          flipped ? '[transform:rotateY(180deg)]' : ''
        }`}
        style={{ height: '540px' }}
        onClick={() => setFlipped((f) => !f)}
      >
        {/* ─── FRONT FACE — full image, no text ─── */}
        <div
          className="absolute inset-0 rounded-3xl overflow-hidden"
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
        >
          <Image
            src={partner.image}
            alt={`${partner.name} - ${partner.role} at SM Associate`}
            fill
            sizes="(max-width: 768px) 100vw, 27rem"
            className="object-cover"
            style={{
              objectPosition: 'center 25%',
            }}
          />
        </div>

        {/* ─── BACK FACE ─── */}
        <div
          className="absolute inset-0 rounded-3xl overflow-hidden"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            background: '#050d1f',
            border: `1px solid ${partner.color}40`,
          }}
        >
          {/* Glow accent */}
          <div
            className="absolute -top-16 -right-16 w-48 h-48 rounded-full opacity-20 blur-3xl pointer-events-none"
            style={{ background: partner.color }}
          />
          <div
            className="absolute -bottom-16 -left-16 w-40 h-40 rounded-full opacity-15 blur-3xl pointer-events-none"
            style={{ background: partner.color }}
          />

          {/* Top accent bar */}
          <div
            className="absolute top-0 left-0 right-0 h-1"
            style={{ background: `linear-gradient(90deg, transparent, ${partner.color}, transparent)` }}
          />

          <div className="relative z-10 h-full flex flex-col p-6 gap-3 justify-center">
            {/* Close hint */}
            <div className="flex items-center justify-between">
              <div
                className="flex items-center gap-1.5 text-xs font-semibold"
                style={{ color: partner.colorLight }}
              >
                <BadgeCheck className="w-3.5 h-3.5" /> {partner.role} · SM Associate
              </div>
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center border border-white/10 text-white/40 hover:text-white/70 transition-colors"
                style={{ background: 'rgba(255,255,255,0.05)' }}
              >
                <X className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Name */}
            <div>
              <h3 className="text-2xl font-black text-white leading-tight">{partner.name}</h3>
              <p className="text-slate-400 text-sm mt-0.5">{partner.title}</p>
            </div>

            {/* Divider */}
            <div className="h-px" style={{ background: `linear-gradient(90deg, ${partner.color}60, transparent)` }} />

            {/* Bio */}
            <p className="text-slate-400 text-[13px] leading-relaxed">{partner.bio}</p>

            {/* Expertise */}
            <div>
              <p
                className="text-xs font-bold uppercase tracking-widest mb-2"
                style={{ color: partner.color }}
              >
                Expertise
              </p>
              <div className="flex flex-wrap gap-1.5">
                {partner.expertise.map((exp, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-lg text-xs font-semibold border"
                    style={{
                      background: `${partner.color}15`,
                      color: partner.colorLight,
                      borderColor: `${partner.color}30`,
                    }}
                  >
                    {exp}
                  </span>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="h-px" style={{ background: `linear-gradient(90deg, ${partner.color}60, transparent)` }} />

            {/* Social links */}
            <div className="flex gap-2">
              {[
                { icon: Linkedin, label: 'LinkedIn', href: '#' },
                { icon: Mail, label: 'Email', href: '#' },
                { icon: Phone, label: 'Call', href: '+919790219874' },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg border text-xs font-semibold transition-all hover:opacity-90"
                  style={{
                    background: `${partner.color}12`,
                    color: partner.colorLight,
                    borderColor: `${partner.color}30`,
                  }}
                >
                  <Icon className="w-3 h-3 flex-shrink-0" /> {label}
                </a>
              ))}
            </div>

            {/* Flip back hint */}
            <p className="text-center text-white/20 text-xs mt-1">Tap card to flip back</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Partners() {
  return (
    <section id="partners" className="relative py-12">
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading and Description */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">Our Partners</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-600 text-lg leading-relaxed mb-3">
              Meet the dedicated team behind SM Associate. Our partners bring years of experience in finance, customer relations, and mobility solutions.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Committed to delivering transparent, reliable, and customer-centric services to help you achieve your financial and mobility goals.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-start px-2 md:px-4">
          {partners.map((partner) => (
            <FlipCard key={partner.id} partner={partner} />
          ))}
        </div>
      </div>
    </section>
  );
}