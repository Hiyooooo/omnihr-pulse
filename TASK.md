# Rencana Kerja & Daftar Tugas (Task Plan) — OmniHR Pulse

> File panduan eksekusi mandiri untuk pengembang AI. Berisi rincian tahapan kerja yang terstruktur dari inisialisasi lingkungan hingga pengujian akhir sebelum rilis.

---

## Ringkasan Proyek
- **Website:** 08 - OmniHR Pulse
- **Karakter Desain:** Data & Analytics Centric (Calm Dark-Mode Workspace)
- **Tech Stack:** Next.js (App Router), TypeScript, Tailwind CSS, `lucide-react`, `next/font/google`, `next/image`, `clsx`, `tailwind-merge`, Vitest.
- **Aset Sumber:** `OmniHR-reference-assets/` (`hero.jpg`, `absensi.jpg`, `gaji.jpg`, `exam.jpg`, `perizinan.jpg`, `library.jpg`, `brand-spec.md`, `omnihr-pulse.html`).

---

## Rincian Tahapan Tugas (Task Breakdown)

### Phase 1: Setup Lingkungan, Inisialisasi Project, & Aset
- [x] **Task 1.1:** Inisialisasi Next.js App Router dengan TypeScript, Tailwind CSS, ESLint, dan direktori `src/` (tanpa membuat template berlebih).
- [x] **Task 1.2:** Instalasi dependensi UI: `lucide-react`, `clsx`, `tailwind-merge`.
- [x] **Task 1.3:** Instalasi dependensi testing: `vitest`, `@testing-library/react`, `@testing-library/jest-dom`, `jsdom`.
- [x] **Task 1.4:** Konfigurasi `vitest.config.ts` dan setup file `tests/setup.ts`.
- [x] **Task 1.5:** Pipeline aset foto lokal:
  - Salin 6 foto asli dari `OmniHR-reference-assets/` ke `public/images/`:
    - `hero.jpg`
    - `absensi.jpg`
    - `gaji.jpg`
    - `exam.jpg`
    - `perizinan.jpg`
    - `library.jpg`
  - Buat `public/images/CREDITS.md` yang mendokumentasikan atribusi foto (Pexels license).
  - Buat `public/favicon.svg` dengan logo pulse indigo.

---

### Phase 2: Design System, Tokens, & Modul Inti Data
- [x] **Task 2.1:** Konfigurasi `src/app/globals.css`:
  - Token CSS Variables (OKLCH & Hex): `--bg`, `--surface`, `--inset`, `--fg`, `--muted`, `--border`, `--accent`, `--accent-strong`, `--indigo`, `--il-3`, `--ok`, `--warn`.
  - Utilitas layout, hairline borders, print rules, dan penanganan `@media (prefers-reduced-motion: reduce)`.
- [x] **Task 2.2:** Konfigurasi `tailwind.config.ts`:
  - Pemetaan warna token ke utility class Tailwind (`bg-bg`, `bg-surface`, `bg-inset`, `text-fg`, `border-border`, dll.).
  - Definisi radius kartu (`card: 18px`, `dash: 22px`).
- [x] **Task 2.3:** Konfigurasi Google Fonts & Metadata dasar di `src/app/layout.tsx`:
  - `Plus_Jakarta_Sans` sebagai `--font-display`
  - `Inter` sebagai `--font-body`
  - `JetBrains_Mono` sebagai `--font-mono`
- [x] **Task 2.4:** Pembuatan modul logika & dataset di `src/lib/`:
  - `src/lib/site.ts`: Identitas situs, konfigurasi navigasi, generator tautan WhatsApp terenkripsi URL.
  - `src/lib/data.ts`: Dataset numerik konsisten (deret waktu kehadiran 7H/30H/90H, matriks heatmap 7x12, data proyeksi payroll 8 bulan, parameter distribusi normal Gauss, data musiman cuti 12 bulan, dan daftar kepatuhan SOP).
  - `src/lib/charts.ts`: Generator matematika murni SVG (Catmull-Rom to Cubic Bezier curve, offset segmen donut chart, kalkulasi kurva normal Gaussian, sudut rotasi jarum gauge).
  - `src/lib/schema.ts`: Builder data terstruktur JSON-LD Schema `SoftwareApplication` & `Organization`.

---

### Phase 3: Komponen Antarmuka & Hero Live Dashboard
- [x] **Task 3.1:** Pembuatan komponen UI dasar (`src/components/ui/`):
  - `Button.tsx`: Varian primer (accent strong), sekunder (hairline border), ghost dengan panah halus.
  - `Tag.tsx`, `Kicker.tsx`: Label monospaced dengan garis aksen ungu.
  - `FloatChip.tsx`: Kartu chip melayang dengan animasi float lembut untuk area hero.
  - `Tooltip.tsx`: Tooltip melayang dinamis dengan positioning presisi kursor.
- [x] **Task 3.2:** Pembuatan widget Live Dashboard (`src/components/dashboard/`):
  - `TimeRangeSegment.tsx`: Kontrol tombol segmented (`7H`, `30H`, `90H`) dengan status `aria-pressed`.
  - `AttendanceChart.tsx`: Grafik garis SVG interaktif dengan filter rentang waktu, kurva halus Bezier, garis target 92%, vertical crosshair, dan tooltip persentase.
  - `PayrollDonut.tsx`: Donut chart SVG 3 segmen dengan interaktivitas hover segmen (gaji pokok, lembur, tunjangan) dan teks tengah dinamis.
  - `ProductivityGauge.tsx`: Semi-circle SVG gauge meter (skala 0-100) dengan jarum indikator terotasi halus dan detak mikro tiap 9 detik.
