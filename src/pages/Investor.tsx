import Navigation from "@/components/Navigation";
import FAQSection from "@/components/FAQSection";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

const Investor = () => {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-primary py-16 lg:py-24">
        <div className="container max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            {t.investor.hero.title}
          </h1>
          <p className="text-primary-foreground/80 mb-3">{t.investor.hero.subtitle}</p>
          <a
            href="https://giraffy.fillout.com/investor"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors text-lg"
          >
            {t.investor.hero.cta}
          </a>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container max-w-4xl mx-auto px-6">
          <p className="text-lg">{t.investor.intro}</p>
        </div>
      </section>

      {/* The Market Reality */}
      <section className="py-16 lg:py-20 bg-secondary">
        <div className="container max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            {t.investor.marketReality.title}
          </h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>{t.investor.marketReality.p1}</p>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">{t.investor.marketReality.existsTitle}</h3>
                <ul className="space-y-2">
                  {t.investor.marketReality.exists.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-muted-foreground">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">{t.investor.marketReality.resultTitle}</h3>
                <ul className="space-y-2">
                  {t.investor.marketReality.results.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-muted-foreground">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="text-foreground font-semibold text-lg mt-8">
              {t.investor.marketReality.conclusion}
            </p>
          </div>
        </div>
      </section>

      {/* Why Now */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            {t.investor.whyNow.title}
          </h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>{t.investor.whyNow.p1}</p>
            <p className="text-foreground font-medium">{t.investor.whyNow.p2}</p>
            <p>{t.investor.whyNow.p3}</p>
          </div>
        </div>
      </section>

      {/* The Giraffy Approach */}
      <section className="py-16 lg:py-20 bg-secondary">
        <div className="container max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            {t.investor.approach.title}
          </h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>{t.investor.approach.p1}</p>
            <p>{t.investor.approach.p2}</p>
          </div>
        </div>
      </section>

      {/* The Infrastructure Moat */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            {t.investor.moat.title}
          </h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>{t.investor.moat.intro}</p>
            <ul className="space-y-3">
              {t.investor.moat.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  {item === t.investor.moat.providersLinkText ? (
                    <Link to="/companies" className="text-primary hover:underline">{item}</Link>
                  ) : (
                    <span>{item}</span>
                  )}
                </li>
              ))}
            </ul>
            <p className="text-foreground font-medium mt-6">{t.investor.moat.conclusion}</p>
          </div>
        </div>
      </section>

      {/* What We're Building & Join the Journey */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-8">
            {t.investor.building.title}
          </h2>
          <div className="space-y-6 text-primary-foreground/90 leading-relaxed mb-12">
            <p className="text-lg">{t.investor.building.p1}</p>
            <ul className="space-y-3">
              {t.investor.building.checks.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center">
            <p className="text-primary-foreground/80 mb-6">{t.investor.building.followText}</p>
            <a
              href="https://giraffy.fillout.com/investor"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors text-lg"
            >
              {t.investor.building.cta}
            </a>
          </div>
        </div>
      </section>

      <FAQSection faqs={t.investor.faqs} />
    </main>
  );
};

export default Investor;
