import Image from 'next/image';
import { Fuel, Calendar, MapPin, ChevronRight, ShieldCheck, Zap } from 'lucide-react';
import Link from 'next/link';
import { ROUTES } from '@/lib/constants';

const featuredVehicles = [
  {
    id: 1,
    brand: 'Maruti Suzuki',
    model: 'Swift ZXi',
    year: 2022,
    price: '₹5.5 Lakhs',
    fuelType: 'Petrol',
    transmission: 'Manual',
    location: 'Tirunelveli',
    badge: 'Certified',
    tagColor: 'from-teal to-cyan',
    image: '/vehicles/swift.jpg',
  },
  {
    id: 2,
    brand: 'Hyundai',
    model: 'i20 Asta',
    year: 2021,
    price: '₹6.2 Lakhs',
    fuelType: 'Diesel',
    transmission: 'Automatic',
    location: 'Tirunelveli',
    badge: 'Popular',
    tagColor: 'from-blue-600 to-indigo-600',
    image: '/vehicles/i20.jpg',
  },
  {
    id: 3,
    brand: 'Honda',
    model: 'City V',
    year: 2023,
    price: '₹9.5 Lakhs',
    fuelType: 'Petrol',
    transmission: 'Automatic',
    location: 'Tirunelveli',
    badge: 'Top Rated',
    tagColor: 'from-amber-500 to-orange-500',
    image: '/vehicles/city.jpg',
  },
];

export default function FeaturedVehicles() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal/10 text-teal text-xs font-bold uppercase tracking-wider mb-3">
              <Zap size={14} aria-hidden="true" /> Quality Assured
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy">Featured Pre-Owned Vehicles</h2>
            <p className="text-gray-600 mt-2">Curated selection of premium vehicles with 100% verified inspection report</p>
          </div>

          <div className="mt-4 md:mt-0">
            <Link href={ROUTES.VEHICLES} className="inline-flex items-center gap-2 font-bold text-teal hover:text-cyan transition-colors">
              <span>View All Inventory</span>
              <ChevronRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {featuredVehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-100 flex flex-col justify-between group"
            >
              <div>
                {/* Vehicle Image Container */}
                <div className="h-52 w-full relative overflow-hidden bg-slate-900">
                  <Image
                    src={vehicle.image}
                    alt={`${vehicle.year} ${vehicle.brand} ${vehicle.model} - Quality Verified Pre-Owned Vehicle`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex justify-between items-center z-10">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${vehicle.tagColor} shadow-md`}>
                      {vehicle.badge}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-white font-semibold bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-full border border-teal-500/40">
                      <ShieldCheck size={14} className="text-teal" aria-hidden="true" /> Verified
                    </span>
                  </div>

                  {/* Bottom Image Title Overlay */}
                  <div className="absolute bottom-3 left-4 right-4 z-10">
                    <span className="text-teal text-xs font-bold uppercase tracking-wider block">
                      {vehicle.brand}
                    </span>
                    <h3 className="text-white text-lg font-bold leading-tight drop-shadow-sm">{vehicle.model}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-2xl font-black text-teal mb-4">{vehicle.price}</p>

                  <div className="grid grid-cols-3 gap-2 py-3 border-y border-gray-100 text-xs text-gray-600 mb-6">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={15} className="text-teal" aria-hidden="true" />
                      <span>{vehicle.year}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Fuel size={15} className="text-teal" aria-hidden="true" />
                      <span>{vehicle.fuelType}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin size={15} className="text-teal" aria-hidden="true" />
                      <span>{vehicle.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6">
                <Link href={`/vehicles/${vehicle.id}`} className="w-full py-2.5 px-4 bg-gradient-to-r from-teal to-cyan text-white font-semibold rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2 text-sm text-center">
                  <span>View Full Details</span>
                  <ChevronRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
