import type { Metadata } from "next";
import { LegalHoldingPage } from "@/components/LegalHoldingPage";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy information for DELVARA users and clinic partners.",
};

const requiredPoints = [
  "Legal name and contact details of the data controller for DELVARA.",
  "Exact purposes for processing enquiry data and the lawful bases relied upon.",
  "How enquiry data is stored (including Google Workspace / Google Sheets) and how long it is retained.",
  "When and why enquiry information may be shared with participating clinics.",
  "International transfer details if Google infrastructure processes data outside the UK.",
  "Individual rights (access, rectification, erasure, restriction, objection) and how to exercise them.",
  "Security measures and the process for reporting a concern to DELVARA or the ICO.",
] as const;

export default function PrivacyPage() {
  return (
    <main>
      <LegalHoldingPage
        eyebrow="Legal"
        title="Privacy Policy"
        intro="DELVARA takes privacy seriously. A complete privacy notice will be published here once the business, data-controller and enquiry-processing details are finalised. That notice must accurately reflect the live Google Workspace / Google Sheets / participating-clinic data flow."
        requiredPoints={requiredPoints}
      />
    </main>
  );
}
