import { useState, useEffect, useCallback } from 'react';

export type Route =
  | 'home'
  | 'menu'
  | 'specials'
  | 'catering'
  | 'location'
  | 'contact'
  | 'notfound';

const pathToRoute = (path: string): Route => {
  const clean = path.replace(/^#\/?/, '').replace(/^\/+/, '');
  switch (clean) {
    case '':
    case 'home':
      return 'home';
    case 'menu':
    case 'regular-menu':
      return 'menu';
    case 'specials':
    case 'weekly-specials':
      return 'specials';
    case 'catering':
      return 'catering';
    case 'location':
    case 'hours-location':
      return 'location';
    case 'contact':
      return 'contact';
    default:
      return clean === '' ? 'home' : 'notfound';
  }
};

export const routeToPath = (route: Route): string => {
  switch (route) {
    case 'home':
      return '#/';
    case 'menu':
      return '#/menu';
    case 'specials':
      return '#/specials';
    case 'catering':
      return '#/catering';
    case 'location':
      return '#/location';
    case 'contact':
      return '#/contact';
    default:
      return '#/404';
  }
};

export function useRouter() {
  const [route, setRoute] = useState<Route>(() =>
    pathToRoute(window.location.hash)
  );

  useEffect(() => {
    const onHashChange = () => {
      setRoute(pathToRoute(window.location.hash));
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigate = useCallback((r: Route) => {
    window.location.hash = routeToPath(r).slice(1);
  }, []);

  return { route, navigate };
}

export const navItems: { label: string; route: Route }[] = [
  { label: 'Home', route: 'home' },
  { label: 'Regular Menu', route: 'menu' },
  { label: 'Weekly Specials', route: 'specials' },
  { label: 'Catering', route: 'catering' },
  { label: 'Hours & Location', route: 'location' },
  { label: 'Contact', route: 'contact' },
];
