import type { Metadata } from "next";
import { LegalHoldingPage } from "@/components/LegalHoldingPage";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of use for the DELVARA website and services.",
};

const requiredPoints = [
  "Legal entity name, registered address and governing law for the website terms.",
  "Clear description of DELVARA’s role as a discovery / enquiry service (not a clinic).",
  "Rules for website use, acceptable use and intellectual property.",
  "Limitation of liability and disclaimer that DELVARA does not provide medical advice, diagnosis or treatment.",
  "Clinic partnership terms overview or link to separate partner terms if needed.",
  "How terms may be updated and how disputes are handled.",
] as const;

export default function TermsPage() {
  return (
    <main>
      <LegalHoldingPage
        eyebrow="Legal"
        title="Terms of use"
        intro="DELVARA’s full website terms will be published here once the operating entity details and service boundaries are confirmed. Until then, please treat DELVARA as a treatment discovery and enquiry service — not a provider of medical advice, diagnosis or treatment."
        requiredPoints={requiredPoints}
      />
    </main>
  );
}
