"use client";

import { useId, useState } from "react";
import { IconCheck, IconPin } from "@/components/icons";
import { useSearch } from "@/components/SearchProvider";
import {
  heroAestheticsTreatments,
  heroDentalTreatments,
  type TreatmentCategory,
} from "@/lib/content";
import {
  MAX_ENQUIRY_TREATMENTS,
  toggleEnquiryTreatment,
} from "@/lib/enquiryContext";

export function HeroDiscoveryPanel() {
  const { openSearch } = useSearch();
  const [category, setCategory] = useState<TreatmentCategory | null>(null);
  const [treatments, setTreatments] = useState<string[]>([]);
  const [location, setLocation] = useState("");
  const treatmentLimitId = useId();
  const locationId = useId();

  const treatmentOptions =
    category === "dental"
      ? heroDentalTreatments
      : category === "aesthetics"
        ? heroAestheticsTreatments
        : [];

  const atTreatmentLimit = treatments.length >= MAX_ENQUIRY_TREATMENTS;

  function selectCategory(next: TreatmentCategory) {
    setCategory(next);
    setTreatments([]);
  }

  function toggleTreatment(option: string) {
    setTreatments((current) => toggleEnquiryTreatment(current, option));
  }

  function handleContinue() {
    if (!category) {
      openSearch();
      return;
    }

    openSearch({
      category,
      ...(treatments.length > 0 ? { treatments } : {}),
      ...(location.trim() ? { location: location.trim() } : {}),
    });
  }

  return (
    <div className="reveal relative w-full min-w-0 lg:justify-self-end">
      <div
        aria-hidden="true"
        className="absolute -inset-3 rounded-[1.5rem] bg-[linear-gradient(145deg,rgb(23_45_46/0.04),transparent_50%,rgb(169_133_152/0.06))] sm:-inset-4"
      />
      <div className="relative overflow-hidden rounded-[1.15rem] border border-delvara-border bg-delvara-white shadow-[0_18px_50px_rgb(23_45_46/0.08)]">
        <div className="border-b border-delvara-border px-5 py-4 sm:px-6">
          <p className="text-[0.7rem] font-medium tracking-[0.16em] text-delvara-muted-text uppercase">
            DELVARA
          </p>
          <p className="mt-1 text-base font-medium text-delvara-ink">
            Start your treatment enquiry
          </p>
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
                Treatments you&apos;re considering
              </p>
              <p
                id={treatmentLimitId}
                className="mt-1 text-sm text-delvara-muted-text"
                aria-live="polite"
              >
                {atTreatmentLimit
                  ? "Maximum of 3 selected. Deselect one to choose another."
                  : "Choose up to 3."}
              </p>
              <div
                className="mt-3 flex max-h-40 flex-wrap gap-2 overflow-y-auto pr-1"
                role="group"
                aria-describedby={treatmentLimitId}
              >
                {treatmentOptions.map((treatment) => {
                  const isSelected = treatments.includes(treatment);
                  const isDisabled = atTreatmentLimit && !isSelected;

                  return (
                    <button
                      key={treatment}
                      type="button"
                      className="choice-chip gap-1.5 px-3 py-2"
                      data-category={category}
                      aria-pressed={isSelected}
                      aria-disabled={isDisabled || undefined}
                      disabled={isDisabled}
                      onClick={() => toggleTreatment(treatment)}
                    >
                      {isSelected ? (
                        <IconCheck
                          className="h-3.5 w-3.5 shrink-0"
                          aria-hidden="true"
                        />
                      ) : null}
                      <span>{treatment}</span>
                      <span className="sr-only">
                        {isSelected
                          ? ", selected"
                          : isDisabled
                            ? ", unavailable — maximum of 3 treatments selected"
                            : ", not selected"}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="rounded-lg border border-dashed border-delvara-border bg-delvara-bg/70 px-4 py-5 text-sm text-delvara-muted-text">
              Choose Aesthetics or Dental to see treatments.
            </div>
          )}

          <div>
            <label
              htmlFor={locationId}
              className="mb-2 block text-sm font-medium text-delvara-ink"
            >
              Where in London are you based?
            </label>
            <div className="relative">
              <IconPin className="pointer-events-none absolute top-1/2 left-3 z-[1] h-4 w-4 -translate-y-1/2 text-delvara-muted-text" />
              <input
                id={locationId}
                name="hero-location"
                type="text"
                autoComplete="address-level2"
                inputMode="text"
                className="input-field pl-10"
                placeholder="e.g. N12 or Finchley"
                value={location}
                onChange={(event) => setLocation(event.target.value)}
              />
            </div>
          </div>

          <button
            type="button"
            className="btn btn-primary w-full"
            onClick={handleContinue}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
