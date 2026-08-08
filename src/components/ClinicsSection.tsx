import Link from "next/link";
import { ClinicPathCard } from "@/components/ClinicPathCard";
import { IconArrowRight } from "@/components/icons";
import { clinicPaths } from "@/lib/content";

export function ClinicsSection() {
  return (
    <section
      className="section-pad border-y border-delvara-border bg-delvara-bg"
      aria-labelledby="clinics-heading"
    >
      <div className="container-delvara">
        <div className="max-w-3xl">
          <p className="eyebrow">For Clinics</p>
          <h2
            id="clinics-heading"
            className="mt-4 text-3xl font-medium tracking-tight text-delvara-ink sm:text-4xl"
          >
            Turn treatment interest into patient enquiries.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-delvara-muted-text sm:text-lg">
            Acquire treatment-specific prospective patient enquiries across
            London — with useful context before the first conversation.
          </p>
        </div>

        <ul className="mt-10 grid gap-5 lg:grid-cols-2">
          {clinicPaths.map((path) => (
            <li key={path.id} className="rounded-2xl bg-delvara-ink p-1">
              <ClinicPathCard
                title={path.title}
                description={path.description}
                cta={path.cta}
                href={path.href}
                accent={path.accent}
                tone="dark"
              />
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col gap-3 border-t border-delvara-border pt-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="text-lg font-medium text-delvara-ink">
              Need the system around acquisition too?
            </p>
            <p className="mt-2 text-sm leading-relaxed text-delvara-muted-text sm:text-base">
              Explore websites, funnels, marketing, automation and custom
              development through DELVARA Growth Studio.
            </p>
          </div>
          <Link
            href="/for-clinics/growth-studio"
            className="btn btn-secondary shrink-0"
          >
            Explore Growth Studio
            <IconArrowRight className="icon-arrow h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
