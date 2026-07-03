import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="pattern-light flex min-h-[60vh] items-center py-20">
      <Container className="text-center">
        <p className="font-display text-7xl font-semibold text-ivory-300 sm:text-8xl">
          404
        </p>
        <h1 className="mt-4 font-display text-3xl font-semibold text-ink-900 sm:text-4xl">
          This page has been swept away.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-ink-500">
          The page you are looking for doesn&apos;t exist or has moved. Let us
          take you somewhere spotless instead.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <ButtonLink href="/" size="lg">
            Back to Home
          </ButtonLink>
          <ButtonLink href="/services" variant="outline" size="lg">
            Browse Services
            <ArrowRight className="size-5" aria-hidden />
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
