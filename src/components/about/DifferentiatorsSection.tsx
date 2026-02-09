import iconCompleteness from "@/assets/icon-completeness.png";
import iconAccuracy from "@/assets/icon-accuracy.svg";
import iconFreshness from "@/assets/icon-freshness.svg";
import iconNeutrality from "@/assets/icon-neutrality.svg";
import { useLanguage } from "@/i18n/LanguageContext";

const iconMap = [iconCompleteness, iconAccuracy, iconFreshness, iconNeutrality];

const DifferentiatorsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container max-w-5xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          {t.about.diff.title}
        </h2>
        <p className="text-muted-foreground mb-14 max-w-2xl">
          {t.about.diff.subtitle}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.about.diff.pillars.map((pillar, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-md transition-shadow"
            >
              <div className="w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <img src={iconMap[i]} alt={pillar.title} className="w-20 h-20 object-contain" />
              </div>
              <h3 className="font-bold text-foreground text-lg mb-2">{pillar.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentiatorsSection;
