"use client";

import React, { useMemo } from "react";
import { attendanceData, heatmapDays, generateHeatmapData } from "@/lib/data";
import { smooth } from "@/lib/charts";
import { Tag } from "@/components/ui/Tag";
import { useTooltip } from "@/components/ui/Tooltip";

export function AttendanceVisual() {
  const { showTooltip, hideTooltip } = useTooltip();
  const data = attendanceData["30"].values;
  const n = data.length;

  const W = 480;
  const H = 120;
  const L = 6;
  const R = 8;
  const T = 10;
  const B = 8;

  const getY = (v: number) => H - B - ((v - 88) / 10) * (H - T - B);
  const getX = (i: number) => L + (i * (W - L - R)) / (n - 1);

  const points: [number, number][] = useMemo(() => {
    return data.map((v, i) => [getX(i), getY(v)]);
  }, [data]);

  const pathD = useMemo(() => smooth(points), [points]);
  const areaD = useMemo(() => {
    if (!points.length) return "";
    return `${pathD} L${points[points.length - 1][0]},${H - B} L${L},${H - B} Z`;
  }, [pathD, points]);

  const targetY = getY(92);
  const heatmapCells = useMemo(() => generateHeatmapData(), []);

  return (
    <div className="data-card stack">
      {/* Head */}
      <div className="flex items-start justify-between gap-3.5 pb-3.5 border-b border-border mb-4">
        <div>
          <p className="font-mono text-[10.5px] tracking-widest uppercase text-muted">
            Tren ketepatan waktu
          </p>
          <p className="font-mono text-[10.5px] text-muted opacity-85 mt-1">
            30 hari terakhir &middot; seluruh unit
          </p>
        </div>
        <Tag>94,2% tepat waktu</Tag>
      </div>

      {/* Mini Line Chart SVG */}
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-auto overflow-visible mt-1.5"
        aria-label="Grafik garis tren ketepatan waktu 30 hari"
      >
        <defs>
          <linearGradient id="m1AreaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.30" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Grid lines */}
        {[92, 96].map((gv) => (
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

        {/* Target 92 line */}
        <line
          x1={L}
          y1={targetY}
          x2={W - R}
          y2={targetY}
          stroke="var(--il-3)"
          strokeWidth="1"
          strokeDasharray="4 4"
          opacity="0.45"
        />

        {/* Main line & Area */}
        <path d={areaD} fill="url(#m1AreaGrad)" />
        <path
          d={pathD}
          fill="none"
          stroke="var(--accent)"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Last dot */}
        {points.length > 0 && (
          <circle
            cx={points[points.length - 1][0]}
            cy={points[points.length - 1][1]}
            r={3.4}
            fill="var(--accent)"
            stroke="var(--surface)"
            strokeWidth="2"
          />
        )}
      </svg>

      {/* Heatmap Block */}
      <div className="mt-4.5">
        <div className="flex items-center justify-between mb-2">
          <p className="font-mono text-[10.5px] tracking-widest uppercase text-muted">
            Heatmap kehadiran
          </p>
          <p className="font-mono text-[10.5px] text-muted opacity-85">
            Sen–Min &middot; 08.00–19.00
          </p>
        </div>

        {/* Heatmap Grid */}
        <div className="grid grid-cols-[26px_repeat(12,minmax(0,1fr))] gap-1 items-center">
          {heatmapDays.map((d, di) => {
            const dayCells = heatmapCells.filter((c) => c.day === d);
            return (
              <React.Fragment key={d}>
                <span className="font-mono text-[9px] text-muted">{d}</span>
                {dayCells.map((cell, ci) => (
                  <span
                    key={ci}
                    className="aspect-[1.5] rounded-xs cursor-pointer transition-transform duration-100 hover:scale-125 hover:outline hover:outline-1 hover:outline-fg"
                    style={{
                      background: `oklch(${(0.245 + cell.val * 0.55).toFixed(3)} ${(0.03 + cell.val * 0.12).toFixed(3)} 290)`,
                    }}
                    onMouseEnter={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      showTooltip(
                        rect.left + rect.width / 2,
                        rect.top,
                        <span>
                          {cell.day} {cell.hourLabel} &middot;{" "}
                          <strong>{cell.checkins}</strong> check-in
                        </span>
                      );
                    }}
                    onMouseLeave={hideTooltip}
                  />
                ))}
              </React.Fragment>
            );
          })}
        </div>

        {/* Hour markers */}
        <div className="grid grid-cols-[26px_repeat(12,minmax(0,1fr))] gap-1 mt-1 font-mono text-[9px] text-muted" aria-hidden="true">
          <span />
          <span>08</span>
          <span />
          <span />
          <span>11</span>
          <span />
          <span />
          <span>14</span>
          <span />
          <span />
          <span>17</span>
          <span />
          <span>19</span>
        </div>

        {/* Scale Ramp */}
        <div className="flex items-center gap-2 mt-2 font-mono text-[9.5px] text-muted">
          <span>Rendah</span>
          <span
            className="flex-1 h-1 rounded-sm"
            style={{
              background:
                "linear-gradient(90deg, oklch(0.27 0.05 285), oklch(0.52 0.15 288), oklch(0.80 0.15 292))",
            }}
          />
          <span>Penuh</span>
        </div>
      </div>
    </div>
  );
}
