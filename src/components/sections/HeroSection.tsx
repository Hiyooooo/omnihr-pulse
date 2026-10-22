import React from "react";
import Image from "next/image";
import { Kicker } from "@/components/ui/Kicker";
import { Button } from "@/components/ui/Button";
import { FloatChip } from "@/components/ui/FloatChip";

export function HeroSection() {
  return (
    <section className="section py-11 md:py-20" id="top" data-od-id="hero">
      <div className="container-app">
        <div className="grid grid-cols-1 md:grid-cols-[1.02fr_0.98fr] gap-8 md:gap-16 items-center">
          {/* Left Column: Copy & Actions */}
          <div>
            <Kicker>HRIS analitik &middot; real-time</Kicker>
            <h1 className="mb-5 text-fg">
              Setiap keputusan SDM punya angkanya.
            </h1>
            <p className="lead mb-7">
              OmniHR Pulse menyatukan absensi, payroll, ujian, izin, dan SOP dalam satu layar analitik: supaya tim sales, finance, dan operasional memutuskan dengan data pagi ini, bukan rekap akhir bulan.
            </p>
            <div className="flex items-center gap-2.5 flex-wrap">
              <Button variant="primary" href="#demo">
                Buka dashboard live
              </Button>
              <Button variant="ghost" href="#modul" hasArrow>
                Lihat 5 modul
              </Button>
            </div>
            <div className="flex items-center gap-2 mt-5.5 font-mono text-[11.5px] text-muted tracking-wide">
              <span className="live-dot" aria-hidden="true" />
              <span>Sinkron tiap 30 detik &middot; 1.248 karyawan di workspace demo</span>
            </div>
          </div>

          {/* Right Column: Hero Visual with Real Editorial Photo & Chips */}
          <div className="relative">
            <div className="illu-card">
              <Image
                src="/images/hero.jpg"
                alt="Empat anggota tim penjualan dan produk berdiskusi di meja kerja sambil membuka laptop, tablet, dan dokumen analitik"
                width={1600}
                height={1067}
                priority
                className="w-full h-auto rounded-[11px] object-cover"
              />
            </div>

            {/* Floating Chip A */}
            <FloatChip
              positionClass="chip-a"
              hasDot
              label="Hadir"
              value="96,4%"
              arrow="up"
            />

            {/* Floating Chip B */}
            <FloatChip
              positionClass="chip-b"
              label="Payroll"
              value="Rp 8,4 M"
              sub="/ 10 M"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
