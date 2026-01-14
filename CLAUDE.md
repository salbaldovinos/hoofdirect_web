# CLAUDE.md - Hoof Direct Landing Page

## Project Overview

This is a pre-launch marketing landing page for **Hoof Direct**, a native Android CRM application for professional farriers (horseshoers). The primary goal is to capture email signups for a waitlist before app launch.

**Domain**: hoofdirect.com  
**Target Audience**: Professional farriers in the United States (~25,000 full-time)

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Hosting**: Vercel
- **Email**: Mailchimp (external - form posts to Mailchimp)
- **Analytics**: Vercel Analytics (optional GA4)

## Commands

```bash
# Development
npm run dev           # Start dev server on localhost:3000

# Build & Deploy
npm run build         # Production build
npm run start         # Run production build locally
npm run lint          # ESLint check

# Vercel
vercel                # Deploy preview
vercel --prod         # Deploy production
```

## Project Structure

```
hoofdirect-landing/
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata
│   ├── page.tsx            # Main landing page
│   ├── privacy/page.tsx    # Privacy policy
│   ├── terms/page.tsx      # Terms of service
│   └── globals.css         # Global styles, Tailwind imports
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section with primary CTA
│   ├── ProblemSection.tsx  # Pain points farriers face
│   ├── Features.tsx        # Feature grid (route optimization hero)
│   ├── Comparison.tsx      # Us vs competitors table
│   ├── EarlyAccess.tsx     # Founding member benefits
│   ├── FAQ.tsx             # Accordion FAQ section
│   ├── FinalCTA.tsx        # Bottom email capture
│   ├── Footer.tsx          # Footer with links
│   └── WaitlistForm.tsx    # Reusable Mailchimp form component
├── lib/
│   └── constants.ts        # URLs, copy, feature data
├── public/
│   ├── images/             # Logo, mockups, icons
│   └── favicon.ico
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

## Key Business Context

### The Product

Hoof Direct is the **first farrier app with intelligent route optimization**. This is the core differentiator—no competitor offers this feature. The app:

- Optimizes daily routes to minimize drive time (saves 5+ hours/week)
- Works completely offline (critical for rural barns with no cell service)
- Syncs two-way with Google Calendar and iCal
- Includes invoicing, mileage tracking, client/horse management
- Costs $29/month (50% less than main competitor at $59/month)

### Target User Pain Points

1. **Wasted drive time**: Farriers manually plan routes on Google Maps
2. **No-shows**: 29% of missed appointments happen because clients forgot
3. **Offline failures**: Rural barns have no cell service; most apps fail
4. **Calendar chaos**: Appointments don't sync with personal calendars
5. **Expensive competitors**: The Farrier's App costs $59/month with poor reviews (3.1/5)

### Competitive Positioning

| Feature | Hoof Direct | The Farrier's App | Best Farrier |
|---------|-------------|-------------------|--------------|
| Route Optimization | ✅ Yes | ❌ No | ❌ No |
| Price | $29/mo | $59/mo | $31/mo |
| Offline Mode | ✅ Native | ⚠️ Glitchy | ✅ Yes |
| Calendar Sync | ✅ Two-way | ❌ None | ⚠️ Export only |

### Pricing Tiers

- **Free**: 10 clients, no route optimization
- **Solo Farrier**: $29/mo - 8 stops/day optimization
- **Growing Practice**: $79/mo - 15 stops/day, 2 users
- **Multi-Farrier**: $149/mo - Unlimited routes, 5 users

### Waitlist Incentive

- **20% off paid tiers for life** for founding members who sign up early

## Design Direction

### Visual Identity

- **Tone**: Professional, trustworthy, field-ready
- **Industry feel**: Equine/agricultural without being cliché
- **Color palette**: Earth tones (browns, warm grays) with teal/green accent
- **Typography**: Clean, highly readable, substantial weight
- **Mobile-first**: Farriers will visit from phones

### Design Principles

1. **Trust signals**: Professional, established, reliable
2. **Speed-focused messaging**: Time savings is the hero benefit
3. **Simplicity**: Farriers are busy; don't overwhelm
4. **High contrast**: Readable outdoors in bright light
5. **Conversion-focused**: Clear CTAs, minimal distractions

### Avoid

- Generic SaaS blue gradients
- Overly playful/startup-y aesthetics
- Stock photos of horses (feels cheap)
- Cluttered layouts with too many CTAs
- Inter/Roboto/system fonts

## Page Sections (In Order)

### 1. Header
- Logo (left)
- "Join the Waitlist" button (right)
- Sticky on scroll

### 2. Hero
- **Headline**: "Stop Wasting Hours Planning Routes" or "The First Farrier App with Intelligent Route Optimization"
- **Subhead**: "Save 5+ hours every week with automatic route planning. Works offline. Half the price of competitors."
- **CTA**: Email input + "Get Early Access" button
- **Social proof**: "Join [X] farriers on the waitlist"
- **Visual**: App mockup or route optimization illustration

### 3. Problem Section
- "Sound Familiar?" or "The Daily Grind"
- Three pain points with icons:
  1. Hours wasted planning routes manually
  2. Clients who forget appointments
  3. Apps that don't work when you need them

### 4. Features
- **Route Optimization** (HERO - visually emphasized, larger card)
- Calendar Sync
- Offline Mode
- Invoicing
- Mileage Tracking
- Client Management

### 5. Comparison Table
- "Why Hoof Direct?"
- Simple table: Us vs. The Farrier's App vs. Best Farrier
- Route optimization row highlighted (we're the only ✅)

### 6. Early Access Benefits
- "Join as a Founding Member"
- Benefits list:
  - 20% off for life
  - Extended 30-day free trial
  - Direct input on features
  - Priority support

### 7. FAQ
Accordion style:
- When does it launch?
- Is it Android only?
- How does route optimization work?
- What will it cost?
- Do I need internet to use it?

### 8. Final CTA
- "Ready to Save Hours Every Week?"
- Email capture form (same as hero)

### 9. Footer
- © 2025 Hoof Direct
- Privacy Policy link
- Terms of Service link
- support@hoofdirect.com

## Mailchimp Integration

The waitlist form will submit to Mailchimp. Use their embedded form action URL:

```html
<form action="MAILCHIMP_FORM_ACTION_URL" method="POST">
  <input type="email" name="EMAIL" required />
  <input type="hidden" name="tags" value="waitlist,founding-member" />
  <button type="submit">Get Early Access</button>
