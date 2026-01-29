import HeroSection from "@/components/about/HeroSection";
import IntroSection from "@/components/about/IntroSection";
import WhySection from "@/components/about/WhySection";
import WhatSection from "@/components/about/WhatSection";
import TechnologySection from "@/components/about/TechnologySection";
import DifferentiatorsSection from "@/components/about/DifferentiatorsSection";
import VisionSection from "@/components/about/VisionSection";
import TeamSection from "@/components/about/TeamSection";
import AdvisorsSection from "@/components/about/AdvisorsSection";
import ValuesSection from "@/components/about/ValuesSection";
import FooterSection from "@/components/about/FooterSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <IntroSection />
      <WhySection />
      <WhatSection />
      <TechnologySection />
      <DifferentiatorsSection />
      <VisionSection />
      <TeamSection />
      <AdvisorsSection />
      <ValuesSection />
      <FooterSection />
    </main>
  );
};

export default Index;
