import { cn } from "@/lib/cn";

/**
 * Standard section intro: gold-ruled eyebrow, serif display title, optional lead.
 */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "center",
  tone = "light",
  className,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
  className?: string;
}) {
  const dark = tone === "dark";
  const centered = align === "center";
  return (
    <div
      className={cn(
        "max-w-2xl",
        centered && "mx-auto text-center",
        className,
      )}
    >
      <p
        className={cn(
          "flex items-center gap-3 text-[0.7rem] font-bold uppercase tracking-[0.28em]",
          centered && "justify-center",
          dark ? "text-gold-400" : "text-gold-600",
        )}
      >
        <span aria-hidden className="hairline-gold w-8" />
        {eyebrow}
        <span aria-hidden className="hairline-gold w-8" />
      </p>
      <h2
        className={cn(
          "mt-4 font-display text-3xl font-semibold text-balance sm:text-4xl",
          dark ? "text-ivory-50" : "text-ink-900",
        )}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            dark ? "text-ivory-200/80" : "text-ink-500",
          )}
        >
          {lead}
        </p>
      )}
    </div>
  );
}
