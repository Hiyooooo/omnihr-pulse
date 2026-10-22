# AGENTS.md — OmniHR Pulse (Website 08 dari 10)

> Dokumen instruksi utama untuk pengembangan Website 08: **OmniHR Pulse**. Baca dokumen ini dan seluruh spesifikasi di folder `docs/` sebelum menulis atau mengubah kode.

---

## 1. Misi & Karakter Website
Bangun **landing page promosi produk berorientasi konversi & data-driven showcase** untuk **OmniHR Pulse**, platform HRIS berbasis analitik dan metrik kinerja real-time yang dirancang khusus untuk:
- Bisnis berbasis data (*data-driven businesses*)
- Manajemen armada penjualan (*sales force management*)
- E-commerce & logistik dengan ritme operasional cepat
- Tim kepemimpinan *performance-driven* yang membutuhkan kepastian angka setiap pagi

**Gaya Visual:** **Data & Analytics Centric** — Ruang kerja analitik bernuansa gelap yang tenang (*calm dark-mode analytics workspace*). Data dan metrik hadir sebagai pendar cahaya (*indigo* `#4338CA` → *electric purple* `#8B5CF6`) di atas permukaan *deep midnight* (`#0A0918`), dengan tipografi teknis presisi, angka tabular monospaced, dan aksen listrik untuk sinyal prioritas. Foto editorial manusia asli berbingkai data memberikan konteks nyata tanpa jatuh ke dalam ilustrasi klise atau vektor generik.

---

## 2. Urutan Baca Wajib (Dokumentasi Teknis)
Sebelum memulai implementasi fitur, pelajari secara seksama dokumen-dokumen berikut di direktori `docs/`:

