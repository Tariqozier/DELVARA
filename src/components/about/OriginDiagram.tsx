"use client";

import { useEffect, useId, useState } from "react";
import "./OriginDiagram.css";

type OriginDiagramProps = {
  className?: string;
};

const COLORS = {
  ink: "#172D2E",
  ivory: "#F8F5F0",
  sage: "#89A993",
  mauve: "#D3A0B5",
  peach: "#F1C4AE",
  muted: "#68706E",
} as const;

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPrefersReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return prefersReducedMotion;
}

export function OriginDiagram({ className = "" }: OriginDiagramProps) {
  const titleId = useId();
  const prefersReducedMotion = usePrefersReducedMotion();
  const animate = !prefersReducedMotion;

  return (
    <figure
      className={[
        "mx-auto w-full max-w-3xl rounded-2xl border border-delvara-border bg-delvara-white p-6 sm:p-10",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      aria-labelledby={titleId}
    >
      <figcaption id={titleId} className="sr-only">
        How DELVARA connects dental experience, aesthetics experience, people,
        and clinics.
      </figcaption>

      <svg
        viewBox="0 0 720 420"
        role="img"
        aria-hidden="true"
        className="h-auto w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="origin-sage" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={COLORS.sage} stopOpacity="0.35" />
            <stop offset="100%" stopColor={COLORS.sage} stopOpacity="0.08" />
          </linearGradient>
          <linearGradient id="origin-mauve" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={COLORS.mauve} stopOpacity="0.32" />
            <stop offset="100%" stopColor={COLORS.mauve} stopOpacity="0.08" />
          </linearGradient>
          <linearGradient id="origin-peach" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor={COLORS.peach} stopOpacity="0.28" />
            <stop offset="100%" stopColor={COLORS.peach} stopOpacity="0.06" />
          </linearGradient>
          <marker
            id="origin-arrow-peach"
            markerWidth="8"
            markerHeight="8"
            refX="6"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L6,3 L0,6 Z" fill={COLORS.peach} />
          </marker>
          <marker
            id="origin-arrow-mauve"
            markerWidth="8"
            markerHeight="8"
            refX="6"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L6,3 L0,6 Z" fill={COLORS.mauve} />
          </marker>
          <marker
            id="origin-arrow-sage"
            markerWidth="8"
            markerHeight="8"
            refX="6"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L6,3 L0,6 Z" fill={COLORS.sage} />
          </marker>
        </defs>

        {/* Upper diagram: dental / DELVARA / aesthetics */}
        <rect
          x="24"
          y="28"
          width="672"
          height="148"
          rx="18"
          fill={COLORS.ivory}
          stroke={COLORS.ink}
          strokeOpacity="0.08"
        />

        <rect x="40" y="52" width="180" height="96" rx="12" fill="url(#origin-sage)" />
        <rect x="270" y="44" width="180" height="112" rx="14" fill={COLORS.ink} />
        <rect x="500" y="52" width="180" height="96" rx="12" fill="url(#origin-mauve)" />

        <text
          x="130"
          y="92"
          textAnchor="middle"
          fill={COLORS.ink}
          fontSize="11"
          letterSpacing="2.4"
          fontWeight="500"
        >
          DENTAL
        </text>
        <text
          x="130"
          y="112"
          textAnchor="middle"
          fill={COLORS.muted}
          fontSize="10"
          letterSpacing="2"
        >
          EXPERIENCE
        </text>

        <text
          x="360"
          y="104"
          textAnchor="middle"
          fill={COLORS.ivory}
          fontSize="14"
          letterSpacing="3.2"
          fontWeight="500"
        >
          DELVARA
        </text>

        <text
          x="590"
          y="92"
          textAnchor="middle"
          fill={COLORS.ink}
          fontSize="11"
          letterSpacing="2.4"
          fontWeight="500"
        >
          AESTHETICS
        </text>
        <text
          x="590"
          y="112"
          textAnchor="middle"
          fill={COLORS.muted}
          fontSize="10"
          letterSpacing="2"
        >
          EXPERIENCE
        </text>

        {/* Animated connectors — upper */}
        <path
          d="M 220 100 C 245 100, 255 100, 270 100"
          fill="none"
          stroke={COLORS.sage}
          strokeWidth="1.5"
          strokeLinecap="round"
          className={animate ? "origin-line origin-line--left" : undefined}
        />
        <path
          d="M 450 100 C 475 100, 485 100, 500 100"
          fill="none"
          stroke={COLORS.mauve}
          strokeWidth="1.5"
          strokeLinecap="round"
          className={animate ? "origin-line origin-line--right" : undefined}
        />

        {/* Bridge */}
        <path
          d="M 360 156 L 360 196"
          fill="none"
          stroke={COLORS.ink}
          strokeOpacity="0.18"
          strokeWidth="1.5"
          strokeDasharray="4 5"
          className={animate ? "origin-line origin-line--bridge" : undefined}
        />

        {/* Lower diagram: people ↔ DELVARA ↔ clinics */}
        <rect
          x="24"
          y="208"
          width="672"
          height="184"
          rx="18"
          fill={COLORS.ivory}
          stroke={COLORS.ink}
          strokeOpacity="0.08"
        />

        <circle cx="130" cy="300" r="44" fill="url(#origin-peach)" />
        <rect x="286" y="256" width="148" height="88" rx="14" fill={COLORS.ink} />
        <circle cx="590" cy="300" r="44" fill="url(#origin-sage)" />

        <text
          x="130"
          y="304"
          textAnchor="middle"
          fill={COLORS.ink}
          fontSize="11"
          letterSpacing="2.2"
          fontWeight="500"
        >
          PEOPLE
        </text>

        <text
          x="360"
          y="304"
          textAnchor="middle"
          fill={COLORS.ivory}
          fontSize="13"
          letterSpacing="3"
          fontWeight="500"
        >
          DELVARA
        </text>

        <text
          x="590"
          y="304"
          textAnchor="middle"
          fill={COLORS.ink}
          fontSize="11"
          letterSpacing="2.2"
          fontWeight="500"
        >
          CLINICS
        </text>

        {/* Bidirectional lower connectors */}
        <path
          d="M 174 300 L 286 300"
          fill="none"
          stroke={COLORS.peach}
          strokeWidth="1.5"
          strokeLinecap="round"
          markerEnd="url(#origin-arrow-peach)"
          className={animate ? "origin-line origin-line--flow-a" : undefined}
        />
        <path
          d="M 286 292 L 174 292"
          fill="none"
          stroke={COLORS.sage}
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeOpacity="0.75"
          markerEnd="url(#origin-arrow-sage)"
          className={animate ? "origin-line origin-line--flow-b" : undefined}
        />
        <path
          d="M 434 300 L 546 300"
          fill="none"
          stroke={COLORS.mauve}
          strokeWidth="1.5"
          strokeLinecap="round"
          markerEnd="url(#origin-arrow-mauve)"
          className={animate ? "origin-line origin-line--flow-c" : undefined}
        />
        <path
          d="M 546 292 L 434 292"
          fill="none"
          stroke={COLORS.sage}
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeOpacity="0.75"
          markerEnd="url(#origin-arrow-sage)"
          className={animate ? "origin-line origin-line--flow-d" : undefined}
        />

        {/* Decorative nodes */}
        <circle
          cx="220"
          cy="100"
          r="3"
          fill={COLORS.sage}
          className={animate ? "origin-node origin-node--a" : undefined}
        />
        <circle
          cx="500"
          cy="100"
          r="3"
          fill={COLORS.mauve}
          className={animate ? "origin-node origin-node--b" : undefined}
        />
        <circle
          cx="360"
          cy="196"
          r="3"
          fill={COLORS.ink}
          fillOpacity="0.35"
          className={animate ? "origin-node origin-node--c" : undefined}
        />
      </svg>

    </figure>
  );
}
