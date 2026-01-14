import { Metadata } from 'next';
import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/constants';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: `Privacy Policy - ${SITE_CONFIG.name}`,
  description: `Privacy policy for ${SITE_CONFIG.name}. Learn how we collect, use, and protect your personal information.`,
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-24">
        {/* Content */}
        <div className="container-custom py-12 md:py-16">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-serif text-3xl md:text-4xl font-medium text-text-primary mb-8">
              Privacy Policy
            </h1>

            <div className="prose prose-lg max-w-none text-text-secondary">
              <p className="lead text-lg mb-8">
                Last updated: January 2026
              </p>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-text-primary mb-4">
                  1. Information We Collect
                </h2>
                <p className="mb-4">
                  When you sign up for our waitlist, we collect:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>Your email address</li>
                  <li>Information about how you heard about us (optional)</li>
                  <li>Basic analytics data about your visit to our website</li>
                </ul>
                <p>
                  When using the Hoof Direct application (upon launch), we will collect
                  additional information necessary to provide our services, including
                  client information, appointment data, and route information.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-text-primary mb-4">
                  2. How We Use Your Information
                </h2>
                <p className="mb-4">We use your information to:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Send you updates about our launch and product news</li>
                  <li>Provide and improve our services</li>
                  <li>Communicate with you about your account</li>
                  <li>Analyze usage patterns to improve our product</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-text-primary mb-4">
                  3. Data Storage and Security
                </h2>
                <p>
                  We take the security of your data seriously. All data is encrypted
                  in transit and at rest. We use industry-standard security measures
                  to protect your information from unauthorized access, disclosure,
                  alteration, or destruction.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-text-primary mb-4">
                  4. Email Communications
                </h2>
                <p>
                  By joining our waitlist, you agree to receive occasional emails
                  from us about product updates and launch announcements. You can
                  unsubscribe at any time by clicking the unsubscribe link in any
                  email we send.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-text-primary mb-4">
                  5. Third-Party Services
                </h2>
                <p className="mb-4">We use the following third-party services:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Mailchimp for email list management</li>
                  <li>Vercel for website hosting</li>
                  <li>Google Analytics for website analytics (optional)</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-text-primary mb-4">
                  6. Your Rights
                </h2>
                <p className="mb-4">You have the right to:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Access your personal data</li>
                  <li>Request correction of your data</li>
                  <li>Request deletion of your data</li>
                  <li>Unsubscribe from communications</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-text-primary mb-4">
                  7. Contact Us
                </h2>
                <p>
                  If you have questions about this privacy policy or your data,
                  please contact us at{' '}
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="text-primary hover:underline"
                  >
                    {SITE_CONFIG.email}
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-text-primary mb-4">
                  8. Changes to This Policy
                </h2>
                <p>
                  We may update this privacy policy from time to time. We will notify
                  you of any significant changes by email or through a notice on our
                  website.
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
