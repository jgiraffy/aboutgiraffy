import { Linkedin } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const linkMap: Record<string, string> = {
  "Studee.com": "https://studee.com",
  "j-b.com.sa": "https://j-b.com.sa",
};

const renderWithLinks = (text: string) => {
  const regex = new RegExp(`(${Object.keys(linkMap).map(k => k.replace(/\./g, "\\.")).join("|")})`, "g");
  const parts = text.split(regex);
  return parts.map((part, i) =>
    linkMap[part] ? (
      <a key={i} href={linkMap[part]} target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">
        {part}
      </a>
    ) : (
      part
    )
  );
};

const TeamSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container max-w-5xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          {t.about.team.title}
        </h2>
        <p className="text-muted-foreground mb-12 leading-relaxed">
          {t.about.team.subtitle}
        </p>

        <h3 className="text-xl font-bold text-foreground mb-6">{t.about.team.foundersTitle}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14">
          {t.about.team.founders.map((member) => (
            <div key={member.name} className="bg-card border border-border rounded-xl p-6 text-left">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-24 h-24 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-accent-foreground">{member.initials}</span>
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg">{member.name}</h3>
                  <p className="text-sm text-primary font-medium">{member.role}</p>
                </div>
              </div>
              <div className="space-y-3 mt-2">
                {member.bio.map((paragraph, i) => (
                  <p key={i} className="text-muted-foreground text-sm leading-relaxed">
                    {renderWithLinks(paragraph)}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-bold text-foreground mb-6">{t.about.team.teamTitle}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-items-center">
          {t.about.team.members.map((member) => (
            <div key={member.name} className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="relative inline-block mb-4">
                <div className="w-24 h-24 rounded-full bg-accent flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-accent-foreground">{member.initials}</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <Linkedin className="w-4 h-4 text-primary-foreground" />
                </div>
              </div>
              <h3 className="font-bold text-foreground text-lg">{member.name}</h3>
              <p className="text-sm text-primary font-medium">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
