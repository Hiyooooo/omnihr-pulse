export interface NavItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  site: {
    id: string;
    name: string;
    domain: string;
  };
  branding: {
    logo_url: string;
    favicon_url: string;
    primary_color: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    cta_text: string;
  };
  cta: {
    whatsapp_number: string;
    whatsapp_message_template: string;
    whatsapp_url: string;
  };
  contact: {
    email: string;
    phone: string;
    social_links: Array<{ platform: string; url: string }>;
  };
  footer_text: string;
  tracking: {
    ga_id: string | null;
    meta_pixel_id: string | null;
  };
  seo: {
    meta_title: string;
    meta_description: string;
    keywords: string[];
    og_image_url: string;
  };
}

export const DEFAULT_CONFIG: SiteConfig = {
  site: {
    id: "08-omnihr",
    name: "OmniHR Pulse",
    domain: "pulse.omnihr.id",
  },
  branding: {
    logo_url: "",
    favicon_url: "/favicon.svg",
    primary_color: "#8B5CF6",
  },
  hero: {
    headline: "Setiap keputusan SDM punya angkanya.",
    subheadline:
      "OmniHR Pulse menyatukan absensi, payroll, ujian, izin, dan SOP dalam satu layar analitik: supaya tim sales, finance, dan operasional memutuskan dengan data pagi ini, bukan rekap akhir bulan.",
    cta_text: "Konsultasi WhatsApp",
  },
  cta: {
    whatsapp_number: "6281234567890",
    whatsapp_message_template:
      "Halo Tim OmniHR Pulse, saya ingin menjadwalkan live demo untuk workspace tim kami dan mempelajari analitik kehadiran serta efisiensi payroll.",
    whatsapp_url:
      "https://wa.me/6281234567890?text=Halo%20Tim%20OmniHR%20Pulse%2C%20saya%20ingin%20menjadwalkan%20live%20demo%20untuk%20workspace%20tim%20kami%20dan%20mempelajari%20analitik%20kehadiran%20serta%20efisiensi%20payroll.",
  },
  contact: {
    email: "hello@omnihr.id",
    phone: "+62 812-3456-7890",
    social_links: [
      {
        platform: "LinkedIn",
        url: "https://linkedin.com/company/omnihr-pulse",
      },
      {
        platform: "Instagram",
        url: "https://instagram.com/omnihr.pulse",
      },
      {
        platform: "X",
        url: "https://x.com/omnihrpulse",
      },
    ],
  },
  footer_text:
    "Data pada halaman ini adalah data demo workspace OmniHR Pulse. Hak cipta dilindungi.",
  tracking: {
    ga_id: null,
    meta_pixel_id: null,
  },
  seo: {
    meta_title:
      "OmniHR Pulse - HRIS Berbasis Analitik & Metrik Kinerja Real-Time",
    meta_description:
      "Ambil keputusan SDM berbasis data akurat. Pantau analitik absensi, efisiensi payroll, dan evaluasi staf dalam satu layar.",
    keywords: [
      "HRIS analitik",
      "software absensi real-time",
      "prediksi payroll perusahaan",
      "evaluasi kinerja kurva normal",
      "kalender musim cuti",
      "kepatuhan SOP digital",
      "workforce analytics Indonesia",
      "sales force HRIS",
    ],
    og_image_url: "",
  },
};

export const siteConfig = {
  name: DEFAULT_CONFIG.site.name,
  tagline: "HRIS Berbasis Analitik & Metrik Kinerja Real-Time",
  description: DEFAULT_CONFIG.seo.meta_description,
  url: `https://${DEFAULT_CONFIG.site.domain}`,
  whatsappNumber: DEFAULT_CONFIG.cta.whatsapp_number,
  contactEmail: DEFAULT_CONFIG.contact.email,
  phone: DEFAULT_CONFIG.contact.phone,
  operationalHours: "Jakarta · 09.00–18.00 WIB",
  navItems: [
    { label: "Absensi", href: "#absensi" },
    { label: "Gaji", href: "#gaji" },
    { label: "Exam", href: "#exam" },
    { label: "Perizinan", href: "#perizinan" },
    { label: "Library", href: "#library" },
    { label: "Harga", href: "#harga" },
  ] as NavItem[],
};

export function getWhatsAppUrl(
  contextMessage?: string,
  customNumber?: string
): string {
  const defaultMessage = DEFAULT_CONFIG.cta.whatsapp_message_template;
  const text = encodeURIComponent(contextMessage || defaultMessage);
  const phone = (customNumber || DEFAULT_CONFIG.cta.whatsapp_number).replace(
    /\D/g,
    ""
  );
  return `https://wa.me/${phone}?text=${text}`;
}

