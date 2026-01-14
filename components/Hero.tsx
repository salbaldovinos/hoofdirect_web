'use client';

import { HERO } from '@/lib/constants';
import { WaitlistForm } from './WaitlistForm';
import { MapPin, Clock, Wifi } from 'lucide-react';

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236D4C41' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container-custom relative z-10 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary/10 text-primary text-sm font-medium animate-fade-in-up opacity-0">
            <MapPin className="w-4 h-4" />
            <span>The First Farrier App with Route Optimization</span>
          </div>

          {/* Headline */}
          <h1
            id="hero-heading"
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-text-primary mb-6 leading-tight animate-fade-in-up opacity-0 delay-100"
          >
            {HERO.headline}
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-text-secondary mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up opacity-0 delay-200">
            {HERO.subheadline}
          </p>

          {/* Email Form */}
          <div className="max-w-xl mx-auto mb-6 animate-fade-in-up opacity-0 delay-300">
            <WaitlistForm
              id="hero-form"
              placeholder={HERO.placeholder}
              buttonText={HERO.cta}
              variant="hero"
            />
          </div>

          {/* Social Proof & Note */}
          <div className="space-y-2 animate-fade-in-up opacity-0 delay-400">
            <p className="text-sm text-text-muted">{HERO.note}</p>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-3 mt-10 animate-fade-in-up opacity-0 delay-500">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-md text-sm text-text-secondary">
              <Clock className="w-4 h-4 text-primary" />
              <span>Save 5+ hours/week</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-md text-sm text-text-secondary">
              <Wifi className="w-4 h-4 text-primary" />
              <span>Works offline</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-md text-sm text-text-secondary">
              <span className="text-primary font-semibold">$29/mo</span>
              <span>Half the price</span>
            </div>
          </div>
        </div>

        {/* Route Visualization Mockup */}
        <div className="mt-16 max-w-4xl mx-auto animate-fade-in-up opacity-0 delay-500">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white border border-outline-light/50">
            {/* Mock App Header */}
            <div className="bg-primary px-4 py-3 flex items-center justify-between">
              <span className="text-white font-medium">Today&apos;s Route</span>
              <span className="text-white/80 text-sm">6 stops</span>
            </div>

            {/* Mock Route Comparison */}
            <div className="p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Before */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="text-error font-medium">Before</span>
                    <span className="text-text-muted text-sm">Manual planning</span>
                  </div>
                  <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden">
                    {/* Mock map with scattered route */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 150">
                      <path
                        d="M20,120 L60,40 L100,130 L140,20 L180,90 L160,140"
                        fill="none"
                        stroke="#B3261E"
                        strokeWidth="3"
                        strokeDasharray="5,5"
                        opacity="0.7"
                      />
                      {/* Points */}
                      <circle cx="20" cy="120" r="8" fill="#B3261E" />
                      <circle cx="60" cy="40" r="8" fill="#B3261E" />
                      <circle cx="100" cy="130" r="8" fill="#B3261E" />
                      <circle cx="140" cy="20" r="8" fill="#B3261E" />
                      <circle cx="180" cy="90" r="8" fill="#B3261E" />
                      <circle cx="160" cy="140" r="8" fill="#B3261E" />
                    </svg>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-text-muted">Total distance:</span>
                    <span className="text-error font-semibold">127 miles</span>
                  </div>
                </div>

                {/* After */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="text-success font-medium">After</span>
                    <span className="text-text-muted text-sm">Optimized route</span>
                  </div>
                  <div className="relative h-48 bg-gradient-to-br from-green-50 to-green-100 rounded-xl overflow-hidden border-2 border-success/20">
                    {/* Mock map with optimized route */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 150">
                      <path
                        d="M20,120 L60,130 L100,90 L140,60 L160,40 L180,30"
                        fill="none"
                        stroke="#2E7D32"
                        strokeWidth="3"
                        opacity="0.8"
                      />
                      {/* Points */}
                      <circle cx="20" cy="120" r="8" fill="#2E7D32" />
                      <text x="20" y="124" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">1</text>
                      <circle cx="60" cy="130" r="8" fill="#2E7D32" />
                      <text x="60" y="134" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">2</text>
                      <circle cx="100" cy="90" r="8" fill="#2E7D32" />
                      <text x="100" y="94" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">3</text>
                      <circle cx="140" cy="60" r="8" fill="#2E7D32" />
                      <text x="140" y="64" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">4</text>
                      <circle cx="160" cy="40" r="8" fill="#2E7D32" />
                      <text x="160" y="44" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">5</text>
                      <circle cx="180" cy="30" r="8" fill="#2E7D32" />
                      <text x="180" y="34" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">6</text>
                    </svg>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-text-muted">Total distance:</span>
                    <span className="text-success font-semibold">87 miles</span>
                  </div>
                </div>
              </div>

              {/* Savings Callout */}
              <div className="mt-6 p-4 bg-success/10 rounded-xl border border-success/20 text-center">
                <p className="text-success font-semibold text-lg">
                  Save 40 miles and 1+ hour every day
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-text-muted/30 flex items-start justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-text-muted/50" />
        </div>
      </div>
    </section>
  );
}
