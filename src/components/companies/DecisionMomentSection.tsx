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
      <h4 className="text-lg font-bold text-foreground mb-6">Interaction Intelligence</h4>
      <div className="grid md:grid-cols-3 gap-6 mb-8">
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

      {/* Decision Moment Card */}
      <div className="rounded-xl border border-border bg-secondary p-6">
        <div className="flex items-center gap-2 mb-3">
          <span
            className="w-5 h-5 rounded-full text-[11px] font-bold flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: "#DDFA88", color: "#000" }}
          >
            ✦
          </span>
          <h3 className="text-base font-bold text-foreground">{title}</h3>
        </div>
        <p className="text-xs text-muted-foreground mb-4">{description}</p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-2">{subtitle}</p>
        <p className="text-xs text-muted-foreground/60 leading-relaxed">{closing}</p>
      </div>
    </div>
  );
};

export default DecisionMomentSection;
