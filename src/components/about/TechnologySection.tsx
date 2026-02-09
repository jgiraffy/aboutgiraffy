import { RefreshCw, BarChart3, Globe2 } from "lucide-react";

const TechnologySection = () => {
  const capabilities = [
    { icon: RefreshCw, text: "Keep comparisons up to date" },
    { icon: BarChart3, text: "Track changes as they happen" },
    { icon: Globe2, text: "Maintain consistency as markets evolve across countries" },
  ];

  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
          Powered by Technology, Built for Accuracy
        </h2>
        
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Behind Giraffy is a technology platform designed to keep markets accurate, current, and complete.
        </p>
        
        {/* Giraffy Radar subsection */}
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
          Giraffy Radar
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-8">
          We use Giraffy Radar, our in-house technology, to track providers and update deals daily. This allows us to reflect real changes in pricing, availability, and terms, not outdated snapshots.
        </p>
        
        <p className="text-muted-foreground mb-6">
          By continuously monitoring markets, we're able to:
        </p>
        
        <div className="space-y-4 mb-10">
          {capabilities.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-foreground">{text}</span>
            </div>
          ))}
        </div>
        
        <p className="text-muted-foreground italic border-t border-border pt-6">
          Technology is not a feature at Giraffy — it's how the platform stays reliable.
        </p>
      </div>
    </section>
  );
};

export default TechnologySection;
