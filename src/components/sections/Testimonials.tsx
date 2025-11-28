import { testimonials } from '@/lib/mockData';
import { Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-16 bg-primary-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
          Was unsere Kunden sagen
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Lesen Sie die Erfahrungen unserer zufriedenen Kunden
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="text-accent-500 fill-accent-500"
                    size={20}
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-semibold text-gray-800">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-600">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

