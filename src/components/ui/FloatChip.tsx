import React from "react";
import { clsx } from "clsx";

export interface FloatChipProps {
  label: string;
  value: string;
  sub?: string;
  arrow?: "up" | "down";
  hasDot?: boolean;
  positionClass: "chip-a" | "chip-b";
  className?: string;
}

export function FloatChip({
  label,
  value,
  sub,
  arrow,
  hasDot = false,
  positionClass,
  className,
}: FloatChipProps) {
  return (
    <div
      className={clsx("float-chip", positionClass, className)}
      aria-hidden="true"
    >
      {hasDot && <span className="live-dot" />}
      <span className="fc-label">{label}</span>
      <strong>{value}</strong>
      {sub && <span className="meta text-[10px]">{sub}</span>}
      {arrow === "up" && <span className="chip-arrow text-ok">&Delta;</span>}
      {arrow === "down" && <span className="chip-arrow text-warn">&nabla;</span>}
    </div>
  );
}
