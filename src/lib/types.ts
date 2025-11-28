export interface Promotion {
  id: string;
  title: string;
  image: string;
  link: string;
  alt: string;
}

export interface Destination {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  image: string;
  zoneId: number;
}

export interface Boat {
  id: string;
  name: string;
  range: 'Classic' | 'Premium' | 'Simply';
  cabins: number;
  maxGuests: number;
  image: string;
  description: string;
}

export interface ChatMessage {
  id: string;
  type: 'user' | 'bot' | 'boat-result';
  content: string;
  timestamp: Date;
  boatData?: BoatResult;
}

export interface BoatResult {
  boatName: string;
  departurePort: string;
  startDate: string;
  endDate: string;
  priceGross: number;
  priceNet: number;
  discount: number;
  maxGuests: number;
  cabins: string;
}

