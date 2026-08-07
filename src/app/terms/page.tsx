import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of use for the DELVARA website and services.",
};

export default function TermsPage() {
  return (
    <main>
      <PlaceholderPage
        eyebrow="Legal"
        title="Terms of use"
        description="Full terms will be published here before launch. DELVARA is a treatment discovery and clinic matching service and does not provide medical advice, diagnosis or treatment."
      />
    </main>
  );
}
