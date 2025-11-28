import { destinations } from '@/lib/mockData';
import Image from 'next/image';
import Link from 'next/link';

export default function Destinations() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
          Beliebte Reiseziele
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Entdecken Sie die schönsten Kanäle und Wasserwege Frankreichs
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <Link
              key={destination.id}
              href={`/destinations/${destination.id}`}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {destination.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {destination.description}
                </p>
                <span className="text-primary-600 font-semibold group-hover:underline">
                  Mehr erfahren →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

