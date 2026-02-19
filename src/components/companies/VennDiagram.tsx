interface VennLabels {
  market: { title: string; subtitle: string };
  consumer: { title: string; subtitle: string };
  ai: { title: string; subtitle: string };
  center: { label: string; microcopy: string };
}

interface VennDiagramProps {
  labels: VennLabels;
}

const R = 138;
const cx = 270, cy = 265;
const offset = 80;

const positions = {
  market:   { cx: cx, cy: cy - offset * 1.15 },
  consumer: { cx: cx - offset, cy: cy + offset * 0.5 },
  ai:       { cx: cx + offset, cy: cy + offset * 0.5 },
};

const VennDiagram = ({ labels }: VennDiagramProps) => {
  return (
    <div className="w-full max-w-[440px] mx-auto select-none">
      <svg viewBox="0 0 540 530" className="w-full h-auto" role="img" aria-label="Giraffy Intelligence Venn Diagram">
        {/* Circles — distinct tonal contrast with transparency for overlaps */}
        <circle cx={positions.market.cx} cy={positions.market.cy} r={R}
          fill="#00482F" opacity={0.75} />
        <circle cx={positions.consumer.cx} cy={positions.consumer.cy} r={R}
          fill="#267F4C" opacity={0.55} />
        <circle cx={positions.ai.cx} cy={positions.ai.cy} r={R}
          fill="#80C7AE" opacity={0.45} />

        {/* Center neon accent — subtle */}
        <circle cx={cx} cy={cy} r={26} fill="#DDFA88" opacity={0.3} />

        {/* Market Reality */}
        <text x={positions.market.cx} y={positions.market.cy - 36} textAnchor="middle"
          className="fill-white font-bold text-[12px] uppercase tracking-[0.14em]">
          {labels.market.title}
        </text>
        <text x={positions.market.cx} y={positions.market.cy - 20} textAnchor="middle"
          className="fill-white/50 text-[9px]">
          {labels.market.subtitle}
        </text>

        {/* Consumer Intent */}
        <text x={positions.consumer.cx - 14} y={positions.consumer.cy + 42} textAnchor="middle"
          className="fill-white font-bold text-[12px] uppercase tracking-[0.14em]">
          {labels.consumer.title}
        </text>
        <text x={positions.consumer.cx - 14} y={positions.consumer.cy + 58} textAnchor="middle"
          className="fill-white/50 text-[9px]">
          {labels.consumer.subtitle}
        </text>

        {/* AI Perception */}
        <text x={positions.ai.cx + 14} y={positions.ai.cy + 42} textAnchor="middle"
          className="fill-white font-bold text-[12px] uppercase tracking-[0.14em]">
          {labels.ai.title}
        </text>
        <text x={positions.ai.cx + 14} y={positions.ai.cy + 58} textAnchor="middle"
          className="fill-white/50 text-[9px]">
          {labels.ai.subtitle}
        </text>

        {/* Center label */}
        <text x={cx} y={cy - 5} textAnchor="middle"
          className="fill-white font-bold text-[10px] uppercase tracking-[0.16em]">
          {labels.center.label.split("\n")[0]}
        </text>
        <text x={cx} y={cy + 9} textAnchor="middle"
          className="fill-white font-bold text-[10px] uppercase tracking-[0.16em]">
          {labels.center.label.split("\n")[1] || ""}
        </text>
      </svg>
    </div>
  );
};

export default VennDiagram;
