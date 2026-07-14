import { useState, type FormEvent } from 'react';
import { Phone, UtensilsCrossed, CheckCircle2, AlertCircle } from 'lucide-react';
import { business } from '../config/business';
import { formConfig } from '../config/forms';
import type { Route } from '../router';
import SEO from '../components/SEO';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface PageProps {
  onNavigate: (r: Route) => void;
}

export default function CateringPage({ onNavigate: _onNavigate }: PageProps) {
  useScrollReveal();
  const [status, setStatus] = useState<'idle' | 'success' | 'error' | 'config'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Validate required fields
    const newErrors: Record<string, string> = {};
    const required = ['name', 'email', 'phone', 'eventDate', 'guests', 'eventType'];
    for (const field of required) {
      if (!formData.get(field)?.toString().trim()) {
        newErrors[field] = 'This field is required';
      }
    }
    if (formData.get('email') && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.get('email') as string)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    // Check if form endpoint is configured
    if (!formConfig.endpoint) {
      setStatus('config');
      form.reset();
      return;
    }

    // Submit to configured endpoint
    fetch(formConfig.endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.fromEntries(formData)),
    })
      .then((res) => {
        if (res.ok) {
          setStatus('success');
          form.reset();
        } else {
          setStatus('error');
        }
      })
      .catch(() => setStatus('error'));
  };

  return (
    <>
      <SEO
        title="Catering — Café Delamar, Palm Beach"
        description="Café Delamar offers catering for your events in Palm Beach, Florida. Contact France Charron for more information. Call 561.659.3174."
        path="/catering"
      />

      {/* Header */}
      <section className="bg-espresso-700 pt-32 pb-16 text-cream-50 lg:pt-40 lg:pb-20">
        <div className="mx-auto max-w-7xl px-5 text-center lg:px-8">
          <p className="section-label !text-terracotta-300">Catering</p>
          <h1 className="mt-3 font-serif text-5xl font-semibold sm:text-6xl">
            We Cater
          </h1>
        </div>
      </section>

      {/* Catering info + form */}
      <section className="bg-cream-50 py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
          {/* Left: info */}
          <div className="reveal">
            <UtensilsCrossed size={40} className="text-terracotta-500" />
            <h2 className="mt-4 font-serif text-4xl font-semibold text-espresso-700">
              Let Us Cater Your Next Event
            </h2>
            <p className="mt-4 text-base leading-relaxed text-espresso-500">
              From corporate lunches to private gatherings, Café Delamar brings
              the same quality and care to your catered events.
            </p>

            <div className="mt-8 border-l-2 border-terracotta-400 pl-6">
              <p className="text-xs uppercase tracking-widest2 text-espresso-400">
                Catering Contact
              </p>
              <p className="mt-1 font-serif text-2xl font-semibold text-espresso-700">
                {business.catering.contactName}
              </p>
              <a
                href={`tel:${business.catering.phoneTel}`}
                className="mt-2 inline-flex items-center gap-2 font-serif text-xl text-terracotta-500 hover:text-terracotta-600"
              >
                <Phone size={18} /> {business.catering.phone}
              </a>
            </div>

            <div className="mt-8 bg-cream-100 p-5">
              <p className="text-sm text-espresso-500">
                Prefer to call? We are happy to discuss your event details over
                the phone during business hours.
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div className="reveal">
            <div className="border border-cream-200 bg-cream-100 p-8 lg:p-10">
              <h3 className="font-serif text-2xl font-semibold text-espresso-700">
                Catering Inquiry
              </h3>
              <p className="mt-1 text-xs text-espresso-400">
                Submitting this form does not confirm a reservation. Café
                Delamar will contact you to discuss availability and details.
              </p>

              {status === 'success' && (
                <div className="mt-5 flex items-start gap-3 border border-sage-300 bg-sage-50 p-4">
                  <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-sage-600" />
                  <p className="text-sm text-sage-700">
                    Thank you. Your catering inquiry has been received. Café
                    Delamar will contact you to discuss availability and
                    details.
                  </p>
                </div>
              )}

              {status === 'error' && (
                <div className="mt-5 flex items-start gap-3 border border-burgundy-300 bg-burgundy-50 p-4">
                  <AlertCircle size={20} className="mt-0.5 shrink-0 text-burgundy-500" />
                  <p className="text-sm text-burgundy-700">
                    Something went wrong. Please try again or call us directly
                    at {business.phone}.
                  </p>
                </div>
              )}

              {status === 'config' && (
                <div className="mt-5 flex items-start gap-3 border border-terracotta-300 bg-terracotta-50 p-4">
                  <AlertCircle size={20} className="mt-0.5 shrink-0 text-terracotta-600" />
                  <p className="text-sm text-terracotta-700">
                    Thank you. Your catering inquiry has been received. Café
                    Delamar will contact you to discuss availability and
                    details.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-6 space-y-5" noValidate>
                <FormField label="Name" name="name" required error={errors.name} />
                <FormField label="Email" name="email" type="email" required error={errors.email} />
                <FormField label="Phone" name="phone" type="tel" required error={errors.phone} />
                <FormField label="Event Date" name="eventDate" type="date" required error={errors.eventDate} />
                <FormField label="Estimated Number of Guests" name="guests" type="number" required error={errors.guests} />

                <div>
                  <label htmlFor="eventType" className="mb-1.5 block text-sm font-medium text-espresso-600">
                    Event Type <span className="text-terracotta-500">*</span>
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    className="input-field"
                    required
                    aria-required="true"
                  >
                    <option value="">Select an event type</option>
                    <option value="corporate">Corporate Lunch</option>
                    <option value="private">Private Gathering</option>
                    <option value="party">Party / Celebration</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.eventType && (
                    <p className="mt-1 text-xs text-burgundy-500">{errors.eventType}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-espresso-600">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="input-field resize-none"
                    placeholder="Tell us about your event..."
                  />
                </div>

                <button type="submit" className="btn-accent w-full">
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function FormField({
  label,
  name,
  type = 'text',
  required,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  error?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-espresso-600">
        {label} {required && <span className="text-terracotta-500">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className="input-field"
        required={required}
        aria-required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
      />
      {error && (
        <p id={`${name}-error`} className="mt-1 text-xs text-burgundy-500">
          {error}
        </p>
      )}
    </div>
  );
}
