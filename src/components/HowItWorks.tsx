import { howItWorksSteps } from "@/lib/content";

export function HowItWorks() {
  return (
    <section
      className="section-pad border-y border-delvara-border bg-delvara-bg"
      aria-labelledby="how-heading"
    >
      <div className="container-delvara">
        <div className="max-w-2xl">
          <p className="eyebrow">How it works</p>
          <h2
            id="how-heading"
            className="mt-4 text-3xl font-medium tracking-tight text-delvara-ink sm:text-4xl"
          >
            A clearer way to enquire about private treatment.
          </h2>
        </div>

        <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {howItWorksSteps.map((step) => (
            <li key={step.number} className="relative flex flex-col">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-delvara-border bg-delvara-white text-sm font-medium tracking-wide text-delvara-ink">
                {step.number}
              </span>
              <h3 className="mt-6 text-lg font-medium text-delvara-ink sm:text-xl">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-delvara-muted-text sm:text-base">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
