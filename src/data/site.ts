/** Sectors, stats, process steps, value points and testimonials used across pages. */

export const sectors = [
  { icon: "graduation-cap", label: "Education", detail: "Universities, colleges & schools" },
  { icon: "shopping-bag", label: "Retail & Malls", detail: "Shopping centers & showrooms" },
  { icon: "landmark", label: "Government", detail: "Public entities & departments" },
  { icon: "heart-pulse", label: "Healthcare", detail: "Hospitals, clinics & labs" },
  { icon: "bed-double", label: "Hospitality", detail: "Hotels, venues & restaurants" },
  { icon: "briefcase", label: "Corporate", detail: "Offices & business centers" },
  { icon: "home", label: "Residential", detail: "Villas & compounds" },
  { icon: "party-popper", label: "Events", detail: "Exhibitions & functions" },
] as const;

/**
 * Headline figures. [CONFIRM] the values marked below with the owner
 * before going live — see CONTENT-TODO.md.
 */
export const stats = [
  { value: 12, suffix: "", label: "Specialised services" },
  { value: 8, suffix: "+", label: "Sectors served" }, // [CONFIRM]
  { value: 100, suffix: "+", label: "Trained cleaners" }, // [CONFIRM]
  { value: 98, suffix: "%", label: "Client retention" }, // [CONFIRM]
] as const;

export const processSteps = [
  {
    icon: "search-check",
    title: "Site Survey",
    text: "We walk your facility with you, understand its traffic, materials and standards, and identify exactly what excellent looks like for your space.",
  },
  {
    icon: "file-text",
    title: "Tailored Proposal",
    text: "You receive a clear scope, schedule and quotation — monthly or yearly contract options, with ladies and gents staffing to suit your environment.",
  },
  {
    icon: "users",
    title: "Team Deployment",
    text: "Vetted, uniformed and trained cleaners are deployed with the right equipment, led by a supervisor who owns your site's standards.",
  },
  {
    icon: "badge-check",
    title: "Quality Audits",
    text: "Scheduled inspections against documented checklists keep quality consistent — and one point of contact keeps you informed.",
  },
] as const;

export const valuePoints = [
  {
    icon: "shield-check",
    title: "Licensed & Accountable",
    text: "A licensed Dubai company with supervised teams, documented checklists and a single point of contact who answers for quality.",
  },
  {
    icon: "users",
    title: "Ladies & Gents Cleaners",
    text: "Male and female cleaning professionals available, so staffing always suits your facility's culture and requirements.",
  },
  {
    icon: "calendar-check",
    title: "Monthly & Yearly Contracts",
    text: "Flexible engagement built around your operations — from scheduled visits to fully stationed on-site teams.",
  },
  {
    icon: "gem",
    title: "Trained for Premium Sites",
    text: "Our teams are trained for marble lobbies, campuses, healthcare and hospitality — environments where standards are visible.",
  },
] as const;

/**
 * [CONFIRM] Replace with real client testimonials before launch.
 * Kept deliberately unattributed until real references are approved.
 */
export const testimonials = [
  {
    quote:
      "Their team treats our building like their own. The lobby marble has never looked better, and tenants have noticed the difference.",
    author: "Facilities Manager",
    context: "Commercial tower, Deira",
  },
  {
    quote:
      "Punctual, uniformed, and consistent — every inspection we run comes back clean. Exactly what a campus of our size needs.",
    author: "Administration Head",
    context: "Private education institution",
  },
  {
    quote:
      "They turned our venue around overnight after a 600-guest function. By morning you couldn't tell an event had happened.",
    author: "Operations Director",
    context: "Events venue, Dubai",
  },
] as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
