"use client";

import React from "react";
import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/Button";

export function Topnav() {
  return (
    <header className="topnav" data-od-id="topnav">
      <div className="container-app nav-inner">
        {/* Brand */}
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

        {/* Navigation Links */}
        <nav className="nav-links" aria-label="Modul">
          {siteConfig.navItems.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <Button variant="primary" size="sm" href="#demo">
          Buka dashboard
        </Button>
      </div>
    </header>
  );
}
