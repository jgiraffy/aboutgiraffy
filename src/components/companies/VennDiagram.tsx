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
          <clipPath id="clip-market">
            <circle cx={positions.market.cx} cy={positions.market.cy} r={R} />
          </clipPath>
          <clipPath id="clip-consumer">
            <circle cx={positions.consumer.cx} cy={positions.consumer.cy} r={R} />
          </clipPath>
          <clipPath id="clip-ai">
            <circle cx={positions.ai.cx} cy={positions.ai.cy} r={R} />
          </clipPath>
        </defs>

        {/* Base circles — solid brand colors, no opacity */}
        <circle cx={positions.market.cx} cy={positions.market.cy} r={R}
          fill="#00482F" />
        <circle cx={positions.consumer.cx} cy={positions.consumer.cy} r={R}
          fill="#267F4C" />
        <circle cx={positions.ai.cx} cy={positions.ai.cy} r={R}
          fill="#80C7AE" />

        {/* market ∩ consumer — distinct warm green */}
        <g clipPath="url(#clip-consumer)">
          <circle cx={positions.market.cx} cy={positions.market.cy} r={R}
            fill="#1B6B3A" />
        </g>

        {/* market ∩ ai — distinct teal */}
        <g clipPath="url(#clip-ai)">
          <circle cx={positions.market.cx} cy={positions.market.cy} r={R}
            fill="#3A8F7A" />
        </g>

        {/* consumer ∩ ai — distinct light mint */}
        <g clipPath="url(#clip-ai)">
          <circle cx={positions.consumer.cx} cy={positions.consumer.cy} r={R}
            fill="#5DB894" />
        </g>

        {/* Center — all three overlap */}
        <g clipPath="url(#clip-consumer)">
          <g clipPath="url(#clip-ai)">
            <circle cx={positions.market.cx} cy={positions.market.cy} r={R}
              fill="#DDFA88" />
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

        {/* Consumer Intent — far bottom-left, stacked */}
        <text x={positions.consumer.cx - 55} y={positions.consumer.cy + 40} textAnchor="middle"
          className="fill-white font-bold text-[14px] uppercase tracking-[0.14em]">
          {"CONSUMER"}
        </text>
        <text x={positions.consumer.cx - 55} y={positions.consumer.cy + 58} textAnchor="middle"
          className="fill-white font-bold text-[14px] uppercase tracking-[0.14em]">
          {"INTENT"}
        </text>
        <text x={positions.consumer.cx - 55} y={positions.consumer.cy + 74} textAnchor="middle"
          className="fill-white/50 text-[10px]">
          {labels.consumer.subtitle}
        </text>

        {/* AI Perception — far bottom-right, stacked */}
        <text x={positions.ai.cx + 55} y={positions.ai.cy + 40} textAnchor="middle"
          className="fill-white font-bold text-[14px] uppercase tracking-[0.14em]">
          {"AI"}
        </text>
        <text x={positions.ai.cx + 55} y={positions.ai.cy + 58} textAnchor="middle"
          className="fill-white font-bold text-[14px] uppercase tracking-[0.14em]">
          {"PERCEPTION"}
        </text>
        <text x={positions.ai.cx + 55} y={positions.ai.cy + 74} textAnchor="middle"
          className="fill-white/50 text-[10px]">
          {labels.ai.subtitle}
        </text>

        {/* Center label */}
        <text x={cx} y={cy - 6} textAnchor="middle"
          className="fill-black font-bold text-[11px] uppercase tracking-[0.16em]">
          {labels.center.label.split("\n")[0]}
        </text>
        <text x={cx} y={cy + 10} textAnchor="middle"
          className="fill-black font-bold text-[11px] uppercase tracking-[0.16em]">
          {labels.center.label.split("\n")[1] || ""}
        </text>
      </svg>
    </div>
  );
};

export default VennDiagram;
