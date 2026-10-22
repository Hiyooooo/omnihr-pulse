import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { siteConfig, getWhatsAppUrl, DEFAULT_CONFIG, getSiteConfig } from "@/lib/site";
import {
  attendanceData,
  payrollDonutData,
  overtimeDivisionData,
  examData,
  leaveSeasonalityData,
  librarySopData,
  pricingTiers,
} from "@/lib/data";
import { generateSchema } from "@/lib/schema";

describe("Accessibility & Quality Gate Verifications", () => {
  it("strictly forbids em dash (—) character across all siteConfig copy", () => {
    const serialized = JSON.stringify(siteConfig);
    expect(serialized).not.toContain("—");
  });

  it("strictly forbids em dash (—) character across all DEFAULT_CONFIG copy", () => {
    const serialized = JSON.stringify(DEFAULT_CONFIG);
    expect(serialized).not.toContain("—");
  });

  it("strictly forbids em dash (—) character across all dataset strings", () => {
    const allDataSerialized = JSON.stringify({
      attendanceData,
      payrollDonutData,
      overtimeDivisionData,
      examData,
      leaveSeasonalityData,
      librarySopData,
      pricingTiers,
    });
    expect(allDataSerialized).not.toContain("—");
  });

  it("validates all navigation items have genuine accessible section destinations", () => {
    const validTargets = [
      "#absensi",
      "#gaji",
      "#exam",
      "#perizinan",
      "#library",
      "#harga",
    ];
    siteConfig.navItems.forEach((item) => {
      expect(validTargets).toContain(item.href);
      expect(item.href).not.toBe("#");
      expect(item.href).not.toBe("");
    });
  });

  it("generates well-formed WhatsApp conversion URLs with proper phone number and encoded text", () => {
    const url = getWhatsAppUrl("Halo tim sales");
    expect(url).toMatch(/^https:\/\/wa\.me\/6281234567890\?text=/);
    expect(url).toContain(encodeURIComponent("Halo tim sales"));
  });

  it("builds valid JSON-LD schema with SoftwareApplication and Organization entities", () => {
    const schema = generateSchema();
    expect(schema["@context"]).toBe("https://schema.org");
    expect(schema["@graph"]).toHaveLength(2);

    const app = schema["@graph"].find((item) => item["@type"] === "SoftwareApplication");
    expect(app).toBeDefined();
    expect(app?.name).toBe("OmniHR Pulse");

    const org = schema["@graph"].find((item) => item["@type"] === "Organization");
    expect(org).toBeDefined();
    expect(org?.name).toContain("OmniHR Pulse");
  });
});

describe("Laravel Admin API & Fallback Integration Tests", () => {
  const originalEnv = process.env;

  beforeEach(() => {
    vi.resetModules();
    process.env = { ...originalEnv };
  });

  afterEach(() => {
    process.env = originalEnv;
    vi.restoreAllMocks();
  });

  it("returns DEFAULT_CONFIG safely when API_URL or SITE_SECRET is missing", async () => {
    delete process.env.API_URL;
    delete process.env.SITE_SECRET;

    const config = await getSiteConfig();
    expect(config).toEqual(DEFAULT_CONFIG);
    expect(config.site.name).toBe("OmniHR Pulse");
  });

  it("returns DEFAULT_CONFIG safely when API request fails with non-200 status", async () => {
    process.env.API_URL = "https://backend.test";
    process.env.SITE_SECRET = "test-secret";

    vi.spyOn(global, "fetch").mockResolvedValueOnce({
      ok: false,
      status: 500,
    } as Response);

    const config = await getSiteConfig();
    expect(config).toEqual(DEFAULT_CONFIG);
  });

  it("parses valid API responses and correctly maps custom hero, branding, and contact data", async () => {
    process.env.API_URL = "https://backend.test";
    process.env.SITE_SECRET = "test-secret";

    const mockApiResponse = {
      site: {
        id: "08-omnihr",
        name: "OmniHR Pulse Enterprise",
        domain: "enterprise.omnihr.id",
      },
      branding: {
        logo_url: "/uploads/logo.png",
        favicon_url: "/uploads/favicon.ico",
        primary_color: "#6366F1",
      },
      hero: {
        headline: "Analitik Presisi untuk SDM Modern",
        subheadline: "Pantau performa harian armada kerja Anda secara real-time.",
        cta_text: "Hubungi Tim Ahli",
      },
      cta: {
        whatsapp_number: "6289999999999",
        whatsapp_message_template: "Halo, saya tertarik dengan paket enterprise.",
        whatsapp_url: "https://wa.me/6289999999999?text=Halo%20Enterprise",
      },
      contact: {
        email: "enterprise@omnihr.id",
        phone: "+62 899-9999-9999",
        social_links: [
          { platform: "linkedin", url: "https://linkedin.com/company/omnihr" },
        ],
      },
      footer_text: "Hak Cipta OmniHR Enterprise 2026.",
      tracking: {
        ga_id: "G-TEST12345",
        meta_pixel_id: "PIXEL-99999",
      },
      seo: {
        meta_title: "OmniHR Pulse Enterprise - Solusi Analitik SDM",
        meta_description: "Deskripsi SEO kustom dari admin panel.",
        keywords: ["hris", "enterprise", "analytics"],
        og_image_url: "/uploads/og.jpg",
      },
    };

    vi.spyOn(global, "fetch").mockResolvedValueOnce({
      ok: true,
      json: async () => mockApiResponse,
    } as Response);

    const config = await getSiteConfig();

    expect(config.site.name).toBe("OmniHR Pulse Enterprise");
    expect(config.branding.primary_color).toBe("#6366F1");
    expect(config.branding.logo_url).toBe("https://backend.test/uploads/logo.png");
    expect(config.hero.headline).toBe("Analitik Presisi untuk SDM Modern");
    expect(config.cta.whatsapp_url).toBe("https://wa.me/6289999999999?text=Halo%20Enterprise");
    expect(config.tracking.ga_id).toBe("G-TEST12345");
    expect(config.contact.social_links[0].platform).toBe("LinkedIn");
  });
});
