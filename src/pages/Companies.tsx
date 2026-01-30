import Navigation from "@/components/Navigation";

const Companies = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-primary py-16 lg:py-24">
        <div className="container max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            Market Intelligence for Providers
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Complete visibility into household finance markets. Track competitors, understand pricing trends, and make data driven decisions.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container max-w-4xl mx-auto px-6">
          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <p className="text-lg">
              Giraffy provides financial service providers with unprecedented market visibility across mobile, internet, banking, loans, and insurance products.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-secondary/50 rounded-lg p-6 border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-3">Complete Market Coverage</h3>
                <p className="text-sm">
                  Track 100% of live deals across your markets. Know exactly where you stand against competitors.
                </p>
              </div>
              <div className="bg-secondary/50 rounded-lg p-6 border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-3">Daily Updates</h3>
                <p className="text-sm">
                  Pricing and product changes captured daily using our proprietary technology.
                </p>
              </div>
              <div className="bg-secondary/50 rounded-lg p-6 border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-3">Structured Data</h3>
                <p className="text-sm">
                  Products, pricing, and eligibility consistently structured for easy analysis and comparison.
                </p>
              </div>
              <div className="bg-secondary/50 rounded-lg p-6 border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-3">Behavioural Insights</h3>
                <p className="text-sm">
                  Understand real comparison and decision behaviour from consumers across markets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Companies;
