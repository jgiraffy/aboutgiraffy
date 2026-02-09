import { RefreshCw, BarChart3, Globe2 } from "lucide-react";

const TechnologySection = () => {
  const capabilities = [
    { icon: RefreshCw, title: "Always Up to Date", text: "No outdated snapshots or \"expired\" deals." },
    { icon: BarChart3, title: "Live Tracking", text: "We catch price drops and new launches as they happen." },
    { icon: Globe2, title: "Global Standards", text: "We maintain consistent, high quality data across every country we serve." },
  ];

  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container max-w-4xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
          Market Intelligence that never sleeps
        </h2>
        
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Behind Giraffy is a technology platform designed to keep your options accurate, current, and complete.
        </p>
        
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
          The Giraffy Radar
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-8">
          While other sites wait for providers to send them updates, our in house technology, Giraffy Radar, actively tracks for changes. We monitor the market 24/7 to reflect real time pricing and availability.
        </p>
        
        <div className="space-y-4 mb-10">
          {capabilities.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <span className="font-semibold text-foreground">{title}: </span>
                <span className="text-muted-foreground">{text}</span>
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-muted-foreground italic border-t border-border pt-6">
          At Giraffy, technology isn't just a feature, it's how we ensure you never miss a better deal.
        </p>
      </div>
    </section>
  );
};

export default TechnologySection;
