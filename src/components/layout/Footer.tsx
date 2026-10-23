import React from "react";
import { siteConfig, DEFAULT_CONFIG } from "@/lib/site";

interface FooterProps {
  logoUrl?: string;
  siteName?: string;
  email?: string;
  phone?: string;
  socialLinks?: Array<{ platform: string; url: string }>;
  footerText?: string;
  whatsappUrl?: string;
}

export function Footer({
  logoUrl,
  siteName = DEFAULT_CONFIG.site.name,
  email = DEFAULT_CONFIG.contact.email,
  phone = DEFAULT_CONFIG.contact.phone,
  socialLinks = DEFAULT_CONFIG.contact.social_links,
  footerText = DEFAULT_CONFIG.footer_text,
  whatsappUrl = DEFAULT_CONFIG.cta.whatsapp_url,
}: FooterProps) {
  return (
    <footer
      className="border-t border-border py-12 md:py-16 mt-8"
      data-od-id="footer"
    >
      <div className="container-app">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-9">
          {/* Col 1: Brand */}
          <div className="flex flex-col gap-3.5">
            <a className="brand flex items-center gap-2.5" href="#top">
              {logoUrl ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={logoUrl}
                  alt={siteName}
                  className="h-7 w-auto max-w-[150px] object-contain"
                />
              ) : (
                <>
                  <span className="brand-mark" aria-hidden="true">
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="var(--il-3)"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M1 9h3l2-5 3 8 2-5h4" />
                    </svg>
                  </span>
                  <span>{siteName}</span>
                </>
              )}
            </a>
            <p className="meta max-w-[30ch]">
              HRIS berbasis analitik untuk tim yang memutuskan dengan angka,
              bukan asumsi.
            </p>
          </div>

          {/* Col 2: Modul */}
          <div className="flex flex-col gap-2.5 text-[13px] text-muted">
            <p className="font-mono text-[10.5px] tracking-widest uppercase text-fg mb-1">
              Modul
            </p>
            {siteConfig.navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-fg transition-colors duration-150"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Col 3: Produk */}
          <div className="flex flex-col gap-2.5 text-[13px] text-muted">
            <p className="font-mono text-[10.5px] tracking-widest uppercase text-fg mb-1">
              Produk
            </p>
            <a
              href="#demo"
              className="hover:text-fg transition-colors duration-150"
            >
              Dashboard live
            </a>
            <a
              href="#modul"
              className="hover:text-fg transition-colors duration-150"
            >
              Ikhtisar modul
            </a>
            <a
              href="#harga"
              className="hover:text-fg transition-colors duration-150"
            >
              Paket investasi
            </a>
            <a
              href="#faq"
              className="hover:text-fg transition-colors duration-150"
            >
              Tanya jawab (FAQ)
            </a>
          </div>

          {/* Col 4: Kontak & Media Sosial */}
          <div className="flex flex-col gap-2.5 text-[13px] text-muted">
            <p className="font-mono text-[10.5px] tracking-widest uppercase text-fg mb-1">
              Kontak
            </p>
            {email && (
              <a
                href={`mailto:${email}`}
                className="hover:text-fg transition-colors duration-150 font-mono text-xs"
              >
                {email}
              </a>
            )}
            {phone && (
              <a
                href={`tel:${phone.replace(/[^0-9+]/g, "")}`}
                className="hover:text-fg transition-colors duration-150 font-mono text-xs"
              >
                {phone}
              </a>
            )}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-fg transition-colors duration-150 text-xs text-accent"
            >
              Hubungi WhatsApp Sales &rarr;
            </a>

            {/* Dynamic Social Links */}
            {socialLinks && socialLinks.length > 0 && (
              <div className="flex flex-col gap-1.5 mt-2 pt-2 border-t border-border/60">
                <p className="font-mono text-[10.5px] tracking-widest uppercase text-fg">
                  Media Sosial
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {socialLinks.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-muted hover:text-accent transition-colors"
                    >
                      {item.platform}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex justify-between flex-wrap gap-3 mt-11 pt-4.5 border-t border-border">
          <span className="meta">
            &copy; 2026 {siteName}. Hak cipta dilindungi.
          </span>
          <span className="meta">{footerText}</span>
        </div>
      </div>
    </footer>
  );
}
