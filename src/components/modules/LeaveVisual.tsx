"use client";

import React from "react";
import { leaveSeasonalityData } from "@/lib/data";
import { Tag } from "@/components/ui/Tag";
import { useTooltip } from "@/components/ui/Tooltip";

export function LeaveVisual() {
  const { showTooltip, hideTooltip } = useTooltip();
  const maxVal = 21;

  return (
    <div className="data-card stack">
      {/* Head */}
      <div className="flex items-start justify-between gap-3.5 pb-3.5 border-b border-border mb-4">
        <div>
          <p className="font-mono text-[10.5px] tracking-widest uppercase text-muted">
            Musim cuti tahunan
          </p>
          <p className="font-mono text-[10.5px] text-muted opacity-85 mt-1">
            % karyawan cuti per bulan &middot; 2026
          </p>
        </div>
        <Tag>Puncak Desember</Tag>
      </div>

      {/* Column Chart */}
      <div
        className="flex items-end gap-1.5 h-[142px] mt-2.5 border-b border-border"
        aria-label="Grafik kolom persentase karyawan cuti per bulan"
      >
        {leaveSeasonalityData.percentages.map((v, i) => {
          const month = leaveSeasonalityData.months[i];
          const isHot = v >= 14;
          const heightPct = Math.max(3, (v / maxVal) * 100);

          return (
            <div
              key={month}
              className="flex-1 flex flex-col justify-end h-full group cursor-pointer"
              onMouseEnter={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                showTooltip(
                  rect.left + rect.width / 2,
                  rect.top - 4,
                  <span>
                    {month} &middot; <strong>{v}%</strong> karyawan cuti
                  </span>
                );
              }}
              onMouseLeave={hideTooltip}
            >
              {v >= 13 && (
                <span className="font-mono text-[9.5px] text-fg text-center mb-1">
                  {v}%
                </span>
              )}
              <span
                className={`w-full rounded-t-[3px] transition-all duration-500 ease-out ${
                  isHot
                    ? "bg-accent"
                    : "bg-[var(--il-1)] group-hover:bg-[var(--il-3)]"
                }`}
                style={{ height: `${heightPct}%` }}
              />
            </div>
          );
        })}
      </div>

      {/* X-axis months */}
      <div className="flex justify-between font-mono text-[10px] text-muted mt-2 px-1">
        {leaveSeasonalityData.months.map((m) => (
          <span key={m}>{m}</span>
        ))}
      </div>

      {/* Risk Callout Warning */}
      <div className="callout">
        <span className="callout-dot" aria-hidden="true" />
        <p>
          <strong>Desember:</strong> 18% tim operasional cuti bersamaan dengan puncak pesanan. Proyeksi kekurangan 9 staf per pekan.
        </p>
      </div>

      <hr className="border-0 border-t border-border my-3" />

      {/* Mini Stats */}
      <div className="grid grid-cols-3 gap-2 mt-1">
        {leaveSeasonalityData.miniStats.map((st) => (
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
