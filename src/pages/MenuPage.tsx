import { useState } from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { business } from '../config/business';
import { menu, lunchMenuNote, type MenuSection } from '../config/menu';
import type { Route } from '../router';
import SEO from '../components/SEO';
import NoticeBanner from '../components/NoticeBanner';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface PageProps {
  onNavigate: (r: Route) => void;
}

export default function MenuPage({ onNavigate }: PageProps) {
  useScrollReveal();
  const [activeSection, setActiveSection] = useState<string>(menu[0].id);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(`section-${id}`);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <SEO
        title="Regular Menu — Café Delamar, Palm Beach"
        description="The complete Café Delamar regular menu: breakfast, cold and hot sandwiches, açaí bowls, soups, salads, smoothies, hot and cold drinks, extras, and sweets. Palm Beach, Florida."
        path="/menu"
      />

      {/* Page header */}
      <section className="bg-espresso-700 pt-32 pb-16 text-cream-50 lg:pt-40 lg:pb-20">
        <div className="mx-auto max-w-7xl px-5 text-center lg:px-8">
          <p className="section-label !text-terracotta-300">Regular Menu</p>
          <h1 className="mt-3 font-serif text-5xl font-semibold sm:text-6xl">
            Our Menu
          </h1>
          <p className="mt-4 text-sm uppercase tracking-wide text-cream-200/70">
            {lunchMenuNote}
          </p>
        </div>
      </section>

      {/* Sticky category nav */}
      <div className="sticky top-[68px] z-30 border-b border-cream-200 bg-cream-50/95 backdrop-blur-md">
        <div className="mx-auto max-w-7xl overflow-x-auto px-5 lg:px-8">
          <div className="flex gap-1 py-3">
            {menu.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollTo(section.id)}
                className={`whitespace-nowrap px-4 py-2 text-xs uppercase tracking-wide transition-colors duration-200 ${
                  activeSection === section.id
                    ? 'text-terracotta-500'
                    : 'text-espresso-400 hover:text-espresso-600'
                }`}
              >
                {section.title.replace(' Menu', '').replace('Homemade ', '')}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu sections */}
      <div className="mx-auto max-w-4xl px-5 py-16 lg:px-8 lg:py-20">
        {menu.map((section) => (
          <MenuSectionBlock key={section.id} section={section} />
        ))}
      </div>

      <NoticeBanner />

      {/* CTA */}
      <section className="border-t border-cream-200 bg-cream-100 py-16">
        <div className="mx-auto max-w-7xl px-5 text-center lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-espresso-700">
            Hungry? Call Ahead.
          </h2>
          <p className="mt-2 text-sm text-espresso-500">
            Lunch delivery {business.delivery.hours} — {business.delivery.note}
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href={`tel:${business.phoneTel}`} className="btn-accent">
              <Phone size={16} /> {business.phone}
            </a>
            <button onClick={() => onNavigate('specials')} className="btn-outline">
              Weekly Specials <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

function MenuSectionBlock({ section }: { section: MenuSection }) {
  return (
    <section
      id={`section-${section.id}`}
      className="reveal mb-14 scroll-mt-32"
    >
      <div className="mb-6 border-b border-cream-300 pb-3">
        <h2 className="font-serif text-3xl font-semibold text-espresso-700">
          {section.title}
        </h2>
        {section.subtitle && (
          <p className="mt-1 text-sm italic text-espresso-400">{section.subtitle}</p>
        )}
      </div>

      {section.items.length > 0 && (
        <ul className="space-y-5">
          {section.items.map((item, i) => (
            <li
              key={i}
              className="flex items-baseline gap-4 border-b border-cream-100 pb-4"
            >
              <div className="flex-1">
                <p className="font-medium text-espresso-700">
                  {item.name}
                  {item.note && (
                    <span className="ml-1 text-xs italic text-espresso-400">
                      ({item.note})
                    </span>
                  )}
                </p>
                {item.description && (
                  <p className="mt-1 text-sm leading-relaxed text-espresso-400">
                    {item.description}
                  </p>
                )}
              </div>
              <span className="shrink-0 font-serif text-lg font-semibold text-espresso-600">
                {item.price}
              </span>
            </li>
          ))}
        </ul>
      )}

      {section.footnote && (
        <p className="mt-5 border-l-2 border-terracotta-300 pl-4 text-sm italic leading-relaxed text-espresso-500">
          {section.footnote}
        </p>
      )}

      {section.addons && (
        <div className="mt-6 bg-cream-100 p-5">
          <p className="mb-3 text-xs uppercase tracking-widest2 text-terracotta-500">
            {section.addons.title}
          </p>
          <ul className="space-y-3">
            {section.addons.items.map((item, i) => (
              <li key={i} className="flex items-baseline gap-4">
                <span className="flex-1 text-sm text-espresso-600">
                  {item.name}
                </span>
                <span className="shrink-0 font-serif text-base font-semibold text-espresso-500">
                  {item.price}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
