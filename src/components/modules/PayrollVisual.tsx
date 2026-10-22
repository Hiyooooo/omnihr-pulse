"use client";

import React, { useMemo } from "react";
import { payrollForecastData, overtimeDivisionData } from "@/lib/data";
import { smooth } from "@/lib/charts";
import { Tag } from "@/components/ui/Tag";

export function PayrollVisual() {
  const W = 480;
  const H = 130;
  const L = 6;
  const R = 8;
  const T = 10;
  const B = 22;

  const min = 6;
  const max = 10.5;

  const getY = (v: number) => H - B - ((v - min) / (max - min)) * (H - T - B);
  const getX = (i: number) => L + (i * (W - L - R)) / (payrollForecastData.allValues.length - 1);

  const actPts: [number, number][] = useMemo(() => {
    return payrollForecastData.actualValues.map((v, i) => [getX(i), getY(v)]);
  }, []);

  const fcPts: [number, number][] = useMemo(() => {
    // Starts at month index 4 (Okt) to connect seamlessly
    return payrollForecastData.forecastValues.map((v, i) => [getX(i + 4), getY(v)]);
  }, []);

  const actLine = useMemo(() => smooth(actPts), [actPts]);
  const fcLine = useMemo(() => smooth(fcPts), [fcPts]);

  const actArea = useMemo(() => {
    if (!actPts.length) return "";
    return `${actLine} L${actPts[actPts.length - 1][0]},${H - B} L${L},${H - B} Z`;
  }, [actLine, actPts]);

  const fcArea = useMemo(() => {
    if (!fcPts.length) return "";
    return `${fcLine} L${fcPts[fcPts.length - 1][0]},${H - B} L${fcPts[0][0]},${H - B} Z`;
  }, [fcLine, fcPts]);

  const paguY = getY(10);
  const maxHours = Math.max(...overtimeDivisionData.map((d) => d.hours));

  return (
    <div className="data-card stack">
      {/* Head */}
      <div className="flex items-start justify-between gap-3.5 pb-3.5 border-b border-border mb-4">
        <div>
          <p className="font-mono text-[10.5px] tracking-widest uppercase text-muted">
            Proyeksi pengeluaran payroll
          </p>
          <p className="font-mono text-[10.5px] text-muted opacity-85 mt-1">
            Realisasi solid &middot; proyeksi putus-putus
          </p>
        </div>
        <Tag>Pagu Rp 10 M</Tag>
      </div>

      {/* 8-month Forecast SVG */}
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-auto overflow-visible mt-1"
        aria-label="Grafik proyeksi pengeluaran payroll"
      >
        <defs>
          <linearGradient id="actAreaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.30" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="fcAreaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--indigo)" stopOpacity="0.55" />
            <stop offset="100%" stopColor="var(--indigo)" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Grid lines */}
        {[7, 8, 9].map((gv) => (
          <line
            key={gv}
            x1={L}
            y1={getY(gv)}
            x2={W - R}
            y2={getY(gv)}
            stroke="var(--border)"
            strokeWidth="1"
            opacity="0.5"
          />
        ))}

        {/* Ceiling 10 M Line */}
        <line
          x1={L}
          y1={paguY}
          x2={W - R}
          y2={paguY}
          stroke="var(--muted)"
          strokeWidth="1"
          strokeDasharray="3 4"
          opacity="0.6"
        />

        {/* Areas */}
        <path d={actArea} fill="url(#actAreaGrad)" />
        <path d={fcArea} fill="url(#fcAreaGrad)" />

        {/* Lines */}
        <path
          d={actLine}
          fill="none"
          stroke="var(--accent)"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d={fcLine}
          fill="none"
          stroke="var(--il-3)"
          strokeWidth="1.8"
          strokeDasharray="5 4"
          strokeLinecap="round"
        />

        {/* Month labels on axis */}
        {[0, 2, 4, 6, 7].map((i) => (
          <text
            key={i}
            x={getX(i)}
            y={H - 6}
            textAnchor="middle"
            fill="var(--muted)"
            fontSize="9"
            fontFamily="var(--font-mono)"
          >
            {payrollForecastData.months[i]}
          </text>
        ))}

        {/* Ceiling label */}
        <text
          x={W - R}
          y={paguY - 5}
          textAnchor="end"
          fill="var(--muted)"
          fontSize="9"
          fontFamily="var(--font-mono)"
        >
          pagu 10 M
        </text>
      </svg>

      {/* Legend */}
      <div className="flex flex-row gap-4 mt-2 font-mono text-[10.5px] text-muted">
        <span className="flex items-center gap-1.5">
          <i className="w-1.5 h-1.5 rounded-sm bg-accent inline-block" />
          Realisasi
        </span>
        <span className="flex items-center gap-1.5">
          <i className="w-1.5 h-1.5 rounded-sm bg-il-3 inline-block" />
          Proyeksi
        </span>
        <span className="flex items-center gap-1.5">
          <i className="w-1.5 h-1.5 rounded-sm bg-border inline-block" />
          Pagu 10 M
        </span>
      </div>

      <hr className="border-0 border-t border-border my-3" />

      {/* Overtime bar list */}
      <p className="font-mono text-[10.5px] tracking-widest uppercase text-muted mb-2">
        Beban lembur per divisi &middot; jam
      </p>
      <div className="flex flex-col gap-2.5">
        {overtimeDivisionData.map((row) => (
          <div
            key={row.division}
            className="grid grid-cols-[102px_minmax(0,1fr)_56px] items-center gap-2.5"
          >
            <span className="font-mono text-[10.5px] text-muted">{row.division}</span>
            <span className="block h-1.5 rounded-[3px] bg-inset overflow-hidden">
              <span
                className={`block h-full rounded-[3px] transition-all duration-700 ease-out ${
                  row.hot ? "bg-accent" : "bg-[color-mix(in_oklch,var(--indigo)_52%,var(--il-3))]"
                }`}
                style={{ width: `${(row.hours / maxHours) * 100}%` }}
              />
            </span>
            <span className="font-mono text-[10.5px] text-fg text-right tabular-nums">
              {row.hours.toLocaleString("id-ID")} jam
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
