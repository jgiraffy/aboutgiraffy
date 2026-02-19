import { useState } from "react";

type Region = "market" | "consumer" | "ai" | "mc" | "ma" | "ca" | "center" | null;

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

const VennDiagram = ({ labels }: VennDiagramProps) => {
  const [active, setActive] = useState<Region>(null);

  // Equilateral triangle layout - 3 equal circles
  const R = 155;
  const cx = 270, cy = 290;
  const offset = 95;

  const pos = {
    market:   { cx: cx, cy: cy - offset * 1.1 },
    consumer: { cx: cx - offset, cy: cy + offset * 0.55 },
    ai:       { cx: cx + offset, cy: cy + offset * 0.55 },
  };

  // Intersection midpoints
  const mid = {
    mc: { x: (pos.market.cx + pos.consumer.cx) / 2, y: (pos.market.cy + pos.consumer.cy) / 2 },
    ma: { x: (pos.market.cx + pos.ai.cx) / 2, y: (pos.market.cy + pos.ai.cy) / 2 },
    ca: { x: (pos.consumer.cx + pos.ai.cx) / 2, y: (pos.consumer.cy + pos.ai.cy) / 2 },
  };

  const getCircleOpacity = (signal: "market" | "consumer" | "ai") => {
    if (!active) return 0.55;
    if (active === signal) return 0.75;
    // Highlight if this circle is part of an active intersection
    if (active === "mc" && (signal === "market" || signal === "consumer")) return 0.7;
    if (active === "ma" && (signal === "market" || signal === "ai")) return 0.7;
    if (active === "ca" && (signal === "consumer" || signal === "ai")) return 0.7;
    if (active === "center") return 0.65;
    return 0.15;
  };

  // Clip path IDs
  const clipIds = {
    mc: "clip-market-consumer",
    ma: "clip-market-ai",
    ca: "clip-consumer-ai",
    center: "clip-center",
  };

  return (
    <div className="relative w-full max-w-[560px] mx-auto aspect-square select-none">
      <svg viewBox="0 0 540 540" className="w-full h-full" role="img">
        <defs>
          {/* Clip for Market ∩ Consumer (excluding AI) */}
          <clipPath id={clipIds.mc}>
            <circle cx={pos.consumer.cx} cy={pos.consumer.cy} r={R} />
          </clipPath>
          {/* Clip for Market ∩ AI (excluding Consumer) */}
          <clipPath id={clipIds.ma}>
            <circle cx={pos.ai.cx} cy={pos.ai.cy} r={R} />
          </clipPath>
          {/* Clip for Consumer ∩ AI (excluding Market) */}
          <clipPath id={clipIds.ca}>
            <circle cx={pos.consumer.cx} cy={pos.consumer.cy} r={R} />
          </clipPath>
          {/* Clip for triple intersection: Market ∩ Consumer, then clip by AI */}
          <clipPath id="clip-center-step1">
            <circle cx={pos.consumer.cx} cy={pos.consumer.cy} r={R} />
          </clipPath>
          <clipPath id="clip-center-step2">
            <circle cx={pos.ai.cx} cy={pos.ai.cy} r={R} />
          </clipPath>
        </defs>

        {/* Base circles with screen blend */}
        <g style={{ mixBlendMode: "screen" }}>
          <circle
            cx={pos.market.cx} cy={pos.market.cy} r={R}
            fill="hsl(75, 85%, 55%)"
            opacity={getCircleOpacity("market")}
            className="transition-opacity duration-300"
          />
          <circle
            cx={pos.consumer.cx} cy={pos.consumer.cy} r={R}
            fill="hsl(35, 90%, 55%)"
            opacity={getCircleOpacity("consumer")}
            className="transition-opacity duration-300"
          />
          <circle
            cx={pos.ai.cx} cy={pos.ai.cy} r={R}
            fill="hsl(215, 70%, 58%)"
            opacity={getCircleOpacity("ai")}
            className="transition-opacity duration-300"
          />
        </g>

        {/* Invisible hover targets for each circle's unique area */}
        <circle
          cx={pos.market.cx} cy={pos.market.cy} r={R}
          fill="transparent"
          className="cursor-pointer"
          onMouseEnter={() => setActive("market")}
          onMouseLeave={() => setActive(null)}
        />
        <circle
          cx={pos.consumer.cx} cy={pos.consumer.cy} r={R}
          fill="transparent"
          className="cursor-pointer"
          onMouseEnter={() => setActive("consumer")}
          onMouseLeave={() => setActive(null)}
        />
        <circle
          cx={pos.ai.cx} cy={pos.ai.cy} r={R}
          fill="transparent"
          className="cursor-pointer"
          onMouseEnter={() => setActive("ai")}
          onMouseLeave={() => setActive(null)}
        />

        {/* Hoverable intersection: Market ∩ Consumer (Supply vs Demand) */}
        <g clipPath={`url(#${clipIds.mc})`}>
          <circle
            cx={pos.market.cx} cy={pos.market.cy} r={R}
            fill="transparent"
            className="cursor-pointer"
            onMouseEnter={() => setActive("mc")}
            onMouseLeave={() => setActive(null)}
          />
        </g>

        {/* Hoverable intersection: Market ∩ AI (AI Bias vs Market) */}
        <g clipPath={`url(#${clipIds.ma})`}>
          <circle
            cx={pos.market.cx} cy={pos.market.cy} r={R}
            fill="transparent"
            className="cursor-pointer"
            onMouseEnter={() => setActive("ma")}
            onMouseLeave={() => setActive(null)}
          />
        </g>

        {/* Hoverable intersection: Consumer ∩ AI (AI Influence on Demand) */}
        <g clipPath={`url(#${clipIds.ca})`}>
          <circle
            cx={pos.ai.cx} cy={pos.ai.cy} r={R}
            fill="transparent"
            className="cursor-pointer"
            onMouseEnter={() => setActive("ca")}
            onMouseLeave={() => setActive(null)}
          />
        </g>

        {/* Hoverable center: triple intersection */}
        <g clipPath="url(#clip-center-step1)">
          <g clipPath="url(#clip-center-step2)">
            <circle
              cx={pos.market.cx} cy={pos.market.cy} r={R}
              fill="transparent"
              className="cursor-pointer"
              onMouseEnter={() => setActive("center")}
              onMouseLeave={() => setActive(null)}
            />
          </g>
        </g>

        {/* Market Reality label */}
        <text x={pos.market.cx} y={pos.market.cy - 55} textAnchor="middle" className="fill-white font-bold text-[14px] uppercase tracking-wider pointer-events-none" style={{ textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}>
          {labels.market.title}
        </text>
        <text x={pos.market.cx} y={pos.market.cy - 37} textAnchor="middle" className="fill-white/70 text-[11px] pointer-events-none" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.5)" }}>
          {labels.market.subtitle}
        </text>

        {/* Consumer Intent label */}
        <text x={pos.consumer.cx - 30} y={pos.consumer.cy + 55} textAnchor="middle" className="fill-white font-bold text-[14px] uppercase tracking-wider pointer-events-none" style={{ textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}>
          {labels.consumer.title}
        </text>
        <text x={pos.consumer.cx - 30} y={pos.consumer.cy + 73} textAnchor="middle" className="fill-white/70 text-[11px] pointer-events-none" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.5)" }}>
          {labels.consumer.subtitle}
        </text>

        {/* AI Perception label */}
        <text x={pos.ai.cx + 30} y={pos.ai.cy + 55} textAnchor="middle" className="fill-white font-bold text-[14px] uppercase tracking-wider pointer-events-none" style={{ textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}>
          {labels.ai.title}
        </text>
        <text x={pos.ai.cx + 30} y={pos.ai.cy + 73} textAnchor="middle" className="fill-white/70 text-[11px] pointer-events-none" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.5)" }}>
          {labels.ai.subtitle}
        </text>

        {/* Intersection labels - positioned in their segments */}
        <text x={mid.mc.x - 12} y={mid.mc.y + 5} textAnchor="middle" className="fill-white font-medium text-[10px] pointer-events-none" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.6)" }}>
          {labels.intersections.supplyDemand.split(" ").slice(0, 2).join(" ")}
        </text>
        <text x={mid.mc.x - 12} y={mid.mc.y + 18} textAnchor="middle" className="fill-white font-medium text-[10px] pointer-events-none" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.6)" }}>
          {labels.intersections.supplyDemand.split(" ").slice(2).join(" ")}
        </text>

        <text x={mid.ma.x + 12} y={mid.ma.y + 5} textAnchor="middle" className="fill-white font-medium text-[10px] pointer-events-none" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.6)" }}>
          {labels.intersections.aiBiasMarket.split(" ").slice(0, 2).join(" ")}
        </text>
        <text x={mid.ma.x + 12} y={mid.ma.y + 18} textAnchor="middle" className="fill-white font-medium text-[10px] pointer-events-none" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.6)" }}>
          {labels.intersections.aiBiasMarket.split(" ").slice(2).join(" ")}
        </text>

        <text x={mid.ca.x} y={mid.ca.y + 5} textAnchor="middle" className="fill-white font-medium text-[10px] pointer-events-none" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.6)" }}>
          {labels.intersections.aiInfluence.split(" ").slice(0, 2).join(" ")}
        </text>
        <text x={mid.ca.x} y={mid.ca.y + 18} textAnchor="middle" className="fill-white font-medium text-[10px] pointer-events-none" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.6)" }}>
          {labels.intersections.aiInfluence.split(" ").slice(2).join(" ")}
        </text>

        {/* Center label */}
        <text x={cx} y={cy + 6} textAnchor="middle" className="fill-white font-bold text-[12px] uppercase tracking-wider pointer-events-none" style={{ textShadow: "0 1px 6px rgba(0,0,0,0.7)" }}>
          {labels.intersections.center.split("\n")[0] || labels.intersections.center}
        </text>
        <text x={cx} y={cy + 22} textAnchor="middle" className="fill-white font-bold text-[12px] uppercase tracking-wider pointer-events-none" style={{ textShadow: "0 1px 6px rgba(0,0,0,0.7)" }}>
          {labels.intersections.center.split("\n")[1] || ""}
        </text>
      </svg>
    </div>
  );
};

export default VennDiagram;
