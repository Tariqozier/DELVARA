"use client";

import { useEffect, useRef, useState } from "react";

type JourneyNode = {
  id: string;
  label: string;
  description: string;
  column: "person" | "delvara" | "clinic";
  accent?: "sage" | "mauve" | "neutral";
};

const journeyNodes: JourneyNode[] = [
  {
    id: "treatment-interest",
    label: "Treatment interest",
    description: "A person explores an aesthetic or dental service they are considering.",
    column: "person",
    accent: "neutral",
  },
  {
    id: "delvara-enquiry",
    label: "DELVARA enquiry",
    description: "They start an enquiry through DELVARA with the service in mind.",
    column: "delvara",
    accent: "neutral",
  },
  {
    id: "context-qualification",
    label: "Context & qualification",
    description: "Location, timing, budget and priorities help shape useful context.",
    column: "delvara",
    accent: "sage",
  },
  {
    id: "consent",
    label: "Consent",
    description: "Information is only shared through an explicit user action.",
    column: "delvara",
    accent: "neutral",
  },
  {
    id: "clinic-pathway",
    label: "Relevant clinic pathway",
    description: "Where appropriate, the enquiry may be routed to a participating clinic.",
    column: "delvara",
    accent: "mauve",
  },
  {
    id: "clinic-conversation",
    label: "Clinic conversation",
    description: "The clinic team can discuss the service, answer questions and explain next steps.",
    column: "clinic",
    accent: "neutral",
  },
  {
    id: "outcome-reporting",
    label: "Outcome / reporting",
    description: "The journey can be tracked to improve clarity for people and clinics.",
    column: "clinic",
    accent: "neutral",
  },
];

const columnLabels = {
  person: "Person exploring treatment",
  delvara: "DELVARA",
  clinic: "Participating clinic",
} as const;

const accentStyles = {
  neutral: {
    dot: "bg-delvara-ink",
    ring: "border-delvara-border",
    glow: "",
  },
  sage: {
    dot: "bg-[#789585]",
    ring: "border-[#789585]/40",
    glow: "shadow-[0_0_0_4px_rgb(120_149_133_/_0.12)]",
  },
  mauve: {
    dot: "bg-[#A98598]",
    ring: "border-[#A98598]/40",
    glow: "shadow-[0_0_0_4px_rgb(169_133_152_/_0.12)]",
  },
} as const;

