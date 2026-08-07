import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Treatments",
  description:
    "Explore private treatment categories with DELVARA and find clinics that match what you're considering.",
};

export default function TreatmentsPage() {
  return (
    <main>
      <PlaceholderPage
        eyebrow="Treatments"
        title="Explore private treatment options."
        description="A fuller treatments experience is coming next. For now, start a search to tell DELVARA what you're considering."
      />
    </main>
  );
}
