'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    alert('Vielen Dank für Ihre Nachricht! (Dies ist eine Mock-Funktion)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Kontakt</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Kontaktinformationen</h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <Phone className="text-primary-600 mt-1" size={24} />
              <div>
                <h3 className="font-semibold text-gray-800">Telefon</h3>
                <p className="text-gray-600">+49 (0) 123 456 789</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Mail className="text-primary-600 mt-1" size={24} />
              <div>
                <h3 className="font-semibold text-gray-800">E-Mail</h3>
                <p className="text-gray-600">info@ruff-bootsreisen.de</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MapPin className="text-primary-600 mt-1" size={24} />
              <div>
                <h3 className="font-semibold text-gray-800">Adresse</h3>
                <p className="text-gray-600">
                  Musterstraße 123<br />
                  12345 Musterstadt<br />
                  Deutschland
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Nachricht senden</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                E-Mail
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Nachricht
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
            >
              <Send size={20} />
              <span>Nachricht senden</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

