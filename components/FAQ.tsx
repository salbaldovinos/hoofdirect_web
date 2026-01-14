'use client';

import { useState } from 'react';
import { FAQ } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div
      className={cn(
        'border-b border-outline-light/50 last:border-b-0',
        isOpen && 'bg-primary/5'
      )}
    >
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full py-5 px-6 text-left transition-colors hover:bg-primary/5 focus:outline-none focus:bg-primary/5"
        aria-expanded={isOpen}
      >
        <span className="font-medium text-text-primary pr-4">{question}</span>
        <ChevronDown
          className={cn(
            'w-5 h-5 text-text-muted flex-shrink-0 transition-transform duration-300',
            isOpen && 'rotate-180 text-primary'
          )}
        />
      </button>
      <div
        className={cn(
          'overflow-hidden transition-all duration-300 ease-out',
          isOpen ? 'max-h-96' : 'max-h-0'
        )}
      >
        <div className="px-6 pb-5 text-text-secondary leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section bg-white" aria-labelledby="faq-heading">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            id="faq-heading"
            className="font-serif text-3xl md:text-4xl font-medium text-text-primary mb-4"
          >
            {FAQ.headline}
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl border border-outline-light overflow-hidden shadow-sm">
            {FAQ.items.map((item, index) => (
              <FAQItem
                key={item.question}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>

        {/* Additional Help */}
        <div className="mt-10 text-center">
          <p className="text-text-secondary">
            Have another question?{' '}
            <a
              href="mailto:support@hoofdirect.com"
              className="text-primary font-medium hover:underline"
            >
              Email us
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
