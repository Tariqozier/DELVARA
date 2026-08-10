import type { Metadata } from "next";
import { LegalHoldingPage } from "@/components/LegalHoldingPage";

export const metadata: Metadata = {
  title: "Cookies",
  description: "Cookie information for the DELVARA website.",
};

const requiredPoints = [
  "Which cookies or similar technologies (if any) DELVARA sets on www.getdelvara.com.",
  "Whether analytics, advertising or preference tools are used and by which providers.",
  "Retention periods for each cookie category.",
  "How visitors can manage preferences and withdraw consent where required.",
  "Whether a cookie banner / preference centre is required under UK PECR for the final tooling set.",
] as const;

export default function CookiesPage() {
  return (
    <main>
      <LegalHoldingPage
        eyebrow="Legal"
        title="Cookies"
        intro="This page will explain how DELVARA uses cookies and similar technologies once the final analytics and preference tooling is confirmed. No misleading cookie claims are published here until that inventory is complete."
        requiredPoints={requiredPoints}
      />
    </main>
  );
}
