const IntroSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container max-w-3xl mx-auto px-6">
        <p className="text-lg md:text-xl text-foreground leading-relaxed">
          Giraffy helps people understand household finance clearly — by showing 100% of the market in one place.
        </p>
        <div className="mt-8 space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Every day, people make important decisions about bills, banking, insurance, and everyday financial products. Yet most people do so without seeing the full picture. Prices are confusing. Rules are hidden. Important differences are buried in small print.
          </p>
          <p className="font-medium text-foreground">
            We believe people deserve clearer information — before they choose.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
