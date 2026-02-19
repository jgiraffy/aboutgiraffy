interface VennLabels {
  market: { title: string; subtitle: string };
  consumer: { title: string; subtitle: string };
  ai: { title: string; subtitle: string };
  center: { label: string; microcopy: string };
  overlaps: {
    marketConsumer: string;
    marketAi: string;
    consumerAi: string;
  };
}

interface VennDiagramProps {
  labels: VennLabels;
}

const R = 140;
const cx = 270, cy = 270;
const offset = 82;

const positions = {
  market:   { cx: cx, cy: cy - offset * 1.15 },
  consumer: { cx: cx - offset, cy: cy + offset * 0.5 },
  ai:       { cx: cx + offset, cy: cy + offset * 0.5 },
};

const VennDiagram = ({ labels }: VennDiagramProps) => {
  // Midpoints for overlap labels
  const mcMid = {
    x: (positions.market.cx + positions.consumer.cx) / 2,
    y: (positions.market.cy + positions.consumer.cy) / 2,
  };
  const maMid = {
    x: (positions.market.cx + positions.ai.cx) / 2,
    y: (positions.market.cy + positions.ai.cy) / 2,
  };
  const caMid = {
    x: (positions.consumer.cx + positions.ai.cx) / 2,
    y: (positions.consumer.cy + positions.ai.cy) / 2,
  };

  return (
    <div className="w-full max-w-[480px] mx-auto select-none">
      <svg viewBox="0 0 540 540" className="w-full h-auto" role="img" aria-label="Giraffy Intelligence Venn Diagram">
        {/* Circles with brand colors and transparency */}
        <circle
          cx={positions.market.cx} cy={positions.market.cy} r={R}
          fill="#00482F" opacity={0.7}
        />
        <circle
          cx={positions.consumer.cx} cy={positions.consumer.cy} r={R}
          fill="#267F4C" opacity={0.6}
        />
        <circle
          cx={positions.ai.cx} cy={positions.ai.cy} r={R}
          fill="#80C7AE" opacity={0.55}
        />

        {/* Center highlight */}
        <circle
          cx={cx} cy={cy} r={28}
          fill="#DDFA88" opacity={0.35}
        />

        {/* Market Reality label */}
        <text x={positions.market.cx} y={positions.market.cy - 40} textAnchor="middle"
          className="fill-white font-bold text-[12px] uppercase tracking-[0.14em]">
          {labels.market.title}
        </text>
        <text x={positions.market.cx} y={positions.market.cy - 24} textAnchor="middle"
          className="fill-white/50 text-[9px]">
          {labels.market.subtitle}
        </text>

        {/* Consumer Intent label */}
        <text x={positions.consumer.cx - 16} y={positions.consumer.cy + 44} textAnchor="middle"
          className="fill-white font-bold text-[12px] uppercase tracking-[0.14em]">
          {labels.consumer.title}
        </text>
        <text x={positions.consumer.cx - 16} y={positions.consumer.cy + 60} textAnchor="middle"
          className="fill-white/50 text-[9px]">
          {labels.consumer.subtitle}
        </text>

        {/* AI Perception label */}
        <text x={positions.ai.cx + 16} y={positions.ai.cy + 44} textAnchor="middle"
          className="fill-white font-bold text-[12px] uppercase tracking-[0.14em]">
          {labels.ai.title}
        </text>
        <text x={positions.ai.cx + 16} y={positions.ai.cy + 60} textAnchor="middle"
          className="fill-white/50 text-[9px]">
          {labels.ai.subtitle}
        </text>

        {/* Overlap labels */}
        <text x={mcMid.x} y={mcMid.y + 4} textAnchor="middle"
          className="fill-white/70 text-[8px] font-medium">
          {labels.overlaps.marketConsumer}
        </text>
        <text x={maMid.x} y={maMid.y + 4} textAnchor="middle"
          className="fill-white/70 text-[8px] font-medium">
          {labels.overlaps.marketAi}
        </text>
        <text x={caMid.x} y={caMid.y + 4} textAnchor="middle"
          className="fill-white/70 text-[8px] font-medium">
          {labels.overlaps.consumerAi}
        </text>

        {/* Center label */}
        <text x={cx} y={cy - 6} textAnchor="middle"
          className="fill-white font-bold text-[10px] uppercase tracking-[0.16em]">
          {labels.center.label.split("\n")[0]}
        </text>
        <text x={cx} y={cy + 8} textAnchor="middle"
          className="fill-white font-bold text-[10px] uppercase tracking-[0.16em]">
          {labels.center.label.split("\n")[1] || ""}
        </text>
        <text x={cx} y={cy + 22} textAnchor="middle"
          className="fill-white/40 text-[7px]">
          {labels.center.microcopy}
        </text>
      </svg>
    </div>
  );
};

export default VennDiagram;
