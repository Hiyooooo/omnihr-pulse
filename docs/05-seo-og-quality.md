# 05-SEO-OG-QUALITY.MD — Metadata, Schema, Aksesibilitas, & Rencana Pengujian

> Dokumen spesifikasi optimasi mesin pencari (SEO), kartu media sosial (OpenGraph/Twitter), Schema JSON-LD, aksesibilitas WCAG AA, dan rencana pengujian Vitest untuk **Website 08: OmniHR Pulse**.

---

## 1. Metadata Next.js & OpenGraph

Konfigurasi metadata didefinisikan secara deklaratif di `src/app/layout.tsx` atau `src/app/page.tsx` menggunakan `Metadata` object bawaan Next.js:

```typescript
// src/app/layout.tsx (atau page.tsx)
import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#0A0918",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://pulse.omnihr.id"),
  title: "OmniHR Pulse - HRIS Berbasis Analitik & Metrik Kinerja Real-Time",
  description:
    "Ambil keputusan SDM berbasis data akurat. Pantau analitik absensi, efisiensi payroll, dan evaluasi staf dalam satu layar.",
  keywords: [
    "HRIS analitik",
    "software absensi real-time",
    "prediksi payroll perusahaan",
    "evaluasi kinerja kurva normal",
    "kalender musim cuti",
    "kepatuhan SOP digital",
    "workforce analytics Indonesia",
    "sales force HRIS",
  ],
  authors: [{ name: "Akarindo OmniHR Team" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://pulse.omnihr.id",
    title: "OmniHR Pulse - HRIS Berbasis Analitik & Metrik Kinerja Real-Time",
    description:
      "Ambil keputusan SDM berbasis data akurat. Pantau analitik absensi, efisiensi payroll, dan evaluasi staf dalam satu layar.",
    siteName: "OmniHR Pulse",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "OmniHR Pulse Live Analytics Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OmniHR Pulse - HRIS Berbasis Analitik & Metrik Kinerja Real-Time",
    description:
      "Ambil keputusan SDM berbasis data akurat. Pantau analitik absensi, efisiensi payroll, dan evaluasi staf dalam satu layar.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
```

---

## 2. Dynamic OpenGraph Image (`src/app/opengraph-image.tsx`)
Menggunakan fitur `next/og` (`ImageResponse`) berukuran 1200×630 piksel untuk menghasilkan kartu pratinjau media sosial dengan gaya analitik:
- Latar belakang: `#0A0918` dengan border hairline `#2A2650`.
- Elemen: Brand mark grafik pulsa indigo + Judul besar "OmniHR Pulse" + Subtitle "HRIS Berbasis Analitik & Metrik Kinerja Real-Time" + Mini mockup 3 widget angka (94,2% Kehadiran, Rp 8,4 M Payroll, 78 Produktivitas).

---

## 3. Structured Data (Schema.org JSON-LD)
Diletakkan pada komponen `src/app/page.tsx` menggunakan script tag terstruktur:

```tsx
// src/lib/schema.ts
export function generateSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "OmniHR Pulse",
        "url": "https://pulse.omnihr.id",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "All (Web SaaS Cloud Application)",
        "description": "Platform HRIS enterprise berbasis analitik real-time yang menyatukan absensi, proyeksi payroll, kurva evaluasi ujian, kalender cuti musiman, dan kepatuhan SOP digital.",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "IDR",
          "description": "Sesi live demo dan konsultasi workspace analitik tanpa biaya."
        },
        "featureList": [
          "Heatmap Kehadiran 7x12 Jam Real-Time",
          "Forecasting Anggaran Payroll 8 Bulan",
          "Distribusi Kurva Normal Ujian & Skill-Gap Analysis",
          "Peringatan Defisit Staf Musim Cuti Tahunan",
          "Pelacakan Keterbacaan dan Konfirmasi SOP Digital"
        ]
      },
      {
        "@type": "Organization",
        "name": "OmniHR Pulse by Akarindo",
        "url": "https://pulse.omnihr.id",
        "logo": "https://pulse.omnihr.id/favicon.svg",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+62-812-3456-7890",
          "contactType": "sales",
          "areaServed": "ID",
          "availableLanguage": ["Indonesian", "English"]
        }
      }
    ]
  };
}
```

---

## 4. Standar Kualitas Aksesibilitas (WCAG 2.1 AA)

1. **Rasio Kontras Warna Teruji:**
   - Seluruh teks memiliki rasio di atas 4.5:1 terhadap latarnya.
   - Sinyal status (hijau `--ok` dan kuning `--warn`) selalu didukung teks penjelas, bukan hanya warna semata (*color alone is not the only signifier*).
2. **Navigasi Keyboard Penuh:**
   - Semua tombol, tautan navigasi, segmen filter waktu (7H, 30H, 90H), dan kartu dapat difokuskan menggunakan tombol `Tab`.
   - Indikator fokus tampak jelas dengan outline: `outline: 2px solid var(--il-3); outline-offset: 3px;`.
