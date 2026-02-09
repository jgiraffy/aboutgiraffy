const IntroSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container max-w-4xl mx-auto px-6">
        <p className="text-xl md:text-2xl lg:text-3xl text-foreground leading-relaxed italic text-center mb-16">
          When we started Giraffy in 2025, we set out to do things differently. We wanted to show people the full market for everyday finance in one place, creating a clear alternative to confusing sites that only show part of the picture.
        </p>

        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Why Giraffy exists</h2>
          <p>
            Giraffy helps people understand household finance by showing the full market in one place.
          </p>
          
          <p>
            Across mobile, internet, banking, loans, and insurance, people are asked to make important decisions without ever seeing all their options. Prices are unclear. Rules are hidden. Key differences are buried in small print. Most comparison sites only show part of the market, often what they're paid to show.
          </p>
          
          <p className="font-medium text-foreground">
            Giraffy exists to change that.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground pt-4">Seeing the full market builds trust</h2>
          
          <p>
            We bring 100% of live household finance deals together, so people can see what actually exists, compare options fairly, understand what matters before applying or switching, and avoid unpleasant surprises.
          </p>

          <div className="mt-8 pt-8 border-t border-border">
            <p className="text-lg font-semibold text-foreground mb-6 text-center">
              Available across these countries
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-6 justify-items-center">
              {[
                { country: "Saudi Arabia", code: "sa" },
                { country: "Kuwait", code: "kw" },
                { country: "Bahrain", code: "bh" },
                { country: "UAE", code: "ae" },
                { country: "Qatar", code: "qa" },
                { country: "Oman", code: "om" },
                { country: "United Kingdom", code: "gb" },
                { country: "Italy", code: "it" },
                { country: "Netherlands", code: "nl" },
              ].map((market) => (
                <div key={market.code} className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-border shadow-sm">
                    <img
                      src={`https://flagcdn.com/w80/${market.code}.png`}
                      alt={`${market.country} flag`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-xs text-muted-foreground">{market.country}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
