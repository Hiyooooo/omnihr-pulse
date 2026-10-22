"use client";

import React, { useState, useRef, useMemo } from "react";
import { attendanceData } from "@/lib/data";
import { smooth, formatIdNumber } from "@/lib/charts";
import { useTooltip } from "@/components/ui/Tooltip";

export interface AttendanceChartProps {
  range: "7" | "30" | "90";
}

export function AttendanceChart({ range }: AttendanceChartProps) {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const { showTooltip, hideTooltip } = useTooltip();
  const [crosshairX, setCrosshairX] = useState<number | null>(null);

  const AW = 420;
  const AH = 148;
  const AL = 4;
  const AR = 4;
  const AT = 12;
  const AB = 14;

  const currentData = attendanceData[range];
  const n = currentData.values.length;

  const getY = (v: number) => AH - AB - ((v - 88) / 10) * (AH - AT - AB);
  const getX = (i: number) => AL + (i * (AW - AL - AR)) / (n - 1);

  const points: [number, number][] = useMemo(() => {
    return currentData.values.map((v, i) => [getX(i), getY(v)]);
  }, [range, currentData.values]);

  const pathD = useMemo(() => smooth(points), [points]);
  const areaD = useMemo(() => {
    if (!points.length) return "";
    return `${pathD} L${points[points.length - 1][0]},${AH - AB} L${AL},${AH - AB} Z`;
  }, [pathD, points]);

  const targetY = getY(92);
  const gridLines = [90, 92, 94, 96];

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    if (!svgRef.current) return;
    const rect = svgRef.current.getBoundingClientRect();
    const vx = ((e.clientX - rect.left) / rect.width) * AW;
    const step = (AW - AL - AR) / (n - 1);
    const i = Math.max(0, Math.min(n - 1, Math.round((vx - AL) / step)));
    const p = points[i];
    if (!p) return;

    setCrosshairX(p[0]);
    showTooltip(
      e.clientX,
      e.clientY,
      <span>
        <strong>{formatIdNumber(currentData.values[i])}%</strong> tepat waktu
      </span>
    );
  };

  const handleMouseLeave = () => {
    setCrosshairX(null);
    hideTooltip();
  };

  return (
    <div className="chart relative mt-auto">
      <svg
        ref={svgRef}
        viewBox={`0 0 ${AW} ${AH}`}
        className="w-full h-auto overflow-visible"
        aria-label="Grafik tren ketepatan waktu kehadiran"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <defs>
          <linearGradient id="chartAreaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.30" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Horizontal grid lines */}
        <g>
          {gridLines.map((gv) => (
            <line
              key={gv}
              x1={AL}
              y1={getY(gv)}
              x2={AW - AR}
              y2={getY(gv)}
              stroke="var(--border)"
              strokeWidth="1"
              strokeOpacity="0.55"
            />
          ))}
          {/* Target 92% dashed line */}
          <line
            x1={AL}
            y1={targetY}
            x2={AW - AR}
            y2={targetY}
            stroke="var(--il-3)"
            strokeWidth="1"
            strokeDasharray="3 4"
            opacity="0.4"
          />
        </g>

        {/* Area and main curve */}
        <path d={areaD} fill="url(#chartAreaGrad)" />
        <path
          d={pathD}
          fill="none"
          stroke="var(--accent)"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Dots for smaller series */}
        {n <= 12 &&
          points.map((p, idx) => (
            <circle
              key={idx}
              cx={p[0]}
              cy={p[1]}
              r={2.6}
              fill="var(--accent)"
              stroke="var(--inset)"
              strokeWidth="2"
            />
          ))}

        {/* Hover crosshair */}
        {crosshairX !== null && (
          <line
            x1={crosshairX}
            y1={AT - 4}
            x2={crosshairX}
            y2={AH - AB}
            stroke="var(--muted)"
            strokeWidth="1"
            strokeDasharray="3 3"
            opacity="0.75"
          />
        )}

        {/* Transparent hit area */}
        <rect
          x="0"
          y="0"
          width={AW}
          height={AH}
          fill="transparent"
          className="cursor-crosshair"
        />
      </svg>

      {/* X-axis labels */}
      <div className="x-axis flex justify-between mt-1.5 font-mono text-[10px] text-muted">
        {currentData.labels.map((lbl, idx) => (
          <span key={idx}>{lbl}</span>
        ))}
      </div>
    </div>
  );
}
