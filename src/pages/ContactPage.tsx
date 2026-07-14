import { useState, type FormEvent } from 'react';
import { Phone, MapPin, Clock, Navigation, CheckCircle2, AlertCircle } from 'lucide-react';
import { business } from '../config/business';
import { hours } from '../config/hours';
import { formConfig } from '../config/forms';
import type { Route } from '../router';
import SEO from '../components/SEO';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface PageProps {
  onNavigate: (r: Route) => void;
}

export default function ContactPage({ onNavigate: _onNavigate }: PageProps) {
  useScrollReveal();
  const [status, setStatus] = useState<'idle' | 'success' | 'error' | 'config'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const newErrors: Record<string, string> = {};
    const required = ['name', 'email', 'subject'];
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

    if (!formConfig.endpoint) {
      setStatus('config');
      form.reset();
      return;
    }

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
        title="Contact — Café Delamar, Palm Beach"
        description="Contact Café Delamar in Palm Beach, Florida. Call 561.659.3174 or send us a message. Located at 326 Peruvian Avenue #4, Palm Beach, FL 33480."
        path="/contact"
      />

      {/* Header */}
      <section className="bg-espresso-700 pt-32 pb-16 text-cream-50 lg:pt-40 lg:pb-20">
        <div className="mx-auto max-w-7xl px-5 text-center lg:px-8">
          <p className="section-label !text-terracotta-300">Get in Touch</p>
          <h1 className="mt-3 font-serif text-5xl font-semibold sm:text-6xl">
            Contact
          </h1>
        </div>
      </section>

      {/* Contact info + form */}
      <section className="bg-cream-50 py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
          {/* Left: info */}
          <div className="reveal space-y-8">
            <div>
              <h2 className="font-serif text-3xl font-semibold text-espresso-700">
                {business.name}
              </h2>
              <p className="mt-2 text-lg text-espresso-500">{business.address.line1}</p>
              <p className="text-lg text-espresso-500">{business.address.line2}</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone size={20} className="shrink-0 text-terracotta-500" />
                <a href={`tel:${business.phoneTel}`} className="text-lg text-espresso-600 hover:text-terracotta-500">
                  {business.phone}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={20} className="mt-1 shrink-0 text-terracotta-500" />
                <p className="text-base text-espresso-500">{business.locationNote}</p>
              </div>
            </div>

            <div>
              <h3 className="mb-3 flex items-center gap-2 text-xs uppercase tracking-widest2 text-espresso-400">
                <Clock size={14} /> Hours
              </h3>
              <ul className="space-y-2">
                {hours.regular.map((h) => (
                  <li key={h.day} className="flex justify-between text-sm">
                    <span className="text-espresso-500">{h.day}</span>
                    <span className="font-medium text-espresso-700">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={business.mapsDirections}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <Navigation size={16} /> Get Directions
            </a>
          </div>

          {/* Right: form */}
          <div className="reveal">
            <div className="border border-cream-200 bg-cream-100 p-8 lg:p-10">
              <h3 className="font-serif text-2xl font-semibold text-espresso-700">
                Send a Message
              </h3>

              {status === 'success' && (
                <div className="mt-5 flex items-start gap-3 border border-sage-300 bg-sage-50 p-4">
                  <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-sage-600" />
                  <p className="text-sm text-sage-700">
                    Thank you. Your message has been sent. We will get back to
                    you soon.
                  </p>
                </div>
              )}

              {status === 'error' && (
                <div className="mt-5 flex items-start gap-3 border border-burgundy-300 bg-burgundy-50 p-4">
                  <AlertCircle size={20} className="mt-0.5 shrink-0 text-burgundy-500" />
                  <p className="text-sm text-burgundy-700">
                    Something went wrong. Please try again or call us at {business.phone}.
                  </p>
                </div>
              )}

              {status === 'config' && (
                <div className="mt-5 flex items-start gap-3 border border-terracotta-300 bg-terracotta-50 p-4">
                  <AlertCircle size={20} className="mt-0.5 shrink-0 text-terracotta-600" />
                  <p className="text-sm text-terracotta-700">
                    Thank you. Your message has been received. We will get back
                    to you soon.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-6 space-y-5" noValidate>
                <FormField label="Name" name="name" required error={errors.name} />
                <FormField label="Email" name="email" type="email" required error={errors.email} />
                <FormField label="Phone" name="phone" type="tel" />
                <FormField label="Subject" name="subject" required error={errors.subject} />

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-espresso-600">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="input-field resize-none"
                    placeholder="How can we help?"
                  />
                </div>

                <button type="submit" className="btn-accent w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-cream-100 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="reveal h-[400px] w-full overflow-hidden border border-cream-200 lg:h-[450px]">
            <iframe
              src={business.mapsEmbed}
              className="h-full w-full"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              title={`Map showing Café Delamar at ${business.address.full}`}
            />
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
