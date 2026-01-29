import { Linkedin } from "lucide-react";

interface Advisor {
  name: string;
  role: string;
  initials: string;
  description: string;
}

const advisors: Advisor[] = [
  {
    name: "Mike Jones",
    role: "CTO at Loveholidays",
    initials: "MJ",
    description: "Key player in three exits including £2.2bn exit to Silver Lake.",
  },
  {
    name: "Abhit Ghelani",
    role: "Analyst at Allica Bank",
    initials: "AG",
    description: "10+ years at top tech giants, including Google, Microsoft, and Amazon.",
  },
  {
    name: "Megan Van Zyl",
    role: "Marketing Consultant",
    initials: "MV",
    description: "Global Head of Brand & Strategy. Strategic B2B Marketing Leader.",
  },
];

const AdvisorsSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Our Advisors
        </h2>
        <p className="text-muted-foreground mb-10 max-w-2xl leading-relaxed">
          Giraffy is supported by advisors with experience across technology, data, and consumer marketplaces. They help guide our thinking as we grow, ensuring Giraffy stays focused on accuracy, independence, and long-term trust.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {advisors.map((advisor) => (
            <div
              key={advisor.name}
              className="bg-card border border-border rounded-xl p-6 text-center"
            >
              <div className="relative inline-block mb-4">
                <div className="w-20 h-20 rounded-full bg-accent/60 flex items-center justify-center mx-auto">
                  <span className="text-xl font-bold text-accent-foreground">
                    {advisor.initials}
                  </span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                  <Linkedin className="w-3.5 h-3.5 text-primary-foreground" />
                </div>
              </div>
              <h3 className="font-bold text-foreground">{advisor.name}</h3>
              <p className="text-sm text-primary font-medium mb-3">{advisor.role}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {advisor.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvisorsSection;
