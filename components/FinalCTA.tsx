'use client';

import { FINAL_CTA } from '@/lib/constants';
import { WaitlistForm } from './WaitlistForm';

export function FinalCTA() {
  return (
    <section
      className="section bg-gradient-to-br from-primary via-primary-dark to-primary"
      aria-labelledby="final-cta-heading"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 400 400"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="20" cy="20" r="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Headline */}
          <h2
            id="final-cta-heading"
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4"
          >
            {FINAL_CTA.headline}
          </h2>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            {FINAL_CTA.subheadline}
          </p>

          {/* Form */}
          <div className="max-w-xl mx-auto">
            <WaitlistForm
              placeholder={FINAL_CTA.placeholder}
              buttonText={FINAL_CTA.cta}
              variant="hero"
              className="[&_input]:bg-white/95 [&_input]:border-white/20 [&_input]:text-text-primary [&_input]:placeholder:text-text-muted [&_button]:bg-earth [&_button]:hover:bg-earth-dark"
            />
          </div>

          {/* Trust Note */}
          <p className="mt-6 text-sm text-white/70">
            Free to join. No credit card required. Founding member benefits guaranteed.
          </p>
        </div>
      </div>
    </section>
  );
}
