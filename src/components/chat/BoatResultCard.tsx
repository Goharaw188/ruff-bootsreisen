import { BoatResult } from '@/lib/types';
import { MapPin, Users, Calendar, Euro } from 'lucide-react';

interface BoatResultCardProps {
  boat: BoatResult;
}

export default function BoatResultCard({ boat }: BoatResultCardProps) {
  return (
    <div className="bg-white border-2 border-primary-200 rounded-lg p-4 shadow-md">
      <div className="flex items-start justify-between mb-3">
        <h4 className="font-bold text-lg text-gray-800">{boat.boatName}</h4>
        {boat.discount > 0 && (
          <span className="bg-accent-500 text-white text-xs font-semibold px-2 py-1 rounded">
            -{boat.discount}€
          </span>
        )}
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex items-center text-sm text-gray-600">
          <MapPin size={16} className="mr-2 text-primary-600" />
          <span>Ab/bis {boat.departurePort}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <Calendar size={16} className="mr-2 text-primary-600" />
          <span>
            {boat.startDate} – {boat.endDate}
          </span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <Users size={16} className="mr-2 text-primary-600" />
          <span>{boat.maxGuests} Personen • {boat.cabins}</span>
        </div>
      </div>

      <div className="border-t pt-3">
        <div className="flex items-center justify-between">
          <div>
            {boat.priceGross > boat.priceNet && (
              <p className="text-xs text-gray-500 line-through">
                {boat.priceGross.toLocaleString('de-DE')}€
              </p>
            )}
            <p className="text-xl font-bold text-primary-600 flex items-center">
              <Euro size={20} />
              {boat.priceNet.toLocaleString('de-DE')}
              {boat.discount > 0 && (
                <span className="text-sm text-gray-500 ml-2">
                  (Rabatt: {boat.discount}€)
                </span>
              )}
            </p>
            <p className="text-xs text-gray-500 mt-1">+ Nebenkosten</p>
          </div>
        </div>
      </div>
    </div>
  );
}

