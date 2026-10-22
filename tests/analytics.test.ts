import { describe, it, expect } from "vitest";
import {
  smooth,
  formatIdNumber,
  calcDonutLength,
  calcGaussian,
  calcGaugeRotation,
} from "@/lib/charts";
import {
  attendanceData,
  payrollDonutData,
  productivityGaugeData,
  examData,
} from "@/lib/data";

describe("Analytics Math & Chart Utilities", () => {
  it("smooth() should generate a valid SVG path with M and C commands", () => {
    const points: [number, number][] = [
      [10, 100],
      [50, 60],
      [100, 40],
      [150, 70],
    ];
    const path = smooth(points);
    expect(path).toMatch(/^M10\.0,100\.0 C/);
    expect(path).toContain("C");
  });

  it("smooth() handles empty points gracefully", () => {
    expect(smooth([])).toBe("");
  });

  it("formatIdNumber() formats decimal values with Indonesian comma separator", () => {
    expect(formatIdNumber(94.2)).toBe("94,2");
    expect(formatIdNumber(100.0, 1)).toBe("100,0");
  });

  it("calcDonutLength() calculates circumference and arc length correctly", () => {
    const radius = 46;
    const expectedCircumference = 2 * Math.PI * radius; // ~289.026
    const { len, circumference } = calcDonutLength(62, radius);

    expect(circumference).toBeCloseTo(expectedCircumference, 2);
    expect(len).toBeCloseTo((62 / 100) * expectedCircumference, 2);

    // Sum of all donut segments in payrollDonutData equals 100%
    const totalPercentage = payrollDonutData.reduce((acc, curr) => acc + curr.value, 0);
    expect(totalPercentage).toBe(100);
  });

  it("calcGaussian() peaks at mean = 74 and drops symmetrically", () => {
    const peak = calcGaussian(74, 74, 9);
    expect(peak).toBeCloseTo(1.0, 4);

    const left = calcGaussian(65, 74, 9);
    const right = calcGaussian(83, 74, 9);
    expect(left).toBeCloseTo(right, 4);
    expect(left).toBeLessThan(peak);
  });

  it("calcGaugeRotation() correctly converts scores (0-100) to degrees (-90 to +90)", () => {
    expect(calcGaugeRotation(0)).toBe(-90);
    expect(calcGaugeRotation(50)).toBe(0);
    expect(calcGaugeRotation(100)).toBe(90);
    expect(calcGaugeRotation(productivityGaugeData.score)).toBeCloseTo(
      (78 / 100) * 180 - 90,
      1
    );
  });

  it("attendance data contains valid averages within 80-100 range", () => {
    ["7", "30", "90"].forEach((rangeKey) => {
      const data = attendanceData[rangeKey as "7" | "30" | "90"];
      expect(data.values.length).toBeGreaterThan(0);
      const avg = data.values.reduce((a, b) => a + b, 0) / data.values.length;
      expect(avg).toBeGreaterThanOrEqual(88);
      expect(avg).toBeLessThanOrEqual(98);
    });
  });

  it("exam batch dataset contains valid participant count and mean", () => {
    expect(examData.batch).toBe(14);
    expect(examData.participants).toBe(240);
    expect(examData.mean).toBe(74);
  });
});
