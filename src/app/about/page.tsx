import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about DELVARA — a London-focused treatment enquiry service for private dental and aesthetic care.",
};

export default function AboutPage() {
  return (
    <main>
      <PlaceholderPage
        eyebrow="About"
        title="Built for clearer private treatment decisions."
        description="DELVARA sits between people considering private dental or aesthetic treatment in London and participating clinics looking for relevant enquiries. The full about story is coming next."
      />
    </main>
  );
}
