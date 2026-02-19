import Navigation from "@/components/Navigation";
import FAQSection from "@/components/FAQSection";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import marketIntelligenceVisual from "@/assets/market-intelligence-visual.png";
import customerExperienceVisual from "@/assets/customer-experience-visual.png";
import visibilityVisual from "@/assets/visibility-visual.png";

const Companies = () => {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-primary py-16 lg:py-24 relative">
        <div className="container max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            {t.companies.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed mb-4 whitespace-pre-line">
            {t.companies.hero.subtitle}
          </p>
          <p className="text-base text-primary-foreground/60 max-w-2xl mx-auto leading-relaxed mb-8 whitespace-pre-line">
            {t.companies.hero.supportingLine}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://api.whatsapp.com/send/?phone=966536134229&text=Hi%2C+I%27m+interested+in+requesting+access+to+Giraffy+Intelligence&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors text-base"
            >
              {t.companies.hero.requestAccess}
            </a>
            <a
              href="mailto:hello@giraffy.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-primary-foreground/30 text-primary-foreground font-semibold rounded-lg hover:bg-primary-foreground/10 transition-colors text-base"
            >
              {t.companies.hero.bookDemo}
            </a>
          </div>
        </div>
        <div className="absolute bottom-6 right-6">
          <a
            href="https://business.giraffy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary-foreground/60 font-medium underline hover:text-primary-foreground/80 transition-colors"
          >
            {t.companies.hero.login}
          </a>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 lg:py-32 bg-secondary">
        <div className="container max-w-5xl mx-auto px-6">
          <p className="text-base text-muted-foreground leading-relaxed">
            <strong>{t.companies.intro.bold}</strong>{t.companies.intro.text}
          </p>
        </div>
      </section>

      {/* The Decision Gap */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            {t.companies.decisionGap.title}
          </h2>
          <p className="text-base text-muted-foreground mb-4 leading-relaxed">{t.companies.decisionGap.intro}</p>
          <ul className="list-disc list-inside space-y-2 mb-6 text-base text-muted-foreground">
            {t.companies.decisionGap.internalList.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <p className="text-base text-muted-foreground mb-6 leading-relaxed font-medium">{t.companies.decisionGap.bridge}</p>
          <p className="text-base text-muted-foreground mb-4 leading-relaxed">{t.companies.decisionGap.marketIntro}</p>
          <ul className="list-disc list-inside space-y-2 mb-6 text-base text-muted-foreground">
            {t.companies.decisionGap.marketList.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <p className="text-base text-muted-foreground leading-relaxed font-semibold">{t.companies.decisionGap.conclusion}</p>
        </div>
      </section>

      {/* Market Intelligence Section */}
      <section className="py-20 lg:py-32 bg-secondary">
        <div className="container max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                {t.companies.marketIntel.title}
              </h2>
              <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                {t.companies.marketIntel.description}
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 text-base text-muted-foreground">
                {t.companies.marketIntel.features.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={marketIntelligenceVisual} 
                  alt={t.companies.marketIntel.title}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Experience Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground whitespace-nowrap mb-6">
                {t.companies.customerExp.title}
              </h2>
              <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                {t.companies.customerExp.description}
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 text-base text-muted-foreground">
                {t.companies.customerExp.insights.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="text-base text-muted-foreground font-medium">
                {t.companies.customerExp.conclusion}
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg lg:mt-16">
              <img 
                src={customerExperienceVisual} 
                alt={t.companies.customerExp.title}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Visibility Section */}
      <section className="py-20 lg:py-32 bg-secondary">
        <div className="container max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                {t.companies.visibility.title}
              </h2>
              <p className="text-base text-muted-foreground mb-6 leading-relaxed">{t.companies.visibility.p1}</p>
              <p className="text-base text-muted-foreground mb-6 leading-relaxed">{t.companies.visibility.p2}</p>
              <p className="text-base text-muted-foreground mb-6 leading-relaxed">{t.companies.visibility.p3}</p>
              <p className="text-base text-muted-foreground leading-relaxed">{t.companies.visibility.p4}</p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src={visibilityVisual} 
                alt={t.companies.visibility.title}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who Giraffy Is For */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            {t.companies.who.title}
          </h2>
          <p className="text-base text-muted-foreground mb-6 leading-relaxed">{t.companies.who.p1}</p>
          <p className="text-base text-muted-foreground mb-6 leading-relaxed">{t.companies.who.p2}</p>
          <div className="grid gap-4 mb-6">
            {t.companies.who.teams.map(({ team, benefit }, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-foreground flex-shrink-0 mt-2" />
                <span className="text-foreground">
                  <strong>{team}</strong> {benefit}
                </span>
              </div>
            ))}
          </div>
          <p className="text-primary font-semibold">{t.companies.who.conclusion}</p>
        </div>
      </section>

      {/* Built for Complex Markets */}
      <section className="py-20 lg:py-32 bg-secondary">
        <div className="container max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            {t.companies.complex.title}
          </h2>
          <p className="text-base text-muted-foreground mb-6 leading-relaxed">{t.companies.complex.p1}</p>
          <p className="text-base text-muted-foreground mb-6 leading-relaxed">{t.companies.complex.p2}</p>
          <p className="text-base text-muted-foreground leading-relaxed">{t.companies.complex.p3}</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-primary">
        <div className="container max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            {t.companies.cta.title}
          </h2>
          <div className="grid gap-3 mb-8 max-w-lg mx-auto text-left">
            {t.companies.cta.useCases.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/90 text-sm">{item}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://api.whatsapp.com/send/?phone=966536134229&text=Hi%2C+I%27m+interested+in+learning+more+about+Giraffy+Business&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors text-base"
            >
              {t.companies.cta.whatsapp}
            </a>
            <a
              href="mailto:hello@giraffy.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-primary-foreground/30 text-primary-foreground font-semibold rounded-lg hover:bg-primary-foreground/10 transition-colors text-base"
            >
              {t.companies.cta.email}
            </a>
          </div>
        </div>
      </section>

      <FAQSection faqs={t.companies.faqs} />

      {/* Footer */}
      <section className="py-8 bg-secondary border-t border-border">
        <div className="container max-w-3xl mx-auto px-6 text-center">
          <p className="text-muted-foreground text-sm">{t.companies.footer}</p>
        </div>
      </section>
    </main>
  );
};

export default Companies;
