import Link from "next/link";

type LegalHoldingPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  requiredPoints: readonly string[];
  contactNote?: string;
};

/**
 * Polished interim legal page that does not invent policy text
 * or use unfinished/prototype language.
 */
export function LegalHoldingPage({
  eyebrow,
  title,
  intro,
  requiredPoints,
  contactNote = "For urgent privacy or legal questions while this page is being completed, contact partnerships@getdelvara.com.",
}: LegalHoldingPageProps) {
  return (
    <section className="section-pad">
      <div className="container-delvara">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-4 text-4xl font-medium tracking-tight text-delvara-ink sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-delvara-muted-text sm:text-lg">
            {intro}
          </p>

          <div className="mt-10 rounded-2xl border border-delvara-border bg-delvara-white px-6 py-8 sm:px-8">
            <h2 className="text-lg font-medium text-delvara-ink">
              Information required to complete this page accurately
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-delvara-muted-text sm:text-base">
              {requiredPoints.map((point) => (
                <li key={point} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-delvara-ink"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-delvara-charcoal">
              {contactNote}
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/" className="btn btn-primary">
              Back to homepage
            </Link>
            <Link href="/how-it-works" className="btn btn-secondary">
              See how it works
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
