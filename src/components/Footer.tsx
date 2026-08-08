import Link from "next/link";
import { brand } from "@/lib/content";

const exploreLinks = [
  { href: "/treatments/aesthetics", label: "Aesthetic treatments" },
  { href: "/treatments/dental", label: "Dental treatments" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/about", label: "About" },
] as const;

const clinicLinks = [
  { href: "/for-clinics", label: "Partner with DELVARA" },
  { href: "/for-clinics/aesthetics", label: "Aesthetic clinics" },
  { href: "/for-clinics/dental", label: "Dental clinics" },
  { href: "/for-clinics/growth-studio", label: "Growth Studio" },
] as const;

const legalLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/cookies", label: "Cookies" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-delvara-border bg-delvara-white">
      <div className="container-delvara section-pad !pb-12 !pt-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <p className="text-[1.15rem] font-semibold tracking-[0.18em] text-delvara-ink">
              {brand.name}
            </p>
            <p className="mt-4 text-lg text-delvara-charcoal">
              {brand.tagline}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-delvara-muted-text">
              Helping people explore private aesthetic and dental services in
              London — and helping participating clinics receive clearer
              enquiries.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-medium tracking-wide text-delvara-ink">
              Explore
            </h2>
            <ul className="mt-4 space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-delvara-muted-text transition-colors hover:text-delvara-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-medium tracking-wide text-delvara-ink">
              For Clinics
            </h2>
            <ul className="mt-4 space-y-3">
              {clinicLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-delvara-muted-text transition-colors hover:text-delvara-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-medium tracking-wide text-delvara-ink">
              Legal
            </h2>
            <ul className="mt-4 space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-delvara-muted-text transition-colors hover:text-delvara-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-delvara-border pt-8">
          <p className="max-w-3xl text-sm leading-relaxed text-delvara-muted-text">
            DELVARA is a treatment discovery and clinic matching service and
            does not provide medical advice, diagnosis or treatment. Enquiries
            accepted from across London.
          </p>
          <p className="mt-5 text-sm text-delvara-muted-text">
            © 2026 DELVARA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
