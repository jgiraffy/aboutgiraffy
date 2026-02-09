import Navigation from "@/components/Navigation";
import HeroSection from "@/components/about/HeroSection";
import IntroSection from "@/components/about/IntroSection";
import TechnologySection from "@/components/about/TechnologySection";
import DifferentiatorsSection from "@/components/about/DifferentiatorsSection";
import VisionSection from "@/components/about/VisionSection";
import TeamSection from "@/components/about/TeamSection";
import AdvisorsSection from "@/components/about/AdvisorsSection";
import ValuesSection from "@/components/about/ValuesSection";
import FAQSection from "@/components/FAQSection";


const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <IntroSection />
      <TechnologySection />
      <DifferentiatorsSection />
      <VisionSection />
      <TeamSection />
      <AdvisorsSection />
      <ValuesSection />
      <FAQSection />
    </main>
  );
};

export default Index;
