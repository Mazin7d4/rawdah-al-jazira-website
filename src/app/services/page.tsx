import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { ServiceCard } from "@/components/ServiceCard";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Twelve specialised commercial cleaning services across Dubai — schools and universities, hospitals, offices, malls, hotels, mosques, villas, parks, post-construction, marble polishing and events.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="pattern-dark bg-brand-950">
        <Container className="py-20 text-center sm:py-24">
          <Reveal>
            <p className="flex items-center justify-center gap-3 text-[0.7rem] font-bold uppercase tracking-[0.3em] text-gold-400">
              <span aria-hidden className="hairline-gold w-10" />
              Our Services
              <span aria-hidden className="hairline-gold w-10" />
            </p>
            <h1 className="mx-auto mt-5 max-w-2xl font-display text-4xl font-semibold text-balance text-ivory-50 sm:text-5xl">
              Specialised cleaning for every kind of space
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ivory-200/80 sm:text-lg">
              Every service below is available with ladies &amp; gents cleaners
              on monthly and yearly contracts — scoped precisely to your
              facility after a free site survey.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="pattern-light py-20 sm:py-24">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={Math.min(i % 3, 2) * 0.08}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title="Not sure which service fits your facility?"
        lead="Describe your space and we will recommend the right scope, schedule and team — starting with a free site survey."
      />
    </>
  );
}
