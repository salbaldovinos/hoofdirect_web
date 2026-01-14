'use client';

import { FEATURES } from '@/lib/constants';
import { cn } from '@/lib/utils';
import {
  Route,
  WifiOff,
  Calendar,
  Receipt,
  Car,
  Users,
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Route,
  WifiOff,
  Calendar,
  Receipt,
  Car,
  Users,
};

export function Features() {
  // Separate hero feature from others
  const heroFeature = FEATURES.items.find((item) => item.isHero);
  const otherFeatures = FEATURES.items.filter((item) => !item.isHero);

  return (
    <section
      className="section bg-gradient-section"
      aria-labelledby="features-heading"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            id="features-heading"
            className="font-serif text-3xl md:text-4xl font-medium text-text-primary mb-4"
          >
            {FEATURES.headline}
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            {FEATURES.subheadline}
          </p>
        </div>

        {/* Hero Feature - Route Optimization */}
        {heroFeature && (
          <div className="mb-12">
            <div
              className={cn(
                'relative overflow-hidden rounded-3xl',
                'bg-gradient-to-br from-primary to-primary-dark',
                'p-8 md:p-12 text-white shadow-xl'
              )}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <svg
                  className="absolute right-0 top-0 h-full w-1/2"
                  viewBox="0 0 200 400"
                >
                  <path
                    d="M0,50 Q100,100 50,200 T100,350"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <path
                    d="M50,0 Q150,100 100,200 T150,400"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                  />
                </svg>
              </div>

              <div className="relative z-10 max-w-3xl">
                {/* Badge */}
                {heroFeature.badge && (
                  <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold uppercase tracking-wider bg-white/20 rounded-full">
                    {heroFeature.badge}
                  </span>
                )}

                {/* Icon */}
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20">
                  <Route className="w-8 h-8" />
                </div>

                {/* Content */}
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                  {heroFeature.title}
                </h3>
                <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl">
                  {heroFeature.description}
                </p>

                {/* Stats */}
                <div className="mt-8 flex flex-wrap gap-6">
                  <div className="bg-white/10 rounded-xl px-5 py-3">
                    <div className="text-2xl font-bold">20%+</div>
                    <div className="text-sm text-white/80">Fuel savings</div>
                  </div>
                  <div className="bg-white/10 rounded-xl px-5 py-3">
                    <div className="text-2xl font-bold">5+</div>
                    <div className="text-sm text-white/80">Hours saved/week</div>
                  </div>
                  <div className="bg-white/10 rounded-xl px-5 py-3">
                    <div className="text-2xl font-bold">1 Tap</div>
                    <div className="text-sm text-white/80">To optimize</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherFeatures.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
              <div
                key={feature.title}
                className={cn(
                  'group p-6 rounded-2xl bg-white',
                  'border border-outline-light/50 shadow-sm',
                  'transition-all duration-300',
                  'hover:shadow-lg hover:border-primary/20 hover:-translate-y-1'
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-white">
                  {Icon && <Icon className="w-6 h-6" />}
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
