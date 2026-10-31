import type { MetadataRoute } from "next";
import { company } from "@/data/company";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/api/", "/__forms.html"] },
    sitemap: `${company.siteUrl}/sitemap.xml`,
  };
}
