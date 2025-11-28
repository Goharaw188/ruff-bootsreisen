import { destinations } from '@/lib/mockData';
import Image from 'next/image';
import Link from 'next/link';

export default function DestinationsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">Unsere Reiseziele</h1>
      <p className="text-gray-600 mb-12 max-w-2xl">
        Entdecken Sie die vielfältigen Kanäle und Wasserwege Frankreichs
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((destination) => (
          <Link
            key={destination.id}
            href={`/destinations/${destination.id}`}
            className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
          >
            <div className="relative h-64">
              <Image
                src={destination.image}
                alt={destination.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {destination.name}
              </h2>
              <p className="text-gray-600">{destination.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

