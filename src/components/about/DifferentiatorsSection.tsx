import { CircleDot, Target, Clock, Scale } from "lucide-react";

const DifferentiatorsSection = () => {
  const pillars = [
    {
      icon: CircleDot,
      title: "Completeness",
      description: "We aim to cover the full market",
    },
    {
      icon: Target,
      title: "Accuracy",
      description: "Information is structured and kept current",
    },
    {
      icon: Clock,
      title: "Freshness",
      description: "Deals are updated daily using our own technology",
    },
    {
      icon: Scale,
      title: "Neutrality",
      description: "Options are shown based on relevance, not promotion",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container max-w-5xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          What Makes Giraffy Different
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Giraffy is built around a few simple principles:
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 rounded-full bg-accent/30 flex items-center justify-center mx-auto mb-4">
                <Icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-foreground text-lg mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
        
        <p className="text-center text-muted-foreground mt-10 max-w-2xl mx-auto">
          This approach helps make Giraffy a reliable reference point for understanding household finance.
        </p>
      </div>
    </section>
  );
};

export default DifferentiatorsSection;
