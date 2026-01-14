'use client';

import { useState, FormEvent } from 'react';
import { cn, isValidEmail } from '@/lib/utils';
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

interface WaitlistFormProps {
  id?: string;
  placeholder?: string;
  buttonText?: string;
  className?: string;
  variant?: 'default' | 'compact' | 'hero';
  source?: string;
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

const MESSAGES = {
  success: "You're on the list! We'll email you when Hoof Direct launches.",
  error: 'Something went wrong. Please try again.',
  alreadySubscribed: "You're already on the waitlist. We'll be in touch soon!",
  invalidEmail: 'Please enter a valid email address.',
};

export function WaitlistForm({
  id,
  placeholder = 'Enter your email',
  buttonText = 'Get Early Access',
  className,
  variant = 'default',
  source = 'website',
}: WaitlistFormProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<FormStatus>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setStatus('error');
      setMessage(MESSAGES.invalidEmail);
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, source }),
      });

      const data = await response.json();

      if (response.status === 201) {
        setStatus('success');
        setMessage(MESSAGES.success);
        setEmail('');
      } else if (response.status === 409) {
        // Already subscribed - treat as success
        setStatus('success');
        setMessage(MESSAGES.alreadySubscribed);
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || MESSAGES.error);
      }
    } catch {
      setStatus('error');
      setMessage(MESSAGES.error);
    }
  };

  const isHero = variant === 'hero';
  const isCompact = variant === 'compact';

  return (
    <div className={cn('w-full', className)} id={id}>
      <form onSubmit={handleSubmit} className="w-full">
        <div
          className={cn(
            'flex gap-3',
            isHero
              ? 'flex-col sm:flex-row'
              : isCompact
              ? 'flex-row'
              : 'flex-col sm:flex-row'
          )}
        >
          <div className="relative flex-1">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === 'error') {
                  setStatus('idle');
                  setMessage('');
                }
              }}
              placeholder={placeholder}
              disabled={status === 'loading' || status === 'success'}
              className={cn(
                'w-full px-4 py-3 rounded-lg border-2 transition-all duration-200',
                'bg-white text-text-primary placeholder:text-text-muted',
                'focus:outline-none focus:ring-0',
                isHero ? 'text-base md:text-lg py-4' : 'text-base',
                status === 'error'
                  ? 'border-error focus:border-error'
                  : 'border-outline-light focus:border-primary',
                status === 'success' && 'opacity-50 cursor-not-allowed'
              )}
              aria-label="Email address"
              aria-invalid={status === 'error'}
              aria-describedby={status !== 'idle' ? 'form-message' : undefined}
            />
          </div>
          <button
            type="submit"
            disabled={status === 'loading' || status === 'success'}
            className={cn(
              'px-6 py-3 rounded-lg font-semibold transition-all duration-200',
              'bg-primary text-white hover:bg-primary-dark',
              'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
              'disabled:opacity-50 disabled:cursor-not-allowed',
              'flex items-center justify-center gap-2 whitespace-nowrap',
              isHero ? 'text-base md:text-lg py-4' : 'text-base',
              isCompact ? 'px-4' : 'px-6 sm:px-8'
            )}
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Joining...</span>
              </>
            ) : status === 'success' ? (
              <>
                <CheckCircle className="w-5 h-5" />
                <span>Joined!</span>
              </>
            ) : (
              buttonText
            )}
          </button>
        </div>
      </form>

      {/* Status Message */}
      {message && (
        <div
          id="form-message"
          className={cn(
            'mt-3 flex items-center gap-2 text-sm animate-fade-in',
            status === 'success' ? 'text-success' : 'text-error'
          )}
          role={status === 'error' ? 'alert' : 'status'}
        >
          {status === 'success' ? (
            <CheckCircle className="w-4 h-4 flex-shrink-0" />
          ) : (
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
          )}
          <span>{message}</span>
        </div>
      )}
    </div>
  );
}
