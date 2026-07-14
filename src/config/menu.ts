/**
 * ============================================================
 * CENTRALIZED MENU DATA
 * ============================================================
 * Every item, price, and description from the existing
 * Café Delamar Regular Menu page is stored here.
 *
 * To edit the menu, change only this file — the Regular Menu
 * page renders automatically from this data.
 * ============================================================
 */

export interface MenuItem {
  name: string;
  description?: string;
  price: string;
  note?: string;
}

export interface MenuSection {
  id: string;
  title: string;
  subtitle?: string;
  items: MenuItem[];
  /** Optional add-on / modifier group rendered after items */
  addons?: { title: string; items: MenuItem[] };
  /** Optional footnote rendered after items */
  footnote?: string;
}

/* ── Breakfast ── Served until 11:00 a.m. ── */
const breakfast: MenuSection = {
  id: 'breakfast',
  title: 'Breakfast Menu',
  subtitle: 'Served until 11:00 a.m.',
  items: [
    { name: 'Egg & English Muffin', price: '$4.25' },
    { name: 'Ham, Bacon or Sausage', note: 'add', price: '$3.00' },
    { name: 'Cheddar, Swiss or Provolone', note: 'add', price: '$1.50' },
    { name: 'Ham & Cheese Croissant', price: '$6.50' },
    { name: 'Toasted Bagel w/ Butter', price: '$4.25' },
    { name: 'English Muffin w/ Butter', price: '$3.50' },
    { name: 'Cream Cheese', note: 'add', price: '$1.50' },
    { name: 'Grape or Strawberry Jelly', note: 'add', price: '$1.50' },
    { name: 'Croissant or Sweet Muffin', price: '$4.25' },
  ],
};

/* ── Cold Sandwiches ── Served from 11:00 am to 3:00 pm ── */
const coldSandwiches: MenuSection = {
  id: 'cold-sandwiches',
  title: 'Cold Sandwiches',
  subtitle: 'with Potato Chips',
  items: [
    { name: 'Rare Roast Beef', price: '$13.95' },
    { name: 'Black Forest Ham', price: '$12.45' },
    { name: 'Roasted Turkey Breast', price: '$12.75' },
    { name: 'BLT', description: 'traditional', price: '$13.45' },
    {
      name: 'Turkey Club',
      description:
        'w/ Smoked Applewood Bacon, Cheddar, Lettuce, Tomato and Mayo',
      price: '$13.45',
    },
    { name: 'Chicken Salad', price: '$12.95' },
    { name: 'Solid White Tuna Salad', price: '$13.25' },
    { name: 'Egg Salad', price: '$12.25' },
    {
      name: 'Half Sandwich with Cup of Soup',
      description:
        'Choice of Half Sandwich are Chicken, Tuna or Egg Salad, Turkey or Ham. Does NOT include a Side',
      price: '$13.95',
    },
  ],
  footnote:
    'Bread Choices: White, Whole Wheat, Rye, Soft French Bread, Spinach Wrap or GF Wrap $.',
  addons: {
    title: 'Add to any sandwich',
    items: [
      { name: 'Cheddar, Provolone or Swiss', price: '$1.75' },
      { name: 'Avocado', price: '$3.00' },
      { name: 'Bacon', price: '$3.00' },
      { name: 'Substitute Croissant or Pita', price: '$1.75' },
      {
        name: 'Substitute your side for Mixed Greens Salad or Macaroni Salad',
        price: '$3.00',
      },
    ],
  },
};

/* ── Hot Sandwiches ── */
const hotSandwiches: MenuSection = {
  id: 'hot-sandwiches',
  title: 'Hot Sandwiches',
  items: [
    { name: 'Chevre & Tomato', description: 'on French Bread', price: '$11.95' },
    {
      name: 'Brie Melt',
      description: 'w/ Olive Tapenade on French Bread',
      price: '$11.95',
    },
    {
      name: 'Grilled Chicken Breast',
      description:
        'w/ Lemon Artichoke Pesto & Parmesan on your choice of French Bread or Grilled Spinach Wrap',
      price: '$13.95',
    },
    {
      name: 'Homemade Veggie Burger',
      description: 'w/ Provolone, Lettuce, Tomato & Hummus in Pita',
      price: '$13.25',
    },
    {
      name: 'Ham & Provolone Panini',
      description: 'with Homemade Rosemary Oil on Ciabatta',
      price: '$13.75',
    },
    {
      name: 'All Beef Grand Hot Dog',
      description: 'with Mustard, Ketchup, Relish, Onion',
      price: '$8.95',
    },
    { name: 'Grilled Cheese', price: '$8.25' },
  ],
};

