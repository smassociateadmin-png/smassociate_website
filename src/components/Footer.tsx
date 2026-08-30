'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react';
import { COMPANY_INFO, ROUTES } from '@/lib/constants';
import { getPageTheme } from '@/lib/themeSystem';

export default function Footer() {
  const pathname = usePathname();
  const theme = getPageTheme(pathname);

  return (
    <footer
      style={{ background: theme.footerBackground }}
      className={`${theme.footerBg} ${theme.footerText} transition-colors duration-300 w-full overflow-x-hidden border-t ${theme.footerBorder}`}
    >
      <div className="max-w-7xl mx-auto px-4 py-12 w-full">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1 min-w-0">
            <div className="flex items-center gap-2 mb-4 flex-wrap">
              <div className={`w-10 h-10 ${theme.logoBadgeBg} rounded-xl flex items-center justify-center flex-shrink-0 shadow-md`}>
                <span className={`${theme.logoBadgeText} font-bold`}>SM</span>
              </div>
              <div className="min-w-0">
                <h2 className={`font-bold ${theme.footerHeadingText}`}>SM ASSOCIATE</h2>
                <p className="text-xs text-slate-300 truncate font-medium">{COMPANY_INFO.tagline}</p>
              </div>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed font-normal">
              Your trusted partner for finance and mobility solutions.
            </p>
          </div>

          {/* Loans */}
          <div className="min-w-0">
            <h3 className={`font-semibold mb-4 truncate ${theme.footerHeadingText}`}>Loans &amp; Insurance</h3>
            <ul className="space-y-2.5 text-sm text-slate-300 font-medium">
              <li>
                <Link href={ROUTES.HOME_LOAN} className={`${theme.footerHoverText} transition-colors truncate block`}>
                  Home Loan
                </Link>
              </li>
              <li>
                <Link href={ROUTES.CAR_LOAN} className={`${theme.footerHoverText} transition-colors truncate block`}>
                  Car Loan
                </Link>
              </li>
              <li>
                <Link href={ROUTES.BIKE_LOAN} className={`${theme.footerHoverText} transition-colors truncate block`}>
                  Bike Loan
                </Link>
              </li>
              <li>
                <Link href={ROUTES.TWO_WHEELER_INSURANCE} className={`${theme.footerHoverText} transition-colors truncate block`}>
                  Two Wheeler Insurance
                </Link>
              </li>
              <li>
                <Link href={ROUTES.PERSONAL_LOAN} className={`${theme.footerHoverText} transition-colors truncate block`}>
                  Personal Loan
                </Link>
              </li>
              <li>
                <Link href={ROUTES.BUSINESS_LOAN} className={`${theme.footerHoverText} transition-colors truncate block`}>
                  Business Loan
                </Link>
              </li>
            </ul>
          </div>

          {/* Vehicles */}
          <div className="min-w-0">
            <h3 className={`font-semibold mb-4 truncate ${theme.footerHeadingText}`}>Vehicles</h3>
            <ul className="space-y-2.5 text-sm text-slate-300 font-medium">
              <li>
                <Link href={`${ROUTES.VEHICLES}?type=car`} className={`${theme.footerHoverText} transition-colors truncate block`}>
                  Buy Cars
                </Link>
              </li>
              <li>
                <Link href={`${ROUTES.VEHICLES}?type=bike`} className={`${theme.footerHoverText} transition-colors truncate block`}>
                  Buy Bikes
                </Link>
              </li>
              <li>
                <Link href={ROUTES.CAR_RESALE} className={`${theme.footerHoverText} transition-colors truncate block`}>
                  Sell Vehicle
                </Link>
              </li>
              <li>
                <Link href={ROUTES.VEHICLES} className={`${theme.footerHoverText} transition-colors truncate block`}>
                  Featured Vehicles
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="min-w-0">
            <h3 className={`font-semibold mb-4 truncate ${theme.footerHeadingText}`}>Company</h3>
            <ul className="space-y-2.5 text-sm text-slate-300 font-medium">
              <li>
                <Link href={ROUTES.ABOUT} className={`${theme.footerHoverText} transition-colors truncate block`}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href={ROUTES.EMI_CALCULATOR} className={`${theme.footerHoverText} transition-colors truncate block`}>
                  EMI Calculator
                </Link>
              </li>
              <li>
                <Link href={ROUTES.BLOG} className={`${theme.footerHoverText} transition-colors truncate block`}>
                  Blog &amp; News
                </Link>
              </li>
              <li>
                <Link href={ROUTES.CONTACT} className={`${theme.footerHoverText} transition-colors truncate block`}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="min-w-0">
            <h3 className={`font-semibold mb-4 truncate ${theme.footerHeadingText}`}>Support</h3>
            <ul className="space-y-3 text-sm font-medium">
              <li className="flex items-start gap-2.5 min-w-0">
                <Phone size={16} className={`${theme.footerAccentText} flex-shrink-0 mt-0.5`} aria-hidden="true" />
                <div className="flex flex-col gap-1 min-w-0">
                  <a href="tel:+919790219874" className={`text-slate-300 ${theme.footerHoverText} transition-colors`}>
                    +91 9790219874
                  </a>
                  <a href="tel:+919047007720" className={`text-slate-300 ${theme.footerHoverText} transition-colors`}>
                    +91 9047007720
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2.5 min-w-0">
                <Mail size={16} className={`${theme.footerAccentText} flex-shrink-0`} aria-hidden="true" />
                <a href={`mailto:${COMPANY_INFO.supportEmail}`} className={`text-slate-300 ${theme.footerHoverText} transition-colors truncate`}>
                  {COMPANY_INFO.supportEmail}
                </a>
              </li>
              <li className="flex items-start gap-2.5 min-w-0">
                <MapPin size={16} className={`${theme.footerAccentText} mt-1 flex-shrink-0`} aria-hidden="true" />
                <span className="text-slate-300">
                  Head Office<br />
                  <span className="text-xs text-slate-300 font-normal">{COMPANY_INFO.address}</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar Divider */}
        <div className={`border-t ${theme.footerBorder} pt-8`}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-slate-300 text-center md:text-left font-medium">
              © 2026 SM Associate. All Rights Reserved.
            </div>

            {/* Legal Links */}
            <div className="flex gap-6 text-sm text-slate-300 font-medium flex-wrap justify-center">
              <Link href={ROUTES.PRIVACY_POLICY} className={`${theme.footerHoverText} transition-colors truncate`}>
                Privacy Policy
              </Link>
              <Link href={ROUTES.TERMS_CONDITIONS} className={`${theme.footerHoverText} transition-colors truncate`}>
                Terms &amp; Conditions
              </Link>
              <Link href={ROUTES.DISCLAIMER} className={`${theme.footerHoverText} transition-colors truncate`}>
                Disclaimer
              </Link>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2.5 ${theme.footerSocialBg} rounded-xl transition-all flex-shrink-0 shadow-sm`}
                aria-label="Visit our Facebook page"
              >
                <Facebook size={16} className={theme.footerSocialIcon} aria-hidden="true" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2.5 ${theme.footerSocialBg} rounded-xl transition-all flex-shrink-0 shadow-sm`}
                aria-label="Visit our LinkedIn page"
              >
                <Linkedin size={16} className={theme.footerSocialIcon} aria-hidden="true" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2.5 ${theme.footerSocialBg} rounded-xl transition-all flex-shrink-0 shadow-sm`}
                aria-label="Visit our Twitter page"
              >
                <Twitter size={16} className={theme.footerSocialIcon} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
