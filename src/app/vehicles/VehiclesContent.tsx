'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Car, Search, MapPin, Fuel, Calendar } from 'lucide-react';
import Link from 'next/link';
import { ROUTES } from '@/lib/constants';
import Testimonials from '@/components/sections/Testimonials';
import VaultContactSection from '@/components/sections/VaultContactSection';
import FAQSection from '@/components/sections/FAQSection';

const vehicles = [
  {
    id: 1,
    brand: 'Maruti Suzuki',
    model: 'Swift ZXi',
    year: 2022,
    price: '₹5.5 Lakhs',
    fuelType: 'Petrol',
    transmission: 'Manual',
    type: 'car',
    location: 'Tirunelveli',
    image: '/vehicles/swift.jpg'
  },
  {
    id: 2,
    brand: 'Hyundai',
    model: 'i20 Asta',
    year: 2021,
    price: '₹6.2 Lakhs',
    fuelType: 'Diesel',
    transmission: 'Automatic',
    type: 'car',
    location: 'Tirunelveli',
    image: '/vehicles/i20.jpg'
  },
  {
    id: 3,
    brand: 'Honda',
    model: 'City V',
    year: 2023,
    price: '₹9.5 Lakhs',
    fuelType: 'Petrol',
    transmission: 'Automatic',
    type: 'car',
    location: 'Tirunelveli',
    image: '/vehicles/city.jpg'
  },
  {
    id: 4,
    brand: 'Honda',
    model: 'Activa 6G',
    year: 2023,
    price: '₹75,000',
    fuelType: 'Petrol',
    transmission: 'Automatic',
    type: 'bike',
    location: 'Tirunelveli',
    image: '/vehicles/activa.jpg'
  },
  {
    id: 5,
    brand: 'Bajaj',
    model: 'Pulsar NS200',
    year: 2022,
    price: '₹1.15 Lakhs',
    fuelType: 'Petrol',
    transmission: 'Manual',
    type: 'bike',
    location: 'Tirunelveli',
    image: '/vehicles/pulsar.jpg'
  },
  {
    id: 6,
    brand: 'Royal Enfield',
    model: 'Classic 350',
    year: 2023,
    price: '₹1.85 Lakhs',
    fuelType: 'Petrol',
    transmission: 'Manual',
    type: 'bike',
    location: 'Tirunelveli',
    image: '/vehicles/classic350.jpg'
  },
  {
    id: 7,
    brand: 'Tata',
    model: 'Nexon XM',
    year: 2022,
    price: '₹8.5 Lakhs',
    fuelType: 'Petrol',
    transmission: 'Manual',
    type: 'car',
    location: 'Tirunelveli',
    image: '/vehicles/car-1.jpg'
  },
  {
    id: 8,
    brand: 'Mahindra',
    model: 'XUV300 W8',
    year: 2022,
    price: '₹9.2 Lakhs',
    fuelType: 'Diesel',
    transmission: 'Manual',
    type: 'car',
    location: 'Tirunelveli',
    image: '/vehicles/car-2.jpg'
  },
  {
    id: 9,
    brand: 'Toyota',
    model: 'Urban Cruiser',
    year: 2023,
    price: '₹9.8 Lakhs',
    fuelType: 'Petrol',
    transmission: 'Automatic',
    type: 'car',
    location: 'Tirunelveli',
    image: '/vehicles/car-3.jpg'
  },
  {
    id: 10,
    brand: 'Hyundai',
    model: 'Creta SX',
    year: 2023,
    price: '₹12.4 Lakhs',
    fuelType: 'Petrol',
    transmission: 'Automatic',
    type: 'car',
    location: 'Tirunelveli',
    image: '/vehicles/creta.jpg'
  },
  {
    id: 11,
    brand: 'Yamaha',
    model: 'MT-15 V2',
    year: 2023,
    price: '₹1.45 Lakhs',
    fuelType: 'Petrol',
    transmission: 'Manual',
    type: 'bike',
    location: 'Tirunelveli',
    image: '/vehicles/bike-1.jpg'
  }
];

