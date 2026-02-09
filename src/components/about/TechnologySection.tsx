import { RefreshCw, BarChart3, Globe2 } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const icons = [RefreshCw, BarChart3, Globe2];

const TechnologySection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 lg:py-32 bg-secondary">
      <div className="container max-w-4xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
          {t.about.tech.title}
        </h2>
        <p className="text-muted-foreground mb-10 leading-relaxed">
          {t.about.tech.description}
        </p>
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
          {t.about.tech.radarTitle}
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-10">
          {t.about.tech.radarDescription}
        </p>
        <div className="space-y-5 mb-12">
          {t.about.tech.capabilities.map((cap, i) => {
            const Icon = icons[i];
            return (
              <div key={i} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="font-semibold text-foreground">{cap.title}: </span>
                  <span className="text-muted-foreground">{cap.text}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
