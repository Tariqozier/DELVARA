import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Aesthetic Clinics",
  description:
    "Partner with DELVARA as an aesthetic clinic to receive relevant private treatment enquiries across London.",
};

export default function AestheticClinicsPage() {
  return (
    <main>
      <PlaceholderPage
        eyebrow="For Clinics · Aesthetics"
        title="Aesthetic clinic partnership."
        description="A full aesthetic clinic page is coming next. DELVARA is designed to connect participating aesthetic clinics with people across London who have actively expressed interest in private aesthetic treatment."
        showEnquiryCta={false}
        primaryHref="/for-clinics"
        primaryLabel="View clinic options"
      />
    </main>
  );
}
