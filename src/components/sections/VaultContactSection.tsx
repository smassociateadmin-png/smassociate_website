'use client';

import { useState, useEffect, useRef, useId } from 'react';
import { COMPANY_INFO } from '@/lib/constants';

export type VaultTheme =
  | 'navy-teal'
  | 'blue-cyan'
  | 'navy-cyan'
  | 'indigo-cyan'
  | 'emerald-teal'
  | 'orange-amber'
  | 'zinc-emerald'
  | 'emerald-gold'
  | 'rose-pink'
  | 'cyan-teal'
  | 'purple-cyan'
  | 'amber-gold'
  | 'navy-blue';

interface ThemeColors {
  vaultBg: string;
  vaultDeep: string;
  accent: string;
  accentBright: string;
  cream: string;
  creamLine: string;
  sage: string;
  ink: string;
  inkSoft: string;
  dialStroke: string;
  buttonBg: string;
  sealBg: string;
  radioBg: string;
  perfCutout: string;
}

const THEMES: Record<VaultTheme, ThemeColors> = {
  'navy-teal': {
    vaultBg: 'radial-gradient(ellipse at 20% -10%, rgba(20,184,166,0.25), transparent 60%), linear-gradient(180deg, #0A192F 0%, #05101E 100%)',
    vaultDeep: '#05101E',
    accent: '#0D9488',
    accentBright: '#22D3EE',
    cream: '#F4F8F7',
    creamLine: '#D5E4E1',
    sage: '#94A3B8',
    ink: '#0F172A',
    inkSoft: '#475569',
    dialStroke: '#22D3EE',
    buttonBg: '#0A192F',
    sealBg: 'radial-gradient(circle at 35% 30%, #22D3EE, #14B8A6 60%, #0F766E 100%)',
    radioBg: 'rgba(20,184,166,0.09)',
    perfCutout: '#F4F8F7',
  },
  'blue-cyan': {
    vaultBg: 'radial-gradient(ellipse at 20% -10%, rgba(34,211,238,0.25), transparent 60%), linear-gradient(180deg, #0F172A 0%, #030712 100%)',
    vaultDeep: '#030712',
    accent: '#0284C7',
    accentBright: '#38BDF8',
    cream: '#F0F6FA',
    creamLine: '#CCE0EB',
    sage: '#94A3B8',
    ink: '#0F172A',
    inkSoft: '#475569',
    dialStroke: '#38BDF8',
    buttonBg: '#0F172A',
    sealBg: 'radial-gradient(circle at 35% 30%, #38BDF8, #0284C7 60%, #0369A1 100%)',
    radioBg: 'rgba(56,189,248,0.09)',
    perfCutout: '#F0F6FA',
  },
  'navy-cyan': {
    vaultBg: 'radial-gradient(ellipse at 20% -10%, rgba(6,182,212,0.25), transparent 60%), linear-gradient(180deg, #0F172A 0%, #081226 100%)',
    vaultDeep: '#081226',
    accent: '#0D9488',
    accentBright: '#22D3EE',
    cream: '#F3F7F8',
    creamLine: '#CEE0E4',
    sage: '#94A3B8',
    ink: '#0F172A',
    inkSoft: '#475569',
    dialStroke: '#22D3EE',
    buttonBg: '#0F172A',
    sealBg: 'radial-gradient(circle at 35% 30%, #22D3EE, #0D9488 60%, #0F766E 100%)',
    radioBg: 'rgba(6,182,212,0.09)',
    perfCutout: '#F3F7F8',
  },
  'indigo-cyan': {
    vaultBg: 'radial-gradient(ellipse at 20% -10%, rgba(129,140,248,0.25), transparent 60%), linear-gradient(180deg, #0F172A 0%, #1E1B4B 100%)',
    vaultDeep: '#1E1B4B',
    accent: '#6366F1',
    accentBright: '#818CF8',
    cream: '#F5F4FA',
    creamLine: '#D8D4EC',
    sage: '#A5B4FC',
    ink: '#1E1B4B',
    inkSoft: '#4B5563',
    dialStroke: '#818CF8',
    buttonBg: '#1E1B4B',
    sealBg: 'radial-gradient(circle at 35% 30%, #818CF8, #6366F1 60%, #4338CA 100%)',
    radioBg: 'rgba(99,102,241,0.09)',
    perfCutout: '#F5F4FA',
  },
  'emerald-teal': {
    vaultBg: 'radial-gradient(ellipse at 20% -10%, rgba(52,211,153,0.25), transparent 60%), linear-gradient(180deg, #022C22 0%, #021914 100%)',
    vaultDeep: '#021914',
    accent: '#059669',
    accentBright: '#34D399',
    cream: '#F0F8F4',
    creamLine: '#CBE5D7',
    sage: '#6EE7B7',
    ink: '#064E3B',
    inkSoft: '#475569',
    dialStroke: '#34D399',
    buttonBg: '#022C22',
    sealBg: 'radial-gradient(circle at 35% 30%, #34D399, #059669 60%, #065F46 100%)',
    radioBg: 'rgba(16,185,129,0.09)',
    perfCutout: '#F0F8F4',
  },
  'orange-amber': {
    vaultBg: 'radial-gradient(ellipse at 20% -10%, rgba(249,115,22,0.25), transparent 60%), linear-gradient(180deg, #1C100B 0%, #0A0402 100%)',
    vaultDeep: '#0A0402',
    accent: '#EA580C',
    accentBright: '#FB923C',
    cream: '#FAF5F0',
    creamLine: '#EADBD0',
    sage: '#FDBA74',
    ink: '#1C100B',
    inkSoft: '#57534E',
    dialStroke: '#FB923C',
    buttonBg: '#1C100B',
    sealBg: 'radial-gradient(circle at 35% 30%, #FB923C, #EA580C 60%, #C2410C 100%)',
    radioBg: 'rgba(249,115,22,0.09)',
    perfCutout: '#FAF5F0',
  },
  'zinc-emerald': {
    vaultBg: 'radial-gradient(ellipse at 20% -10%, rgba(16,185,129,0.25), transparent 60%), linear-gradient(180deg, #09090B 0%, #022C22 100%)',
    vaultDeep: '#022C22',
    accent: '#10B981',
    accentBright: '#F59E0B',
    cream: '#F2F6F4',
    creamLine: '#CFDFD7',
    sage: '#A7F3D0',
    ink: '#09090B',
    inkSoft: '#52525B',
    dialStroke: '#10B981',
    buttonBg: '#09090B',
    sealBg: 'radial-gradient(circle at 35% 30%, #F59E0B, #10B981 60%, #047857 100%)',
    radioBg: 'rgba(16,185,129,0.09)',
    perfCutout: '#F2F6F4',
  },
  'emerald-gold': {
    vaultBg: 'radial-gradient(ellipse at 20% -10%, rgba(228,193,88,0.20), transparent 60%), linear-gradient(180deg, #022C22 0%, #064E3B 100%)',
    vaultDeep: '#022C22',
    accent: '#C9A227',
    accentBright: '#E4C158',
    cream: '#F4EEE0',
    creamLine: '#E2D9C2',
    sage: '#A7F3D0',
    ink: '#064E3B',
    inkSoft: '#54615A',
    dialStroke: '#E4C158',
    buttonBg: '#022C22',
    sealBg: 'radial-gradient(circle at 35% 30%, #E4C158, #C9A227 60%, #8F7318 100%)',
    radioBg: 'rgba(201,162,39,0.09)',
    perfCutout: '#F4EEE0',
  },
  'rose-pink': {
    vaultBg: 'radial-gradient(ellipse at 20% -10%, rgba(244,63,94,0.25), transparent 60%), linear-gradient(180deg, #4C0519 0%, #1F020A 100%)',
    vaultDeep: '#1F020A',
    accent: '#E11D48',
    accentBright: '#FB7185',
    cream: '#FDF2F4',
    creamLine: '#ECCBD2',
    sage: '#FDA4AF',
    ink: '#4C0519',
    inkSoft: '#5C484D',
    dialStroke: '#FB7185',
    buttonBg: '#4C0519',
    sealBg: 'radial-gradient(circle at 35% 30%, #FB7185, #E11D48 60%, #BE123C 100%)',
    radioBg: 'rgba(244,63,94,0.09)',
    perfCutout: '#FDF2F4',
  },
  'cyan-teal': {
    vaultBg: 'radial-gradient(ellipse at 20% -10%, rgba(6,182,212,0.25), transparent 60%), linear-gradient(180deg, #083344 0%, #031D28 100%)',
    vaultDeep: '#031D28',
    accent: '#0891B2',
    accentBright: '#22D3EE',
    cream: '#F0F8FA',
    creamLine: '#CCE5EC',
    sage: '#7DD3FC',
    ink: '#083344',
    inkSoft: '#475569',
    dialStroke: '#22D3EE',
    buttonBg: '#083344',
    sealBg: 'radial-gradient(circle at 35% 30%, #22D3EE, #0891B2 60%, #0E7490 100%)',
    radioBg: 'rgba(6,182,212,0.09)',
    perfCutout: '#F0F8FA',
  },
  'purple-cyan': {
    vaultBg: 'radial-gradient(ellipse at 20% -10%, rgba(168,85,247,0.25), transparent 60%), linear-gradient(180deg, #3B0764 0%, #1E0333 100%)',
    vaultDeep: '#1E0333',
    accent: '#9333EA',
    accentBright: '#C084FC',
    cream: '#FAF5FD',
    creamLine: '#E7D5F3',
    sage: '#D8B4FE',
    ink: '#3B0764',
    inkSoft: '#5B4B69',
    dialStroke: '#C084FC',
    buttonBg: '#3B0764',
    sealBg: 'radial-gradient(circle at 35% 30%, #C084FC, #9333EA 60%, #6B21A8 100%)',
    radioBg: 'rgba(168,85,247,0.09)',
    perfCutout: '#FAF5FD',
  },
  'amber-gold': {
    vaultBg: 'radial-gradient(ellipse at 20% -10%, rgba(228,193,88,0.25), transparent 60%), linear-gradient(180deg, #451A03 0%, #1A0A02 100%)',
    vaultDeep: '#1A0A02',
    accent: '#C9A227',
    accentBright: '#E4C158',
    cream: '#F4EEE0',
    creamLine: '#E2D9C2',
    sage: '#FDE68A',
    ink: '#1A0A02',
    inkSoft: '#54615A',
    dialStroke: '#E4C158',
    buttonBg: '#451A03',
    sealBg: 'radial-gradient(circle at 35% 30%, #E4C158, #C9A227 60%, #8F7318 100%)',
    radioBg: 'rgba(201,162,39,0.09)',
    perfCutout: '#F4EEE0',
  },
  'navy-blue': {
    vaultBg: 'radial-gradient(ellipse at 20% -10%, rgba(56,189,248,0.22), transparent 60%), linear-gradient(180deg, #0A192F 0%, #030712 100%)',
    vaultDeep: '#030712',
    accent: '#0284C7',
    accentBright: '#38BDF8',
    cream: '#F0F6FA',
    creamLine: '#CCE0EB',
    sage: '#BAE6FD',
    ink: '#0A192F',
    inkSoft: '#475569',
    dialStroke: '#38BDF8',
    buttonBg: '#0A192F',
    sealBg: 'radial-gradient(circle at 35% 30%, #38BDF8, #0284C7 60%, #0369A1 100%)',
    radioBg: 'rgba(56,189,248,0.09)',
    perfCutout: '#F0F6FA',
  },
};

