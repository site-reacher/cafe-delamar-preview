import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  path?: string;
}

/**
 * Updates document title and meta tags per page.
 */
export default function SEO({ title, description, path }: SEOProps) {
  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    const setOG = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    setMeta('description', description);
    setOG('og:title', title);
    setOG('og:description', description);
    if (path) setOG('og:url', `https://www.cafedelamar.com${path}`);
  }, [title, description, path]);

  return null;
}
