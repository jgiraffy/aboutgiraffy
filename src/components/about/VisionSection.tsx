import { useLanguage } from "@/i18n/LanguageContext";

const VisionSection = () => {
  const { t } = useLanguage();
  return (
    <section className="py-24 lg:py-36 bg-primary text-primary-foreground">
      <div className="container max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-accent">
          {t.about.vision.title}
        </h2>
        <p className="text-2xl md:text-3xl lg:text-4xl font-bold leading-snug">
          {t.about.vision.text}
        </p>
      </div>
    </section>
  );
};

export default VisionSection;