export async function getSiteConfig(): Promise<SiteConfig> {
  const apiUrl = process.env.API_URL;
  const siteId = process.env.SITE_ID || "08-omnihr";
  const siteSecret = process.env.SITE_SECRET;

  if (!apiUrl || !siteSecret) {
    return DEFAULT_CONFIG;
  }

  try {
    const cleanUrl = apiUrl.replace(/\/+$/, "");
    const revalidateSeconds = Number(process.env.REVALIDATE_SECONDS) || 10;
    const response = await fetch(`${cleanUrl}/api/v1/site/config`, {
      method: "GET",
      headers: {
        "X-Site-Id": siteId,
        "X-Site-Secret": siteSecret,
        Accept: "application/json",
      },
      next: { revalidate: revalidateSeconds },
    });

    if (!response.ok) {
      return DEFAULT_CONFIG;
    }

    const data = await response.json();

    const normalizeSocialUrl = (url: unknown): string => {
      if (!url || typeof url !== "string") return "";
      const trimmed = url.trim();
      if (!trimmed) return "";
      return trimmed.startsWith("http://") || trimmed.startsWith("https://")
        ? trimmed
        : `https://${trimmed}`;
    };

    const PLATFORM_LABELS: Record<string, string> = {
      instagram: "Instagram",
      linkedin: "LinkedIn",
      facebook: "Facebook",
      youtube: "YouTube",
      tiktok: "TikTok",
      twitter: "Twitter / X",
      x: "X",
    };

    const rawSocial = data.contact?.social_links;
    const socialLinks: Array<{ platform: string; url: string }> = [];

    if (Array.isArray(rawSocial)) {
      for (const item of rawSocial) {
        const url = normalizeSocialUrl(item?.url);
        if (url) {
          const rawKey = String(
            item.platform || item.name || "Tautan"
          ).toLowerCase();
          socialLinks.push({
            platform: PLATFORM_LABELS[rawKey] || item.platform || "Tautan",
            url,
          });
        }
      }
    } else if (typeof rawSocial === "object" && rawSocial !== null) {
      for (const [key, val] of Object.entries(rawSocial)) {
        const url = normalizeSocialUrl(val);
        if (url) {
          const rawKey = key.toLowerCase();
          socialLinks.push({
            platform:
              PLATFORM_LABELS[rawKey] ||
              key.charAt(0).toUpperCase() + key.slice(1),
            url,
          });
        }
      }
    }

    const resolveUrl = (url: string | null | undefined): string => {
      if (!url) return "";
      if (url.startsWith("/")) return `${cleanUrl}${url}`;
      if (
        url.includes("localhost:8000") &&
        !cleanUrl.includes("localhost:8000")
      ) {
        return url.replace(/https?:\/\/[^/]+/, cleanUrl);
      }
      return url;
    };

    const whatsappNumber =
      data.cta?.whatsapp_number || DEFAULT_CONFIG.cta.whatsapp_number;
    const whatsappTemplate =
      data.cta?.whatsapp_message_template ||
      DEFAULT_CONFIG.cta.whatsapp_message_template;
    const computedWhatsAppUrl = `https://wa.me/${String(
      whatsappNumber
    ).replace(/\D/g, "")}?text=${encodeURIComponent(whatsappTemplate)}`;

    return {
      site: {
        id: data.site?.id || DEFAULT_CONFIG.site.id,
        name: data.site?.name || DEFAULT_CONFIG.site.name,
        domain: data.site?.domain || DEFAULT_CONFIG.site.domain,
      },
      branding: {
        logo_url:
          resolveUrl(data.branding?.logo_url) ||
          DEFAULT_CONFIG.branding.logo_url,
        favicon_url:
          resolveUrl(data.branding?.favicon_url) ||
          DEFAULT_CONFIG.branding.favicon_url,
        primary_color:
          data.branding?.primary_color || DEFAULT_CONFIG.branding.primary_color,
      },
      hero: {
        headline: data.hero?.headline || DEFAULT_CONFIG.hero.headline,
        subheadline: data.hero?.subheadline || DEFAULT_CONFIG.hero.subheadline,
        cta_text: data.hero?.cta_text || DEFAULT_CONFIG.hero.cta_text,
      },
      cta: {
        whatsapp_number: whatsappNumber,
        whatsapp_message_template: whatsappTemplate,
        whatsapp_url:
          data.cta?.whatsapp_url ||
          computedWhatsAppUrl ||
          DEFAULT_CONFIG.cta.whatsapp_url,
      },
      contact: {
        email: data.contact?.email || DEFAULT_CONFIG.contact.email,
        phone: data.contact?.phone || DEFAULT_CONFIG.contact.phone,
        social_links:
          socialLinks.length > 0
            ? socialLinks
            : DEFAULT_CONFIG.contact.social_links,
      },
      footer_text: data.footer_text || DEFAULT_CONFIG.footer_text,
      tracking: {
        ga_id: data.tracking?.ga_id ?? null,
        meta_pixel_id: data.tracking?.meta_pixel_id ?? null,
      },
      seo: {
        meta_title: data.seo?.meta_title || DEFAULT_CONFIG.seo.meta_title,
        meta_description:
          data.seo?.meta_description || DEFAULT_CONFIG.seo.meta_description,
        keywords: Array.isArray(data.seo?.keywords)
          ? data.seo.keywords
          : DEFAULT_CONFIG.seo.keywords,
        og_image_url:
          resolveUrl(data.seo?.og_image_url) || DEFAULT_CONFIG.seo.og_image_url,
      },
    };
  } catch {
    return DEFAULT_CONFIG;
  }
}
