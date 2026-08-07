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
            A simpler way to find the right clinic.
          </h2>
        </div>

        <div className="relative mt-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-8 right-[16%] left-[16%] hidden h-px bg-delvara-border lg:block"
          />
          <ol className="grid gap-0 lg:grid-cols-3">
            {howItWorksSteps.map((step, index) => (
              <li
                key={step.number}
                className={`relative flex flex-col border-delvara-border py-8 lg:border-0 lg:px-6 lg:py-0 ${
                  index > 0 ? "border-t lg:border-t-0" : ""
                }`}
              >
                <span className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-delvara-border bg-delvara-white text-sm font-medium tracking-wide text-delvara-ink shadow-[0_0_0_6px_var(--color-delvara-bg)]">
                  {step.number}
                </span>
                <h3 className="mt-6 text-xl font-medium text-delvara-ink">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-delvara-muted-text sm:text-base">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