/* ── Açaí Bowl ── */
const acaiBowl: MenuSection = {
  id: 'acai-bowl',
  title: 'Create Your Own Açaí Bowl',
  subtitle: '$13.50',
  items: [],
  footnote:
    'Pick 3 Fruits: Pineapple • Strawberry • Blueberry • Kiwi • Banana | Topping (Pick 1): Chia Seeds • Sliced Almonds • Hemp Seeds • Pumpkin Seeds | Drizzle (Pick 1): Peanut Butter • Honey • Agave • Caramel | Granola: Yes • No',
};

/* ── Soups ── */
const soups: MenuSection = {
  id: 'soups',
  title: 'Homemade Soups',
  items: [
    { name: 'By the cup (8oz)', price: '$5.75' },
    { name: 'By the bowl (12oz)', price: '$6.75' },
  ],
};

/* ── Salads ── */
const salads: MenuSection = {
  id: 'salads',
  title: 'Salads',
  items: [
    {
      name: 'Delamar Salad',
      description:
        'Mixed Greens, Grilled Chicken, Roasted Corn, Roasted Red Pepper, Marinated Artichoke, Tomatoes, Parmesan Cheese, Balsamic Walnut Vinaigrette, Bread',
      price: '$13.25',
    },
    {
      name: 'Salade Niçoise',
      description:
        'traditional — Mixed Greens, Tuna Salad, Haricots Verts (Green Beans), Steamed Potato, Tomatoes, Red Bell Pepper, Sliced Egg, Capers, Olives, Lemon Dijon Dressing, Bread',
      price: '$13.95',
    },
    {
      name: 'Greek Salad Santorini',
      description:
        'Mixed Greens, Tomatoes, Cucumbers, Feta, Kalamata Olives, Red Wine Vinaigrette, Bread',
      price: '$12.95',
    },
    {
      name: 'Cobb Salad',
      description:
        'Mixed Greens, Grilled Chicken, Bacon, Chopped Egg, Bleu Cheese, Tomatoes, Avocado, Lemon Dijon Dressing, Bread',
      price: '$13.25',
    },
    {
      name: 'Southwestern Style Salad',
      description:
        'Mixed Greens, Grilled Chicken, Roasted Corn, Avocado, Black Beans, Feta, Tomatoes, Fresh Cilantro, Red Wine Vinaigrette, Bread',
      price: '$13.25',
    },
    { name: 'Caesar Salad', description: 'traditional', price: '$11.95' },
    { name: 'w/ Grilled Chicken Breast', price: '$15.25' },
    {
      name: 'Egg Salad',
      description:
        'Two Scoops on Mixed Greens with Tomatoes, Cucumbers, Carrots, Lemon Dijon Dressing, Bread',
      price: '$12.45',
    },
    {
      name: 'Solid White Tuna Salad',
      description:
        'Two Scoops on Mixed Greens with Tomatoes, Cucumbers, Carrots, Lemon Dijon Dressing, Bread',
      price: '$13.25',
    },
    {
      name: 'Chicken Salad',
      description:
        'Two Scoops on Mixed Greens with Tomatoes, Cucumbers, Carrots, Lemon Dijon Dressing, Bread',
      price: '$12.95',
    },
    { name: 'Tossed Salad', description: 'w/ dressing', price: '$10.45' },
    {
      name: 'Homemade Dressings',
      description: 'Blue Cheese, Ranch, Balsamic, Red Wine Vinaigrette, or our Lemon Dijon',
      price: '$1.50',
    },
  ],
};

