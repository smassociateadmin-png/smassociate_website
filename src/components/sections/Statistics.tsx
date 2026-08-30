import { Users, Car, Zap, CheckCircle } from 'lucide-react';
import { STATISTICS } from '@/lib/constants';
import AnimatedNumber from '@/components/AnimatedNumber';

const stats = [
  { icon: Users, label: 'Customers Trusted', value: STATISTICS.customersServed },
  { icon: Car, label: 'Vehicles Available', value: STATISTICS.vehiclesListed },
  { icon: Zap, label: 'Process — Fast', value: STATISTICS.processingTime },
  { icon: CheckCircle, label: 'Trust Rating', value: STATISTICS.trustRating },
];

export default function Statistics() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="p-6 bg-gradient-to-br from-navy/5 to-teal/5 rounded-xl border border-teal/10 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-teal to-cyan rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-navy mb-2">
                  <AnimatedNumber value={stat.value} />
                </h3>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
