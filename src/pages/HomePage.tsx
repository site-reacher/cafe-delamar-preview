import { Phone, MapPin, Clock, ArrowRight, ChevronDown, Truck, UtensilsCrossed } from 'lucide-react';
import { business } from '../config/business';
import { hours } from '../config/hours';
import { weeklySpecials } from '../config/weeklySpecials';
import type { Route } from '../router';
import SEO from '../components/SEO';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface PageProps {
  onNavigate: (r: Route) => void;
}

export default function HomePage({ onNavigate }: PageProps) {
  useScrollReveal();

  const today = new Date();
  const todayIdx = today.getDay() === 0 ? 6 : today.getDay() - 1;

  return (
    <>
      <SEO
        title="Café Delamar — Palm Beach Café | Menu, Specials & Catering"
        description="A neighborhood café in Palm Beach, Florida. Breakfast, lunch, salads, smoothies, açaí bowls, weekly specials, and catering. 326 Peruvian Avenue #4. Call 561.659.3174."
        path="/"
      />

      {/* ── HERO ── */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1833586/pexels-photo-1833586.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Warm café interior with espresso machine and pastries"
            className="h-full w-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-espresso-900/70 via-espresso-900/50 to-espresso-900/80" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-5 py-32 text-center">
          <p
            className="mb-4 text-xs uppercase tracking-widest2 text-cream-200/80 animate-fade-in"
            style={{ animationDelay: '0.1s', opacity: 0 }}
          >
            Via Newsome · Palm Beach, Florida
          </p>
          <h1
            className="font-serif text-6xl font-semibold leading-[1.05] text-cream-50 sm:text-7xl lg:text-8xl animate-fade-up"
            style={{ animationDelay: '0.2s', opacity: 0 }}
          >
            Café Delamar
          </h1>
          <p
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-cream-100/90 animate-fade-up"
            style={{ animationDelay: '0.4s', opacity: 0 }}
          >
            A neighborhood café serving breakfast, lunch, weekly specials,
            smoothies, and açaí bowls in the heart of Palm Beach.
          </p>

          <div
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-up"
            style={{ animationDelay: '0.6s', opacity: 0 }}
          >
            <button
              onClick={() => onNavigate('menu')}
              className="btn-primary group"
            >
              View Menu
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
            <a href={`tel:${business.phoneTel}`} className="btn-outline !border-cream-200/40 !text-cream-50 hover:!bg-cream-50 hover:!text-espresso-700">
              <Phone size={16} />
              Call to Order
            </a>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-28 left-1/2 -translate-x-1/2 lg:bottom-10">
          <ChevronDown
            size={28}
            className="text-cream-200/60 animate-scroll-cue"
            aria-hidden="true"
          />
        </div>
      </section>

      {/* ── QUICK INFO BAR ── */}
      <section className="border-b border-cream-200 bg-cream-100">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-8 sm:grid-cols-3 lg:px-8">
          <div className="flex items-center gap-3">
            <MapPin size={20} className="shrink-0 text-terracotta-500" />
            <div>
              <p className="text-xs uppercase tracking-wide text-espresso-400">Find Us</p>
              <p className="text-sm font-medium text-espresso-700">{business.address.full}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Phone size={20} className="shrink-0 text-terracotta-500" />
            <div>
              <p className="text-xs uppercase tracking-wide text-espresso-400">Call</p>
              <a href={`tel:${business.phoneTel}`} className="text-sm font-medium text-espresso-700 hover:text-terracotta-500">
                {business.phone}
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Clock size={20} className="shrink-0 text-terracotta-500" />
            <div>
              <p className="text-xs uppercase tracking-wide text-espresso-400">Today</p>
              <p className="text-sm font-medium text-espresso-700">
                {hours.regular[todayIdx].day}: {hours.regular[todayIdx].time}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTRO SPLIT ── */}
      <section className="bg-cream-50 py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <div className="reveal">
            <p className="section-label">Welcome</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-espresso-700 sm:text-5xl">
              A Palm Beach<br />Neighborhood Café
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-espresso-500">
              <p>
                Located in Via Newsome between Worth Avenue and Peruvian Avenue,
                Café Delamar is a welcoming spot for breakfast, lunch, and
                everything in between.
              </p>
              <p>
                From freshly made sandwiches and salads to smoothies, açaí
                bowls, and weekly specials prepared in limited quantities —
                there is always something delicious waiting.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <button onClick={() => onNavigate('menu')} className="btn-primary">
                View Menu
              </button>
              <button onClick={() => onNavigate('location')} className="btn-outline">
                <MapPin size={16} /> Get Directions
              </button>
            </div>
          </div>
          <div className="reveal relative">
            <div className="overflow-hidden">
              <img
                src="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=900&h=1100&fit=crop"
                alt="Freshly prepared food on a café table"
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden bg-espresso-700 p-6 text-cream-50 shadow-xl sm:block">
              <p className="font-serif text-3xl font-semibold">{hours.regular[todayIdx].time}</p>
              <p className="text-xs uppercase tracking-wide text-cream-200/70">Open Today</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOURS & DELIVERY ── */}
      <section className="bg-espresso-700 py-24 text-cream-100 lg:py-32 grain-overlay">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <div className="reveal">
            <p className="section-label !text-terracotta-300">Hours</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold text-cream-50 sm:text-5xl">
              When We're Open
            </h2>
            <ul className="mt-8 space-y-3">
              {hours.regular.map((h) => (
                <li
                  key={h.day}
                  className="flex items-center justify-between border-b border-espresso-600 pb-3"
                >
                  <span className="text-sm font-medium uppercase tracking-wide text-cream-200/80">
                    {h.day}
                  </span>
                  <span className="font-serif text-xl text-cream-50">{h.time}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs italic text-cream-200/50">
              {hours.saturdayNote}
            </p>
          </div>

          <div className="reveal flex flex-col justify-center">
            <div className="rounded-sm border border-terracotta-400/30 bg-espresso-600/50 p-8">
              <Truck size={32} className="text-terracotta-300" />
              <h3 className="mt-4 font-serif text-3xl font-semibold text-cream-50">
                Lunch Delivery
              </h3>
              <p className="mt-2 text-lg text-cream-200/80">{hours.delivery}</p>
              <p className="mt-1 text-sm uppercase tracking-wide text-terracotta-300">
                {business.delivery.note}
              </p>
              <a
                href={`tel:${business.phoneTel}`}
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cream-50 underline decoration-terracotta-400 decoration-2 underline-offset-4 transition-colors hover:text-terracotta-300"
              >
                <Phone size={16} /> Call {business.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED WEEKLY SPECIALS ── */}
      <section className="bg-cream-100 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="reveal text-center">
            <p className="section-label">Fresh This Week</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold text-espresso-700 sm:text-5xl">
              Weekly Specials
            </h2>
            <p className="mt-2 text-sm uppercase tracking-wide text-espresso-400">
              {weeklySpecials.dateRange}
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {weeklySpecials.days
              .filter((d) => d.special)
              .slice(0, 3)
              .map((d) => (
                <div
                  key={d.day}
                  className="reveal group border border-cream-200 bg-cream-50 p-8 transition-all duration-300 hover:border-terracotta-300 hover:shadow-lg"
                >
                  <p className="text-xs uppercase tracking-widest2 text-terracotta-500">
                    {d.day}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl font-semibold text-espresso-700">
                    {d.special!.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-espresso-500">
                    {d.special!.description}
                  </p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="font-serif text-2xl font-semibold text-espresso-700">
                      {d.special!.price}
                    </span>
                    <span className="text-xs text-espresso-400">
                      Soup: {d.soup.name}
                    </span>
                  </div>
                </div>
              ))}
          </div>

          <div className="reveal mt-10 text-center">
            <button onClick={() => onNavigate('specials')} className="btn-primary group">
              View All Specials
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      {/* ── CATERING FEATURE ── */}
      <section className="relative overflow-hidden bg-cream-50 py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <div className="reveal order-2 lg:order-1">
            <p className="section-label">Catering</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-espresso-700 sm:text-5xl">
              We Cater Your<br />Next Event
            </h2>
            <p className="mt-6 text-base leading-relaxed text-espresso-500">
              From corporate lunches to private gatherings, Café Delamar brings
              the same quality and care to your catered events.
            </p>
            <p className="mt-4 text-sm text-espresso-500">
              Contact{' '}
              <span className="font-semibold text-espresso-700">
                {business.catering.contactName}
              </span>{' '}
              for more information:
            </p>
            <a
              href={`tel:${business.catering.phoneTel}`}
              className="mt-2 inline-flex items-center gap-2 font-serif text-2xl font-semibold text-terracotta-500 hover:text-terracotta-600"
            >
              <Phone size={20} /> {business.catering.phone}
            </a>
            <div className="mt-8">
              <button onClick={() => onNavigate('catering')} className="btn-accent">
                Catering Inquiry
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
          <div className="reveal order-1 lg:order-2">
            <div className="overflow-hidden">
              <img
                src="https://images.pexels.com/photos/326279/pexels-photo-326279.jpeg?auto=compress&cs=tinysrgb&w=900&h=700&fit=crop"
                alt="Fresh salads and prepared food for catering"
                className="aspect-[7/5] w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="relative overflow-hidden bg-espresso-800 py-24 text-center text-cream-50 lg:py-32">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop"
            alt=""
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="relative z-10 mx-auto max-w-2xl px-5">
          <h2 className="reveal font-serif text-4xl font-semibold sm:text-5xl">
            Visit Café Delamar
          </h2>
          <p className="reveal mt-4 text-lg text-cream-200/80">
            {business.address.full}
          </p>
          <div className="reveal mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href={`tel:${business.phoneTel}`} className="btn-accent">
              <Phone size={16} /> Call {business.phone}
            </a>
            <button onClick={() => onNavigate('location')} className="btn-outline !border-cream-200/40 !text-cream-50 hover:!bg-cream-50 hover:!text-espresso-700">
              <MapPin size={16} /> Get Directions
            </button>
            <button onClick={() => onNavigate('menu')} className="btn-outline !border-cream-200/40 !text-cream-50 hover:!bg-cream-50 hover:!text-espresso-700">
              <UtensilsCrossed size={16} /> View Menu
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
