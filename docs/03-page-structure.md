# 03-PAGE-STRUCTURE.MD — Blueprint Struktur Halaman & Salinan Copywriting

> Dokumen hierarki section, alur membaca pengguna, dan seluruh teks copywriting resmi dalam Bahasa Indonesia untuk **Website 08: OmniHR Pulse**.

---

## 1. Peta Navigasi & Urutan Section

```text
[TOPNAV]              Logo Mark + Link 5 Modul + CTA Buka Dashboard
   ↓
[HERO SECTION]        Kicker + Headline Analitik + Trust Badge + Visual Foto + 2 Floating Chips
   ↓
[LIVE DASHBOARD]      Pulse Hari Ini: Filter Rentang Waktu (7H, 30H, 90H) + 3 Kartu Widget Interaktif
                      1. Ketepatan Waktu (Line Chart)
                      2. Rasio Anggaran Payroll (Donut Chart)
                      3. Produktivitas Tim (Gauge Meter)
   ↓
[MODULE INTRO]        Pernyataan Transisi & Tag Modul Terpadu
   ↓
[01 ABSENSI]          Tren 30 Hari + Heatmap Mingguan 7x12 Jam + Foto Absensi
   ↓
[02 GAJI]             Proyeksi Payroll 8 Bulan + Beban Lembur Per Divisi + Foto Gaji (Layout Dibalik)
   ↓
[03 EXAM]             Kurva Normal Distribusi Skor + Skill-Gap Analysis + Foto Exam
   ↓
[04 PERIZINAN]        Musim Cuti Tahunan 12 Bulan + Peringatan Defisit Staf + Foto Cuti (Layout Dibalik)
   ↓
[05 LIBRARY]          Tingkat Baca & Konfirmasi SOP Per Divisi + Mini Stats + Foto Library
   ↓
[STATEMENT BAND]      Prinsip Produk: "Rekap menjelaskan masa lalu. Pulse menjelaskan minggu depan."
   ↓
[FINAL CTA STRIP]     Ajakan Bertindak Langsung ke WhatsApp Demo + Link Eksplorasi
   ↓
[PAGE FOOTER]         Navigasi Modul, Link Produk, Info Kontak Jakarta, Disclaimer Data Demo
```

---

## 2. Rincian Konten Per Section (Copywriting & Komponen)

### 2.1 Header / Top Navigation (`.topnav`)
- **Logo Brand:**
  - Ikon grafik pulsa SVG di dalam kotak berlatar `--indigo` ber-radius 8px.
  - Teks: `OmniHR Pulse` (dengan kata *Pulse* bergaya italic/muted).
- **Tautan Navigasi (Desktop):**
  - `Absensi` (`#absensi`)
  - `Gaji` (`#gaji`)
  - `Exam` (`#exam`)
  - `Perizinan` (`#perizinan`)
  - `Library` (`#library`)
- **Aksi Tombol:**
  - Tombol Primer: `Buka dashboard` (`#demo` atau via WhatsApp demo).

---

### 2.2 Hero Section (`#top`)
- **Kicker:** `HRIS analitik · real-time`
- **Headline Utama (H1):** `Setiap keputusan SDM punya angkanya.`
- **Paragraf Pengantar (Lead):**
  > *"OmniHR Pulse menyatukan absensi, payroll, ujian, izin, dan SOP dalam satu layar analitik: supaya tim sales, finance, dan operasional memutuskan dengan data pagi ini, bukan rekap akhir bulan."*
- **Tombol Aksi (CTA):**
  - Tombol Primer (`.btn-primary`): `Buka dashboard live` (menuju `#demo`)
  - Tombol Sekunder (`.btn-ghost`): `Lihat 5 modul →` (scroll ke `#modul`)
- **Pita Bukti Nyata (Trust Indicator):**
  - Indikator Hijau Aktif (`.live-dot` berkedip halus)
  - Teks: `Sinkron tiap 30 detik · 1.248 karyawan di workspace demo`
- **Visual Samping:**
  - Foto editorial: `public/images/hero.jpg` (empat anggota tim produk & sales berdiskusi dengan laptop dan lembar analitik).
  - Floating Chip A (Kiri Atas): Indikator hijau + `Hadir 96,4% ▲`
  - Floating Chip B (Kanan Atas): `Payroll Rp 8,4 M / 10 M`

---

### 2.3 Live Dashboard Interaktif (`#demo`)
- **Header Panel:**
  - Judul: `Pulse hari ini`
  - Meta Info: `Rabu, 21 Oktober 2026 · 09.42 WIB · workspace demo`
  - Filter Waktu Segmented: Tombol `7H`, `30H` (default aktif), `90H`
  - Pill Badge: `● LIVE`
