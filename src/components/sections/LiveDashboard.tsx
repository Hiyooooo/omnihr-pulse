"use client";

import React, { useState } from "react";
import { AttendanceChart } from "@/components/dashboard/AttendanceChart";
import { PayrollDonut } from "@/components/dashboard/PayrollDonut";
import { ProductivityGauge } from "@/components/dashboard/ProductivityGauge";
import { TimeRangeSegment } from "@/components/dashboard/TimeRangeSegment";
import { attendanceData } from "@/lib/data";
import { formatIdNumber } from "@/lib/charts";

export function LiveDashboard() {
  const [range, setRange] = useState<"7" | "30" | "90">("30");

  const currentValues = attendanceData[range].values;
  const avgAttendance =
    currentValues.reduce((a, b) => a + b, 0) / currentValues.length;

  return (
    <section
      className="section pt-0 border-t-0"
      id="demo"
      data-od-id="live-dashboard"
    >
      <div className="container-app">
        <div className="dash">
          {/* Dashboard Header */}
          <div className="flex items-start justify-between gap-5 pb-4.5 pt-0.5 flex-wrap">
            <div>
              <p className="font-display text-[17px] font-semibold tracking-tight text-fg mb-0.5">
                Pulse hari ini
              </p>
              <p className="meta">
                Rabu, 21 Oktober 2026 &middot; 09.42 WIB &middot; workspace demo
              </p>
            </div>
            <div className="flex items-center gap-2.5">
              <TimeRangeSegment
                currentRange={range}
                onChangeRange={setRange}
              />
              <span className="live-pill">
                <span className="live-dot" />
                Live
              </span>
            </div>
          </div>

          {/* 3 Analytics Widgets Grid */}
          <div className="grid grid-cols-1 md:grid-cols-[1.55fr_1fr_1fr] gap-3.5 relative">
            {/* Widget 1: Attendance Trend Line */}
            <div className="widget">
              <div className="flex items-baseline justify-between gap-2.5">
                <span className="w-label">Ketepatan waktu</span>
                <span className="w-val text-fg font-mono">
                  {formatIdNumber(avgAttendance)}
                  <span className="text-[13px] text-muted ml-0.5">%</span>
                </span>
              </div>
              <div className="flex items-center gap-1.5 mt-1 text-[11.5px] text-muted font-mono">
                <span className="delta text-ok inline-flex items-center gap-0.5">
                  <svg
                    viewBox="0 0 10 10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    className="w-2.5 h-2.5"
                  >
                    <path d="M5 8V2M2 5l3-3 3 3" />
                  </svg>
                  1,2 pts
                </span>
                vs periode lalu
              </div>

              <div className="mt-4">
                <AttendanceChart range={range} />
              </div>

              <div className="flex flex-row gap-3.5 mt-2.5 font-mono text-[10.5px] text-muted">
                <span className="flex items-center gap-1.5">
                  <i className="w-1.5 h-1.5 rounded-sm bg-accent inline-block" />
                  Tepat waktu
                </span>
                <span className="flex items-center gap-1.5">
                  <i className="w-1.5 h-1.5 rounded-sm bg-il-3 opacity-55 inline-block" />
                  Target 92%
                </span>
              </div>
            </div>

            {/* Widget 2: Payroll Budget Ratio Donut */}
            <div className="widget">
              <div className="flex items-baseline justify-between gap-2.5">
                <span className="w-label">Rasio anggaran payroll</span>
              </div>
              <div className="flex items-center gap-1.5 mt-1 text-[11.5px] text-muted font-mono">
                Oktober &middot; terpakai 84%
              </div>

              <PayrollDonut />

              <div className="flex flex-col gap-1 mt-1 font-mono text-[10.5px] text-muted">
                <span className="flex items-center gap-1.5">
                  <i className="w-1.5 h-1.5 rounded-sm bg-accent inline-block" />
                  Gaji pokok &middot; 62%
                </span>
                <span className="flex items-center gap-1.5">
                  <i className="w-1.5 h-1.5 rounded-sm bg-indigo inline-block" />
                  Lembur &middot; 14%
                </span>
                <span className="flex items-center gap-1.5">
                  <i className="w-1.5 h-1.5 rounded-sm bg-il-3 opacity-80 inline-block" />
                  Tunjangan &middot; 24%
                </span>
              </div>
            </div>

            {/* Widget 3: Productivity Gauge */}
            <div className="widget">
              <div className="flex items-baseline justify-between gap-2.5">
                <span className="w-label">Produktivitas tim</span>
                <span className="meta text-[10.5px]">7 hari</span>
              </div>

              <ProductivityGauge />

              <p className="meta text-[10.5px] text-center mt-1.5">
                Target kuartal &middot; 82
              </p>
            </div>
          </div>
        </div>

        {/* Demo Disclaimer */}
        <p className="meta text-right mt-3 text-[11px]">
          Seluruh angka pada halaman ini adalah data demo workspace OmniHR Pulse.
        </p>
      </div>
    </section>
  );
}
