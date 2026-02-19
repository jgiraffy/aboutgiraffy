interface IntelligenceCardProps {
  title: string;
  subtitle: string;
  bullets: string[];
  closingLine: string;
}

const IntelligenceCard = ({ title, subtitle, bullets, closingLine }: IntelligenceCardProps) => {
  return (
    <div className="rounded-xl border border-primary-foreground/10 bg-primary-foreground/[0.04] p-6">
      <h3 className="text-base font-bold text-primary-foreground mb-1">{title}</h3>
      <p className="text-xs text-primary-foreground/50 mb-4">{subtitle}</p>
      <ul className="space-y-2 mb-4">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-primary-foreground/80">
            <span className="text-accent mt-px text-xs">→</span>
            {b}
          </li>
        ))}
      </ul>
      <p className="text-xs text-primary-foreground/40 leading-relaxed">{closingLine}</p>
    </div>
  );
};

export default IntelligenceCard;
