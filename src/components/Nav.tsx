import { useState, useEffect } from 'react';
import { Phone, Menu as MenuIcon, X } from 'lucide-react';
import { business } from '../config/business';
import { navItems, type Route, routeToPath } from '../router';

interface NavProps {
  currentRoute: Route;
  onNavigate: (r: Route) => void;
}

export default function Nav({ currentRoute, onNavigate }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [currentRoute]);

  const handleNav = (r: Route) => {
    onNavigate(r);
    setMobileOpen(false);
  };

  const isHome = currentRoute === 'home';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || !isHome
            ? 'bg-cream-50/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(50,37,25,0.08)]'
            : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          {/* Logo */}
          <button
            onClick={() => handleNav('home')}
            className="group flex items-baseline gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-400 focus-visible:ring-offset-2"
            aria-label="Café Delamar home"
          >
            <span
              className={`font-serif text-2xl font-semibold tracking-tight transition-colors duration-300 ${
                scrolled || !isHome
                  ? 'text-espresso-700'
                  : 'text-cream-50'
              }`}
            >
              Café Delamar
            </span>
            <span
              className={`hidden text-[10px] uppercase tracking-widest2 sm:inline-block transition-colors duration-300 ${
                scrolled || !isHome
                  ? 'text-terracotta-500'
                  : 'text-cream-200/80'
              }`}
            >
              Palm Beach
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden items-center gap-7 lg:flex">
            {navItems
              .filter((n) => n.route !== 'home')
              .map((item) => (
                <a
                  key={item.route}
                  href={routeToPath(item.route)}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav(item.route);
                  }}
                  className={`group relative text-sm font-medium tracking-wide transition-colors duration-300 ${
                    scrolled || !isHome
                      ? 'text-espresso-600 hover:text-espresso-800'
                      : 'text-cream-100 hover:text-cream-50'
                  } ${
                    currentRoute === item.route
                      ? scrolled || !isHome
                        ? 'text-espresso-800'
                        : 'text-cream-50'
                      : ''
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-terracotta-500 transition-all duration-300 ${
                      currentRoute === item.route
                        ? 'w-full'
                        : 'w-0 group-hover:w-full'
                    }`}
                  />
                </a>
              ))}
            <a
              href={`tel:${business.phoneTel}`}
              className="btn-accent !px-5 !py-2.5 !text-xs"
            >
              <Phone size={14} />
              Call to Order
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className={`lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-400 focus-visible:ring-offset-2 ${
              scrolled || !isHome
                ? 'text-espresso-700'
                : 'text-cream-50'
            }`}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={26} /> : <MenuIcon size={26} />}
          </button>
        </nav>
      </header>

      {/* Mobile full-screen menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-espresso-900/40 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute right-0 top-0 flex h-full w-full max-w-sm flex-col bg-cream-50 shadow-2xl animate-slide-down">
            <div className="flex items-center justify-between px-6 py-5 border-b border-cream-200">
              <span className="font-serif text-xl font-semibold text-espresso-700">
                Menu
              </span>
              <button
                onClick={() => setMobileOpen(false)}
                className="text-espresso-600 hover:text-espresso-800"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-6 py-6">
              {navItems.map((item) => (
                <a
                  key={item.route}
                  href={routeToPath(item.route)}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav(item.route);
                  }}
                  className={`border-b border-cream-100 py-4 font-serif text-xl transition-colors duration-200 ${
                    currentRoute === item.route
                      ? 'text-terracotta-500'
                      : 'text-espresso-600 hover:text-terracotta-400'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="px-6 py-6 border-t border-cream-200">
              <a
                href={`tel:${business.phoneTel}`}
                className="btn-accent w-full"
              >
                <Phone size={16} />
                Call {business.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
