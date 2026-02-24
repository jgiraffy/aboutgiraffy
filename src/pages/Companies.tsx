import Navigation from "@/components/Navigation"; // refresh
import FAQSection from "@/components/FAQSection";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import marketIntelligenceVisual from "@/assets/market-intelligence-visual.png";
import customerExperienceVisual from "@/assets/customer-experience-visual.png";
import visibilityVisual from "@/assets/visibility-visual.png";
import aiAgentExperienceVisual from "@/assets/ai-agent-experience-visual.png";
import aiAgentExperienceVisual2 from "@/assets/ai-agent-experience-visual-2.png";

import logoBsf from "@/assets/logo-bsf.png";
import logoEmiratesNbd from "@/assets/logo-emirates-nbd.png";
import logoTawuniya from "@/assets/logo-tawuniya.png";
import logoWalaa from "@/assets/logo-walaa.png";
import VennDiagram from "@/components/companies/VennDiagram";
import IntelligenceCard from "@/components/companies/IntelligenceCard";
import DecisionMomentSection from "@/components/companies/DecisionMomentSection";

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
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed mb-8 whitespace-pre-line">
            {t.companies.hero.subtitle}
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

      {/* Statement Banner */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container max-w-5xl mx-auto px-6 text-center">
          <p className="text-[10px] text-muted-foreground/60 mb-4 tracking-wide">Companies using Giraffy Intelligence:</p>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-14">
            {[
              { src: logoBsf, alt: "BSF", className: "h-14" },
              { src: logoTawuniya, alt: "Tawuniya Cooperative Insurance", className: "h-8" },
              { src: logoEmiratesNbd, alt: "Emirates NBD", className: "h-14" },
              { src: logoWalaa, alt: "Walaa Cooperative Insurance", className: "h-14" },
            ].map(({ src, alt, className }) => (
              <img key={alt} src={src} alt={alt} className={`${className} w-auto object-contain opacity-60`} />
            ))}
          </div>
        </div>
      </section>

      {/* The Decision Gap */}
      <section className="py-20 lg:py-32 bg-secondary">
        <div className="container max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            {t.companies.decisionGap.title}
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-10 max-w-3xl">
            {t.companies.decisionGap.bridge}
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {/* What You See */}
            <div className="rounded-2xl border border-border bg-background p-8">
              <h3 className="text-sm font-semibold text-muted-foreground/60 uppercase tracking-wider mb-6">{t.companies.decisionGap.intro}</h3>
              <ul className="space-y-4">
                {t.companies.decisionGap.internalList.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-base text-muted-foreground">
                    <span className="text-muted-foreground/40 flex-shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* What You're Missing */}
            <div className="rounded-2xl border border-primary/20 bg-primary/[0.03] p-8">
              <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-6">{t.companies.decisionGap.marketIntro}</h3>
              <ul className="space-y-4">
                {t.companies.decisionGap.marketList.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-base text-foreground">
                    <span className="text-primary flex-shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-lg text-foreground font-semibold">{t.companies.decisionGap.conclusion}</p>
          <p className="text-base text-muted-foreground leading-relaxed mt-2">{t.companies.decisionGap.closingLine}</p>
        </div>
      </section>

      {/* Intelligence Layer Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            {t.companies.intelligenceLayer.title}
          </h2>
          <p className="text-base text-muted-foreground max-w-3xl mb-2 leading-relaxed">
            {t.companies.intelligenceLayer.subtitle}
          </p>
          <p className="text-sm text-muted-foreground/70 max-w-3xl mb-4">
            {t.companies.intelligenceLayer.supportingLine}
          </p>
          <p className="text-center text-sm text-muted-foreground mb-10 tracking-wide">
            {t.companies.intelligenceLayer.anchoringLine}
          </p>

          {/* Three cards above Venn */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {t.companies.intelligenceLayer.cards.map((card, i) => (
              <IntelligenceCard key={i} number={i + 1} {...card} />
            ))}
          </div>

          {/* Venn Diagram */}
          <VennDiagram labels={t.companies.intelligenceLayer.venn} interactions={t.companies.intelligenceLayer.decisionMoment.interactions} />

          <DecisionMomentSection {...t.companies.intelligenceLayer.decisionMoment} />
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

      {/* AI Agent Experience Section */}
      <section className="py-20 lg:py-32 bg-secondary">
        <div className="container max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                {t.companies.aiAgent.title}
              </h2>
              <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                {t.companies.aiAgent.p1}
              </p>
              <p className="text-base text-muted-foreground mb-4 leading-relaxed">
                {t.companies.aiAgent.p2}
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 text-base text-muted-foreground">
                {t.companies.aiAgent.features.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                {t.companies.aiAgent.p3}
              </p>
              <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                {t.companies.aiAgent.p4}
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                {t.companies.aiAgent.p5}
              </p>
            </div>
            <div className="space-y-6 lg:mt-16">
              <div className="rounded-xl overflow-hidden shadow-lg bg-background p-4">
                <img 
                  src={aiAgentExperienceVisual} 
                  alt={t.companies.aiAgent.title}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg bg-background p-4">
                <img 
                  src={aiAgentExperienceVisual2} 
                  alt={`${t.companies.aiAgent.title} - AI Insights`}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visibility Section */}
      <section className="py-20 lg:py-32 bg-background">
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
      <section className="py-20 lg:py-32 bg-secondary">
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
      <section className="py-20 lg:py-32 bg-background">
        <div className="container max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            {t.companies.complex.title}
          </h2>
          <p className="text-base text-muted-foreground mb-6 leading-relaxed">{t.companies.complex.p1}</p>
          <p className="text-base text-muted-foreground mb-6 leading-relaxed">{t.companies.complex.p2}</p>
          <p className="text-base text-muted-foreground mb-6 leading-relaxed">{t.companies.complex.p3}</p>
          <p className="text-base text-muted-foreground leading-relaxed">{t.companies.complex.p4}</p>
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
