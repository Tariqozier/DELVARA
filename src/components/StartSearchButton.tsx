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
  /** Singular CTA convenience; normalised into treatments[]. */
  treatment?: string;
  treatments?: string[];
  location?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "className">;

export function StartSearchButton({
  children,
  variant = "primary",
  className = "",
  category,
  treatment,
  treatments,
  location,
  onClick,
  ...props
}: StartSearchButtonProps) {
  const { openSearch } = useSearch();

  return (
    <button
      type="button"
      onClick={(event) => {
        const hasTreatments =
          Boolean(treatment) || Boolean(treatments && treatments.length > 0);
        const trimmedLocation = location?.trim();
        const draft: EnquiryDraft | undefined =
          category || hasTreatments || trimmedLocation
            ? {
                ...(category ? { category } : {}),
                ...(treatments && treatments.length > 0
                  ? { treatments }
                  : {}),
                ...(treatment ? { treatment } : {}),
                ...(trimmedLocation ? { location: trimmedLocation } : {}),
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
