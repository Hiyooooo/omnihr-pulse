import React from "react";
import { Button } from "@/components/ui/Button";
import { getWhatsAppUrl } from "@/lib/site";

interface CtaSectionProps {
  whatsappUrl?: string;
}

export function CtaSection({ whatsappUrl }: CtaSectionProps) {
  const finalWaUrl =
    whatsappUrl ||
    getWhatsAppUrl(
      "Halo Tim OmniHR Pulse, kami ingin menjadwalkan presentasi produk dan sesi live demo privat untuk jajaran manajemen kami minggu ini."
    );

  return (
    <section className="section py-16 md:py-24" data-od-id="cta-strip">
      <div className="container-app">
        <div className="grid grid-cols-1 md:grid-cols-[1.15fr_auto] gap-6 md:gap-14 items-center">
          <div>
            <h2 className="max-w-[24ch] text-fg">
              Mulai dari satu dashboard, bukan satu tumpukan spreadsheet.
            </h2>
            <p className="lead mt-3.5">
              Hubungkan data absensi dan payroll Anda, lihat pulse pertama di hari yang sama.
            </p>
          </div>
          <div className="flex gap-2.5 flex-wrap">
            <Button
              variant="primary"
              href={finalWaUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Jadwalkan demo
            </Button>
            <Button variant="ghost" href="#modul" hasArrow>
              Baca modulnya dulu
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
