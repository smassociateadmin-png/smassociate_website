import type { Metadata } from 'next';
import { generateProductSchema } from '@/lib/schema';
import VehicleDetailClient from './VehicleDetailClient';

// Sample vehicle data
const VEHICLES = {
  '1': {
    id: '1',
    brand: 'Maruti Suzuki',
    model: 'Swift ZXi',
    year: 2022,
    price: '₹5.5 Lakhs',
    image: '/vehicles/swift.jpg',
    gallery: ['/vehicles/swift.jpg', '/vehicles/car-1.jpg', '/vehicles/car-3.jpg'],
    description: 'Premium pre-owned Maruti Swift ZXi with excellent fuel efficiency. Single owner vehicle with full service history and verified paperwork.',
  },
  '2': {
    id: '2',
    brand: 'Hyundai',
    model: 'i20 Asta',
    year: 2021,
    price: '₹6.2 Lakhs',
    image: '/vehicles/i20.jpg',
    gallery: ['/vehicles/i20.jpg', '/vehicles/car-2.jpg', '/vehicles/car-1.jpg'],
    description: 'Feature-loaded Hyundai i20 Asta Diesel. Smooth automatic transmission, certified battery & tire health, no accidental records.',
  },
  '3': {
    id: '3',
    brand: 'Honda',
    model: 'City V',
    year: 2023,
    price: '₹9.5 Lakhs',
    image: '/vehicles/city.jpg',
    gallery: ['/vehicles/city.jpg', '/vehicles/car-3.jpg', '/vehicles/car-2.jpg'],
    description: 'Well-maintained pre-owned Honda City in pristine condition. Single owner vehicle with full authorized service history. All documents clear.',
  },
  '4': {
    id: '4',
    brand: 'Honda',
    model: 'Activa 6G',
    year: 2023,
    price: '₹75,000',
    image: '/vehicles/activa.jpg',
    gallery: ['/vehicles/activa.jpg', '/vehicles/pulsar.jpg', '/vehicles/classic350.jpg'],
    description: 'Top-selling Honda Activa 6G automatic scooter in immaculate condition with valid insurance and complete warranty papers.',
  },
  '5': {
    id: '5',
    brand: 'Bajaj',
    model: 'Pulsar NS200',
    year: 2022,
    price: '₹1.15 Lakhs',
    image: '/vehicles/pulsar.jpg',
    gallery: ['/vehicles/pulsar.jpg', '/vehicles/bike-1.jpg', '/vehicles/classic350.jpg'],
    description: 'Powerful Bajaj Pulsar NS200 sport motorcycle. Low mileage, single owner, clear engine diagnostics and road assistance included.',
  },
  '6': {
    id: '6',
    brand: 'Royal Enfield',
    model: 'Classic 350',
    year: 2023,
    price: '₹1.85 Lakhs',
    image: '/vehicles/classic350.jpg',
    gallery: ['/vehicles/classic350.jpg', '/vehicles/bike-1.jpg', '/vehicles/pulsar.jpg'],
    description: 'Iconic Royal Enfield Classic 350 in mint showroom condition. Original accessories, single owner, and comprehensive insurance cover.',
  },
  '7': {
    id: '7',
    brand: 'Tata',
    model: 'Nexon XM',
    year: 2022,
    price: '₹8.5 Lakhs',
    image: '/vehicles/car-1.jpg',
    gallery: ['/vehicles/car-1.jpg', '/vehicles/car-2.jpg', '/vehicles/creta.jpg'],
    description: '5-star safety rated Tata Nexon compact SUV. Modern touchscreen, high ground clearance, clean maintenance records.',
  },
  '8': {
    id: '8',
    brand: 'Mahindra',
    model: 'XUV300 W8',
    year: 2022,
    price: '₹9.2 Lakhs',
    image: '/vehicles/car-2.jpg',
    gallery: ['/vehicles/car-2.jpg', '/vehicles/car-1.jpg', '/vehicles/car-3.jpg'],
    description: 'Sporty Mahindra XUV300 diesel SUV with premium sunroof, alloy wheels, and complete authorized service history.',
  },
  '9': {
    id: '9',
    brand: 'Toyota',
    model: 'Urban Cruiser',
    year: 2023,
    price: '₹9.8 Lakhs',
    image: '/vehicles/car-3.jpg',
    gallery: ['/vehicles/car-3.jpg', '/vehicles/creta.jpg', '/vehicles/city.jpg'],
    description: 'Reliable Toyota Urban Cruiser compact SUV. Smooth automatic drive, high fuel efficiency, and manufacturer warranty.',
  },
  '10': {
    id: '10',
    brand: 'Hyundai',
    model: 'Creta SX',
    year: 2023,
    price: '₹12.4 Lakhs',
    image: '/vehicles/creta.jpg',
    gallery: ['/vehicles/creta.jpg', '/vehicles/car-3.jpg', '/vehicles/car-1.jpg'],
    description: 'Flagship Hyundai Creta SX SUV. Panoramic sunroof, wireless charging, pristine leather interiors, and zero accident history.',
  },
  '11': {
    id: '11',
    brand: 'Yamaha',
    model: 'MT-15 V2',
    year: 2023,
    price: '₹1.45 Lakhs',
    image: '/vehicles/bike-1.jpg',
    gallery: ['/vehicles/bike-1.jpg', '/vehicles/pulsar.jpg', '/vehicles/classic350.jpg'],
    description: 'Dynamic Yamaha MT-15 V2 streetfighter bike. Liquid-cooled engine, single-channel ABS, pristine condition with zero scratch guarantee.',
  },
  'honda-city-2023': {
    id: 'honda-city-2023',
    brand: 'Honda',
    model: 'City V',
    year: 2023,
    price: '₹9.5 Lakhs',
    image: '/vehicles/city.jpg',
    gallery: ['/vehicles/city.jpg', '/vehicles/car-3.jpg', '/vehicles/car-2.jpg'],
    description: 'Premium Honda City 2023 model with all latest features and warranty coverage.',
  },
};

