import type { Metadata } from "next";
import Link from "next/link";
import { StartSearchButton } from "@/components/StartSearchButton";
import { IconArrowRight } from "@/components/icons";
import {
  clinicPartnershipMailto,
  contactEmails,
  mailtoHref,
} from "@/lib/contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact DELVARA for treatment enquiries, clinic partnerships, or general questions.",
};

const routes = [
  {
    eyebrow: "Patients",
    title: "Treatment enquiries",
    description:
      "Use the DELVARA enquiry journey for the clearest next step — or email the team directly.",
    email: contactEmails.enquiries,
    mailto: mailtoHref("enquiries", {
      subject: "Patient enquiry support — DELVARA",
    }),
    primary: "enquiry" as const,
  },
  {
    eyebrow: "Clinics",
    title: "Clinic partnerships",
    description:
      "Discuss patient acquisition, aesthetic or dental pathways, or Growth Studio.",
    email: contactEmails.clinics,
    mailto: clinicPartnershipMailto,
    primary: "clinics" as const,
  },
  {
    eyebrow: "General",
    title: "General enquiries",
    description: "Press, introductions, and anything that isn’t a treatment enquiry.",
    email: contactEmails.hello,
    mailto: mailtoHref("hello", {
      subject: "General enquiry — DELVARA",
    }),
    primary: "hello" as const,
  },
] as const;

export default function ContactPage() {
  return (
    <main>
      <section className="section-pad">
        <div className="container-delvara">
          <div className="mx-auto max-w-3xl">
            <p className="eyebrow">Contact</p>
            <h1 className="mt-4 text-4xl font-medium tracking-tight text-delvara-ink sm:text-5xl">
              How to reach DELVARA.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-delvara-muted-text sm:text-lg">
              Choose the route that fits — so your message reaches the right team.
            </p>
          </div>

          <ul className="mx-auto mt-12 grid max-w-5xl gap-5 lg:grid-cols-3">
            {routes.map((route) => (
              <li
                key={route.title}
                className="flex flex-col rounded-2xl border border-delvara-border bg-delvara-white px-6 py-7 sm:px-7"
              >
                <p className="text-xs font-medium tracking-[0.16em] text-delvara-muted-text uppercase">
                  {route.eyebrow}
                </p>
                <h2 className="mt-3 text-xl font-medium tracking-tight text-delvara-ink">
                  {route.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-delvara-muted-text">
                  {route.description}
                </p>
                <a
                  href={route.mailto}
                  className="mt-5 text-sm font-medium text-delvara-ink underline-offset-2 transition-colors hover:underline"
                >
                  {route.email}
                </a>
                <div className="mt-6">
                  {route.primary === "enquiry" ? (
                    <StartSearchButton variant="primary" className="w-full sm:w-auto">
                      Start your enquiry
                      <IconArrowRight className="h-4 w-4" />
                    </StartSearchButton>
                  ) : (
                    <a href={route.mailto} className="btn btn-primary w-full sm:w-auto">
                      {route.primary === "clinics"
                        ? "Partner with DELVARA"
                        : "Email DELVARA"}
                      <IconArrowRight className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <div className="mx-auto mt-12 max-w-3xl">
            <Link
              href="/for-clinics"
              className="text-sm font-medium text-delvara-ink underline-offset-2 transition-colors hover:underline"
            >
              Explore clinic partnerships
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
