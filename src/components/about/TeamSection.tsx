import { Linkedin } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  initials: string;
  bio?: string[];
}

const founders: TeamMember[] = [
  {
    name: "Jason Lea",
    role: "Co-Founder & CEO",
    initials: "JL",
    bio: [
      "Jason is a consumer technology founder with deep experience in comparison platforms and fintech.",
      "He helped build the uSwitch mobile app and was a senior team member through uSwitch's acquisition by Zoopla, and its later acquisition by Silver Lake / Red Ventures. Jason went on to found Omniowl.com, a university comparison website that was acqui-hired by Studee.com.",
      "He later worked at 11:FS on Banque Saudi Fransi's digital bank launch (j-b.com.sa), before moving to Saudi Arabia to work at Ajlan & Bros.",
      "Giraffy was born out of his personal struggle to navigate everyday banking and telecoms without clear, trustworthy information.",
    ],
  },
  {
    name: "Ralph Forgeon",
    role: "Co-Founder & CTO",
    initials: "RF",
    bio: [
      "Ralph is a technologist specialising in AI, automation, and data driven systems.",
      "He has worked across organisations including Deloitte, Airbnb, and Exobrain AI, as well as on fintech platforms and marketplaces. At Giraffy, Ralph leads engineering and technology, building the systems that keep market data accurate, current, and reliable across countries.",
    ],
  },
];

const team: TeamMember[] = [
  
  { name: "Joel Clark", role: "Project and Insights Lead", initials: "JC" },
  { name: "Mohammed Elhafiz", role: "Head of Partnerships", initials: "ME" },
  { name: "Ismail Amara", role: "Marketing and Content Lead", initials: "IA" },
];

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

const MemberCard = ({ member }: { member: TeamMember }) => (
  <div className={`bg-card border border-border rounded-xl p-6 ${member.bio ? "text-left" : "text-center"}`}>
    {member.bio ? (
      <>
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
      </>
    ) : (
      <>
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
      </>
    )}
  </div>
);

const TeamSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container max-w-5xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          Our Team
        </h2>
        <p className="text-muted-foreground mb-12 leading-relaxed">
          Giraffy is built by a team with deep experience in consumer platforms, marketplaces, and financial services.
        </p>

        <h3 className="text-xl font-bold text-foreground mb-6">Founders</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14">
          {founders.map((member) => (
            <MemberCard key={member.name} member={member} />
          ))}
        </div>

        <h3 className="text-xl font-bold text-foreground mb-6">The Team</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-items-center">
          {team.map((member) => (
            <MemberCard key={member.name} member={member} />
          ))}
        </div>
        
        <p className="text-center text-muted-foreground mt-14 italic">
          We're building Giraffy for people like us: people who want clarity, not confusion.
        </p>
      </div>
    </section>
  );
};

export default TeamSection;
