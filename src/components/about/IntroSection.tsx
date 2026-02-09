const IntroSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container max-w-4xl mx-auto px-6">
        <p className="text-xl md:text-2xl lg:text-3xl text-foreground leading-relaxed italic text-center mb-28">
          When we started Giraffy in 2025, we set out to do things differently. We wanted to show people the full market for everyday finance in one place, creating a clear alternative to confusing sites that only show part of the picture.
        </p>

        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Why Giraffy exists</h2>
          <p>
            In a world of "compare and save," it's surprisingly hard to see the truth.
          </p>
          
          <p>
            Across telecoms, banking, finance (loans), and insurance, you're often asked to make big financial decisions while only seeing half the picture. Prices are unclear. Fine print is buried. Most comparison sites are "pay to play," prioritising providers who pay them commission rather than those offering the best option for you.
          </p>
          
          <p>
            <span className="font-bold text-foreground">Giraffy was built to change that.</span> We believe that seeing the full market is the only way to build real trust. We bring 100% of live household finance deals together, so you can compare fairly, avoid surprises, and switch with confidence.
          </p>

          <div className="mt-12 pt-10">
            <p className="text-lg font-semibold text-foreground mb-8 text-center">
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
                  <span className="text-xs text-muted-foreground text-center">{market.country}</span>
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
