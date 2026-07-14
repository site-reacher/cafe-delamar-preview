import { Phone, MapPin, UtensilsCrossed, Home } from 'lucide-react';
import { business } from '../config/business';
import type { Route } from '../router';
import SEO from '../components/SEO';

interface PageProps {
  onNavigate: (r: Route) => void;
}

export default function NotFoundPage({ onNavigate }: PageProps) {
  return (
    <>
      <SEO
        title="Page Not Found — Café Delamar"
        description="The page you are looking for could not be found. Explore Café Delamar's menu, weekly specials, catering, and location."
        path="/404"
      />

      <section className="flex min-h-screen items-center justify-center bg-espresso-700 px-5 text-center text-cream-50">
        <div className="max-w-lg">
          <p className="font-serif text-8xl font-semibold text-terracotta-300">404</p>
          <h1 className="mt-4 font-serif text-4xl font-semibold">Page Not Found</h1>
          <p className="mt-4 text-cream-200/70">
            The page you are looking for may have been moved or no longer
            exists. Let us help you find your way.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button onClick={() => onNavigate('home')} className="btn-accent">
              <Home size={16} /> Return Home
            </button>
            <button onClick={() => onNavigate('menu')} className="btn-outline !border-cream-200/40 !text-cream-50 hover:!bg-cream-50 hover:!text-espresso-700">
              <UtensilsCrossed size={16} /> View Menu
            </button>
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`tel:${business.phoneTel}`}
              className="inline-flex items-center gap-2 text-sm text-cream-200/70 transition-colors hover:text-terracotta-300"
            >
              <Phone size={16} /> {business.phone}
            </a>
            <a
              href={business.mapsDirections}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-cream-200/70 transition-colors hover:text-terracotta-300"
            >
              <MapPin size={16} /> Get Directions
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
