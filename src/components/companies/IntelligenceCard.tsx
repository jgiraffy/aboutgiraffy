interface IntelligenceCardProps {
  title: string;
  subtitle: string;
  bullets: string[];
  closingLine: string;
}

const IntelligenceCard = ({ title, subtitle, bullets, closingLine }: IntelligenceCardProps) => {
  return (
    <div className="rounded-xl border border-border bg-secondary p-6">
      <h3 className="text-base font-bold text-foreground mb-1">{title}</h3>
      <p className="text-xs text-muted-foreground mb-4">{subtitle}</p>
      <ul className="space-y-2 mb-4">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className="text-primary mt-px text-xs">→</span>
            {b}
          </li>
        ))}
      </ul>
      <p className="text-xs text-muted-foreground/60 leading-relaxed">{closingLine}</p>
    </div>
  );
};

export default IntelligenceCard;
