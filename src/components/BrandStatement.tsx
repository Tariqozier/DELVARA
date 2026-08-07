import { brand } from "@/lib/content";

export function BrandStatement() {
  return (
    <section
      className="section-pad border-y border-delvara-border bg-delvara-bg"
      aria-labelledby="brand-statement-heading"
    >
      <div className="container-delvara">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">{brand.name}</p>
          <h2
            id="brand-statement-heading"
            className="mt-6 text-4xl font-medium tracking-tight text-delvara-ink sm:text-5xl lg:text-6xl"
          >
            Better choices.
            <span className="mt-2 block text-delvara-sage-deep">
              Better treatment.
            </span>
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-delvara-muted-text sm:text-lg">
            DELVARA exists to make the journey between considering private
            treatment and finding the right clinic simpler, clearer and more
            considered.
          </p>
        </div>
      </div>
    </section>
  );
}
