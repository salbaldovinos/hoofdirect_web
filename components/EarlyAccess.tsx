'use client';

import { EARLY_ACCESS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { Percent, Calendar, MessageSquare, Headphones } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Percent,
  Calendar,
  MessageSquare,
  Headphones,
};

export function EarlyAccess() {
  return (
    <section
      className="section bg-gradient-to-br from-earth/5 via-earth/10 to-earth/5"
      aria-labelledby="early-access-heading"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            id="early-access-heading"
            className="font-serif text-3xl md:text-4xl font-medium text-text-primary mb-4"
          >
            {EARLY_ACCESS.headline}
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            {EARLY_ACCESS.subheadline}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {EARLY_ACCESS.benefits.map((benefit, index) => {
            const Icon = iconMap[benefit.icon];
            return (
              <div
                key={benefit.title}
                className={cn(
                  'group relative p-6 lg:p-8 rounded-2xl bg-white',
                  'border border-earth/10 shadow-md',
                  'transition-all duration-300',
                  'hover:shadow-xl hover:border-earth/20 hover:-translate-y-1'
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-earth/10 text-earth transition-all group-hover:bg-earth group-hover:text-white">
                  {Icon && <Icon className="w-7 h-7" />}
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  {benefit.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {benefit.description}
                </p>

                {/* Index Badge */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-earth/5 flex items-center justify-center text-earth/30 font-bold text-sm">
                  {index + 1}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white shadow-md border border-earth/10">
            <div className="w-3 h-3 rounded-full bg-success animate-pulse" />
            <span className="text-text-secondary">
              Limited spots available for founding members
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
