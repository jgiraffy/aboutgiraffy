import { useState } from "react";

type Region = "market" | "consumer" | "ai" | "center" | null;

interface CircleData {
  title: string;
  subtitle: string;
  hoverSubheading: string;
  bullets: string[];
  closingLine: string;
}

interface CenterData {
  label: string;
  microcopy: string;
  hoverTitle: string;
  hoverBody: string;
}

interface VennDiagramProps {
  labels: {
    market: CircleData;
    consumer: CircleData;
    ai: CircleData;
    center: CenterData;
  };
}

const R = 148;
const cx = 270, cy = 280;
const offset = 88;

const positions = {
  market:   { cx: cx, cy: cy - offset * 1.15 },
  consumer: { cx: cx - offset, cy: cy + offset * 0.5 },
  ai:       { cx: cx + offset, cy: cy + offset * 0.5 },
};

// Card positions (outside the diagram)
const cardPositions: Record<string, { top?: string; bottom?: string; left?: string; right?: string; transform?: string }> = {
  market:   { bottom: "100%", left: "50%", transform: "translateX(-50%) translateY(-12px)" },
  consumer: { top: "50%", right: "100%", transform: "translateX(-12px) translateY(-50%)" },
  ai:       { top: "50%", left: "100%", transform: "translateX(12px) translateY(-50%)" },
  center:   { top: "100%", left: "50%", transform: "translateX(-50%) translateY(12px)" },
};

const VennInfoCard = ({ data, type }: { data: CircleData | CenterData; type: Region }) => {
  if (!type) return null;

  const pos = cardPositions[type] || {};

  if (type === "center") {
    const d = data as CenterData;
    return (
      <div
        className="absolute z-20 w-72 bg-[hsl(220,25%,12%)] border border-primary/30 rounded-xl p-5 shadow-2xl animate-in fade-in duration-200"
        style={pos}
      >
        <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">{d.hoverTitle}</h4>
        <p className="text-xs text-white/60 leading-relaxed">{d.hoverBody}</p>
      </div>
    );
  }

  const d = data as CircleData;
  return (
    <div
      className="absolute z-20 w-72 bg-[hsl(220,25%,12%)] border border-primary/30 rounded-xl p-5 shadow-2xl animate-in fade-in duration-200"
      style={pos}
    >
      <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1">{d.title}</h4>
      <p className="text-xs text-white/50 italic mb-4">{d.hoverSubheading}</p>
      <ul className="space-y-2 mb-4">
        {d.bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2 text-xs text-white/80">
            <span className="text-accent mt-px">→</span>
            {b}
          </li>
        ))}
      </ul>
      <p className="text-[10px] text-white/40 leading-relaxed">{d.closingLine}</p>
    </div>
  );
};

