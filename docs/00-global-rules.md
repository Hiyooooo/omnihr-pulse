# 00-GLOBAL-RULES.MD — Aturan Mutlak Seri 10 Website HRIS

> Dokumen ini adalah aturan dasar dan pembatas arsitektural yang berlaku untuk seluruh proyek website landing page HRIS dalam ekosistem Akarindo. Kepatuhan terhadap aturan ini bersifat absolut.

---

## 1. Hakikat dan Peran Proyek
1. **Landing Page Berorientasi Konversi:** Website ini adalah etalase pemasaran digital (*marketing landing page*) yang bertujuan meyakinkan pengunjung (decision-maker perusahaan) agar mengklik CTA dan terhubung langsung dengan tim sales via WhatsApp.
2. **Bukan Aplikasi Internal:** Jangan membangun sistem absensi nyata, aplikasi backend payroll, form login pegawai, atau dashboard CRUD database internal. Komponen UI interaktif (Live Dashboard, grafik, heatmap, slider) berfungsi sebagai **alat peraga (*interactive product showcase*)** untuk memikat calon pelanggan.
3. **Murni Frontend:** Next.js berfungsi sebagai penyaji antarmuka statis/ISR berkecepatan tinggi.

---

## 2. Arsitektur Teknis & Larangan Keras
1. **Dilarang Membuat API Routes:** Tidak boleh ada folder atau file `src/app/api/*`, route handlers publik, atau server actions yang mengekspos endpoint internal.
2. **Kerahasiaan Kunci Akses:** Apabila terhubung dengan Headless CMS Laravel, `X-Site-Secret` dan kredensial API hanya boleh dipanggil di Server Component melalui modul terisolasi `import 'server-only'`. Tidak boleh ada prefix `NEXT_PUBLIC_` untuk secret key.
3. **Dilarang Memanggil Backend dari Client Component:** Komponen berstatus `"use client"` hanya mengelola interaksi antarmuka pengguna (state chart, hover tooltip, tab filter rentang waktu, toggle accordions). Data di-pass melalui props dari Server Component atau didefinisikan secara deterministik di `lib/data.ts`.
4. **Resiliensi Build:** Perintah `npm run build` harus dapat berjalan mulus tanpa bergantung pada ketersediaan koneksi internet atau server pihak ketiga saat proses build berlangsung.

---

## 3. Kewajiban 5 Modul HRIS
Setiap landing page dalam seri 10 website **wajib** menampilkan 5 modul HRIS standar dengan sudut pandang unik yang disesuaikan dengan persona website masing-masing:

| Modul | Standar Kemampuan HRIS | Sudut Pandang Khusus OmniHR Pulse |
|---|---|---|
| **01. Absensi** | Clock-in GPS, batas geofencing, multi-shift kerja, rekap kehadiran harian. | **Analitik Waktu Nyata:** Tren ketepatan waktu 30 hari, deteksi jam sibuk check-in/checkout, dan heatmap kehadiran mingguan 7×12 jam. |
| **02. Gaji (Payroll)** | Perhitungan otomatis PPh 21, BPJS Ketenagakerjaan & Kesehatan, slip gaji digital. | **Forecasting Biaya:** Proyeksi pengeluaran 8 bulan (realisasi vs estimasi vs pagu Rp 10 M) dan breakdown beban lembur per unit kerja. |
| **03. Exam** | Assessment kompetensi online, evaluasi kinerja karyawan, proctoring digital. | **Distribusi & Skill-Gap:** Kurva normal Gaussian nilai ujian per angkatan, ambang batas kelulusan, dan peta kesenjangan kompetensi divisi. |
| **04. Perizinan** | Alur persetujuan cuti berjenjang, izin sakit, delegasi tugas, rekap lembur. | **Prediksi Musim Cuti:** Matriks kalender 12 bulan untuk mendeteksi potensi kekurangan staf (*staff shortage*) pada puncak operasional. |
| **05. Library** | SOP perusahaan digital, repositori kebijakan HR, arsip materi pelatihan. | **Tracking Kepatuhan Dokumen:** Pelacakan persentase baca dan konfirmasi persetujuan SOP baru per divisi secara terukur. |

Konten kelima modul ini **dibuat permanen (*hardcoded*)** di dalam komponen frontend dengan copywriting persuasif dan data dummy yang realistis.

---

