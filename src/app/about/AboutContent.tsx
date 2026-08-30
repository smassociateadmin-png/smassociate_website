'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Users, Target, Award } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Testimonials from '@/components/sections/Testimonials';
import VaultContactSection from '@/components/sections/VaultContactSection';
import FAQSection from '@/components/sections/FAQSection';

export default function AboutContent() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const values = [
    { icon: Users, title: 'Customer First', description: 'We prioritize your needs and satisfaction above all' },
    { icon: Target, title: 'Transparency', description: 'Clear communication and honest dealings with every client' },
    { icon: Award, title: 'Quality', description: 'Excellence in service and premium vehicle selection' },
    { icon: CheckCircle, title: 'Reliability', description: 'Consistent, dependable support throughout your journey' },
  ];

  return (
    <>
      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={isMounted ? { opacity: 0, x: -50 } : { opacity: 1, x: 0 }}
              animate={{ opacity: 1, x: 0 }}
              transition={isMounted ? { duration: 0.6 } : { duration: 0 }}
            >
              <h1 className="text-4xl font-bold text-navy mb-6">Our Story</h1>
              <p className="text-gray-700 mb-4 leading-relaxed">
                SM Associate was founded with a clear vision: to make finance and mobility accessible to everyone in Tirunelveli and surrounding areas.
                We believe that financial decisions shouldn&apos;t be complicated, and vehicle ownership should be within reach for everyone.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Our team brings decades of combined experience in finance, automotive, and customer service.
                We&apos;ve helped hundreds of customers achieve their dreams, whether it&apos;s buying their first home,
                financing their dream car, or finding the perfect pre-owned vehicle. As a trusted finance company in Tirunelveli,
                we&apos;ve built our reputation on transparency, reliability, and customer satisfaction.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Today, SM Associate continues to grow, innovate, and set new standards in customer satisfaction
                and financial solutions across Tamil Nadu.
              </p>
            </motion.div>

            <motion.div
              initial={isMounted ? { opacity: 0, x: 50 } : { opacity: 1, x: 0 }}
              animate={{ opacity: 1, x: 0 }}
              transition={isMounted ? { duration: 0.6 } : { duration: 0 }}
              className="overflow-hidden rounded-2xl border border-teal/20 bg-gradient-to-br from-teal/20 to-cyan/20 shadow-lg"
            >
              <div className="relative h-[440px] w-full">
                <Image
                  src="/about/office.jpg"
                  alt="SM Associate Office in Tirunelveli and Advisory Team"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={isMounted ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={isMounted ? { duration: 0.5 } : { duration: 0 }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <h2 className="text-2xl font-bold text-navy mb-4">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                To empower individuals and families by providing transparent, accessible, and reliable financial
                solutions and quality vehicles, making dreams achievable for everyone.
              </p>
            </motion.div>

            <motion.div
              initial={isMounted ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={isMounted ? { delay: 0.1, duration: 0.5 } : { duration: 0 }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <h2 className="text-2xl font-bold text-navy mb-4">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed">
                To be the most trusted and innovative finance and mobility partner in the region,
                recognized for our integrity, customer-first approach, and commitment to excellence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <motion.div initial={isMounted ? { opacity: 0 } : { opacity: 1 }} animate={{ opacity: 1 }} transition={isMounted ? { duration: 0.5 } : { duration: 0 }} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">Our Core Values</h2>
            <p className="text-gray-600">What drives us every day</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={idx}
                  initial={isMounted ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={isMounted ? { delay: idx * 0.1, duration: 0.5 } : { duration: 0 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-teal to-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-navy text-white">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '500+', label: 'Satisfied Customers' },
              { number: '100+', label: 'Vehicles Listed' },
              { number: '10+', label: 'Years Experience' },
              { number: '95%', label: 'Customer Satisfaction' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={isMounted ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={isMounted ? { delay: idx * 0.1, duration: 0.5 } : { duration: 0 }}
              >
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <p className="text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vaultline About Us Contact Section */}
      <VaultContactSection
        theme="purple-cyan"
        brandTag="SM Associate · Leadership Desk"
        title={
          <>
            Partner with Tirunelveli&apos;s <em>trusted team</em>.
          </>
        }
        subtitle="Serving 500+ satisfied clients across Tamil Nadu with complete integrity, transparent banking relationships, and prompt execution."
        stats={[
          { label: 'Customers Served', target: 500, suffix: '+' },
          { label: 'Years of Trust', target: '10+ Yrs', isStatic: true },
          { label: 'Client Satisfaction', target: '99%', isStatic: true },
        ]}
        formEyebrow="Direct Leadership Inquiry"
        formTitle="Let&apos;s build your financial roadmap."
        formSubtitle="Have a customized financial requirement or corporate partnership query? Connect with our senior advisory team."
        reasonLabel="Area of Interest"
        reasonOptions={[
          { value: 'loan_advisory', label: 'Loan & Financial Advisory' },
          { value: 'vehicle_fleet', label: 'Vehicle Fleet / Resale' },
          { value: 'partnership', label: 'Institutional Partnership' },
          { value: 'general', label: 'General Consultation' },
        ]}
        defaultReason="loan_advisory"
        valueLabel="Approximate Portfolio / Value"
        valuePlaceholder="e.g. ₹20,00,000"
        phoneLabel="Phone Number"
        phonePlaceholder="+91 97902 19874"
        messagePlaceholder="Tell us about your goals, timing, or how we can best support your financial journey..."
        submitButtonText="Connect with Leadership"
      />

      {/* FAQ Section */}
      <FAQSection category="about" />

      {/* Testimonials */}
      <Testimonials />
    </>
  );
}
