import { Benefits } from "@/components/Benefits";
import { BrandStatement } from "@/components/BrandStatement";
import { ClinicsSection } from "@/components/ClinicsSection";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { PatientCTA } from "@/components/PatientCTA";
import { TreatmentGrid } from "@/components/TreatmentGrid";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TreatmentGrid />
      <HowItWorks />
      <Benefits />
      <PatientCTA />
      <ClinicsSection />
      <BrandStatement />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
