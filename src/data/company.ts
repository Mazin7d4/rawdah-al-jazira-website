/**
 * Single source of truth for company details.
 * Every page, the footer, JSON-LD schema, and the contact API read from here.
 */
export const company = {
  legalName: "Rawdah Al Jazira T A Cleaning Services L.L.C",
  shortName: "Rawdah Al Jazira",
  monogram: "RAJ",
  tagline: "Premium Commercial Cleaning, Dubai",
  meaning:
    '"Rawdah" (روضة) is Arabic for garden — a place of freshness and renewal. It is the standard we hold every space to.',

  email: "rawdahaljazira@gmail.com",
  phoneDisplay: "+971 50 894 0289",
  phoneHref: "tel:+971508940289",
  whatsappNumber: "971508940289",
  whatsappHref:
    "https://wa.me/971508940289?text=Hello%20Rawdah%20Al%20Jazira%2C%20I%20would%20like%20to%20request%20a%20cleaning%20quote.",

  address: {
    building: "Al Bahar Building",
    area: "Al Khabaisi",
    city: "Dubai",
    country: "United Arab Emirates",
  },
  addressLine: "Al Bahar Building, Al Khabaisi, Dubai, UAE",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Al+Bahar+Building+Al+Khabaisi+Deira+Dubai",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Al+Bahar+Building,+Al+Khabaisi,+Deira,+Dubai&output=embed",

  hours: "Saturday – Thursday · 8:00 AM – 6:00 PM", // [CONFIRM] office hours
  responsePromise: "We reply to every enquiry within one business day.",

  /** Site URL — update once the domain is purchased. [CONFIRM] */
  siteUrl: "https://rawdahaljazira.com",
} as const;
