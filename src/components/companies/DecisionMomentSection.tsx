interface Interaction {
  code: string;
  title: string;
  description: string;
}

interface DecisionMomentProps {
  title: string;
  description: string;
  subtitle: string;
  closing: string;
  interactions: Interaction[];
}

const DecisionMomentSection = ({ title, description, subtitle, closing, interactions }: DecisionMomentProps) => {
  return (
    <div className="mt-16">
      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">{title}</h3>
      <p className="text-base text-muted-foreground leading-relaxed mb-2">{description}</p>
      <p className="text-base text-muted-foreground leading-relaxed mb-2">{subtitle}</p>
      <p className="text-base text-foreground font-semibold mb-8">{closing}</p>

      <h4 className="text-lg font-bold text-foreground mb-6">Interaction Intelligence</h4>
      <div className="grid md:grid-cols-3 gap-6">
        {interactions.map((item, i) => (
          <div key={i} className="rounded-xl border border-border bg-secondary p-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">{item.code}</span>
              <h5 className="text-base font-bold text-foreground">{item.title}</h5>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DecisionMomentSection;