/* ── Smoothies ── 16 oz ── */
const smoothies: MenuSection = {
  id: 'smoothies',
  title: 'Smoothies',
  subtitle: '16 oz',
  items: [
    {
      name: 'Sun Kissed',
      description: 'Blueberry, Strawberry, Mango, Banana, Almond Milk',
      price: '$10',
    },
    {
      name: 'White Jade',
      description: 'Oat Milk, Banana, Matcha, Honey, Vanilla',
      price: '$10',
    },
    {
      name: 'Coastal Crush',
      description: 'Strawberry, Banana, Whole Milk Greek Yogurt',
      price: '$10',
    },
    {
      name: 'Tropical Tide',
      description: 'Pineapple, Avocado, Spinach, Peach, Agave, Almond Milk',
      price: '$10',
    },
    {
      name: 'Choco Wave',
      description:
        'Banana, Peanut Butter, Cocoa Powder, Organic Plant-Based Chocolate Protein Powder, Honey, Oat Milk, Chia Seed',
      price: '$12',
    },
  ],
};

/* ── Hot Drinks ── */
const hotDrinks: MenuSection = {
  id: 'hot-drinks',
  title: 'Hot Drinks',
  items: [
    { name: 'Coffee (Regular)', description: 'Add Flavor for $1', price: '$3.50' },
    { name: 'Coffee (Large)', description: 'Add Flavor for $1', price: '$4.00' },
    { name: 'Hot Chocolate', price: '$4.00' },
    { name: 'Espresso', price: '$3.00' },
    { name: 'Double Espresso', price: '$4.00' },
    { name: 'Cappuccino', price: '$4.25' },
    { name: 'Café Latte', description: 'Add Flavor for $1', price: '$4.25' },
    { name: 'Hot Tea Selection', price: '$3.50' },
  ],
};

/* ── Cold Drinks ── */
const coldDrinks: MenuSection = {
  id: 'cold-drinks',
  title: 'Cold Drinks',
  items: [
    {
      name: 'Iced Coffee or Iced Tea',
      description: 'Add Flavor for $1',
      price: '$4.00',
    },
    { name: 'Soda, Domestic Bottled Water', price: '$2.50' },
    { name: 'Perrier, Fiji', price: '$3.25' },
    {
      name: 'San Pellegrino',
      description: 'Ask for our current selection of flavors',
      price: '$3.25',
    },
    { name: 'San Pellegrino Large (750 ml)', price: '$4.25' },
    {
      name: 'Fresh Lemonade',
      description: 'Add Peach or Mango Flavor for $1',
      price: '$4.50',
    },
    {
      name: 'Arizona Iced Tea',
      description: 'Lemon or Green Tea with Ginseng',
      price: '$2.50',
    },
    { name: 'Apple, Orange or Cranberry, Juices', price: '$2.50' },
    {
      name: 'Italian Soda',
      description:
        'NO whipped Cream — Choice of Vanilla, Strawberry, Mango or Peach',
      price: '$3.50',
    },
    {
      name: 'Lacroix Sparkling Water',
      description: 'Ask for our current selection of flavors',
      price: '$2.50',
    },
  ],
};

/* ── Extras ── */
const extras: MenuSection = {
  id: 'extras',
  title: 'Extras',
  items: [
    { name: 'Bowl of Fruit', price: '$6.50' },
    { name: 'Macaroni Salad (cup)', price: '$4.25' },
    { name: 'Macaroni Salad (bowl)', price: '$5.25' },
    { name: 'Chicken Salad (1 scoop)', price: '$4.95' },
    { name: 'Tuna Salad (1 scoop)', price: '$5.25' },
    { name: 'Egg Salad (1 scoop)', price: '$4.75' },
  ],
};

/* ── Sweets ── */
const sweets: MenuSection = {
  id: 'sweets',
  title: 'Sweets',
  items: [
    { name: 'Cookies', price: '$3.50' },
    { name: 'Cake', price: '$MKT' },
    { name: 'Specialties', description: 'at Daily Price', price: '' },
  ],
};

export const menu: MenuSection[] = [
  breakfast,
  coldSandwiches,
  hotSandwiches,
  acaiBowl,
  soups,
  salads,
  smoothies,
  hotDrinks,
  coldDrinks,
  extras,
  sweets,
];

export const lunchMenuNote = 'Served from 11:00 am to 3:00 pm';
