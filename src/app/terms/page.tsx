import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms governing the use of the ${company.shortName} website and general terms of engagement.`,
};

export default function TermsPage() {
  return (
    <section className="py-16 sm:py-24">
      <Container className="max-w-3xl">
        <h1 className="font-display text-4xl font-semibold text-ink-900">
          Terms of Service
        </h1>
        <p className="mt-3 text-sm text-ink-500">Last updated: 3 July 2026</p>

        <div className="mt-10 space-y-8 text-base leading-relaxed text-ink-700">
          <section>
            <h2 className="font-display text-2xl font-semibold text-ink-900">
              About these terms
            </h2>
            <p className="mt-3">
              This website is operated by {company.legalName}, a company
              registered in Dubai, United Arab Emirates. By using this website
              you accept these terms. They govern the website only; cleaning
              services are provided under separate written agreements and
              quotations issued to each client.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink-900">
              Website content
            </h2>
            <p className="mt-3">
              The content of this website is provided for general information
              about our services. Service descriptions, scopes and figures are
              indicative; the precise scope of any engagement is defined in the
              proposal and agreement issued after a site survey. We may update
              website content at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink-900">
              Quotations and engagements
            </h2>
            <p className="mt-3">
              Submitting an enquiry through this website does not create a
              contract. Quotations we issue are valid for the period stated on
              them, and services are delivered under the terms of the signed
              agreement between {company.shortName} and the client, in
              accordance with the laws of the United Arab Emirates.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink-900">
              Acceptable use
            </h2>
            <p className="mt-3">
              You agree not to misuse this website — including attempting to
              gain unauthorised access, submitting false or automated
              enquiries, or interfering with its operation.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink-900">
              Intellectual property
            </h2>
            <p className="mt-3">
              The {company.shortName} name, logo and website content are the
              property of {company.legalName} and may not be reproduced without
              our written permission.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink-900">
              Liability
            </h2>
            <p className="mt-3">
              While we take care to keep this website accurate and available,
              it is provided &ldquo;as is&rdquo; and we accept no liability for
              loss arising from reliance on website content or from temporary
              unavailability of the site.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink-900">
              Governing law
            </h2>
            <p className="mt-3">
              These terms are governed by the laws of the United Arab Emirates,
              and any disputes are subject to the jurisdiction of the courts of
              Dubai.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink-900">
              Contact
            </h2>
            <p className="mt-3">
              Questions about these terms:{" "}
              <a
                href={`mailto:${company.email}`}
                className="font-semibold text-brand-700 hover:text-brand-800"
              >
                {company.email}
              </a>{" "}
              · {company.phoneDisplay} · {company.addressLine}.
            </p>
          </section>
        </div>
      </Container>
    </section>
  );
}
