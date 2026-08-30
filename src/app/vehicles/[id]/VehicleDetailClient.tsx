'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, Fuel, Calendar, Users, Zap, Award, Shield, ChevronRight, Phone, Mail } from 'lucide-react';
import Link from 'next/link';
import { ROUTES } from '@/lib/constants';
import FAQSection from '@/components/sections/FAQSection';

const VEHICLES_DATABASE: Record<string, {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: string;
  mileage: string;
  fuelType: string;
  transmission: string;
  type: string;
  location: string;
  owner: string;
  images: string[];
  description: string;
  features: string[];
  specifications: Array<{ label: string; value: string }>;
}> = {
  '1': {
    id: '1',
    brand: 'Maruti Suzuki',
    model: 'Swift ZXi',
    year: 2022,
    price: '₹5.5 Lakhs',
    mileage: '24,000 km',
    fuelType: 'Petrol',
    transmission: 'Manual',
    type: 'Hatchback',
    location: 'Tirunelveli',
    owner: 'First Owner',
    images: ['/vehicles/swift.jpg', '/vehicles/car-1.jpg', '/vehicles/car-3.jpg'],
    description: 'Premium pre-owned Maruti Swift ZXi with excellent fuel efficiency. Single owner vehicle with full service history, pristine interiors, and clean records.',
    features: ['Air Conditioning', 'Power Steering', 'Touchscreen Infotainment', 'Airbags', 'ABS with EBD', 'Alloy Wheels', 'Rear Parking Sensors'],
    specifications: [
      { label: 'Engine', value: '1197 cc' },
      { label: 'Transmission', value: '5-Speed Manual' },
      { label: 'Fuel Type', value: 'Petrol' },
      { label: 'Mileage', value: '23.2 km/l' },
      { label: 'Seating', value: '5 Passengers' },
      { label: 'Boot Space', value: '268 liters' },
    ],
  },
  '2': {
    id: '2',
    brand: 'Hyundai',
    model: 'i20 Asta',
    year: 2021,
    price: '₹6.2 Lakhs',
    mileage: '31,500 km',
    fuelType: 'Diesel',
    transmission: 'Automatic',
    type: 'Hatchback',
    location: 'Tirunelveli',
    owner: 'First Owner',
    images: ['/vehicles/i20.jpg', '/vehicles/car-2.jpg', '/vehicles/car-1.jpg'],
    description: 'Feature-loaded Hyundai i20 Asta Diesel. Smooth automatic drive, certified battery and tire condition, no accidental record.',
    features: ['Sunroof', 'Digital Cluster', 'Rear Camera', 'Keyless Entry', 'Wireless Charger', 'Cruise Control', 'Bose Audio'],
    specifications: [
      { label: 'Engine', value: '1493 cc' },
      { label: 'Transmission', value: '6-Speed Automatic' },
      { label: 'Fuel Type', value: 'Diesel' },
      { label: 'Mileage', value: '25.0 km/l' },
      { label: 'Seating', value: '5 Passengers' },
      { label: 'Boot Space', value: '311 liters' },
    ],
  },
  '3': {
    id: '3',
    brand: 'Honda',
    model: 'City V',
    year: 2023,
    price: '₹9.5 Lakhs',
    mileage: '12,500 km',
    fuelType: 'Petrol',
    transmission: 'Automatic',
    type: 'Sedan',
    location: 'Tirunelveli',
    owner: 'First Owner',
    images: ['/vehicles/city.jpg', '/vehicles/car-3.jpg', '/vehicles/car-2.jpg'],
    description: 'Well-maintained pre-owned Honda City in pristine condition. Single owner vehicle with full authorized service history. All documents clear.',
    features: ['Air Conditioning', 'Power Steering', 'Power Windows', 'Central Locking', 'Airbags', 'ABS', 'Backup Camera', 'Touchscreen Infotainment', 'Cruise Control', 'Alloy Wheels'],
    specifications: [
      { label: 'Engine', value: '1498 cc' },
      { label: 'Transmission', value: 'Automatic (CVT)' },
      { label: 'Fuel Type', value: 'Petrol' },
      { label: 'Mileage', value: '18.4 km/l' },
      { label: 'Seating', value: '5 Passengers' },
      { label: 'Boot Space', value: '506 liters' },
    ],
  },
  '4': {
    id: '4',
    brand: 'Honda',
    model: 'Activa 6G',
    year: 2023,
    price: '₹75,000',
    mileage: '4,200 km',
    fuelType: 'Petrol',
    transmission: 'Automatic',
    type: 'Scooter',
    location: 'Tirunelveli',
    owner: 'First Owner',
    images: ['/vehicles/activa.jpg', '/vehicles/pulsar.jpg', '/vehicles/classic350.jpg'],
    description: 'Top-selling Honda Activa 6G automatic scooter in immaculate condition with valid insurance and complete warranty papers.',
    features: ['PGM-FI Engine', 'Telescopic Suspension', 'Combi Brake System', 'LED Headlamp', 'External Fuel Fill', 'Tubeless Tires'],
    specifications: [
      { label: 'Engine', value: '109.5 cc' },
      { label: 'Transmission', value: 'CVT Automatic' },
      { label: 'Fuel Type', value: 'Petrol' },
      { label: 'Mileage', value: '50 km/l' },
      { label: 'Seating', value: '2 Persons' },
      { label: 'Fuel Tank', value: '5.3 liters' },
    ],
  },
  '5': {
    id: '5',
    brand: 'Bajaj',
    model: 'Pulsar NS200',
    year: 2022,
    price: '₹1.15 Lakhs',
    mileage: '16,000 km',
    fuelType: 'Petrol',
    transmission: 'Manual',
    type: 'Sports Bike',
    location: 'Tirunelveli',
    owner: 'First Owner',
    images: ['/vehicles/pulsar.jpg', '/vehicles/bike-1.jpg', '/vehicles/classic350.jpg'],
    description: 'Powerful Bajaj Pulsar NS200 sport motorcycle. Low mileage, single owner, clear engine diagnostics and road assistance included.',
    features: ['Triple Spark DTS-i Engine', 'Perimeter Frame', 'Dual Channel ABS', 'Nitrox Monoshock', 'Underbelly Exhaust'],
    specifications: [
      { label: 'Engine', value: '199.5 cc' },
      { label: 'Transmission', value: '6-Speed Manual' },
      { label: 'Fuel Type', value: 'Petrol' },
      { label: 'Mileage', value: '38 km/l' },
      { label: 'Power', value: '24.5 PS' },
      { label: 'Fuel Tank', value: '12 liters' },
    ],
  },
  '6': {
    id: '6',
    brand: 'Royal Enfield',
    model: 'Classic 350',
    year: 2023,
    price: '₹1.85 Lakhs',
    mileage: '8,400 km',
    fuelType: 'Petrol',
    transmission: 'Manual',
    type: 'Cruiser Bike',
    location: 'Tirunelveli',
    owner: 'First Owner',
    images: ['/vehicles/classic350.jpg', '/vehicles/bike-1.jpg', '/vehicles/pulsar.jpg'],
    description: 'Iconic Royal Enfield Classic 350 in mint showroom condition. Original accessories, single owner, and comprehensive insurance cover.',
    features: ['J-Series Engine', 'Dual Channel ABS', 'Tripper Navigation Support', 'Spoke Alloy Wheels', 'Vintage Chrome Finish'],
    specifications: [
      { label: 'Engine', value: '349 cc' },
      { label: 'Transmission', value: '5-Speed Manual' },
      { label: 'Fuel Type', value: 'Petrol' },
      { label: 'Mileage', value: '36 km/l' },
      { label: 'Torque', value: '27 Nm' },
      { label: 'Fuel Tank', value: '13 liters' },
    ],
  },
  '7': {
    id: '7',
    brand: 'Tata',
    model: 'Nexon XM',
    year: 2022,
    price: '₹8.5 Lakhs',
    mileage: '26,000 km',
    fuelType: 'Petrol',
    transmission: 'Manual',
    type: 'Compact SUV',
    location: 'Tirunelveli',
    owner: 'First Owner',
    images: ['/vehicles/car-1.jpg', '/vehicles/car-2.jpg', '/vehicles/creta.jpg'],
    description: '5-star safety rated Tata Nexon compact SUV. Modern touchscreen, high ground clearance, clean maintenance records.',
    features: ['5-Star GNCAP Safety', 'Drive Modes', 'Electronic Stability Program', 'Harman Audio', 'Rear AC Vents'],
    specifications: [
      { label: 'Engine', value: '1199 cc Turbo' },
      { label: 'Transmission', value: '6-Speed Manual' },
      { label: 'Fuel Type', value: 'Petrol' },
      { label: 'Mileage', value: '17.4 km/l' },
      { label: 'Ground Clearance', value: '209 mm' },
      { label: 'Boot Space', value: '382 liters' },
    ],
  },
  '8': {
    id: '8',
    brand: 'Mahindra',
    model: 'XUV300 W8',
    year: 2022,
    price: '₹9.2 Lakhs',
    mileage: '29,000 km',
    fuelType: 'Diesel',
    transmission: 'Manual',
    type: 'Compact SUV',
    location: 'Tirunelveli',
    owner: 'First Owner',
    images: ['/vehicles/car-2.jpg', '/vehicles/car-1.jpg', '/vehicles/car-3.jpg'],
    description: 'Sporty Mahindra XUV300 diesel SUV with premium sunroof, alloy wheels, and complete authorized service history.',
    features: ['Electric Sunroof', 'Dual-Zone Climate Control', '7 Airbags', 'Front Parking Sensors', 'All-Wheel Disc Brakes'],
    specifications: [
      { label: 'Engine', value: '1497 cc Turbo Diesel' },
      { label: 'Transmission', value: '6-Speed Manual' },
      { label: 'Fuel Type', value: 'Diesel' },
      { label: 'Mileage', value: '20.1 km/l' },
      { label: 'Torque', value: '300 Nm' },
      { label: 'Boot Space', value: '257 liters' },
    ],
  },
  '9': {
    id: '9',
    brand: 'Toyota',
    model: 'Urban Cruiser',
    year: 2023,
    price: '₹9.8 Lakhs',
    mileage: '14,000 km',
    fuelType: 'Petrol',
    transmission: 'Automatic',
    type: 'Compact SUV',
    location: 'Tirunelveli',
    owner: 'First Owner',
    images: ['/vehicles/car-3.jpg', '/vehicles/creta.jpg', '/vehicles/city.jpg'],
    description: 'Reliable Toyota Urban Cruiser compact SUV. Smooth automatic drive, high fuel efficiency, and manufacturer warranty.',
    features: ['Smartplay Touchscreen', 'Automatic Climate Control', 'LED Projector Headlamps', 'Auto-Dimming IRVM', 'Cruise Control'],
    specifications: [
      { label: 'Engine', value: '1462 cc K-Series' },
      { label: 'Transmission', value: '4-Speed Automatic' },
      { label: 'Fuel Type', value: 'Petrol' },
      { label: 'Mileage', value: '18.7 km/l' },
      { label: 'Seating', value: '5 Passengers' },
      { label: 'Boot Space', value: '328 liters' },
    ],
  },
  '10': {
    id: '10',
    brand: 'Hyundai',
    model: 'Creta SX',
    year: 2023,
    price: '₹12.4 Lakhs',
    mileage: '15,000 km',
    fuelType: 'Petrol',
    transmission: 'Automatic',
    type: 'Mid-Size SUV',
    location: 'Tirunelveli',
    owner: 'First Owner',
    images: ['/vehicles/creta.jpg', '/vehicles/car-3.jpg', '/vehicles/car-1.jpg'],
    description: 'Flagship Hyundai Creta SX SUV. Panoramic sunroof, wireless charging, pristine leather interiors, and zero accident history.',
    features: ['Panoramic Sunroof', '10.25-inch Touchscreen', 'BlueLink Connected Car', 'Ventilated Front Seats', 'Electric Parking Brake'],
    specifications: [
      { label: 'Engine', value: '1497 cc MPi' },
      { label: 'Transmission', value: 'IVT Automatic' },
      { label: 'Fuel Type', value: 'Petrol' },
      { label: 'Mileage', value: '16.9 km/l' },
      { label: 'Seating', value: '5 Passengers' },
      { label: 'Boot Space', value: '433 liters' },
    ],
  },
  '11': {
    id: '11',
    brand: 'Yamaha',
    model: 'MT-15 V2',
    year: 2023,
    price: '₹1.45 Lakhs',
    mileage: '6,200 km',
    fuelType: 'Petrol',
    transmission: 'Manual',
    type: 'Naked Street Bike',
    location: 'Tirunelveli',
    owner: 'First Owner',
    images: ['/vehicles/bike-1.jpg', '/vehicles/pulsar.jpg', '/vehicles/classic350.jpg'],
    description: 'Dynamic Yamaha MT-15 V2 streetfighter bike. Liquid-cooled engine, single-channel ABS, pristine condition with zero scratch guarantee.',
    features: ['VVA Liquid-Cooled Engine', 'Upside Down (USD) Forks', 'Assist & Slipper Clutch', 'Traction Control System', 'LED Headlight'],
    specifications: [
      { label: 'Engine', value: '155 cc LC4V' },
      { label: 'Transmission', value: '6-Speed Manual' },
      { label: 'Fuel Type', value: 'Petrol' },
      { label: 'Mileage', value: '48 km/l' },
      { label: 'Power', value: '18.4 PS' },
      { label: 'Fuel Tank', value: '10 liters' },
    ],
  },
};

