import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import { CtaBand } from "@/components/CtaBand";
import { ServiceCard } from "@/components/ServiceCard";
import { ServiceIcon } from "@/components/ServiceIcon";
import { Reveal } from "@/components/motion/Reveal";
import { StatCounter } from "@/components/motion/StatCounter";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { company } from "@/data/company";
import { services } from "@/data/services";
import {
  processSteps,
  sectors,
  stats,
  testimonials,
  valuePoints,
} from "@/data/site";

export default function HomePage() {
  return (
    <>
      {/* ————— Hero ————— */}
      <section className="pattern-dark relative overflow-hidden bg-brand-950">
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/60 to-transparent"
        />
        <Container className="relative py-24 text-center sm:py-32 lg:py-36">
          <Reveal>
            <p className="flex items-center justify-center gap-3 text-[0.7rem] font-bold uppercase tracking-[0.3em] text-gold-400">
              <span aria-hidden className="hairline-gold w-10" />
              Dubai&apos;s Premium Cleaning Partner
              <span aria-hidden className="hairline-gold w-10" />
            </p>
            <h1 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-semibold text-balance text-ivory-50 sm:text-5xl lg:text-6xl">
              A cleaner standard for Dubai&apos;s finest spaces.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ivory-200/80 sm:text-lg">
              {company.shortName}{" "}delivers premium commercial cleaning for
              universities, malls, hotels, offices and healthcare facilities —
              with trained ladies &amp; gents teams on monthly and yearly
              contracts.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <ButtonLink href="/contact" variant="ivory" size="lg">
                Request a Free Quote
                <ArrowRight className="size-5" aria-hidden />
              </ButtonLink>
              <ButtonLink
                href="/services"
                variant="outline"
                size="lg"
                className="border-ivory-200/40 text-ivory-100 hover:border-gold-400 hover:text-gold-300"
              >
                Explore Our Services
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <ul className="mx-auto mt-16 flex max-w-3xl flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-bold uppercase tracking-[0.18em] text-ivory-200/70">
              <li>Licensed Dubai L.L.C</li>
              <li aria-hidden className="text-gold-500">✦</li>
              <li>Ladies &amp; Gents Cleaners</li>
              <li aria-hidden className="text-gold-500">✦</li>
              <li>Monthly &amp; Yearly Contracts</li>
              <li aria-hidden className="text-gold-500">✦</li>
              <li>Supervised Quality Audits</li>
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* ————— Services ————— */}
      <section className="pattern-light py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="What We Do"
              title="Twelve specialised services. One accountable partner."
              lead="From university campuses to mall atriums, every service is delivered by trained teams with the right equipment — and a supervisor who owns the result."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={Math.min(i % 3, 2) * 0.08}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ————— Sectors ————— */}
      <section className="pattern-dark bg-brand-950 py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              tone="dark"
              eyebrow="Sectors We Serve"
              title="Trusted where standards are visible"
              lead="We specialise in environments where cleanliness is part of the institution's reputation — and procurement expects a partner, not a vendor."
            />
          </Reveal>
          <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-4">
            {sectors.map((sector, i) => (
              <Reveal key={sector.label} delay={Math.min(i % 4, 3) * 0.06}>
                <div className="h-full rounded-2xl border border-ivory-100/10 bg-ivory-100/5 p-6 text-center transition-colors duration-300 hover:border-gold-500/40">
                  <ServiceIcon
                    name={sector.icon}
                    className="mx-auto size-7 text-gold-400"
                  />
                  <h3 className="mt-4 font-display text-lg font-semibold text-ivory-50">
                    {sector.label}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-ivory-200/60">
                    {sector.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ————— Why us + stats ————— */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid items-start gap-14 lg:grid-cols-[1.1fr_1fr]">
            <Reveal>
              <SectionHeading
                align="left"
                eyebrow="Why Rawdah Al Jazira"
                title="The standard of a garden, kept every day"
                lead={company.meaning}
              />
              <div className="mt-10 grid gap-8 sm:grid-cols-2">
                {valuePoints.map((point) => (
                  <div key={point.title}>
                    <span className="flex size-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                      <ServiceIcon name={point.icon} className="size-5" />
                    </span>
                    <h3 className="mt-4 font-display text-lg font-semibold text-ink-900">
                      {point.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-500">
                      {point.text}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="pattern-dark rounded-3xl bg-brand-900 p-10 sm:p-12">
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.28em] text-gold-400">
                  At a Glance
                </p>
                <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-10">
                  {stats.map((stat) => (
                    <div key={stat.label}>
                      <dt className="sr-only">{stat.label}</dt>
                      <dd className="font-display text-4xl font-semibold text-ivory-50 sm:text-5xl">
                        <StatCounter value={stat.value} suffix={stat.suffix} />
                      </dd>
                      <p className="mt-2 text-sm text-ivory-200/70">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </dl>
                <hr className="hairline-gold mt-10 opacity-50" />
                <p className="mt-6 text-sm leading-relaxed text-ivory-200/70">
                  {company.responsePromise}
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ————— Process ————— */}
      <section className="pattern-light border-y border-ivory-300/60 bg-ivory-100 py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="How We Work"
              title="From first walkthrough to flawless routine"
              lead="A clear, accountable process — so you always know what is being done, by whom, and to what standard."
            />
          </Reveal>
          <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.08} className="h-full">
                <li className="relative h-full rounded-2xl border border-ivory-300/70 bg-white p-7 shadow-soft">
                  <span
                    aria-hidden
                    className="absolute right-6 top-5 font-display text-4xl font-semibold text-ivory-300"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex size-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                    <ServiceIcon name={step.icon} className="size-5" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-ink-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">
                    {step.text}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* ————— Testimonials ————— */}
      <section className="py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Client Voices"
              title="Judged by the people who inspect our work"
            />
          </Reveal>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.context} delay={i * 0.08} className="h-full">
                <figure className="flex h-full flex-col rounded-2xl border border-ivory-300/70 bg-white p-8 shadow-soft">
                  <Quote className="size-7 text-gold-500" aria-hidden />
                  <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-ink-700">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-6 border-t border-ivory-200 pt-5">
                    <p className="text-sm font-bold text-ink-900">{t.author}</p>
                    <p className="mt-0.5 text-xs text-ink-500">{t.context}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2} className="mt-12 text-center">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-bold text-brand-700 transition-colors hover:text-brand-800"
            >
              Learn more about our company
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </Reveal>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
