"use client";

import { useEffect, useRef, useState } from "react";
import "./AestheticJourney.css";

export type AestheticJourneyStep = {
  title: string;
  description: string;
  detail?: string;
};

type AestheticJourneyProps = {
  steps: readonly AestheticJourneyStep[];
  heading?: string;
};

function formatStepNumber(index: number): string {
  return String(index + 1).padStart(2, "0");
}

export function AestheticJourney({
  steps,
  heading = "The aesthetic acquisition journey.",
}: AestheticJourneyProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      const prefersReduced = media.matches;
      setReducedMotion(prefersReduced);
      if (prefersReduced) {
        setVisible(true);
        setActiveIndex(steps.length - 1);
      }
    };
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, [steps.length]);

  useEffect(() => {
    if (reducedMotion) return;
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [reducedMotion]);

  useEffect(() => {
    if (!visible || reducedMotion) return;

    let index = 0;
    setActiveIndex(0);
    const timer = window.setInterval(() => {
      index += 1;
      if (index >= steps.length) {
        window.clearInterval(timer);
        return;
      }
      setActiveIndex(index);
    }, 420);

    return () => window.clearInterval(timer);
  }, [visible, reducedMotion, steps.length]);

  const showAll = reducedMotion || activeIndex >= steps.length - 1;
  const pathProgress = showAll
    ? 1
    : Math.max(0, activeIndex + 1) / steps.length;

  return (
    <section
      ref={sectionRef}
      className="aesthetic-journey section-pad !py-14 md:!py-16"
      aria-labelledby="aesthetic-journey-heading"
    >
      <div className="container-delvara">
        <div className="mx-auto max-w-[72rem]">
          <div
            className={`max-w-2xl transition-all duration-500 ${
              visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
          >
            <p className="eyebrow text-aesthetics-deep">Patient journey</p>
            <h2
              id="aesthetic-journey-heading"
              className="mt-3 text-3xl font-medium tracking-tight text-delvara-ink sm:text-4xl"
            >
              {heading}
            </h2>
          </div>

          {/* Desktop: single 01–06 journey in reading order */}
          <div className="aesthetic-journey__desktop relative mx-auto mt-10 hidden max-w-[72rem] lg:block">
            <svg
              aria-hidden="true"
              className="aesthetic-journey__path pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 1100 420"
              preserveAspectRatio="none"
            >
              <path
                d="M 95 95 H 1005 M 1005 95 V 295 M 95 295 H 1005"
                fill="none"
                stroke="rgb(169 133 152 / 0.32)"
                strokeWidth="3.25"
                strokeLinecap="round"
              />
              <path
                className="aesthetic-journey__path-draw"
                d="M 95 95 H 1005 M 1005 95 V 295 M 95 295 H 1005"
                fill="none"
                stroke="#D9A994"
                strokeWidth="3.75"
                strokeLinecap="round"
                pathLength={1}
                style={{
                  strokeDasharray: 1,
                  strokeDashoffset: 1 - pathProgress,
                }}
              />
              {visible && !reducedMotion ? (
                <circle r="5" fill="#F1C4AE" className="aesthetic-journey__pulse">
                  <animateMotion
                    dur="5.5s"
                    repeatCount="indefinite"
                    path="M 95 95 H 1005 M 1005 95 V 295 M 95 295 H 1005"
                  />
                </circle>
              ) : null}
            </svg>

            <ol className="relative grid grid-cols-3 gap-x-6 gap-y-10 px-2 py-2">
              {steps.map((step, index) => {
                const isActive = index <= activeIndex || reducedMotion;
                return (
                  <li
                    key={step.title}
                    className={`aesthetic-journey__card transition-all duration-500 ${
                      isActive
                        ? "translate-y-0 opacity-100"
                        : "translate-y-3 opacity-40"
                    }`}
                    style={{
                      transitionDelay: reducedMotion
                        ? "0ms"
                        : `${index * 80}ms`,
                    }}
                  >
                    <article className="group rounded-2xl border border-aesthetics/35 bg-delvara-white p-5 shadow-[0_10px_28px_rgb(23_45_46/0.05)] transition-all duration-200 hover:-translate-y-0.5 hover:border-aesthetics/55 hover:shadow-[0_14px_32px_rgb(169_133_152/0.12)] sm:p-6">
                      <div className="flex items-center gap-3">
                        <span
                          className={`inline-flex h-11 w-11 items-center justify-center rounded-full border text-xs font-medium tracking-widest transition-colors duration-300 ${
                            isActive
                              ? "border-aesthetics bg-aesthetics text-white ring-4 ring-aesthetics/15"
                              : "border-aesthetics/40 bg-aesthetics-soft text-aesthetics-deep"
                          }`}
                        >
                          {formatStepNumber(index)}
                        </span>
                        <h3 className="text-base font-medium text-delvara-ink sm:text-lg">
                          {step.title}
                        </h3>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-delvara-muted-text">
                        {step.description}
                      </p>
                      {step.detail ? (
                        <p className="mt-2 text-xs leading-relaxed text-aesthetics-deep/80">
                          {step.detail}
                        </p>
                      ) : null}
                    </article>
                  </li>
                );
              })}
            </ol>
          </div>

          {/* Mobile vertical timeline — same canonical 01–06 order */}
          <ol className="relative mt-10 space-y-0 lg:hidden">
            {steps.map((step, index) => {
              const isActive = index <= activeIndex || reducedMotion;
              const isLast = index === steps.length - 1;
              return (
                <li
                  key={step.title}
                  className={`relative flex gap-4 pb-8 transition-all duration-500 ${
                    isActive
                      ? "translate-y-0 opacity-100"
                      : "translate-y-2 opacity-45"
                  } ${isLast ? "pb-0" : ""}`}
                >
                  {!isLast ? (
                    <span
                      aria-hidden="true"
                      className="absolute top-12 left-[1.35rem] h-[calc(100%-2.5rem)] w-[2.5px] rounded-full bg-aesthetics/25"
                    >
                      <span
                        className={`block h-full w-full origin-top rounded-full bg-aesthetics-peach transition-transform duration-500 ${
                          isActive ? "scale-y-100" : "scale-y-0"
                        }`}
                      />
                    </span>
                  ) : null}
                  <span
                    className={`relative z-10 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border text-xs font-medium tracking-widest ${
                      isActive
                        ? "border-aesthetics bg-aesthetics text-white"
                        : "border-aesthetics/40 bg-aesthetics-soft text-aesthetics-deep"
                    }`}
                  >
                    {formatStepNumber(index)}
                  </span>
                  <article className="min-w-0 flex-1 rounded-2xl border border-aesthetics/30 bg-delvara-white p-4 sm:p-5">
                    <h3 className="text-lg font-medium text-delvara-ink">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-delvara-muted-text">
                      {step.description}
                    </p>
                    {step.detail ? (
                      <p className="mt-2 text-xs leading-relaxed text-aesthetics-deep/80">
                        {step.detail}
                      </p>
                    ) : null}
                  </article>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
