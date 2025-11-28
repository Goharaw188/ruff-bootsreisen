import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Ruff Bootsreisen</h3>
            <p className="mb-4">
              Ihr Spezialist für Hausbootferien in Frankreich. Entdecken Sie die schönsten Kanäle und Wasserwege.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Schnellzugriff</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Startseite
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="hover:text-white transition-colors">
                  Reiseziele
                </Link>
              </li>
              <li>
                <Link href="/boats" className="hover:text-white transition-colors">
                  Boote
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Über uns
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Service</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  AGB
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Phone size={18} />
                <span>+49 (0) 123 456 789</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} />
                <span>info@ruff-bootsreisen.de</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="mt-1" />
                <span>Musterstraße 123<br />12345 Musterstadt</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Ruff Bootsreisen. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}

