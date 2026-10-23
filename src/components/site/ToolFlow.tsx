import { useEffect, useRef, useState } from "react";
import type { ComponentProps, ComponentType } from "react";
import { motion, useAnimationFrame } from "framer-motion";
import * as L from "@/components/site/Logos";

type FlowNode = {
  id: string;
  label: string;
  sub: string;
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
  { id: "clay", label: "Clay", sub: "enrich", hue: "#14B8A6", logo: L.Clay },
  { id: "apollo", label: "Apollo", sub: "prospect", hue: "#4B80FF", logo: L.Apollo },
  { id: "lemlist", label: "Lemlist", sub: "outbound", hue: "#8B5CF6", logo: L.Lemlist },
  { id: "openai", label: "OpenAI", sub: "AI assist", hue: "#10B981", logo: L.OpenAI },
  { id: "hub", label: "HubSpot", sub: "CRM · lifecycle", hue: "#FFB800", logo: L.HubSpot },
  { id: "zapier", label: "Zapier", sub: "automate", hue: "#FF6A00", logo: L.Zapier },
  { id: "slack", label: "Slack", sub: "alerts", hue: "#D946EF", logo: L.Slack },
  { id: "powerbi", label: "Power BI", sub: "report", hue: "#F2C811", logo: L.PowerBI },
  { id: "claude", label: "Claude", sub: "AI assist", hue: "#D97757", logo: L.Claude },
  { id: "instantly", label: "Instantly", sub: "outbound", hue: "#6C5CE7", logo: L.Instantly },
  { id: "jira", label: "Jira", sub: "projects", hue: "#2684FF", logo: L.Jira },
  { id: "n8n", label: "n8n", sub: "automate", hue: "#EA4B71", logo: L.N8n },
  { id: "adobe", label: "Adobe", sub: "creative", hue: "#FF3B30", logo: L.Adobe },
  { id: "canva", label: "Canva", sub: "design", hue: "#00C4CC", logo: L.Canva },
];

const ORBITS = NODES.map((n, i, arr) => ({
  node: n,
  phi: (i / arr.length) * Math.PI * 2 - Math.PI / 2,
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
                <node.logo className="h-7 w-7" showLabel={false} />
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