- **Tiga Widget Analitik:**
  1. **Widget 1: Ketepatan Waktu**
     - Angka Utama: `94,2%`
     - Sub-metrik: `▲ 1,2 pts vs periode lalu`
     - Visual: Grafik garis interaktif (Bezier curve dengan area gradien ungu, grid target 92%, dan hover crosshair dengan tooltip persentase).
     - Legenda: Garis ungu solid (*Tepat waktu*), Garis putus-putus (*Target 92%*).
  2. **Widget 2: Rasio Anggaran Payroll**
     - Angka Tengah: `Rp 8,4 M` / `dari 10 M` (terpakai 84%)
     - Visual: Donut chart SVG 3 segmen interaktif yang menampilkan detail tooltip saat di-hover:
       - Gaji pokok: `62%` (Ungu aksen)
       - Lembur: `14%` (Indigo)
       - Tunjangan: `24%` (Lavender `--il-3`)
  3. **Widget 3: Produktivitas Tim**
     - Nilai Gauge: `78` (Status: *Produktif*)
     - Visual: Semi-circle gauge meter SVG (skala 0–100) dengan jarum indikator dinamis.
     - Sub-teks: `Target kuartal · 82`
- **Catatan Kaki Panel:**
  > *"Seluruh angka pada halaman ini adalah data demo workspace OmniHR Pulse."*

---

### 2.4 Module Intro Section (`#modul`)
- **Kicker:** `Lima modul`
- **Headline (H2):** `Satu sumber kebenaran untuk lima pertanyaan SDM yang paling sering ditunda.`
- **Paragraf Lead:**
  > *"Setiap modul memakai data kehadiran yang sama, jadi angka absensi, lembur, dan biaya tidak pernah bercerita beda di rapat yang berbeda."*
- **Kumpulan Tag:** `Absensi`, `Gaji`, `Exam`, `Perizinan`, `Library`

---

### 2.5 Modul 01: Absensi (`#absensi`)
- **Indeks:** `01`
- **Headline:** `Ketepatan waktu, terbaca per jam dan per tim.`
- **Deskripsi Lead:**
  > *"Tren check-in 30 hari, jam sibuk per shift, dan heatmap kehadiran mingguan: supaya supervisor tahu di mana jadwal mulai bocor sebelum lembur menumpuk."*
- **Poin Utama:**
  - Pola terlambat per shift dan per lantai
  - Jam sibuk check-in & checkout
  - Heatmap 7×12 jam tanpa ekspor manual
- **Visualisasi Komposit:**
  - Kiri: Foto `public/images/absensi.jpg` (karyawan check-in pagi hari). Caption: `Check-in lapangan · shift pagi | 08.57`.
  - Kanan: Data Card berisi grafik mini garis tren 30 hari (`94,2% tepat waktu`) + Heatmap 7 hari (Sen–Min) × 12 jam (08.00–19.00) dengan sel interaktif dan bar skala kepadatan.

---

### 2.6 Modul 02: Gaji / Payroll (`#gaji`)
- **Indeks:** `02`
- **Headline:** `Payroll bulan depan sudah kelihatan hari ini.`
- **Deskripsi Lead:**
  > *"Proyeksi pengeluaran tiga bulan ke depan dari pola absensi dan lembur berjalan, plus beban lembur per divisi: dibandingkan langsung dengan pagu anggaran."*
- **Poin Utama:**
  - Prediksi payroll 3 bulan, bukan 1
  - Beban lembur per divisi
  - Selisih pagu vs realisasi per bulan
- **Visualisasi Komposit (Layout Dibalik):**
  - Kiri: Data Card berisi grafik proyeksi 8 bulan (Jun–Jan) membandingkan realisasi solid dan proyeksi putus-putus terhadap pagu Rp 10 M + Bar chart horizontal beban lembur divisi (Sales: 1.284 jam, Operasional: 962 jam, Customer Care: 740 jam, Finance: 418 jam, Tech: 356 jam).
  - Kanan: Foto `public/images/gaji.jpg` (staf keuangan meninjau payroll). Caption: `Payroll · tim finance | Oktober`.

---

### 2.7 Modul 03: Exam (`#exam`)
- **Indeks:** `03`
- **Headline:** `Skor ujian bukan angka mati: ini peta kompetensi.`
- **Deskripsi Lead:**
  > *"Distribusi kurva normal menunjukkan apakah ujian terlalu mudah atau terlalu sulit, lalu analitik skill-gap menunjuk divisi mana yang butuh pelatihan berikutnya."*
- **Poin Utama:**
  - Kurva distribusi skor per angkatan
  - Ambang lulus & sebaran nilai
  - Skill-gap per divisi, bukan per orang