</form>
```

The Mailchimp form action URL will be provided separately. For development, use a placeholder that logs to console.

## SEO Requirements

```tsx
// app/layout.tsx metadata
export const metadata = {
  title: 'Hoof Direct - Route-Optimized Scheduling for Farriers',
  description: 'The first farrier app with intelligent route optimization. Save 5+ hours every week. Works offline. Join the waitlist.',
  keywords: 'farrier app, farrier scheduling, farrier software, route optimization, horse shoeing app',
  openGraph: {
    title: 'Hoof Direct - Route-Optimized Scheduling for Farriers',
    description: 'Save 5+ hours every week with intelligent route planning.',
    url: 'https://hoofdirect.com',
    siteName: 'Hoof Direct',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hoof Direct - Route-Optimized Scheduling for Farriers',
    description: 'The first farrier app with intelligent route optimization.',
  },
}
```

## Performance Targets

- Lighthouse Performance: > 90
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- Mobile responsive: All breakpoints

## Code Style

- Use TypeScript strict mode
- Prefer `const` components with explicit return types
- Use Tailwind classes, avoid inline styles
- Extract repeated Tailwind patterns to components
- Use `clsx` or `cn` utility for conditional classes
- Semantic HTML (proper heading hierarchy, landmarks)
- Accessible: ARIA labels, focus states, contrast ratios

## Content Constants

Store all copy in `lib/constants.ts` for easy editing:

```typescript
export const COPY = {
  hero: {
    headline: "Stop Wasting Hours Planning Routes",
    subhead: "The first farrier app with intelligent route optimization...",
  },
  // ... etc
}

export const FEATURES = [
  {
    title: "Route Optimization",
    description: "Automatically reorder stops to minimize drive time...",
    icon: "MapPin",
    isHero: true,
  },
  // ... etc
]
```

## Environment Variables

```env
# .env.local
NEXT_PUBLIC_MAILCHIMP_URL=https://...  # Mailchimp form action URL
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX         # Google Analytics (optional)
```

## Deployment

1. Push to GitHub repository
2. Connect to Vercel
3. Add environment variables in Vercel dashboard
4. Configure custom domain (hoofdirect.com)
5. Enable Vercel Analytics

## Notes

- Logo will be provided separately - use text "Hoof Direct" as placeholder
- App mockups will be provided - use placeholder boxes initially
- Mailchimp URL will be provided after account setup
- Focus on mobile experience first (most traffic will be mobile)
