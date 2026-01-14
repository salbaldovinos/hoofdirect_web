# AGENTS.md - Hoof Direct Landing Page

## Agent Instructions

This file provides instructions for AI agents working on this codebase.

## Project Context

Pre-launch marketing landing page for Hoof Direct, a farrier CRM app. Goal: capture waitlist signups before app launch.

**Stack**: Next.js 15 + Tailwind CSS v4 + TypeScript + Vercel

## Critical Requirements

### 1. Design Quality

This is a MARKETING landing page. Design quality directly impacts conversions. Follow these principles:

**DO:**
- Create a distinctive, professional design that stands out
- Use a cohesive color palette (earth tones + teal accent)
- Choose interesting typography (NOT Inter, Roboto, Arial, or system fonts)
- Add subtle animations and micro-interactions
- Ensure perfect mobile responsiveness
- Use generous whitespace
- Make CTAs prominent and clear

**DON'T:**
- Use generic SaaS templates
- Default to blue/purple gradients
- Use stock photography
- Create cluttered layouts
- Ignore mobile experience
- Use bland, forgettable design

### 2. Conversion Focus

Every design decision should support email capture:

- Hero CTA must be above the fold
- Email form should be prominent and simple
- Reduce friction (single field + button)
- Include social proof near CTAs
- Use urgency/scarcity appropriately
- Repeat CTA at page bottom

### 3. Performance

- Target 90+ Lighthouse score
- Use Next.js Image component for all images
- Lazy load below-fold content
- Minimize JavaScript bundle
- Use CSS animations over JS where possible

## Implementation Guidelines

### Component Architecture

```typescript
// Preferred component structure
interface HeroProps {
  onSubmit?: (email: string) => void;
}

export function Hero({ onSubmit }: HeroProps) {
  return (
    <section className="..." aria-labelledby="hero-heading">
      <h1 id="hero-heading">...</h1>
      {/* content */}
    </section>
  );
}
```

### Styling Patterns

```typescript
// Use cn utility for conditional classes
import { cn } from '@/lib/utils';

<button className={cn(
  "px-6 py-3 rounded-lg font-semibold transition-all",
  "bg-teal-600 hover:bg-teal-700 text-white",
  "focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2",
  disabled && "opacity-50 cursor-not-allowed"
)}>
```

### Animation Guidelines

```css
/* Prefer CSS animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
}
```

Use `animation-delay` for staggered reveals:
```tsx
{features.map((feature, i) => (
  <FeatureCard 
    key={feature.title}
    style={{ animationDelay: `${i * 100}ms` }}
    className="animate-fade-in-up opacity-0"
  />
))}
```

### Form Handling

```typescript
// Mailchimp form pattern
export function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // For Mailchimp, we can use their JSONP endpoint or form post
    // Implementation depends on provided Mailchimp URL
  };

  return (
    <form onSubmit={handleSubmit} className="...">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
        className="..."
        aria-label="Email address"
      />
      <button 
        type="submit" 
        disabled={status === 'loading'}
        className="..."
      >
        {status === 'loading' ? 'Joining...' : 'Get Early Access'}
      </button>
    </form>
  );
}
```

### Responsive Breakpoints

Follow Tailwind's default breakpoints:
- `sm`: 640px (large phones)
- `md`: 768px (tablets)
- `lg`: 1024px (laptops)
- `xl`: 1280px (desktops)

Mobile-first approach:
```tsx
<div className="px-4 md:px-8 lg:px-16">
<h1 className="text-3xl md:text-4xl lg:text-5xl">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
```

### Accessibility Checklist

- [ ] Proper heading hierarchy (single h1, logical h2-h6)
- [ ] All images have alt text
- [ ] Form inputs have labels (visible or aria-label)
- [ ] Focus states visible on all interactive elements
- [ ] Color contrast meets WCAG AA (4.5:1 for text)
- [ ] Skip link for keyboard navigation
- [ ] Semantic HTML landmarks (header, main, section, footer)

### SEO Checklist

- [ ] Unique, descriptive title tag
- [ ] Meta description under 160 characters
- [ ] Open Graph tags for social sharing
- [ ] Canonical URL set
- [ ] Semantic heading structure
- [ ] Alt text on all images
- [ ] Fast page load (LCP < 2.5s)

## File-Specific Instructions

### app/layout.tsx
- Import custom fonts via next/font
- Set up metadata export
- Include global providers if needed
- Add Vercel Analytics component

### app/page.tsx
- Import all section components
- Keep minimal logic in page component
- Use semantic section ordering

### components/Hero.tsx
- Most important section - invest extra design effort
- Email form must be prominent
- Include social proof element
- Consider background treatment (gradient, pattern, illustration)

### components/Features.tsx
- Route Optimization card should be visually distinct (larger, different color, badge)
- Use consistent icon style
- Grid layout responsive to screen size

### components/Comparison.tsx
- Simple table structure
- Highlight our advantages with checkmarks/color
- Mobile: Consider card layout instead of table

### components/FAQ.tsx
- Accordion pattern with smooth animation
- Only one item open at a time
- Accessible with keyboard navigation

### lib/constants.ts
- All user-facing copy goes here
- Feature data with icons
- FAQ questions and answers
- Makes content updates easy without touching components

### lib/utils.ts
- cn() utility for className merging
- Any shared utility functions

## Testing Checklist

Before considering work complete:

1. **Visual Review**
   - [ ] Desktop layout looks polished (1280px+)
   - [ ] Tablet layout works (768px-1024px)
   - [ ] Mobile layout is excellent (< 640px)
   - [ ] No horizontal scroll on any viewport
   - [ ] All text is readable

2. **Functionality**
   - [ ] Email form validates properly
   - [ ] Form shows loading state
   - [ ] Form shows success/error states
   - [ ] All links work
   - [ ] Smooth scroll to sections (if implemented)

3. **Performance**
   - [ ] Run `npm run build` - no errors
   - [ ] Check Lighthouse score > 90
   - [ ] Images optimized and lazy-loaded
   - [ ] No layout shift on load

4. **Accessibility**
   - [ ] Tab through entire page - logical order
   - [ ] Screen reader test (or check with axe-core)
   - [ ] All interactive elements have focus states

## Common Pitfalls

1. **Generic Design**: This must NOT look like a template. Invest in distinctive typography, colors, and layout.

2. **Buried CTA**: Email capture form must be immediately visible on load, not hidden below the fold.

3. **Wall of Text**: Farriers are busy. Use concise copy, bullet points, visual hierarchy.

4. **Ignoring Mobile**: Most traffic will be mobile. Design and test mobile first.

5. **Slow Load**: Keep bundle small. Use static rendering. Optimize images.

6. **Missing Focus States**: Every button and link needs visible focus indicator.

## Reference Links

- [Next.js 15 Docs](https://nextjs.org/docs)
- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs)
- [Vercel Deployment](https://vercel.com/docs)
- [Mailchimp Embedded Forms](https://mailchimp.com/help/add-a-signup-form-to-your-website/)
