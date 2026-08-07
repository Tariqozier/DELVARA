import { Benefits } from "@/components/Benefits";
import { BrandStatement } from "@/components/BrandStatement";
import { ClinicsSection } from "@/components/ClinicsSection";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { LondonSection } from "@/components/LondonSection";
import { PatientCTA } from "@/components/PatientCTA";
import { TreatmentDiscovery } from "@/components/TreatmentDiscovery";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TreatmentDiscovery />
      <HowItWorks />
      <Benefits />
      <PatientCTA />
      <LondonSection />
      <ClinicsSection />
      <BrandStatement />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
