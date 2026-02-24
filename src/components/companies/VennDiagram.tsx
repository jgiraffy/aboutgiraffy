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
  "1–2": "#1B6B3A",
  "1–3": "#3A8F7A",
  "2–3": "#5DB894",
};

// Positions for 2-set overlap labels (away from triple center)
const overlapPositions: Record<string, { x: number; y: number }> = {
  "1–2": { x: 228, y: 258 },
  "1–3": { x: 382, y: 258 },
  "2–3": { x: 310, y: 400 },
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

        {/* Market Reality — inverted: dark circle with white number */}
        <text x={positions.market.cx} y={positions.market.cy - 52} textAnchor="middle"
          dominantBaseline="central" className="fill-white font-bold text-[14px] uppercase tracking-[0.14em]">
          {labels.market.title}
        </text>
        <circle cx={positions.market.cx + 62} cy={positions.market.cy - 52} r={9} fill="#00482F" />
        <text x={positions.market.cx + 62} y={positions.market.cy - 52} textAnchor="middle"
          dominantBaseline="central" className="font-bold text-[10px]" fill="white">
          {"1"}
        </text>
        <text x={positions.market.cx} y={positions.market.cy - 35} textAnchor="middle"
          className="fill-white/50 text-[10px]">
          {labels.market.subtitle}
        </text>

        {/* Consumer Intent — inverted: dark circle with white number */}
        <text x={positions.consumer.cx - 81} y={positions.consumer.cy + 36} textAnchor="start"
          className="fill-white font-bold text-[14px] uppercase tracking-[0.14em]">
          {"CONSUMER"}
        </text>
        <text x={positions.consumer.cx - 81} y={positions.consumer.cy + 54} textAnchor="start"
          className="fill-white font-bold text-[14px] uppercase tracking-[0.14em]">
          {"INTENT"}
        </text>
        <circle cx={positions.consumer.cx - 81 + 108} cy={positions.consumer.cy + 45} r={9} fill="#267F4C" />
        <text x={positions.consumer.cx - 81 + 108} y={positions.consumer.cy + 45} textAnchor="middle"
          dominantBaseline="central" className="font-bold text-[10px]" fill="white">
          {"2"}
        </text>
        <text x={positions.consumer.cx - 81} y={positions.consumer.cy + 70} textAnchor="start"
          className="fill-white/50 text-[10px]">
          {labels.consumer.subtitle}
        </text>

        {/* AI Perception — inverted: dark circle with white number */}
        <text x={positions.ai.cx + 24} y={positions.ai.cy + 36} textAnchor="start"
          className="fill-white font-bold text-[14px] uppercase tracking-[0.14em]">
          {"AI"}
        </text>
        <text x={positions.ai.cx + 24} y={positions.ai.cy + 54} textAnchor="start"
          className="fill-white font-bold text-[14px] uppercase tracking-[0.14em]">
          {"PERCEPTION"}
        </text>
        <circle cx={positions.ai.cx + 24 + 100} cy={positions.ai.cy + 45} r={9} fill="#80C7AE" />
        <text x={positions.ai.cx + 24 + 100} y={positions.ai.cy + 45} textAnchor="middle"
          dominantBaseline="central" className="font-bold text-[10px]" fill="white">
          {"3"}
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
              <circle cx={pos.x} cy={pos.y} r={10} fill={color} stroke="white" strokeWidth="1" />
              <text x={pos.x} y={pos.y} textAnchor="middle"
                dominantBaseline="central" className="font-bold text-[7px]" fill="white">
                {item.code}
              </text>
              <text x={pos.x} y={pos.y + 16} textAnchor="middle"
                dominantBaseline="central" className="fill-white font-semibold text-[7px] uppercase tracking-[0.06em]">
                {item.title}
              </text>
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
