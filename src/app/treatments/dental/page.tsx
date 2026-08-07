import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";
import { dentalTaxonomy } from "@/lib/content";

export const metadata: Metadata = {
  title: "Dental Treatments",
  description:
    "Enquire about private dental treatments in London with DELVARA — from cosmetic dentistry to implants and emergency care.",
};

export default function DentalTreatmentsPage() {
  return (
    <main>
      <PlaceholderPage
        eyebrow="Dental"
        title="Dental treatment enquiries in London."
        description="A full dental treatments experience is coming next. For now, start an enquiry to tell DELVARA what you're considering."
      />
      <section className="pb-20">
        <div className="container-delvara">
          <div className="mx-auto max-w-3xl rounded-xl border border-delvara-border bg-delvara-white p-6 sm:p-8">
            <h2 className="text-lg font-medium text-delvara-ink">
              Planned dental taxonomy
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {dentalTaxonomy.map((group) => (
                <div key={group.group}>
                  <h3 className="text-sm font-medium tracking-wide text-dental-deep uppercase">
                    {group.group}
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {group.treatments.map((treatment) => (
                      <li
                        key={treatment}
                        className="text-sm text-delvara-muted-text"
                      >
                        {treatment}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
