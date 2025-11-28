'use client';

export default function Hero() {
  const scrollToSearch = () => {
    const searchSection = document.getElementById('quick-search');
    if (searchSection) {
      searchSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Open chat widget
      const chatWidget = document.getElementById('chat-widget-trigger');
      if (chatWidget) {
        chatWidget.click();
      }
    }
  };

  return (
    <section className="relative h-[600px] md:h-[700px] bg-gradient-to-r from-primary-600 to-primary-800">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920)',
        }}
      />
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hausbootferien in Frankreich
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Entdecken Sie die schönsten Wasserwege Frankreichs mit unseren komfortablen Hausbooten. 
            Kein Führerschein erforderlich.
          </p>
          <button
            onClick={scrollToSearch}
            className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg"
          >
            Jetzt Boot suchen
          </button>
        </div>
      </div>
    </section>
  );
}

