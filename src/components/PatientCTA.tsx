import { StartSearchButton } from "@/components/StartSearchButton";

export function PatientCTA() {
  return (
    <section className="section-pad" aria-labelledby="patient-cta-heading">
      <div className="container-delvara">
        <div className="relative overflow-hidden rounded-2xl border border-delvara-border bg-[linear-gradient(135deg,#f1eee8_0%,#f8f5f0_48%,#ffffff_100%)] px-6 py-12 sm:px-10 sm:py-16 lg:px-16">
          <div
            aria-hidden="true"
            className="absolute -top-24 -right-16 h-56 w-56 rounded-full bg-dental-soft/50 blur-2xl"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-24 -left-10 h-56 w-56 rounded-full bg-aesthetics-soft/70 blur-2xl"
          />
          <div className="relative max-w-2xl">
            <h2
              id="patient-cta-heading"
              className="text-3xl font-medium tracking-tight text-delvara-ink sm:text-4xl"
            >
              Thinking about a private service in London?
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-delvara-muted-text sm:text-lg">
              Tell us whether you&apos;re exploring dental or aesthetic
              services. It only takes a few minutes to submit an informed
              enquiry.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <StartSearchButton variant="primary">
                Start your enquiry
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
