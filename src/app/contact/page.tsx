import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Contact Us — Request a Quote",
  description: `Request a free cleaning quote from ${company.shortName}. Call ${company.phoneDisplay}, WhatsApp us, or send your requirements — we reply within one business day.`,
};

const contactItems = [
  {
    icon: MapPin,
    label: "Office",
    value: company.addressLine,
    href: company.mapsUrl,
    external: true,
  },
  {
    icon: Phone,
    label: "Phone",
    value: company.phoneDisplay,
    href: company.phoneHref,
  },
  {
    icon: Mail,
    label: "Email",
    value: company.email,
    href: `mailto:${company.email}`,
  },
  {
    icon: Clock,
    label: "Hours",
    value: company.hours,
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="pattern-dark bg-brand-950">
        <Container className="py-16 text-center sm:py-20">
          <Reveal>
            <p className="flex items-center justify-center gap-3 text-[0.7rem] font-bold uppercase tracking-[0.3em] text-gold-400">
              <span aria-hidden className="hairline-gold w-10" />
              Contact Us
              <span aria-hidden className="hairline-gold w-10" />
            </p>
            <h1 className="mx-auto mt-5 max-w-2xl font-display text-4xl font-semibold text-balance text-ivory-50 sm:text-5xl">
              Request your free quote
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ivory-200/80 sm:text-lg">
              Tell us about your facility and we will come back with a tailored
              proposal — {company.responsePromise.toLowerCase()}
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
            <Reveal>
              <div className="rounded-3xl border border-ivory-300/70 bg-white p-7 shadow-soft sm:p-10">
                <h2 className="font-display text-2xl font-semibold text-ink-900">
                  Tell us what you need
                </h2>
                <p className="mt-2 mb-8 text-sm text-ink-500">
                  Fields marked * are required.
                </p>
                <ContactForm />
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="flex h-full flex-col gap-6">
                <div className="pattern-dark rounded-3xl bg-brand-900 p-8">
                  <h2 className="text-[0.7rem] font-bold uppercase tracking-[0.28em] text-gold-400">
                    Reach Us Directly
                  </h2>
                  <ul className="mt-6 space-y-5">
                    {contactItems.map((item) => (
                      <li key={item.label} className="flex items-start gap-4">
                        <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-ivory-100/10 text-gold-400">
                          <item.icon className="size-5" strokeWidth={1.5} aria-hidden />
                        </span>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-[0.14em] text-ivory-200/60">
                            {item.label}
                          </p>
                          {item.href ? (
                            <a
                              href={item.href}
                              {...(item.external
                                ? { target: "_blank", rel: "noopener noreferrer" }
                                : {})}
                              className="mt-0.5 block text-sm font-semibold text-ivory-100 transition-colors hover:text-gold-300"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="mt-0.5 text-sm font-semibold text-ivory-100">
                              {item.value}
                            </p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={company.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-[#1faa53] px-6 py-3 text-sm font-bold text-white shadow-soft transition-all hover:bg-[#188f45] hover:shadow-lift"
                  >
                    <MessageCircle className="size-5" aria-hidden />
                    Chat on WhatsApp
                  </a>
                </div>

                <div className="flex-1 overflow-hidden rounded-3xl border border-ivory-300/70 shadow-soft">
                  <iframe
                    src={company.mapsEmbedUrl}
                    title={`Map — ${company.addressLine}`}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                    className="h-full min-h-72 w-full border-0"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
