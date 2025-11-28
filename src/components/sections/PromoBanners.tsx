import { promotions } from '@/lib/mockData';
import Image from 'next/image';
import Link from 'next/link';

export default function PromoBanners() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Aktuelle Angebote
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {promotions.map((promo) => (
            <Link
              key={promo.id}
              href={promo.link}
              className="block group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative w-full h-64">
                <Image
                  src={promo.image}
                  alt={promo.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{promo.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

