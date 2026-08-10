"use client";

import { useId, useState } from "react";
import { IconChevron } from "@/components/icons";
import { faqs } from "@/lib/content";

export function FAQ() {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      className="section-pad bg-delvara-white"
      aria-labelledby="faq-heading"
    >
      <div className="container-delvara">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          <div>
            <p className="eyebrow">FAQ</p>
            <h2
              id="faq-heading"
              className="mt-4 text-3xl font-medium tracking-tight text-delvara-ink sm:text-4xl"
            >
              Questions, answered clearly.
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-delvara-muted-text">
              Straightforward answers about exploring private aesthetic and
              dental services across London — without overclaiming.
            </p>
          </div>

          <div className="divide-y divide-delvara-border border-y border-delvara-border">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const buttonId = `${baseId}-button-${index}`;
              const panelId = `${baseId}-panel-${index}`;

              return (
                <div key={faq.question}>
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-delvara-ink"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() =>
                        setOpenIndex((current) =>
                          current === index ? null : index,
                        )
                      }
                    >
                      <span className="text-base font-medium text-delvara-ink sm:text-lg">
                        {faq.question}
                      </span>
                      <IconChevron
                        className={`h-5 w-5 shrink-0 text-delvara-muted-text transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    hidden={!isOpen}
                    className={isOpen ? "pb-5" : undefined}
                  >
                    {isOpen ? (
                      <p className="max-w-2xl pr-8 text-sm leading-relaxed text-delvara-muted-text sm:text-base">
                        {faq.answer}
                      </p>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