1. [`docs/00-global-rules.md`](file:///d:/Coding/Akarindo/10%20Website/08-omnihr/docs/00-global-rules.md) — Aturan wajib seri 10 website, batasan Next.js App Router, integrasi WhatsApp CTA, prinsip anti-slop, dan larangan mutlak.
2. [`docs/01-brief.md`](file:///d:/Coding/Akarindo/10%20Website/08-omnihr/docs/01-brief.md) — Konteks audiens, proposisi nilai, pesan inti, tone of voice, dan strategi konversi WhatsApp.
3. [`docs/02-design-system.md`](file:///d:/Coding/Akarindo/10%20Website/08-omnihr/docs/02-design-system.md) — Token warna (OKLCH + Hex), hierarki 3 permukaan (`bg` → `surface` → `inset`), tipografi Google Fonts, hairline borders, dan pemetaan ke Tailwind CSS.
4. [`docs/03-page-structure.md`](file:///d:/Coding/Akarindo/10%20Website/08-omnihr/docs/03-page-structure.md) — Blueprint susunan section, hierarki visual halaman, dan salinan teks (copywriting) lengkap dalam Bahasa Indonesia.
5. [`docs/04-analytics-modules.md`](file:///d:/Coding/Akarindo/10%20Website/08-omnihr/docs/04-analytics-modules.md) — Spesifikasi teknis interaktivitas Hero Live Dashboard (Tren Kehadiran, Donut Anggaran, Gauge Produktivitas) dan visualisasi analitik pada 5 Modul Wajib.
6. [`docs/05-seo-og-quality.md`](file:///d:/Coding/Akarindo/10%20Website/08-omnihr/docs/05-seo-og-quality.md) — Metadata Next.js, OpenGraph, JSON-LD Schema, standar aksesibilitas WCAG AA, pengujian Vitest, dan Definition of Done.

---

## 3. Tech Stack Wajib
- **Framework:** Next.js (App Router, Server Components sebagai fondasi default)
- **Language:** TypeScript (`strict: true`)
- **Styling:** Tailwind CSS (dikustomisasi dengan token CSS Variables warna & font)
- **Icons:** `lucide-react` (stroke 1.5–1.6, hanya ikon yang relevan secara fungsional)
- **Typography:** `next/font/google` (Plus Jakarta Sans untuk Heading/Display, Inter untuk Body, JetBrains Mono untuk Tabular Data/Kicker/Label)
- **Utilities:** `clsx`, `tailwind-merge`
- **Testing:** Vitest + React Testing Library (untuk uji logika analitik, kalkulasi SVG, dan aksesibilitas)
- **Aset & Gambar:** Foto asli lokal berkualitas tinggi yang dipetakan dari `OmniHR-reference-assets` ke `public/images/` menggunakan `next/image`

---

## 4. Struktur Proyek
```text
08-omnihr/
├── AGENTS.md                      # File panduan utama ini
├── docs/                          # Dokumen spesifikasi lengkap
│   ├── 00-global-rules.md
│   ├── 01-brief.md
│   ├── 02-design-system.md
│   ├── 03-page-structure.md
│   ├── 04-analytics-modules.md
│   └── 05-seo-og-quality.md
├── OmniHR-reference-assets/       # Referensi HTML & foto asli
│   ├── absensi.jpg
│   ├── brand-spec.md
│   ├── exam.jpg
│   ├── gaji.jpg
│   ├── hero.jpg
│   ├── library.jpg
│   ├── omnihr-pulse.html
│   └── perizinan.jpg
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
├── tailwind.config.ts
├── vitest.config.ts
├── public/
│   ├── favicon.svg
│   └── images/                    # Aset foto lokal dari OmniHR-reference-assets
│       ├── hero.jpg
│       ├── absensi.jpg
│       ├── gaji.jpg
│       ├── exam.jpg
│       ├── perizinan.jpg
│       ├── library.jpg
│       └── CREDITS.md
├── src/
│   ├── app/
│   │   ├── layout.tsx             # Root layout, Google Fonts, theme CSS vars
│   │   ├── page.tsx               # Main landing page assembling sections
│   │   ├── globals.css            # OKLCH tokens, utilities, print & motion rules
│   │   ├── sitemap.ts             # XML sitemap generator
│   │   ├── robots.ts              # Robots.txt generator
│   │   └── opengraph-image.tsx    # Dynamic OpenGraph image (1200x630)
│   ├── components/
│   │   ├── layout/                # Topnav, Footer
│   │   ├── sections/              # HeroSection, LiveDashboard, ModuleIntro, ModuleSection, StatementBand, CtaSection
│   │   ├── dashboard/             # AttendanceChart, PayrollDonut, ProductivityGauge, TimeRangeSegment
│   │   ├── modules/               # AttendanceVisual, PayrollVisual, ExamVisual, LeaveVisual, LibraryVisual
│   │   └── ui/                    # Button, Tag, Kicker, Tooltip, FloatChip, StatCard
│   └── lib/
│       ├── site.ts                # Metadata, kontak WhatsApp, navigasi
│       ├── data.ts                # Dataset time-series, heatmap, proyeksi gaji, kurva normal, dokumen SOP
│       ├── charts.ts              # Generator kurva bezier SVG, kalkulasi arc donut, normal distribution math
│       └── schema.ts              # JSON-LD Schema builder (SoftwareApplication)
└── tests/
    ├── analytics.test.ts          # Uji kalkulasi matematika grafik & rentang waktu
    └── accessibility.test.ts      # Uji kontras warna & kelengkapan label aksesibilitas
```

---

## 5. Ringkasan 5 Modul Wajib HRIS (Spesifik OmniHR Pulse)
Setiap modul wajib hadir dengan visualisasi data spesifik, interaksi halus, dan foto editorial manusia asli:

1. **Absensi (`#absensi`):**
   - *Fokus Analitik:* Grafik tren ketepatan waktu 30 hari + Heatmap kehadiran 7×12 jam (Sen–Min, 08.00–19.00) dengan indikator jam sibuk check-in/checkout.
   - *Foto Pendukung:* `absensi.jpg` (karyawan check-in pagi hari di pintu kantor).
2. **Gaji / Payroll (`#gaji`):**
   - *Fokus Analitik:* Proyeksi pengeluaran payroll 8 bulan (realisasi solid vs proyeksi putus-putus terhadap pagu Rp 10 M) + Distribusi beban lembur per divisi (Sales, Operasional, Customer Care, Finance, Tech).
   - *Foto Pendukung:* `gaji.jpg` (staf keuangan meninjau slip payroll digital & anggaran).
3. **Exam / Evaluasi Kinerja (`#exam`):**
   - *Fokus Analitik:* Distribusi kurva normal (*Gaussian bell curve*) nilai ujian batch 14 dengan garis mean ($\mu = 74$) dan rentang kelulusan + Analitik kesenjangan kompetensi (*skill-gap analysis*) per divisi.
   - *Foto Pendukung:* `exam.jpg` (karyawan mengikuti sesi assessment online di ruang pelatihan).
4. **Perizinan & Cuti (`#perizinan`):**
   - *Fokus Analitik:* Grafik kolom musiman cuti karyawan 12 bulan (deteksi lonjakan puncak 18% di bulan Desember) + Peringatan risiko kekurangan staf (*staff shortage alert*) + Metrik saldo cuti terpakai.
   - *Foto Pendukung:* `perizinan.jpg` (karyawan menikmati cuti dengan santai di rumah).
5. **Library & Arsip Dokumen (`#library`):**
   - *Fokus Analitik:* Analitik kepatuhan SOP real-time (tingkat baca & konfirmasi per divisi untuk dokumen SOP Keamanan Data, Kebijakan Retur, Layanan Pelanggan) + Penghitung staf yang belum konfirmasi.
   - *Foto Pendukung:* `library.jpg` (tim meninjau pembaruan SOP operasional bersama).

---

## 6. Aturan Mutlak (Anti-Slop & Quality Gates)
1. **No Generic AI Slop:** Dilarang menggunakan gradien ungu-pink murahan, badge "AI-Powered", glassmorphism bertumpuk tebal, atau floating cards tanpa makna. Latar belakang harus gelap pekat (`#0A0918`) dengan permukaan bertingkat presisi.
2. **No Dead Controls:** Setiap tombol, rentang waktu tab (7H, 30H, 90H), segmen donut, dan sel heatmap harus responsif terhadap hover, klik, atau tooltip dengan data nyata.
3. **No Stock Photo Clichés:** Gunakan hanya 6 foto asli berkualitas tinggi dari folder referensi (`hero.jpg`, `absensi.jpg`, `gaji.jpg`, `exam.jpg`, `perizinan.jpg`, `library.jpg`) yang diredam sedikit (*saturate 0.9*) dengan hairline border 1px dan label data tabular.
4. **No Fabricated Claims:** Angka-angka pada grafik bersumber dari dataset demo yang konsisten dan masuk akal di `lib/data.ts`. Tampilkan *disclaimer* jujur di footer: *"Data pada halaman ini adalah data demo workspace OmniHR Pulse."*
5. **WhatsApp Conversion CTA:** Tombol konversi utama langsung mengarahkan ke WhatsApp sales dengan pesan yang sudah terformat rapi sesuai panduan di `docs/01-brief.md`.

---

## 7. Definition of Done
Proyek dinyatakan selesai jika dan hanya jika:
- [x] `npm run build` berhasil tanpa peringatan TypeScript atau linting.
- [x] Seluruh data visualisasi (grafik garis, donut chart, gauge meter, heatmap, kurva normal, bar horizontal) beroperasi secara interaktif dengan tooltip yang akurat.
- [x] 6 foto referensi terpasang sempurna dengan `next/image` dan rasio aspek yang proporsional.
- [x] Lolos uji performa dan aksesibilitas (kontras WCAG AA, navigasi keyboard, mode *reduced motion*).
- [x] Seluruh suite pengujian `vitest` lulus 100%.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
