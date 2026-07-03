import Link from "next/link";
import { cn } from "@/lib/cn";
import { company } from "@/data/company";

/**
 * RAJ monogram + wordmark lockup, recreated from the company logo.
 * `tone="dark"` renders the ivory-on-green variant for dark surfaces.
 */
export function Logo({
  tone = "light",
  className,
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <Link
      href="/"
      aria-label={`${company.shortName} — home`}
      className={cn("group flex items-center gap-3", className)}
    >
      <Monogram />
      <span className="leading-none">
        <span
          className={cn(
            "block font-sans text-[0.8rem] font-extrabold tracking-[0.18em]",
            dark ? "text-ivory-100" : "text-ink-900",
          )}
        >
          RAWDAH <span className={dark ? "text-brand-400" : "text-brand-700"}>AL JAZIRA</span>
        </span>
        <span
          className={cn(
            "mt-1.5 block text-[0.55rem] font-semibold tracking-[0.34em]",
            dark ? "text-gold-400" : "text-gold-600",
          )}
        >
          T A CLEANING SERVICES
        </span>
      </span>
    </Link>
  );
}

/** Tri-colour interlocked RAJ letters over a crimson swoosh. */
export function Monogram({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "relative inline-flex items-baseline pb-1.5 font-display text-[1.8rem] font-black leading-none tracking-[-0.08em]",
        className,
      )}
    >
      <span className="text-crimson-600">R</span>
      <span className="text-brand-700">A</span>
      <span className="text-royal-600">J</span>
      <svg
        viewBox="0 0 52 8"
        className="absolute -bottom-0.5 left-0 h-2 w-full"
        fill="none"
      >
        <path
          d="M2 6.5C16 1.5 36 1 50 4.5"
          stroke="currentColor"
          className="text-crimson-600"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}
