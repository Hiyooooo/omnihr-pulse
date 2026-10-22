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
