import { useLanguage } from "@/i18n/LanguageContext";

const ValuesSection = () => {
  const { t } = useLanguage();
  return (
    <section className="py-24 lg:py-36 bg-primary">
      <div className="container max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent mb-8">
          {t.about.values.title}
        </h2>
        <p className="text-xl md:text-2xl lg:text-3xl text-accent leading-relaxed">
          {t.about.values.text1}
          <br />
          {t.about.values.text2}
        </p>
      </div>
    </section>
  );
};

export default ValuesSection;
