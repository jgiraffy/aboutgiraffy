import Navigation from "@/components/Navigation";
import FAQSection from "@/components/FAQSection";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const Investor = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-primary py-16 lg:py-24">
        <div className="container max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            Building the Infrastructure Layer for Household Finance
          </h1>
          <p className="text-primary-foreground/80 mb-3">
            Join the Giraffy Journey:
          </p>
          <a
            href="https://typeform.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors text-lg"
          >
            Register Your Interest
          </a>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container max-w-4xl mx-auto px-6">
          <p className="text-lg">
              Giraffy is building the system of record for household financial markets. We create structured and continuously updated views of finance across mobile, banking, and insurance, starting with the most complex markets and scaling globally. Our focus is not traffic or commissions, it is coverage, accuracy, and intelligence.
            </p>
        </div>
      </section>

      {/* The Market Reality */}
      <section className="py-16 lg:py-20 bg-secondary">
        <div className="container max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            The Market Reality
          </h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Household finance is one of the largest and most recurring consumer markets in the world, yet it has no neutral, global data layer.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">What exists today:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-muted-foreground">•</span>
                    <span>Fragmented comparison sites</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-muted-foreground">•</span>
                    <span>Pay to play rankings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-muted-foreground">•</span>
                    <span>Incomplete product coverage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-muted-foreground">•</span>
                    <span>Limited visibility into real decision behaviour</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">As a result:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-muted-foreground">•</span>
                    <span>Consumers make decisions on partial information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-muted-foreground">•</span>
                    <span>Providers operate without full market insight</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-muted-foreground">•</span>
                    <span>Regulators and policymakers lack market level visibility</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <p className="text-foreground font-semibold text-lg mt-8">
              The market lacks infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Why Now */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            Why Now
          </h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              As AI systems and Large Language Models (LLMs) become the primary interface for decision making, the value shifts from distribution to the underlying data.
            </p>
            <p className="text-foreground font-medium">
              AI systems do not generate truth; they retrieve it. In this new era, markets without a reliable source of truth will produce unreliable outcomes.
            </p>
            <p>
              Giraffy provides the structured, retrieval grade data required for AI to navigate the world's most valuable and least structured financial datasets.
            </p>
          </div>
        </div>
      </section>

      {/* The Giraffy Approach */}
      <section className="py-16 lg:py-20 bg-secondary">
        <div className="container max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            The Giraffy Approach
          </h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              We build full market visibility first. By tracking 100% of live deals and structuring products, pricing, and eligibility consistently, we create a compounding system. This is a cycle where coverage builds trust, usage generates behavioral data, and data produces intelligence.
            </p>
            <p>
              Each new country strengthens the intelligence layer across all existing markets, allowing Giraffy to scale by adding truth rather than just adding users.
            </p>
          </div>
        </div>
      </section>

      {/* The Infrastructure Layer */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            The Infrastructure Moat
          </h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>Over time, Giraffy becomes:</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>A trusted reference for consumers</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <Link to="/companies" className="text-primary hover:underline">A market intelligence platform for providers</Link>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>A retrieval grade data source for AI systems</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>A longitudinal record of how household finance markets evolve</span>
              </li>
            </ul>
            <p className="text-foreground font-medium mt-6">
              Once established, this layer becomes difficult to replicate and increasingly valuable with scale.
            </p>
          </div>
        </div>
      </section>


      {/* What We're Building & Join the Journey */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-8">
            What We're Building
          </h2>
          
          <div className="space-y-6 text-primary-foreground/90 leading-relaxed mb-12">
            <p className="text-lg">
              We're building a long term infrastructure play in a massive, recurring market. We're selectively bringing on investors who share that view.
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span>Global coverage across fragmented and underserved markets</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span>A neutral, trusted data layer for household finance</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span>An intelligence platform built on real market behaviour</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span>Long term defensibility through completeness and history</span>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <p className="text-primary-foreground/80 mb-6">
              Follow our progress, be notified when we open our next round, or learn more about the opportunity.
            </p>
            <a
              href="https://typeform.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors text-lg"
            >
              Register Interest
            </a>
          </div>
        </div>
      </section>

      <FAQSection faqs={[
        {
          question: "How is Giraffy's data defensible compared to search engines or AI?",
          answer: "Search engines index the web, but they do not structure complex financial eligibility or track daily pricing shifts at scale. Giraffy creates a proprietary \"Ground Truth\" dataset that combines live market pricing with unique consumer signals. By capturing how users interact with and compare deals in real time, we build a behavioral data moat and a historical record that cannot be scraped or bought, creating a deep competitive advantage as the market evolves.",
        },
        {
          question: "How is this a dual revenue stream if the platform is free for consumers?",
          answer: "We do not charge consumers because their participation is what generates our most valuable data. Our revenue is entirely B2B driven, split between two high value streams. First, we sell our market intelligence and analytics software to providers who need an external view of the market. Second, we offer targeted, high intent visibility through sponsored placements for providers looking to reach \"finance ready\" users. We monetize the data and the access, rather than the consumer.",
        },
        {
          question: "What is the expansion strategy for new territories?",
          answer: "Giraffy began in Saudi Arabia to solve a personal challenge with opaque financial data, but we quickly identified a massive opportunity across 40+ global markets. Our strategy is two fold. In fragmented or underserved markets, we establish ourselves as the primary destination for clarity. In mature markets with established comparison sites, we do not compete for traffic; instead, we become the essential data and infrastructure layer that those systems and AI platforms rely on to function accurately.",
        },
      ]} />
    </main>
  );
};

export default Investor;
