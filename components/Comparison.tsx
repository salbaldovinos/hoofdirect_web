'use client';

import { COMPARISON } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { Check, X, Minus } from 'lucide-react';

function ValueCell({ value, isFirst }: { value: string; isFirst: boolean }) {
  if (value === 'yes') {
    return (
      <div className={cn(
        'flex items-center justify-center',
        isFirst && 'text-success'
      )}>
        <Check className="w-5 h-5" />
      </div>
    );
  }

  if (value === 'no') {
    return (
      <div className="flex items-center justify-center text-error">
        <X className="w-5 h-5" />
      </div>
    );
  }

  if (value === 'partial') {
    return (
      <div className="flex items-center justify-center text-warning">
        <Minus className="w-5 h-5" />
      </div>
    );
  }

  return (
    <span className={cn(
      'text-sm',
      isFirst ? 'font-semibold text-text-primary' : 'text-text-secondary'
    )}>
      {value}
    </span>
  );
}

export function Comparison() {
  return (
    <section className="section bg-white" aria-labelledby="comparison-heading">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            id="comparison-heading"
            className="font-serif text-3xl md:text-4xl font-medium text-text-primary mb-4"
          >
            {COMPARISON.headline}
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            {COMPARISON.subheadline}
          </p>
        </div>

        {/* Comparison Table - Desktop */}
        <div className="hidden md:block max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl border border-outline-light shadow-lg">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-primary/5 to-primary/10">
                  <th className="py-4 px-6 text-left text-text-secondary font-medium">
                    Feature
                  </th>
                  {COMPARISON.competitors.map((competitor, index) => (
                    <th
                      key={competitor}
                      className={cn(
                        'py-4 px-6 text-center font-semibold',
                        index === 0
                          ? 'text-primary bg-primary/10'
                          : 'text-text-primary'
                      )}
                    >
                      {competitor}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISON.features.map((feature, rowIndex) => (
                  <tr
                    key={feature.name}
                    className={cn(
                      'border-t border-outline-light/50',
                      feature.highlight && 'bg-success/5'
                    )}
                  >
                    <td
                      className={cn(
                        'py-4 px-6 font-medium',
                        feature.highlight ? 'text-success' : 'text-text-primary'
                      )}
                    >
                      {feature.name}
                      {feature.highlight && (
                        <span className="ml-2 text-xs bg-success/10 text-success px-2 py-0.5 rounded-full">
                          Key Differentiator
                        </span>
                      )}
                    </td>
                    {feature.values.map((value, colIndex) => (
                      <td
                        key={`${feature.name}-${colIndex}`}
                        className={cn(
                          'py-4 px-6 text-center',
                          colIndex === 0 && 'bg-primary/5'
                        )}
                      >
                        <ValueCell value={value} isFirst={colIndex === 0} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Comparison Cards - Mobile */}
        <div className="md:hidden space-y-6">
          {COMPARISON.competitors.map((competitor, index) => (
            <div
              key={competitor}
              className={cn(
                'rounded-2xl overflow-hidden',
                index === 0
                  ? 'border-2 border-primary shadow-lg'
                  : 'border border-outline-light'
              )}
            >
              {/* Card Header */}
              <div
                className={cn(
                  'py-4 px-5',
                  index === 0 ? 'bg-primary text-white' : 'bg-gray-50'
                )}
              >
                <h3
                  className={cn(
                    'font-semibold text-lg',
                    index === 0 ? 'text-white' : 'text-text-primary'
                  )}
                >
                  {competitor}
                  {index === 0 && (
                    <span className="ml-2 text-xs bg-white/20 px-2 py-0.5 rounded-full">
                      Best Choice
                    </span>
                  )}
                </h3>
              </div>

              {/* Card Body */}
              <div className="p-5 space-y-3">
                {COMPARISON.features.map((feature) => (
                  <div
                    key={`${competitor}-${feature.name}`}
                    className={cn(
                      'flex items-center justify-between py-2',
                      feature.highlight && 'bg-success/5 -mx-2 px-2 rounded-lg'
                    )}
                  >
                    <span
                      className={cn(
                        'text-sm',
                        feature.highlight
                          ? 'font-medium text-success'
                          : 'text-text-secondary'
                      )}
                    >
                      {feature.name}
                    </span>
                    <ValueCell
                      value={feature.values[index]}
                      isFirst={index === 0}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
