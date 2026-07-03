import type { Metadata } from "next";
import { BadgeCheck, ShieldCheck, Sparkles, Users } from "lucide-react";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Rawdah Al Jazira T A Cleaning Services L.L.C — a licensed Dubai cleaning company built on the standard of a garden: freshness, order and care in every space we maintain.",
};

const values = [
  {
    icon: Sparkles,
    arabic: "إتقان",
    name: "Itqān — Mastery",
    text: "Doing work with excellence and completeness, even where no one is looking. It is why our supervisors inspect corners, skirtings and high ledges — not just what a visitor sees first.",
  },
  {
    icon: ShieldCheck,
    arabic: "أمانة",
    name: "Amānah — Trust",
    text: "Our staff work inside your offices, campuses and homes. Every cleaner is vetted, uniformed and accountable, because access to your space is a responsibility before it is a job.",
  },
  {
    icon: BadgeCheck,
    arabic: "استقامة",
    name: "Istiqāmah — Consistency",
    text: "A premium standard is only premium if it is kept every day. Documented checklists, scheduled audits and stable, assigned teams keep week fifty-two as sharp as week one.",
  },
];

const commitments = [
  "Vetted, uniformed and trained cleaning professionals",
  "Both ladies and gents cleaners, matched to your facility",
  "Monthly and yearly contracts with clear, fixed scope",
  "Named supervisor and single point of contact per client",
  "Documented checklists and scheduled quality audits",
  "Professional equipment and appropriate cleaning agents",
];

export default function AboutPage() {
  return (
    <>
      <section className="pattern-dark bg-brand-950">
        <Container className="py-20 text-center sm:py-24">
          <Reveal>
            <p className="flex items-center justify-center gap-3 text-[0.7rem] font-bold uppercase tracking-[0.3em] text-gold-400">
              <span aria-hidden className="hairline-gold w-10" />
              About Us
              <span aria-hidden className="hairline-gold w-10" />
            </p>
            <h1 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-semibold text-balance text-ivory-50 sm:text-5xl">
              Named after a garden. Held to its standard.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ivory-200/80 sm:text-lg">
              {company.legalName} is a licensed Dubai cleaning company serving
              the institutions this city is known for — its campuses, malls,
              towers, hotels and places of worship.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* ————— Story ————— */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <h2 className="font-display text-3xl font-semibold text-ink-900">
                Our story
              </h2>
              <p className="mt-6 text-base leading-relaxed text-ink-700 sm:text-lg">
                <em>Rawdah</em> (روضة) is the Arabic word for garden — a place
                kept fresh, ordered and alive through constant, attentive care.
                A garden is never finished; it is maintained. That idea is the
                foundation of our company.
              </p>
              <p className="mt-5 text-base leading-relaxed text-ink-700 sm:text-lg">
                From our office in Al Khabaisi, Dubai, we provide commercial
                cleaning to the environments where standards are most visible:
                universities and schools, hospitals and clinics, government and
                private offices, shopping centers, hotels, mosques, parks,
                villas and event venues. We restore marble to a mirror finish,
                take buildings from construction dust to handover, and keep
                daily operations immaculate without ever interrupting them.
              </p>
              <p className="mt-5 text-base leading-relaxed text-ink-700 sm:text-lg">
                What our clients buy is not cleaning hours — it is the
                confidence that their facility will look managed, every single
                day, to every visitor who walks in. That is the contract we
                take personally.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ————— Values ————— */}
      <section className="pattern-light border-y border-ivory-300/60 bg-ivory-100 py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Our Values"
              title="Three words we answer to"
              lead="Old values for a modern service company — the reason clients renew year after year."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {values.map((value, i) => (
              <Reveal key={value.name} delay={i * 0.08} className="h-full">
                <div className="relative h-full rounded-2xl border border-ivory-300/70 bg-white p-8 shadow-soft">
                  <span
                    aria-hidden
                    className="absolute right-6 top-5 font-display text-3xl text-gold-300"
                  >
                    {value.arabic}
                  </span>
                  <span className="flex size-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                    <value.icon className="size-5" strokeWidth={1.5} aria-hidden />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-ink-900">
                    {value.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">
                    {value.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ————— Our people ————— */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <Reveal>
              <SectionHeading
                align="left"
                eyebrow="Our People"
                title="Professionals you can welcome into any space"
                lead="A cleaning company is its people. Ours are selected, trained and led as carefully as the spaces they care for."
              />
              <p className="mt-6 text-base leading-relaxed text-ink-700">
                We maintain both ladies and gents cleaning teams so that
                staffing always suits the culture and requirements of your
                facility — a ladies&apos; campus, a family villa, a mosque or a
                corporate tower. Teams stay assigned to their sites, building
                the familiarity that consistent quality depends on.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="pattern-dark rounded-3xl bg-brand-900 p-10">
                <p className="flex items-center gap-3 text-[0.7rem] font-bold uppercase tracking-[0.28em] text-gold-400">
                  <Users className="size-4" aria-hidden />
                  Our Commitments
                </p>
                <ul className="mt-7 space-y-4">
                  {commitments.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm leading-relaxed text-ivory-200/90"
                    >
                      <BadgeCheck
                        className="mt-0.5 size-4.5 shrink-0 text-gold-400"
                        strokeWidth={2}
                        aria-hidden
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <CtaBand
        title="Meet us at your facility."
        lead="A free site survey is the best introduction — walk your space with us and see how we think about it."
      />
    </>
  );
}