## 4. Anti-Slop Code & Design Standards
Untuk menjamin hasil rancangan terasa dibuat oleh desainer profesional kelas dunia dan bukan produk template kecerdasan buatan (*AI slop*), patuhi aturan berikut:

### 4.1 Copywriting & Tipografi
- **Larangan Tanda Pisah Em Dash:** Dilarang menggunakan karakter em dash (`—`) pada seluruh teks antarmuka atau copywriting. Gunakan titik dua (`:`), tanda koma (`,`), titik (`.`), atau tanda kurung (`()`) sebagai pengganti.
- **Larangan AI Buzzwords:** Hindari istilah klise kosong seperti *"AI-Powered"*, *"Revolutionary"*, *"Seamless"*, *"Cutting-Edge"*, *"Ultimate"*, *"Next-Gen"*. Gunakan bahasa yang spesifik, padat fakta, dan berorientasi manfaat nyata bagi operasional HR.
- **Bahasa Indonesia Profesional:** Gunakan Bahasa Indonesia yang natural, lugas, dan meyakinkan. Istilah teknis internasional (*payroll, dashboard, geofencing, shift, breakdown*) diizinkan sesuai kebiasaan industri digital di Indonesia.
- **Angka Tabular Monospaced:** Seluruh nilai numerik, persentase, tanggal, jam, dan nilai mata uang wajib memakai font monospaced dengan fitur `tabular-nums` agar presisi dan sejajar.

### 4.2 Visual & Komposisi
- **Larangan Template Klise:** Dilarang menerapkan tren tumpuk tanpa fungsi: dilarang mencampur *glassmorphism* tebal, gradien pelangi, bento-grid sembarangan, orbs cahaya mengambang, atau blueprint grid yang tidak relevan.
- **Warna Hadir Sebagai Sinyal Data:** Latar belakang halaman adalah gelap pekat (*dark workspace* `#0A0918`). Warna ungu (*electric purple* `#8B5CF6`) dan indigo (`#4338CA`) hadir murni sebagai representasi data (garis grafik, isian kurva, intensitas heatmap, batang progress) serta satu tombol konversi utama.
- **Foto Editorial Nyata (Bukan Vektor/3D Karakter):** Visual menggunakan foto dokumentasi manusia asli di lingkungan kantor sungguhan dari folder referensi (`OmniHR-reference-assets`). Dilarang memakai ilustrasi flat vector Storyset/Undraw atau avatar 3D kartun.
- **Pemisah Garis Halus (*Hairline Borders*):** Hierarki kartu dibentuk oleh tiga tingkatan permukaan (`--bg` → `--surface` → `--inset`) dengan garis pembatas 1px yang lembut (`--border`), bukan bayangan tebal yang mengambang berlebihan.

### 4.3 Kontrol & Interaktivitas
- **Larangan Dead Links:** Dilarang menggunakan tautan kosong `href="#"`. Setiap tautan harus mengarah ke ID section yang ada (`#absensi`, `#gaji`, `#demo`, dll.) atau URL eksternal yang valid (WhatsApp link).
- **Semua Tombol Berfungsi:** Kontrol interaktif seperti tab rentang waktu (7H, 30H, 90H), hover arc pada donut chart, dan sel heatmap wajib memicu perubahan visual atau tooltip yang nyata.
- **Aksesibilitas Teruji (WCAG AA):** Rasio kontras teks utama (`--fg`) terhadap latar belakang wajib minimal 4.5:1 (teruji 17.4:1). Setiap tombol dan kontrol harus dapat dioperasikan penuh melalui keyboard (`Tab`, `Enter`, `Space`) dengan indikator fokus yang kontras.
- **Dukungan Reduced Motion:** Hormati pengaturan preferensi pengguna `prefers-reduced-motion: reduce` dengan mematikan animasi berulang (*infinite floating*) dan transisi berat.

---

## 5. Saluran Konversi: WhatsApp Direct CTA
Tujuan akhir dari landing page ini adalah memicu interaksi langsung dengan tim penjualan.
- Format URL WhatsApp wajib mengikuti standar:
  `https://wa.me/<nomor_telepon>?text=<pesan_terenkripsi_uri>`
- Format pesan menyertakan identitas website dan modul yang diminati calon pelanggan, misalnya:
  > *"Halo Tim OmniHR Pulse, saya ingin menjadwalkan live demo untuk workspace tim kami dan mempelajari analitik kehadiran serta efisiensi payroll."*
