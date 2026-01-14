// lib/constants.ts
// All marketing copy and data for easy editing

export const SITE_CONFIG = {
  name: 'Hoof Direct',
  domain: 'hoofdirect.com',
  email: 'support@hoofdirect.com',
  tagline: 'Route-Optimized Scheduling for Professional Farriers',
};

export const SEO = {
  title: 'Hoof Direct - Route-Optimized Scheduling for Farriers',
  description: 'The first farrier app with intelligent route optimization. Save 5+ hours every week. Works offline. Join the waitlist for founding member pricing.',
  keywords: 'farrier app, farrier scheduling, farrier software, route optimization, horse shoeing app, farrier CRM, equine scheduling',
  ogImage: '/images/og-image.png',
};

export const HERO = {
  headline: 'Stop Wasting Hours Planning Routes',
  subheadline: 'The first farrier app with intelligent route optimization. Save 5+ hours every week, work offline anywhere, and manage your entire business from your phone.',
  cta: 'Get Early Access',
  placeholder: 'Enter your email',
  socialProof: 'Join farriers already on the waitlist',
  note: 'Free to join. Be first when we launch.',
};

export const PROBLEM = {
  headline: 'Sound Familiar?',
  subheadline: 'Every farrier knows these daily frustrations',
  points: [
    {
      title: 'Hours Lost to Route Planning',
      description: 'You spend your evenings on Google Maps, manually figuring out the best order to visit clients. There has to be a better way.',
      icon: 'Clock',
    },
    {
      title: 'Clients Who Forget',
      description: "You drive 45 minutes to a barn only to find the horses aren't caught. No-shows and forgotten appointments cost you time and money.",
      icon: 'UserX',
    },
    {
      title: 'Apps That Fail When You Need Them',
      description: "You're at a rural barn with no cell service. Your scheduling app won't load. You're stuck guessing your next appointment.",
      icon: 'WifiOff',
    },
  ],
};

export const FEATURES = {
  headline: 'Everything You Need to Run Your Business',
  subheadline: 'Built by people who understand farrier workflows',
  items: [
    {
      title: 'Intelligent Route Optimization',
      description: 'Tap one button to reorder your stops and minimize drive time. Uses the same technology as UPS and FedEx. Save 20%+ on fuel and get home earlier.',
      icon: 'Route',
      isHero: true,
      badge: 'Only App With This',
    },
    {
      title: 'Works Completely Offline',
      description: 'Full functionality without cell service. View schedules, add appointments, manage clients—everything syncs automatically when you have signal again.',
      icon: 'WifiOff',
      isHero: false,
    },
    {
      title: 'Two-Way Calendar Sync',
      description: 'Syncs with Google Calendar and iCal. Your farrier appointments appear alongside family events. Changes sync both ways automatically.',
      icon: 'Calendar',
      isHero: false,
    },
    {
      title: 'Professional Invoicing',
      description: 'Generate invoices in seconds from completed appointments. Send via email or text. Track who\'s paid and who hasn\'t.',
      icon: 'Receipt',
      isHero: false,
    },
    {
      title: 'Automatic Mileage Tracking',
      description: 'Log trips automatically for tax deductions. Export IRS-ready reports at year end. Never forget to track a drive again.',
      icon: 'Car',
      isHero: false,
    },
    {
      title: 'Client & Horse Records',
      description: 'Keep all your client information, horse details, and service history organized in one place. Access everything even without internet.',
      icon: 'Users',
      isHero: false,
    },
  ],
};

export const COMPARISON = {
  headline: 'Why Farriers Choose Hoof Direct',
  subheadline: 'See how we stack up against the competition',
  competitors: ['Hoof Direct', 'The Farrier\'s App', 'Best Farrier'],
  features: [
    {
      name: 'Route Optimization',
      values: ['yes', 'no', 'no'],
      highlight: true,
    },
    {
      name: 'Monthly Price',
      values: ['$29', '$59', '$31'],
      highlight: false,
    },
    {
      name: 'Works Offline',
      values: ['yes', 'partial', 'yes'],
      highlight: false,
    },
    {
      name: 'Calendar Sync',
      values: ['Two-way', 'None', 'Export only'],
      highlight: false,
    },
    {
      name: 'Mileage Tracking',
      values: ['yes', 'no', 'yes'],
      highlight: false,
    },
    {
      name: 'Play Store Rating',
      values: ['Coming Soon', '3.1 ★', '4.6 ★'],
      highlight: false,
    },
  ],
};

