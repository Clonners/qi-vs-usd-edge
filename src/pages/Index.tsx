import { HeroSection } from "@/components/HeroSection";
import { AdvantagesSection } from "@/components/AdvantagesSection";
import { ComparisonSection } from "@/components/ComparisonSection";
import { EnergyExplainer } from "@/components/EnergyExplainer";
import { CTASection } from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AdvantagesSection />
      <ComparisonSection />
      <EnergyExplainer />
      <CTASection />
    </div>
  );
};

export default Index;
