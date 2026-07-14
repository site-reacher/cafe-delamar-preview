import { Phone, MapPin, Clock } from 'lucide-react';
import { business } from '../config/business';
import { hours } from '../config/hours';
import { navItems, type Route, routeToPath } from '../router';

interface FooterProps {
  onNavigate: (r: Route) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-espresso-800 text-cream-100 grain-overlay">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-3xl font-semibold text-cream-50">
              Café Delamar
            </h3>
            <p className="mt-2 text-xs uppercase tracking-widest2 text-terracotta-300">
              Palm Beach, Florida
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream-200/70">
              A neighborhood café serving breakfast, lunch, weekly specials,
              and catering in the heart of Palm Beach.
            </p>
          </div>

          {/* Hours */}
          <div>
            <h4 className="mb-4 flex items-center gap-2 text-xs uppercase tracking-widest2 text-cream-200/60">
              <Clock size={14} /> Hours
            </h4>
            <ul className="space-y-1.5 text-sm text-cream-200/80">
              {hours.regular.map((h) => (
                <li key={h.day} className="flex justify-between gap-4">
                  <span>{h.day}</span>
                  <span className="text-cream-100">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-xs uppercase tracking-widest2 text-cream-200/60">
              Visit & Contact
            </h4>
            <ul className="space-y-3 text-sm text-cream-200/80">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-terracotta-300" />
                <span>{business.address.full}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 text-terracotta-300" />
                <a
                  href={`tel:${business.phoneTel}`}
                  className="transition-colors hover:text-cream-50"
                >
                  {business.phone}
                </a>
              </li>
            </ul>
            <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
              {navItems.map((item) => (
                <a
                  key={item.route}
                  href={routeToPath(item.route)}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(item.route);
                  }}
                  className="text-xs uppercase tracking-wide text-cream-200/60 transition-colors hover:text-terracotta-300"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-espresso-700 pt-6 text-xs text-cream-200/50 sm:flex-row">
          <p>{business.copyright}</p>
          <p>© {year} Café Delamar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
