'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Home, Car, Bike, User, Briefcase, Shield } from 'lucide-react';
import { ROUTES } from '@/lib/constants';
import { getPageTheme } from '@/lib/themeSystem';

export default function Header() {
  const pathname = usePathname();
  const theme = getPageTheme(pathname);

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Ensure hydration matches by setting isMounted on client
    setIsMounted(true);
  }, []);

  useEffect(() => {
    // Only run scroll listener after client mount to prevent hydration mismatch
    if (!isMounted) return;

    let debounceTimer: NodeJS.Timeout;

    const handleScroll = () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        setIsScrolled(window.scrollY > 50);
      }, 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(debounceTimer);
    };
  }, [isMounted]);

  const menuItems = useMemo(() => [
    { label: 'Home', href: ROUTES.HOME },
    {
      label: 'Loans',
      href: ROUTES.LOANS,
      submenu: [
        { label: 'Home Loan', href: ROUTES.HOME_LOAN, icon: Home },
        { label: 'Car Loan', href: ROUTES.CAR_LOAN, icon: Car },
        { label: 'Bike Loan', href: ROUTES.BIKE_LOAN, icon: Bike },
        { label: 'Personal Loan', href: ROUTES.PERSONAL_LOAN, icon: User },
        { label: 'Business Loan', href: ROUTES.BUSINESS_LOAN, icon: Briefcase },
        { label: 'Two Wheeler Insurance', href: ROUTES.TWO_WHEELER_INSURANCE, icon: Shield },
      ],
    },
    { label: 'Buy Vehicles', href: ROUTES.VEHICLES },
    { label: 'Sell Vehicle', href: ROUTES.CAR_RESALE },
    { label: 'EMI Calculator', href: ROUTES.EMI_CALCULATOR },
    { label: 'About Us', href: ROUTES.ABOUT },
    { label: 'Contact', href: ROUTES.CONTACT },
  ], []);

  return (
    <header
      style={{ background: theme.headerBackground }}
      className={`sticky top-0 z-[9999] transition-all duration-300 w-full overflow-visible ${isScrolled ? theme.headerBgScrolled : theme.headerBg
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 w-full overflow-visible">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href={ROUTES.HOME} className="flex items-center gap-2 flex-shrink-0 min-w-0">
            <div className={`w-10 h-10 ${theme.logoBadgeBg} rounded-xl flex items-center justify-center shadow-md flex-shrink-0`}>
              <span className={`${theme.logoBadgeText} font-bold text-lg`}>SM</span>
            </div>
            <div className="hidden sm:block min-w-0">
              <h1 className={`font-bold text-lg transition-colors ${theme.headerText}`}>
                SM ASSOCIATE
              </h1>
              <p className="text-xs text-slate-300 font-medium opacity-90">
                Finance &amp; Mobility
              </p>
            </div>
          </Link>

          <div className="lg:hidden flex flex-col items-start justify-center min-w-0 flex-1 px-1.5 leading-none">
            <span className={`font-bold text-[13px] leading-tight truncate ${theme.headerText}`}>
              SM Associate
            </span>
            <span className={`text-[9px] leading-[1.1] tracking-wide opacity-80 ${theme.headerText}`}>
              Your Finance &amp; Mobility Partner
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <div key={item.label} className="relative group flex-shrink-0">
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 font-semibold transition-colors whitespace-nowrap text-sm ${theme.headerText} ${theme.headerHover}`}
                >
                  {item.label}
                  {item.submenu && <ChevronDown size={16} aria-hidden="true" />}
                </Link>

                {/* Submenu */}
                {item.submenu && (
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className={`rounded-2xl ${theme.headerSubmenuBg} overflow-hidden shadow-2xl`}>
                      <div className="grid grid-cols-2 gap-0 w-max">
                        {item.submenu.map((subitem, idx) => {
                          const Icon = subitem.icon;
                          const isLastRow =
                            idx >= item.submenu!.length - (item.submenu!.length % 2 || 2);
                          const isLastCol = (idx + 1) % 2 === 0;
                          return (
                            <Link
                              key={subitem.label}
                              href={subitem.href}
                              className={`group/item flex items-center gap-3 px-6 py-4 ${theme.headerText} ${theme.headerHover} transition-all duration-200 text-sm ${!isLastCol ? 'border-r border-slate-800' : ''
                                } ${!isLastRow ? 'border-b border-slate-800' : ''} hover:bg-slate-800/80`}
                            >
                              <div className="p-2 bg-slate-800 group-hover/item:bg-slate-700 rounded-lg transition-colors">
                                {Icon && <Icon size={18} className="text-white" aria-hidden="true" />}
                              </div>
                              <span className="font-semibold">{subitem.label}</span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            <Link
              href={ROUTES.CONTACT}
              className={`inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors ${theme.headerButtonBg} ${theme.headerButtonText} whitespace-nowrap`}
            >
              Quotes
            </Link>
            <Link href={ROUTES.LOANS}>
              <button
                className={`px-6 py-2.5 ${theme.headerButtonBg} ${theme.headerButtonText} font-semibold rounded-xl hover:shadow-lg transition-all text-sm whitespace-nowrap`}
              >
                Apply Now
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors flex-shrink-0 ${theme.headerText} hover:bg-slate-800/80`}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav
            style={{ background: theme.headerBackground }}
            className={`lg:hidden pb-6 border-t border-slate-800/40 overflow-visible relative z-[9999] ${theme.headerBg}`}
          >
            {menuItems.map((item) => (
              <div key={item.label}>
                {item.submenu ? (
                  <button
                    onClick={() => setOpenSubmenu(openSubmenu === item.label ? null : item.label)}
                    className={`w-full text-left px-4 py-3 flex items-center justify-between font-semibold transition-colors ${theme.headerText} ${theme.headerHover}`}
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${openSubmenu === item.label ? 'rotate-180' : ''}`}
                      aria-hidden="true"
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`w-full text-left px-4 py-3 flex items-center font-semibold transition-colors ${theme.headerText} ${theme.headerHover}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}

                {item.submenu && openSubmenu === item.label && (
                  <div className="pl-4 overflow-visible relative z-[9999] bg-slate-900/90 border-l-2 border-slate-800">
                    <div className="grid grid-cols-2 gap-2 p-3">
                      {item.submenu.map((subitem) => {
                        const Icon = subitem.icon;
                        return (
                          <Link
                            key={subitem.label}
                            href={subitem.href}
                            className={`group/mobile flex items-center gap-2 px-3 py-3 rounded-lg transition-all duration-200 text-sm ${theme.headerText} ${theme.headerHover} hover:bg-slate-800`}
                            onClick={() => {
                              setIsOpen(false);
                              setOpenSubmenu(null);
                            }}
                          >
                            <div className="p-1.5 bg-slate-800 group-hover/mobile:bg-slate-700 rounded transition-colors">
                              {Icon && <Icon size={16} className="text-white" aria-hidden="true" />}
                            </div>
                            <span className="font-semibold">{subitem.label}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <div className="px-4 mt-4">
              <Link
                href={ROUTES.LOANS}
                onClick={() => setIsOpen(false)}
                className={`block text-center w-full py-3 ${theme.headerButtonBg} ${theme.headerButtonText} font-semibold rounded-xl shadow-md transition-all`}
              >
                Apply Now
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
