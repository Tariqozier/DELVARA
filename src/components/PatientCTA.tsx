import { StartSearchButton } from "@/components/StartSearchButton";

export function PatientCTA() {
  return (
    <section
      className="section-pad"
      aria-labelledby="patient-cta-heading"
    >
      <div className="container-delvara">
        <div className="relative overflow-hidden rounded-2xl border border-delvara-border bg-[linear-gradient(135deg,#eef2ed_0%,#f7f5ef_48%,#ffffff_100%)] px-6 py-12 sm:px-10 sm:py-16 lg:px-16">
          <div
            aria-hidden="true"
            className="absolute -top-20 -right-16 h-56 w-56 rounded-full bg-delvara-sage-soft/50 blur-2xl"
          />
          <div className="relative max-w-2xl">
            <h2
              id="patient-cta-heading"
              className="text-3xl font-medium tracking-tight text-delvara-ink sm:text-4xl"
            >
              Thinking about treatment?
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-delvara-muted-text sm:text-lg">
              Tell us what you&apos;re considering. It only takes a few minutes
              to get started.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <StartSearchButton variant="primary">
                Start your search
              </StartSearchButton>
              <p className="text-sm text-delvara-muted-text sm:ml-2">
                Free to enquire. No obligation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
