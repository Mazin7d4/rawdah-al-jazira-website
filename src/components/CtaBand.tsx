import { MessageCircle, Phone } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { company } from "@/data/company";

/** Full-width closing call-to-action used at the bottom of most pages. */
export function CtaBand({
  title = "Ready to raise the standard of your facility?",
  lead = "Tell us about your space and we will arrange a free site survey — with a tailored proposal and quotation within days.",
}: {
  title?: string;
  lead?: string;
}) {
  return (
    <section className="pattern-dark bg-brand-900 py-20 sm:py-24">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold text-balance text-ivory-50 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ivory-200/80 sm:text-lg">
            {lead}
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ButtonLink href="/contact" variant="ivory" size="lg">
              Request a Free Quote
            </ButtonLink>
            <ButtonLink
              href={company.whatsappHref}
              external
              variant="outline"
              size="lg"
              className="border-ivory-200/40 text-ivory-100 hover:border-gold-400 hover:text-gold-300"
            >
              <MessageCircle className="size-5" aria-hidden />
              WhatsApp Us
            </ButtonLink>
          </div>
          <a
            href={company.phoneHref}
            className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-gold-300 transition-colors hover:text-gold-400"
          >
            <Phone className="size-4" aria-hidden />
            {company.phoneDisplay}
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
