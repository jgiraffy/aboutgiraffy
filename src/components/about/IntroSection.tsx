import { useLanguage } from "@/i18n/LanguageContext";

const IntroSection = () => {
  const { t } = useLanguage();
  const countries = [
    { code: "sa" }, { code: "kw" }, { code: "bh" }, { code: "ae" },
    { code: "qa" }, { code: "om" }, { code: "gb" }, { code: "it" }, { code: "nl" },
  ] as const;

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container max-w-4xl mx-auto px-6">
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-accent/30 -skew-y-1 rounded-lg" aria-hidden="true" />
          <p className="relative text-xl md:text-2xl lg:text-3xl text-foreground leading-relaxed italic text-center py-6 px-4">
            {t.about.intro.quote}
          </p>
        </div>
        <div className="mb-28" />

        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">{t.about.intro.whyTitle}</h2>
          <p>{t.about.intro.whyP1}</p>
          <p>{t.about.intro.whyP2}</p>
          <p>
            <span className="font-bold text-foreground">{t.about.intro.whyP3Bold}</span>
            {t.about.intro.whyP3}
          </p>

          <div className="mt-12 pt-10">
            <p className="text-lg font-semibold text-foreground mb-8 text-center">
              {t.about.intro.countriesTitle}
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-6 justify-items-center">
              {countries.map((market) => (
                <div key={market.code} className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-border shadow-sm">
                    <img
                      src={`https://flagcdn.com/w80/${market.code}.png`}
                      alt={`${t.about.intro.countries[market.code]} flag`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-xs text-muted-foreground text-center">{t.about.intro.countries[market.code]}</span>
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
