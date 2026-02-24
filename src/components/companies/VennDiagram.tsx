interface VennLabels {
  market: { title: string; subtitle: string };
  consumer: { title: string; subtitle: string };
  ai: { title: string; subtitle: string };
  center: { label: string; microcopy: string };
}

interface Interaction {
  code: string;
  title: string;
  description: string;
}

interface VennDiagramProps {
  labels: VennLabels;
  interactions?: Interaction[];
}

const R = 160;
const cx = 310, cy = 310;
const offset = 95;

const positions = {
  market:   { cx: cx, cy: cy - offset * 1.15 },
  consumer: { cx: cx - offset, cy: cy + offset * 0.5 },
  ai:       { cx: cx + offset, cy: cy + offset * 0.5 },
};

// 2-set overlap colors matching the Venn fills
const OVERLAP_COLORS: Record<string, string> = {
  "01–02": "#1B6B3A",
  "01–03": "#3A8F7A",
  "02–03": "#5DB894",
};

// Positions for 2-set overlap labels (away from triple center)
const overlapPositions: Record<string, { x: number; y: number }> = {
  "01–02": { x: 230, y: 260 },
  "01–03": { x: 390, y: 260 },
  "02–03": { x: 310, y: 410 },
};

const VennDiagram = ({ labels, interactions }: VennDiagramProps) => {
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

        {/* Market Reality — number left of title */}
        <circle cx={positions.market.cx - 62} cy={positions.market.cy - 52} r={9} fill="white" />
        <text x={positions.market.cx - 62} y={positions.market.cy - 52} textAnchor="middle"
          dominantBaseline="central" className="font-bold text-[10px]" fill="#00482F">
          {"1"}
        </text>
        <text x={positions.market.cx - 48} y={positions.market.cy - 52} textAnchor="start"
          dominantBaseline="central" className="fill-white font-bold text-[14px] uppercase tracking-[0.14em]">
          {labels.market.title}
        </text>
        <text x={positions.market.cx} y={positions.market.cy - 35} textAnchor="middle"
          className="fill-white/50 text-[10px]">
          {labels.market.subtitle}
        </text>

        {/* Consumer Intent — number left of stacked title, subtitle aligned */}
        <circle cx={positions.consumer.cx - 95} cy={positions.consumer.cy + 44} r={9} fill="white" />
        <text x={positions.consumer.cx - 95} y={positions.consumer.cy + 44} textAnchor="middle"
          dominantBaseline="central" className="font-bold text-[10px]" fill="#00482F">
          {"2"}
        </text>
        <text x={positions.consumer.cx - 81} y={positions.consumer.cy + 36} textAnchor="start"
          className="fill-white font-bold text-[14px] uppercase tracking-[0.14em]">
          {"CONSUMER"}
        </text>
        <text x={positions.consumer.cx - 81} y={positions.consumer.cy + 54} textAnchor="start"
          className="fill-white font-bold text-[14px] uppercase tracking-[0.14em]">
          {"INTENT"}
        </text>
        <text x={positions.consumer.cx - 81} y={positions.consumer.cy + 70} textAnchor="start"
          className="fill-white/50 text-[10px]">
          {labels.consumer.subtitle}
        </text>

        {/* AI Perception — shifted left, subtitle aligned to title */}
        <circle cx={positions.ai.cx + 10} cy={positions.ai.cy + 44} r={9} fill="white" />
        <text x={positions.ai.cx + 10} y={positions.ai.cy + 44} textAnchor="middle"
          dominantBaseline="central" className="font-bold text-[10px]" fill="#00482F">
          {"3"}
        </text>
        <text x={positions.ai.cx + 24} y={positions.ai.cy + 36} textAnchor="start"
          className="fill-white font-bold text-[14px] uppercase tracking-[0.14em]">
          {"AI"}
        </text>
        <text x={positions.ai.cx + 24} y={positions.ai.cy + 54} textAnchor="start"
          className="fill-white font-bold text-[14px] uppercase tracking-[0.14em]">
          {"PERCEPTION"}
        </text>
        <text x={positions.ai.cx + 24} y={positions.ai.cy + 70} textAnchor="start"
          className="fill-white/50 text-[10px]">
          {labels.ai.subtitle}
        </text>

        {/* 2-set overlap labels */}
        {interactions?.map((item) => {
          const pos = overlapPositions[item.code];
          const color = OVERLAP_COLORS[item.code];
          if (!pos || !color) return null;
          return (
            <g key={item.code}>
              <circle cx={pos.x} cy={pos.y - 14} r={9} fill="white" />
              <text x={pos.x} y={pos.y - 14} textAnchor="middle"
                dominantBaseline="central" className="font-bold text-[10px]" fill={color}>
                {item.code.replace("0", "")}
              </text>
              <text x={pos.x} y={pos.y + 2} textAnchor="middle"
                dominantBaseline="central" className="fill-white font-bold text-[8px] uppercase tracking-[0.08em]">
                {item.title.split(" ").slice(0, 2).join(" ")}
              </text>
              {item.title.split(" ").length > 2 && (
                <text x={pos.x} y={pos.y + 13} textAnchor="middle"
                  dominantBaseline="central" className="fill-white font-bold text-[8px] uppercase tracking-[0.08em]">
                  {item.title.split(" ").slice(2).join(" ")}
                </text>
              )}
            </g>
          );
        })}

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