- [x] **Task 3.3:** Pembuatan kontainer `src/components/sections/LiveDashboard.tsx`:
  - Menggabungkan header dashboard, filter waktu, grid 3 widget, dan disclaimer data demo.

---

### Phase 4: Navigasi, Hero, & 5 Modul Analitik
- [x] **Task 4.1:** Pembuatan komponen layout:
  - `src/components/layout/Topnav.tsx`: Sticky navigation dengan backdrop blur, logo mark pulsa, link 5 modul, dan tombol CTA.
  - `src/components/layout/Footer.tsx`: 4 kolom navigasi terstruktur, informasi kontak Jakarta, dan hak cipta.
- [x] **Task 4.2:** Pembuatan `src/components/sections/HeroSection.tsx`:
  - Layout split 2 kolom: Kicker, Headline H1, Lead text, CTA actions, Live trust dot, dan visual frame `hero.jpg` ber-radius 18px dengan 2 floating chips.
- [x] **Task 4.3:** Pembuatan visualisasi 5 Modul HRIS (`src/components/modules/`):
  - `AttendanceVisual.tsx`: Mini line chart 30 hari + Heatmap kehadiran 7×12 jam dengan sel interaktif dan ramp scale.
  - `PayrollVisual.tsx`: Line chart proyeksi 8 bulan solid vs putus-putus terhadap pagu Rp 10 M + Bar chart horizontal beban lembur per divisi.
  - `ExamVisual.tsx`: Kurva normal Gauss nilai ujian (mean 74) dengan shaded passing zone + Bar chart kesenjangan kompetensi divisi.
  - `LeaveVisual.tsx`: Grafik kolom 12 bulan musim cuti tahunan dengan sorotan bulan Desember + Warning callout risiko operasional + 3 mini stats.
  - `LibraryVisual.tsx`: Progress bar interaktif keterbacaan 3 SOP baru + 3 mini stats kepatuhan.
- [x] **Task 4.4:** Pembuatan wrapper section (`src/components/sections/`):
  - `ModuleIntro.tsx`: Pengantar section 5 modul dengan tag navigasi.
  - `ModuleSection.tsx`: Template komponen modul modular dengan layout selang-seling (*alternating layout*).
  - `StatementBand.tsx`: Section penegas prinsip produk: *"Rekap menjelaskan masa lalu. Pulse menjelaskan minggu depan."*
  - `CtaSection.tsx`: Final conversion strip menuju konsultasi WhatsApp demo.

---

### Phase 5: Perakitan Halaman, SEO, OpenGraph, & Sitemap
- [x] **Task 5.1:** Perakitan seluruh section di `src/app/page.tsx` dengan integrasi JSON-LD Schema.
- [x] **Task 5.2:** Implementasi `src/app/opengraph-image.tsx` (1200×630 dinamis menggunakan `next/og`).
- [x] **Task 5.3:** Pembuatan generator `src/app/robots.ts` dan `src/app/sitemap.ts`.
- [x] **Task 5.4:** Verifikasi metadata OpenGraph dan Twitter Card di `src/app/layout.tsx`.

---

### Phase 6: Pengujian Otomatis (Vitest) & Verifikasi Quality Gates
- [x] **Task 6.1:** Pembuatan unit test analitik `tests/analytics.test.ts`:
  - Uji formula kurva Bezier `smooth()`
  - Uji kalkulasi offset segmen donut chart
  - Uji kurva distribusi normal Gaussian (titik puncak di $\mu = 74$)
  - Uji konversi sudut derajat jarum gauge
- [x] **Task 6.2:** Pembuatan unit test aksesibilitas & kepatuhan `tests/accessibility.test.ts`:
  - Uji ketiadaan karakter em dash (`—`) pada seluruh data string
  - Uji validitas seluruh anchor link (`#absensi`, `#gaji`, `#exam`, `#perizinan`, `#library`, `#demo`)
  - Uji format URL dan pesan WhatsApp
- [x] **Task 6.3:** Menjalankan `npm run test` (Vitest) dan memastikan lulus 100%.
- [x] **Task 6.4:** Menjalankan `npm run build` dan memastikan sukses tanpa peringatan TypeScript atau ESLint.
- [x] **Task 6.5:** Audit interaksi manual & responsive mobile (bebas overflow horizontal pada 375px, 768px, 1024px, 1440px).

---

### Phase 7: Section Harga & Kalkulator Biaya Karyawan (Pricing & Calculator)
- [x] **Task 7.1:** Tambahkan dataset paket harga dan kalkulator di `src/lib/data.ts` serta update `src/lib/site.ts` untuk navigasi `#harga`.
- [x] **Task 7.2:** Buat komponen `src/components/sections/PricingSection.tsx` dengan Interactive Employee Cost Calculator slider dan 3 kartu paket berjenjang.
- [x] **Task 7.3:** Integrasikan `PricingSection` ke dalam `src/app/page.tsx` dan tambahkan menu `Harga` pada `Topnav.tsx` dan `Footer.tsx`.
- [x] **Task 7.4:** Perbarui pengujian `tests/accessibility.test.ts` dan `tests/analytics.test.ts` untuk memvalidasi kalkulasi harga dan ketiadaan em dash.
- [x] **Task 7.5:** Jalankan `npm run test` dan `npm run build` untuk memastikan build produksi dan test suite 100% lulus.

---

## Kriteria Selesai (Sign-off)
Setelah semua task di atas tercentang, proyek Website 08: OmniHR Pulse siap diserahkan dan dipresentasikan.
