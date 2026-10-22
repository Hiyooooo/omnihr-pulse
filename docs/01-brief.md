# 01-BRIEF.MD — Konteks Produk, Audiens, & Strategi Konversi

> Dokumen spesifikasi kebutuhan bisnis, profil target pembeli, narasi produk, dan strategi konversi untuk **Website 08: OmniHR Pulse**.

---

## 1. Identitas & Posisioning Produk
- **Nama Produk:** OmniHR Pulse
- **Sub-Brand / Varian:** Pulse (Seri Analitik & Real-Time Performance)
- **Kategori:** HRIS Enterprise Analytics & Workforce Optimization
- **Tagline Utama:** *"Setiap keputusan SDM punya angkanya."*
- **Karakter Brand:** Analitik presisi, tenang, berwibawa, berorientasi fakta numerik, dan bebas asumsi spekulatif.
- **Satu Kalimat Esensi:** Ruang kerja analitik SDM yang menyatukan absensi harian, prediksi payroll, ujian kompetensi, kalender cuti, dan kepatuhan SOP dalam satu layar terpadu, memungkinkan para pengambil keputusan bergerak dengan data pagi ini.

---

## 2. Profil Target Audiens
OmniHR Pulse secara spesifik ditujukan kepada segmen bisnis dengan intensitas tenaga kerja tinggi dan budaya kerja berbasis performa:

### 2.1 Segmen Industri Utama
1. **Perusahaan E-Commerce & Logistik Terpadu:**
   - Menghadapi fluktuasi shift pergudangan dan kurir pengiriman.
   - Sangat sensitif terhadap keterlambatan pagi hari dan pembengkakan jam lembur saat *campaign date* (harbolnas, payday, musim liburan).
2. **Sales Force Management & Layanan Lapangan:**
   - Mengelola ratusan perwakilan sales lapangan di berbagai cabang.
   - Membutuhkan kepastian check-in di area geofencing dan analisis produktivitas waktu nyata.
3. **Bisnis Berbasis Data & Perusahaan Teknologi Bertumbuh Cepat:**
   - Memiliki kultur data-driven di mana C-level menuntut visualisasi metrik human capital layaknya memantau grafik analitik penjualan atau server.
4. **Manajemen Retail & Jaringan Gerai (Multi-Outlet):**
   - Mengoperasikan jam kerja bergeser (*shifting*) dengan pergantian personel yang cepat.

### 2.2 Persona Pengambil Keputusan (Buyer Personas)
- **Chief Financial Officer (CFO) / Finance Director:** Ingin kepastian pagu anggaran payroll dan mendeteksi lonjakan biaya lembur sebelum tagihan akhir bulan membengkak.
- **Chief Operating Officer (COO) / Head of Operations:** Membutuhkan jaminan kecukupan staf di lantai kerja setiap shift dan mencegah defisit staf saat musim cuti puncak.
- **VP / Head of People & Human Capital:** Membutuhkan instrumen evaluasi kompetensi objektif berbasis kurva normal serta bukti terukur sosialisasi SOP.

---

## 3. Titik Nyeri Utama (Pain Points) vs Solusi OmniHR Pulse

| Titik Nyeri Pelanggan | Realita di Lapangan | Solusi yang Dihadirkan OmniHR Pulse |
|---|---|---|
| **Rekap HR Selalu Terlambat** | Laporan kehadiran dan lembur baru direkap tanggal 25 atau akhir bulan. Masalah kedisiplinan dan biaya membengkak selama berminggu-minggu tanpa disadari. | **Data Nyata Pagi Ini:** Kehadiran dan ketepatan waktu disinkronkan tiap 30 detik. Dashboard menampilkan status operasional pagi hari ini jam 09.42 WIB. |
| **Angka Tidak Konsisten Antar-Divisi** | Tim sales, tim operasional, dan HR membawa angka rekap mandiri yang berbeda saat rapat direksi. | **Satu Sumber Kebenaran (*Single Source of Truth*):** Seluruh metrik absensi, lembur, dan slip payroll ditarik dari dataset log kehadiran yang sama. |
| **Kejutan Biaya Lembur** | Anggaran payroll tiba-tiba jebol karena lembur tak terkontrol di unit kerja tertentu tanpa pemberitahuan dini. | **Prediksi Pengeluaran 8 Bulan:** Proyeksi tren pengeluaran payroll berdasarkan tren lembur berjalan dibanding pagu anggaran perusahaan. |
| **Kekurangan Staf di Masa Sibuk** | Saat musim libur akhir tahun atau hari raya, staf operasional mengambil cuti serentak dan melumpuhkan pengiriman pesanan. | **Analitik Musim Cuti Tahunan:** Visualisasi sebaran cuti 12 bulan dan sistem peringatan tumpang tindih cuti 30 hari sebelum masa sibuk tiba. |
| **Ketidakpastian Distribusi SOP** | Dokumen kepatuhan baru dikirim via email atau chat grup, namun tidak ada bukti apakah staf benar-benar membacanya. | **Audit Konfirmasi SOP Per Divisi:** Bar keterbacaan interaktif yang memperlihatkan persentase staf yang sudah membaca dan mengonfirmasi pemahaman SOP. |

