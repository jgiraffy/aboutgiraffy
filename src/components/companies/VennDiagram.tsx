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

const VennDiagram = ({ labels }: VennDiagramProps) => {
  const [active, setActive] = useState<Signal>(null);

  const getOpacity = (signal: Signal) => {
    if (!active) return 0.7;
    return active === signal ? 0.85 : 0.25;
  };

  const getCenterOpacity = () => {
    if (!active) return 0.9;
    return 0.4;
  };

  return (
    <div className="relative w-full max-w-[540px] mx-auto aspect-square select-none">
      <svg viewBox="0 0 540 540" className="w-full h-full" role="img">
        <defs>
          {/* Market Reality - dark green */}
          <radialGradient id="grad-market" cx="50%" cy="50%">
            <stop offset="0%" stopColor="hsl(159, 100%, 22%)" />
            <stop offset="100%" stopColor="hsl(159, 100%, 14%)" />
          </radialGradient>
          {/* Consumer Intent - warm brown */}
          <radialGradient id="grad-consumer" cx="50%" cy="50%">
            <stop offset="0%" stopColor="hsl(20, 45%, 38%)" />
            <stop offset="100%" stopColor="hsl(20, 40%, 28%)" />
          </radialGradient>
          {/* AI Perception - deep indigo */}
          <radialGradient id="grad-ai" cx="50%" cy="50%">
            <stop offset="0%" stopColor="hsl(245, 40%, 38%)" />
            <stop offset="100%" stopColor="hsl(245, 35%, 28%)" />
          </radialGradient>
        </defs>

        {/* Market Reality - top center */}
        <circle
          cx="270"
          cy="190"
          r="170"
          fill="url(#grad-market)"
          opacity={getOpacity("market")}
          className="cursor-pointer transition-opacity duration-300"
          onMouseEnter={() => setActive("market")}
          onMouseLeave={() => setActive(null)}
        />

        {/* Consumer Intent - bottom left */}
        <circle
          cx="175"
          cy="360"
          r="160"
          fill="url(#grad-consumer)"
          opacity={getOpacity("consumer")}
          className="cursor-pointer transition-opacity duration-300"
          onMouseEnter={() => setActive("consumer")}
          onMouseLeave={() => setActive(null)}
        />

        {/* AI Perception - bottom right */}
        <circle
          cx="365"
          cy="360"
          r="160"
          fill="url(#grad-ai)"
          opacity={getOpacity("ai")}
          className="cursor-pointer transition-opacity duration-300"
          onMouseEnter={() => setActive("ai")}
          onMouseLeave={() => setActive(null)}
        />

        {/* Center glow */}
        <circle
          cx="270"
          cy="310"
          r="52"
          fill="hsl(50, 50%, 55%)"
          opacity={getCenterOpacity()}
          className="transition-opacity duration-300"
        />

        {/* Market Reality label */}
        <text x="270" y="140" textAnchor="middle" className="fill-white font-bold text-[15px] uppercase tracking-wider">
          {labels.market.title}
        </text>
        <text x="270" y="162" textAnchor="middle" className="fill-white/60 text-[12px]">
          {labels.market.subtitle}
        </text>

        {/* Consumer Intent label */}
        <text x="140" y="430" textAnchor="middle" className="fill-white font-bold text-[14px] uppercase tracking-wider">
          {labels.consumer.title}
        </text>
        <text x="140" y="450" textAnchor="middle" className="fill-white/60 text-[12px]">
          {labels.consumer.subtitle}
        </text>

        {/* AI Perception label */}
        <text x="400" y="430" textAnchor="middle" className="fill-white font-bold text-[14px] uppercase tracking-wider">
          {labels.ai.title}
        </text>
        <text x="400" y="450" textAnchor="middle" className="fill-white/60 text-[12px]">
          {labels.ai.subtitle}
        </text>

        {/* Intersection labels */}
        <text x="205" y="285" textAnchor="middle" className="fill-white/80 text-[11px]">
          {labels.intersections.supplyDemand}
        </text>
        <text x="335" y="275" textAnchor="middle" className="fill-white/80 text-[11px]">
          {labels.intersections.aiBiasMarket}
        </text>
        <text x="270" y="385" textAnchor="middle" className="fill-white/80 text-[11px]">
          {labels.intersections.aiInfluence}
        </text>

        {/* Center label */}
        <text x="270" y="305" textAnchor="middle" className="fill-foreground font-bold text-[12px] uppercase tracking-wider">
          {labels.intersections.center.split("\n")[0] || labels.intersections.center}
        </text>
        <text x="270" y="322" textAnchor="middle" className="fill-foreground font-bold text-[12px] uppercase tracking-wider">
          {labels.intersections.center.split("\n")[1] || ""}
        </text>
      </svg>
    </div>
  );
};

export default VennDiagram;
