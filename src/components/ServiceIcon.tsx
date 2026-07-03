import {
  BadgeCheck,
  BedDouble,
  Briefcase,
  Building2,
  CalendarCheck,
  FileText,
  Gem,
  GraduationCap,
  HardHat,
  HeartPulse,
  Home,
  Landmark,
  MoonStar,
  PartyPopper,
  SearchCheck,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Stethoscope,
  Trees,
  Users,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  "badge-check": BadgeCheck,
  "bed-double": BedDouble,
  briefcase: Briefcase,
  "building-2": Building2,
  "calendar-check": CalendarCheck,
  "file-text": FileText,
  gem: Gem,
  "graduation-cap": GraduationCap,
  "hard-hat": HardHat,
  "heart-pulse": HeartPulse,
  home: Home,
  landmark: Landmark,
  "moon-star": MoonStar,
  "party-popper": PartyPopper,
  "search-check": SearchCheck,
  "shield-check": ShieldCheck,
  "shopping-bag": ShoppingBag,
  sparkles: Sparkles,
  stethoscope: Stethoscope,
  trees: Trees,
  users: Users,
};

/** Resolves the string icon keys used in data files to Lucide components. */
export function ServiceIcon({
  name,
  className,
  strokeWidth = 1.5,
}: {
  name: string;
  className?: string;
  strokeWidth?: number;
}) {
  const Icon = icons[name] ?? Sparkles;
  return <Icon className={className} strokeWidth={strokeWidth} aria-hidden />;
}
