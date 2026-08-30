export interface PageTheme {
  id: string;
  // Header styles (Dynamic Hero-matched colors & gradients)
  headerBg: string;
  headerBgScrolled: string;
  headerBackground: string; // Exact CSS background gradient matching Hero
  headerText: string;
  headerHover: string;
  headerSubmenuBg: string;
  headerButtonBg: string;
  headerButtonText: string;
  logoBadgeBg: string;
  logoBadgeText: string;

  // Footer styles
  footerBg: string;
  footerBackground?: string;
  footerText: string;
  footerHeadingText: string;
  footerAccentText: string;
  footerHoverText: string;
  footerBorder: string;
  footerSocialBg: string;
  footerSocialIcon: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// DEFAULT / FALLBACK
// ─────────────────────────────────────────────────────────────────────────────
export const DEFAULT_THEME: PageTheme = {
  id: 'default',
  headerBg: 'border-b border-blue-900/30',
  headerBgScrolled: 'shadow-2xl border-b border-blue-900/50',
  headerBackground: 'linear-gradient(135deg, #0F172A 0%, #1E3A8A 100%)',
  headerText: 'text-white',
  headerHover: 'hover:text-teal-400',
  headerSubmenuBg: 'bg-[#0F172A] border border-blue-900/50 shadow-2xl',
  headerButtonBg: 'bg-gradient-to-r from-teal-500 to-cyan-500 hover:shadow-teal-500/40',
  headerButtonText: 'text-white',
  logoBadgeBg: 'bg-teal-500',
  logoBadgeText: 'text-white',

  footerBg: 'bg-[#0F172A]',
  footerBackground: 'linear-gradient(135deg, #0A1122 0%, #0F172A 50%, #1E3A8A 100%)',
  footerText: 'text-slate-300',
  footerHeadingText: 'text-white',
  footerAccentText: 'text-teal-400',
  footerHoverText: 'hover:text-teal-300',
  footerBorder: 'border-blue-900/40',
  footerSocialBg: 'bg-blue-950/60 border border-blue-800/40 hover:bg-teal-500',
  footerSocialIcon: 'text-white',
};

export const PAGE_THEMES: Record<string, PageTheme> = {

  // ──────────────────────────────────────────────────────────────────────────
  // HOME (/) · Deep Navy to Sapphire Blue
  // ──────────────────────────────────────────────────────────────────────────
  '/': {
    id: 'home',
    headerBg: 'border-b border-blue-900/30',
    headerBgScrolled: 'shadow-2xl border-b border-blue-900/50',
    headerBackground: 'linear-gradient(135deg, #0F172A 0%, #1E3A8A 100%)',
    headerText: 'text-white',
    headerHover: 'hover:text-teal-400',
    headerSubmenuBg: 'bg-[#0F172A] border border-blue-900/50 shadow-2xl',
    headerButtonBg: 'bg-gradient-to-r from-teal-500 to-cyan-500 hover:shadow-teal-500/40',
    headerButtonText: 'text-white',
    logoBadgeBg: 'bg-teal-500',
    logoBadgeText: 'text-white',

    footerBg: 'bg-[#0F172A]',
    footerBackground: 'linear-gradient(135deg, #0A1122 0%, #0F172A 50%, #1E3A8A 100%)',
    footerText: 'text-slate-300',
    footerHeadingText: 'text-white',
    footerAccentText: 'text-teal-400',
    footerHoverText: 'hover:text-teal-300',
    footerBorder: 'border-blue-900/40',
    footerSocialBg: 'bg-blue-950/60 border border-blue-800/40 hover:bg-teal-500',
    footerSocialIcon: 'text-white',
  },

  // ──────────────────────────────────────────────────────────────────────────
  // ABOUT US (/about) · Royal Purple & Violet Amethyst
  // ──────────────────────────────────────────────────────────────────────────
  '/about': {
    id: 'about',
    headerBg: 'border-b border-purple-800/50',
    headerBgScrolled: 'shadow-2xl border-b border-purple-700/60',
    headerBackground: 'linear-gradient(135deg, #2e1065 0%, #581c87 50%, #7e22ce 100%)',
    headerText: 'text-white',
    headerHover: 'hover:text-purple-200',
    headerSubmenuBg: 'bg-purple-950 border border-purple-800/60 shadow-2xl',
    headerButtonBg: 'bg-gradient-to-r from-purple-500 to-fuchsia-500 hover:shadow-purple-500/40',
    headerButtonText: 'text-white',
    logoBadgeBg: 'bg-purple-600',
    logoBadgeText: 'text-white',

    footerBg: 'bg-[#2e1065]',
    footerBackground: 'linear-gradient(135deg, #1e0938 0%, #2e1065 50%, #3b0764 100%)',
    footerText: 'text-purple-100/90',
    footerHeadingText: 'text-white',
    footerAccentText: 'text-purple-400',
    footerHoverText: 'hover:text-purple-300',
    footerBorder: 'border-purple-900/50',
    footerSocialBg: 'bg-purple-950/80 border border-purple-800/50 hover:bg-purple-600',
    footerSocialIcon: 'text-white',
  },

  // ──────────────────────────────────────────────────────────────────────────
  // CONTACT (/contact) · Golden Sunset Amber & Warm Gold
  // ──────────────────────────────────────────────────────────────────────────
  '/contact': {
    id: 'contact',
    headerBg: 'border-b border-amber-800/50',
    headerBgScrolled: 'shadow-2xl border-b border-amber-700/60',
    headerBackground: 'linear-gradient(135deg, #451a03 0%, #92400e 50%, #b45309 100%)',
    headerText: 'text-white',
    headerHover: 'hover:text-amber-200',
    headerSubmenuBg: 'bg-amber-950 border border-amber-800/60 shadow-2xl',
    headerButtonBg: 'bg-gradient-to-r from-amber-500 to-yellow-500 hover:shadow-amber-500/40',
    headerButtonText: 'text-white',
    logoBadgeBg: 'bg-amber-500',
    logoBadgeText: 'text-white',

    footerBg: 'bg-[#451a03]',
    footerBackground: 'linear-gradient(135deg, #270f03 0%, #451a03 50%, #78350f 100%)',
    footerText: 'text-amber-100/90',
    footerHeadingText: 'text-white',
    footerAccentText: 'text-amber-400',
    footerHoverText: 'hover:text-amber-300',
    footerBorder: 'border-amber-900/50',
    footerSocialBg: 'bg-amber-950/80 border border-amber-800/50 hover:bg-amber-500',
    footerSocialIcon: 'text-white',
  },

  // ──────────────────────────────────────────────────────────────────────────
  // EMI CALCULATOR (/emi-calculator) · Electric Cyan & Sky Turquoise
  // ──────────────────────────────────────────────────────────────────────────
  '/emi-calculator': {
    id: 'emi-calculator',
    headerBg: 'border-b border-cyan-800/40',
    headerBgScrolled: 'shadow-2xl border-b border-cyan-700/60',
    headerBackground: 'linear-gradient(135deg, #083344 0%, #0e7490 50%, #0284c7 100%)',
    headerText: 'text-white',
    headerHover: 'hover:text-cyan-200',
    headerSubmenuBg: 'bg-cyan-950 border border-cyan-800/60 shadow-2xl',
    headerButtonBg: 'bg-gradient-to-r from-cyan-400 to-sky-500 hover:shadow-cyan-500/40',
    headerButtonText: 'text-white',
    logoBadgeBg: 'bg-cyan-500',
    logoBadgeText: 'text-white',

    footerBg: 'bg-[#083344]',
    footerBackground: 'linear-gradient(135deg, #041f2a 0%, #083344 50%, #0c4a6e 100%)',
    footerText: 'text-cyan-100/90',
    footerHeadingText: 'text-white',
    footerAccentText: 'text-cyan-400',
    footerHoverText: 'hover:text-cyan-300',
    footerBorder: 'border-cyan-900/40',
    footerSocialBg: 'bg-cyan-950/80 border border-cyan-800/40 hover:bg-cyan-500',
    footerSocialIcon: 'text-white',
  },

  // ──────────────────────────────────────────────────────────────────────────
  // BUY VEHICLES (/vehicles) · Luxury Ruby & Rose Automotive Red
  // ──────────────────────────────────────────────────────────────────────────
  '/vehicles': {
    id: 'vehicles',
    headerBg: 'border-b border-rose-800/50',
    headerBgScrolled: 'shadow-2xl border-b border-rose-700/60',
    headerBackground: 'linear-gradient(135deg, #4c0519 0%, #881337 50%, #be123c 100%)',
    headerText: 'text-white',
    headerHover: 'hover:text-rose-200',
    headerSubmenuBg: 'bg-rose-950 border border-rose-800/60 shadow-2xl',
    headerButtonBg: 'bg-gradient-to-r from-rose-500 to-red-500 hover:shadow-rose-500/40',
    headerButtonText: 'text-white',
    logoBadgeBg: 'bg-rose-500',
    logoBadgeText: 'text-white',

    footerBg: 'bg-[#4c0519]',
    footerBackground: 'linear-gradient(135deg, #2e020d 0%, #4c0519 50%, #700a2b 100%)',
    footerText: 'text-rose-100/90',
    footerHeadingText: 'text-white',
    footerAccentText: 'text-rose-400',
    footerHoverText: 'hover:text-rose-300',
    footerBorder: 'border-rose-900/50',
    footerSocialBg: 'bg-rose-950/80 border border-rose-800/50 hover:bg-rose-500',
    footerSocialIcon: 'text-white',
  },

  // ──────────────────────────────────────────────────────────────────────────
  // SELL VEHICLE (/sell-vehicle & /car-resale) · Mint Emerald & Gold Valuation
  // ──────────────────────────────────────────────────────────────────────────
  '/sell-vehicle': {
    id: 'sell-vehicle',
    headerBg: 'border-b border-emerald-800/50',
    headerBgScrolled: 'shadow-2xl border-b border-emerald-700/60',
    headerBackground: 'linear-gradient(135deg, #064e3b 0%, #047857 50%, #0d9488 100%)',
    headerText: 'text-white',
    headerHover: 'hover:text-emerald-200',
    headerSubmenuBg: 'bg-emerald-950 border border-emerald-800/60 shadow-2xl',
    headerButtonBg: 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:shadow-emerald-500/40',
    headerButtonText: 'text-white',
    logoBadgeBg: 'bg-emerald-500',
    logoBadgeText: 'text-white',

    footerBg: 'bg-[#022c22]',
    footerBackground: 'linear-gradient(135deg, #022c22 0%, #064e3b 50%, #047857 100%)',
    footerText: 'text-emerald-100/90',
    footerHeadingText: 'text-white',
    footerAccentText: 'text-emerald-400',
    footerHoverText: 'hover:text-emerald-300',
    footerBorder: 'border-emerald-900/50',
    footerSocialBg: 'bg-emerald-950/80 border border-emerald-800/50 hover:bg-emerald-500',
    footerSocialIcon: 'text-white',
  },

  '/car-resale': {
    id: 'car-resale',
    headerBg: 'border-b border-emerald-800/50',
    headerBgScrolled: 'shadow-2xl border-b border-emerald-700/60',
    headerBackground: 'linear-gradient(135deg, #064e3b 0%, #047857 50%, #0d9488 100%)',
    headerText: 'text-white',
    headerHover: 'hover:text-emerald-200',
    headerSubmenuBg: 'bg-emerald-950 border border-emerald-800/60 shadow-2xl',
    headerButtonBg: 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:shadow-emerald-500/40',
    headerButtonText: 'text-white',
    logoBadgeBg: 'bg-emerald-500',
    logoBadgeText: 'text-white',

    footerBg: 'bg-[#022c22]',
    footerBackground: 'linear-gradient(135deg, #022c22 0%, #064e3b 50%, #047857 100%)',
    footerText: 'text-emerald-100/90',
    footerHeadingText: 'text-white',
    footerAccentText: 'text-emerald-400',
    footerHoverText: 'hover:text-emerald-300',
    footerBorder: 'border-emerald-900/50',
    footerSocialBg: 'bg-emerald-950/80 border border-emerald-800/50 hover:bg-emerald-500',
    footerSocialIcon: 'text-white',
  },

  // ──────────────────────────────────────────────────────────────────────────
  // BIKE LOAN (/bike-loan) · Radiant Orange & Fire Red
  // ──────────────────────────────────────────────────────────────────────────
  '/bike-loan': {
    id: 'bike-loan',
    headerBg: 'border-b border-orange-800/50',
    headerBgScrolled: 'shadow-2xl border-b border-orange-700/60',
    headerBackground: 'linear-gradient(135deg, #7c2d12 0%, #c2410c 50%, #991b1b 100%)',
    headerText: 'text-white',
    headerHover: 'hover:text-orange-200',
    headerSubmenuBg: 'bg-orange-950 border border-orange-800/60 shadow-2xl',
    headerButtonBg: 'bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 hover:shadow-orange-500/50',
    headerButtonText: 'text-white',
    logoBadgeBg: 'bg-orange-500',
    logoBadgeText: 'text-white',

    footerBg: 'bg-[#431407]',
    footerBackground: 'linear-gradient(135deg, #431407 0%, #7c2d12 50%, #991b1b 100%)',
    footerText: 'text-orange-100/90',
    footerHeadingText: 'text-white',
    footerAccentText: 'text-orange-400',
    footerHoverText: 'hover:text-orange-300',
    footerBorder: 'border-orange-900/50',
    footerSocialBg: 'bg-orange-900/80 border border-orange-700/50 hover:bg-orange-500',
    footerSocialIcon: 'text-white',
  },

  // ──────────────────────────────────────────────────────────────────────────
  // CAR LOAN (/car-loan) · Electric Blue & Cyan
  // ──────────────────────────────────────────────────────────────────────────
  '/car-loan': {
    id: 'car-loan',
    headerBg: 'border-b border-cyan-800/40',
    headerBgScrolled: 'shadow-2xl border-b border-cyan-700/60',
    headerBackground: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 50%, #0284c7 100%)',
    headerText: 'text-white',
    headerHover: 'hover:text-cyan-300',
    headerSubmenuBg: 'bg-blue-950 border border-cyan-800/60 shadow-2xl',
    headerButtonBg: 'bg-gradient-to-r from-cyan-400 to-blue-600 hover:shadow-cyan-500/50',
    headerButtonText: 'text-white',
    logoBadgeBg: 'bg-cyan-500',
    logoBadgeText: 'text-white',

    footerBg: 'bg-[#172554]',
    footerBackground: 'linear-gradient(135deg, #172554 0%, #1e3a8a 50%, #1e40af 100%)',
    footerText: 'text-blue-100/90',
    footerHeadingText: 'text-white',
    footerAccentText: 'text-cyan-400',
    footerHoverText: 'hover:text-cyan-300',
    footerBorder: 'border-blue-800/50',
    footerSocialBg: 'bg-blue-900/60 border border-blue-700/50 hover:bg-cyan-500',
    footerSocialIcon: 'text-white',
  },

  // ──────────────────────────────────────────────────────────────────────────
  // BUSINESS LOAN (/business-loan) · Executive Emerald & Teal Green
  // ──────────────────────────────────────────────────────────────────────────
  '/business-loan': {
    id: 'business-loan',
    headerBg: 'border-b border-emerald-800/50',
    headerBgScrolled: 'shadow-2xl border-b border-emerald-700/60',
    headerBackground: 'linear-gradient(135deg, #064e3b 0%, #047857 50%, #0f766e 100%)',
    headerText: 'text-white',
    headerHover: 'hover:text-emerald-300',
    headerSubmenuBg: 'bg-emerald-950 border border-emerald-800/60 shadow-2xl',
    headerButtonBg: 'bg-gradient-to-r from-emerald-400 to-teal-500 hover:shadow-emerald-500/50',
    headerButtonText: 'text-white',
    logoBadgeBg: 'bg-emerald-500',
    logoBadgeText: 'text-white',

    footerBg: 'bg-[#022c22]',
    footerBackground: 'linear-gradient(135deg, #022c22 0%, #064e3b 50%, #047857 100%)',
    footerText: 'text-emerald-100/90',
    footerHeadingText: 'text-white',
    footerAccentText: 'text-emerald-400',
    footerHoverText: 'hover:text-emerald-300',
    footerBorder: 'border-emerald-900/50',
    footerSocialBg: 'bg-emerald-950/80 border border-emerald-700/50 hover:bg-emerald-500',
    footerSocialIcon: 'text-white',
  },

  // ──────────────────────────────────────────────────────────────────────────
  // TWO WHEELER INSURANCE (/two-wheeler-insurance) · Mint & Forest Green
  // ──────────────────────────────────────────────────────────────────────────
  '/two-wheeler-insurance': {
    id: 'two-wheeler-insurance',
    headerBg: 'border-b border-emerald-800/50',
    headerBgScrolled: 'shadow-2xl border-b border-emerald-700/60',
    headerBackground: 'linear-gradient(135deg, #064e3b 0%, #059669 50%, #10b981 100%)',
    headerText: 'text-white',
    headerHover: 'hover:text-emerald-200',
    headerSubmenuBg: 'bg-zinc-950 border border-emerald-800/60 shadow-2xl',
    headerButtonBg: 'bg-gradient-to-r from-emerald-400 via-teal-400 to-green-500 hover:shadow-emerald-500/50',
    headerButtonText: 'text-white',
    logoBadgeBg: 'bg-emerald-500',
    logoBadgeText: 'text-white',

    footerBg: 'bg-[#022c22]',
    footerBackground: 'linear-gradient(135deg, #022c22 0%, #064e3b 50%, #065f46 100%)',
    footerText: 'text-emerald-100/90',
    footerHeadingText: 'text-white',
    footerAccentText: 'text-emerald-400',
    footerHoverText: 'hover:text-emerald-300',
    footerBorder: 'border-emerald-950/60',
    footerSocialBg: 'bg-zinc-900 border border-emerald-800/50 hover:bg-emerald-500',
    footerSocialIcon: 'text-white',
  },

  // ──────────────────────────────────────────────────────────────────────────
  // PERSONAL LOAN (/personal-loan) · Electric Indigo & Purple
  // ──────────────────────────────────────────────────────────────────────────
  '/personal-loan': {
    id: 'personal-loan',
    headerBg: 'border-b border-indigo-800/50',
    headerBgScrolled: 'shadow-2xl border-b border-indigo-700/60',
    headerBackground: 'linear-gradient(135deg, #312e81 0%, #4338ca 50%, #6366f1 100%)',
    headerText: 'text-white',
    headerHover: 'hover:text-indigo-200',
    headerSubmenuBg: 'bg-slate-950 border border-indigo-800/60 shadow-2xl',
    headerButtonBg: 'bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 hover:shadow-indigo-500/50',
    headerButtonText: 'text-white',
    logoBadgeBg: 'bg-indigo-500',
    logoBadgeText: 'text-white',

    footerBg: 'bg-[#1e1b4b]',
    footerBackground: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #3730a3 100%)',
    footerText: 'text-indigo-100/90',
    footerHeadingText: 'text-white',
    footerAccentText: 'text-indigo-400',
    footerHoverText: 'hover:text-indigo-300',
    footerBorder: 'border-indigo-900/50',
    footerSocialBg: 'bg-indigo-950/80 border border-indigo-700/50 hover:bg-indigo-500',
    footerSocialIcon: 'text-white',
  },

  // ──────────────────────────────────────────────────────────────────────────
  // HOME LOAN (/home-loan) · Deep Teal & Cyan Ocean
  // ──────────────────────────────────────────────────────────────────────────
  '/home-loan': {
    id: 'home-loan',
    headerBg: 'border-b border-teal-800/40',
    headerBgScrolled: 'shadow-2xl border-b border-teal-700/60',
    headerBackground: 'linear-gradient(135deg, #0f172a 0%, #134e4a 50%, #0e7490 100%)',
    headerText: 'text-white',
    headerHover: 'hover:text-teal-300',
    headerSubmenuBg: 'bg-slate-950 border border-teal-800/60 shadow-2xl',
    headerButtonBg: 'bg-gradient-to-r from-teal-400 to-cyan-500 hover:shadow-teal-500/50',
    headerButtonText: 'text-white',
    logoBadgeBg: 'bg-teal-500',
    logoBadgeText: 'text-white',

    footerBg: 'bg-[#0f172a]',
    footerBackground: 'linear-gradient(135deg, #0f172a 0%, #042f2e 50%, #115e59 100%)',
    footerText: 'text-teal-100/90',
    footerHeadingText: 'text-white',
    footerAccentText: 'text-teal-400',
    footerHoverText: 'hover:text-teal-300',
    footerBorder: 'border-teal-900/40',
    footerSocialBg: 'bg-slate-900 border border-teal-800/40 hover:bg-teal-500',
    footerSocialIcon: 'text-white',
  },

  // ──────────────────────────────────────────────────────────────────────────
  // BLOG (/blog) · Royal Knowledge Blue
  // ──────────────────────────────────────────────────────────────────────────
  '/blog': {
    id: 'blog',
    headerBg: 'border-b border-blue-800/40',
    headerBgScrolled: 'shadow-2xl border-b border-blue-700/60',
    headerBackground: 'linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 50%, #0369a1 100%)',
    headerText: 'text-white',
    headerHover: 'hover:text-cyan-300',
    headerSubmenuBg: 'bg-blue-950 border border-blue-800/60 shadow-2xl',
    headerButtonBg: 'bg-gradient-to-r from-blue-400 to-cyan-500 hover:shadow-blue-500/50',
    headerButtonText: 'text-white',
    logoBadgeBg: 'bg-blue-500',
    logoBadgeText: 'text-white',

    footerBg: 'bg-[#172554]',
    footerBackground: 'linear-gradient(135deg, #172554 0%, #1e3a8a 50%, #1e40af 100%)',
    footerText: 'text-blue-100/90',
    footerHeadingText: 'text-white',
    footerAccentText: 'text-blue-400',
    footerHoverText: 'hover:text-cyan-300',
    footerBorder: 'border-blue-800/40',
    footerSocialBg: 'bg-blue-900/60 border border-blue-700/40 hover:bg-blue-500',
    footerSocialIcon: 'text-white',
  },

  // ──────────────────────────────────────────────────────────────────────────
  // LOANS (/loans) · Financial Services Navy & Teal
  // ──────────────────────────────────────────────────────────────────────────
  '/loans': {
    id: 'loans',
    headerBg: 'border-b border-teal-900/40',
    headerBgScrolled: 'shadow-2xl border-b border-teal-800/60',
    headerBackground: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #0f766e 100%)',
    headerText: 'text-white',
    headerHover: 'hover:text-teal-300',
    headerSubmenuBg: 'bg-slate-950 border border-teal-900/50 shadow-2xl',
    headerButtonBg: 'bg-gradient-to-r from-teal-500 to-cyan-500 hover:shadow-teal-500/40',
    headerButtonText: 'text-white',
    logoBadgeBg: 'bg-teal-500',
    logoBadgeText: 'text-white',

    footerBg: 'bg-[#0f172a]',
    footerBackground: 'linear-gradient(135deg, #0f172a 0%, #172554 50%, #042f2e 100%)',
    footerText: 'text-slate-300',
    footerHeadingText: 'text-white',
    footerAccentText: 'text-teal-400',
    footerHoverText: 'hover:text-teal-300',
    footerBorder: 'border-teal-900/40',
    footerSocialBg: 'bg-slate-900 border border-teal-900/40 hover:bg-teal-500',
    footerSocialIcon: 'text-white',
  },
};

/**
 * Returns the page-specific visual theme based on the active pathname.
 * Every page has its own theme derived from its Hero section primary color.
 * Falls back to DEFAULT_THEME only for pages without a hero (e.g. 404).
 */
export function getPageTheme(pathname: string): PageTheme {
  if (!pathname || pathname === '') {
    return PAGE_THEMES['/'] || DEFAULT_THEME;
  }

  const cleanPath = pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;

  // Exact match first
  if (PAGE_THEMES[cleanPath]) {
    return PAGE_THEMES[cleanPath];
  }
  if (PAGE_THEMES[pathname]) {
    return PAGE_THEMES[pathname];
  }

  // Dynamic prefix checks — most specific first
  if (cleanPath.startsWith('/blog')) {
    return PAGE_THEMES['/blog'];
  }
  if (cleanPath.startsWith('/car-resale')) {
    return PAGE_THEMES['/car-resale'];
  }
  if (cleanPath.startsWith('/sell-vehicle')) {
    return PAGE_THEMES['/sell-vehicle'];
  }
  if (cleanPath.startsWith('/vehicles')) {
    return PAGE_THEMES['/vehicles'];
  }
  if (cleanPath.startsWith('/about')) {
    return PAGE_THEMES['/about'];
  }
  if (cleanPath.startsWith('/contact')) {
    return PAGE_THEMES['/contact'];
  }
  if (cleanPath.startsWith('/bike-loan')) {
    return PAGE_THEMES['/bike-loan'];
  }
  if (cleanPath.startsWith('/car-loan')) {
    return PAGE_THEMES['/car-loan'];
  }
  if (cleanPath.startsWith('/business-loan')) {
    return PAGE_THEMES['/business-loan'];
  }
  if (cleanPath.startsWith('/personal-loan')) {
    return PAGE_THEMES['/personal-loan'];
  }
  if (cleanPath.startsWith('/home-loan')) {
    return PAGE_THEMES['/home-loan'];
  }
  if (cleanPath.startsWith('/two-wheeler-insurance')) {
    return PAGE_THEMES['/two-wheeler-insurance'];
  }
  if (cleanPath.startsWith('/emi-calculator')) {
    return PAGE_THEMES['/emi-calculator'];
  }
  if (cleanPath.startsWith('/loans')) {
    return PAGE_THEMES['/loans'];
  }
  if (cleanPath.startsWith('/terms-conditions') || cleanPath.startsWith('/privacy-policy') || cleanPath.startsWith('/disclaimer')) {
    return PAGE_THEMES['/'];
  }

  return PAGE_THEMES['/'] || DEFAULT_THEME;
}
