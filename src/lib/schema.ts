import { courses } from "../data/courses";
import { institute } from "../data/institute";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["EducationalOrganization", "LocalBusiness"],
    name: institute.name,
    legalName: institute.legalName,
    url: institute.siteUrl,
    image: `${institute.siteUrl}/favicon.png`,
    description: institute.tagline,
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "No. 172, Sai Sagar Nilaya, 12th Cross, Rajarajeshwari Temple Street, Devasandra K.R. Puram",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560036",
      addressCountry: "IN",
    },
    areaServed: {
      "@type": "City",
      name: "Bengaluru",
    },
    ...(institute.email ? { email: institute.email } : {}),
    ...(institute.phoneTel ? { telephone: institute.phoneTel } : {}),
  };
}

export function courseListSchema() {
  return courses.map((course) => ({
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.shortDescription,
    provider: {
      "@type": "EducationalOrganization",
      name: institute.name,
      url: institute.siteUrl,
    },
    url: `${institute.siteUrl}/courses#${course.slug}`,
    inLanguage: "en",
    educationalLevel: "Professional training",
  }));
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${institute.siteUrl}${item.path}`,
    })),
  };
}
