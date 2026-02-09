import Navigation from "@/components/Navigation";
import FAQSection from "@/components/FAQSection";
import { Button } from "@/components/ui/button";
import { Radar, Eye, Users, TrendingUp, BarChart3, Shield, Globe2, CheckCircle2, ArrowRight, MessageCircle } from "lucide-react";
import marketIntelligenceVisual from "@/assets/market-intelligence-visual.png";
import customerExperienceVisual from "@/assets/customer-experience-visual.png";
import visibilityVisual from "@/assets/visibility-visual.png";

const Companies = () => {
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
      <section className="bg-primary py-20 lg:py-28 relative">
        <div className="absolute top-6 right-6 flex items-center gap-2">
          <span className="text-primary-foreground/60 text-sm">Already a customer?</span>
          <a
            href="https://business.giraffy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 text-sm border border-primary-foreground/30 text-primary-foreground font-medium rounded-lg hover:bg-primary-foreground/10 transition-colors"
          >
            Log in
          </a>
        </div>
        <div className="container max-w-4xl mx-auto px-6 text-center">
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            See the Market Clearly.
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed mb-8">
            Stop guessing why you win or lose. Access the system of record for real time market movements, competitor pricing, and pre transaction consumer behaviour.
          </p>
          <a
            href="https://api.whatsapp.com/send/?phone=966536134229&text=Hi%2C+I%27m+interested+in+learning+more+about+Giraffy+Business&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors text-base"
          >
            <MessageCircle className="w-5 h-5" />
            Contact via WhatsApp
          </a>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 lg:py-20 bg-secondary">
        <div className="container max-w-4xl mx-auto px-6">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            <strong>Giraffy For Business</strong> helps telecoms, banks, insurers, and finance providers understand the market as it actually exists: how customers compare options, how competitors are positioned, and how decisions are made, all in one place.
          </p>
        </div>
      </section>

      {/* Why Companies Use Giraffy */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            The Decision Gap
          </h2>
          
          <p className="text-base text-foreground mb-6 leading-relaxed">
            Most providers rely on internal performance data and paid acquisition metrics, but these only show what happens after a customer chooses you. What is missing is visibility into the "Comparison Moment."
          </p>
          
          <div className="space-y-4 text-base text-foreground leading-relaxed">
            {[
              "Across markets, 30–60% of consumers compare financial products before committing to a purchase.",
              "Decisions are increasingly made before customers ever enter your funnel.",
              "Giraffy provides the missing layer of external intelligence needed to see the full market reality.",
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="w-7 h-7 rounded-full border border-foreground flex items-center justify-center flex-shrink-0 text-sm font-semibold mt-0.5">
                  {i + 1}
                </span>
                <span>{text}</span>
              </div>
            ))}
          </div>
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
              
              <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                Giraffy Radar monitors live deals across telecoms, banking, insurance, and finance, updating daily. This powers a structured view of the market, allowing companies to:
              </p>
              
              <ul className="list-disc list-inside space-y-2 mb-6 text-base text-foreground">
                {marketIntelFeatures.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={marketIntelligenceVisual} 
                  alt="Market Intelligence visualization showing data charts and analytics" 
                  className="w-full h-auto"
                />
              </div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide mt-3">Powered by Giraffy Radar</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Experience Section */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-accent/30 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground whitespace-nowrap">
                  Customer Experience &amp; Brand Insight
                </h2>
              </div>
              
              <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                Understanding performance isn't just about price or clicks. Giraffy helps companies understand how their brand and products are experienced at the moment of comparison, through:
              </p>
              
              <ul className="list-disc list-inside space-y-2 mb-6 text-base text-foreground">
                {customerInsights.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              
              <p className="text-base text-foreground font-medium">
                This reveals why customers choose one provider over another. Unlike surveys, this insight is based on what people actually do.
              </p>
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-lg lg:mt-16">
              <img 
                src={customerExperienceVisual} 
                alt="Customer experience visualization showing comparison behavior" 
                className="w-full h-auto"
              />
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
                <span className="w-2 h-2 rounded-full bg-foreground flex-shrink-0 mt-2" />
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
                <span className="w-2 h-2 rounded-full bg-foreground flex-shrink-0 mt-2" />
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
          
          <a
            href="https://api.whatsapp.com/send/?phone=966536134229&text=Hi%2C+I%27m+interested+in+learning+more+about+Giraffy+Business&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors text-lg"
          >
            <MessageCircle className="w-5 h-5" />
            Get in Touch via WhatsApp
          </a>
        </div>
      </section>

      <FAQSection faqs={[
        {
          question: "What is Giraffy for Business?",
          answer: "Giraffy for Business is a market intelligence and visibility platform designed for companies in the household finance sector. We provide banks, insurers, and telecom providers with a real time, external view of the market, helping teams understand how they are positioned against competitors at the exact moment a customer makes a decision.",
        },
        {
          question: "How is your market data collected?",
          answer: "We use our proprietary technology, Giraffy Radar, to scan and structure market data daily. Unlike platforms that rely on manual updates or partner provided spreadsheets, our technology monitors the market 24/7 to ensure that the pricing, terms, and availability we show are accurate and current across all regions we serve.",
        },
        {
          question: "Does Giraffy only show providers who are clients?",
          answer: "No. Our core value is market completeness. We show 100% of the relevant market deals regardless of whether a company uses our B2B tools or advertises with us. This neutral approach ensures that our data remains a reliable \"source of truth\" for both consumers and our business partners.",
        },
        {
          question: "What kind of insights can my team expect?",
          answer: "Beyond simple price tracking, Giraffy provides visibility into the \"Comparison Moment.\" We reveal how your brand and products are experienced relative to the full market, including brand sentiment indicators and drop off patterns. This helps product and pricing teams understand exactly why they are winning or losing market share before the transaction happens.",
        },
        {
          question: "How can we increase our visibility on the platform?",
          answer: "While we maintain a neutral market view, we offer optional sponsored placements and category specific listings. These allow providers to reach high intent, \"finance ready\" users who are actively comparing options. Performance is transparent and measurable, with options to pay based on outcomes rather than just impressions.",
        },
        {
          question: "Can we integrate Giraffy data into our own systems?",
          answer: "Yes. Giraffy is designed to be a shared source of truth across your organization. We offer various ways to access our intelligence layer, including our analytics dashboard and API options, so your product, pricing, and marketing teams can work from the same live market data.",
        },
        {
          question: "How do we get started?",
          answer: "Getting started is simple. You can request access or book a demo through our business portal. Our team will walk you through the platform capabilities and show you how Giraffy Radar can be tailored to your specific category and country requirements.",
        },
      ]} />

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
