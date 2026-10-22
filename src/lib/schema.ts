export function generateSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "OmniHR Pulse",
        "url": "https://pulse.omnihr.id",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "All (Web SaaS Cloud Application)",
        "description":
          "Platform HRIS enterprise berbasis analitik real-time yang menyatukan absensi, proyeksi payroll, kurva evaluasi ujian, kalender cuti musiman, dan kepatuhan SOP digital.",
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
        "name": "OmniHR Pulse by Akarindo",
        "url": "https://pulse.omnihr.id",
        "logo": "https://pulse.omnihr.id/favicon.svg",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+62-812-3456-7890",
          "contactType": "sales",
          "areaServed": "ID",
          "availableLanguage": ["Indonesian", "English"],
        },
      },
    ],
  };
}
