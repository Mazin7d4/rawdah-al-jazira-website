import { company } from "@/data/company";
import { services } from "@/data/services";

/** LocalBusiness structured data for local search ("cleaning company Dubai"). */
export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": company.siteUrl,
    name: company.legalName,
    alternateName: company.shortName,
    description:
      "Premium commercial cleaning services in Dubai — schools and universities, hospitals, offices, malls, hotels, mosques, villas, parks, post-construction cleaning, marble polishing and event cleaning.",
    url: company.siteUrl,
    email: company.email,
    telephone: "+971508940289",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${company.address.building}, ${company.address.area}`,
      addressLocality: company.address.city,
      addressCountry: "AE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 25.2637,
      longitude: 55.3244,
    },
    areaServed: { "@type": "City", name: "Dubai" },
    priceRange: "$$",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Cleaning Services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          url: `${company.siteUrl}/services/${s.slug}`,
        },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
