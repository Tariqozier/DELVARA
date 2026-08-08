"use client";

import { useEffect, useRef, useState } from "react";

export function ConnectionDiagram() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setVisible(true);
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="mx-auto flex max-w-md flex-col items-center gap-3 py-4"
      aria-label="People to DELVARA to clinics"
    >
      {[
        { label: "People", tone: "bg-dental-soft text-dental-deep border-dental/30" },
        { label: "DELVARA", tone: "bg-delvara-ink text-white border-delvara-ink" },
        { label: "Clinics", tone: "bg-aesthetics-soft text-aesthetics-deep border-aesthetics/30" },
      ].map((item, index) => (
        <div key={item.label} className="flex w-full flex-col items-center">
          <div
            className={`w-full rounded-xl border px-6 py-4 text-center text-sm font-medium tracking-wide transition-all duration-500 ${item.tone} ${
              visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
            style={{ transitionDelay: `${index * 120}ms` }}
          >
            {item.label}
          </div>
          {index < 2 ? (
            <span
              aria-hidden="true"
              className={`my-1 text-delvara-muted-text transition-opacity duration-500 ${
                visible ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDelay: `${index * 120 + 80}ms` }}
            >
              ↓
            </span>
          ) : null}
        </div>
      ))}
      <p className="mt-4 text-center text-sm text-delvara-muted-text">
        DELVARA is the structured connection between the two.
      </p>
    </div>
  );
}
