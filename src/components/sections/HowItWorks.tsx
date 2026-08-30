import { CheckCircle, FileText, Headphones, Zap } from 'lucide-react';

const steps = [
  { number: '01', title: 'Choose Your Service', description: 'Select a loan or vehicle', icon: CheckCircle },
  { number: '02', title: 'Submit Your Details', description: 'Provide basic information', icon: FileText },
  { number: '03', title: 'Get Assistance', description: 'Our team reviews and guides', icon: Headphones },
  { number: '04', title: 'Complete Transaction', description: 'Finalize your deal', icon: Zap },
];

export default function HowItWorks() {
  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy mb-4">How It Works</h2>
          <p className="text-gray-600">Simple 4-step process to get started</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-teal to-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>

                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 -right-6 w-12 h-0.5 bg-gradient-to-r from-teal to-transparent pointer-events-none" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
