"use client";

import React from "react";
import { librarySopData } from "@/lib/data";
import { Tag } from "@/components/ui/Tag";

export function LibraryVisual() {
  return (
    <div className="data-card stack">
      {/* Head */}
      <div className="flex items-start justify-between gap-3.5 pb-3.5 border-b border-border mb-4">
        <div>
          <p className="font-mono text-[10.5px] tracking-widest uppercase text-muted">
            Konfirmasi SOP baru
          </p>
          <p className="font-mono text-[10.5px] text-muted opacity-85 mt-1">
            3 dokumen &middot; 240 karyawan
          </p>
        </div>
        <Tag>89% rata-rata</Tag>
      </div>

      {/* Document progress rows */}
      <div className="flex flex-col gap-4 mt-0.5">
        {librarySopData.documents.map((doc) => (
          <div
            key={doc.name}
            className="grid grid-cols-[1fr_auto] gap-x-3 gap-y-1.5"
          >
            <span className="text-[13.5px] leading-snug text-fg">{doc.name}</span>
            <span className="font-mono text-[11px] text-muted tabular-nums">
              {doc.pct}% &middot; {doc.count}
            </span>
            <span className="block col-span-2 h-1.5 rounded-[3px] bg-inset overflow-hidden">
              <span
                className={`block h-full rounded-[3px] transition-all duration-700 ease-out ${
                  doc.low
                    ? "bg-accent"
                    : "bg-[color-mix(in_oklch,var(--indigo)_52%,var(--il-3))]"
                }`}
                style={{ width: `${doc.pct}%` }}
              />
            </span>
          </div>
        ))}
      </div>

      <hr className="border-0 border-t border-border my-4" />

      {/* Mini Stats */}
      <div className="grid grid-cols-3 gap-2">
        {librarySopData.miniStats.map((st) => (
          <div key={st.label}>
            <span className="block font-mono text-[17px] tracking-tight font-semibold text-fg">
              {st.value}
            </span>
            <span className="block text-[10.5px] text-muted mt-0.5 leading-snug">
              {st.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
