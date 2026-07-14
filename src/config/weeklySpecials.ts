/**
 * ============================================================
 * CENTRALIZED WEEKLY SPECIALS DATA
 * ============================================================
 * The owner can replace the date range, dishes, descriptions,
 * soups, and prices each week by editing ONLY this file.
 * No page layouts or components need to be modified.
 *
 * To update for a new week:
 *   1. Change `dateRange` to the new week's date range.
 *   2. Edit each day's `special` and `soup` fields.
 *   3. Prices and descriptions update automatically.
 * ============================================================
 */

export interface DaySpecial {
  day: string;
  special?: {
    name: string;
    description: string;
    price: string;
  };
  note?: string;
  soup: {
    name: string;
    cupPrice: string;
    bowlPrice: string;
  };
}

export const weeklySpecials = {
  // Date range shown at the top of the Weekly Specials page.
  dateRange: 'July 13, 2026 - July 18, 2026',

  // Hours notice shown on the specials page (from existing site).
  hoursNotice:
    'Hours: Mon-Tue 9am - 3pm, Wed-Fri 9am - 5pm, Sat 9am - 4pm',
  offSeasonNotice: 'Off-Season Hours: Monday - Friday, 9am - 3pm',

  days: [
    {
      day: 'Monday',
      special: {
        name: 'Tuna Melt',
        description:
          'Albacore Tuna Salad on Pumpernickle Rye Bread with Tomato and Swiss Cheese Pressed to Perfection. Side Salad.',
        price: '$15.25',
      },
      soup: {
        name: 'Broccoli Cheddar',
        cupPrice: '$5.75',
        bowlPrice: '$6.75',
      },
    },
    {
      day: 'Tuesday',
      special: {
        name: 'Chicken Bangkok Salad',
        description:
          'Grilled Chicken, Fresh Pineapple, Mandarin Orange, Toasted Almonds and Dry Asian Noodle on Mixed Greens with Our Bang Bang Dressing.',
        price: '$15.75',
      },
      soup: {
        name: 'Ham and Yellow Lentil',
        cupPrice: '$5.75',
        bowlPrice: '$6.75',
      },
    },
    {
      day: 'Wednesday',
      special: {
        name: 'Rice Bowl',
        description:
          'Almond Rice, Large Shrimp, Marinated Artichoke, Avocado, White Bean and Tomato.',
        price: '$16.25',
      },
      soup: {
        name: 'Chicken Lemon Rice',
        cupPrice: '$5.75',
        bowlPrice: '$6.75',
      },
    },
    {
      day: 'Thursday',
      special: {
        name: 'BBQ Pulled Chicken Wrap',
        description:
          'Pulled Chicken in Our Housemade BBQ in a Flour Tortillas with Pickle Red Onion, Cheddar Cheese, Lettuce and Tomato. Cole Slaw.',
        price: '$15.75',
      },
      soup: {
        name: 'Sweet Pea',
        cupPrice: '$5.75',
        bowlPrice: '$6.75',
      },
    },
    {
      day: 'Friday',
      special: {
        name: 'Tex Mex Salad',
        description:
          'Tex Mex Seasoned Grilled Chicken Over Mixed Greens with Black Bean and Roasted Corn Salsa, Queso Blanco, Carrot and Chopped Tomato with Our Avocado Vinaigrette.',
        price: '$14.95',
      },
      soup: {
        name: 'Shrimp Corn Chowder',
        cupPrice: '$5.75',
        bowlPrice: '$6.75',
      },
    },
    {
      day: 'Saturday',
      note: 'Open Until 4pm. Kitchen Closed at 3pm. Grab and Go, Smoothies, Acai Bowl, Coffee Selection and More Available.',
      soup: {
        name: 'Soupe du Jour',
        cupPrice: '$5.75',
        bowlPrice: '$6.75',
      },
    },
  ] as DaySpecial[],
};

export type WeeklySpecials = typeof weeklySpecials;
