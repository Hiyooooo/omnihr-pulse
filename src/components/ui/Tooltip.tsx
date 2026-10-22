"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

interface TooltipState {
  visible: boolean;
  x: number;
  y: number;
  content: React.ReactNode;
}

interface TooltipContextType {
  showTooltip: (x: number, y: number, content: React.ReactNode) => void;
  hideTooltip: () => void;
}

const TooltipContext = createContext<TooltipContextType | null>(null);

export function TooltipProvider({ children }: { children: React.ReactNode }) {
  const [tooltip, setTooltip] = useState<TooltipState>({
    visible: false,
    x: 0,
    y: 0,
    content: null,
  });

  const showTooltip = useCallback((x: number, y: number, content: React.ReactNode) => {
    const clampedX = Math.min(
      typeof window !== "undefined" ? window.innerWidth - 12 : x,
      Math.max(12, x)
    );
    setTooltip({
      visible: true,
      x: clampedX,
      y,
      content,
    });
  }, []);

  const hideTooltip = useCallback(() => {
    setTooltip((prev) => ({ ...prev, visible: false }));
  }, []);

  return (
    <TooltipContext.Provider value={{ showTooltip, hideTooltip }}>
      {children}
      <div
        role="tooltip"
        className={`tooltip-box ${tooltip.visible ? "on" : ""}`}
        style={{
          left: `${tooltip.x}px`,
          top: `${tooltip.y}px`,
        }}
      >
        {tooltip.content}
      </div>
    </TooltipContext.Provider>
  );
}

export function useTooltip() {
  const ctx = useContext(TooltipContext);
  if (!ctx) {
    return {
      showTooltip: () => {},
      hideTooltip: () => {},
    };
  }
  return ctx;
}
