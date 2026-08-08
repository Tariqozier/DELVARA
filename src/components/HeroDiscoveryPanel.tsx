"use client";

import { useState } from "react";
import { IconPin } from "@/components/icons";
import { StartSearchButton } from "@/components/StartSearchButton";
import {
  heroAestheticsTreatments,
  heroDentalTreatments,
  type TreatmentCategory,
} from "@/lib/content";

export function HeroDiscoveryPanel() {
  const [category, setCategory] = useState<TreatmentCategory | null>(null);
  const [selectedTreatment, setSelectedTreatment] = useState("");

  const treatmentOptions =
    category === "dental"
      ? heroDentalTreatments
      : category === "aesthetics"
        ? heroAestheticsTreatments
        : [];

  function selectCategory(next: TreatmentCategory) {
    setCategory(next);
    setSelectedTreatment("");
  }

  return (
    <div className="reveal relative lg:justify-self-end">
      <div
        aria-hidden="true"
        className="absolute -inset-4 rounded-[1.5rem] bg-[linear-gradient(145deg,rgb(23_45_46/0.04),transparent_50%,rgb(169_133_152/0.06))]"
      />
      <div className="relative overflow-hidden rounded-[1.15rem] border border-delvara-border bg-delvara-white shadow-[0_18px_50px_rgb(23_45_46/0.08)]">
        <div className="flex items-center justify-between border-b border-delvara-border px-5 py-4 sm:px-6">
          <div>
            <p className="text-[0.7rem] font-medium tracking-[0.16em] text-delvara-muted-text uppercase">
              DELVARA
            </p>
            <p className="mt-1 text-base font-medium text-delvara-ink">
              Start your treatment enquiry
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
            <div className="mt-3 grid grid-cols-2 gap-2.5">
              <button
                type="button"
                className="category-tab"
                data-category="aesthetics"
                aria-pressed={category === "aesthetics"}
                onClick={() => selectCategory("aesthetics")}
              >
                <span
                  aria-hidden="true"
                  className="h-2 w-2 rounded-full accent-dot-aesthetics"
                />
                Aesthetics
              </button>
              <button
                type="button"
                className="category-tab"
                data-category="dental"
                aria-pressed={category === "dental"}
                onClick={() => selectCategory("dental")}
              >
                <span
                  aria-hidden="true"
                  className="h-2 w-2 rounded-full accent-dot-dental"
                />
                Dental
              </button>
            </div>
          </div>

          {category ? (
            <div key={category} className="category-panel-enter">
              <p className="text-sm font-medium text-delvara-ink">
                Example treatments
              </p>
              <div className="mt-3 flex max-h-40 flex-wrap gap-2 overflow-y-auto pr-1">
                {treatmentOptions.map((treatment) => {
                  const isSelected = selectedTreatment === treatment;
                  return (
                    <button
                      key={treatment}
                      type="button"
                      aria-pressed={isSelected}
                      onClick={() => setSelectedTreatment(treatment)}
                      className={`rounded-md border px-3 py-2 text-sm transition-all duration-200 ${
                        isSelected
                          ? "border-delvara-ink bg-delvara-ink text-white"
                          : "border-delvara-border bg-delvara-bg text-delvara-charcoal hover:border-delvara-border-strong hover:bg-delvara-surface"
                      }`}
                    >
                      {treatment}
                    </button>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="rounded-lg border border-dashed border-delvara-border bg-delvara-bg/70 px-4 py-5 text-sm text-delvara-muted-text">
              Choose Aesthetics or Dental to see example treatments. Both
              categories are equally supported.
            </div>
          )}

          <div>
            <p className="mb-2 text-sm font-medium text-delvara-ink">
              Where in London are you based?
            </p>
            <div className="relative">
              <IconPin className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-delvara-muted-text" />
              <div className="input-field flex items-center pl-10 text-delvara-muted-text">
                e.g. N12 or Finchley
              </div>
            </div>
          </div>

          <StartSearchButton variant="primary" className="w-full">
            Continue enquiry
          </StartSearchButton>
        </div>
      </div>
    </div>
  );
}