function JourneyNodeCard({
  node,
  index,
  isActive,
  prefersReducedMotion,
}: {
  node: JourneyNode;
  index: number;
  isActive: boolean;
  prefersReducedMotion: boolean;
}) {
  const styles = accentStyles[node.accent ?? "neutral"];
  const visible = prefersReducedMotion || isActive;

  return (
    <li
      aria-labelledby={`journey-node-${node.id}-label`}
      className={`relative flex gap-4 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-35 translate-y-1"
      }`}
    >
      <div className="flex flex-col items-center">
        <span
          aria-hidden="true"
          className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border bg-delvara-white transition-all duration-700 ${styles.ring} ${visible ? styles.glow : ""}`}
        >
          <span className={`h-2.5 w-2.5 rounded-full transition-opacity duration-700 ${styles.dot} ${visible ? "opacity-100" : "opacity-40"}`} />
        </span>
        {index < journeyNodes.length - 1 ? (
          <span
            aria-hidden="true"
            className={`mt-2 w-px flex-1 min-h-8 transition-colors duration-700 lg:hidden ${
              visible ? "bg-delvara-border-strong" : "bg-delvara-border"
            }`}
          />
        ) : null}
      </div>

      <article className="pb-10 lg:pb-0">
        <p className="text-[0.6875rem] font-medium tracking-[0.14em] text-delvara-muted-text uppercase">
          Step {String(index + 1).padStart(2, "0")}
        </p>
        <h3
          id={`journey-node-${node.id}-label`}
          className="mt-1 text-base font-medium text-delvara-ink sm:text-lg"
        >
          {node.label}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-delvara-muted-text">
          {node.description}
        </p>
      </article>
    </li>
  );
}

export function TwoSidedJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCount, setActiveCount] = useState(0);
  const [pathProgress, setPathProgress] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotionPreference = () => {
      const reduced = mediaQuery.matches;
      setPrefersReducedMotion(reduced);
      if (reduced) {
        setActiveCount(journeyNodes.length);
        setPathProgress(1);
      }
    };

    syncMotionPreference();
    mediaQuery.addEventListener("change", syncMotionPreference);

    return () => {
      mediaQuery.removeEventListener("change", syncMotionPreference);
    };
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;

        const ratio = Math.min(1, Math.max(0, entry.intersectionRatio));
        const scrollProgress = entry.isIntersecting
          ? Math.max(
              ratio,
              Math.min(
                1,
                (window.innerHeight - entry.boundingClientRect.top) /
                  (entry.boundingClientRect.height + window.innerHeight * 0.35),
              ),
            )
          : 0;

        const nextCount = Math.max(
          1,
          Math.ceil(scrollProgress * journeyNodes.length),
        );

        setActiveCount(nextCount);
        setPathProgress(scrollProgress);
      },
      { threshold: Array.from({ length: 11 }, (_, i) => i / 10) },
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [prefersReducedMotion]);

  const nodesByColumn = {
    person: journeyNodes.filter((node) => node.column === "person"),
    delvara: journeyNodes.filter((node) => node.column === "delvara"),
    clinic: journeyNodes.filter((node) => node.column === "clinic"),
  };

  const pathLength = 420;
  const dashOffset = pathLength * (1 - pathProgress);

  return (
    <div
      ref={containerRef}
      aria-label="How a person, DELVARA and a participating clinic connect through an enquiry journey"
      className="relative"
    >
      {/* Mobile: vertical timeline */}
      <ol className="space-y-0 lg:hidden">
        {journeyNodes.map((node, index) => (
          <JourneyNodeCard
            key={node.id}
            node={node}
            index={index}
            isActive={index < activeCount}
            prefersReducedMotion={prefersReducedMotion}
          />
        ))}
      </ol>

      {/* Desktop: three-column layout */}
      <div className="hidden lg:block">
        <div className="mb-10 grid grid-cols-3 gap-6">
          {(Object.keys(columnLabels) as Array<keyof typeof columnLabels>).map(
            (column) => (
              <div key={column} className="text-center">
                <p className="eyebrow">{columnLabels[column]}</p>
              </div>
            ),
          )}
        </div>

        <div className="relative">
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-16 h-[calc(100%-4rem)] w-full"
            viewBox="0 0 1000 520"
            preserveAspectRatio="none"
            fill="none"
          >
            <path
              d="M 120 40 C 220 40, 280 80, 380 120 S 520 180, 500 260 S 480 340, 620 380 S 820 420, 880 460"
              stroke="#dddcd7"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
            />
            <path
              d="M 120 40 C 220 40, 280 80, 380 120 S 520 180, 500 260 S 480 340, 620 380 S 820 420, 880 460"
              stroke="#789585"
              strokeWidth="2"
              strokeDasharray={pathLength}
              strokeDashoffset={dashOffset}
              vectorEffect="non-scaling-stroke"
              className="transition-[stroke-dashoffset] duration-700 ease-out"
              style={{
                opacity: prefersReducedMotion ? 1 : 0.35 + pathProgress * 0.65,
              }}
            />
            <path
              d="M 500 260 C 560 300, 600 340, 680 380"
              stroke="#A98598"
              strokeWidth="2"
              strokeDasharray="120"
              strokeDashoffset={120 * (1 - Math.min(1, pathProgress * 1.4))}
              vectorEffect="non-scaling-stroke"
              className="transition-[stroke-dashoffset] duration-700 ease-out"
              style={{
                opacity: prefersReducedMotion ? 0.6 : pathProgress > 0.55 ? 0.6 : 0.15,
              }}
            />
          </svg>

          <div className="relative grid grid-cols-3 gap-8">
            {(Object.keys(nodesByColumn) as Array<keyof typeof nodesByColumn>).map(
              (column) => (
                <ol key={column} className="space-y-10">
                  {nodesByColumn[column].map((node) => {
                    const index = journeyNodes.findIndex((item) => item.id === node.id);
                    const styles = accentStyles[node.accent ?? "neutral"];
                    const isActive = index < activeCount;
                    const visible = prefersReducedMotion || isActive;

                    return (
                      <li
                        key={node.id}
                        aria-labelledby={`journey-desktop-${node.id}-label`}
                        className={`rounded-xl border bg-delvara-white p-5 transition-all duration-700 ${
                          visible
                            ? "border-delvara-border-strong opacity-100 translate-y-0"
                            : "border-delvara-border opacity-40 translate-y-2"
                        } ${visible ? styles.glow : ""}`}
                      >
                        <div className="flex items-start gap-3">
                          <span
                            aria-hidden="true"
                            className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ${styles.dot} ${
                              visible ? "opacity-100" : "opacity-40"
                            }`}
                          />
                          <div>
                            <p className="text-[0.6875rem] font-medium tracking-[0.14em] text-delvara-muted-text uppercase">
                              Step {String(index + 1).padStart(2, "0")}
                            </p>
                            <h3
                              id={`journey-desktop-${node.id}-label`}
                              className="mt-1 text-base font-medium text-delvara-ink"
                            >
                              {node.label}
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-delvara-muted-text">
                              {node.description}
                            </p>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ol>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
