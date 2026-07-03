import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "outline" | "ivory" | "crimson";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-sans font-bold tracking-wide transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-800 text-ivory-50 shadow-soft hover:bg-brand-900 hover:shadow-lift focus-visible:outline-brand-700",
  outline:
    "border border-ink-900/20 text-ink-900 hover:border-brand-700 hover:text-brand-800 focus-visible:outline-brand-700",
  ivory:
    "bg-ivory-50 text-brand-900 shadow-soft hover:bg-ivory-200 hover:shadow-lift focus-visible:outline-ivory-100",
  crimson:
    "bg-crimson-600 text-ivory-50 shadow-soft hover:bg-crimson-700 hover:shadow-lift focus-visible:outline-crimson-500",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-2.5 text-sm",
  lg: "px-8 py-3.5 text-sm sm:text-base",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
}

export function ButtonLink({
  href,
  external,
  variant = "primary",
  size = "md",
  className,
  children,
}: CommonProps & { href: string; external?: boolean }) {
  const cls = cn(base, variants[variant], sizes[size], className);
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
