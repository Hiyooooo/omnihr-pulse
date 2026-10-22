"use client";

import React, { useMemo } from "react";
import { examData } from "@/lib/data";
import { smooth, calcGaussian } from "@/lib/charts";
import { Tag } from "@/components/ui/Tag";

export function ExamVisual() {
  const W = 480;
  const H = 132;
  const L = 6;
  const R = 8;
  const T = 10;
  const B = 6;

  const minScore = 40;
  const maxScore = 100;

  const getX = (score: number) =>
    L + ((score - minScore) / (maxScore - minScore)) * (W - L - R);
  const getY = (val: number) => H - B - (val / 1.05) * (H - T - B);

  const curvePoints: [number, number][] = useMemo(() => {
    const pts: [number, number][] = [];
    for (let s = minScore; s <= maxScore; s += 1.5) {
      const gVal = calcGaussian(s, examData.mean, examData.sd);
      pts.push([getX(s), getY(gVal)]);
    }
    return pts;
  }, []);

  const pathD = useMemo(() => smooth(curvePoints), [curvePoints]);
  const areaD = useMemo(() => {
    if (!curvePoints.length) return "";
    return `${pathD} L${curvePoints[curvePoints.length - 1][0]},${H - B} L${L},${H - B} Z`;
  }, [pathD, curvePoints]);

  const meanX = getX(examData.mean);
  const passStartX = getX(60);
  const passEndX = getX(85);
  const maxGap = Math.max(...examData.skillGaps.map((d) => d.gapPct));

  return (
    <div className="data-card stack">
      {/* Head */}
      <div className="flex items-start justify-between gap-3.5 pb-3.5 border-b border-border mb-4">
        <div>
          <p className="font-mono text-[10.5px] tracking-widest uppercase text-muted">
            Distribusi skor ujian
          </p>
          <p className="font-mono text-[10.5px] text-muted opacity-85 mt-1">
            Batch {examData.batch} &middot; {examData.participants} peserta
          </p>
        </div>
        <Tag>Rata-rata 74</Tag>
      </div>

      {/* Gaussian Normal Curve SVG */}
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-auto overflow-visible mt-1"
        aria-label="Kurva distribusi normal skor ujian"
      >
        <defs>
          <linearGradient id="examAreaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.30" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Shaded passing score band (60 to 85) */}
        <rect
          x={passStartX}
          y={T}
          width={passEndX - passStartX}
          height={H - B - T}
          fill="var(--accent)"
          opacity="0.08"
        />

        {/* Area & main curve */}
        <path d={areaD} fill="url(#examAreaGrad)" />
        <path
          d={pathD}
          fill="none"
          stroke="var(--accent)"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Mean line */}
        <line
          x1={meanX}
          y1={T}
          x2={meanX}
          y2={H - B}
          stroke="var(--il-3)"
          strokeWidth="1"
          strokeDasharray="3 4"
          opacity="0.55"
        />
        <text
          x={meanX + 6}
          y={T + 10}
          fill="var(--il-3)"
          fontSize="9"
          fontFamily="var(--font-mono)"
        >
          &mu; 74
        </text>
      </svg>

      {/* X-axis scale */}
      <div className="flex justify-between font-mono text-[9px] text-muted mt-1 px-1">
        <span>40</span>
        <span>55</span>
        <span>70</span>
        <span>85</span>
        <span>100</span>
      </div>

      <hr className="border-0 border-t border-border my-3" />

      {/* Skill-gap bar list */}
      <p className="font-mono text-[10.5px] tracking-widest uppercase text-muted mb-2">
        Skill-gap per divisi
      </p>
      <div className="flex flex-col gap-2.5">
        {examData.skillGaps.map((row) => (
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
                style={{ width: `${(row.gapPct / maxGap) * 100}%` }}
              />
            </span>
            <span className="font-mono text-[10.5px] text-fg text-right tabular-nums">
              {row.gapPct}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
