import { Promotion, Destination, Boat } from './types';

export const promotions: Promotion[] = [
  {
    id: '1',
    title: 'Black Friday',
    image: 'https://www.lescanalous.com/wp-content/uploads/2025/11/Carburant-Offert-UK.png',
    link: '/discount/black-friday',
    alt: 'Black Friday Promotion',
  },
  {
    id: '2',
    title: 'One-way Cruises',
    image: 'https://www.lescanalous.com/wp-content/uploads/2025/07/Allers-Simples-UK.jpg',
    link: '/discount/one-way',
    alt: 'One-way cruises',
  },
  {
    id: '3',
    title: '2026 Catalogue',
    image: 'https://www.lescanalous.com/wp-content/uploads/2025/10/Catalogue-2026UK.png',
    link: '/discount/catalogue',
    alt: 'Discover our catalogue',
  },
  {
    id: '4',
    title: 'Paris Nautic Show',
    image: 'https://www.lescanalous.com/wp-content/uploads/2025/10/Paris-Nautic-Show-UK.png',
    link: '/events/paris-nautic',
    alt: 'Paris Nautic Show',
  },
];

export const destinations: Destination[] = [
  {
    id: '1',
    name: 'Bourgogne',
    nameEn: 'Burgundy',
    description: 'Entdecken Sie die malerischen Kanäle der Bourgogne',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    zoneId: 1,
  },
  {
    id: '2',
    name: 'Canal du Midi',
    nameEn: 'Canal du Midi',
    description: 'Der berühmte Kanal im Süden Frankreichs',
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800',
    zoneId: 6,
  },
  {
    id: '3',
    name: 'Loire',
    nameEn: 'Loire',
    description: 'Majestätische Schlösser entlang der Loire',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800',
    zoneId: 2,
  },
  {
    id: '4',
    name: 'Champagne',
    nameEn: 'Champagne',
    description: 'Weinregion mit historischen Kanälen',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800',
    zoneId: 3,
  },
];

export const boats: Boat[] = [
  {
    id: '1',
    name: 'Tarpon 37 DP',
    range: 'Premium',
    cabins: 3,
    maxGuests: 9,
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800',
    description: 'Luxuriöses Hausboot mit modernem Design',
  },
  {
    id: '2',
    name: 'Triton 860 Fly',
    range: 'Classic',
    cabins: 1,
    maxGuests: 5,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    description: 'Perfekt für kleine Gruppen und Paare',
  },
  {
    id: '3',
    name: 'Nicols 900',
    range: 'Classic',
    cabins: 2,
    maxGuests: 6,
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800',
    description: 'Komfortables Boot für Familien',
  },
  {
    id: '4',
    name: 'Linssen Yacht 36',
    range: 'Classic',
    cabins: 2,
    maxGuests: 6,
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800',
    description: 'Elegantes Yacht-Design mit allen Annehmlichkeiten',
  },
];

export const testimonials = [
  {
    id: '1',
    name: 'Michael Schmidt',
    location: 'München',
    rating: 5,
    text: 'Eine wunderbare Erfahrung! Das Boot war perfekt ausgestattet und die Route durch Burgund war atemberaubend.',
  },
  {
    id: '2',
    name: 'Sarah Müller',
    location: 'Berlin',
    rating: 5,
    text: 'Der Service war ausgezeichnet und die Buchung war sehr einfach. Wir können es nur weiterempfehlen!',
  },
  {
    id: '3',
    name: 'Thomas Weber',
    location: 'Hamburg',
    rating: 5,
    text: 'Perfekter Urlaub für die ganze Familie. Die Kinder haben es geliebt!',
  },
];

export const benefits = [
  {
    id: '1',
    title: 'Kein Bootsführerschein erforderlich',
    description: 'Alle unsere Boote können ohne Führerschein gefahren werden',
    icon: '🚤',
  },
  {
    id: '2',
    title: 'Beste Preise garantiert',
    description: 'Wir bieten die besten Preise für Hausbootferien in Frankreich',
    icon: '💰',
  },
  {
    id: '3',
    title: 'Experten-Support',
    description: 'Unser Team steht Ihnen vor und während der Reise zur Verfügung',
    icon: '👨‍✈️',
  },
  {
    id: '4',
    title: 'Flexible Buchung',
    description: 'Einfache Stornierung und Umbuchung bis 30 Tage vor Abreise',
    icon: '📅',
  },
];