const VennDiagram = ({ labels }: VennDiagramProps) => {
  const [active, setActive] = useState<Region>(null);

  const getOpacity = (signal: "market" | "consumer" | "ai") => {
    if (!active) return 0.5;
    if (active === signal) return 0.8;
    if (active === "center") return 0.6;
    return 0.2;
  };

  const activeData = active === "center" ? labels.center
    : active ? labels[active]
    : null;

  return (
    <div className="relative w-full max-w-[560px] mx-auto select-none" style={{ aspectRatio: "1" }}>
      {/* Hover card */}
      {active && activeData && <VennInfoCard data={activeData} type={active} />}

      <svg viewBox="0 0 540 540" className="w-full h-full" role="img">
        <defs>
          {/* Glow filter for center */}
          <filter id="glow-center" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background circle for dark navy tone */}
        <circle cx={cx} cy={cy} r="255" fill="hsl(220, 30%, 8%)" />

        {/* Circles with screen blend */}
        <g style={{ mixBlendMode: "screen" }}>
          <circle
            cx={positions.market.cx} cy={positions.market.cy} r={R}
            fill="hsl(75, 85%, 50%)"
            opacity={getOpacity("market")}
            className="transition-all duration-300"
          />
          <circle
            cx={positions.consumer.cx} cy={positions.consumer.cy} r={R}
            fill="hsl(30, 85%, 50%)"
            opacity={getOpacity("consumer")}
            className="transition-all duration-300"
          />
          <circle
            cx={positions.ai.cx} cy={positions.ai.cy} r={R}
            fill="hsl(215, 70%, 55%)"
            opacity={getOpacity("ai")}
            className="transition-all duration-300"
          />
        </g>

        {/* Center glow accent */}
        <circle
          cx={cx} cy={cy}
          r="32"
          fill="hsl(75, 92%, 76%)"
          opacity={active === "center" ? 0.7 : 0.35}
          filter="url(#glow-center)"
          className="transition-opacity duration-300"
        />

        {/* Invisible hover targets */}
        {/* Market */}
        <circle
          cx={positions.market.cx} cy={positions.market.cy} r={R}
          fill="transparent" className="cursor-pointer"
          onMouseEnter={() => setActive("market")}
          onMouseLeave={() => setActive(null)}
        />
        {/* Consumer */}
        <circle
          cx={positions.consumer.cx} cy={positions.consumer.cy} r={R}
          fill="transparent" className="cursor-pointer"
          onMouseEnter={() => setActive("consumer")}
          onMouseLeave={() => setActive(null)}
        />
        {/* AI */}
        <circle
          cx={positions.ai.cx} cy={positions.ai.cy} r={R}
          fill="transparent" className="cursor-pointer"
          onMouseEnter={() => setActive("ai")}
          onMouseLeave={() => setActive(null)}
        />

        {/* Center hover target (smaller, on top) */}
        <circle
          cx={cx} cy={cy}
          r="42"
          fill="transparent" className="cursor-pointer"
          onMouseEnter={() => setActive("center")}
          onMouseLeave={() => setActive(null)}
        />

        {/* Labels - Market Reality */}
        <text x={positions.market.cx} y={positions.market.cy - 48} textAnchor="middle"
          className="fill-white font-bold text-[13px] uppercase tracking-[0.15em] pointer-events-none"
          style={{ textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}>
          {labels.market.title}
        </text>
        <text x={positions.market.cx} y={positions.market.cy - 31} textAnchor="middle"
          className="fill-white/50 text-[10px] pointer-events-none"
          style={{ textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}>
          {labels.market.subtitle}
        </text>

        {/* Labels - Consumer Intent */}
        <text x={positions.consumer.cx - 20} y={positions.consumer.cy + 48} textAnchor="middle"
          className="fill-white font-bold text-[13px] uppercase tracking-[0.15em] pointer-events-none"
          style={{ textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}>
          {labels.consumer.title}
        </text>
        <text x={positions.consumer.cx - 20} y={positions.consumer.cy + 65} textAnchor="middle"
          className="fill-white/50 text-[10px] pointer-events-none"
          style={{ textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}>
          {labels.consumer.subtitle}
        </text>

        {/* Labels - AI Perception */}
        <text x={positions.ai.cx + 20} y={positions.ai.cy + 48} textAnchor="middle"
          className="fill-white font-bold text-[13px] uppercase tracking-[0.15em] pointer-events-none"
          style={{ textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}>
          {labels.ai.title}
        </text>
        <text x={positions.ai.cx + 20} y={positions.ai.cy + 65} textAnchor="middle"
          className="fill-white/50 text-[10px] pointer-events-none"
          style={{ textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}>
          {labels.ai.subtitle}
        </text>

        {/* Center label */}
        <text x={cx} y={cy - 4} textAnchor="middle"
          className="fill-white font-bold text-[11px] uppercase tracking-[0.18em] pointer-events-none"
          style={{ textShadow: "0 1px 8px rgba(0,0,0,0.8)" }}>
          {labels.center.label.split("\n")[0]}
        </text>
        <text x={cx} y={cy + 12} textAnchor="middle"
          className="fill-white font-bold text-[11px] uppercase tracking-[0.18em] pointer-events-none"
          style={{ textShadow: "0 1px 8px rgba(0,0,0,0.8)" }}>
          {labels.center.label.split("\n")[1] || ""}
        </text>
        <text x={cx} y={cy + 28} textAnchor="middle"
          className="fill-white/40 text-[8px] pointer-events-none" style={{ textShadow: "0 1px 4px rgba(0,0,0,0.6)" }}>
          {labels.center.microcopy}
        </text>
      </svg>
    </div>
  );
};

export default VennDiagram;
