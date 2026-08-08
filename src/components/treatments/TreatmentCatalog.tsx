import { StartSearchButton } from "@/components/StartSearchButton";
import type { TreatmentGroup } from "@/lib/treatments";

type TreatmentCatalogProps = {
  groups: TreatmentGroup[];
  accent: "dental" | "aesthetics";
};

export function TreatmentCatalog({ groups, accent }: TreatmentCatalogProps) {
  const isDental = accent === "dental";

  return (
    <div className="space-y-16">
      {groups.map((group) => (
        <section
          key={group.group}
          aria-labelledby={`group-${group.group.replace(/\s+/g, "-").toLowerCase()}`}
        >
          <div className="flex items-end justify-between gap-4 border-b border-delvara-border pb-4">
            <h2
              id={`group-${group.group.replace(/\s+/g, "-").toLowerCase()}`}
              className={`text-sm font-medium tracking-[0.16em] uppercase ${
                isDental ? "text-dental-deep" : "text-aesthetics-deep"
              }`}
            >
              {group.group}
            </h2>
          </div>

          <ul className="mt-6 divide-y divide-delvara-border">
            {group.treatments.map((treatment) => (
              <li
                key={treatment.name}
                className="grid gap-4 py-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-end md:gap-8"
              >
                <div>
                  <h3 className="text-xl font-medium text-delvara-ink">
                    {treatment.name}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-delvara-muted-text sm:text-base">
                    {treatment.description}
                  </p>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-delvara-charcoal/80">
                    {treatment.reasons}
                  </p>
                </div>
                <StartSearchButton
                  variant="secondary"
                  className="justify-self-start md:justify-self-end"
                >
                  Start an enquiry
                </StartSearchButton>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
