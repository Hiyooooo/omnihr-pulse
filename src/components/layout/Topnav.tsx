import React from "react";
import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/Button";

interface TopnavProps {
  logoUrl?: string;
  siteName?: string;
  whatsappUrl?: string;
}

export function Topnav({ logoUrl, siteName = siteConfig.name, whatsappUrl }: TopnavProps) {
  return (
    <header className="topnav" data-od-id="topnav">
      <div className="container-app nav-inner">
        {/* Brand */}
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
              <span>
                {siteName}
              </span>
            </>
          )}
        </a>

        {/* Navigation Links */}
        <nav className="nav-links" aria-label="Modul">
          {siteConfig.navItems.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <Button variant="primary" size="sm" href={whatsappUrl || "#demo"}>
          Buka dashboard
        </Button>
      </div>
    </header>
  );
}