- **Visualisasi Komposit:**
  - Kiri: Foto `public/images/exam.jpg` (sesi ujian pelatihan di kantor). Caption: `Sertifikasi internal · batch 14 | 86 / 100`.
  - Kanan: Data Card berisi Kurva Normal Gaussian (rata-rata $\mu = 74$, batas kelulusan area terang 60–85) + Bar kesenjangan kompetensi per divisi (Sales: 22%, Customer Care: 18%, Operasional: 11%, Finance: 7%).

---

### 2.8 Modul 04: Perizinan (`#perizinan`)
- **Indeks:** `04`
- **Headline:** `Musim cuti terlihat sebulan lebih awal.`
- **Deskripsi Lead:**
  > *"Analitik musim cuti memetakan kapan tim akan kosong, lalu membandingkannya dengan kalender puncak operasional: supaya kepala unit bisa menggeser jadwal sebelum kekurangan staf terjadi."*
- **Poin Utama:**
  - Pola cuti 12 bulan ke belakang
  - Proyeksi kekurangan staf per pekan
  - Peringatan tumpang tindih di bulan puncak
- **Visualisasi Komposit (Layout Dibalik):**
  - Kiri: Data Card berisi grafik kolom 12 bulan (Jan–Des) dengan sorotan ungu terang pada bulan puncak Desember (18% cuti) + Kotak peringatan (*callout alert*): *"Desember: 18% tim operasional cuti bersamaan dengan puncak pesanan. Proyeksi kekurangan 9 staf per pekan."* + Ringkasan metrik: `31` pengajuan menunggu, `4,2` hari rata-rata cuti, `12` hari saldo terpakai.
  - Kanan: Foto `public/images/perizinan.jpg` (karyawan bersantai di rumah saat cuti). Caption: `Kalender cuti · tim operasional | Desember`.

---

### 2.9 Modul 05: Library (`#library`)
- **Indeks:** `05`
- **Headline:** `Tahu siapa yang sudah membaca SOP: dan siapa yang belum.`
- **Deskripsi Lead:**
  > *"Setiap dokumen membawa statistik bacaan dan konfirmasi per divisi. Bukan lagi daftar hadir sosialisasi, tapi bukti bahwa SOP baru benar-benar sampai ke tim."*
- **Poin Utama:**
  - Status baca & konfirmasi per orang
  - Cakupan per divisi dan lokasi kerja
  - Pengingat otomatis ke yang belum
- **Visualisasi Komposit:**
  - Kiri: Foto `public/images/library.jpg` (tim meninjau dokumen SOP fisik & digital). Caption: `Library SOP · versi 4.2 | 89% dibaca`.
  - Kanan: Data Card berisi progress list keterbacaan dokumen:
    - *SOP Keamanan Data v4.2:* `96% · 230 / 240 staf`
    - *Prosedur Refund & Retur:* `88% · 211 / 240 staf`
    - *Panduan Layanan Pelanggan:* `82% · 197 / 240 staf`
    - Metrik bawah: `89%` sudah membaca, `26` belum konfirmasi, `2,1` hari rata-rata baca.

---

### 2.10 Statement Band Section (`.band`)
- **Kicker:** `Prinsip produk`
- **Pernyataan Inti (H2):**
  > `Rekap bulanan menjelaskan masa lalu.`<br/>
  > `Pulse menjelaskan minggu depan.`
- **Paragraf Penegas:**
  > *"Karena itu setiap modul dirancang untuk menjawab satu pertanyaan operasional: bukan menampilkan semua angka yang tersedia."*

---

### 2.11 Final Conversion CTA (`.cta`)
- **Headline (H2):** `Mulai dari satu dashboard, bukan satu tumpukan spreadsheet.`
- **Lead Text:**
  > *"Hubungkan data absensi dan payroll Anda, lihat pulse pertama di hari yang sama."*
- **Tombol Aksi:**
  - Primer: `Jadwalkan demo` (Membuka dialog WhatsApp sales)
  - Sekunder: `Baca modulnya dulu →` (Kembali ke `#modul`)

---

### 2.12 Footer Lengkap (`.pagefoot`)
- **Kolom 1 (Brand):** Logo `OmniHR Pulse` + Deskripsi: *"HRIS berbasis analitik untuk tim yang memutuskan dengan angka, bukan asumsi."*
- **Kolom 2 (Modul):** Link ke 5 section modul (`#absensi`, `#gaji`, `#exam`, `#perizinan`, `#library`).
- **Kolom 3 (Produk):** Link ke `#demo` (*Dashboard live*), `#modul` (*Ikhtisar modul*), `#top` (*Keamanan data*).
- **Kolom 4 (Kontak):** Email `hello@omnihr.id` + Keterangan: `Jakarta · 09.00–18.00 WIB`.
- **Baris Hak Cipta & Sumber:**
  - `© 2026 OmniHR Pulse`
  - `Data pada halaman ini adalah data demo, bukan data pelanggan. Foto: Pexels (lisensi Pexels).`
