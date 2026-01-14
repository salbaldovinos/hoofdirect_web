import { Metadata } from 'next';
import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/constants';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: `Terms of Service - ${SITE_CONFIG.name}`,
  description: `Terms of service for ${SITE_CONFIG.name}. Read our terms and conditions for using our services.`,
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-24">
        {/* Content */}
        <div className="container-custom py-12 md:py-16">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-serif text-3xl md:text-4xl font-medium text-text-primary mb-8">
              Terms of Service
            </h1>

            <div className="prose prose-lg max-w-none text-text-secondary">
              <p className="lead text-lg mb-8">
                Last updated: January 2026
              </p>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-text-primary mb-4">
                  1. Acceptance of Terms
                </h2>
                <p>
                  By accessing or using Hoof Direct&apos;s website and services, you agree
                  to be bound by these Terms of Service. If you do not agree to these
                  terms, please do not use our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-text-primary mb-4">
                  2. Description of Service
                </h2>
                <p>
                  Hoof Direct provides a mobile application and related services for
                  professional farriers, including scheduling, route optimization,
                  client management, invoicing, and mileage tracking. The service is
                  currently in pre-launch phase, and we are collecting waitlist signups.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-text-primary mb-4">
                  3. Waitlist and Founding Member Benefits
                </h2>
                <p className="mb-4">
                  By joining our waitlist, you may qualify for founding member benefits,
                  including:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>20% discount on paid plans for the lifetime of your subscription</li>
                  <li>Extended 30-day free trial</li>
                  <li>Priority access to new features</li>
                  <li>Priority customer support</li>
                </ul>
                <p>
                  Founding member benefits are subject to availability and may be
                  modified or discontinued at our discretion before the official launch.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-text-primary mb-4">
                  4. User Responsibilities
                </h2>
                <p className="mb-4">When using our services, you agree to:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Provide accurate information when signing up</li>
                  <li>Use the service only for lawful purposes</li>
                  <li>Not attempt to access other users&apos; accounts or data</li>
                  <li>Not interfere with or disrupt the service</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-text-primary mb-4">
                  5. Intellectual Property
                </h2>
                <p>
                  All content, features, and functionality of Hoof Direct, including
                  but not limited to text, graphics, logos, and software, are owned
                  by Hoof Direct and protected by intellectual property laws.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-text-primary mb-4">
                  6. Limitation of Liability
                </h2>
                <p>
                  Hoof Direct is provided &quot;as is&quot; without warranties of any kind. We
                  do not guarantee that the service will be uninterrupted, secure, or
                  error-free. To the maximum extent permitted by law, Hoof Direct shall
                  not be liable for any indirect, incidental, special, or consequential
                  damages.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-text-primary mb-4">
                  7. Privacy
                </h2>
                <p>
                  Your privacy is important to us. Please review our{' '}
                  <Link href="/privacy" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>{' '}
                  to understand how we collect, use, and protect your information.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-text-primary mb-4">
                  8. Modifications to Service
                </h2>
                <p>
                  We reserve the right to modify, suspend, or discontinue any part of
                  our service at any time. We will provide reasonable notice of any
                  significant changes when possible.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-text-primary mb-4">
                  9. Changes to Terms
                </h2>
                <p>
                  We may update these terms from time to time. We will notify you of
                  significant changes by email or through a notice on our website.
                  Continued use of our services after such changes constitutes
                  acceptance of the new terms.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-text-primary mb-4">
                  10. Contact
                </h2>
                <p>
                  If you have questions about these terms, please contact us at{' '}
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="text-primary hover:underline"
                  >
                    {SITE_CONFIG.email}
                  </a>
                  .
                </p>
              </section>
            </div>

            {/* Back Link */}
            <div className="mt-12 pt-8 border-t border-outline-light">
              <Link
                href="/"
                className="text-primary font-medium hover:underline"
              >
                &larr; Back to Home
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
