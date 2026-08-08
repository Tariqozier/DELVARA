"use client";

import { useEffect, useRef, useState } from "react";

import "./JourneyFlow.css";

type JourneyStep = {
  number: string;
  title: string;
  description: string;
  group: "person" | "delvara" | "clinic";
};

const steps: JourneyStep[] = [
  {
    number: "01",
    title: "Explore",
    description: "Choose the dental or aesthetic service you're considering.",
    group: "person",
  },
  {
    number: "02",
    title: "Add context",
    description: "Share your location, timeframe, budget range and priorities.",
    group: "person",
  },
  {
    number: "03",
    title: "Enquire",
    description: "Submit your details and give explicit consent.",
    group: "person",
  },
  {
    number: "04",
    title: "Structure",
    description: "DELVARA organises the enquiry into useful information.",
    group: "delvara",
  },
  {
    number: "05",
    title: "Connect",
    description:
      "Where appropriate, the enquiry may be shared with a participating clinic.",
    group: "delvara",
  },
  {
    number: "06",
    title: "Conversation",
    description:
      "The clinic handles consultation, clinical advice, suitability, pricing and treatment.",
    group: "clinic",
  },
];

const groupMeta = {
  person: { label: "Person", accent: "var(--color-dental)" },
  delvara: { label: "DELVARA", accent: "var(--color-delvara-ink)" },
  clinic: { label: "Clinic", accent: "var(--color-aesthetics)" },
} as const;

export function JourneyFlow() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(media.matches);
    const onChange = () => setReducedMotion(media.matches);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setVisible(true);
      },
      { threshold: 0.25 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const show = visible || reducedMotion;

  return (
    <div ref={ref} className="journey-flow" aria-label="Enquiry journey">
      <div className="mb-8 flex flex-wrap gap-4 sm:gap-6">
        {(Object.keys(groupMeta) as Array<keyof typeof groupMeta>).map(
          (key) => (
            <div
              key={key}
              className="flex items-center gap-2 text-xs font-medium tracking-[0.14em] uppercase text-delvara-muted-text"
            >
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full"
                style={{ background: groupMeta[key].accent }}
              />
              {groupMeta[key].label}
            </div>
          ),
        )}
      </div>

      <ol className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        <span
          aria-hidden="true"
          className={`journey-flow__path pointer-events-none absolute top-[2.15rem] right-6 left-6 hidden h-px bg-gradient-to-r from-dental via-delvara-ink to-aesthetics lg:block ${
            show ? "journey-flow__path--drawn" : ""
          }`}
        />
        {steps.map((step, index) => {
          const meta = groupMeta[step.group];
          return (
            <li
              key={step.number}
              className={`relative rounded-xl border border-delvara-border bg-delvara-white p-5 transition-all duration-500 ${
                show ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
              style={{
                transitionDelay: reducedMotion ? "0ms" : `${index * 90}ms`,
              }}
            >
              <div className="flex items-center gap-3">
                <span
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border text-xs font-medium tracking-wide transition-shadow duration-500"
                  style={{
                    borderColor: meta.accent,
                    color: meta.accent,
                    boxShadow: show
                      ? `0 0 0 4px color-mix(in srgb, ${meta.accent} 16%, transparent)`
                      : undefined,
                  }}
                >
                  {step.number}
                </span>
                <div>
                  <p className="text-[0.65rem] font-medium tracking-[0.14em] uppercase text-delvara-muted-text">
                    {meta.label}
                  </p>
                  <h3 className="text-lg font-medium text-delvara-ink">
                    {step.title}
                  </h3>
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-delvara-muted-text">
                {step.description}
              </p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
