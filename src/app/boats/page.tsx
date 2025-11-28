import { boats } from '@/lib/mockData';
import Image from 'next/image';

export default function BoatsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">Unsere Boote</h1>
      <p className="text-gray-600 mb-12 max-w-2xl">
        Wählen Sie aus unserer vielfältigen Flotte von komfortablen Hausbooten
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {boats.map((boat) => (
          <div
            key={boat.id}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
          >
            <div className="relative h-48">
              <Image
                src={boat.image}
                alt={boat.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
              <div className="absolute top-4 right-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  boat.range === 'Premium' ? 'bg-accent-500 text-white' :
                  boat.range === 'Classic' ? 'bg-primary-600 text-white' :
                  'bg-gray-600 text-white'
                }`}>
                  {boat.range}
                </span>
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2">{boat.name}</h2>
              <p className="text-gray-600 text-sm mb-4">{boat.description}</p>
              <div className="flex items-center justify-between text-sm text-gray-700">
                <span>{boat.cabins} Kabinen</span>
                <span>Bis zu {boat.maxGuests} Personen</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

