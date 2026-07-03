"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { company } from "@/data/company";
import { navLinks } from "@/data/site";
import { cn } from "@/lib/cn";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    // Initial check runs in a frame callback so the effect body itself
    // doesn't set state synchronously.
    const frame = requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b backdrop-blur-md transition-all duration-300",
        scrolled
          ? "border-ivory-300/80 bg-ivory-50/95 shadow-soft"
          : "border-transparent bg-ivory-50/80",
      )}
    >
      <Container
        className={cn(
          "flex items-center justify-between transition-all duration-300",
          scrolled ? "py-3" : "py-4 sm:py-5",
        )}
      >
        <Logo />

        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-semibold tracking-wide transition-colors hover:text-brand-700",
                isActive(link.href) ? "text-brand-700" : "text-ink-700",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={company.phoneHref}
            className="flex items-center gap-2 text-sm font-bold text-ink-900 transition-colors hover:text-brand-700"
          >
            <Phone className="size-4 text-brand-700" strokeWidth={2} aria-hidden />
            {company.phoneDisplay}
          </a>
          <ButtonLink href="/contact" size="md">
            Request a Quote
          </ButtonLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="rounded-md p-2 text-ink-900 lg:hidden"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </Container>

      {/* Mobile menu */}
      {open && (
        <div className="absolute inset-x-0 top-full h-[calc(100vh-100%)] overflow-y-auto border-t border-ivory-300 bg-ivory-50 lg:hidden">
          <Container className="flex flex-col gap-1 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-lg px-3 py-3.5 font-display text-2xl font-semibold transition-colors",
                  isActive(link.href)
                    ? "text-brand-700"
                    : "text-ink-900 hover:text-brand-700",
                )}
              >
                {link.label}
              </Link>
            ))}
            <hr className="hairline-gold my-5" />
            <a
              href={company.phoneHref}
              className="flex items-center gap-3 px-3 py-2 font-bold text-ink-900"
            >
              <Phone className="size-5 text-brand-700" aria-hidden />
              {company.phoneDisplay}
            </a>
            {/* Wrapper closes the menu when the CTA navigates. */}
            <div className="mt-4 px-3" onClickCapture={() => setOpen(false)}>
              <ButtonLink href="/contact" size="lg" className="w-full">
                Request a Quote
              </ButtonLink>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
