type Service = {
  title: string;
  description: string;
};

type ClinicServicesGridProps = {
  services: readonly Service[];
  accent?: "dental" | "aesthetics" | "neutral";
};

const accentStyles = {
  dental: {
    card: "rounded-lg border-dental/20 bg-delvara-white hover:border-dental/40",
    marker: "bg-dental",
  },
  aesthetics: {
    card: "rounded-2xl border-aesthetics/20 bg-delvara-white hover:border-aesthetics/40",
    marker: "rounded-full bg-aesthetics-peach",
  },
  neutral: {
    card: "rounded-lg border-delvara-border bg-delvara-white hover:border-delvara-border-strong",
    marker: "bg-delvara-ink",
  },
} as const;

export function ClinicServicesGrid({
  services,
  accent = "neutral",
}: ClinicServicesGridProps) {
  const styles = accentStyles[accent];

  return (
    <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <li
          key={service.title}
          className={`group border p-6 transition-colors duration-200 sm:p-7 ${styles.card}`}
        >
          <span
            aria-hidden="true"
            className={`inline-block h-1 w-8 ${styles.marker}`}
          />
          <h3 className="mt-5 text-lg font-medium text-delvara-ink">
            {service.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-delvara-muted-text sm:text-base">
            {service.description}
          </p>
        </li>
      ))}
    </ul>
  );
}
