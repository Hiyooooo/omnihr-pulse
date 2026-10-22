import React from "react";
import { clsx } from "clsx";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "sm";
  href?: string;
  target?: string;
  rel?: string;
  hasArrow?: boolean;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "default",
      href,
      target,
      rel,
      hasArrow = false,
      children,
      ...props
    },
    ref
  ) => {
    const baseClasses = clsx(
      "btn",
      variant === "primary" && "btn-primary",
      variant === "secondary" && "btn-secondary",
      variant === "ghost" && "btn-ghost",
      size === "sm" && "btn-sm",
      className
    );

    const content = (
      <>
        {children}
        {hasArrow && (
          <span className="inline-block transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
            &rarr;
          </span>
        )}
      </>
    );

    if (href) {
      return (
        <a href={href} target={target} rel={rel} className={clsx(baseClasses, "group")}>
          {content}
        </a>
      );
    }

    return (
      <button ref={ref} className={clsx(baseClasses, "group")} {...props}>
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
