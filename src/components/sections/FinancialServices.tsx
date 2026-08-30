import {
  Home,
  Car,
  Bike,
  Wallet,
  Briefcase,
  ShieldCheck,
  ChevronRight,
} from 'lucide-react';
import Link from 'next/link';
import { ROUTES } from '@/lib/constants';

const services = [
  {
    icon: Home,
    title: 'Home Loan',
    description: 'Home Purchase, Construction, Renovation',
    items: ['Easy Approval', 'Flexible Terms', 'Competitive Rates'],
    cta: 'Explore Home Loans',
    href: ROUTES.HOME_LOAN,
  },
  {
    icon: Car,
    title: 'Car Loan',
    description: 'New & Used Car Finance',
    items: ['Instant Processing', 'Best Rates', 'Easy Documents'],
    cta: 'Apply for Car Loan',
    href: ROUTES.CAR_LOAN,
  },
  {
    icon: Bike,
    title: 'Bike Loan',
    description: 'New & Used Bike Finance',
    items: ['Quick Approval', 'Low Interest', 'Easy EMI'],
    cta: 'Apply for Bike Loan',
    href: ROUTES.BIKE_LOAN,
  },
  {
    icon: Wallet,
    title: 'Personal Loan',
    description: 'Quick Personal Funds',
    items: ['No Collateral', 'Instant Disbursal', 'Flexible Repayment'],
    cta: 'Check Eligibility',
    href: ROUTES.PERSONAL_LOAN,
  },
  {
    icon: Briefcase,
    title: 'Business Loan',
    description: 'Expansion & Working Capital',
    items: ['Business Growth', 'Working Capital', 'Equipment Finance'],
    cta: 'Explore Business Loans',
    href: ROUTES.BUSINESS_LOAN,
  },
  {
    icon: ShieldCheck,
    title: 'Two-Wheeler Insurance',
    description: 'Comprehensive & Third-Party Cover',
    items: ['Instant Policy', 'Cashless Claims', 'Affordable Premiums'],
    cta: 'Get Insured Now',
    href: ROUTES.TWO_WHEELER_INSURANCE,
  },
];

export default function FinancialServices() {
  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            Financial Solutions for Every Need
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our range of trusted financial products designed to
            meet your unique requirements.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 bg-gradient-to-r from-teal to-cyan rounded-lg flex items-center justify-center mb-4">
                    <Icon size={28} className="text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-navy mb-2">
                    {service.title}
                  </h3>

                  <p className="text-sm text-gray-600 mb-4">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-gray-700 flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 bg-teal rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={service.href}
                  className="w-full py-2.5 px-4 bg-gradient-to-r from-teal to-cyan text-white font-semibold rounded-lg hover:shadow-lg transition-shadow flex items-center justify-center gap-2 text-sm text-center"
                >
                  {service.cta}
                  <ChevronRight size={16} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}