export function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
    { id: '7' },
    { id: '8' },
    { id: '9' },
    { id: '10' },
    { id: '11' },
    { id: 'honda-city-2023' },
  ];
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const vehicle = VEHICLES[params.id as keyof typeof VEHICLES];

  if (!vehicle) {
    return {
      title: 'Vehicle Not Found - SM Associate',
      description: 'The vehicle listing you are looking for could not be found.',
    };
  }

  const baseUrl = 'https://smassociate.com';
  const url = `${baseUrl}/vehicles/${params.id}`;
  
  const title = `${vehicle.year} ${vehicle.brand} ${vehicle.model} - ${vehicle.price} | Pre-owned Car on Sale`;
  const description = `${vehicle.year} ${vehicle.brand} ${vehicle.model} for ${vehicle.price}. ${vehicle.description} Browse quality pre-owned vehicles with financing options in Tirunelveli.`;

  return {
    title: title,
    description: description,
    keywords: `${vehicle.brand} ${vehicle.model}, pre-owned car, used car Tirunelveli, car for sale, ${vehicle.year} car, vehicle financing`,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: title,
      description: description,
      url: url,
      type: 'website',
      images: [
        {
          url: `${baseUrl}/og-vehicle-default.jpg`,
          width: 1200,
          height: 630,
          alt: `${vehicle.brand} ${vehicle.model}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: [`${baseUrl}/og-vehicle-default.jpg`],
    },
  };
}

export default function VehicleDetailPage({ params }: { params: { id: string } }) {
  const vehicle = VEHICLES[params.id as keyof typeof VEHICLES];
  
  // Generate Product schema for structured data
  const productSchema = vehicle ? generateProductSchema(vehicle) : null;

  return (
    <>
      {productSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
      )}
      <VehicleDetailClient params={params} />
    </>
  );
}
