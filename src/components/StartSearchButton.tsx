"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import { useSearch } from "@/components/SearchProvider";
import type { EnquiryDraft } from "@/lib/enquiryContext";
import type { TreatmentCategory } from "@/lib/content";

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
  category?: TreatmentCategory;
  treatment?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "className">;

export function StartSearchButton({
  children,
  variant = "primary",
  className = "",
  category,
  treatment,
  onClick,
  ...props
}: StartSearchButtonProps) {
  const { openSearch } = useSearch();

  return (
    <button
      type="button"
      onClick={(event) => {
        const draft: EnquiryDraft | undefined =
          category || treatment
            ? {
                ...(category ? { category } : {}),
                ...(treatment ? { treatment } : {}),
              }
            : undefined;
        openSearch(draft);
        onClick?.(event);
      }}
      className={`${variantClass[variant]} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}
