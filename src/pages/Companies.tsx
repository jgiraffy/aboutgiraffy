import Navigation from "@/components/Navigation";
import FAQSection from "@/components/FAQSection";
import { Button } from "@/components/ui/button";
import { Radar, Eye, Users, TrendingUp, BarChart3, Shield, Globe2, CheckCircle2, ArrowRight } from "lucide-react";
import marketIntelligenceVisual from "@/assets/market-intelligence-visual.png";
import customerExperienceVisual from "@/assets/customer-experience-visual.png";
import visibilityVisual from "@/assets/visibility-visual.png";

const Companies = () => {
  const struggles = [
    "How customers really compare options",
    "Where they win or lose at decision time",
    "How pricing, eligibility, and messaging affect outcomes",
    "How competitors move, and when",
  ];

  const marketIntelFeatures = [
    "See their products alongside every relevant competitor",
    "Track pricing, eligibility, and positioning changes",
    "Understand category level and provider level trends",
    "Analyse how markets evolve over time",
  ];

  const customerInsights = [
    "Real comparison behaviour",
    "Brand sentiment indicators",
    "Ratings and review signals",
    "Drop off and switching patterns",
  ];

  const visibilityFeatures = [
    "Increase visibility at decision time",
    "Reach finance ready users",
    "Generate high intent leads",
  ];

  const teamBenefits = [
    { team: "Product teams", benefit: "understand market fit and competitiveness" },
    { team: "Pricing teams", benefit: "track positioning and shifts" },
    { team: "Marketing teams", benefit: "improve visibility and efficiency" },
    { team: "Leadership teams", benefit: "gain a clear external market view" },
  ];

  const differentiators = [
    "Full market coverage, not a curated subset",
    "Daily updates via in house technology",
    "Pre decision insight, not just post conversion metrics",
    "Neutral, external perspective",
    "Longitudinal market history",
  ];

  const audiences = [
    "Telecom operators",
    "Retail and digital banks",
    "Insurers",
    "Consumer finance providers",
    "Fintech platforms",
  ];

  const useCases = [
    "Understand your market position",
    "Improve customer experience",
    "Increase qualified demand",
    "Make better pricing and product decisions",
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-primary py-20 lg:py-28">
        <div className="container max-w-4xl mx-auto px-6 text-center">
          <p className="text-accent font-semibold mb-4 tracking-wide uppercase text-sm">Giraffy for Business</p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            See the Market Clearly.
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed mb-8">
            Giraffy for Business is a market intelligence and visibility platform for companies operating in telecoms, banking, finance and insurance markets.
          </p>
          <a
            href="https://business.giraffy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors text-base"
          >
            Login
          </a>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container max-w-4xl mx-auto px-6">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            We help telecoms, banks, insurers, and finance providers understand the market as it actually exists: how customers compare options, how competitors are positioned, and how decisions are made, all in one place.
          </p>
        </div>
      </section>

      {/* Why Companies Use Giraffy */}
      <section className="py-16 lg:py-20 bg-secondary">
        <div className="container max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Why Companies Use Giraffy
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Household finance markets are complex, competitive, and constantly changing.
          </p>
          
          <p className="text-muted-foreground mb-4">Most companies rely on:</p>
          <ul className="text-muted-foreground mb-8 space-y-2 pl-6">
            <li className="list-disc">Internal performance data</li>
            <li className="list-disc">Paid acquisition metrics</li>
            <li className="list-disc">Fragmented competitor research</li>
          </ul>
          
          <p className="text-foreground font-semibold mb-6">
            What's missing is a clear, external view of the market before the transaction happens.
          </p>
          
          <div className="grid gap-3">
            {struggles.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-destructive text-xs">?</span>
                </div>
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
          
          <p className="text-primary font-semibold text-lg mt-8">
            Giraffy exists to provide that missing layer.
          </p>
        </div>
      </section>

      {/* Market Intelligence Section */}
      <section className="py-16 lg:py-20 bg-secondary">
        <div className="container max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-accent/30 flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Market Intelligence
                </h2>
              </div>
              
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-4">Powered by Giraffy Radar</p>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Giraffy Radar monitors live deals across telecoms, banking, insurance, and finance, updating daily. This powers a structured view of the market, allowing companies to:
              </p>
              
              <div className="grid gap-3 mb-6">
                {marketIntelFeatures.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              
              <p className="text-muted-foreground italic">
                This is not a snapshot. It's a living view of the market.
              </p>
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src={marketIntelligenceVisual} 
                alt="Market Intelligence visualization showing data charts and analytics" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Customer Experience Section */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="order-2 lg:order-1 rounded-xl overflow-hidden shadow-lg">
              <img 
                src={customerExperienceVisual} 
                alt="Customer experience visualization showing comparison behavior" 
                className="w-full h-auto"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-accent/30 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Customer Experience & Brand Insight
                </h2>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Understanding performance isn't just about price or clicks. Giraffy helps companies understand how their brand and products are experienced at the moment of comparison, through:
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {customerInsights.map((item, index) => (
                  <div key={index} className="bg-background rounded-lg p-4 border border-border">
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              
              <p className="text-foreground font-medium mb-4">
                This reveals why customers choose one provider over another, before conversion.
              </p>
              <p className="text-accent font-semibold">
                Unlike surveys, this insight is based on what people actually do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visibility Section */}
      <section className="py-16 lg:py-20 bg-secondary">
        <div className="container max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-accent/30 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Visibility & Lead Generation
                </h2>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Giraffy connects companies with customers when they are actively comparing options. Through clear listings, category presence, and optional sponsored placements, companies can:
              </p>
              
              <div className="grid gap-3 mb-6">
                {visibilityFeatures.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              
              <p className="text-muted-foreground">
                Performance is transparent and measurable, with options to pay based on outcomes, not impressions.
              </p>
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src={visibilityVisual} 
                alt="Visibility visualization showing spotlight and discovery" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Performance Tools Section */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-accent/30 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Performance & Growth Tools
            </h2>
          </div>
          
          <p className="text-muted-foreground mb-6">
            Giraffy for Business supports teams across the organisation:
          </p>
          
          <div className="grid gap-4 mb-6">
            {teamBenefits.map(({ team, benefit }, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-foreground">
                  <strong>{team}</strong> {benefit}
                </span>
              </div>
            ))}
          </div>
          
          <p className="text-primary font-semibold">
            Instead of siloed tools, Giraffy provides a shared source of truth.
          </p>
        </div>
      </section>

      {/* Complex Markets Section */}
      <section className="py-16 lg:py-20 bg-secondary">
        <div className="container max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-accent/30 flex items-center justify-center">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Built for Complex, Regulated Markets
            </h2>
          </div>
          
          <p className="text-muted-foreground mb-6">Giraffy is designed for markets where:</p>
          
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-secondary rounded-lg p-4 border border-border text-center">
              <span className="text-foreground">Rules differ by provider</span>
            </div>
            <div className="bg-secondary rounded-lg p-4 border border-border text-center">
              <span className="text-foreground">Eligibility matters</span>
            </div>
            <div className="bg-secondary rounded-lg p-4 border border-border text-center">
              <span className="text-foreground">Transparency is limited</span>
            </div>
            <div className="bg-secondary rounded-lg p-4 border border-border text-center">
              <span className="text-foreground">Data is fragmented</span>
            </div>
          </div>
          
          <p className="text-muted-foreground">
            We operate across multiple countries and categories, building a consistent intelligence layer that becomes more valuable over time.
          </p>
        </div>
      </section>

      {/* Why Different Section */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            Why Giraffy Is Different
          </h2>
          
          <div className="grid gap-4 mb-8">
            {differentiators.map((item, index) => (
              <div key={index} className="flex items-start gap-3 bg-secondary rounded-lg p-4 border border-border">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
          
          <p className="text-center text-primary font-semibold text-lg">
            Giraffy sits before the transaction, where real decisions are made.
          </p>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-16 lg:py-20 bg-secondary">
        <div className="container max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-accent/30 flex items-center justify-center">
              <Globe2 className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Who Giraffy Is For
            </h2>
          </div>
          
          <p className="text-muted-foreground mb-6">Giraffy for Business is used by:</p>
          
          <div className="flex flex-wrap gap-3 mb-8">
            {audiences.map((item, index) => (
              <span key={index} className="bg-background rounded-full px-4 py-2 text-foreground border border-border text-sm">
                {item}
              </span>
            ))}
          </div>
          
          <p className="text-muted-foreground">
            Any company that needs to understand, and compete in, household finance markets.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Get Started with Giraffy for Business
          </h2>
          
          <p className="text-primary-foreground/80 mb-4">Whether you want to:</p>
          
          <div className="grid sm:grid-cols-2 gap-3 mb-8 max-w-lg mx-auto text-left">
            {useCases.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/90 text-sm">{item}</span>
              </div>
            ))}
          </div>
          
          <p className="text-primary-foreground font-semibold text-lg mb-8">
            Giraffy gives you the clarity to act.
          </p>
          
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8">
            Request Access or Book a Demo
          </Button>
        </div>
      </section>

      <FAQSection />

      {/* Footer */}
      <section className="py-8 bg-secondary border-t border-border">
        <div className="container max-w-3xl mx-auto px-6 text-center">
          <p className="text-muted-foreground text-sm">
            Giraffy for Business is the external intelligence layer for household finance markets.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Companies;
