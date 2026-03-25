import HeroSection from "@/components/landing/HeroSection";
import ProofStrip from "@/components/landing/ProofStrip";
import AftermovieSection from "@/components/landing/AftermovieSection";
import PillarsSection from "@/components/landing/PillarsSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import FormSection from "@/components/landing/FormSection";
import CoachesSection from "@/components/landing/CoachesSection";
import CampsSection from "@/components/landing/CampsSection";
import FinalCTA from "@/components/landing/FinalCTA";

const Index = () => (
  <div className="min-h-screen">
    <HeroSection />
    <ProofStrip />
    <AftermovieSection />
    <PillarsSection />
    <TestimonialsSection />
    <FormSection />
    <CoachesSection />
    <CampsSection />
    <FinalCTA />
    <footer className="bg-surface-darker px-5 py-8 text-center text-xs text-primary-foreground/20">
      © 2026 SwimPros. All rights reserved. | Tenerife, Spain
    </footer>
  </div>
);

export default Index;
