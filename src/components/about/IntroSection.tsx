const IntroSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          About Giraffy
        </h2>
        <p className="text-xl md:text-2xl text-primary font-medium mb-8">
          See the Full Market. Make Better Financial Decisions.
        </p>
        
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            Giraffy helps people understand household finance by showing the full market in one place.
          </p>
          
          <p>
            Across mobile, internet, banking, loans, and insurance, people are asked to make important decisions without ever seeing all their options. Prices are unclear. Rules are hidden. Key differences are buried in small print. Most comparison sites only show part of the market — often what they're paid to show.
          </p>
          
          <p className="font-medium text-foreground">
            Giraffy exists to change that.
          </p>
          
          <p>
            We bring 100% of live household finance deals together, so people can see what actually exists, compare options fairly, understand what matters before applying or switching, and avoid unpleasant surprises.
          </p>
          
          <div className="bg-secondary/50 rounded-xl p-6 md:p-8 mt-8">
            <p className="text-foreground">
              <span className="font-semibold">Our goal is simple:</span>
              <br />
              <span className="mt-2 block">
                when people are choosing household bills and everyday finance, Giraffy should be the obvious place to start.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
