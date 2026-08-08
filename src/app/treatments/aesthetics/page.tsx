import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { StartSearchButton } from "@/components/StartSearchButton";
import { TreatmentCatalog } from "@/components/treatments/TreatmentCatalog";
import { IconArrowRight } from "@/components/icons";
import { aestheticsTreatmentGroups } from "@/lib/treatments";

export const metadata: Metadata = {
  title: "Aesthetic Treatments",
  description:
    "Explore private aesthetic services in London — then start an enquiry with participating clinics through DELVARA.",
};

export default function AestheticsTreatmentsPage() {
  return (
    <main>
      <section className="section-pad pb-10">
        <div className="container-delvara">
          <ScrollReveal className="max-w-3xl">
            <p className="eyebrow text-aesthetics-deep">Aesthetic services</p>
            <h1 className="mt-4 text-4xl font-medium tracking-tight text-delvara-ink sm:text-5xl">
              Explore private aesthetic services in London.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-delvara-muted-text sm:text-lg">
              Learn about the type of service you&apos;re considering, then
              start an enquiry when you&apos;re ready.
            </p>
            <div className="mt-8">
              <StartSearchButton variant="primary" category="aesthetics">
                Start your enquiry
              </StartSearchButton>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-pad border-y border-delvara-border bg-delvara-white pt-10">
        <div className="container-delvara">
          <nav
            aria-label="Aesthetic categories"
            className="mb-12 flex flex-wrap gap-2"
          >
            {aestheticsTreatmentGroups.map((group) => (
              <a
                key={group.group}
                href={`#group-${group.group.replace(/\s+/g, "-").toLowerCase()}`}
                className="rounded-full border border-aesthetics/25 bg-aesthetics-soft px-3.5 py-2 text-xs font-medium tracking-wide text-aesthetics-deep transition-colors duration-200 hover:bg-aesthetics-soft/80"
              >
                {group.group}
              </a>
            ))}
          </nav>

          <TreatmentCatalog
            groups={aestheticsTreatmentGroups}
            accent="aesthetics"
          />

          <div className="mt-16 rounded-3xl border border-aesthetics/25 bg-aesthetics-soft/60 px-6 py-8 sm:px-8">
            <h2 className="text-2xl font-medium text-delvara-ink">
              Not sure what to choose?
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-delvara-muted-text sm:text-base">
              You don&apos;t need to diagnose the concern yourself. If you&apos;re
              unsure which service category best describes what you&apos;re looking
              for, select &ldquo;Not sure yet&rdquo; when starting your enquiry.
            </p>
            <p className="mt-3 text-sm text-delvara-muted-text">
              Clinical advice and suitability remain with the clinic.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <StartSearchButton variant="primary" category="aesthetics">
                Start an enquiry
              </StartSearchButton>
              <Link href="/treatments/dental" className="btn btn-secondary">
                Dental services
                <IconArrowRight className="icon-arrow h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
