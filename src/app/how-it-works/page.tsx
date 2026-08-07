import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "Learn how DELVARA helps people across London enquire about private dental or aesthetic treatment.",
};

export default function HowItWorksPage() {
  return (
    <main>
      <PlaceholderPage
        eyebrow="How it works"
        title="From interest to a relevant clinic conversation."
        description="This page will expand on the DELVARA enquiry journey for both dental and aesthetic treatment. The homepage already outlines the core steps."
      />
    </main>
  );
}
