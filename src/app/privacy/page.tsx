import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${company.legalName} collects, uses and protects your personal information.`,
};

export default function PrivacyPage() {
  return (
    <section className="py-16 sm:py-24">
      <Container className="max-w-3xl">
        <h1 className="font-display text-4xl font-semibold text-ink-900">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-ink-500">Last updated: 3 July 2026</p>

        <div className="prose-headings:font-display mt-10 space-y-8 text-base leading-relaxed text-ink-700">
          <section>
            <h2 className="font-display text-2xl font-semibold text-ink-900">
              Who we are
            </h2>
            <p className="mt-3">
              {company.legalName} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) is a
              cleaning services company registered in Dubai, United Arab
              Emirates, with its office at {company.addressLine}. This policy
              explains how we handle personal information collected through
              this website.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink-900">
              Information we collect
            </h2>
            <p className="mt-3">
              When you submit our contact or quotation form, we collect the
              details you provide: your name, company name, email address,
              phone number, the service you are interested in, and your
              message. We do not use advertising trackers and we do not collect
              personal information as you browse the site.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink-900">
              How we use it
            </h2>
            <p className="mt-3">
              We use your details solely to respond to your enquiry, prepare
              quotations, arrange site surveys and deliver our services. We do
              not sell, rent or trade your personal information, and we do not
              send marketing communications without your consent.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink-900">
              Storage and security
            </h2>
            <p className="mt-3">
              Form submissions are delivered securely to our business email and
              are not stored in a database on this website. We apply
              appropriate technical measures — including encrypted transmission
              (HTTPS), spam protection and input validation — to protect the
              information you send us.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink-900">
              Third-party services
            </h2>
            <p className="mt-3">
              Our website uses a small number of service providers to operate:
              a hosting provider, an email delivery service for form
              submissions, and an anti-spam verification service. Each receives
              only the information necessary to perform its function. The
              contact page also embeds a Google Map, which is subject to
              Google&apos;s own privacy policy.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink-900">
              Your rights
            </h2>
            <p className="mt-3">
              You may ask us at any time to access, correct or delete the
              personal information we hold about you. Contact us at{" "}
              <a
                href={`mailto:${company.email}`}
                className="font-semibold text-brand-700 hover:text-brand-800"
              >
                {company.email}
              </a>{" "}
              or {company.phoneDisplay}.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink-900">
              Changes to this policy
            </h2>
            <p className="mt-3">
              We may update this policy from time to time. The latest version
              will always be available on this page with its revision date.
            </p>
          </section>
        </div>
      </Container>
    </section>
  );
}
