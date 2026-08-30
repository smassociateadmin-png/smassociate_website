'use client';

import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Upload, ChevronRight, AlertCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import Testimonials from '@/components/sections/Testimonials';
import VaultContactSection from '@/components/sections/VaultContactSection';
import FAQSection from '@/components/sections/FAQSection';

const sellVehicleSchema = z.object({
  fullName: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email'),
  phone: z.string().min(10, 'Valid phone number required'),
  vehicleBrand: z.string().min(1, 'Brand is required'),
  vehicleModel: z.string().min(1, 'Model is required'),
  vehicleYear: z.string().min(1, 'Year is required'),
  vehicleType: z.string().min(1, 'Vehicle type is required'),
  fuelType: z.string().min(1, 'Fuel type is required'),
  transmission: z.string().min(1, 'Transmission is required'),
  mileage: z.string().min(1, 'Mileage is required'),
  registrationNumber: z.string().min(1, 'Registration number is required'),
  expectedPrice: z.string().min(1, 'Expected price is required'),
  condition: z.string().min(1, 'Vehicle condition is required'),
  message: z.string().optional(),
});

type SellVehicleFormData = z.infer<typeof sellVehicleSchema>;

export default function SellVehicleContent() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<SellVehicleFormData>({
    resolver: zodResolver(sellVehicleSchema),
  });

  const onSubmit = () => {
    alert('Thank you for your submission! Our team will contact you soon.');
    reset();
  };

  const steps = [
    { number: '01', title: 'Share Vehicle Details', description: 'Tell us about your vehicle' },
    { number: '02', title: 'Upload Documents', description: 'Share vehicle registration and photos' },
    { number: '03', title: 'Get Valuation', description: 'Our experts assess the vehicle' },
    { number: '04', title: 'Complete Sale', description: 'Finalize the transaction' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-950 via-emerald-950 to-teal-950 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        </div>
        <div className="container-padded relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-sm font-semibold mb-4">
              Instant Valuation & Best Price
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Sell Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">Vehicle</span>
            </h1>
            <p className="text-xl text-emerald-100/80">Get the highest market value for your pre-owned car or bike in 24 hours</p>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container-padded max-w-5xl">
          <h2 className="text-4xl font-bold text-navy mb-12 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={isMounted ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={isMounted ? { delay: idx * 0.1, duration: 0.5 } : { duration: 0 }}
                className="relative"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-teal to-cyan rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
                {idx < steps.length - 1 && (
                  <div className="absolute top-8 -right-3 w-6 h-1 bg-teal hidden md:block"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-padded max-w-3xl">
          <motion.div
            initial={isMounted ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={isMounted ? { duration: 0.5 } : { duration: 0 }}
          >
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-3xl font-bold text-navy mb-8">Vehicle Details</h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h3 className="text-lg font-bold text-navy mb-4">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        {...register('fullName')}
                        className={`w-full px-4 py-2 border rounded-lg outline-none focus:border-teal ${errors.fullName ? 'border-red-500' : 'border-gray-300'
                          }`}
                        placeholder="Your full name"
                      />
                      {errors.fullName && (
                        <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        {...register('email')}
                        className={`w-full px-4 py-2 border rounded-lg outline-none focus:border-teal ${errors.email ? 'border-red-500' : 'border-gray-300'
                          }`}
                        placeholder="your@email.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        {...register('phone')}
                        className={`w-full px-4 py-2 border rounded-lg outline-none focus:border-teal ${errors.phone ? 'border-red-500' : 'border-gray-300'
                          }`}
                        placeholder="+91 98765 43210"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Vehicle Information */}
                <div>
                  <h3 className="text-lg font-bold text-navy mb-4">Vehicle Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Brand</label>
                      <input
                        type="text"
                        {...register('vehicleBrand')}
                        className={`w-full px-4 py-2 border rounded-lg outline-none focus:border-teal ${errors.vehicleBrand ? 'border-red-500' : 'border-gray-300'
                          }`}
                        placeholder="e.g., Honda, Maruti"
                      />
                      {errors.vehicleBrand && (
                        <p className="text-red-500 text-sm mt-1">{errors.vehicleBrand.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Model</label>
                      <input
                        type="text"
                        {...register('vehicleModel')}
                        className={`w-full px-4 py-2 border rounded-lg outline-none focus:border-teal ${errors.vehicleModel ? 'border-red-500' : 'border-gray-300'
                          }`}
                        placeholder="e.g., City, Swift"
                      />
                      {errors.vehicleModel && (
                        <p className="text-red-500 text-sm mt-1">{errors.vehicleModel.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Year</label>
                      <input
                        type="text"
                        {...register('vehicleYear')}
                        className={`w-full px-4 py-2 border rounded-lg outline-none focus:border-teal ${errors.vehicleYear ? 'border-red-500' : 'border-gray-300'
                          }`}
                        placeholder="2023"
                      />
                      {errors.vehicleYear && (
                        <p className="text-red-500 text-sm mt-1">{errors.vehicleYear.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Vehicle Type</label>
                      <select
                        {...register('vehicleType')}
                        className={`w-full px-4 py-2 border rounded-lg outline-none focus:border-teal ${errors.vehicleType ? 'border-red-500' : 'border-gray-300'
                          }`}
                      >
                        <option value="">Select type</option>
                        <option value="car">Car</option>
                        <option value="bike">Bike</option>
                        <option value="suv">SUV</option>
                      </select>
                      {errors.vehicleType && (
                        <p className="text-red-500 text-sm mt-1">{errors.vehicleType.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Fuel Type</label>
                      <select
                        {...register('fuelType')}
                        className={`w-full px-4 py-2 border rounded-lg outline-none focus:border-teal ${errors.fuelType ? 'border-red-500' : 'border-gray-300'
                          }`}
                      >
                        <option value="">Select fuel type</option>
                        <option value="petrol">Petrol</option>
                        <option value="diesel">Diesel</option>
                        <option value="hybrid">Hybrid</option>
                        <option value="electric">Electric</option>
                      </select>
                      {errors.fuelType && (
                        <p className="text-red-500 text-sm mt-1">{errors.fuelType.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Transmission</label>
                      <select
                        {...register('transmission')}
                        className={`w-full px-4 py-2 border rounded-lg outline-none focus:border-teal ${errors.transmission ? 'border-red-500' : 'border-gray-300'
                          }`}
                      >
                        <option value="">Select transmission</option>
                        <option value="manual">Manual</option>
                        <option value="automatic">Automatic</option>
                      </select>
                      {errors.transmission && (
                        <p className="text-red-500 text-sm mt-1">{errors.transmission.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Mileage (km)</label>
                      <input
                        type="text"
                        {...register('mileage')}
                        className={`w-full px-4 py-2 border rounded-lg outline-none focus:border-teal ${errors.mileage ? 'border-red-500' : 'border-gray-300'
                          }`}
                        placeholder="e.g., 50000"
                      />
                      {errors.mileage && (
                        <p className="text-red-500 text-sm mt-1">{errors.mileage.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Registration Number</label>
                      <input
                        type="text"
                        {...register('registrationNumber')}
                        className={`w-full px-4 py-2 border rounded-lg outline-none focus:border-teal ${errors.registrationNumber ? 'border-red-500' : 'border-gray-300'
                          }`}
                        placeholder="DL01AB1234"
                      />
                      {errors.registrationNumber && (
                        <p className="text-red-500 text-sm mt-1">{errors.registrationNumber.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Expected Price</label>
                      <input
                        type="text"
                        {...register('expectedPrice')}
                        className={`w-full px-4 py-2 border rounded-lg outline-none focus:border-teal ${errors.expectedPrice ? 'border-red-500' : 'border-gray-300'
                          }`}
                        placeholder="₹5,00,000"
                      />
                      {errors.expectedPrice && (
                        <p className="text-red-500 text-sm mt-1">{errors.expectedPrice.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Condition</label>
                      <select
                        {...register('condition')}
                        className={`w-full px-4 py-2 border rounded-lg outline-none focus:border-teal ${errors.condition ? 'border-red-500' : 'border-gray-300'
                          }`}
                      >
                        <option value="">Select condition</option>
                        <option value="excellent">Excellent</option>
                        <option value="good">Good</option>
                        <option value="fair">Fair</option>
                      </select>
                      {errors.condition && (
                        <p className="text-red-500 text-sm mt-1">{errors.condition.message}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Additional Details</label>
                  <textarea
                    {...register('message')}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:border-teal"
                    placeholder="Tell us more about your vehicle, any unique features, service history, etc."
                  />
                </div>

                {/* Document Upload */}
                <div>
                  <h3 className="text-lg font-bold text-navy mb-4">Upload Documents</h3>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-teal transition-colors">
                    <Upload size={32} className="mx-auto text-gray-400 mb-2" />
                    <p className="text-gray-600 mb-1">Drag and drop or click to upload</p>
                    <p className="text-sm text-gray-500">Vehicle photos, registration, insurance documents</p>
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-teal to-cyan text-white font-semibold rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  Submit Vehicle Details
                  <ChevronRight size={20} />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-white">
        <div className="container-padded max-w-3xl">
          <div className="flex gap-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <AlertCircle size={24} className="text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-blue-900 mb-2">Information Required</h3>
              <p className="text-blue-800 text-sm">
                To get the best valuation, please provide complete and accurate vehicle information. Our team will contact you within 24 hours to confirm details and schedule an inspection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vaultline Sell Vehicle Contact Section */}
      <VaultContactSection
        theme="emerald-gold"
        brandTag="SM Associate · Direct Vehicle Sourcing"
        title={
          <>
            Sell directly to <em>verified buyers</em>.
          </>
        }
        subtitle="Skip middleman haggling. Instant RC name transfer, complete clearance documentation, and same-day payment into your bank."
        stats={[
          { label: 'Vehicles Bought & Sold', target: 540, suffix: '+' },
          { label: 'Doorstep Valuation', target: 'Free', isStatic: true },
          { label: 'Payment Method', target: 'Direct Transfer', isStatic: true },
        ]}
        formEyebrow="Direct Sale Request"
        formTitle="Get an instant cash offer."
        formSubtitle="Share your vehicle registration details and expected price for a guaranteed fair quote."
        reasonLabel="Vehicle To Sell"
        reasonOptions={[
          { value: 'sell_car', label: 'Sell Pre-Owned Car' },
          { value: 'sell_bike', label: 'Sell Pre-Owned Bike' },
          { value: 'sell_scooter', label: 'Sell Scooter / Moped' },
          { value: 'commercial_resale', label: 'Sell Commercial Vehicle' },
        ]}
        defaultReason="sell_car"
        valueLabel="Expected Price"
        valuePlaceholder="e.g. ₹3,50,000"
        phoneLabel="Phone / WhatsApp Number"
        phonePlaceholder="+91 97902 19874"
        messagePlaceholder="Tell us about the vehicle condition, previous owners, service history, or any urgent timeline..."
        submitButtonText="Request Direct Buyer Offer"
      />

      {/* FAQ Section */}
      <FAQSection category="sellVehicle" />

      {/* Testimonials Section */}
      <Testimonials />
    </div>
  );
}
