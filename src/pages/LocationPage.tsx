import { Phone, MapPin, Clock, Truck, Navigation } from 'lucide-react';
import { business } from '../config/business';
import { hours } from '../config/hours';
import type { Route } from '../router';
import SEO from '../components/SEO';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface PageProps {
  onNavigate: (r: Route) => void;
}

export default function LocationPage({ onNavigate: _onNavigate }: PageProps) {
  useScrollReveal();

  return (
    <>
      <SEO
        title="Hours & Location — Café Delamar, Palm Beach"
        description="Café Delamar is located at 326 Peruvian Avenue #4, Palm Beach, Florida 33480. Hours, delivery info, and directions."
        path="/location"
      />

      {/* Header */}
      <section className="bg-espresso-700 pt-32 pb-16 text-cream-50 lg:pt-40 lg:pb-20">
        <div className="mx-auto max-w-7xl px-5 text-center lg:px-8">
          <p className="section-label !text-terracotta-300">Visit Us</p>
          <h1 className="mt-3 font-serif text-5xl font-semibold sm:text-6xl">
            Hours & Location
          </h1>
        </div>
      </section>

      {/* Location description */}
      <section className="bg-cream-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="reveal mx-auto max-w-3xl text-center">
            <MapPin size={36} className="mx-auto text-terracotta-500" />
            <h2 className="mt-4 font-serif text-4xl font-semibold text-espresso-700">
              {business.name}
            </h2>
            <p className="mt-2 text-lg text-espresso-500">{business.address.line1}</p>
            <p className="text-lg text-espresso-500">{business.address.line2}</p>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-espresso-500">
              {business.locationNote}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={business.mapsDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <Navigation size={16} /> Get Directions
              </a>
              <a href={`tel:${business.phoneTel}`} className="btn-outline">
                <Phone size={16} /> {business.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Hours + Delivery */}
      <section className="bg-cream-100 py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
          {/* Hours */}
          <div className="reveal">
            <Clock size={32} className="text-terracotta-500" />
            <h2 className="mt-4 font-serif text-3xl font-semibold text-espresso-700">
              Business Hours
            </h2>
            <ul className="mt-6 space-y-3">
              {hours.regular.map((h) => (
                <li
                  key={h.day}
                  className="flex items-center justify-between border-b border-cream-200 pb-3"
                >
                  <span className="text-sm font-medium uppercase tracking-wide text-espresso-500">
                    {h.day}
                  </span>
                  <span className="font-serif text-xl text-espresso-700">{h.time}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs italic text-espresso-400">
              {hours.saturdayNote}
            </p>
          </div>

          {/* Delivery */}
          <div className="reveal">
            <Truck size={32} className="text-terracotta-500" />
            <h2 className="mt-4 font-serif text-3xl font-semibold text-espresso-700">
              Lunch Delivery
            </h2>
            <div className="mt-6 border border-cream-200 bg-cream-50 p-6">
              <p className="text-lg text-espresso-600">{hours.delivery}</p>
              <p className="mt-2 text-sm uppercase tracking-wide text-terracotta-500">
                {business.delivery.note}
              </p>
              <a
                href={`tel:${business.phoneTel}`}
                className="mt-4 inline-flex items-center gap-2 font-serif text-xl text-terracotta-500 hover:text-terracotta-600"
              >
                <Phone size={18} /> {business.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-cream-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="reveal">
            <h2 className="mb-6 text-center font-serif text-3xl font-semibold text-espresso-700">
              Find Us
            </h2>
            <div className="relative h-[400px] w-full overflow-hidden border border-cream-200 lg:h-[500px]">
              <iframe
                src={business.mapsEmbed}
                className="h-full w-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                title={`Map showing Café Delamar at ${business.address.full}`}
              />
            </div>
            <div className="mt-6 text-center">
              <a
                href={business.mapsDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <Navigation size={16} /> Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
