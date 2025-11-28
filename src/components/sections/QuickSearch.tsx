'use client';

import { useState } from 'react';
import { Calendar, Users, MapPin, Search } from 'lucide-react';

export default function QuickSearch() {
  const [destination, setDestination] = useState('');
  const [arrivalDate, setArrivalDate] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [guests, setGuests] = useState(2);

  const handleSearch = () => {
    // Open chat widget with search parameters
    const chatWidget = document.getElementById('chat-widget-trigger');
    if (chatWidget) {
      chatWidget.click();
      
      // Send initial message to chat after a short delay
      setTimeout(() => {
        const chatInput = document.getElementById('chat-input') as HTMLInputElement;
        if (chatInput) {
          let message = '';
          if (destination) message += `Reiseziel: ${destination} `;
          if (arrivalDate) message += `Anreise: ${arrivalDate} `;
          if (departureDate) message += `Abreise: ${departureDate} `;
          if (guests) message += `Gäste: ${guests}`;
          
          if (message) {
            chatInput.value = message.trim();
            const sendButton = document.getElementById('chat-send-button');
            if (sendButton) {
              sendButton.click();
            }
          }
        }
      }, 500);
    }
  };

  return (
    <section id="quick-search" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Finden Sie Ihr perfektes Boot
        </h2>
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Destination */}
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="">Reiseziel wählen</option>
                <option value="Burgund">Burgund</option>
                <option value="Canal du Midi">Canal du Midi</option>
                <option value="Loire">Loire</option>
                <option value="Champagne">Champagne</option>
              </select>
            </div>

            {/* Arrival Date */}
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="date"
                value={arrivalDate}
                onChange={(e) => setArrivalDate(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Anreisedatum"
              />
            </div>

            {/* Departure Date */}
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="date"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Abreisedatum"
              />
            </div>

            {/* Guests */}
            <div className="relative">
              <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="number"
                value={guests}
                onChange={(e) => setGuests(parseInt(e.target.value) || 2)}
                min="1"
                max="12"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Anzahl Gäste"
              />
            </div>
          </div>
          <button
            onClick={handleSearch}
            className="w-full mt-6 bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
          >
            <Search size={20} />
            <span>Boot suchen</span>
          </button>
        </div>
      </div>
    </section>
  );
}

