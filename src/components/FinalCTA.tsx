import { StartSearchButton } from "@/components/StartSearchButton";

export function FinalCTA() {
  return (
    <section
      className="section-pad bg-delvara-surface"
      aria-labelledby="final-cta-heading"
    >
      <div className="container-delvara">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="final-cta-heading"
            className="text-3xl font-medium tracking-tight text-delvara-ink sm:text-4xl"
          >
            Start with DELVARA.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-delvara-muted-text sm:text-lg">
            Tell us the dental or aesthetic service you&apos;re considering and
            take the first step towards an informed enquiry with a participating
            clinic in London.
          </p>
          <div className="mt-8 flex justify-center">
            <StartSearchButton variant="primary">
              Start your enquiry
            </StartSearchButton>
          </div>
        </div>
      </div>
    </section>
  );
}
