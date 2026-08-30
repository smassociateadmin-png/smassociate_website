import { Eye, Star, Zap, Heart } from 'lucide-react';

const reasons = [
  { icon: Eye, title: 'Transparent Rates', description: 'No Hidden Charges' },
  { icon: Star, title: 'Quality Vehicles', description: 'Carefully Verified Listings' },
  { icon: Zap, title: 'Fast Support', description: 'Quick Response From Our Team' },
  { icon: Heart, title: 'Customer First', description: 'Solutions Based On Your Needs' },
];

export default function WhyChooseUs() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy mb-4">Why Choose SM Associate?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">We&apos;re committed to providing you with the best experience</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <div
                key={idx}
                className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-teal to-cyan rounded-lg flex items-center justify-center mb-4">
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">{reason.title}</h3>
                <p className="text-gray-600 text-sm">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