export interface StatItem {
  label: string;
  target: number | string;
  prefix?: string;
  suffix?: string;
  isStatic?: boolean;
}

export interface RadioOption {
  value: string;
  label: string;
}

export interface VaultContactSectionProps {
  id?: string;
  theme?: VaultTheme;
  brandTag?: string;
  title?: React.ReactNode;
  subtitle?: string;
  stats?: StatItem[];
  formEyebrow?: string;
  formTitle?: string;
  formSubtitle?: string;
  reasonLabel?: string;
  reasonOptions?: RadioOption[];
  defaultReason?: string;
  valueLabel?: string;
  valuePlaceholder?: string;
  phoneLabel?: string;
  phonePlaceholder?: string;
  messagePlaceholder?: string;
  submitButtonText?: string;
}

export default function VaultContactSection({
  id = 'contact-inquiry',
  theme = 'navy-teal',
  brandTag = 'SM Associate',
  title = (
    <>
      Turn your assets into <em>capital</em>.
    </>
  ),
  subtitle = 'Financing and resale, handled by one desk. Tell us what you need — we will structure the best offer for you.',
  stats = [
    { label: 'Loans Disbursed, YTD', target: 21400000, prefix: '₹', suffix: '+' },
    { label: 'Avg. Time to Offer', target: 'under 24 hrs', isStatic: true },
    { label: 'Happy Customers', target: 500, suffix: '+ Served' },
  ],
  formEyebrow = 'Start an inquiry',
  formTitle = 'A specialist replies within one business day.',
  formSubtitle = 'Financing, resale, or insurance — give us the shape of it below.',
  reasonLabel = "I'm reaching out about",
  reasonOptions = [
    { value: 'financing', label: 'Financing / Loan' },
    { value: 'resale', label: 'Vehicle Resale' },
    { value: 'insurance', label: 'Insurance' },
    { value: 'other', label: 'Something else' },
  ],
  defaultReason = 'financing',
  valueLabel = 'Approximate amount / value',
  valuePlaceholder = 'e.g. ₹5,00,000',
  phoneLabel = 'Phone number',
  phonePlaceholder = '+91 98765 43210',
  messagePlaceholder = 'Describe the asset, required amount, timeline, or specific requirements...',
  submitButtonText = 'Submit inquiry',
}: VaultContactSectionProps) {
  const t = THEMES[theme] || THEMES['navy-teal'];
  const uniqueId = useId();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [val, setVal] = useState('');
  const [reason, setReason] = useState(defaultReason);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [refCode, setRefCode] = useState('');

  const [errors, setErrors] = useState<{
    name?: boolean;
    email?: boolean;
    reason?: boolean;
    message?: boolean;
  }>({});

  // Animated counters
  const [counts, setCounts] = useState<number[]>(() =>
    stats.map(() => 0)
  );
  const statsRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasAnimated(true);
          const duration = 1400;
          const start = performance.now();

          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);

            setCounts(
              stats.map((s) => {
                if (typeof s.target === 'number') {
                  return Math.floor(eased * s.target);
                }
                return 0;
              })
            );

            if (progress < 1) {
              requestAnimationFrame(tick);
            }
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.2 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated, stats]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: {
      name?: boolean;
      email?: boolean;
      reason?: boolean;
      message?: boolean;
    } = {};

    if (!name.trim()) newErrors.name = true;
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!emailOk) newErrors.email = true;
    if (!reason) newErrors.reason = true;
    if (!message.trim()) newErrors.message = true;

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    const code = 'REF-' + Math.floor(100000 + Math.random() * 900000);
    setRefCode(code);
    setSubmitted(true);

    // Also trigger mailto in background for convenience
    const selectedOption = reasonOptions.find((r) => r.value === reason);
    const reasonText = selectedOption ? selectedOption.label : reason;
    const subject = encodeURIComponent(`[${code}] New Inquiry: ${reasonText} - ${name}`);
    const body = encodeURIComponent(
      `Inquiry Reference: ${code}\nFull Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nSubject/Reason: ${reasonText}\nApproximate Value: ${val || 'N/A'}\n\nMessage/Details:\n${message}\n\nSubmitted from: ${typeof window !== 'undefined' ? window.location.href : ''}`
    );

    try {
      const link = document.createElement('a');
      link.href = `mailto:${COMPANY_INFO.email}?subject=${subject}&body=${body}`;
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      setTimeout(() => {
        document.body.removeChild(link);
      }, 300);
    } catch {
      // ignore
    }
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setPhone('');
    setVal('');
    setReason(defaultReason);
    setMessage('');
    setErrors({});
    setSubmitted(false);
  };

  return (
    <section
      id={id}
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 w-full transition-colors"
      style={
        {
          '--vault': t.buttonBg,
          '--vault-deep': t.vaultDeep,
          '--gold': t.accent,
          '--gold-bright': t.accentBright,
          '--cream': t.cream,
          '--cream-line': t.creamLine,
          '--sage': t.sage,
          '--ink': t.ink,
          '--ink-soft': t.inkSoft,
          '--error': '#C1443B',
          '--perf-cutout': t.perfCutout,
        } as React.CSSProperties
      }
    >
      <div className="max-w-6xl mx-auto rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden border border-slate-700/30">
        <div className="grid grid-cols-1 md:grid-cols-[minmax(300px,40%)_22px_minmax(340px,1fr)] min-h-[640px]">
          {/* ---------- LEFT: VAULT PANEL ---------- */}
          <div
            className="p-8 sm:p-10 lg:p-12 relative flex flex-col justify-between overflow-hidden text-white"
            style={{ background: t.vaultBg }}
          >
            <div>
              {/* Brand Tag */}
              <div
                className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold"
                style={{ color: t.accentBright }}
              >
                <span
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{
                    backgroundColor: t.accentBright,
                    boxShadow: `0 0 10px ${t.accentBright}`,
                  }}
                />
                {brandTag}
              </div>

              {/* Headline */}
              <div className="mt-8">
                <h2 className="font-semibold text-3xl sm:text-4xl lg:text-[2.6rem] leading-[1.12] mb-4 text-white [&>em]:italic [&>em]:font-medium" style={{ color: '#FFFFFF' }}>
                  {title}
                </h2>
                <p
                  className="text-sm sm:text-base leading-relaxed max-w-sm"
                  style={{ color: t.sage }}
                >
                  {subtitle}
                </p>
              </div>
            </div>

            {/* Rotating Vault Dial SVG */}
            <div
              className="absolute -right-20 top-1/2 -translate-y-1/2 w-64 h-64 md:w-72 md:h-72 opacity-30 pointer-events-none hidden sm:block"
              aria-hidden="true"
            >
              <svg
                viewBox="0 0 200 200"
                fill="none"
                className="w-full h-full"
                style={{ animation: 'vault-spin 90s linear infinite' }}
              >
                <circle
                  cx="100"
                  cy="100"
                  r="96"
                  stroke={t.dialStroke}
                  strokeOpacity="0.35"
                  strokeWidth="1"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="72"
                  stroke={t.dialStroke}
                  strokeOpacity="0.5"
                  strokeWidth="1"
                />
                <g stroke={t.dialStroke} strokeOpacity="0.6" strokeWidth="1.5">
                  <line x1="100" y1="4" x2="100" y2="18" />
                  <line x1="100" y1="182" x2="100" y2="196" />
                  <line x1="4" y1="100" x2="18" y2="100" />
                  <line x1="182" y1="100" x2="196" y2="100" />
                  <line x1="30" y1="30" x2="40" y2="40" />
                  <line x1="170" y1="170" x2="160" y2="160" />
                  <line x1="170" y1="30" x2="160" y2="40" />
                  <line x1="30" y1="170" x2="40" y2="160" />
                </g>
                <circle cx="100" cy="100" r="4" fill={t.dialStroke} />
              </svg>
            </div>

            {/* Stats Block */}
            <div
              ref={statsRef}
              className="relative flex flex-col gap-4 pt-6 mt-8 border-t border-white/15"
            >
              {stats.map((stat, idx) => (
                <div key={idx} className="flex justify-between items-baseline gap-2">
                  <span className="text-xs sm:text-sm" style={{ color: t.sage }}>
                    {stat.label}
                  </span>
                  <a
                    href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`}
                    className="text-base sm:text-lg font-semibold tracking-wide"
                    style={{ color: t.accentBright }}
                  >
                    {stat.isStatic
                      ? String(stat.target)
                      : `${stat.prefix || ''}${counts[idx].toLocaleString()}${stat.suffix || ''}`}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* ---------- MIDDLE: TICKET STUB PERFORATION ---------- */}
          <div
            className="relative hidden md:block vault-perf-v"
            style={{
              backgroundColor: t.vaultDeep,
              '--perf-cutout': t.cream,
            } as React.CSSProperties}
            aria-hidden="true"
          >
            {/* Top and Bottom Notches */}
            <div
              className="absolute left-1/2 -top-[17px] -translate-x-1/2 w-[34px] h-[34px] rounded-full"
              style={{ backgroundColor: t.cream }}
            />
            <div
              className="absolute left-1/2 -bottom-[17px] -translate-x-1/2 w-[34px] h-[34px] rounded-full"
              style={{ backgroundColor: t.cream }}
            />
          </div>

          {/* Mobile Horizontal Perforation Strip */}
          <div
            className="relative md:hidden h-[22px] vault-perf-h"
            style={{
              backgroundColor: t.vaultDeep,
              '--perf-cutout': t.cream,
            } as React.CSSProperties}
            aria-hidden="true"
          >
            <div
              className="absolute -left-[17px] top-1/2 -translate-y-1/2 w-[34px] h-[34px] rounded-full"
              style={{ backgroundColor: t.cream }}
            />
            <div
              className="absolute -right-[17px] top-1/2 -translate-y-1/2 w-[34px] h-[34px] rounded-full"
              style={{ backgroundColor: t.cream }}
            />
          </div>

          {/* ---------- RIGHT: FORM PANEL ---------- */}
          <div
            className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center"
            style={{ backgroundColor: t.cream, color: t.ink }}
          >
            {!submitted ? (
              <div>
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <span
                      className="text-xs uppercase tracking-widest font-semibold mb-1 block"
                      style={{ color: t.inkSoft }}
                    >
                      {formEyebrow}
                    </span>
                    <h3 className="font-semibold text-2xl sm:text-3xl mb-2 text-inherit">
                      {formTitle}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: t.inkSoft }}>
                    {formSubtitle}
                  </p>
                </div>

                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5 max-w-lg">
                  {/* Row 1: Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col">
                      <label
                        htmlFor={`name-${uniqueId}`}
                        className="text-xs uppercase tracking-wider font-semibold mb-1"
                        style={{ color: t.inkSoft }}
                      >
                        Full Name<span style={{ color: t.accent }}>*</span>
                      </label>
                      <input
                        type="text"
                        id={`name-${uniqueId}`}
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                          if (errors.name) setErrors((prev) => ({ ...prev, name: false }));
                        }}
                        placeholder="e.g. Ramesh Kumar"
                        className="w-full bg-transparent border-b-2 py-1.5 px-0.5 text-base outline-none transition-colors"
                        style={{
                          borderColor: errors.name ? '#C1443B' : t.creamLine,
                          color: t.ink,
                        }}
                        onFocus={(e) => {
                          if (!errors.name) e.currentTarget.style.borderColor = t.accent;
                        }}
                        onBlur={(e) => {
                          if (!errors.name) e.currentTarget.style.borderColor = t.creamLine;
                        }}
                      />
                      {errors.name && (
                        <p className="text-xs mt-1 text-red-600">
                          Enter your full name.
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col">
                      <label
                        htmlFor={`email-${uniqueId}`}
                        className="text-xs uppercase tracking-wider font-semibold mb-1"
                        style={{ color: t.inkSoft }}
                      >
                        Email<span style={{ color: t.accent }}>*</span>
                      </label>
                      <input
                        type="email"
                        id={`email-${uniqueId}`}
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (errors.email) setErrors((prev) => ({ ...prev, email: false }));
                        }}
                        placeholder="you@email.com"
                        className="w-full bg-transparent border-b-2 py-1.5 px-0.5 text-base outline-none transition-colors"
                        style={{
                          borderColor: errors.email ? '#C1443B' : t.creamLine,
                          color: t.ink,
                        }}
                        onFocus={(e) => {
                          if (!errors.email) e.currentTarget.style.borderColor = t.accent;
                        }}
                        onBlur={(e) => {
                          if (!errors.email) e.currentTarget.style.borderColor = t.creamLine;
                        }}
                      />
                      {errors.email && (
                        <p className="text-xs mt-1 text-red-600">
                          Enter a valid email.
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Radio Group: Reason / Service */}
                  <div className="flex flex-col">
                    <label
                      className="text-xs uppercase tracking-wider font-semibold mb-2"
                      style={{ color: t.inkSoft }}
                    >
                      {reasonLabel}
                      <span style={{ color: t.accent }}>*</span>
                    </label>
                    <div className="flex flex-wrap gap-2 pt-0.5">
                      {reasonOptions.map((opt) => {
                        const isChecked = reason === opt.value;
                        return (
                          <label
                            key={opt.value}
                            onClick={() => {
                              setReason(opt.value);
                              if (errors.reason) setErrors((prev) => ({ ...prev, reason: false }));
                            }}
                            className="cursor-pointer text-xs sm:text-sm font-medium px-3.5 py-1.5 rounded-full border transition-all select-none"
                            style={{
                              borderColor: errors.reason
                                ? '#C1443B'
                                : isChecked
                                ? t.accent
                                : t.creamLine,
                              color: isChecked ? t.ink : t.inkSoft,
                              backgroundColor: isChecked ? t.radioBg : 'transparent',
                              boxShadow: isChecked ? `0 0 0 1px ${t.accent}` : 'none',
                            }}
                          >
                            <input
                              type="radio"
                              name={`reason-${uniqueId}`}
                              value={opt.value}
                              checked={isChecked}
                              onChange={() => setReason(opt.value)}
                              className="hidden"
                            />
                            {opt.label}
                          </label>
                        );
                      })}
                    </div>
                    {errors.reason && (
                      <p className="text-xs mt-1 text-red-600">Choose one option.</p>
                    )}
                  </div>

                  {/* Row 2: Value & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col">
                      <label
                        htmlFor={`val-${uniqueId}`}
                        className="text-xs uppercase tracking-wider font-semibold mb-1"
                        style={{ color: t.inkSoft }}
                      >
                        {valueLabel}{' '}
                        <span className="normal-case italic font-normal text-[0.7rem] opacity-75">
                          (optional)
                        </span>
                      </label>
                      <input
                        type="text"
                        id={`val-${uniqueId}`}
                        value={val}
                        onChange={(e) => setVal(e.target.value)}
                        placeholder={valuePlaceholder}
                        className="w-full bg-transparent border-b-2 py-1.5 px-0.5 text-base outline-none transition-colors"
                        style={{
                          borderColor: t.creamLine,
                          color: t.ink,
                        }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = t.accent)}
                        onBlur={(e) => (e.currentTarget.style.borderColor = t.creamLine)}
                      />
                    </div>

                    <div className="flex flex-col">
                      <label
                        htmlFor={`phone-${uniqueId}`}
                        className="text-xs uppercase tracking-wider font-semibold mb-1"
                        style={{ color: t.inkSoft }}
                      >
                        {phoneLabel}{' '}
                        <span className="normal-case italic font-normal text-[0.7rem] opacity-75">
                          (optional)
                        </span>
                      </label>
                      <input
                        type="tel"
                        id={`phone-${uniqueId}`}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder={phonePlaceholder}
                        className="w-full bg-transparent border-b-2 py-1.5 px-0.5 text-base outline-none transition-colors"
                        style={{
                          borderColor: t.creamLine,
                          color: t.ink,
                        }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = t.accent)}
                        onBlur={(e) => (e.currentTarget.style.borderColor = t.creamLine)}
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="flex flex-col">
                    <label
                      htmlFor={`msg-${uniqueId}`}
                      className="text-xs uppercase tracking-wider font-semibold mb-1"
                      style={{ color: t.inkSoft }}
                    >
                      Details & Requirements<span style={{ color: t.accent }}>*</span>
                    </label>
                    <textarea
                      id={`msg-${uniqueId}`}
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                        if (errors.message) setErrors((prev) => ({ ...prev, message: false }));
                      }}
                      placeholder={messagePlaceholder}
                      rows={3}
                      className="w-full bg-transparent border-b-2 py-1.5 px-0.5 text-base outline-none transition-colors resize-y min-h-[70px]"
                      style={{
                        borderColor: errors.message ? '#C1443B' : t.creamLine,
                        color: t.ink,
                      }}
                      onFocus={(e) => {
                        if (!errors.message) e.currentTarget.style.borderColor = t.accent;
                      }}
                      onBlur={(e) => {
                        if (!errors.message) e.currentTarget.style.borderColor = t.creamLine;
                      }}
                    />
                    {errors.message && (
                      <p className="text-xs mt-1 text-red-600">
                        Add a few details so we can assist you properly.
                      </p>
                    )}
                  </div>

                  {/* Submit Row */}
                  <div className="flex flex-wrap items-center gap-4 mt-2">
                    <button
                      type="submit"
                      className="relative text-xs sm:text-sm tracking-wider uppercase font-semibold py-3 px-7 rounded cursor-pointer overflow-hidden transition-all hover:shadow-xl active:translate-y-0.5 group"
                      style={{
                        background: t.buttonBg,
                        color: '#FFFFFF',
                      }}
                    >
                      <span className="relative z-10">{submitButtonText}</span>
                      {/* Shimmer sweep effect */}
                      <span
                        className="absolute inset-0 -translate-x-[120%] group-hover:translate-x-[120%] transition-transform duration-700 pointer-events-none"
                        style={{
                          background: `linear-gradient(100deg, transparent 30%, ${t.accentBright}55 50%, transparent 70%)`,
                        }}
                      />
                    </button>

                    <p className="text-xs leading-tight max-w-[220px]" style={{ color: t.inkSoft }}>
                      By submitting, you agree to our{' '}
                      <a href="/privacy-policy" className="underline hover:opacity-80 font-medium" style={{ color: t.accent }}>
                        privacy notice
                      </a>
                      .
                    </p>
                  </div>
                </form>
              </div>
            ) : (
              /* ---------- SUCCESS: WAX SEAL STAMP ---------- */
              <div className="flex flex-col items-start gap-4 max-w-lg py-4">
                <div
                  className="w-[74px] h-[74px] rounded-full flex items-center justify-center shadow-xl"
                  style={{
                    background: t.sealBg,
                    animation: 'vault-stamp 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
                  }}
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 24 24" fill="none" className="w-9 h-9">
                    <path
                      d="M5 12.5l4.5 4.5L19 7"
                      stroke="#FFFFFF"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <h3 className="font-semibold text-2xl sm:text-3xl mb-1 text-inherit">
                  Transmission Confirmed
                </h3>
                <p className="text-sm mb-4" style={{ color: t.inkSoft }}>
                  Your encrypted request has reached our Tirunelveli desk.
                </p>

                <div
                  className="text-xs sm:text-sm font-semibold px-3.5 py-2 rounded border border-dashed"
                  style={{
                    borderColor: t.accent,
                    color: t.accent,
                    background: `${t.accent}10`,
                  }}
                >
                  Reference: #{refCode}
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="text-xs uppercase tracking-wider font-semibold py-2 px-4 rounded border transition-colors mt-2"
                  style={{
                    borderColor: t.inkSoft,
                    color: t.ink,
                  }}
                >
                  Submit Another Inquiry
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
