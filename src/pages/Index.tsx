import Navigation from "@/components/Navigation";
import HeroSection from "@/components/about/HeroSection";
import IntroSection from "@/components/about/IntroSection";
import TechnologySection from "@/components/about/TechnologySection";
import DifferentiatorsSection from "@/components/about/DifferentiatorsSection";
import VisionSection from "@/components/about/VisionSection";
import TeamSection from "@/components/about/TeamSection";
import AdvisorsSection from "@/components/about/AdvisorsSection";
import ValuesSection from "@/components/about/ValuesSection";
import FlowDivider from "@/components/about/FlowDivider";


const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <FlowDivider variant="light" />
      <IntroSection />
      <FlowDivider variant="accent" />
      <TechnologySection />
      <FlowDivider variant="light" />
      <DifferentiatorsSection />
      <FlowDivider variant="dark" />
      <VisionSection />
      <FlowDivider variant="light" />
      <TeamSection />
      <FlowDivider variant="accent" />
      <AdvisorsSection />
      <FlowDivider variant="dark" />
      <ValuesSection />
    </main>
  );
};

export default Index;
