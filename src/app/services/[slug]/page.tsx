import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { CtaBand } from "@/components/CtaBand";
import { ServiceIcon } from "@/components/ServiceIcon";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { getService, services } from "@/data/services";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${service.title} in Dubai`,
    description: service.excerpt,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      {/* ————— Hero ————— */}
      <section className="pattern-dark bg-brand-950">
        <Container className="py-16 sm:py-20">
          <Reveal>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-bold text-gold-400 transition-colors hover:text-gold-300"
            >
              <ArrowLeft className="size-4" aria-hidden />
              All Services
            </Link>
            <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center">
              <span className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-ivory-100/10 text-gold-400">
                <ServiceIcon name={service.icon} className="size-8" />
              </span>
              <div>
                <h1 className="font-display text-3xl font-semibold text-balance text-ivory-50 sm:text-4xl lg:text-5xl">
                  {service.title}
                </h1>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-ivory-200/80">
                  {service.excerpt}
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ————— Body ————— */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <Reveal>
                {service.intro.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 32)}
                    className="mt-5 text-base leading-relaxed text-ink-700 first:mt-0 sm:text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
              </Reveal>

              <Reveal delay={0.1}>
                <h2 className="mt-12 font-display text-2xl font-semibold text-ink-900">
                  What&apos;s included
                </h2>
                <ul className="mt-6 grid gap-3.5 sm:grid-cols-2">
                  {service.included.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2
                        className="mt-0.5 size-5 shrink-0 text-brand-600"
                        aria-hidden
                      />
                      <span className="text-sm leading-relaxed text-ink-700">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <Reveal delay={0.15}>
              <aside className="lg:sticky lg:top-28">
                <div className="rounded-3xl border border-ivory-300/70 bg-white p-8 shadow-soft">
                  <h2 className="font-display text-xl font-semibold text-ink-900">
                    Ideal for
                  </h2>
                  <ul className="mt-5 space-y-3">
                    {service.idealFor.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-ink-700"
                      >
                        <span
                          aria-hidden
                          className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold-500"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <hr className="hairline-gold my-7" />
                  <p className="text-sm leading-relaxed text-ink-500">
                    Ladies &amp; gents cleaners available, on monthly or yearly
                    contracts. Every engagement starts with a free site survey.
                  </p>
                  <ButtonLink href="/contact" size="lg" className="mt-6 w-full">
                    Request a Quote
                    <ArrowRight className="size-5" aria-hidden />
                  </ButtonLink>
                </div>
              </aside>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ————— Related ————— */}
      <section className="pattern-light border-t border-ivory-300/60 bg-ivory-100 py-16 sm:py-20">
        <Container>
          <Reveal>
            <h2 className="text-center font-display text-2xl font-semibold text-ink-900 sm:text-3xl">
              Other services you may need
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {others.map((other, i) => (
              <Reveal key={other.slug} delay={i * 0.08}>
                <Link
                  href={`/services/${other.slug}`}
                  className="group flex h-full items-center gap-4 rounded-2xl border border-ivory-300/70 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                    <ServiceIcon name={other.icon} className="size-5" />
                  </span>
                  <span className="text-sm font-bold text-ink-900 group-hover:text-brand-700">
                    {other.shortTitle}
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title={`Ready to discuss ${service.shortTitle.toLowerCase()}?`}
      />
    </>
  );
}
