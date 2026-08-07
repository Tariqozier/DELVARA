"use client";

import { useState } from "react";
import { IconPin } from "@/components/icons";
import { StartSearchButton } from "@/components/StartSearchButton";

const panelTreatments = [
  "Dental implants",
  "Clear aligners",
  "Veneers",
  "Composite bonding",
  "Anti-wrinkle treatments",
  "Dermal fillers",
] as const;

export function HeroDiscoveryPanel() {
  const [selected, setSelected] = useState<string>("Clear aligners");

  return (
    <div className="reveal relative lg:justify-self-end">
      <div
        aria-hidden="true"
        className="absolute -inset-4 rounded-[1.5rem] bg-[linear-gradient(145deg,rgb(111_143_118/0.12),transparent_45%,rgb(16_42_43/0.06))] blur-0"
      />
      <div className="relative overflow-hidden rounded-[1.15rem] border border-delvara-border bg-delvara-white shadow-[0_18px_50px_rgb(16_42_43/0.08)]">
        <div className="flex items-center justify-between border-b border-delvara-border px-5 py-4 sm:px-6">
          <div>
            <p className="text-[0.7rem] font-medium tracking-[0.16em] text-delvara-sage-deep uppercase">
              DELVARA
            </p>
            <p className="mt-1 text-base font-medium text-delvara-ink">
              Treatment discovery
            </p>
          </div>
          <span className="rounded-md bg-delvara-surface px-2.5 py-1 text-xs text-delvara-muted-text">
            Preview
          </span>
        </div>

        <div className="space-y-5 px-5 py-5 sm:px-6 sm:py-6">
          <div>
            <p className="text-sm font-medium text-delvara-ink">
              What are you considering?
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {panelTreatments.map((treatment) => {
                const isSelected = selected === treatment;
                return (
                  <button
                    key={treatment}
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => setSelected(treatment)}
                    className={`rounded-md border px-3 py-2 text-sm transition-all duration-200 ${
                      isSelected
                        ? "border-delvara-ink bg-delvara-ink text-white"
                        : "border-delvara-border bg-delvara-bg text-delvara-charcoal hover:border-delvara-sage hover:bg-delvara-surface"
                    }`}
                  >
                    {treatment}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <p className="mb-2 text-sm font-medium text-delvara-ink">
              Preferred location
            </p>
            <div className="relative">
              <IconPin className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-delvara-muted-text" />
              <div className="input-field flex items-center pl-10 text-delvara-charcoal">
                Manchester
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-delvara-border bg-delvara-surface/70 p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-medium text-delvara-ink">
                  Matching preferences
                </p>
                <p className="mt-1 text-sm text-delvara-muted-text">
                  Treatment, location and what matters most to you.
                </p>
              </div>
              <span className="rounded-full bg-delvara-sage-soft px-2.5 py-1 text-xs font-medium text-delvara-sage-deep">
                Ready
              </span>
            </div>
            <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-md bg-delvara-white px-3 py-2.5">
                <dt className="text-delvara-muted-text">Focus</dt>
                <dd className="mt-1 font-medium text-delvara-ink">
                  {selected}
                </dd>
              </div>
              <div className="rounded-md bg-delvara-white px-3 py-2.5">
                <dt className="text-delvara-muted-text">Travel</dt>
                <dd className="mt-1 font-medium text-delvara-ink">
                  Up to 25 miles
                </dd>
              </div>
            </dl>
          </div>

          <StartSearchButton variant="primary" className="w-full">
            Continue with DELVARA
          </StartSearchButton>
        </div>
      </div>
    </div>
  );
}
