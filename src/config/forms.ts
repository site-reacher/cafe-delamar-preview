/**
 * ============================================================
 * CENTRALIZED FORM CONFIGURATION
 * ============================================================
 * The form submission destination (email or API endpoint) has
 * NOT yet been supplied by the business owner.
 *
 * >>> OWNER: Replace FORM_ENDPOINT with the real form-service
 * >>> URL (e.g. Formspree, Getform, or a Supabase Edge
 * >>> Function) before the site goes live.
 * ============================================================
 */

export const formConfig = {
  // Leave as empty string until a real endpoint is configured.
  // When empty, forms show a "configuration needed" notice and
  // do NOT send data anywhere.
  endpoint: '',

  // Catering inquiry recipient email — not yet supplied.
  // >>> OWNER: Set this to the email that should receive
  // >>> catering inquiries.
  cateringRecipientEmail: '',

  // General contact form recipient email — not yet supplied.
  // >>> OWNER: Set this to the email that should receive
  // >>> general contact messages.
  contactRecipientEmail: '',
};

export type FormConfig = typeof formConfig;
