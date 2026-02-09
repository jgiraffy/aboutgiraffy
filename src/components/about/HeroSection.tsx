import { useLanguage } from "@/i18n/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();
  return (
    <section className="bg-primary text-primary-foreground py-16 lg:py-24">
      <div className="container max-w-5xl mx-auto px-6 text-center">
        <p className="text-xl md:text-2xl opacity-80 mb-6">
          {t.about.hero.subtitle}
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight italic">
          {t.about.hero.title}
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
