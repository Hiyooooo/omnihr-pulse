import React from "react";
import { clsx } from "clsx";

export interface KickerProps {
  children: React.ReactNode;
  className?: string;
}

export function Kicker({ children, className }: KickerProps) {
  return <p className={clsx("kicker", className)}>{children}</p>;
}
