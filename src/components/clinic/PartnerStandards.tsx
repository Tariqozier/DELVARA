type Standard = {
  title: string;
  description: string;
};

type PartnerStandardsProps = {
  title: string;
  intro: string;
  standards: readonly Standard[];
  accent: "dental" | "aesthetics";
};

const accentStyles = {
  dental: {
    section: "bg-delvara-surface",
    card: "border-dental/25 bg-delvara-white",
    marker: "border-dental/30 bg-dental-soft text-dental-deep",
    heading: "text-dental-deep",
  },
  aesthetics: {
    section: "bg-aesthetics-soft/40",
    card: "rounded-2xl border-aesthetics/25 bg-delvara-white",
    marker: "rounded-full border-aesthetics/30 bg-aesthetics-soft text-aesthetics-deep",
    heading: "text-aesthetics-deep",
  },
} as const;

export function PartnerStandards({
  title,
  intro,
  standards,
  accent,
}: PartnerStandardsProps) {
  const styles = accentStyles[accent];

  return (
    <section
      className={`section-pad ${styles.section}`}
      aria-labelledby="partner-standards-heading"
    >
      <div className="container-delvara">
        <div className="max-w-3xl">
          <p className="eyebrow">Partner standards</p>
          <h2
            id="partner-standards-heading"
            className="mt-4 text-3xl font-medium tracking-tight text-delvara-ink sm:text-4xl"
          >
            {title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-delvara-muted-text sm:text-lg">
            {intro}
          </p>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2">
          {standards.map((standard, index) => (
            <li
              key={standard.title}
              className={`border p-6 sm:p-7 ${styles.card} ${
                accent === "dental" ? "rounded-lg" : ""
              }`}
            >
              <div className="flex items-start gap-4">
                <span
                  aria-hidden="true"
                  className={`inline-flex h-9 w-9 shrink-0 items-center justify-center border text-xs font-medium tracking-wide ${styles.marker}`}
                >
                  {String(index + 1).padStart(2, "0")}
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
          patient&apos;s own decision-making. DELVARA does not guarantee
          clinical outcomes.
        </p>
      </div>
    </section>
  );
}