---

## 4. Nada Komunikasi & Copywriting (Tone of Voice)
1. **Objektif & Analitis:** Hindari gaya bahasa emosional yang berlebihan. Gunakan terminologi operasional seperti *rasio pagu*, *distribusi kurva normal*, *heatmaps ketepatan waktu*, *fluktuasi musiman*.
2. **Ringkas & Padat Makna:** Setiap kalimat harus menyajikan konteks operasional yang berguna. Tidak ada filler atau kalimat umum tanpa tujuan.
3. **Menghilangkan Keraguan (Fokus Konversi):** Tekankan kemudahan integrasi dan ketersediaan workspace demo interaktif sehingga calon pelanggan tidak merasa berisiko.
4. **Pernyataan Filosofis Kunci:**
   > *"Rekap bulanan menjelaskan masa lalu. Pulse menjelaskan minggu depan."*

---

## 5. Strategi Konversi & Pesan WhatsApp
Setiap tombol aksi di halaman web didesain untuk membawa prospek ke WhatsApp resmi tim sales OmniHR Pulse dengan pesan konteks yang telah disiapkan secara spesifik:

### 5.1 Nomor Kontak & Routing
- Nomor WhatsApp Resmi: `+6281234567890` (didefinisikan di `lib/site.ts`)
- Formulasi URL: `https://wa.me/6281234567890?text=[Pesan URL Encoded]`

### 5.2 Template Pesan Berdasarkan Konteks Tombol
1. **Header CTA & Hero Primary ("Buka dashboard live / Jadwalkan demo"):**
   > *"Halo Tim OmniHR Pulse, saya melihat demo live dashboard di website. Saya ingin berkonsultasi mengenai implementasi sistem analitik SDM real-time untuk perusahaan kami."*
2. **Hero Secondary ("Lihat 5 modul"):**
   > Membawa pengguna scroll halus ke section `#modul` untuk mempelajari fitur secara terstruktur.
3. **Modul Absensi & Heatmap ("Konsultasi Pola Kehadiran"):**
   > *"Halo Tim OmniHR Pulse, saya tertarik dengan fitur Heatmap Kehadiran Mingguan dan pelacakan tren keterlambatan shift untuk tim lapangan kami."*
4. **Modul Payroll & Proyeksi Biaya ("Hitung Efisiensi Payroll"):**
   > *"Halo Tim OmniHR Pulse, saya ingin mengetahui lebih lanjut tentang fitur proyeksi anggaran payroll dan mitigasi pembengkakan lembur divisi."*
5. **Modul Exam & Peta Kompetensi ("Demo Ujian Online"):**
   > *"Halo Tim OmniHR Pulse, bagaimana cara kerja analisis kurva normal nilai ujian dan pemetaan skill-gap divisi di OmniHR Pulse?"*
6. **Modul Perizinan & Musim Cuti ("Solusi Jadwal Operasional"):**
   > *"Halo Tim OmniHR Pulse, kami ingin mencoba analitik musim cuti karyawan untuk mencegah kekurangan staf di masa puncak operasional bisnis kami."*
7. **Modul Library & Kepatuhan SOP ("Audit Dokumen Digital"):**
   > *"Halo Tim OmniHR Pulse, saya ingin melihat bagaimana sistem pelacakan konfirmasi SOP digital bekerja untuk memastikan kepatuhan tim."*
8. **Final CTA Bottom Strip ("Jadwalkan demo"):**
   > *"Halo Tim OmniHR Pulse, kami ingin menjadwalkan presentasi produk dan sesi live demo privat untuk jajaran manajemen kami minggu ini."*
