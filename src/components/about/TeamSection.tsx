import { useLanguage } from "@/i18n/LanguageContext";
import linkedinIcon from "@/assets/linkedin-icon.png";
import teamJason from "@/assets/team-jason.png";
import teamRalph from "@/assets/team-ralph.png";
import teamJoel from "@/assets/team-joel.png";
import teamMohammed from "@/assets/team-mohammed.png";
import teamIsmail from "@/assets/team-ismail.png";

const founderPhotos: Record<string, string> = {
  "Jason Lea": teamJason,
  "Ralph Forgeon": teamRalph,
};

const memberPhotos: Record<string, string> = {
  "Joel Clark": teamJoel,
  "Mohammed Elhafiz": teamMohammed,
  "Ismail Amara": teamIsmail,
};

const founderLinkedIn: Record<string, string> = {
  "Jason Lea": "https://www.linkedin.com/in/jalea/",
  "Ralph Forgeon": "https://www.linkedin.com/in/forgeon/",
};

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
                <div className="relative flex-shrink-0">
                  <img
                    src={founderPhotos[member.name]}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  {founderLinkedIn[member.name] && (
                    <a href={founderLinkedIn[member.name]} target="_blank" rel="noopener noreferrer" className="absolute -right-1 bottom-0">
                      <img src={linkedinIcon} alt="LinkedIn" className="w-5 h-5" />
                    </a>
                  )}
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
              <img
                src={memberPhotos[member.name]}
                alt={member.name}
                className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
              />
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
