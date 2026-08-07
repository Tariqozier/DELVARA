"use client";

import Link from "next/link";
import { useRef, useState, type MouseEvent } from "react";
import { IconArrowRight } from "@/components/icons";

type ClinicChoiceCardProps = {
  title: string;
  description: string;
  cta: string;
  href: string;
  accent: "dental" | "aesthetics";
};

export function ClinicChoiceCard({
  title,
  description,
  cta,
  href,
  accent,
}: ClinicChoiceCardProps) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [spot, setSpot] = useState({ x: 50, y: 50 });
  const isDental = accent === "dental";

  function handleMove(event: MouseEvent<HTMLAnchorElement>) {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setSpot({
      x: ((event.clientX - rect.left) / rect.width) * 100,
      y: ((event.clientY - rect.top) / rect.height) * 100,
    });
  }

  return (
    <Link
      ref={cardRef}
      href={href}
      onMouseMove={handleMove}
      className={`group relative flex min-h-[17rem] flex-col overflow-hidden rounded-2xl border p-7 transition-all duration-200 sm:p-8 ${
        isDental
          ? "border-dental/40 bg-white/[0.04] hover:border-dental/70"
          : "border-aesthetics/45 bg-white/[0.04] hover:border-aesthetics-peach/70"
      } hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgb(0_0_0/0.22)] focus-visible:outline-offset-4`}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        style={{
          background: isDental
            ? `radial-gradient(420px circle at ${spot.x}% ${spot.y}%, rgb(120 149 133 / 0.22), transparent 55%)`
            : `radial-gradient(420px circle at ${spot.x}% ${spot.y}%, rgb(217 169 148 / 0.2), transparent 55%)`,
        }}
      />
      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className={`h-2.5 w-2.5 rounded-full ${
              isDental ? "bg-dental" : "bg-aesthetics-peach"
            }`}
          />
          <h3 className="text-2xl font-medium text-white sm:text-[1.75rem]">
            {title}
          </h3>
        </div>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-white/70 sm:text-base">
          {description}
        </p>
        <span
          className={`mt-8 inline-flex w-fit items-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
            isDental
              ? "bg-dental-soft text-dental-deep group-hover:bg-white"
              : "bg-aesthetics-soft text-aesthetics-deep group-hover:bg-white"
          }`}
        >
          {cta}
          <IconArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
