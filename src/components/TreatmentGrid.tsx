import Link from "next/link";
import { IconArrowRight, TreatmentIcon } from "@/components/icons";
import { treatments } from "@/lib/content";

export function TreatmentGrid() {
  return (
    <section className="section-pad bg-delvara-white" aria-labelledby="treatments-heading">
      <div className="container-delvara">
        <div className="max-w-2xl">
          <p className="eyebrow">Treatments</p>
          <h2
            id="treatments-heading"
            className="mt-4 text-3xl font-medium tracking-tight text-delvara-ink sm:text-4xl"
          >
            Start with what you&apos;re considering.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-delvara-muted-text sm:text-lg">
            DELVARA helps people explore private treatment options and connect
            with clinics that may be relevant to their needs and preferences.
          </p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {treatments.map((treatment) => (
            <li key={treatment.id}>
              <Link
                href="/treatments"
                className="group flex h-full flex-col rounded-xl border border-delvara-border bg-delvara-bg p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-delvara-sage hover:bg-delvara-white hover:shadow-[0_12px_30px_rgb(16_42_43/0.06)] focus-visible:outline-offset-4"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-delvara-border bg-delvara-white text-delvara-ink transition-colors group-hover:border-delvara-sage-soft group-hover:bg-delvara-surface">
                  <TreatmentIcon name={treatment.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-medium text-delvara-ink">
                  {treatment.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-delvara-muted-text">
                  {treatment.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-delvara-sage-deep">
                  Explore
                  <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
