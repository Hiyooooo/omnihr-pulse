import React from "react";
import { siteConfig, getWhatsAppUrl } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border py-12 md:py-16 mt-8" data-od-id="footer">
      <div className="container-app">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-9">
          {/* Col 1: Brand */}
          <div className="flex flex-col gap-3.5">
            <a className="brand" href="#top">
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
              OmniHR <em>Pulse</em>
            </a>
            <p className="meta max-w-[30ch]">
              HRIS berbasis analitik untuk tim yang memutuskan dengan angka, bukan asumsi.
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
            <a href="#demo" className="hover:text-fg transition-colors duration-150">
              Dashboard live
            </a>
            <a href="#modul" className="hover:text-fg transition-colors duration-150">
              Ikhtisar modul
            </a>
            <a href="#top" className="hover:text-fg transition-colors duration-150">
              Keamanan data
            </a>
          </div>

          {/* Col 4: Kontak */}
          <div className="flex flex-col gap-2.5 text-[13px] text-muted">
            <p className="font-mono text-[10.5px] tracking-widest uppercase text-fg mb-1">
              Kontak
            </p>
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="hover:text-fg transition-colors duration-150 font-mono text-xs"
            >
              {siteConfig.contactEmail}
            </a>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-fg transition-colors duration-150 text-xs text-accent"
            >
              Hubungi WhatsApp Sales &rarr;
            </a>
            <span className="meta">{siteConfig.operationalHours}</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex justify-between flex-wrap gap-3 mt-11 pt-4.5 border-t border-border">
          <span className="meta">&copy; 2026 OmniHR Pulse</span>
          <span className="meta">
            Data pada halaman ini adalah data demo, bukan data pelanggan. Foto: Pexels (lisensi Pexels).
          </span>
        </div>
      </div>
    </footer>
  );
}
