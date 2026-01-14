import Link from 'next/link';
import Image from 'next/image';
import { FOOTER, SITE_CONFIG } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="bg-text-primary py-12" role="contentinfo">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" aria-label={`${SITE_CONFIG.name} - Home`}>
            <Image
              src="/images/logo_horz.webp"
              alt={`${SITE_CONFIG.name} logo`}
              width={150}
              height={34}
              className="h-8 w-auto brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
            />
          </Link>

          {/* Links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center justify-center gap-6">
              {FOOTER.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${FOOTER.contact}`}
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  {FOOTER.contact}
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-white/10 text-center">
          <p className="text-sm text-white/50">{FOOTER.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