function VehiclesContentInner() {
  const searchParams = useSearchParams();
  const initialType = searchParams.get('type') || 'all';

  const [selectedType, setSelectedType] = useState(initialType);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredVehicles = useMemo(() => {
    return vehicles.filter(v => {
      const matchesType = selectedType === 'all' || v.type === selectedType;
      const matchesSearch = v.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            v.model.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesType && matchesSearch;
    });
  }, [selectedType, searchQuery]);

  return (
    <>
      {/* Search & Filter Bar */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container-padded">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search by brand or model..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-teal"
              />
            </div>

            {/* Type Filter Buttons */}
            <div className="flex gap-2 w-full md:w-auto">
              {['all', 'car', 'bike'].map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-6 py-3 rounded-lg font-semibold capitalize transition-all ${
                    selectedType === type
                      ? 'bg-gradient-to-r from-teal to-cyan text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {type === 'all' ? 'All Vehicles' : `${type}s`}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container-padded">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-navy">
              Available Vehicles ({filteredVehicles.length})
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVehicles.map((vehicle, idx) => (
              <motion.div
                key={vehicle.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow group"
              >
                <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={vehicle.image}
                    alt={`${vehicle.brand} ${vehicle.model} - Quality Verified Pre-Owned Vehicle`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-teal text-white px-3 py-1 rounded-full text-xs font-semibold uppercase">
                    {vehicle.type}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-navy">
                      {vehicle.brand} {vehicle.model}
                    </h3>
                    <span className="text-xl font-bold text-teal">{vehicle.price}</span>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar size={16} />
                      {vehicle.year}
                    </span>
                    <span className="flex items-center gap-1">
                      <Fuel size={16} />
                      {vehicle.fuelType}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={16} />
                      {vehicle.location}
                    </span>
                  </div>

                  <Link
                    href={`${ROUTES.CONTACT}?vehicle=${encodeURIComponent(`${vehicle.brand} ${vehicle.model}`)}`}
                    className="block w-full text-center py-2.5 bg-gradient-to-r from-teal to-cyan text-white font-semibold rounded-lg hover:shadow-md transition-all"
                  >
                    Inquire Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredVehicles.length === 0 && (
            <div className="text-center py-16">
              <Car size={48} className="mx-auto text-gray-300 mb-4" />
              <h3 className="text-xl font-bold text-gray-700 mb-2">No Vehicles Found</h3>
              <p className="text-gray-500">Try adjusting your search criteria or browse all vehicles.</p>
            </div>
          )}
        </div>
      </section>

      {/* Vaultline Vehicles Contact Section */}
      <VaultContactSection
        theme="rose-pink"
        brandTag="SM Associate · Premium Mobility Marketplace"
        title={
          <>
            Find your ideal vehicle with <em>curated precision</em>.
          </>
        }
        subtitle="Every car and motorcycle undergoes our rigorous 150-point quality check, certified documentation verification, and warranty coverage."
        stats={[
          { label: 'Verified Listings', target: 500, suffix: '+' },
          { label: 'Inspection Points', target: '150-Point', isStatic: true },
          { label: 'Customer Satisfaction', target: '99%', isStatic: true },
        ]}
        formEyebrow="Vehicle Finder & Custom Sourcing"
        formTitle="Looking for a specific model or budget?"
        formSubtitle="Tell us your preferred make, model, fuel type, and price range — we'll locate and verify the best available vehicle for you."
        reasonLabel="Mobility Requirement"
        reasonOptions={[
          { value: 'buy_car', label: 'Buy Pre-Owned Car' },
          { value: 'buy_bike', label: 'Buy Pre-Owned Motorcycle' },
          { value: 'custom_source', label: 'Custom Vehicle Sourcing' },
          { value: 'test_drive', label: 'Book Inspection / Test Drive' },
        ]}
        defaultReason="buy_car"
        valueLabel="Budget / Purchase Price"
        valuePlaceholder="e.g. ₹6,00,000"
        phoneLabel="Phone / WhatsApp Number"
        phonePlaceholder="+91 97902 19874"
        messagePlaceholder="Specify model preferences (e.g. Swift, City, Classic 350), fuel type, maximum age, or location..."
        submitButtonText="Submit Vehicle Sourcing Request"
      />

      {/* FAQ Section */}
      <FAQSection category="vehicles" />

      <Testimonials />
    </>
  );
}

export default function VehiclesContent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VehiclesContentInner />
    </Suspense>
  );
}
