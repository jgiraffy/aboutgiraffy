import { useState } from "react";

type Signal = "market" | "consumer" | "ai" | null;

interface VennDiagramProps {
  labels: {
    market: { title: string; subtitle: string };
    consumer: { title: string; subtitle: string };
    ai: { title: string; subtitle: string };
    intersections: {
      supplyDemand: string;
      aiBiasMarket: string;
      aiInfluence: string;
      center: string;
    };
  };
}

// Three colors that pop on dark green and blend into distinct intersection tones
// Electric lime (brand accent), warm amber, cool blue
const COLORS = {
  market: "hsl(75, 85%, 55%)",     // Electric lime/chartreuse
  consumer: "hsl(35, 90%, 55%)",   // Warm amber
  ai: "hsl(215, 70%, 58%)",        // Cool blue
};

const VennDiagram = ({ labels }: VennDiagramProps) => {
  const [active, setActive] = useState<Signal>(null);

  const getOpacity = (signal: Signal) => {
    if (!active) return 0.55;
    return active === signal ? 0.75 : 0.15;
  };

  // Circle positions: equilateral triangle layout
  const R = 155;
  const cx = 270, cy = 290;
  const offset = 95;
  const circles = {
    market:   { cx: cx, cy: cy - offset * 1.1, color: COLORS.market },
    consumer: { cx: cx - offset, cy: cy + offset * 0.55, color: COLORS.consumer },
    ai:       { cx: cx + offset, cy: cy + offset * 0.55, color: COLORS.ai },
  };

  return (
    <div className="relative w-full max-w-[560px] mx-auto aspect-square select-none">
      <svg viewBox="0 0 540 540" className="w-full h-full" role="img">
        {/* Use screen blend so overlaps create natural, distinct intersection colors */}
        <g style={{ mixBlendMode: "screen" }}>
          {/* Market Reality - top */}
          <circle
            cx={circles.market.cx}
            cy={circles.market.cy}
            r={R}
            fill={circles.market.color}
            opacity={getOpacity("market")}
            className="cursor-pointer transition-opacity duration-300"
            onMouseEnter={() => setActive("market")}
            onMouseLeave={() => setActive(null)}
          />

          {/* Consumer Intent - bottom left */}
          <circle
            cx={circles.consumer.cx}
            cy={circles.consumer.cy}
            r={R}
            fill={circles.consumer.color}
            opacity={getOpacity("consumer")}
            className="cursor-pointer transition-opacity duration-300"
            onMouseEnter={() => setActive("consumer")}
            onMouseLeave={() => setActive(null)}
          />

          {/* AI Perception - bottom right */}
          <circle
            cx={circles.ai.cx}
            cy={circles.ai.cy}
            r={R}
            fill={circles.ai.color}
            opacity={getOpacity("ai")}
            className="cursor-pointer transition-opacity duration-300"
            onMouseEnter={() => setActive("ai")}
            onMouseLeave={() => setActive(null)}
          />
        </g>

        {/* Market Reality label */}
        <text x={circles.market.cx} y={circles.market.cy - 55} textAnchor="middle" className="fill-white font-bold text-[14px] uppercase tracking-wider" style={{ textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}>
          {labels.market.title}
        </text>
        <text x={circles.market.cx} y={circles.market.cy - 37} textAnchor="middle" className="fill-white/70 text-[11px]" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.5)" }}>
          {labels.market.subtitle}
        </text>

        {/* Consumer Intent label */}
        <text x={circles.consumer.cx - 30} y={circles.consumer.cy + 55} textAnchor="middle" className="fill-white font-bold text-[14px] uppercase tracking-wider" style={{ textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}>
          {labels.consumer.title}
        </text>
        <text x={circles.consumer.cx - 30} y={circles.consumer.cy + 73} textAnchor="middle" className="fill-white/70 text-[11px]" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.5)" }}>
          {labels.consumer.subtitle}
        </text>

        {/* AI Perception label */}
        <text x={circles.ai.cx + 30} y={circles.ai.cy + 55} textAnchor="middle" className="fill-white font-bold text-[14px] uppercase tracking-wider" style={{ textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}>
          {labels.ai.title}
        </text>
        <text x={circles.ai.cx + 30} y={circles.ai.cy + 73} textAnchor="middle" className="fill-white/70 text-[11px]" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.5)" }}>
          {labels.ai.subtitle}
        </text>

        {/* Intersection labels */}
        <text x={cx - 48} y={cy - 22} textAnchor="middle" className="fill-white font-medium text-[10px]" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.6)" }}>
          {labels.intersections.supplyDemand}
        </text>
        <text x={cx + 48} y={cy - 22} textAnchor="middle" className="fill-white font-medium text-[10px]" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.6)" }}>
          {labels.intersections.aiBiasMarket}
        </text>
        <text x={cx} y={cy + 58} textAnchor="middle" className="fill-white font-medium text-[10px]" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.6)" }}>
          {labels.intersections.aiInfluence}
        </text>

        {/* Center label - The Decision Moment */}
        <text x={cx} y={cy + 6} textAnchor="middle" className="fill-white font-bold text-[12px] uppercase tracking-wider" style={{ textShadow: "0 1px 6px rgba(0,0,0,0.7)" }}>
          {labels.intersections.center.split("\n")[0] || labels.intersections.center}
        </text>
        <text x={cx} y={cy + 22} textAnchor="middle" className="fill-white font-bold text-[12px] uppercase tracking-wider" style={{ textShadow: "0 1px 6px rgba(0,0,0,0.7)" }}>
          {labels.intersections.center.split("\n")[1] || ""}
        </text>
      </svg>
    </div>
  );
};

export default VennDiagram;
