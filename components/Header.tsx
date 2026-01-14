'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { SITE_CONFIG } from '@/lib/constants';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    const heroForm = document.getElementById('hero-form');
    if (heroForm) {
      heroForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
      const emailInput = heroForm.querySelector('input[type="email"]');
      if (emailInput) {
        (emailInput as HTMLInputElement).focus();
      }
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-4'
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center group"
          aria-label={`${SITE_CONFIG.name} - Home`}
        >
          <Image
            src="/images/logo_horz.webp"
            alt={`${SITE_CONFIG.name} logo`}
            width={180}
            height={40}
            className="h-8 md:h-10 w-auto transition-transform group-hover:scale-105"
            priority
          />
        </Link>

        <button
          onClick={scrollToForm}
          className={cn(
            'px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200',
            'focus:outline-none focus:ring-2 focus:ring-offset-2',
            isScrolled
              ? 'bg-primary text-white hover:bg-primary-dark focus:ring-primary'
              : 'bg-primary text-white hover:bg-primary-dark focus:ring-primary shadow-lg'
          )}
        >
          Join the Waitlist
        </button>
      </div>
    </header>
  );
}
