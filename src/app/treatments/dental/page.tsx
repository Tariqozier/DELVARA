import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { StartSearchButton } from "@/components/StartSearchButton";
import { TreatmentCatalog } from "@/components/treatments/TreatmentCatalog";
import { IconArrowRight } from "@/components/icons";
import { dentalTreatmentGroups } from "@/lib/treatments";

export const metadata: Metadata = {
  title: "Dental Treatments",
  description:
    "Explore private dental services in London — then start an enquiry with participating clinics through DELVARA.",
};

export default function DentalTreatmentsPage() {
  return (
    <main>
      <section className="section-pad pb-10">
        <div className="container-delvara">
          <ScrollReveal className="max-w-3xl">
            <p className="eyebrow text-dental-deep">Dental services</p>
            <h1 className="mt-4 text-4xl font-medium tracking-tight text-delvara-ink sm:text-5xl">
              Explore private dental services in London.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-delvara-muted-text sm:text-lg">
              Learn about the type of service you&apos;re considering, then
              start an enquiry when you&apos;re ready.
            </p>
            <div className="mt-8">
              <StartSearchButton variant="primary" category="dental">
                Start your enquiry
              </StartSearchButton>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-pad border-y border-delvara-border bg-delvara-white pt-10">
        <div className="container-delvara">
          <nav
            aria-label="Dental categories"
            className="mb-12 flex flex-wrap gap-2"
          >
            {dentalTreatmentGroups.map((group) => (
              <a
                key={group.group}
                href={`#group-${group.group.replace(/\s+/g, "-").toLowerCase()}`}
                className="rounded-md border border-dental/25 bg-dental-soft/50 px-3 py-2 text-xs font-medium tracking-wide text-dental-deep transition-colors duration-200 hover:bg-dental-soft"
              >
                {group.group}
              </a>
            ))}
          </nav>

          <TreatmentCatalog groups={dentalTreatmentGroups} accent="dental" />

          <div className="mt-16 rounded-2xl border border-dental/25 bg-dental-soft/40 px-6 py-8 sm:px-8">
            <h2 className="text-2xl font-medium text-delvara-ink">
              Not sure what to choose?
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-delvara-muted-text sm:text-base">
              You don&apos;t need to diagnose the problem yourself. If you&apos;re
              unsure which service category best describes what you&apos;re looking
              for, select &ldquo;Not sure yet&rdquo; when starting your enquiry.
            </p>
            <p className="mt-3 text-sm text-delvara-muted-text">
              Clinical diagnosis remains with the dental professional.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <StartSearchButton variant="primary" category="dental">
                Start an enquiry
              </StartSearchButton>
              <Link href="/treatments/aesthetics" className="btn btn-secondary">
                Aesthetic services
                <IconArrowRight className="icon-arrow h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
