import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "Learn how DELVARA helps you explore private treatment options and connect with relevant clinics.",
};

export default function HowItWorksPage() {
  return (
    <main>
      <PlaceholderPage
        eyebrow="How it works"
        title="A clearer path from interest to introduction."
        description="This page will expand on the DELVARA journey in detail. The homepage already outlines the core steps."
      />
    </main>
  );
}
