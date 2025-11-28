'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-primary-700">
              Ruff Bootsreisen
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary-600 font-medium">
              Startseite
            </Link>
            <Link href="/destinations" className="text-gray-700 hover:text-primary-600 font-medium">
              Reiseziele
            </Link>
            <Link href="/boats" className="text-gray-700 hover:text-primary-600 font-medium">
              Boote
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary-600 font-medium">
              Über uns
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary-600 font-medium">
              Kontakt
            </Link>
            <button
              onClick={() => {
                const chatWidget = document.getElementById('chat-widget-trigger');
                if (chatWidget) {
                  chatWidget.click();
                }
              }}
              className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors font-medium"
            >
              Boot suchen
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <Link href="/" className="block text-gray-700 hover:text-primary-600 font-medium">
              Startseite
            </Link>
            <Link href="/destinations" className="block text-gray-700 hover:text-primary-600 font-medium">
              Reiseziele
            </Link>
            <Link href="/boats" className="block text-gray-700 hover:text-primary-600 font-medium">
              Boote
            </Link>
            <Link href="/about" className="block text-gray-700 hover:text-primary-600 font-medium">
              Über uns
            </Link>
            <Link href="/contact" className="block text-gray-700 hover:text-primary-600 font-medium">
              Kontakt
            </Link>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                const chatWidget = document.getElementById('chat-widget-trigger');
                if (chatWidget) {
                  chatWidget.click();
                }
              }}
              className="w-full bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors font-medium"
            >
              Boot suchen
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}

