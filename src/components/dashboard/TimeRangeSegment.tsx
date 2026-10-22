"use client";

import React from "react";

export interface TimeRangeSegmentProps {
  currentRange: "7" | "30" | "90";
  onChangeRange: (range: "7" | "30" | "90") => void;
}

export function TimeRangeSegment({
  currentRange,
  onChangeRange,
}: TimeRangeSegmentProps) {
  return (
    <div className="seg" role="group" aria-label="Rentang waktu grafik kehadiran">
      <button
        type="button"
        className="seg-btn"
        data-range="7"
        aria-pressed={currentRange === "7"}
        onClick={() => onChangeRange("7")}
      >
        7H
      </button>
      <button
        type="button"
        className="seg-btn"
        data-range="30"
        aria-pressed={currentRange === "30"}
        onClick={() => onChangeRange("30")}
      >
        30H
      </button>
      <button
        type="button"
        className="seg-btn"
        data-range="90"
        aria-pressed={currentRange === "90"}
        onClick={() => onChangeRange("90")}
      >
        90H
      </button>
    </div>
  );
}
