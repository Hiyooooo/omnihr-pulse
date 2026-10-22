export function smooth(pts: [number, number][]): string {
  if (!pts || !pts.length) return "";
  let d = `M${pts[0][0].toFixed(1)},${pts[0][1].toFixed(1)}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[i + 2] || p2;
    const c1x = p1[0] + (p2[0] - p0[0]) / 6;
    const c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6;
    const c2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += ` C${c1x.toFixed(1)},${c1y.toFixed(1)} ${c2x.toFixed(1)},${c2y.toFixed(1)} ${p2[0].toFixed(1)},${p2[1].toFixed(1)}`;
  }
  return d;
}

export function formatIdNumber(val: number, decimals: number = 1): string {
  return val.toFixed(decimals).replace(".", ",");
}

export function calcDonutLength(percentage: number, radius: number = 46): { len: number; circumference: number } {
  const circumference = 2 * Math.PI * radius;
  const len = (percentage / 100) * circumference;
  return { len, circumference };
}

export function calcGaussian(x: number, mean: number = 74, sd: number = 9): number {
  return Math.exp(-Math.pow(x - mean, 2) / (2 * sd * sd));
}

export function calcGaugeRotation(score: number): number {
  const clamped = Math.max(0, Math.min(100, score));
  return (clamped / 100) * 180 - 90;
}
