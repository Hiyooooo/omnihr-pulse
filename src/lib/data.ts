export interface AttendanceSeries {
  values: number[];
  labels: string[];
}

export const attendanceData: Record<"7" | "30" | "90", AttendanceSeries> = {
  "7": {
    values: [92.6, 93.4, 91.9, 94.8, 93.1, 95.2, 94.2],
    labels: ["15/10", "17/10", "19/10", "21/10"],
  },
  "30": {
    values: [
      90.4, 91.2, 90.8, 91.6, 92.1, 91.4, 92.3, 92.9, 92.2, 93.1, 92.6, 93.4,
      93.0, 93.8, 92.9, 93.5, 94.1, 93.4, 94.2, 93.6, 94.4, 93.9, 94.6, 94.0,
      94.8, 94.3, 95.0, 94.6, 94.4, 94.2,
    ],
    labels: ["22/09", "02/10", "11/10", "21/10"],
  },
  "90": {
    values: [
      89.8, 90.6, 91.4, 90.9, 92.0, 92.8, 92.1, 93.0, 93.6, 93.2, 93.9, 94.2,
    ],
    labels: ["Agu", "Sep", "Okt", "21/10"],
  },
};

export interface DonutSegment {
  label: string;
  value: number;
  colorVar: string;
}

export const payrollDonutData: DonutSegment[] = [
  { label: "Gaji pokok", value: 62, colorVar: "var(--accent)" },
  { label: "Lembur", value: 14, colorVar: "var(--indigo)" },
  { label: "Tunjangan", value: 24, colorVar: "var(--il-3)" },
];

export const productivityGaugeData = {
  score: 78,
  status: "Produktif",
  target: 82,
};

export const heatmapDays = ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"];
export const heatmapHours = [
  "08",
  "09",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
];

export interface HeatmapCell {
  day: string;
  hour: number;
  hourLabel: string;
  val: number;
  checkins: number;
}

export function generateHeatmapData(): HeatmapCell[] {
  const cells: HeatmapCell[] = [];
  heatmapDays.forEach((day, di) => {
    for (let h = 0; h < 12; h++) {
      const weekend = di > 4;
      let base = weekend ? 0.12 : 0.5;
      if (!weekend && (h < 2 || (h > 3 && h < 6) || h > 8)) base += 0.28;
      if (!weekend && h > 5 && h < 8) base -= 0.12;
      const v = Math.max(
        0.04,
        Math.min(0.98, base + Math.sin((di + 1) * (h + 2)) * 0.14)
      );
      const checkins = Math.round(v * 46);
      cells.push({
        day,
        hour: 8 + h,
        hourLabel: `${String(8 + h).padStart(2, "0")}.00`,
        val: v,
        checkins,
      });
    }
  });
  return cells;
}

export const payrollForecastData = {
  months: ["Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des", "Jan"],
  actualValues: [7.2, 7.4, 7.1, 7.8, 8.4],
  forecastValues: [8.4, 8.7, 8.9, 9.2],
  allValues: [7.2, 7.4, 7.1, 7.8, 8.4, 8.7, 8.9, 9.2],
  ceiling: 10.0,
};

export const overtimeDivisionData = [
  { division: "Sales", hours: 1284, hot: true },
  { division: "Operasional", hours: 962, hot: false },
  { division: "Customer Care", hours: 740, hot: false },
  { division: "Finance", hours: 418, hot: false },
  { division: "Tech", hours: 356, hot: false },
];

export const examData = {
  mean: 74,
  sd: 9,
  participants: 240,
  batch: 14,
  skillGaps: [
    { division: "Sales", gapPct: 22, hot: true },
    { division: "Customer Care", gapPct: 18, hot: false },
    { division: "Operasional", gapPct: 11, hot: false },
    { division: "Finance", gapPct: 7, hot: false },
  ],
};

export const leaveSeasonalityData = {
  months: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mei",
    "Jun",
    "Jul",
    "Agu",
    "Sep",
    "Okt",
    "Nov",
    "Des",
  ],
  percentages: [8, 7, 9, 11, 6, 14, 10, 7, 9, 11, 13, 18],
  miniStats: [
    { label: "pengajuan menunggu", value: "31" },
    { label: "hari rata-rata cuti", value: "4,2" },
    { label: "hari saldo terpakai", value: "12" },
  ],
};

