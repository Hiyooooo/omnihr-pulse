"use client";

import React, { useState } from "react";
import { Kicker } from "@/components/ui/Kicker";
import { Button } from "@/components/ui/Button";
import { pricingTiers } from "@/lib/data";
import { getWhatsAppUrl } from "@/lib/site";

export function PricingSection() {
  const [employeeCount, setEmployeeCount] = useState<number>(75);

  const starterCost = employeeCount * 18000;
  const proCost = employeeCount * 32000;

  return (
    <section className="section py-16 md:py-24" id="harga" data-od-id="pricing">
      <div className="container-app">
        {/* Section Header */}
        <div className="text-center max-w-[700px] mx-auto mb-12">
          <Kicker>Pilihan investasi</Kicker>
          <h2 className="text-fg mb-4">
            Harga transparan untuk setiap skala bisnis.
          </h2>
          <p className="lead mx-auto">
            Mulai dari UKM bertumbuh hingga armada ribuan staf: pilih tingkat analitik yang sesuai dengan ritme operasional Anda tanpa biaya setup tersembunyi.
          </p>
        </div>

        {/* Interactive Employee Cost Calculator */}
        <div className="dash max-w-[880px] mx-auto mb-14 p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-border">
            <div>
              <p className="font-mono text-xs tracking-widest uppercase text-muted">
                Kalkulator simulasi investasi
              </p>
              <h3 className="text-lg md:text-xl text-fg mt-1">
                Hitung estimasi bulanan untuk tim Anda
              </h3>
            </div>
            <div className="flex items-baseline gap-2 bg-inset px-4 py-2 rounded-lg border border-border">
              <span className="font-mono text-2xl font-bold text-accent tabular-nums">
                {employeeCount}
              </span>
              <span className="font-mono text-xs text-muted uppercase">karyawan</span>
            </div>
          </div>

          {/* Slider Control */}
          <div className="py-6">
            <div className="flex justify-between items-center mb-3 font-mono text-xs text-muted">
              <span>20 staf</span>
              <span className="text-fg font-medium">Geser untuk menyesuaikan jumlah karyawan</span>
              <span>500+ staf</span>
            </div>
            <input
              type="range"
              min="20"
              max="500"
              step="5"
              value={employeeCount}
              onChange={(e) => setEmployeeCount(Number(e.target.value))}
              className="w-full h-2 bg-inset rounded-lg appearance-none cursor-pointer accent-accent"
              aria-label="Jumlah karyawan untuk kalkulator harga"
            />
          </div>

          {/* Real-time Cost Estimation Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div className="bg-inset p-4 rounded-xl border border-border flex flex-col justify-between">
              <div>
                <span className="font-mono text-[11px] text-muted uppercase tracking-wider block">
                  Estimasi Paket Starter
                </span>
                <span className="font-mono text-2xl font-bold text-fg mt-1 block tabular-nums">
                  Rp {starterCost.toLocaleString("id-ID")}
                  <span className="text-xs font-normal text-muted ml-1">/ bulan</span>
                </span>
              </div>
              <span className="meta text-[11px] text-muted mt-2">
                Dasar Rp 18.000 &times; {employeeCount} karyawan
              </span>
            </div>

            <div className="bg-inset p-4 rounded-xl border border-accent/40 shadow-[0_0_20px_-10px_rgba(139,92,246,0.3)] flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-2 right-2">
                <span className="inline-block font-mono text-[9px] uppercase tracking-wider bg-accent/20 text-accent px-2 py-0.5 rounded border border-accent/30">
                  Rekomendasi
                </span>
              </div>
              <div>
                <span className="font-mono text-[11px] text-muted uppercase tracking-wider block">
                  Estimasi Paket Pro (Analitik)
                </span>
                <span className="font-mono text-2xl font-bold text-accent mt-1 block tabular-nums">
                  Rp {proCost.toLocaleString("id-ID")}
                  <span className="text-xs font-normal text-muted ml-1">/ bulan</span>
                </span>
              </div>
              <span className="meta text-[11px] text-muted mt-2">
                Lengkap Rp 32.000 &times; {employeeCount} karyawan
              </span>
            </div>
          </div>

          {/* Context Note */}
          <p className="meta text-[11.5px] text-center text-muted mt-5 leading-relaxed">
            Perbandingan nilai: Dengan potensi kebocoran lembur rata-rata Rp 4,5 Juta per bulan akibat rekap manual, OmniHR Pulse mengembalikan investasinya sejak 30 hari pertama operasional.
          </p>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {pricingTiers.map((tier) => {
            const isHighlight = tier.highlight;
            const waUrl = getWhatsAppUrl(tier.whatsappMessage);

            return (
              <div
                key={tier.id}
                className={`bg-surface rounded-card p-6 md:p-8 flex flex-col justify-between border transition-all duration-200 relative ${
                  isHighlight
                    ? "border-accent shadow-[0_12px_36px_-16px_rgba(139,92,246,0.25)]"
                    : "border-border hover:border-muted/60"
                }`}
              >
                {/* Highlight Badge */}
                {tier.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-block font-mono text-[10.5px] uppercase tracking-widest bg-accent text-white font-semibold px-3 py-1 rounded-full shadow-sm">
                      {tier.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Card Title & Tagline */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-fg mb-1.5">{tier.name}</h3>
                    <p className="text-[13px] text-muted leading-snug">{tier.tagline}</p>
                  </div>

                  {/* Price Block */}
                  <div className="mb-6 pb-6 border-b border-border">
                    {tier.pricePerUserMonthly ? (
                      <div className="flex items-baseline gap-1">
                        <span className="font-mono text-3xl md:text-4xl font-bold text-fg tabular-nums">
                          Rp {tier.pricePerUserMonthly.toLocaleString("id-ID")}
                        </span>
                        <span className="meta text-xs">/ karyawan / bln</span>
                      </div>
                    ) : (
                      <div className="flex items-baseline gap-1">
                        <span className="font-mono text-3xl md:text-4xl font-bold text-fg">
                          Kustom
                        </span>
                        <span className="meta text-xs">/ sesuai kebutuhan</span>
                      </div>
                    )}
                    <span className="meta text-[11px] block mt-1.5 text-muted">
                      Minimal {tier.minUsers} karyawan &middot; Aktivasi instan
                    </span>
                  </div>

                  {/* Feature Checklist */}
                  <div className="mb-8">
                    <p className="font-mono text-[10.5px] uppercase tracking-wider text-muted mb-3 font-semibold">
                      Fitur yang disertakan:
                    </p>
                    <ul className="space-y-3 text-[13px] text-muted">
                      {tier.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span
                            className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                              isHighlight
                                ? "bg-accent/20 text-accent"
                                : "bg-indigo/30 text-il-3"
                            }`}
                            aria-hidden="true"
                          >
                            <svg
                              viewBox="0 0 12 12"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              className="w-2.5 h-2.5"
                            >
                              <path d="M2 6l3 3 5-6" />
                            </svg>
                          </span>
                          <span className="leading-snug">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-2">
                  <Button
                    variant={isHighlight ? "primary" : "secondary"}
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    {tier.ctaLabel}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
