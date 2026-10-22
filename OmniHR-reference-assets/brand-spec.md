# OmniHR Pulse — brand spec

**Satu kalimat sistem:** ruang kerja analitik gelap yang tenang, di mana angka hadir sebagai cahaya (indigo → ungu) di atas permukaan nila tua, dengan tipografi teknis dan satu aksen listrik untuk sinyal yang benar-benar penting.

## Token warna

| Token | Nilai | Pakai |
|---|---|---|
| `--bg` | `oklch(0.151 0.032 285)` · #0A0918 | latar halaman |
| `--surface` | `oklch(0.200 0.049 284.7)` · #14122B | kartu, panel |
| `--inset` | `oklch(0.175 0.040 285)` | bidang dalam kartu, track grafik |
| `--fg` | `oklch(0.958 0.015 298.6)` · #F2EFFA | teks utama |
| `--muted` | `oklch(0.694 0.055 290.9)` · #9C97BD | teks sekunder |
| `--border` | `oklch(0.296 0.074 285.3)` · #2A2650 | hairline |
| `--accent` | `oklch(0.606 0.219 292.7)` · #8B5CF6 | satu aksen — seri data utama, penanda |
| `--accent-strong` | `oklch(0.541 0.246 293)` · #7C3AED | isi tombol primer (putih 5.7:1) |
| `--indigo` | `oklch(0.457 0.215 277)` · #4338CA | seri sekunder, isi area |

Kontras terukur: `fg`/`bg` 17.4:1 · `muted`/`surface` 6.6:1 · putih/`accent-strong` 5.7:1.

## Font

- Display: `Bahnschrift`, `DIN Alternate`, `Segoe UI Variable Display` — grotesque teknis, tracking rapat (-0.02em).
- Body: `Segoe UI Variable Text`, `Segoe UI`, system-ui.
- Mono: `Cascadia Mono`, `Consolas` — semua angka, label, sumbu, kode modul.

## Aturan visual yang diamati

1. Tidak ada gradient latar. Warna hanya muncul sebagai data: garis, isian di bawah kurva, sel heatmap.
2. Permukaan bertumpuk tiga tingkat saja: `bg` → `surface` (kartu) → `inset` (bidang data). Tidak ada bayangan besar; pemisah adalah hairline 1px.
3. Kartu ilustrasi memakai fotografi asli (orang sungguhan, kantor sungguhan) — bukan vektor atau gambar generatif. Foto duduk di dalam frame `surface` dengan hairline 1px, sedikit diredam (`saturate .9`), dan diberi label angka mono di bawahnya; kartu data tetap memegang peran visual, foto memberi konteks manusia.
4. Angka selalu mono tabular; judul selalu display; label selalu mono huruf kecil dengan tracking lebar.
5. Satu aksen: ungu listrik dipakai untuk seri utama dan satu tombol per aksi. Selain itu indigo, lavender, dan netral.
