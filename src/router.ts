import { useState, useEffect, useCallback } from 'react';

export type Route =
  | 'home'
  | 'menu'
  | 'specials'
  | 'catering'
  | 'location'
  | 'contact'
  | 'notfound';

const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');

const removeBasePath = (pathname: string): string => {
  if (basePath && pathname.startsWith(basePath)) {
    return pathname.slice(basePath.length);
  }

  return pathname;
};

const pathToRoute = (pathname: string): Route => {
  const pathnameWithoutBase = removeBasePath(pathname);
  const clean = pathnameWithoutBase
    .replace(/^\/+|\/+$/g, '')
    .toLowerCase();

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
      return 'notfound';
  }
};

export const routeToPath = (route: Route): string => {
  const routePath = (() => {
    switch (route) {
      case 'home':
        return '/';

      case 'menu':
        return '/menu';

      case 'specials':
        return '/specials';

      case 'catering':
        return '/catering';

      case 'location':
        return '/location';

      case 'contact':
        return '/contact';

      default:
        return '/404';
    }
  })();

  return `${basePath}${routePath}`;
};

export function useRouter() {
  const [route, setRoute] = useState<Route>(() =>
    pathToRoute(window.location.pathname)
  );

  useEffect(() => {
    const onPopState = () => {
      setRoute(pathToRoute(window.location.pathname));
      window.scrollTo({ top: 0, behavior: 'auto' });
    };

    window.addEventListener('popstate', onPopState);

    return () => {
      window.removeEventListener('popstate', onPopState);
    };
  }, []);

  const navigate = useCallback((nextRoute: Route) => {
    const path = routeToPath(nextRoute);

    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
    }

    setRoute(nextRoute);
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return {
    route,
    navigate,
  };
}

export const navItems: { label: string; route: Route }[] = [
  { label: 'Home', route: 'home' },
  { label: 'Regular Menu', route: 'menu' },
  { label: 'Weekly Specials', route: 'specials' },
  { label: 'Catering', route: 'catering' },
  { label: 'Hours & Location', route: 'location' },
  { label: 'Contact', route: 'contact' },
];
