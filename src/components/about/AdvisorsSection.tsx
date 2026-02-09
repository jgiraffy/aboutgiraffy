import { Linkedin } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const AdvisorsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 lg:py-32 bg-secondary">
      <div className="container max-w-5xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          {t.about.advisors.title}
        </h2>
        <p className="text-muted-foreground mb-12 leading-relaxed">
          {t.about.advisors.subtitle}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.about.advisors.list.map((advisor) => (
            <div key={advisor.name} className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="relative inline-block mb-4">
                <div className="w-20 h-20 rounded-full bg-accent/60 flex items-center justify-center mx-auto">
                  <span className="text-xl font-bold text-accent-foreground">{advisor.initials}</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                  <Linkedin className="w-3.5 h-3.5 text-primary-foreground" />
                </div>
              </div>
              <h3 className="font-bold text-foreground">{advisor.name}</h3>
              <p className="text-sm text-primary font-medium mb-3">{advisor.role}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{advisor.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvisorsSection;
