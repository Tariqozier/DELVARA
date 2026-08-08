import type { ReactNode } from "react";

type Standard = {
  title: string;
  description: string;
};

type PartnerStandardsProps = {
  title: string;
  intro: string;
  standards: readonly Standard[];
  accent: "dental" | "aesthetics";
  regulatorNote?: ReactNode;
  verificationSteps?: readonly string[];
};

const accentStyles = {
  dental: {
    section: "bg-delvara-surface",
    card: "border-dental/25 bg-delvara-white",
    marker: "border-dental/30 bg-dental-soft text-dental-deep",
    heading: "text-dental-deep",
    flow: "border-dental/30 bg-dental-soft/50 text-dental-deep",
  },
  aesthetics: {
    section: "bg-gradient-to-b from-aesthetics-soft/35 to-delvara-bg",
    card: "rounded-none border-0 border-l-2 border-aesthetics/45 bg-transparent pl-5",
    marker:
      "rounded-full border-aesthetics/40 bg-delvara-white text-aesthetics-deep shadow-[0_0_0_4px_rgb(245_237_235/0.9)]",
    heading: "text-aesthetics-deep",
    flow: "border-aesthetics/30 bg-aesthetics-soft text-aesthetics-deep",
  },
} as const;

export function PartnerStandards({
  title,
  intro,
  standards,
  accent,
  regulatorNote,
  verificationSteps,
}: PartnerStandardsProps) {
  const styles = accentStyles[accent];

  return (
    <section
      className={`section-pad ${styles.section}`}
      aria-labelledby="partner-standards-heading"
    >
      <div className="container-delvara">
        <div className="max-w-3xl">
          <p className="eyebrow">Who we work with</p>
          <h2
            id="partner-standards-heading"
            className="mt-4 text-3xl font-medium tracking-tight text-delvara-ink sm:text-4xl"
          >
            {title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-delvara-muted-text sm:text-lg">
            {intro}
          </p>
          {regulatorNote ? (
            <div className="mt-6 space-y-3 text-sm leading-relaxed text-delvara-muted-text sm:text-base">
              {regulatorNote}
            </div>
          ) : null}
        </div>

        {verificationSteps && verificationSteps.length > 0 ? (
          <ol className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {verificationSteps.map((step, index) => (
              <li
                key={step}
                className={`rounded-lg border px-4 py-4 text-sm font-medium ${styles.flow}`}
              >
                <span className="block text-[0.65rem] tracking-[0.14em] uppercase opacity-70">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="mt-2 block text-delvara-ink">{step}</span>
              </li>
            ))}
          </ol>
        ) : null}

        <ul
          className={`mt-12 grid gap-5 sm:grid-cols-2 ${
            accent === "aesthetics" ? "gap-y-8 sm:gap-x-10" : ""
          }`}
        >
          {standards.map((standard, index) => (
            <li
              key={standard.title}
              className={`${
                accent === "dental"
                  ? `border p-6 sm:p-7 rounded-lg ${styles.card}`
                  : `py-1 ${styles.card}`
              }`}
            >
              <div className="flex items-start gap-4">
                <span
                  aria-hidden="true"
                  className={`inline-flex h-9 w-9 shrink-0 items-center justify-center border text-xs font-medium tracking-wide ${styles.marker}`}
                >
                  {accent === "aesthetics" ? "✓" : String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3
                    className={`text-lg font-medium text-delvara-ink ${styles.heading}`}
                  >
                    {standard.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-delvara-muted-text sm:text-base">
                    {standard.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-delvara-muted-text">
          These checks may form part of our clinic review framework. They do not
          replace professional regulation, clinical assessment or a
          patient&apos;s own decision-making. DELVARA does not claim regulator
          approval for clinics and does not guarantee clinical outcomes.
        </p>
      </div>
    </section>
  );
}
