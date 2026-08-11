import Link from "next/link";
import { brand } from "@/lib/content";
import { contactEmails, mailtoHref } from "@/lib/contact";

const exploreLinks = [
  { href: "/treatments/aesthetics", label: "Aesthetic treatments" },
  { href: "/treatments/dental", label: "Dental treatments" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
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

const contactRows = [
  {
    label: "General enquiries",
    email: contactEmails.hello,
    href: mailtoHref("hello"),
  },
  {
    label: "Clinic partnerships",
    email: contactEmails.clinics,
    href: mailtoHref("clinics", {
      subject: "Clinic partnership enquiry — DELVARA",
    }),
  },
  {
    label: "Patient enquiry support",
    email: contactEmails.enquiries,
    href: mailtoHref("enquiries", {
      subject: "Patient enquiry support — DELVARA",
    }),
  },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-delvara-border bg-delvara-white">
      <div className="container-delvara section-pad !pb-12 !pt-16">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr_1fr_1.15fr]">
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
              <Link
                href="/contact"
                className="transition-colors hover:text-delvara-charcoal"
              >
                Contact
              </Link>
            </h2>
            <ul className="mt-4 space-y-4">
              {contactRows.map((row) => (
                <li key={row.label}>
                  <p className="text-xs tracking-wide text-delvara-muted-text">
                    {row.label}
                  </p>
                  <a
                    href={row.href}
                    className="mt-1 inline-block text-sm text-delvara-ink transition-colors hover:text-delvara-charcoal"
                  >
                    {row.email}
                  </a>
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
          <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-delvara-muted-text">
              © 2026 DELVARA. All rights reserved.
            </p>
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
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
      </div>
    </footer>
  );
}
