"use client";

import React, { useState, useId } from "react";
import { Kicker } from "@/components/ui/Kicker";
import { Button } from "@/components/ui/Button";
import { faqData } from "@/lib/data";
import { getWhatsAppUrl } from "@/lib/site";

interface FaqSectionProps {
  whatsappNumber?: string;
}

export function FaqSection({ whatsappNumber }: FaqSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>("Semua");
  const [openId, setOpenId] = useState<string | null>(faqData[0]?.id ?? null);
  const sectionId = useId();

  // Extract unique categories
  const categories = ["Semua", ...Array.from(new Set(faqData.map((item) => item.category)))];

  // Filter items based on active category
  const filteredFaqs =
    activeCategory === "Semua"
      ? faqData
      : faqData.filter((item) => item.category === activeCategory);

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const consultationMessage =
    "Halo Tim OmniHR Pulse, saya telah membaca FAQ di website dan ingin berdiskusi lebih lanjut mengenai implementasi sistem analitik SDM untuk perusahaan kami.";
  const waUrl = getWhatsAppUrl(consultationMessage, whatsappNumber);

  return (
    <section className="section py-16 md:py-24" id="faq" data-od-id="faq">
      <div className="container-app">
        {/* Section Header */}
        <div className="text-center max-w-[720px] mx-auto mb-12">
          <Kicker>Tanya jawab operasional</Kicker>
          <h2 className="text-fg mb-4">
            Pertanyaan yang paling sering ditanyakan direksi dan tim HR.
          </h2>
          <p className="lead mx-auto">
            Jawaban lugas seputar integrasi absensi lapangan, keandalan forecasting payroll, kepatuhan regulasi ketenagakerjaan, hingga perlindungan data karyawan Anda.
          </p>
        </div>

        {/* Category Filters */}
        <div
          className="flex flex-wrap items-center justify-center gap-2 mb-10"
          role="tablist"
          aria-label="Filter kategori pertanyaan"
        >
          {categories.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                role="tab"
                id={`faq-tab-${cat.replace(/\s+/g, "-").toLowerCase()}`}
                aria-selected={isSelected}
                onClick={() => {
                  setActiveCategory(cat);
                  // If current open item is not in filtered list, keep it or open the first available
                  const firstOfCategory =
                    cat === "Semua"
                      ? faqData[0]?.id
                      : faqData.find((item) => item.category === cat)?.id;
                  if (firstOfCategory) setOpenId(firstOfCategory);
                }}
                className={`text-xs font-mono tracking-wider px-3.5 py-1.5 rounded-full border transition-all duration-150 ${
                  isSelected
                    ? "bg-accent text-white border-accent font-semibold shadow-sm"
                    : "bg-surface text-muted border-border hover:border-muted/60 hover:text-fg"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Accordion List */}
        <div className="max-w-[840px] mx-auto space-y-3.5">
          {filteredFaqs.map((item, index) => {
            const isOpen = openId === item.id;
            const buttonId = `faq-btn-${sectionId}-${item.id}`;
            const panelId = `faq-panel-${sectionId}-${item.id}`;
            const formattedIndex = String(index + 1).padStart(2, "0");

            return (
              <div
                key={item.id}
                className={`bg-surface rounded-card border transition-colors duration-200 overflow-hidden ${
                  isOpen ? "border-accent/60 shadow-[0_4px_20px_-8px_rgba(139,92,246,0.18)]" : "border-border hover:border-muted/40"
                }`}
              >
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full text-left p-5 md:p-6 flex items-start justify-between gap-4 focus-visible:outline-2 focus-visible:outline-[var(--il-3)] focus-visible:outline-offset-2"
                  >
                    <div className="flex items-start gap-3.5">
                      <span
                        className="font-mono text-xs text-accent mt-0.5 tabular-nums select-none shrink-0"
                        aria-hidden="true"
                      >
                        {formattedIndex}
                      </span>
                      <div>
                        <span className="font-mono text-[10.5px] uppercase tracking-wider text-muted block mb-1">
                          {item.category}
                        </span>
                        <span className="text-base md:text-lg font-semibold text-fg leading-snug block">
                          {item.question}
                        </span>
                      </div>
                    </div>

                    <div
                      className={`w-7 h-7 rounded-lg bg-inset border border-border flex items-center justify-center shrink-0 transition-transform duration-200 mt-1 ${
                        isOpen ? "rotate-180 bg-accent/20 border-accent/40 text-accent" : "text-muted"
                      }`}
                      aria-hidden="true"
                    >
                      <svg
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-3.5 h-3.5"
                      >
                        <path d="M4 6l4 4 4-4" />
                      </svg>
                    </div>
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="px-5 pb-5 md:px-6 md:pb-6 pt-0 border-t border-border/40"
                  >
                    <div className="bg-inset rounded-xl p-4 md:p-5 border border-border/60 mt-3 text-[14px] md:text-[14.5px] text-muted leading-relaxed">
                      {item.answer}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Desk Callout */}
        <div className="max-w-[840px] mx-auto mt-12 p-6 md:p-7 bg-surface border border-border rounded-dash flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="live-dot" aria-hidden="true" />
              <span className="font-mono text-xs uppercase tracking-wider text-accent font-medium">
                Konsultasi teknis langsung
              </span>
            </div>
            <h3 className="text-base md:text-lg font-semibold text-fg">
              Punya pertanyaan seputar arsitektur data atau alur kerja khusus tim Anda?
            </h3>
            <p className="text-xs md:text-sm text-muted max-w-[50ch]">
              Tim konsultan analitik OmniHR Pulse siap membantu memetakan integrasi sistem dan menyimulasikan perhitungan efisiensi payroll perusahaan Anda.
            </p>
          </div>

          <Button
            variant="primary"
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            hasArrow
            className="shrink-0 w-full md:w-auto"
          >
            Tanya Sales via WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