export const librarySopData = {
  documents: [
    {
      name: "SOP Keamanan Data v4.2",
      pct: 96,
      count: "230 / 240",
      low: false,
    },
    {
      name: "Prosedur Refund & Retur",
      pct: 88,
      count: "211 / 240",
      low: false,
    },
    {
      name: "Panduan Layanan Pelanggan",
      pct: 82,
      count: "197 / 240",
      low: true,
    },
  ],
  miniStats: [
    { label: "sudah membaca", value: "89%" },
    { label: "belum konfirmasi", value: "26" },
    { label: "hari rata-rata baca", value: "2,1" },
  ],
};

export interface PricingTier {
  id: string;
  name: string;
  tagline: string;
  pricePerUserMonthly: number | null;
  minUsers: number;
  highlight?: boolean;
  badge?: string;
  features: string[];
  ctaLabel: string;
  whatsappMessage: string;
}

export const pricingTiers: PricingTier[] = [
  {
    id: "starter",
    name: "Pulse Starter",
    tagline: "Untuk bisnis berkembang yang butuh kepastian kehadiran dan slip gaji tepat waktu.",
    pricePerUserMonthly: 18000,
    minUsers: 20,
    features: [
      "Absensi GPS, selfie check-in, dan batas geofencing cabang",
      "Perhitungan payroll otomatis (gaji pokok, tunjangan, potongan)",
      "Distribusi slip gaji digital otomatis via WhatsApp dan email",
      "Persetujuan izin sakit dan cuti berjenjang standar",
      "Laporan ekspor kehadiran format Excel dan PDF",
    ],
    ctaLabel: "Mulai Paket Starter",
    whatsappMessage:
      "Halo Tim OmniHR Pulse, saya ingin berkonsultasi mengenai implementasi Paket Pulse Starter (Rp 18.000 / karyawan) untuk tim kami.",
  },
  {
    id: "pro",
    name: "Pulse Pro",
    tagline: "Paket analitik lengkap untuk tim sales lapangan, e-commerce, dan operasional cepat.",
    pricePerUserMonthly: 32000,
    minUsers: 50,
    highlight: true,
    badge: "Paling Diminati",
    features: [
      "Seluruh fitur di Paket Pulse Starter",
      "Hero Live Dashboard real-time (ketepatan waktu, budget ratio, productivity gauge)",
      "Heatmap kehadiran mingguan 7x12 jam dan analisis jam sibuk",
      "Proyeksi pengeluaran payroll 8 bulan dan breakdown lembur per divisi",
      "Ujian evaluasi online dengan kurva normal Gauss dan skill-gap per divisi",
      "Kalender musiman cuti 12 bulan dengan peringatan dini defisit staf operasional",
      "Notifikasi pengingat keterbacaan dokumen SOP via WhatsApp",
    ],
    ctaLabel: "Pilih Paket Pro",
    whatsappMessage:
      "Halo Tim OmniHR Pulse, saya tertarik dengan Paket Pulse Pro (Rp 32.000 / karyawan) dan ingin menjadwalkan live demo fitur analitiknya.",
  },
  {
    id: "enterprise",
    name: "Pulse Enterprise",
    tagline: "Dirancang khusus untuk armada skala besar, multi-entitas, dan kebutuhan kustomisasi.",
    pricePerUserMonthly: null,
    minUsers: 250,
    features: [
      "Seluruh fitur di Paket Pulse Pro tanpa batasan kuota",
      "Dukungan multi-perusahaan, multi-cabang, dan multi-entitas legal",
      "Integrasi mesin fingerprint biometrik dan API webhook sistem internal",
      "Audit log keamanan data komprehensif dan retensi data tak terbatas",
      "Dedicated Account Manager dan technical support prioritas 24/7",
      "Service Level Agreement (SLA) jaminan uptime 99.9%",
    ],
    ctaLabel: "Konsultasi Enterprise",
    whatsappMessage:
      "Halo Tim OmniHR Pulse, saya ingin menjadwalkan sesi konsultasi khusus Paket Pulse Enterprise untuk organisasi kami di atas 250 karyawan.",
  },
];

export interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export const faqData: FaqItem[] = [
  {
    id: "absensi-realtime",
    category: "Absensi & Perangkat",
    question: "Bagaimana cara OmniHR Pulse menarik data kehadiran secara real-time dari karyawan lapangan?",
    answer: "OmniHR Pulse memanfaatkan validasi lokasi berbasis GPS dengan batas geofencing presisi dan proteksi anti-fake GPS di aplikasi mobile karyawan. Untuk fasilitas fisik seperti pergudangan logistik atau kantor cabang, sistem juga mendukung integrasi API webhook dengan mesin fingerprint dan biometrik yang menyinkronkan data kehadiran setiap 30 detik tanpa perlu ekspor manual.",
  },
  {
    id: "forecasting-payroll",
    category: "Payroll & Anggaran",
    question: "Apakah proyeksi payroll 8 bulan sudah memperhitungkan tarif lembur Depnaker dan skema insentif sales?",
    answer: "Ya. Formula kalkulasi lembur OmniHR Pulse sepenuhnya mematuhi regulasi ketenagakerjaan Indonesia (PP 35/2021) untuk perhitungan hari kerja normal maupun hari libur resmi. Sistem juga mendukung parameter komisi dinamis untuk armada sales, lalu memproyeksikan total akumulasi beban pengeluaran terhadap batas pagu anggaran bulanan yang telah ditentukan direksi.",
  },
  {
    id: "defisit-staf-cuti",
    category: "Perizinan & Musim Cuti",
    question: "Bagaimana sistem memprediksi kekurangan staf di masa puncak operasional seperti akhir tahun?",
    answer: "Modul Perizinan menganalisis sebaran cuti historis 12 bulan dan menyandingkannya dengan kalender ritme operasional bisnis Anda (misalnya momen Harbolnas e-commerce atau musim libur panjang). Jika rasio pengajuan cuti berpotensi melanggar kuota minimum staf di suatu unit kerja, sistem otomatis memunculkan peringatan dini 30 hari sebelumnya agar kepala unit dapat mengatur rotasi jadwal.",
  },
  {
    id: "evaluasi-kompetensi-exam",
    category: "Evaluasi & Ujian",
    question: "Apakah modul Exam dapat digunakan untuk sertifikasi internal dengan bank soal mandiri?",
    answer: "Tentu. Anda dapat mengunggah bank soal pilihan ganda maupun esai, mengatur durasi pengerjaan, dan mengaktifkan proteksi ujian. Setelah ujian selesai, sistem otomatis memplot skor ke dalam kurva normal Gaussian untuk melihat validitas tingkat kesulitan ujian dan memetakan unit kerja mana yang memiliki kesenjangan kompetensi (skill-gap).",
  },
  {
    id: "migrasi-onboarding",
    category: "Implementasi & Integrasi",
    question: "Berapa lama waktu yang dibutuhkan untuk migrasi dari spreadsheet atau HRIS sebelumnya?",
    answer: "Sebagian besar klien kami mulai melihat live dashboard aktif dalam 1 hingga 2 hari kerja. Tim onboarding OmniHR Pulse menyediakan template migrasi data terstruktur (format CSV dan Excel) untuk data karyawan, struktur organisasi, dan saldo cuti berjalan, didampingi langsung oleh tim teknis kami hingga sesi uji coba tuntas.",
  },
  {
    id: "keamanan-data-pdp",
    category: "Keamanan Data",
    question: "Bagaimana keamanan data pribadi karyawan dan rekapitulasi gaji perusahaan kami dijamin?",
    answer: "Keamanan data adalah prioritas mutlak. Seluruh lalu lintas data dienkripsi dengan protokol TLS 1.3 saat transmisi dan AES-256 saat tersimpan (data at rest). Infrastruktur server berlokasi di data center Tier-3 Indonesia sesuai ketentuan UU Perlindungan Data Pribadi (UU PDP). Sistem juga menerapkan kontrol akses berbasis peran (RBAC) berjenjang dengan catatan log audit menyeluruh.",
  },
  {
    id: "support-tutup-buku",
    category: "Layanan & Dukungan",
    question: "Bagaimana skema dukungan teknis dan pendampingan jika terjadi kendala saat tutup buku gaji?",
    answer: "Seluruh pengguna OmniHR Pulse mendapatkan akses prioritas ke tim support via WhatsApp operasional dengan rata-rata waktu respons di bawah 15 menit pada jam kerja. Khusus periode tutup buku payroll perdana, tim kami menyediakan sesi pendampingan langsung melalui panggilan video untuk memastikan slip gaji dan perhitungan pajak terdistribusi dengan akurat.",
  },
];


