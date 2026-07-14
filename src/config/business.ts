/**
 * ============================================================
 * CENTRALIZED BUSINESS INFORMATION
 * ============================================================
 * Edit all café business details here. Changes propagate
 * across every page (nav, footer, home, contact, SEO schema).
 * ============================================================
 */

export const business = {
  name: 'Café Delamar',
  // The phone number shown throughout the site and used for tel: links.
  phone: '561.659.3174',
  phoneTel: '5616593174',
  // Street address used for maps, directions, and structured data.
  address: {
    line1: '326 Peruvian Avenue #4',
    line2: 'Palm Beach, Florida 33480',
    full: '326 Peruvian Avenue #4, Palm Beach, Florida 33480',
  },
  // Location description from the existing website.
  locationNote:
    'We are located in Via Newsome (Formerly Via Demario) between Worth Avenue and Peruvian Avenue.',
  // Lunch delivery info from the existing website.
  delivery: {
    label: 'Lunch Delivery',
    hours: 'Mon–Fri from 11:00 a.m. to 2:30 p.m.',
    note: 'Call Early!',
  },
  // Catering contact from the existing website.
  catering: {
    contactName: 'France Charron',
    phone: '561.659.3174',
    phoneTel: '5616593174',
  },
  // Copyright notice from the existing website.
  copyright: '© Copyright 2012 GCFG, LLC.',
  // Google Maps directions link for the café address.
  mapsDirections:
    'https://www.google.com/maps/dir/?api=1&destination=326+Peruvian+Avenue+Palm+Beach+FL+33480',
  // Google Maps embed URL for the café address.
  mapsEmbed:
    'https://www.google.com/maps?q=326+Peruvian+Avenue+Palm+Beach+FL+33480&output=embed',
};

export type Business = typeof business;
