import { StartSearchButton } from "@/components/StartSearchButton";
import { londonAreas } from "@/lib/content";

export function LondonSection() {
  return (
    <section
      className="section-pad border-y border-delvara-border bg-delvara-white"
      aria-labelledby="london-heading"
    >
      <div className="container-delvara">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Across London</p>
          <h2
            id="london-heading"
            className="mt-4 text-3xl font-medium tracking-tight text-delvara-ink sm:text-4xl"
          >
            Private treatment enquiries across London.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-delvara-muted-text sm:text-lg">
            Tell us what you&apos;re considering and where you&apos;re based.
            DELVARA helps connect enquiries with relevant participating clinics
            across London.
          </p>

          <ul className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
            {londonAreas.map((area) => (
              <li
                key={area}
                className="rounded-lg border border-delvara-border bg-delvara-bg px-4 py-2.5 text-sm font-medium tracking-wide text-delvara-ink"
              >
                {area}
              </li>
            ))}
          </ul>

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
