"use client";

import { useEffect, useRef, useState } from "react";

type FlowStep = {
  title: string;
  description: string;
  detail?: string;
};

type ScrollFlowProps = {
  steps: FlowStep[];
  variant: "dental" | "aesthetics";
  heading?: string;
};

const variantStyles = {
  dental: {
    section: "bg-delvara-white border-y border-delvara-border",
    number: "border-dental/35 bg-dental-soft text-dental-deep",
    numberActive: "border-dental bg-dental text-delvara-white",
    title: "text-delvara-ink",
    connector: "stroke-dental/50",
    connectorActive: "stroke-dental",
    nodeRing: "ring-dental/20",
  },
  aesthetics: {
    section:
      "bg-gradient-to-b from-delvara-bg via-aesthetics-soft/25 to-delvara-bg",
    number:
      "rounded-full border-aesthetics/35 bg-aesthetics-soft text-aesthetics-deep",
    numberActive:
      "rounded-full border-aesthetics bg-aesthetics text-delvara-white",
    title: "text-aesthetics-deep",
    connector: "stroke-aesthetics/40",
    connectorActive: "stroke-aesthetics-peach",
    nodeRing: "ring-aesthetics/20",
  },
} as const;

function formatStepNumber(index: number): string {
  return String(index + 1).padStart(2, "0");
}

function useLargeScreen(): boolean {
  const [isLarge, setIsLarge] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const sync = () => setIsLarge(mediaQuery.matches);
    sync();
    mediaQuery.addEventListener("change", sync);
    return () => mediaQuery.removeEventListener("change", sync);
  }, []);

  return isLarge;
}

