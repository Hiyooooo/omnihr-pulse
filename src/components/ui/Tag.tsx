import React from "react";
import { clsx } from "clsx";

export interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export function Tag({ children, className }: TagProps) {
  return <span className={clsx("tag", className)}>{children}</span>;
}
