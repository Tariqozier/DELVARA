"use client";

import { useEffect, useRef, useState } from "react";

const stages = [
  "Strategy",
  "Acquisition",
  "Experience",
  "Automation",
  "Data",
  "Optimisation",
] as const;

export function GrowthFlow() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="rounded-2xl border border-white/10 bg-black/20 p-6 sm:p-8"
      aria-label="Growth system flow"
    >
      <ol className="space-y-0">
        {stages.map((stage, index) => (
          <li key={stage} className="flex flex-col items-center">
            <div
              className={`w-full rounded-lg border px-4 py-3 text-center text-sm font-medium tracking-wide transition-all duration-500 ${
                visible
                  ? "translate-y-0 border-[#B67E96]/45 bg-[#B67E96]/10 text-white opacity-100"
                  : "translate-y-2 border-white/10 text-white/40 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {stage}
            </div>
            {index < stages.length - 1 ? (
              <span
                aria-hidden="true"
                className={`py-1 text-white/35 transition-opacity duration-500 ${
                  visible ? "opacity-100" : "opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100 + 50}ms` }}
              >
                ↓
              </span>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}
