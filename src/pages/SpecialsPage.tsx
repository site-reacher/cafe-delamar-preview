import { useState } from 'react';
import { Phone, ChevronLeft, ChevronRight, Soup } from 'lucide-react';
import { business } from '../config/business';
import { weeklySpecials } from '../config/weeklySpecials';
import { notices } from '../config/notices';
import type { Route } from '../router';
import SEO from '../components/SEO';
import NoticeBanner from '../components/NoticeBanner';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface PageProps {
  onNavigate: (r: Route) => void;
}

export default function SpecialsPage({ onNavigate: _onNavigate }: PageProps) {
  useScrollReveal();
  const [activeDay, setActiveDay] = useState(0);

  const day = weeklySpecials.days[activeDay];

  return (
    <>
      <SEO
        title="Weekly Specials — Café Delamar, Palm Beach"
        description={`Café Delamar weekly specials for ${weeklySpecials.dateRange}. Daily specials, soups of the day, and limited-quantity dishes. Palm Beach, Florida.`}
        path="/specials"
      />

      {/* Header */}
      <section className="bg-espresso-700 pt-32 pb-16 text-cream-50 lg:pt-40 lg:pb-20">
        <div className="mx-auto max-w-7xl px-5 text-center lg:px-8">
          <p className="section-label !text-terracotta-300">Fresh This Week</p>
          <h1 className="mt-3 font-serif text-5xl font-semibold sm:text-6xl">
            Weekly Specials
          </h1>
          <p className="mt-4 font-serif text-2xl text-cream-200/80">
            {weeklySpecials.dateRange}
          </p>
          <p className="mt-2 text-xs uppercase tracking-wide text-cream-200/60">
            {weeklySpecials.hoursNotice}
          </p>
        </div>
      </section>

      {/* Day navigation */}
      <div className="border-b border-cream-200 bg-cream-50">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-2">
            {weeklySpecials.days.map((d, i) => (
              <button
                key={d.day}
                onClick={() => setActiveDay(i)}
                className={`whitespace-nowrap px-5 py-3 text-sm font-medium uppercase tracking-wide transition-all duration-200 ${
                  activeDay === i
                    ? 'border-b-2 border-terracotta-500 text-terracotta-500'
                    : 'text-espresso-400 hover:text-espresso-600'
                }`}
              >
                {d.day}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Active day special */}
      <section className="bg-cream-50 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          {/* Mobile day arrows */}
          <div className="mb-8 flex items-center justify-between lg:hidden">
            <button
              onClick={() =>
                setActiveDay((p) =>
                  p === 0 ? weeklySpecials.days.length - 1 : p - 1
                )
              }
              className="flex items-center gap-1 text-sm text-espresso-400 hover:text-espresso-600"
              aria-label="Previous day"
            >
              <ChevronLeft size={18} /> Prev
            </button>
            <span className="font-serif text-xl font-semibold text-espresso-700">
              {day.day}
            </span>
            <button
              onClick={() =>
                setActiveDay((p) =>
                  p === weeklySpecials.days.length - 1 ? 0 : p + 1
                )
              }
              className="flex items-center gap-1 text-sm text-espresso-400 hover:text-espresso-600"
              aria-label="Next day"
            >
              Next <ChevronRight size={18} />
            </button>
          </div>

          <div key={activeDay} className="animate-fade-in">
            {day.special ? (
              <div className="border border-cream-200 bg-cream-100 p-8 lg:p-12">
                <p className="text-xs uppercase tracking-widest2 text-terracotta-500">
                  {day.day}'s Special
                </p>
                <h2 className="mt-3 font-serif text-4xl font-semibold text-espresso-700 lg:text-5xl">
                  {day.special.name}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-espresso-500">
                  {day.special.description}
                </p>
                <p className="mt-8 font-serif text-5xl font-semibold text-terracotta-500">
                  {day.special.price}
                </p>
              </div>
            ) : (
              <div className="border border-cream-200 bg-cream-100 p-8 lg:p-12">
                <p className="text-xs uppercase tracking-widest2 text-terracotta-500">
                  {day.day}
                </p>
                <h2 className="mt-3 font-serif text-3xl font-semibold text-espresso-700">
                  Grab & Go Saturday
                </h2>
                <p className="mt-4 text-base leading-relaxed text-espresso-500">
                  {day.note}
                </p>
              </div>
            )}

            {/* Soup of the day */}
            <div className="mt-8 flex items-center gap-4 border-t border-cream-200 pt-8">
              <Soup size={28} className="shrink-0 text-sage-500" />
              <div className="flex-1">
                <p className="text-xs uppercase tracking-widest2 text-sage-500">
                  Soupe du Jour
                </p>
                <p className="font-serif text-2xl font-semibold text-espresso-700">
                  {day.soup.name}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-espresso-400">
                  Cup{' '}
                  <span className="font-serif text-lg font-semibold text-espresso-600">
                    {day.soup.cupPrice}
                  </span>
                </p>
                <p className="text-sm text-espresso-400">
                  Bowl{' '}
                  <span className="font-serif text-lg font-semibold text-espresso-600">
                    {day.soup.bowlPrice}
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Notices */}
          <div className="mt-10 border-l-2 border-terracotta-400 bg-cream-100 p-5">
            <p className="text-sm font-medium text-terracotta-600">
              {notices.limitedQuantities}
            </p>
            <p className="mt-1 text-sm font-medium text-terracotta-600">
              {notices.noSubstitutions}
            </p>
          </div>

          {/* Call ahead CTA */}
          <div className="mt-8 text-center">
            <a href={`tel:${business.phoneTel}`} className="btn-accent">
              <Phone size={16} /> Call to Order: {business.phone}
            </a>
          </div>
        </div>
      </section>

      <NoticeBanner showSpecialNotices />
    </>
  );
}
