import Navigation from "@/components/Navigation";
import { Check } from "lucide-react";

const Investor = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-primary py-16 lg:py-24">
        <div className="container max-w-4xl mx-auto px-6 text-center">
          <p className="text-primary-foreground/80 text-sm font-medium tracking-wide uppercase mb-4">
            Giraffy for Investors
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            Building the Infrastructure Layer for Household Finance
          </h1>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container max-w-4xl mx-auto px-6">
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-lg">
              Giraffy is building the system of record for household financial markets.
            </p>
            <p>
              We create complete, structured, and continuously updated views of household finance across mobile, internet, banking, loans, and insurance — starting with the most complex and opaque markets, and scaling globally.
            </p>
            <div className="bg-secondary/50 rounded-lg p-6 border border-border">
              <p className="text-foreground font-medium">
                Our focus is not traffic or commissions.
              </p>
              <p className="text-foreground font-medium">
                It is coverage, accuracy, and intelligence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Market Reality */}
      <section className="py-16 lg:py-20 bg-secondary/30">
        <div className="container max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            The Market Reality
          </h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Household finance is one of the largest and most recurring consumer markets in the world — yet it has no neutral, global data layer.
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
                    <span>Pay-to-play rankings</span>
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
                    <span>Regulators and policymakers lack market-level visibility</span>
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
              AI systems and large language models are rapidly becoming a primary interface for discovery, comparison, and decision-making.
            </p>
            <p className="text-foreground font-medium">
              These systems do not generate truth — they retrieve it.
            </p>
            <p>
              As AI adoption increases, the value shifts from distribution to trusted underlying data. Markets without a reliable source of truth will produce unreliable outcomes.
            </p>
            <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
              <p className="text-foreground">
                Household finance is one of the most valuable — and least structured — datasets still missing a neutral reference layer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Giraffy Approach */}
      <section className="py-16 lg:py-20 bg-secondary/30">
        <div className="container max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            The Giraffy Approach
          </h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-lg font-medium text-foreground">
              Giraffy builds full-market visibility first.
            </p>
            
            <div className="space-y-3">
              <p className="font-medium text-foreground">We:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span>Track 100% of live deals across markets</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span>Structure products, pricing, and eligibility consistently</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span>Update data daily using in-house technology</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span>Capture real comparison and decision behaviour</span>
                </li>
              </ul>
            </div>

            <div className="bg-background rounded-lg p-6 border border-border mt-8">
              <p className="font-medium text-foreground mb-4">This creates a compounding system:</p>
              <p className="text-primary font-semibold">
                Coverage → Trust → Usage → Behavioural Data → Intelligence
              </p>
              <p className="mt-4 text-sm">
                Each new country strengthens the intelligence layer across all existing markets.
              </p>
            </div>
            
            <p className="text-foreground font-medium">
              Giraffy scales by adding truth, not by adding users alone.
            </p>
          </div>
        </div>
      </section>

      {/* The Infrastructure Layer */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            The Infrastructure Layer
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
                <span>A market intelligence platform for providers</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>A retrieval-grade data source for AI systems</span>
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
              We're building a long-term infrastructure play in a massive, recurring market — and we're selectively bringing on investors who share that view.
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span>Global coverage across fragmented and under-served markets</span>
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
                <span>Long-term defensibility through completeness and history</span>
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
    </main>
  );
};

export default Investor;
