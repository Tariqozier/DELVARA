import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy information for DELVARA users and clinic partners.",
};

export default function PrivacyPage() {
  return (
    <main>
      <PlaceholderPage
        eyebrow="Legal"
        title="Privacy Policy"
        description="A complete privacy policy will be published here. DELVARA will explain how enquiry details for aesthetic and dental treatment are handled, and when information may be shared with a relevant participating clinic."
      />
    </main>
  );
}