export default function VehicleDetailClient({ params }: { params: { id: string } }) {
  const vehicleId = params.id;
  const vehicle = VEHICLES_DATABASE[vehicleId] || VEHICLES_DATABASE['1'];
  const [selectedImage, setSelectedImage] = useState<string>(vehicle.images[0] || '/vehicles/swift.jpg');

  return (
    <div>
      {/* Breadcrumb */}
      <section className="bg-gray-50 border-b border-gray-200 py-4">
        <div className="container-padded">
          <Link href="/vehicles" className="flex items-center gap-2 text-teal hover:text-cyan transition-colors">
            <ChevronLeft size={20} />
            Back to Vehicles
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="container-padded max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              {/* Primary Image Viewport */}
              <div className="relative h-96 w-full rounded-2xl overflow-hidden bg-slate-900 mb-4 border border-slate-700 shadow-xl">
                <Image
                  src={selectedImage}
                  alt={`${vehicle.year} ${vehicle.brand} ${vehicle.model} - Pre-Owned ${vehicle.type}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute top-4 right-4 bg-teal text-white px-3 py-1 rounded-full text-xs font-bold uppercase shadow-md">
                  {vehicle.type}
                </div>
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-3 gap-3">
                {vehicle.images.map((imgSrc, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedImage(imgSrc)}
                    className={`relative h-24 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                      selectedImage === imgSrc
                        ? 'border-teal shadow-md ring-2 ring-teal/30 scale-[1.02]'
                        : 'border-gray-200 opacity-75 hover:opacity-100 hover:border-teal/50'
                    }`}
                  >
                    <Image
                      src={imgSrc}
                      alt={`${vehicle.brand} ${vehicle.model} photo view ${idx + 1}`}
                      fill
                      sizes="(max-width: 1024px) 33vw, 16vw"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-4xl font-bold text-navy mb-2">
                {vehicle.brand} {vehicle.model}
              </h1>
              <p className="text-gray-600 mb-6">{vehicle.year} • {vehicle.location}</p>

              <div className="mb-8 p-6 bg-gradient-to-r from-teal/10 to-cyan/10 rounded-xl border border-teal/20">
                <p className="text-4xl font-bold text-teal mb-2">{vehicle.price}</p>
                <p className="text-gray-600">Easy financing available</p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Fuel, label: 'Fuel Type', value: vehicle.fuelType },
                  { icon: Users, label: 'Owner', value: vehicle.owner },
                  { icon: Calendar, label: 'Year', value: vehicle.year },
                  { icon: Zap, label: 'Transmission', value: vehicle.transmission }
                ].map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <div key={idx} className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon size={18} className="text-teal" />
                        <span className="text-sm text-gray-600">{stat.label}</span>
                      </div>
                      <p className="font-semibold text-gray-800">{stat.value}</p>
                    </div>
                  );
                })}
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-3 flex-wrap">
                <Link
                  href={ROUTES.CAR_LOAN}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-teal to-cyan text-white font-semibold rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  Get Financing
                  <ChevronRight size={20} />
                </Link>
                <Link
                  href={ROUTES.CONTACT}
                  className="px-6 py-3 border-2 border-teal text-teal font-semibold rounded-lg hover:bg-teal/10 transition-colors"
                >
                  Schedule Test Drive
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Description */}
          <motion.div
            initial={false}
            viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            className="mb-12 p-8 bg-gray-50 rounded-xl"
          >
            <h2 className="text-2xl font-bold text-navy mb-4">About This Vehicle</h2>
            <p className="text-gray-700 text-lg mb-6">{vehicle.description}</p>
            <div className="flex gap-8">
              {[
                { icon: Award, label: 'Verified', desc: 'History checked' },
                { icon: Shield, label: 'Insured', desc: 'Roadside assistance' }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-teal to-cyan rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-navy">{item.label}</p>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={false}
            viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-navy mb-6">Features & Amenities</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {vehicle.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-teal rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Specifications */}
          <motion.div
            initial={false}
            viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-navy mb-6">Technical Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {vehicle.specifications.map((spec, idx) => (
                <div key={idx} className="flex justify-between p-4 border-b border-gray-200">
                  <span className="text-gray-600 font-semibold">{spec.label}</span>
                  <span className="text-navy font-bold">{spec.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={false}
            viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-teal/10 to-cyan/10 p-8 rounded-xl border border-teal/20"
          >
            <h2 className="text-2xl font-bold text-navy mb-6">Interested in This Vehicle?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <p className="text-gray-700 mb-6">
                  Contact us today to schedule a test drive, get financing options, or ask any questions about this vehicle.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone size={20} className="text-teal" />
                    <a href="tel:+919876543210" className="text-gray-700 hover:text-teal">
                      +91 98765 43210
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={20} className="text-teal" />
                    <a href="mailto:info@smassociate.com" className="text-gray-700 hover:text-teal">
                      info@smassociate.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <Link
                  href={ROUTES.CAR_LOAN}
                  className="w-full px-6 py-3 bg-gradient-to-r from-teal to-cyan text-white font-semibold rounded-lg hover:shadow-lg transition-all text-center block"
                >
                  Get Financing Options
                </Link>
                <Link
                  href={ROUTES.CONTACT}
                  className="w-full px-6 py-3 border-2 border-teal text-teal font-semibold rounded-lg hover:bg-teal/10 transition-colors text-center block"
                >
                  Schedule Test Drive
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Vehicles */}
      <section className="py-20 bg-gray-50">
        <div className="container-padded">
          <h2 className="text-3xl font-bold text-navy mb-12 text-center">Similar Vehicles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.values(VEHICLES_DATABASE)
              .filter(v => v.id !== vehicleId && (v.type === vehicle.type || v.images.length > 0))
              .slice(0, 3)
              .map((similar) => (
              <motion.div
                key={similar.id}
                initial={false}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-44 w-full overflow-hidden bg-slate-900">
                    <Image
                      src={similar.images[0]}
                      alt={`${similar.year} ${similar.brand} ${similar.model} - Pre-Owned ${similar.type}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-teal text-white px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase">
                      {similar.type}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-lg text-navy mb-1">{similar.brand} {similar.model}</h3>
                    <p className="text-teal font-extrabold text-lg mb-2">{similar.price}</p>
                    <p className="text-xs text-gray-500 mb-4">{similar.year} • {similar.fuelType} • {similar.location}</p>
                  </div>
                </div>
                <div className="p-5 pt-0">
                  <Link
                    href={`/vehicles/${similar.id}`}
                    className="w-full py-2 px-4 bg-gradient-to-r from-teal to-cyan text-white font-semibold rounded-lg hover:shadow-md transition-all flex items-center justify-center gap-1.5 text-sm text-center"
                  >
                    <span>View Details</span>
                    <ChevronRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection category="vehicleDetail" />
    </div>
  );
}
