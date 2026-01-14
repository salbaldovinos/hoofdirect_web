'use client';

import { PROBLEM } from '@/lib/constants';
import { Clock, UserX, WifiOff } from 'lucide-react';
import { cn } from '@/lib/utils';

const iconMap: Record<string, React.ElementType> = {
  Clock,
  UserX,
  WifiOff,
};

export function ProblemSection() {
  return (
    <section className="section bg-white" aria-labelledby="problem-heading">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            id="problem-heading"
            className="font-serif text-3xl md:text-4xl font-medium text-text-primary mb-4"
          >
            {PROBLEM.headline}
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            {PROBLEM.subheadline}
          </p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {PROBLEM.points.map((point, index) => {
            const Icon = iconMap[point.icon];
            return (
              <div
                key={point.title}
                className={cn(
                  'group relative p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-earth/5 to-earth/10',
                  'border border-earth/10 transition-all duration-300',
                  'hover:shadow-lg hover:border-earth/20'
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="mb-5 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-earth/10 text-earth transition-transform group-hover:scale-110">
                  {Icon && <Icon className="w-7 h-7" />}
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  {point.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {point.description}
                </p>

                {/* Decorative Element */}
                <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-earth/5 -z-10 transition-transform group-hover:scale-150" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
