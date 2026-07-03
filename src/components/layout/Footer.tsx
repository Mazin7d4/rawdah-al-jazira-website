import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Container } from "@/components/ui/Container";
import { company } from "@/data/company";
import { services } from "@/data/services";
import { navLinks } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();
  const half = Math.ceil(services.length / 2);

  return (
    <footer className="pattern-dark bg-brand-950 text-ivory-200">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          <div>
            <Logo tone="dark" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-ivory-200/70">
              {company.meaning}
            </p>
          </div>

          <div>
            <h3 className="text-[0.7rem] font-bold uppercase tracking-[0.28em] text-gold-400">
              Services
            </h3>
            <ul className="mt-5 space-y-2.5 text-sm">
              {services.slice(0, half).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="transition-colors hover:text-gold-300"
                  >
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[0.7rem] font-bold uppercase tracking-[0.28em] text-gold-400">
              &nbsp;
            </h3>
            <ul className="mt-5 space-y-2.5 text-sm">
              {services.slice(half).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="transition-colors hover:text-gold-300"
                  >
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[0.7rem] font-bold uppercase tracking-[0.28em] text-gold-400">
              Contact
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <a
                  href={company.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 transition-colors hover:text-gold-300"
                >
                  <MapPin className="mt-0.5 size-4 shrink-0 text-gold-400" aria-hidden />
                  {company.addressLine}
                </a>
              </li>
              <li>
                <a
                  href={company.phoneHref}
                  className="flex items-center gap-3 transition-colors hover:text-gold-300"
                >
                  <Phone className="size-4 shrink-0 text-gold-400" aria-hidden />
                  {company.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-center gap-3 transition-colors hover:text-gold-300"
                >
                  <Mail className="size-4 shrink-0 text-gold-400" aria-hidden />
                  {company.email}
                </a>
              </li>
            </ul>
            <nav aria-label="Footer" className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-semibold transition-colors hover:text-gold-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <hr className="hairline-gold mt-14 opacity-40" />

        <div className="mt-7 flex flex-col items-center justify-between gap-4 text-xs text-ivory-200/60 sm:flex-row">
          <p>
            © {year} {company.legalName}. All rights reserved.
          </p>
          <p className="flex gap-5">
            <Link href="/privacy" className="transition-colors hover:text-gold-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-gold-300">
              Terms of Service
            </Link>
          </p>
        </div>
      </Container>
    </footer>
  );
}
