/**
 * ============================================================
 * CENTRALIZED NOTICES AND DISCLAIMERS
 * ============================================================
 * Edit the food-safety disclaimer and card service-fee notice
 * here. These appear on the Menu and Weekly Specials pages.
 * ============================================================
 */

export const notices = {
  // Food safety disclaimer from the existing website.
  foodSafety:
    'Consuming raw or undercooked meats, poultry, seafood, shellfish or eggs may increase your risk of foodborne illness.',

  // Card transaction service fee notice from the existing website.
  cardServiceFee: '4% Service Fee Apply on Every Card Transaction',

  // Weekly specials notices from the existing website.
  limitedQuantities: 'Specials Prepared in Limited Quantities — Please call ahead!',
  noSubstitutions: 'Sorry — No substitutions on Specials — Thanks!',
};

export type Notices = typeof notices;
