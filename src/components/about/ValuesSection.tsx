import { Eye, Target, Lightbulb, Scale, Heart } from "lucide-react";

const values = [
  {
    icon: Eye,
    title: "Transparency",
    description: "People should be able to see the full market, clearly explained.",
  },
  {
    icon: Target,
    title: "Accuracy",
    description: "Information should be reliable, current, and easy to understand.",
  },
  {
    icon: Lightbulb,
    title: "Simplicity",
    description: "Finance should be understandable, not overwhelming.",
  },
  {
    icon: Scale,
    title: "Independence",
    description: "Clarity comes before promotion.",
  },
  {
    icon: Heart,
    title: "Trust",
    description: "We build for the long term, not short-term clicks.",
  },
];

const ValuesSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
          Our Values
        </h2>
        <p className="text-muted-foreground text-center mb-12">
          The principles that guide everything we do
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-card border border-border rounded-xl p-6"
            >
              <div className="w-12 h-12 rounded-full bg-accent/30 flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground text-lg mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
