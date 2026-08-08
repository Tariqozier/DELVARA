"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { IconArrowRight, TreatmentIcon } from "@/components/icons";
import {
  featuredAestheticsTreatments,
  featuredDentalTreatments,
  type TreatmentCategory,
} from "@/lib/content";

export function TreatmentDiscovery() {
  const [category, setCategory] = useState<TreatmentCategory>("aesthetics");
  const tablistId = useId();
  const panelId = useId();

  const treatments =
    category === "dental"
      ? featuredDentalTreatments
      : featuredAestheticsTreatments;

  const exploreHref =
    category === "dental" ? "/treatments/dental" : "/treatments/aesthetics";
  const exploreLabel =
    category === "dental"
      ? "Explore all dental treatments"
      : "Explore all aesthetic treatments";

  const accentClass =
    category === "dental" ? "text-dental-deep" : "text-aesthetics-deep";
  const iconSurface =
    category === "dental"
      ? "border-dental/30 bg-dental-soft text-dental-deep"
      : "border-aesthetics/30 bg-aesthetics-soft text-aesthetics-deep";

  return (
    <section
      className="section-pad bg-delvara-white"
      aria-labelledby="treatments-heading"
    >
      <div className="container-delvara">
        <div className="max-w-2xl">
          <p className="eyebrow">Treatments</p>
          <h2
            id="treatments-heading"
            className="mt-4 text-3xl font-medium tracking-tight text-delvara-ink sm:text-4xl"
          >
            Explore what you&apos;re considering.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-delvara-muted-text sm:text-lg">
            Start with a treatment category and tell us a little about what
            you&apos;re looking for.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Treatment categories"
          id={tablistId}
          className="mt-10 grid gap-3 sm:grid-cols-2"
        >
          <button
            type="button"
            role="tab"
            id={`${tablistId}-aesthetics`}
            aria-selected={category === "aesthetics"}
            aria-controls={panelId}
            data-category="aesthetics"
            className="category-tab"
            onClick={() => setCategory("aesthetics")}
          >
            <span
              aria-hidden="true"
              className="h-2.5 w-2.5 rounded-full accent-dot-aesthetics"
            />
            Aesthetics
          </button>
          <button
            type="button"
            role="tab"
            id={`${tablistId}-dental`}
            aria-selected={category === "dental"}
            aria-controls={panelId}
            data-category="dental"
            className="category-tab"
            onClick={() => setCategory("dental")}
          >
            <span
              aria-hidden="true"
              className="h-2.5 w-2.5 rounded-full accent-dot-dental"
            />
            Dental
          </button>
        </div>

        <div
          role="tabpanel"
          id={panelId}
          aria-labelledby={`${tablistId}-${category}`}
          className="mt-8"
        >
          <ul
            key={category}
            className="category-panel-enter grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
          >
            {treatments.map((treatment) => (
              <li key={treatment.id}>
                <Link
                  href={exploreHref}
                  className="group flex h-full flex-col rounded-xl border border-delvara-border bg-delvara-bg p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-delvara-border-strong hover:bg-delvara-white hover:shadow-[0_12px_30px_rgb(23_45_46/0.06)] focus-visible:outline-offset-4"
                >
                  <span
                    className={`inline-flex h-11 w-11 items-center justify-center rounded-lg border ${iconSurface}`}
                  >
                    <TreatmentIcon name={treatment.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-medium text-delvara-ink">
                    {treatment.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-delvara-muted-text">
                    {treatment.description}
                  </p>
                  <span
                    className={`mt-5 inline-flex items-center gap-2 text-sm font-medium ${accentClass}`}
                  >
                    Enquire
                    <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Link
              href={exploreHref}
              className="inline-flex items-center gap-2 text-sm font-medium text-delvara-ink underline-offset-4 hover:underline"
            >
              {exploreLabel}
              <IconArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
