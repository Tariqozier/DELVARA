import type { Metadata } from "next";
import Link from "next/link";
import { ClinicPathCard } from "@/components/ClinicPathCard";
import { IconArrowRight } from "@/components/icons";
import { clinicPaths } from "@/lib/content";
import { clinicPartnershipMailto } from "@/lib/contact";

export const metadata: Metadata = {
  title: "For Clinics",
  description:
    "Choose your DELVARA path — aesthetic clinics, dental clinics, or Growth Studio for digital infrastructure.",
};

export default function ForClinicsPage() {
  return (
    <main>
      <section className="flex min-h-[calc(100svh-5rem)] items-center section-pad !py-12 md:!py-16">
        <div className="container-delvara w-full">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">For Clinics</p>
            <h1 className="mt-4 text-4xl font-medium tracking-tight text-delvara-ink sm:text-5xl">
              Choose your path.
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-delvara-muted-text">
              Patient acquisition for aesthetic and dental clinics — or the
              digital system around growth.
            </p>
          </div>

          <ul className="mx-auto mt-10 grid max-w-5xl gap-5 lg:grid-cols-2">
            {clinicPaths.map((path) => (
              <li key={path.id}>
                <ClinicPathCard
                  title={path.title}
                  description={path.description}
                  cta={path.cta}
                  href={path.href}
                  accent={path.accent}
                  tone="light"
                />
              </li>
            ))}
          </ul>

          <div className="mx-auto mt-10 max-w-xl text-center">
            <p className="text-sm text-delvara-muted-text sm:text-base">
              Looking for websites, marketing or custom development?
            </p>
            <Link
              href="/for-clinics/growth-studio"
              className="mt-3 inline-flex items-center gap-2 text-base font-medium text-delvara-ink transition-all duration-200 hover:gap-3"
            >
              Explore DELVARA Growth Studio
              <IconArrowRight className="h-4 w-4" />
            </Link>
            <div className="mt-8">
              <a
                href={clinicPartnershipMailto}
                className="btn btn-primary group"
              >
                Partner with DELVARA
                <IconArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
