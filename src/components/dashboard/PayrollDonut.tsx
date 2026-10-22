"use client";

import React, { useState } from "react";
import { payrollDonutData, DonutSegment } from "@/lib/data";
import { calcDonutLength } from "@/lib/charts";
import { useTooltip } from "@/components/ui/Tooltip";

export function PayrollDonut() {
  const { showTooltip, hideTooltip } = useTooltip();
  const [activeSegment, setActiveSegment] = useState<DonutSegment | null>(null);

  const radius = 46;
  const circumference = 2 * Math.PI * radius; // ~289.026

  let accumulatedOffset = 0;
  const arcs = payrollDonutData.map((seg) => {
    const { len } = calcDonutLength(seg.value, radius);
    const strokeDasharray = `${len.toFixed(2)} ${(circumference - len).toFixed(2)}`;
    const strokeDashoffset = -accumulatedOffset;
    accumulatedOffset += len;
    return {
      ...seg,
      strokeDasharray,
      strokeDashoffset,
    };
  });

  const centerVal = activeSegment ? `${activeSegment.value}%` : "Rp 8,4 M";
  const centerLabel = activeSegment ? activeSegment.label : "dari 10 M";

  return (
    <div className="flex flex-col items-center justify-center flex-1 mt-1.5">
      <div className="relative w-full max-w-[150px] aspect-square flex items-center justify-center">
        <svg
          viewBox="0 0 120 120"
          className="w-full h-full -rotate-90"
          aria-label="Donat komposisi anggaran payroll"
        >
          {/* Base track */}
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke="color-mix(in oklch, var(--border) 70%, transparent)"
            strokeWidth="13"
          />

          {/* Interactive arcs */}
          {arcs.map((arc, i) => {
            const isHovered = activeSegment?.label === arc.label;
            return (
              <circle
                key={i}
                cx="60"
                cy="60"
                r={radius}
                fill="none"
                stroke={arc.colorVar}
                strokeWidth={isHovered ? 15 : 13}
                strokeDasharray={arc.strokeDasharray}
                strokeDashoffset={arc.strokeDashoffset}
                strokeLinecap="butt"
                className="transition-all duration-200 cursor-pointer"
                opacity={arc.label === "Tunjangan" ? 0.82 : 1}
                onMouseEnter={(e) => {
                  setActiveSegment(arc);
                  const rect = e.currentTarget.getBoundingClientRect();
                  showTooltip(
                    rect.left + rect.width / 2,
                    rect.top,
                    <span>
                      {arc.label} &middot; <strong>{arc.value}%</strong>
                    </span>
                  );
                }}
                onMouseLeave={() => {
                  setActiveSegment(null);
                  hideTooltip();
                }}
              />
            );
          })}
        </svg>

        {/* Center label */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
          <span className="font-mono text-[19px] tracking-tight font-semibold text-fg">
            {centerVal}
          </span>
          <span className="font-mono text-[9.5px] text-muted tracking-wider uppercase">
            {centerLabel}
          </span>
        </div>
      </div>
    </div>
  );
}