export function ScrollFlow({ steps, variant, heading }: ScrollFlowProps) {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [reducedMotion, setReducedMotion] = useState(false);
  const stepRefs = useRef<(HTMLLIElement | null)[]>([]);
  const isLargeScreen = useLargeScreen();
  const styles = variantStyles[variant];
  const isDental = variant === "dental";
  const showDesktopLayout = isLargeScreen;

  useEffect(() => {
    stepRefs.current = [];
  }, [showDesktopLayout, variant]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPreference = () => {
      const prefersReduced = mediaQuery.matches;
      setReducedMotion(prefersReduced);
      setActiveIndex(prefersReduced ? steps.length - 1 : -1);
    };

    syncPreference();
    mediaQuery.addEventListener("change", syncPreference);
    return () => mediaQuery.removeEventListener("change", syncPreference);
  }, [steps.length]);

  useEffect(() => {
    if (reducedMotion) return;

    const observers: IntersectionObserver[] = [];

    stepRefs.current.forEach((element, index) => {
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIndex((previous) => Math.max(previous, index));
          }
        },
        { threshold: 0.35, rootMargin: "-8% 0px -8% 0px" },
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, [reducedMotion, showDesktopLayout, steps.length, variant]);

  const progress =
    steps.length <= 1
      ? 1
      : Math.max(0, activeIndex) / Math.max(steps.length - 1, 1);

  const pathDrawOffset = reducedMotion ? 0 : 1 - progress;

  function renderStepContent(
    step: FlowStep,
    index: number,
    compact: boolean,
  ) {
    const isActive = index <= activeIndex || reducedMotion;

    return (
      <>
        <span
          className={`inline-flex items-center justify-center border text-xs font-medium tracking-widest transition-colors duration-300 ${
            compact ? "h-11 w-11" : "h-12 w-12"
          } ${isActive ? styles.numberActive : styles.number} ${
            isActive ? `ring-4 ${styles.nodeRing}` : ""
          }`}
        >
          {formatStepNumber(index)}
        </span>
        <h3
          className={`font-medium leading-snug ${styles.title} ${
            compact ? "mt-4 text-base" : "mt-5 text-sm"
          }`}
        >
          {step.title}
        </h3>
        <p
          className={`leading-relaxed text-delvara-muted-text ${
            compact ? "mt-2 text-sm" : "mt-2 text-xs"
          }`}
        >
          {step.description}
        </p>
        {step.detail ? (
          <p
            className={`leading-relaxed text-delvara-muted-text/85 ${
              compact ? "mt-2 text-sm" : "mt-2 text-xs"
            }`}
          >
            {step.detail}
          </p>
        ) : null}
      </>
    );
  }

  return (
    <section
      className={`section-pad ${styles.section}`}
      aria-labelledby={heading ? "scroll-flow-heading" : undefined}
    >
      <div className="container-delvara">
        {heading ? (
          <div className="max-w-2xl">
            <p className="eyebrow">
              {isDental ? "Acquisition flow" : "Patient journey"}
            </p>
            <h2
              id="scroll-flow-heading"
              className="mt-4 text-3xl font-medium tracking-tight text-delvara-ink sm:text-4xl"
            >
              {heading}
            </h2>
          </div>
        ) : null}

        {showDesktopLayout && isDental ? (
          <div className="relative mt-14">
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-6 h-12 w-full"
              viewBox="0 0 1000 48"
              preserveAspectRatio="none"
            >
              <line
                x1="8%"
                y1="24"
                x2="92%"
                y2="24"
                className="stroke-delvara-border"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
              />
              <line
                x1="8%"
                y1="24"
                x2="92%"
                y2="24"
                className={styles.connectorActive}
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
                pathLength={1}
                strokeDasharray="1"
                strokeDashoffset={pathDrawOffset}
                style={{ transition: "stroke-dashoffset 600ms ease-out" }}
              />
            </svg>

            <ol className="relative grid grid-cols-6 gap-4">
              {steps.map((step, index) => {
                const isActive = index <= activeIndex || reducedMotion;
                return (
                  <li
                    key={step.title}
                    ref={(element) => {
                      stepRefs.current[index] = element;
                    }}
                    className={`flex flex-col transition-opacity duration-500 ${
                      isActive ? "opacity-100" : "opacity-55"
                    }`}
                  >
                    {renderStepContent(step, index, false)}
                  </li>
                );
              })}
            </ol>
          </div>
        ) : null}

        {showDesktopLayout && !isDental ? (
          <div className="relative mt-14">
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 1000 680"
              preserveAspectRatio="none"
            >
              <path
                d="M 80 60 C 180 60, 220 120, 320 140 S 520 180, 620 220 S 820 300, 920 340 C 920 420, 820 480, 720 500 S 520 540, 420 560 S 220 600, 80 620"
                fill="none"
                className={styles.connector}
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d="M 80 60 C 180 60, 220 120, 320 140 S 520 180, 620 220 S 820 300, 920 340 C 920 420, 820 480, 720 500 S 520 540, 420 560 S 220 600, 80 620"
                fill="none"
                className={styles.connectorActive}
                strokeWidth="2.5"
                vectorEffect="non-scaling-stroke"
                pathLength={1}
                strokeDasharray="1"
                strokeDashoffset={pathDrawOffset}
                style={{ transition: "stroke-dashoffset 700ms ease-out" }}
              />
            </svg>

            <ol className="relative grid min-h-[680px] grid-cols-12 grid-rows-6 gap-y-8">
              {steps.map((step, index) => {
                const positions = [
                  "col-start-1 row-start-1 col-span-3",
                  "col-start-4 row-start-2 col-span-3",
                  "col-start-7 row-start-1 col-span-3",
                  "col-start-10 row-start-3 col-span-3",
                  "col-start-7 row-start-5 col-span-3",
                  "col-start-2 row-start-6 col-span-3",
                ];
                const isActive = index <= activeIndex || reducedMotion;

                return (
                  <li
                    key={step.title}
                    ref={(element) => {
                      stepRefs.current[index] = element;
                    }}
                    className={`${positions[index] ?? ""} transition-opacity duration-500 ${
                      isActive ? "opacity-100" : "opacity-50"
                    }`}
                  >
                    <article className="rounded-2xl border border-aesthetics/15 bg-delvara-white/90 p-5 backdrop-blur-sm">
                      {renderStepContent(step, index, true)}
                    </article>
                  </li>
                );
              })}
            </ol>
          </div>
        ) : null}

        {!showDesktopLayout ? (
          <ol className="relative mt-14 space-y-0">
            {steps.map((step, index) => {
              const isActive = index <= activeIndex || reducedMotion;
              const isLast = index === steps.length - 1;

              return (
                <li
                  key={step.title}
                  ref={(element) => {
                    stepRefs.current[index] = element;
                  }}
                  className={`relative flex gap-5 pb-10 transition-opacity duration-500 ${
                    isActive ? "opacity-100" : "opacity-55"
                  } ${isLast ? "pb-0" : ""}`}
                >
                  {!isLast ? (
                    <span
                      aria-hidden="true"
                      className={`absolute top-12 left-[1.375rem] h-[calc(100%-3rem)] w-px ${
                        isDental ? "bg-dental/25" : "bg-aesthetics/25"
                      }`}
                    >
                      <span
                        className={`block h-full w-full origin-top transition-transform duration-500 ${
                          isDental ? "bg-dental" : "bg-aesthetics-peach"
                        } ${isActive ? "scale-y-100" : "scale-y-0"}`}
                      />
                    </span>
                  ) : null}

                  <span
                    className={`relative z-10 inline-flex h-11 w-11 shrink-0 items-center justify-center border text-xs font-medium tracking-widest transition-colors duration-300 ${
                      isActive ? styles.numberActive : styles.number
                    }`}
                  >
                    {formatStepNumber(index)}
                  </span>

                  <div className="min-w-0 flex-1 pt-0.5">
                    <h3 className={`text-lg font-medium ${styles.title}`}>
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-delvara-muted-text sm:text-base">
                      {step.description}
                    </p>
                    {step.detail ? (
                      <p className="mt-2 text-sm leading-relaxed text-delvara-muted-text/85">
                        {step.detail}
                      </p>
                    ) : null}
                  </div>
                </li>
              );
            })}
          </ol>
        ) : null}
      </div>
    </section>
  );
}
