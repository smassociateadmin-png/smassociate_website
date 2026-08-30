'use client';

import { useState, useCallback, memo, useEffect } from 'react';
import { calculateEMI, formatCurrency } from '@/lib/utils';
import Link from 'next/link';
import { ROUTES } from '@/lib/constants';

const EMICalculator = memo(function EMICalculator() {
  const [principal, setPrincipal] = useState(500000);
  const [rate, setRate] = useState(7.5);
  const [tenure, setTenure] = useState(60);
  // isMounted prevents Intl.NumberFormat locale formatting from running during
  // SSR, where Node.js ICU slim builds can produce different output than the
  // browser, causing a hydration mismatch.
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => { setIsMounted(true); }, []);

  const handlePrincipalChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPrincipal(Number(e.target.value));
  }, []);

  const handleRateChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setRate(Number(e.target.value));
  }, []);

  const handleTenureChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setTenure(Number(e.target.value));
  }, []);

  const emi = calculateEMI(principal, rate, tenure);
  const totalPayable = emi * tenure;
  const totalInterest = totalPayable - principal;

  // Deterministic fallback used on the server (and first client render before
  // hydration) so server and client HTML always match.
  const fmt = (n: number) => isMounted ? formatCurrency(n) : `₹${n}`;

  return (
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Calculator */}
          <div>
            <h2 className="text-4xl font-bold text-navy mb-8">Loan EMI Calculator</h2>

            <form className="space-y-6">
              {/* Loan Amount */}
              <fieldset>
                <label htmlFor="principal" className="block text-sm font-semibold text-gray-700 mb-2">
                  Loan Amount: {fmt(principal)}
                </label>
                <input
                  id="principal"
                  type="range"
                  min="50000"
                  max="5000000"
                  step="50000"
                  value={principal}
                  onChange={handlePrincipalChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  aria-label="Select loan amount"
                />
                <input
                  type="number"
                  value={principal}
                  onChange={handlePrincipalChange}
                  className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg"
                  aria-label="Enter loan amount manually"
                />
              </fieldset>

              {/* Interest Rate */}
              <fieldset>
                <label htmlFor="rate" className="block text-sm font-semibold text-gray-700 mb-2">
                  Interest Rate: {rate.toFixed(2)}% p.a.
                </label>
                <input
                  id="rate"
                  type="range"
                  min="3"
                  max="15"
                  step="0.1"
                  value={rate}
                  onChange={handleRateChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  aria-label="Select interest rate"
                />
              </fieldset>

              {/* Tenure */}
              <fieldset>
                <label htmlFor="tenure" className="block text-sm font-semibold text-gray-700 mb-2">
                  Loan Tenure: {tenure} months ({(tenure / 12).toFixed(1)} years)
                </label>
                <input
                  id="tenure"
                  type="range"
                  min="12"
                  max="360"
                  step="12"
                  value={tenure}
                  onChange={handleTenureChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  aria-label="Select loan tenure"
                />
              </fieldset>

              {/* Submit Button */}
              <Link
                href={ROUTES.CONTACT}
                className="w-full mt-8 py-3 bg-gradient-to-r from-teal to-cyan text-white font-semibold rounded-lg hover:shadow-lg transition-shadow block text-center"
              >
                Get Personalized Assistance
              </Link>
            </form>
          </div>

          {/* Results */}
          <div className="flex items-center">
            <div className="w-full">
              <div className="grid grid-cols-1 gap-4">
                {/* EMI Box */}
                <div
                  className="p-6 bg-gradient-to-br from-teal/10 to-cyan/10 rounded-xl border-2 border-teal"
                  role="region"
                  aria-label="Monthly EMI result"
                >
                  <p className="text-gray-600 text-sm mb-2">Monthly EMI</p>
                  <p className="text-4xl font-bold text-teal">{fmt(emi)}</p>
                </div>

                {/* Total Interest */}
                <div
                  className="p-6 bg-gradient-to-br from-navy/5 to-navy/10 rounded-xl border border-navy/10"
                  role="region"
                  aria-label="Total interest amount"
                >
                  <p className="text-gray-600 text-sm mb-2">Total Interest</p>
                  <p className="text-3xl font-bold text-navy">{fmt(totalInterest)}</p>
                </div>

                {/* Total Payable */}
                <div
                  className="p-6 bg-gradient-to-br from-gray-100 to-gray-50 rounded-xl border border-gray-200"
                  role="region"
                  aria-label="Total payable amount"
                >
                  <p className="text-gray-600 text-sm mb-2">Total Payable Amount</p>
                  <p className="text-3xl font-bold text-gray-900">{fmt(totalPayable)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

EMICalculator.displayName = 'EMICalculator';
export default EMICalculator;
