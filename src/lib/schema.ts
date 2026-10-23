import { SiteConfig, DEFAULT_CONFIG } from "@/lib/site";
import { faqData } from "@/lib/data";

export function generateSchema(customConfig?: SiteConfig) {
  const config = customConfig || DEFAULT_CONFIG;
  const domain = config.site.domain || "pulse.omnihr.id";
  const url = domain.startsWith("http") ? domain : `https://${domain}`;
  const logo = config.branding.logo_url || `${url}/favicon.svg`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": config.site.name,
        "url": url,
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "All (Web SaaS Cloud Application)",
        "description": config.seo.meta_description,
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "IDR",
          "description": "Sesi live demo dan konsultasi workspace analitik tanpa biaya.",
        },
        "featureList": [
          "Heatmap Kehadiran 7x12 Jam Real-Time",
          "Forecasting Anggaran Payroll 8 Bulan",
          "Distribusi Kurva Normal Ujian & Skill-Gap Analysis",
          "Peringatan Defisit Staf Musim Cuti Tahunan",
          "Pelacakan Keterbacaan dan Konfirmasi SOP Digital",
        ],
      },
      {
        "@type": "Organization",
        "name": `${config.site.name} by Akarindo`,
        "url": url,
        "logo": logo,
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": config.contact.phone,
          "contactType": "sales",
          "areaServed": "ID",
          "availableLanguage": ["Indonesian", "English"],
        },
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqData.map((item) => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer,
          },
        })),
      },
    ],
  };
}
