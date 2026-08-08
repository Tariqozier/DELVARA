"use client";

import { useEffect, useRef, useState } from "react";

const groups = [
  {
    title: "Patient acquisition",
    items: [
      "Campaign strategy",
      "Paid acquisition",
      "Treatment funnels",
      "Landing journeys",
      "Enquiry design",
    ],
  },
  {
    title: "Web & experience",
    items: [
      "Clinic websites",
      "Treatment landing pages",
      "Conversion design",
      "UX",
      "Content architecture",
    ],
  },
  {
    title: "Marketing & content",
    items: [
      "Campaign creative",
      "Treatment content",
      "Conversion copy",
      "Search content",
      "Creative production",
    ],
  },
  {
    title: "CRM & automation",
    items: [
      "Enquiry routing",
      "Automated follow-up",
      "Reminders",
      "Pipeline workflows",
      "CRM design",
      "Operational automation",
    ],
  },
  {
    title: "Tracking & optimisation",
    items: [
      "Conversion tracking",
      "Attribution",
      "Analytics",
      "Funnel performance",
      "Campaign optimisation",
    ],
  },
  {
    title: "Custom development",
    items: [
      "Custom websites",
      "Web applications",
      "Clinic portals",
      "Patient tools",
      "Calculators",
      "Booking experiences",
      "APIs",
      "Integrations",
      "Internal tools",
    ],
  },
] as const;

export function GrowthCapabilities() {
  const ref = useRef<HTMLUListElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <ul ref={ref} className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {groups.map((group, index) => (
        <li
          key={group.title}
          className={`rounded-xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.05] ${
            visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          style={{ transitionDelay: `${index * 70}ms` }}
        >
          <h3 className="text-sm font-medium tracking-[0.12em] text-[#F1C4AE] uppercase">
            {group.title}
          </h3>
          <ul className="mt-4 space-y-2">
            {group.items.map((item) => (
              <li
                key={item}
                className="border-l border-white/15 pl-3 text-sm text-white/70"
              >
                {item}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
