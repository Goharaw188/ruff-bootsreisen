import { benefits } from '@/lib/mockData';

export default function Benefits() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
          Warum Ruff Bootsreisen?
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Wir bieten Ihnen die beste Erfahrung für Ihren Hausbooturlaub
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

