import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const displayFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const bodyFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0A0918",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://pulse.omnihr.id"),
  title: "OmniHR Pulse - HRIS Berbasis Analitik & Metrik Kinerja Real-Time",
  description:
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
  authors: [{ name: "Akarindo OmniHR Team" }],
  icons: {
    icon: "/favicon.svg",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://pulse.omnihr.id",
    title: "OmniHR Pulse - HRIS Berbasis Analitik & Metrik Kinerja Real-Time",
    description:
      "Ambil keputusan SDM berbasis data akurat. Pantau analitik absensi, efisiensi payroll, dan evaluasi staf dalam satu layar.",
    siteName: "OmniHR Pulse",
  },
  twitter: {
    card: "summary_large_image",
    title: "OmniHR Pulse - HRIS Berbasis Analitik & Metrik Kinerja Real-Time",
    description:
      "Ambil keputusan SDM berbasis data akurat. Pantau analitik absensi, efisiensi payroll, dan evaluasi staf dalam satu layar.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
