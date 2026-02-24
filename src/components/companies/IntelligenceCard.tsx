const VENN_COLORS = ["#00482F", "#267F4C", "#80C7AE"];

interface IntelligenceCardProps {
  title: string;
  subtitle: string;
  bullets: string[];
  closingLine: string;
  number: number;
}

const IntelligenceCard = ({ title, subtitle, bullets, closingLine, number }: IntelligenceCardProps) => {
  const color = VENN_COLORS[number - 1] || VENN_COLORS[0];

  return (
    <div className="rounded-xl border border-border bg-secondary p-6">
      <div className="flex items-center gap-2 mb-3">
        <span
          className="w-5 h-5 rounded-full text-white text-[11px] font-bold flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: color }}
        >
          {number}
        </span>
        <h3 className="text-base font-bold text-foreground">{title}</h3>
      </div>
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
