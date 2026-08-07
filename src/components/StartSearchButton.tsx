"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import { useSearch } from "@/components/SearchProvider";

type Variant = "primary" | "secondary" | "on-dark" | "ghost-on-dark";

const variantClass: Record<Variant, string> = {
  primary: "btn btn-primary",
  secondary: "btn btn-secondary",
  "on-dark": "btn btn-on-dark",
  "ghost-on-dark": "btn btn-ghost-on-dark",
};

type StartSearchButtonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "className">;

export function StartSearchButton({
  children,
  variant = "primary",
  className = "",
  onClick,
  ...props
}: StartSearchButtonProps) {
  const { openSearch } = useSearch();

  return (
    <button
      type="button"
      onClick={(event) => {
        openSearch();
        onClick?.(event);
      }}
      className={`${variantClass[variant]} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}
