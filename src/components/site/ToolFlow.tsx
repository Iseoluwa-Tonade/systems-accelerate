import { useEffect, useState } from "react";
import type { ComponentProps, ComponentType } from "react";
import { motion } from "framer-motion";
import * as L from "@/components/site/Logos";

type FlowNode = {
  id: string;
  label: string;
  sub: string;
  x: number;
  y: number;
  hue: string;
  logo: ComponentType<ComponentProps<"svg">>;
};

const VIEW_W = 480;
const VIEW_H = 560;

const NODES: FlowNode[] = [
  { id: "clay", label: "Clay", sub: "enrich", x: 40, y: 80, hue: "#14B8A6", logo: L.Clay },
  { id: "apollo", label: "Apollo", sub: "prospect", x: 40, y: 240, hue: "#4B80FF", logo: L.Apollo },
  { id: "lemlist", label: "Lemlist", sub: "outbound", x: 40, y: 400, hue: "#8B5CF6", logo: L.Lemlist },
  { id: "openai", label: "OpenAI", sub: "AI assist", x: 240, y: 48, hue: "#10B981", logo: L.OpenAI },
  { id: "hub", label: "HubSpot", sub: "CRM · lifecycle", x: 240, y: 280, hue: "#FFB800", logo: L.HubSpot },
  { id: "zapier", label: "Zapier", sub: "automate", x: 440, y: 98, hue: "#FF6A00", logo: L.Zapier },
  { id: "slack", label: "Slack", sub: "alerts", x: 440, y: 250, hue: "#D946EF", logo: L.Slack },
  { id: "powerbi", label: "Power BI", sub: "report", x: 440, y: 434, hue: "#F2C811", logo: L.PowerBI },
];

const EDGES: { from: string; d: string; sx: number; sy: number; hue: string; delay: number }[] = [
  { from: "clay", d: "M 84 78 C 160 46, 150 226, 204 282", sx: 84, sy: 78, hue: "#14B8A6", delay: 0 },
  { from: "apollo", d: "M 84 240 C 158 234, 176 276, 202 286", sx: 84, sy: 240, hue: "#4B80FF", delay: 0.4 },
  { from: "lemlist", d: "M 84 402 C 152 432, 178 360, 210 300", sx: 84, sy: 402, hue: "#8B5CF6", delay: 0.8 },
  { from: "openai", d: "M 240 108 C 240 162, 241 216, 243 264", sx: 240, sy: 108, hue: "#10B981", delay: 0.2 },
  { from: "zapier", d: "M 396 98 C 322 76, 322 248, 276 280", sx: 396, sy: 98, hue: "#FF6A00", delay: 0.6 },
  { from: "slack", d: "M 396 250 C 322 252, 306 282, 276 286", sx: 396, sy: 250, hue: "#D946EF", delay: 1 },
  { from: "powerbi", d: "M 396 434 C 322 456, 316 362, 284 322", sx: 396, sy: 434, hue: "#F2C811", delay: 1.2 },
];

function pct(px: number, total: number) {
  return `${(px / total) * 100}%`;
}

export function ToolFlow() {
  const [animateDots, setAnimateDots] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setAnimateDots(!mq.matches);
    const onChange = (e: MediaQueryListEvent) => setAnimateDots(!e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <div className="relative w-full max-w-[520px] mx-auto">
      <div className="relative aspect-[6/7] w-full">
        <div className="absolute inset-0 rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-md shadow-[0_24px_60px_-24px_rgba(0,0,0,0.7)]" />
        <div className="absolute inset-0 rounded-3xl bg-grid opacity-40 pointer-events-none" />

        {/* Connectors */}
        <svg viewBox={`0 0 ${VIEW_W} ${VIEW_H}`} className="absolute inset-0 h-full w-full">
          {EDGES.map((e) => {
            const node = NODES.find((n) => n.id === e.from)!;
            return (
              <g key={e.from}>
                <path d={e.d} stroke="rgba(255,255,255,0.14)" strokeWidth="5.25" fill="none" />
                <path
                  d={e.d}
                  stroke={node.hue}
                  strokeWidth="1.6"
                  strokeOpacity="0.35"
                  fill="none"
                  className="animate-flow"
                  style={{ animationDelay: `${e.delay}s` }}
                />
                {animateDots && (
                  <>
                    <circle cx={e.sx} cy={e.sy} r="5" fill={node.hue} opacity="0.28">
                      <animateMotion dur="2.4s" begin={`${e.delay}s`} repeatCount="indefinite" path={e.d} />
                    </circle>
                    <circle cx={e.sx} cy={e.sy} r="2.5" fill="#FFE9A8">
                      <animateMotion dur="2.4s" begin={`${e.delay}s`} repeatCount="indefinite" path={e.d} />
                    </circle>
                  </>
                )}
              </g>
            );
          })}
        </svg>

        {/* Nodes */}
        {NODES.map((n, i) => {
          const isHub = n.id === "hub";
          return (
            <motion.div
              key={n.id}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              style={{ left: pct(n.x, VIEW_W), top: pct(n.y, VIEW_H) }}
              className={
                "absolute -translate-x-1/2 -translate-y-1/2 flex items-center gap-2.5 rounded-xl border backdrop-blur-md shadow-lg " +
                (isHub
                  ? "border-[#FFB800]/50 bg-[#FFB800]/10 px-3.5 py-2.5 shadow-[0_0_28px_rgba(255,184,0,0.35)]"
                  : "border-white/15 bg-black/70 px-2.5 py-2.5")
              }
            >
              {isHub && (
                <span className="absolute inset-0 -z-10 rounded-xl animate-ping bg-[#FFB800]/10 pointer-events-none" />
              )}
              <n.logo className={isHub ? "h-7 w-7" : "h-5 w-5"} />
            </motion.div>
          );
        })}
      </div>

      
    </div>
  );
}