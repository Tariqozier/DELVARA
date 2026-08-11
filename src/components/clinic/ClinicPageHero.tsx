import Link from "next/link";
import { IconArrowRight } from "@/components/icons";
import { clinicPartnershipMailto } from "@/lib/contact";

type ClinicPageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  accent: "dental" | "aesthetics";
};

const accentStyles = {
  dental: {
    wash: "from-dental-soft/80 via-delvara-bg to-delvara-bg",
    dot: "bg-dental",
    eyebrow: "text-dental-deep",
    pad: "section-pad",
  },
  aesthetics: {
    wash: "from-aesthetics-soft via-delvara-bg to-aesthetics-peach/15",
    dot: "bg-aesthetics-peach",
    eyebrow: "text-aesthetics-deep",
    pad: "py-14 md:py-16 lg:py-[4.5rem]",
  },
} as const;

export function ClinicPageHero({
  eyebrow,
  title,
  description,
  accent,
}: ClinicPageHeroProps) {
  const styles = accentStyles[accent];

  return (
    <section
      className={`relative overflow-hidden bg-gradient-to-b ${styles.wash} ${styles.pad}`}
      aria-labelledby="clinic-hero-heading"
    >
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full opacity-40 blur-3xl ${
          accent === "dental" ? "bg-dental/25" : "bg-aesthetics/30"
        }`}
      />
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -bottom-16 left-0 h-56 w-56 rounded-full opacity-30 blur-3xl ${
          accent === "dental" ? "bg-dental-soft" : "bg-aesthetics-peach/40"
        }`}
      />

      <div className="container-delvara relative">
        <div className="mx-auto max-w-3xl">
          <p className={`eyebrow ${styles.eyebrow}`}>
            <span
              aria-hidden="true"
              className={`mr-2.5 inline-block h-1.5 w-1.5 rounded-full ${styles.dot}`}
            />
            {eyebrow}
          </p>
          <h1
            id="clinic-hero-heading"
            className="mt-4 text-4xl font-medium tracking-tight text-delvara-ink sm:text-5xl lg:text-[3.1rem] lg:leading-[1.12]"
          >
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-delvara-muted-text sm:text-lg">
            {description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={clinicPartnershipMailto}
              className="btn btn-primary group"
            >
              Talk to DELVARA
              <IconArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <Link href="/how-it-works" className="btn btn-secondary">
              See how it works
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