3. **Semantik & Atribut ARIA:**
   - Tombol rentang waktu dilengkapi `role="group"` dan `aria-pressed="true|false"`.
   - Grafik SVG dilengkapi `aria-label` deskriptif (misal: *"Grafik tren ketepatan waktu kehadiran 30 hari"*).
   - Tooltip dinamis menggunakan `role="tooltip"`.
   - Ikon murni dekoratif ditandai `aria-hidden="true"`.
4. **Target Sentuh Mobile (Tap Targets):**
   - Seluruh tombol utama dan filter rentang waktu memiliki tinggi sentuh minimal 44 piksel pada layar ponsel.
5. **Dukungan Prefers-Reduced-Motion:**
   - Menghormati pengaturan sistem pengguna dengan menonaktifkan detak jarum periodik dan animasi floating bila `prefers-reduced-motion` aktif.

---

## 5. Rencana Pengujian Otomatis (Vitest)

Pengujian unit dan integrasi disiapkan di folder `tests/` dengan Vitest:

### 5.1 `tests/analytics.test.ts`
Menguji fungsi matematis murni yang mengatur visualisasi data:
1. **Fungsi Spline Bezier (`smooth`):** Memastikan titik koordinat menghasilkan path SVG berawalan `M` dan diikuti perintah kurva `C` yang valid.
2. **Kalkulasi Offset Busur Donut:** Memverifikasi bahwa total panjang keliling busur $C \approx 289.026$ dan akumulasi offset segmen tidak menghasilkan NaN.
3. **Fungsi Kurva Normal Gaussian:** Memverifikasi bahwa nilai puncak kurva ($f(s) = 1.0$) tercapai tepat pada titik rata-rata $\mu = 74$.
4. **Kalkulasi Rotasi Sudut Jarum Gauge:** Memverifikasi bahwa nilai skor 0 menghasilkan $-90^\circ$, nilai 50 menghasilkan $0^\circ$, dan nilai 100 menghasilkan $+90^\circ$.

### 5.2 `tests/accessibility.test.ts`
Menguji kepatuhan aturan antislop dan integrasi DOM:
1. **Verifikasi Ketiadaan Em Dash:** Memindai seluruh data string di `lib/site.ts` dan `lib/data.ts` untuk memastikan tidak ada karakter `—` yang lolos.
2. **Verifikasi Validitas Tautan Halaman:** Memastikan seluruh item navigasi mengarah ke anchor section yang didefinisikan (`#absensi`, `#gaji`, `#exam`, `#perizinan`, `#library`, `#demo`).
3. **Format Tautan WhatsApp:** Memverifikasi struktur tautan WhatsApp mengandung skema protokol `https://wa.me/` dan parameter pesan terenkripsi URL yang valid.

---

## 6. Definition of Done (Checklist Final Rilis)

Setiap tahapan pengembangan dinyatakan tuntas jika seluruh daftar periksa di bawah terpenuhi:

- [ ] **Kepatuhan Brand & Gaya Visual:**
  - [ ] Latar belakang konsisten menggunakan `--bg` (`#0A0918`).
  - [ ] Palet warna menggunakan Deep Indigo (`#4338CA`) dan Electric Purple (`#8B5CF6`).
  - [ ] Tiga tingkat permukaan arsitektural (`--bg` → `--surface` → `--inset`) diterapkan dengan hairline border 1px.
  - [ ] 6 foto referensi lokal (`hero.jpg`, `absensi.jpg`, `gaji.jpg`, `exam.jpg`, `perizinan.jpg`, `library.jpg`) terpasang dengan rapi menggunakan `next/image`.
- [ ] **Interaktivitas Live Dashboard:**
  - [ ] Tab filter 7H, 30H, 90H dapat diklik dan memperbarui grafik garis secara mulus.
  - [ ] Donut chart merespons hover segmen dengan pembaruan teks angka di tengah donat.
  - [ ] Jarum gauge produktivitas bergerak anggun ke angka 78 dan memiliki detak mikro hidup.
- [ ] **Kelengkapan 5 Modul HRIS:**
  - [ ] 01 Absensi: Tren 30 hari + Heatmap 7×12 jam dengan sel interaktif dan tooltip.
  - [ ] 02 Gaji: Proyeksi 8 bulan solid/putus-putus vs pagu 10 M + bar lembur per divisi.
  - [ ] 03 Exam: Kurva normal Gaussian ($\mu=74$) + bar skill-gap divisi.
  - [ ] 04 Perizinan: Grafik kolom musim cuti 12 bulan + callout risiko Desember + mini stats.
  - [ ] 05 Library: Progress keterbacaan 3 dokumen SOP + mini stats kepatuhan.
- [ ] **Konversi & Aksesibilitas:**
  - [ ] Tombol CTA utama terhubung ke WhatsApp resmi dengan template pesan terisi.
  - [ ] Tidak ada tautan mati (`href="#"`).
  - [ ] Bebas em dash (`—`) di seluruh teks antarmuka.
  - [ ] Lolos navigasi keyboard dan kontras warna WCAG AA.
- [ ] **Kualitas Kode & Testing:**
  - [ ] `npm run build` sukses 100% tanpa error atau linting warning.
  - [ ] Seluruh suite pengujian `vitest run` lulus tanpa kegagalan.
