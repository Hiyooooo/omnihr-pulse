import React from "react";
import { Kicker } from "@/components/ui/Kicker";

export function StatementBand() {
  return (
    <section className="section py-16 md:py-28" data-od-id="statement">
      <div className="container-app">
        <Kicker>Prinsip produk</Kicker>
        <h2 className="text-[clamp(30px,4.1vw,54px)] leading-[1.08] tracking-[-0.025em] text-fg">
          Rekap bulanan menjelaskan masa lalu.
          <br />
          <span className="text-muted">Pulse menjelaskan minggu depan.</span>
        </h2>
        <p className="lead mt-6">
          Karena itu setiap modul dirancang untuk menjawab satu pertanyaan operasional: bukan menampilkan semua angka yang tersedia.
        </p>
      </div>
    </section>
  );
}
