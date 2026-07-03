import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ServiceIcon } from "@/components/ServiceIcon";
import type { Service } from "@/data/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex h-full flex-col rounded-2xl border border-ivory-300/70 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand-100 hover:shadow-lift"
    >
      <span className="flex size-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700 transition-colors duration-300 group-hover:bg-brand-800 group-hover:text-ivory-50">
        <ServiceIcon name={service.icon} className="size-6" />
      </span>
      <h3 className="mt-5 font-display text-lg font-semibold text-ink-900">
        {service.shortTitle}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">
        {service.excerpt}
      </p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand-700">
        Learn more
        <ArrowRight
          className="size-4 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden
        />
      </span>
    </Link>
  );
}
