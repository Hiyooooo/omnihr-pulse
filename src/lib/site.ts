export interface NavItem {
  label: string;
  href: string;
}

export const siteConfig = {
  name: "OmniHR Pulse",
  tagline: "HRIS Berbasis Analitik & Metrik Kinerja Real-Time",
  description:
    "Ambil keputusan SDM berbasis data akurat. Pantau analitik absensi, efisiensi payroll, dan evaluasi staf dalam satu layar.",
  url: "https://pulse.omnihr.id",
  whatsappNumber: "6281234567890",
  contactEmail: "hello@omnihr.id",
  operationalHours: "Jakarta · 09.00–18.00 WIB",
  navItems: [
    { label: "Absensi", href: "#absensi" },
    { label: "Gaji", href: "#gaji" },
    { label: "Exam", href: "#exam" },
    { label: "Perizinan", href: "#perizinan" },
    { label: "Library", href: "#library" },
  ] as NavItem[],
};

export function getWhatsAppUrl(contextMessage?: string): string {
  const defaultMessage =
    "Halo Tim OmniHR Pulse, saya ingin menjadwalkan live demo untuk workspace tim kami dan mempelajari analitik kehadiran serta efisiensi payroll.";
  const text = encodeURIComponent(contextMessage || defaultMessage);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
}
