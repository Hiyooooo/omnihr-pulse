"use client";

import React, { useState, useEffect } from "react";
import { productivityGaugeData } from "@/lib/data";
import { calcGaugeRotation } from "@/lib/charts";

export function ProductivityGauge() {
  const [score, setScore] = useState(productivityGaugeData.score);
  const G_LEN = 214;

  useEffect(() => {
    // Check reduced motion
    const isReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isReduced) return;

    const interval = setInterval(() => {
      // Subtle heartbeat fluctuation between 76 and 81
      const delta = Math.round(Math.random() * 5) - 2;
      setScore(Math.max(74, Math.min(82, 78 + delta)));
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  const dashOffset = (G_LEN * (1 - score / 100)).toFixed(1);
  const rotationDeg = calcGaugeRotation(score);

  return (
    <div className="flex flex-col items-center justify-center flex-1 mt-1">
      <div className="relative w-full max-w-[180px]">
        <svg
          viewBox="0 0 180 104"
          className="w-full h-auto overflow-visible"
          aria-label={`Gauge produktivitas ${score} dari 100`}
        >
          {/* Base background arc */}
          <path
            d="M22 88a68 68 0 0 1 136 0"
            fill="none"
            stroke="color-mix(in oklch, var(--border) 80%, transparent)"
            strokeWidth="11"
            strokeLinecap="round"
          />

          {/* Value fill arc */}
          <path
            d="M22 88a68 68 0 0 1 136 0"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="11"
            strokeLinecap="round"
            strokeDasharray={G_LEN}
            strokeDashoffset={dashOffset}
            className="transition-all duration-1000 ease-out"
          />

          {/* Needle indicator */}
          <g
            className="transition-transform duration-1000 ease-out"
            style={{
              transformOrigin: "90px 88px",
              transform: `rotate(${rotationDeg}deg)`,
            }}
          >
            <line
              x1="90"
              y1="88"
              x2="90"
              y2="34"
              stroke="var(--fg)"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
            <circle cx="90" cy="88" r="5" fill="var(--fg)" />
          </g>
        </svg>

        {/* Value readout */}
        <div className="text-center mt-1">
          <div className="font-mono text-[26px] tracking-tight font-semibold leading-none text-fg">
            {score}
          </div>
          <div className="font-mono text-[9.5px] text-muted tracking-widest uppercase mt-0.5">
            {productivityGaugeData.status}
          </div>
        </div>
      </div>

      {/* Scale indicators */}
      <div className="flex justify-between w-full max-w-[180px] font-mono text-[9.5px] text-muted mt-1.5 px-2">
        <span>0</span>
        <span>50</span>
        <span>100</span>
      </div>
    </div>
  );
}
