import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { DEFAULT_CONFIG } from "@/lib/site";

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
  metadataBase: new URL(`https://${DEFAULT_CONFIG.site.domain}`),
  title: DEFAULT_CONFIG.seo.meta_title,
  description: DEFAULT_CONFIG.seo.meta_description,
  keywords: DEFAULT_CONFIG.seo.keywords,
  authors: [{ name: "Akarindo OmniHR Team" }],
  icons: {
    icon: DEFAULT_CONFIG.branding.favicon_url,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: `https://${DEFAULT_CONFIG.site.domain}`,
    title: DEFAULT_CONFIG.seo.meta_title,
    description: DEFAULT_CONFIG.seo.meta_description,
    siteName: DEFAULT_CONFIG.site.name,
    images: [{ url: "/opengraph-image" }],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_CONFIG.seo.meta_title,
    description: DEFAULT_CONFIG.seo.meta_description,
    images: ["/opengraph-image"],
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
