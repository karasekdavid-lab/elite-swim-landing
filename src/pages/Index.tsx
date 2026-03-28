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
      <a href="https://swimpros.com/resources" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/40 underline hover:text-primary-foreground/60 transition-colors text-sm mb-4 inline-block">Free Resources For Swim Parents</a>
      <p>© 2026 Swimpros. All rights reserved. | Tenerife, Spain</p>
    </footer>
  </div>
);

export default Index;
