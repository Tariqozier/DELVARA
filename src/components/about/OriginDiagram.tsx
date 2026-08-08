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
        "origin-diagram mx-auto w-full max-w-none rounded-2xl border border-delvara-border bg-delvara-white p-5 sm:p-8 lg:p-10 xl:p-12",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      aria-labelledby={titleId}
    >
      <figcaption id={titleId} className="sr-only">
        DELVARA was formed from dental and aesthetics experience, and sits
        between people exploring private treatment and participating clinics.
      </figcaption>

      <svg
        viewBox="0 0 960 780"
        role="img"
        aria-hidden="true"
        className="origin-diagram__svg h-auto w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="origin-sage" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={COLORS.sage} stopOpacity="0.42" />
            <stop offset="100%" stopColor={COLORS.sage} stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="origin-mauve" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={COLORS.mauve} stopOpacity="0.4" />
            <stop offset="100%" stopColor={COLORS.peach} stopOpacity="0.12" />
          </linearGradient>
          <linearGradient id="origin-flow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={COLORS.ink} stopOpacity="0.55" />
            <stop offset="100%" stopColor={COLORS.ink} stopOpacity="0.85" />
          </linearGradient>
          <filter id="origin-soft" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow
              dx="0"
              dy="6"
              stdDeviation="10"
              floodColor={COLORS.ink}
              floodOpacity="0.08"
            />
          </filter>
        </defs>

        {/* ── Origin confluence ── */}
        <text
          x="480"
          y="36"
          textAnchor="middle"
          fill={COLORS.muted}
          fontSize="12"
          letterSpacing="3.2"
          fontWeight="500"
        >
          WHERE IT BEGAN
        </text>

        {/* Dental node */}
        <g className={animate ? "origin-fade origin-fade--1" : undefined}>
          <rect
            x="48"
            y="64"
            width="240"
            height="88"
            rx="16"
            fill="url(#origin-sage)"
            stroke={COLORS.sage}
            strokeWidth="1.75"
            strokeOpacity="0.65"
          />
          <text
            x="168"
            y="102"
            textAnchor="middle"
            fill={COLORS.ink}
            fontSize="13"
            letterSpacing="2.6"
            fontWeight="500"
          >
            DENTAL
          </text>
          <text
            x="168"
            y="124"
            textAnchor="middle"
            fill={COLORS.muted}
            fontSize="12"
            letterSpacing="2.2"
          >
            EXPERIENCE
          </text>
        </g>

        {/* Aesthetics node */}
        <g className={animate ? "origin-fade origin-fade--2" : undefined}>
          <rect
            x="672"
            y="64"
            width="240"
            height="88"
            rx="16"
            fill="url(#origin-mauve)"
            stroke={COLORS.mauve}
            strokeWidth="1.75"
            strokeOpacity="0.7"
          />
          <text
            x="792"
            y="102"
            textAnchor="middle"
            fill={COLORS.ink}
            fontSize="13"
            letterSpacing="2.6"
            fontWeight="500"
          >
            AESTHETICS
          </text>
          <text
            x="792"
            y="124"
            textAnchor="middle"
            fill={COLORS.muted}
            fontSize="12"
            letterSpacing="2.2"
          >
            EXPERIENCE
          </text>
        </g>

        {/* Converging lines into central DELVARA */}
        <path
          d="M 288 120 C 360 120, 400 200, 420 230"
          fill="none"
          stroke={COLORS.sage}
          strokeWidth="2.75"
          strokeLinecap="round"
          strokeOpacity="0.9"
          className={animate ? "origin-line origin-line--dental" : undefined}
        />
        <path
          d="M 672 120 C 600 120, 560 200, 540 230"
          fill="none"
          stroke={COLORS.mauve}
          strokeWidth="2.75"
          strokeLinecap="round"
          strokeOpacity="0.9"
          className={animate ? "origin-line origin-line--aesthetics" : undefined}
        />
        <circle
          cx="288"
          cy="120"
          r="5"
          fill={COLORS.sage}
          className={animate ? "origin-node origin-node--a" : undefined}
        />
        <circle
          cx="672"
          cy="120"
          r="5"
          fill={COLORS.mauve}
          className={animate ? "origin-node origin-node--b" : undefined}
        />

        {/* Central origin DELVARA */}
        <g
          filter="url(#origin-soft)"
          className={animate ? "origin-fade origin-fade--3" : undefined}
        >
          <rect
            x="360"
            y="228"
            width="240"
            height="92"
            rx="18"
            fill={COLORS.ink}
          />
          <text
            x="480"
            y="282"
            textAnchor="middle"
            fill={COLORS.ivory}
            fontSize="22"
            letterSpacing="4.5"
            fontWeight="500"
          >
            DELVARA
          </text>
        </g>
        <circle cx="420" cy="230" r="5" fill={COLORS.sage} />
        <circle cx="540" cy="230" r="5" fill={COLORS.mauve} />

        {/* Divider */}
        <line
          x1="120"
          y1="360"
          x2="840"
          y2="360"
          stroke={COLORS.ink}
          strokeOpacity="0.1"
          strokeWidth="1.5"
        />
        <text
          x="480"
          y="392"
          textAnchor="middle"
          fill={COLORS.muted}
          fontSize="12"
          letterSpacing="3.2"
          fontWeight="500"
        >
          HOW IT CONNECTS
        </text>

        {/* ── Vertical connector model ── */}
        <g className={animate ? "origin-fade origin-fade--4" : undefined}>
          <rect
            x="270"
            y="416"
            width="420"
            height="72"
            rx="16"
            fill={COLORS.ivory}
            stroke={COLORS.ink}
            strokeWidth="1.5"
            strokeOpacity="0.14"
          />
          <text
            x="480"
            y="447"
            textAnchor="middle"
            fill={COLORS.ink}
            fontSize="14"
            letterSpacing="2.4"
            fontWeight="500"
          >
            PEOPLE EXPLORING TREATMENT
          </text>
          <text
            x="480"
            y="470"
            textAnchor="middle"
            fill={COLORS.muted}
            fontSize="12"
            letterSpacing="1.4"
          >
            Prospective patients across London
          </text>
        </g>

        {/* Flow path people → DELVARA → clinics */}
        <path
          id="origin-flow-path"
          d="M 480 488 L 480 534"
          fill="none"
          stroke="url(#origin-flow)"
          strokeWidth="3"
          strokeLinecap="round"
          className={animate ? "origin-line origin-line--flow-1" : undefined}
        />
        <circle cx="480" cy="488" r="5.5" fill={COLORS.ink} fillOpacity="0.75" />
        <circle cx="480" cy="534" r="5.5" fill={COLORS.ink} />

        <g
          filter="url(#origin-soft)"
          className={animate ? "origin-fade origin-fade--5" : undefined}
        >
          <rect
            x="330"
            y="534"
            width="300"
            height="84"
            rx="18"
            fill={COLORS.ink}
          />
          <text
            x="480"
            y="572"
            textAnchor="middle"
            fill={COLORS.ivory}
            fontSize="20"
            letterSpacing="4"
            fontWeight="500"
          >
            DELVARA
          </text>
          <text
            x="480"
            y="596"
            textAnchor="middle"
            fill={COLORS.peach}
            fontSize="11"
            letterSpacing="2"
          >
            STRUCTURED CONNECTION
          </text>
        </g>

        <path
          d="M 480 618 L 480 664"
          fill="none"
          stroke="url(#origin-flow)"
          strokeWidth="3"
          strokeLinecap="round"
          className={animate ? "origin-line origin-line--flow-2" : undefined}
        />
        <circle cx="480" cy="618" r="5.5" fill={COLORS.ink} />
        <circle cx="480" cy="664" r="5.5" fill={COLORS.ink} fillOpacity="0.75" />

        <g className={animate ? "origin-fade origin-fade--6" : undefined}>
          <rect
            x="270"
            y="664"
            width="420"
            height="72"
            rx="16"
            fill={COLORS.ivory}
            stroke={COLORS.ink}
            strokeWidth="1.5"
            strokeOpacity="0.14"
          />
          <text
            x="480"
            y="696"
            textAnchor="middle"
            fill={COLORS.ink}
            fontSize="14"
            letterSpacing="2.4"
            fontWeight="500"
          >
            PARTICIPATING CLINICS
          </text>
          <text
            x="480"
            y="718"
            textAnchor="middle"
            fill={COLORS.muted}
            fontSize="12"
            letterSpacing="1.4"
          >
            Dental and aesthetic partners
          </text>
        </g>

        {/* Moving flow highlight — people → DELVARA → clinics */}
        {animate ? (
          <circle r="4.5" fill={COLORS.peach} className="origin-pulse">
            <animateMotion
              dur="4.8s"
              repeatCount="indefinite"
              keyPoints="0;0.42;0.58;1"
              keyTimes="0;0.42;0.58;1"
              calcMode="linear"
              path="M 480 488 L 480 576 L 480 576 L 480 700"
            />
            <animate
              attributeName="opacity"
              values="0;0.95;0.95;0"
              keyTimes="0;0.12;0.82;1"
              dur="4.8s"
              repeatCount="indefinite"
            />
          </circle>
        ) : null}
      </svg>
    </figure>
  );
}
