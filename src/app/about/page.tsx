import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about DELVARA — a treatment discovery and clinic matching service for private care.",
};

export default function AboutPage() {
  return (
    <main>
      <PlaceholderPage
        eyebrow="About"
        title="Built for clearer private treatment decisions."
        description="DELVARA sits between people considering private treatment and selected clinics looking for qualified enquiries. The full about story is coming next."
      />
    </main>
  );
}
