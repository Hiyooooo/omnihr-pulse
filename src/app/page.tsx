import React from "react";
import { Topnav } from "@/components/layout/Topnav";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { LiveDashboard } from "@/components/sections/LiveDashboard";
import { ModuleIntro } from "@/components/sections/ModuleIntro";
import { ModuleSection } from "@/components/sections/ModuleSection";
import { StatementBand } from "@/components/sections/StatementBand";
import { CtaSection } from "@/components/sections/CtaSection";
import { AttendanceVisual } from "@/components/modules/AttendanceVisual";
import { PayrollVisual } from "@/components/modules/PayrollVisual";
import { ExamVisual } from "@/components/modules/ExamVisual";
import { LeaveVisual } from "@/components/modules/LeaveVisual";
import { LibraryVisual } from "@/components/modules/LibraryVisual";
import { TooltipProvider } from "@/components/ui/Tooltip";
import { generateSchema } from "@/lib/schema";

export default function Home() {
  const schema = generateSchema();

  return (
    <TooltipProvider>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <Topnav />

      <main id="content">
        {/* Hero Section */}
        <HeroSection />

        {/* Live Dashboard Section */}
        <LiveDashboard />

        {/* Module Intro Section */}
        <ModuleIntro />

        {/* 01. Absensi */}
        <ModuleSection
          id="absensi"
          index="01"
          title="Ketepatan waktu, terbaca per jam dan per tim."
          lead="Tren check-in 30 hari, jam sibuk per shift, dan heatmap kehadiran mingguan: supaya supervisor tahu di mana jadwal mulai bocor sebelum lembur menumpuk."
          points={[
            "Pola terlambat per shift dan per lantai",
            "Jam sibuk check-in & checkout",
            "Heatmap 7×12 jam tanpa ekspor manual",
          ]}
          imageSrc="/images/absensi.jpg"
          imageAlt="Seorang karyawan membuka pintu kaca kantor sambil membawa tas laptop pada pagi hari"
          imageCaptionLeft="Check-in lapangan · shift pagi"
          imageCaptionRight="08.57"
          visualComponent={<AttendanceVisual />}
        />

        {/* 02. Gaji / Payroll */}
        <ModuleSection
          id="gaji"
          index="02"
          title="Payroll bulan depan sudah kelihatan hari ini."
          lead="Proyeksi pengeluaran tiga bulan ke depan dari pola absensi dan lembur berjalan, plus beban lembur per divisi: dibandingkan langsung dengan pagu anggaran."
          points={[
            "Prediksi payroll 3 bulan, bukan 1",
            "Beban lembur per divisi",
            "Selisih pagu vs realisasi per bulan",
          ]}
          imageSrc="/images/gaji.jpg"
          imageAlt="Dua staf keuangan di kantor memeriksa dokumen penggajian dan tablet kerja"
          imageCaptionLeft="Payroll · tim finance"
          imageCaptionRight="Oktober"
          visualComponent={<PayrollVisual />}
          isReverse
        />

        {/* 03. Exam */}
        <ModuleSection
          id="exam"
          index="03"
          title="Skor ujian bukan angka mati: ini peta kompetensi."
          lead="Distribusi kurva normal menunjukkan apakah ujian terlalu mudah atau terlalu sulit, lalu analitik skill-gap menunjuk divisi mana yang butuh pelatihan berikutnya."
          points={[
            "Kurva distribusi skor per angkatan",
            "Ambang lulus & sebaran nilai",
            "Skill-gap per divisi, bukan per orang",
          ]}
          imageSrc="/images/exam.jpg"
          imageAlt="Tiga karyawan mengikuti sesi pelatihan dan ujian dengan laptop di ruang kelas kantor"
          imageCaptionLeft="Sertifikasi internal · batch 14"
          imageCaptionRight="86 / 100"
          visualComponent={<ExamVisual />}
        />

        {/* 04. Perizinan */}
        <ModuleSection
          id="perizinan"
          index="04"
          title="Musim cuti terlihat sebulan lebih awal."
          lead="Analitik musim cuti memetakan kapan tim akan kosong, lalu membandingkannya dengan kalender puncak operasional: supaya kepala unit bisa menggeser jadwal sebelum kekurangan staf terjadi."
          points={[
            "Pola cuti 12 bulan ke belakang",
            "Proyeksi kekurangan staf per pekan",
            "Peringatan tumpang tindih di bulan puncak",
          ]}
          imageSrc="/images/perizinan.jpg"
          imageAlt="Seorang karyawan duduk di sofa rumah sambil memegang cangkir kopi, suasana cuti"
          imageCaptionLeft="Kalender cuti · tim operasional"
          imageCaptionRight="Desember"
          visualComponent={<LeaveVisual />}
          isReverse
        />

        {/* 05. Library */}
        <ModuleSection
          id="library"
          index="05"
          title="Tahu siapa yang sudah membaca SOP: dan siapa yang belum."
          lead="Setiap dokumen membawa statistik bacaan dan konfirmasi per divisi. Bukan lagi daftar hadir sosialisasi, tapi bukti bahwa SOP baru benar-benar sampai ke tim."
          points={[
            "Status baca & konfirmasi per orang",
            "Cakupan per divisi dan lokasi kerja",
            "Pengingat otomatis ke yang belum",
          ]}
          imageSrc="/images/library.jpg"
          imageAlt="Empat karyawan berdiri di kantor sambil meninjau map dokumen SOP bersama"
          imageCaptionLeft="Library SOP · versi 4.2"
          imageCaptionRight="89% dibaca"
          visualComponent={<LibraryVisual />}
        />

        {/* Statement Band */}
        <StatementBand />

        {/* Final Conversion CTA Strip */}
        <CtaSection />
      </main>

      <Footer />
    </TooltipProvider>
  );
}
