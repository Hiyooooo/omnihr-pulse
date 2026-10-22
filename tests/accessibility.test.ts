import { describe, it, expect } from "vitest";
import { siteConfig, getWhatsAppUrl } from "@/lib/site";
import {
  attendanceData,
  payrollDonutData,
  overtimeDivisionData,
  examData,
  leaveSeasonalityData,
  librarySopData,
} from "@/lib/data";
import { generateSchema } from "@/lib/schema";

describe("Accessibility & Quality Gate Verifications", () => {
  it("strictly forbids em dash (—) character across all siteConfig copy", () => {
    const serialized = JSON.stringify(siteConfig);
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
    });
    expect(allDataSerialized).not.toContain("—");
  });

  it("validates all navigation items have genuine accessible section destinations", () => {
    const validTargets = ["#absensi", "#gaji", "#exam", "#perizinan", "#library"];
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
