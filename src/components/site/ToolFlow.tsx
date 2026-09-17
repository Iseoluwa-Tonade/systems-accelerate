import { useEffect, useRef, useState } from "react";
import type { ComponentProps, ComponentType } from "react";
import { motion, useAnimationFrame } from "framer-motion";
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
const CENTER = { x: 240, y: 280 };
const ORBIT_AX = 200;
const ORBIT_AY = 248;
const CYCLE_MS = 30000;
const SPIN_MS = 14000;

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

const ORBITS = NODES.filter((n) => n.id !== "hub").map((n) => ({
  node: n,
  phi: Math.atan2(n.y - CENTER.y, n.x - CENTER.x),
}));

function pct(px: number, total: number) {
  return `${(px / total) * 100}%`;
}

function fromPhi(phi: number) {
  return {
    x: CENTER.x + ORBIT_AX * Math.cos(phi),
    y: CENTER.y + ORBIT_AY * Math.sin(phi),
  };
}

function spokeD(x: number, y: number) {
  return `M ${CENTER.x} ${CENTER.y} L ${x} ${y}`;
}

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export function ToolFlow() {
  const [allowMotion, setAllowMotion] = useState(false);
  const wraps = useRef<Record<string, HTMLDivElement | null>>({});
  const spokes = useRef<Record<string, SVGPathElement | null>>({});
  const dots = useRef<Record<string, SVGCircleElement | null>>({});

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setAllowMotion(!mq.matches);
    const onChange = (e: MediaQueryListEvent) => setAllowMotion(!e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useAnimationFrame((time) => {
    if (!allowMotion) return;
    const phase = (time % CYCLE_MS) / CYCLE_MS;
    const spinPortion = SPIN_MS / CYCLE_MS;
    const progress = phase <= spinPortion ? easeInOutCubic(phase / spinPortion) : 1;
    const angle = progress * Math.PI * 2;

    ORBITS.forEach(({ node, phi }, i) => {
      const a = phi + angle;
      const x = CENTER.x + ORBIT_AX * Math.cos(a);
      const y = CENTER.y + ORBIT_AY * Math.sin(a);

      const wrap = wraps.current[node.id];
      if (wrap) {
        wrap.style.left = pct(x, VIEW_W);
        wrap.style.top = pct(y, VIEW_H);
      }

      const spoke = spokes.current[node.id];
      if (spoke) spoke.setAttribute("d", spokeD(x, y));

      const dot = dots.current[node.id];
      if (dot) {
        const flow = (time / 2200 + i * 0.21) % 1;
        dot.setAttribute("cx", String(CENTER.x + (x - CENTER.x) * flow));
        dot.setAttribute("cy", String(CENTER.y + (y - CENTER.y) * flow));
      }
    });
  });

  return (
    <div className="relative w-full max-w-[520px] mx-auto">
      <div className="relative aspect-[6/7] w-full">
        <div className="absolute inset-0 rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-md shadow-[0_24px_60px_-24px_rgba(0,0,0,0.7)]" />
        <div className="absolute inset-0 rounded-3xl bg-grid opacity-40 pointer-events-none" />

        {/* Orbit ring + connectors */}
        <svg viewBox={`0 0 ${VIEW_W} ${VIEW_H}`} className="absolute inset-0 h-full w-full">
          <ellipse
            cx={CENTER.x}
            cy={CENTER.y}
            rx={ORBIT_AX}
            ry={ORBIT_AY}
            fill="none"
            stroke="rgba(255,255,255,0.10)"
            strokeWidth="1"
            strokeDasharray="2 8"
          />
          <ellipse
            cx={CENTER.x}
            cy={CENTER.y}
            rx={ORBIT_AX}
            ry={ORBIT_AY}
            fill="none"
            stroke="rgba(255,184,0,0.16)"
            strokeWidth="1.2"
            strokeDasharray="16 8 3 8"
          />

          {ORBITS.map(({ node }, i) => {
            const home = fromPhi(ORBITS[i].phi);
            return (
              <g key={node.id}>
                <path
                  ref={(el) => {
                    spokes.current[node.id] = el;
                  }}
                  d={spokeD(home.x, home.y)}
                  stroke="rgba(255,255,255,0.10)"
                  strokeWidth="5"
                  fill="none"
                />
                <path
                  d={spokeD(home.x, home.y)}
                  stroke={node.hue}
                  strokeWidth="1.4"
                  strokeOpacity="0.4"
                  fill="none"
                  className="animate-flow"
                  style={{ animationDelay: `${i * 0.18}s` }}
                />
                <circle
                  ref={(el) => {
                    dots.current[node.id] = el;
                  }}
                  cx={home.x}
                  cy={home.y}
                  r="3"
                  fill={node.hue}
                  opacity="0.5"
                />
              </g>
            );
          })}
        </svg>

        {/* Hub */}
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center gap-2.5 rounded-xl border border-[#FFB800]/50 bg-[#FFB800]/10 px-3.5 py-2.5 shadow-[0_0_28px_rgba(255,184,0,0.35)] backdrop-blur-md"
          style={{ left: pct(CENTER.x, VIEW_W), top: pct(CENTER.y, VIEW_H) }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative"
          >
            <span className="absolute inset-0 -z-10 rounded-xl animate-ping bg-[#FFB800]/10 pointer-events-none" />
            <L.HubSpot className="h-9 w-9" />
          </motion.div>
        </div>

        {/* Orbiting tools */}
        {ORBITS.map(({ node }, i) => {
          const home = fromPhi(ORBITS[i].phi);
          return (
            <div
              key={node.id}
              ref={(el) => {
                wraps.current[node.id] = el;
              }}
              className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center rounded-xl border border-white/15 bg-black/70 px-2.5 py-2.5 backdrop-blur-md shadow-lg"
              style={{ left: pct(home.x, VIEW_W), top: pct(home.y, VIEW_H) }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i + 1) * 0.08, ease: "easeOut" }}
              >
                <node.logo className="h-5 w-5" />
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}