import Navigation from "@/components/Navigation";
import FAQSection from "@/components/FAQSection";
import { Button } from "@/components/ui/button";
import { Radar, Eye, Users, TrendingUp, BarChart3, Shield, Globe2, CheckCircle2, ArrowRight, MessageCircle, Mail } from "lucide-react";
import marketIntelligenceVisual from "@/assets/market-intelligence-visual.png";
import customerExperienceVisual from "@/assets/customer-experience-visual.png";
import visibilityVisual from "@/assets/visibility-visual.png";

const Companies = () => {
  const marketIntelFeatures = [
    "See their products alongside every relevant competitor",
    "Track pricing, eligibility, and positioning changes",
    "Understand category level and provider level trends",
    "See how markets change over time",
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
        <div className="container max-w-4xl mx-auto px-6 text-center">
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            See the Market Clearly.
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed mb-8">
            Stop guessing why you win or lose. Access a clear view of market movements, competitor pricing, and how customers compare options before they choose.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://api.whatsapp.com/send/?phone=966536134229&text=Hi%2C+I%27m+interested+in+learning+more+about+Giraffy+Business&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors text-base"
            >
              <MessageCircle className="w-5 h-5" />
              Contact via WhatsApp
            </a>
            <a
              href="mailto:hello@giraffy.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-primary-foreground/30 text-primary-foreground font-semibold rounded-lg hover:bg-primary-foreground/10 transition-colors text-base"
            >
              <Mail className="w-5 h-5" />
              Contact via Email
            </a>
          </div>
        </div>
        <div className="absolute bottom-6 right-6 flex items-center gap-2">
          <span className="text-primary-foreground/60 text-sm">Already a customer?</span>
          <a
            href="https://business.giraffy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary-foreground font-medium underline hover:text-primary-foreground/80 transition-colors"
          >
            Log in
          </a>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 lg:py-20 bg-secondary">
        <div className="container max-w-5xl mx-auto px-6">
          <p className="text-lg md:text-xl text-foreground leading-relaxed">
            <strong>Giraffy For Business</strong> helps telecoms, banks, insurers, and finance providers understand the market as it actually exists: how customers compare options, how competitors are positioned, and how decisions are made, all in one place.
          </p>
        </div>
      </section>

      {/* Why Companies Use Giraffy */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            The Decision Gap
          </h2>
          
          <p className="text-base text-foreground mb-6 leading-relaxed">
            Most providers rely on internal performance data and paid acquisition metrics, but these only show what happens after a customer chooses you. What is missing is visibility into the "Comparison Moment."
          </p>
          
          <p className="text-base text-foreground mb-4 leading-relaxed">
            Across markets, 30–60% of consumers compare financial products before committing to a purchase.
          </p>
          <p className="text-base text-foreground mb-4 leading-relaxed">
            Decisions are increasingly made before customers ever enter your funnel.
          </p>
          <p className="text-base text-foreground leading-relaxed">
            Giraffy provides the missing layer of external intelligence needed to see the full market reality.
          </p>
        </div>
      </section>

      {/* Market Intelligence Section */}
      <section className="py-16 lg:py-20 bg-secondary">
        <div className="container max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Market Intelligence
              </h2>
              
              <p className="text-base text-foreground mb-6 leading-relaxed">
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
              
            </div>
          </div>
        </div>
      </section>

      {/* Customer Experience Section */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground whitespace-nowrap mb-6">
                Customer Experience &amp; Brand Insight
              </h2>
              
              <p className="text-base text-foreground mb-6 leading-relaxed">
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
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Decision-Time Visibility
              </h2>
              
              <p className="text-base text-foreground mb-6 leading-relaxed">
                Giraffy shows your brand to customers when they are actively comparing options.
              </p>
              
              <p className="text-base text-foreground mb-6 leading-relaxed">
                Each product category includes one sponsored position. This keeps comparisons clear and fair, with no auctions and no clutter.
              </p>
              
              <p className="text-base text-foreground mb-6 leading-relaxed">
                Sponsored placements typically drive around 20% more engagement on the placement itself. Providers also see an additional uplift of around 20% across their organic listings, as increased visibility improves overall brand consideration.
              </p>
              
              <p className="text-base text-foreground leading-relaxed">
                This means more demand at the point of decision, not just more traffic.
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

      {/* Who Giraffy Is For Section */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Who Giraffy Is For
          </h2>
          
          <p className="text-base text-foreground mb-6 leading-relaxed">
            Giraffy for Business is used by telecom operators, banks, insurers, fintechs, and consumer finance providers that operate in complex, competitive markets.
          </p>
          
          <p className="text-base text-foreground mb-6 leading-relaxed">
            Inside these organisations, Giraffy supports teams across the business:
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
            Instead of separate tools and partial data, teams work from a shared view of the market.
          </p>
        </div>
      </section>

      {/* Complex Markets Section */}

      {/* Built for Complex Markets Section */}
      <section className="py-16 lg:py-20 bg-secondary">
        <div className="container max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Built for Complex Markets
          </h2>
          
          <p className="text-base text-foreground mb-6 leading-relaxed">
            Giraffy is built for competitive, regulated markets where rules differ by provider, eligibility matters, and data is fragmented.
          </p>
          
          <p className="text-base text-foreground mb-6 leading-relaxed">
            We track the full market, not a selected subset, with daily updates using in house technology. This gives companies a neutral, external view of how markets change over time.
          </p>
          
          <p className="text-base text-foreground leading-relaxed">
            By focusing on how customers compare options before they choose, Giraffy sits before the transaction, where real decisions are made.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Get Started with Giraffy for Business
          </h2>
          
          <p className="text-primary-foreground/80 mb-4 max-w-lg mx-auto text-left">Whether you want to:</p>
          
          <div className="grid gap-3 mb-8 max-w-lg mx-auto text-left">
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
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://api.whatsapp.com/send/?phone=966536134229&text=Hi%2C+I%27m+interested+in+learning+more+about+Giraffy+Business&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors text-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Get in Touch via WhatsApp
            </a>
            <a
              href="mailto:hello@giraffy.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-primary-foreground/30 text-primary-foreground font-semibold rounded-lg hover:bg-primary-foreground/10 transition-colors text-lg"
            >
              <Mail className="w-5 h-5" />
              Contact via Email
            </a>
          </div>
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
