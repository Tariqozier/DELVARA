type ClinicGrowthTreatmentsProps = {
  accent: "dental" | "aesthetics";
  items: readonly { name: string }[];
};

const accentStyles = {
  aesthetics: {
    list: "grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3",
    tile:
      "border-aesthetics/30 bg-delvara-white hover:-translate-y-0.5 hover:border-aesthetics/55 hover:bg-aesthetics-soft/50",
  },
  dental: {
    list: "grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3",
    tile:
      "border-dental/30 bg-delvara-white hover:-translate-y-0.5 hover:border-dental/55 hover:bg-dental-soft/50",
  },
} as const;

export function ClinicGrowthTreatments({
  accent,
  items,
}: ClinicGrowthTreatmentsProps) {
  const styles = accentStyles[accent];

  return (
    <ul className={`mt-8 ${styles.list}`} aria-label="Services you can grow">
      {items.map((item) => (
        <li key={item.name}>
          <div
            className={`flex min-h-[3.75rem] items-center justify-center rounded-xl border px-4 py-3.5 text-center text-sm font-medium leading-snug text-delvara-ink transition-[transform,border-color,background-color,box-shadow] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] sm:min-h-[4.25rem] sm:text-[0.9375rem] ${styles.tile}`}
          >
            {item.name}
          </div>
        </li>
      ))}
    </ul>
  );
}