export const EARLY_ACCESS = {
  headline: 'Join as a Founding Member',
  subheadline: 'Get exclusive benefits when you sign up before launch',
  benefits: [
    {
      title: '20% Off For Life',
      description: 'Lock in founding member pricing. Your discount never expires, even as we add features.',
      icon: 'Percent',
    },
    {
      title: 'Extended Free Trial',
      description: '30 days to try every feature, no credit card required. Plenty of time to see the difference.',
      icon: 'Calendar',
    },
    {
      title: 'Shape the Product',
      description: 'Direct line to our team. Tell us what features matter most to your business.',
      icon: 'MessageSquare',
    },
    {
      title: 'Priority Support',
      description: 'Founding members get faster response times and dedicated onboarding help.',
      icon: 'Headphones',
    },
  ],
};

export const FAQ = {
  headline: 'Frequently Asked Questions',
  items: [
    {
      question: 'When does Hoof Direct launch?',
      answer: 'We\'re targeting launch in early 2025. Join the waitlist to be notified as soon as the app is available and get your founding member discount.',
    },
    {
      question: 'Is it Android only?',
      answer: 'We\'re launching on Android first, since that\'s what most farriers use. iOS is on the roadmap after we nail the Android experience. Waitlist members will be first to know when iOS is ready.',
    },
    {
      question: 'How does route optimization actually work?',
      answer: 'When you have multiple appointments for a day, tap "Optimize Route" and our algorithm reorders your stops to minimize total drive time. It uses the same underlying technology that powers delivery route planning for companies like UPS. Most farriers save 20-30% on drive time.',
    },
    {
      question: 'What will it cost?',
      answer: 'Plans start at $29/month for solo farriers—half the price of the leading competitor. There\'s a free tier for trying it out, and founding members get 20% off for life. We believe in earning your business every month.',
    },
    {
      question: 'Will it really work without internet?',
      answer: 'Yes, completely. The app stores everything locally on your phone. You can view your schedule, add appointments, manage clients, and even generate invoices with zero cell service. Everything syncs automatically when you\'re back online.',
    },
    {
      question: 'Can I import my existing clients?',
      answer: 'We\'re working on CSV import for launch. In the meantime, adding clients is quick and easy. Most farriers get their existing client list entered in an hour or two.',
    },
    {
      question: 'What if I need help?',
      answer: 'Email us at support@hoofdirect.com. Founding members get priority support with faster response times. We\'re real people who care about making your business easier to run.',
    },
  ],
};

export const FINAL_CTA = {
  headline: 'Ready to Save Hours Every Week?',
  subheadline: 'Join the waitlist for founding member pricing and be first to know when we launch.',
  cta: 'Get Early Access',
  placeholder: 'Enter your email',
};

export const FOOTER = {
  copyright: `© ${new Date().getFullYear()} Hoof Direct. All rights reserved.`,
  links: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
  contact: 'support@hoofdirect.com',
};

export const PRICING = {
  tiers: [
    {
      name: 'Free',
      price: 0,
      period: 'forever',
      description: 'Try it out',
      features: [
        '10 clients',
        '30 horses',
        'Basic scheduling',
        'No route optimization',
      ],
      cta: 'Start Free',
      highlighted: false,
    },
    {
      name: 'Solo Farrier',
      price: 29,
      period: 'month',
      description: 'For independent farriers',
      features: [
        'Unlimited clients & horses',
        '8 stops/day route optimization',
        'Calendar sync',
        '50 SMS reminders/month',
        'Mileage tracking',
        'Invoicing',
      ],
      cta: 'Join Waitlist',
      highlighted: true,
    },
    {
      name: 'Growing Practice',
      price: 79,
      period: 'month',
      description: 'For busy practices',
      features: [
        'Everything in Solo, plus:',
        '15 stops/day optimization',
        '2 team members',
        '200 SMS reminders/month',
        'Advanced reports',
        'Batch scheduling',
      ],
      cta: 'Join Waitlist',
      highlighted: false,
    },
    {
      name: 'Multi-Farrier',
      price: 149,
      period: 'month',
      description: 'For teams',
      features: [
        'Everything in Growing, plus:',
        'Unlimited route optimization',
        '5 team members',
        '500 SMS reminders/month',
        'Priority support',
        'Custom invoice branding',
      ],
      cta: 'Join Waitlist',
      highlighted: false,
    },
  ],
  foundingDiscount: 20,
  annualDiscount: 20,
};

export const FORM_MESSAGES = {
  success: "You're on the list! We'll email you when Hoof Direct launches.",
  error: 'Something went wrong. Please try again or email us directly.',
  alreadySubscribed: "Looks like you're already on the list. We'll be in touch soon!",
  invalidEmail: 'Please enter a valid email address.',
};

export const LINKS = {
  mailchimpForm: process.env.NEXT_PUBLIC_MAILCHIMP_URL || '#',
  playStore: '#',
  twitter: '#',
  facebook: '#',
};
