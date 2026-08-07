import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Dental Clinics",
  description:
    "Partner with DELVARA as a dental clinic to receive relevant private treatment enquiries across London.",
};

export default function DentalClinicsPage() {
  return (
    <main>
      <PlaceholderPage
        eyebrow="For Clinics · Dental"
        title="Dental clinic partnership."
        description="A full dental clinic page is coming next. DELVARA is designed to connect participating dental clinics with people across London who have actively expressed interest in private dental treatment."
        showEnquiryCta={false}
        primaryHref="/for-clinics"
        primaryLabel="View clinic options"
      />
    </main>
  );
}
