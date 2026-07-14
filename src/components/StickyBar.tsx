import { Phone, UtensilsCrossed, MapPin } from 'lucide-react';
import { business } from '../config/business';
import type { Route } from '../router';

interface StickyBarProps {
  onNavigate: (r: Route) => void;
}

export default function StickyBar({ onNavigate }: StickyBarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden">
      <div className="flex border-t border-espresso-200 bg-cream-50/95 backdrop-blur-md shadow-[0_-2px_12px_0_rgba(50,37,25,0.08)]">
        <button
          onClick={() => onNavigate('menu')}
          className="flex flex-1 flex-col items-center gap-0.5 py-2.5 text-espresso-600 transition-colors hover:text-espresso-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-400"
          aria-label="View menu"
        >
          <UtensilsCrossed size={20} />
          <span className="text-[10px] uppercase tracking-wide">Menu</span>
        </button>
        <a
          href={`tel:${business.phoneTel}`}
          className="flex flex-1 flex-col items-center gap-0.5 bg-terracotta-500 py-2.5 text-cream-50 transition-colors hover:bg-terracotta-600"
          aria-label={`Call ${business.phone}`}
        >
          <Phone size={20} />
          <span className="text-[10px] uppercase tracking-wide">Call</span>
        </a>
        <a
          href={business.mapsDirections}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 flex-col items-center gap-0.5 py-2.5 text-espresso-600 transition-colors hover:text-espresso-800"
          aria-label="Get directions"
        >
          <MapPin size={20} />
          <span className="text-[10px] uppercase tracking-wide">Directions</span>
        </a>
      </div>
    </div>
  );
}
