interface VennLabels {
  market: { title: string; subtitle: string };
  consumer: { title: string; subtitle: string };
  ai: { title: string; subtitle: string };
  center: { label: string; microcopy: string };
}

interface VennDiagramProps {
  labels: VennLabels;
}

const R = 160;
const cx = 310, cy = 310;
const offset = 95;

const positions = {
  market:   { cx: cx, cy: cy - offset * 1.15 },
  consumer: { cx: cx - offset, cy: cy + offset * 0.5 },
  ai:       { cx: cx + offset, cy: cy + offset * 0.5 },
};

const VennDiagram = ({ labels }: VennDiagramProps) => {
  return (
    <div className="w-full max-w-[580px] mx-auto select-none">
      <svg viewBox="0 0 620 620" className="w-full h-auto" role="img" aria-label="Giraffy Intelligence Venn Diagram">
        <defs>
          <clipPath id="clip-consumer">
            <circle cx={positions.consumer.cx} cy={positions.consumer.cy} r={R} />
          </clipPath>
          <clipPath id="clip-ai">
            <circle cx={positions.ai.cx} cy={positions.ai.cy} r={R} />
          </clipPath>
        </defs>

        {/* Circles */}
        <circle cx={positions.market.cx} cy={positions.market.cy} r={R}
          fill="#00482F" opacity={0.85} />
        <circle cx={positions.consumer.cx} cy={positions.consumer.cy} r={R}
          fill="#267F4C" opacity={0.75} />
        <circle cx={positions.ai.cx} cy={positions.ai.cy} r={R}
          fill="#80C7AE" opacity={0.65} />

        {/* Center intersection highlight */}
        <g clipPath="url(#clip-consumer)">
          <g clipPath="url(#clip-ai)">
            <circle cx={positions.market.cx} cy={positions.market.cy} r={R}
              fill="#DDFA88" opacity={0.35} />
          </g>
        </g>

        {/* Market Reality — top of its circle, away from overlaps */}
        <text x={positions.market.cx} y={positions.market.cy - 55} textAnchor="middle"
          className="fill-white font-bold text-[14px] uppercase tracking-[0.14em]">
          {labels.market.title}
        </text>
        <text x={positions.market.cx} y={positions.market.cy - 37} textAnchor="middle"
          className="fill-white/50 text-[10px]">
          {labels.market.subtitle}
        </text>

        {/* Consumer Intent — bottom-left of its circle */}
        <text x={positions.consumer.cx - 28} y={positions.consumer.cy + 55} textAnchor="middle"
          className="fill-white font-bold text-[14px] uppercase tracking-[0.14em]">
          {labels.consumer.title}
        </text>
        <text x={positions.consumer.cx - 28} y={positions.consumer.cy + 73} textAnchor="middle"
          className="fill-white/50 text-[10px]">
          {labels.consumer.subtitle}
        </text>

        {/* AI Perception — bottom-right of its circle */}
        <text x={positions.ai.cx + 28} y={positions.ai.cy + 55} textAnchor="middle"
          className="fill-white font-bold text-[14px] uppercase tracking-[0.14em]">
          {labels.ai.title}
        </text>
        <text x={positions.ai.cx + 28} y={positions.ai.cy + 73} textAnchor="middle"
          className="fill-white/50 text-[10px]">
          {labels.ai.subtitle}
        </text>

        {/* Center label */}
        <text x={cx} y={cy - 6} textAnchor="middle"
          className="fill-white font-bold text-[11px] uppercase tracking-[0.16em]">
          {labels.center.label.split("\n")[0]}
        </text>
        <text x={cx} y={cy + 10} textAnchor="middle"
          className="fill-white font-bold text-[11px] uppercase tracking-[0.16em]">
          {labels.center.label.split("\n")[1] || ""}
        </text>
      </svg>
    </div>
  );
};

export default VennDiagram;
