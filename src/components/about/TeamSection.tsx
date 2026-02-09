import { Linkedin } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  initials: string;
}

const teamMembers: TeamMember[] = [
  { name: "Jason Lea", role: "Co-Founder & CEO", initials: "JL" },
  { name: "Ralph Forgeon", role: "Co-Founder & CTO", initials: "RF" },
  { name: "Saja Alqurnas", role: "Saudi Arabia Lead", initials: "SA" },
  { name: "Joel Clark", role: "Project and Insights Lead", initials: "JC" },
  { name: "Mohammed Elhafiz", role: "Head of Partnerships", initials: "ME" },
  { name: "Ismail Amara", role: "Marketing and Content Lead", initials: "IA" },
];

const TeamSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container max-w-5xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          Our Team
        </h2>
        <p className="text-muted-foreground mb-4 max-w-2xl leading-relaxed">
          Giraffy is built by a team with deep experience in consumer platforms, marketplaces, and financial services.
        </p>
        <p className="text-muted-foreground mb-10 max-w-2xl leading-relaxed">
          We've spent years working on products that help people compare, choose, and make better decisions — and we're applying that experience to household finance.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-card border border-border rounded-xl p-6 text-center"
            >
              <div className="relative inline-block mb-4">
                <div className="w-24 h-24 rounded-full bg-accent flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-accent-foreground">
                    {member.initials}
                  </span>
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
        
        <p className="text-center text-muted-foreground mt-10 italic">
          We're building Giraffy for people like us: people who want clarity, not confusion.
        </p>
      </div>
    </section>
  );
};

export default TeamSection;
