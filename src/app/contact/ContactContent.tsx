'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/constants';
import Testimonials from '@/components/sections/Testimonials';
import VaultContactSection from '@/components/sections/VaultContactSection';
import FAQSection from '@/components/sections/FAQSection';

export default function ContactContent() {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 9790219874', '+91 9047007720'],
      description: 'Available Mon-Sat, 9AM-6PM'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['smassociateadmin@gmail.com'],
      description: 'We respond within 2 hours'
    },
    {
      icon: MapPin,
      title: 'Office',
      details: [COMPANY_INFO.address],
      description: 'Visit us for in-person consultation'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Mon-Sat: 9AM - 6PM', 'Sunday: Closed'],
      description: 'Holidays: 2PM - 6PM'
    }
  ];

  return (
    <>
      {/* Contact Info Cards */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container-padded">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={idx}
                  initial={false}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 bg-gradient-to-br from-amber-500/10 to-yellow-500/10 rounded-xl border border-amber-500/20 text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2">{info.title}</h3>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-gray-700 font-semibold text-sm mb-1">
                      {info.title === 'Phone' ? (
                        <a href={`tel:${detail}`} className="hover:text-amber-600 transition-colors">
                          {detail}
                        </a>
                      ) : info.title === 'Email' ? (
                        <a href={`mailto:${detail}`} className="hover:text-amber-600 transition-colors">
                          {detail}
                        </a>
                      ) : (
                        detail
                      )}
                    </p>
                  ))}
                  <p className="text-gray-600 text-xs mt-3">{info.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vaultline Main Contact Section (Amber/Gold Theme) */}
      <VaultContactSection
        theme="amber-gold"
        brandTag="SM Associate · Central Service Desk"
        title={
          <>
            Turn your inquiries into <em>action</em>.
          </>
        }
        subtitle="Financing, loans, vehicle resale, or general guidance handled by one dedicated desk. Tell us what you need — we will reply with concrete options."
        stats={[
          { label: 'Inquiries Resolved', target: 2800, suffix: '+' },
          { label: 'Avg. Response Time', target: 'under 2 hrs', isStatic: true },
          { label: 'Branches & Service Desks', target: 'Tirunelveli', isStatic: true },
        ]}
        formEyebrow="Direct Helpdesk Inquiry"
        formTitle="A specialist replies within one business day."
        formSubtitle="Financing, resale, or insurance — give us the shape of it below."
        reasonLabel="I'm reaching out about"
        reasonOptions={[
          { value: 'loan_help', label: 'Loan / Financing' },
          { value: 'buy_vehicle', label: 'Vehicle Purchase' },
          { value: 'sell_vehicle', label: 'Vehicle Resale' },
          { value: 'insurance', label: 'Insurance Cover' },
          { value: 'other', label: 'Something else' },
        ]}
        defaultReason="loan_help"
        valueLabel="Approximate Value / Budget"
        valuePlaceholder="e.g. ₹5,00,000"
        phoneLabel="Phone Number"
        phonePlaceholder="+91 97902 19874"
        messagePlaceholder="Describe what you are looking for, timeline, or question in detail..."
        submitButtonText="Submit Inquiry"
      />

      {/* Office Map & Location */}
      <section className="py-16 bg-gray-50">
        <div className="container-padded max-w-5xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-navy mb-2">Visit Our Head Office</h2>
            <p className="text-gray-600 text-sm">Nellaiapper High Road, Thirunagar, Tirunelveli, Tamil Nadu</p>
          </div>
          <div className="rounded-2xl h-96 overflow-hidden border border-amber-500/20 shadow-xl">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=No%20183%20E4,%20Nellaiapper%20High%20Road,%20Thirunagar,%20Tirunelveli%20Junction,%20Tirunelveli,%20Tamil%20Nadu%20627001&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              title="SM Associate Location"
              style={{ border: 0 }}
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection category="contact" />

      {/* Testimonials */}
      <Testimonials />
    </>
  );
}
