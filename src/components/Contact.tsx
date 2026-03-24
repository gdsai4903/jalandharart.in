"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
  message: string;
}

function LocationIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gold flex-shrink-0">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gold flex-shrink-0">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gold flex-shrink-0">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 4l-10 8L2 4" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gold flex-shrink-0">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch("https://formspree.io/f/REPLACE_WITH_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setSubmitError(true);
      }
    } catch {
      setSubmitError(true);
    }
  };

  return (
    <section
      id="contact"
      className="scroll-mt-20 py-20 md:py-28 px-6 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-gold font-body mb-3">
            Reach Out
          </p>
          <div className="w-[60px] h-[2px] bg-gold mx-auto mb-6" />
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-charcoal mb-3">
            Get in Touch
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Contact details */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <LocationIcon />
              <p className="text-charcoal/70 text-sm leading-relaxed">
                16, New Raja Garden Colony,<br />
                Mithapur Chowk, Jalandhar, Punjab
              </p>
            </div>
            <div className="flex items-center gap-4">
              <PhoneIcon />
              <a
                href="tel:+917005240008"
                className="text-charcoal/70 hover:text-gold text-sm transition-colors"
              >
                +91 70052-40008
              </a>
            </div>
            <div className="flex items-center gap-4">
              <EmailIcon />
              <a
                href="mailto:artsukhvinder@gmail.com"
                className="text-charcoal/70 hover:text-gold text-sm transition-colors"
              >
                artsukhvinder@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <FacebookIcon />
              <a
                href="https://facebook.com/artsukhvinder"
                target="_blank"
                rel="noopener noreferrer"
                className="text-charcoal/70 hover:text-gold text-sm transition-colors"
              >
                facebook.com/artsukhvinder
              </a>
            </div>
          </div>

          {/* Contact form */}
          <div>
            {submitted ? (
              <div className="text-center py-12">
                <p className="font-heading text-2xl font-semibold text-charcoal mb-2">
                  Thank you!
                </p>
                <p className="text-charcoal/60 text-sm">
                  Sukhwinder will be in touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    {...register("name", { required: "Name is required" })}
                    className="w-full border border-charcoal/15 px-4 py-3 text-sm bg-cream/50 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email address",
                      },
                    })}
                    className="w-full border border-charcoal/15 px-4 py-3 text-sm bg-cream/50 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div>
                  <textarea
                    rows={5}
                    placeholder="Message"
                    {...register("message", {
                      required: "Message is required",
                    })}
                    className="w-full border border-charcoal/15 px-4 py-3 text-sm bg-cream/50 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors resize-none"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {submitError && (
                  <p className="text-red-500 text-sm">
                    Something went wrong. Please email directly at{" "}
                    <a
                      href="mailto:artsukhvinder@gmail.com"
                      className="underline"
                    >
                      artsukhvinder@gmail.com
                    </a>
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-charcoal text-white px-8 py-3 text-sm tracking-widest uppercase hover:bg-charcoal/80 transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
