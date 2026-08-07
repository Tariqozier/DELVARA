import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Cookies",
  description: "Cookie information for the DELVARA website.",
};

export default function CookiesPage() {
  return (
    <main>
      <PlaceholderPage
        eyebrow="Legal"
        title="Cookies"
        description="Cookie details and preference controls will be published here. A cookie banner has intentionally not been added in Phase 1."
      />
    </main>
  );
}
