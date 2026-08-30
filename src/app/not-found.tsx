import Link from 'next/link';
import { Home, Search, ChevronRight } from 'lucide-react';
import { ROUTES } from '@/lib/constants';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-navy flex items-center justify-center px-4 py-16">
      <div className="text-center max-w-md animate-fade-up">
        {/* 404 Text */}
        <div className="mb-8">
          <div className="text-9xl font-bold bg-gradient-to-r from-teal to-cyan bg-clip-text text-transparent mb-4">
            404
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">Page Not Found</h1>
          <p className="text-xl text-gray-300">
            Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </div>

        {/* Icon */}
        <div className="mb-8">
          <Search size={64} className="mx-auto text-teal/50 animate-pulse" />
        </div>

        {/* CTA Buttons */}
        <div className="space-y-4">
          <p className="text-gray-400 text-sm mb-6">Here are some helpful links instead:</p>
          <div className="space-y-3">
            <Link
              href={ROUTES.HOME}
              className="px-6 py-3 bg-gradient-to-r from-teal to-cyan text-white font-semibold rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <Home size={20} />
              Back to Home
            </Link>
            <Link
              href={ROUTES.LOANS}
              className="px-6 py-3 border-2 border-teal text-teal font-semibold rounded-lg hover:bg-teal/10 transition-colors flex items-center justify-center gap-2"
            >
              Explore Loans
              <ChevronRight size={20} />
            </Link>
            <Link
              href={ROUTES.VEHICLES}
              className="px-6 py-3 border-2 border-cyan text-cyan font-semibold rounded-lg hover:bg-cyan/10 transition-colors flex items-center justify-center gap-2"
            >
              Browse Vehicles
              <ChevronRight size={20} />
            </Link>
            <Link
              href={ROUTES.CONTACT}
              className="block px-6 py-3 bg-white/10 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Help Text */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-gray-400 text-sm">
            Still need help?{' '}
            <Link href={ROUTES.CONTACT} className="text-teal hover:text-cyan transition-colors">
              Contact our support team
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
