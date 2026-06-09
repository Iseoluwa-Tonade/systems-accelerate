import { useEffect, useState } from "react";

type Node = {
  id: string;
  label: string;
  sub: string;
  x: number;
  y: number;
  hue: string;
};

const NODES: Node[] = [
  { id: "clay", label: "Clay", sub: "enrich", x: 60, y: 110, hue: "var(--accent-teal)" },
  { id: "apollo", label: "Apollo", sub: "sequence", x: 60, y: 230, hue: "var(--accent-blue)" },
  { id: "hubspot", label: "HubSpot", sub: "lifecycle", x: 240, y: 170, hue: "var(--accent-indigo)" },
  { id: "salesforce", label: "Salesforce", sub: "opportunity", x: 430, y: 110, hue: "var(--accent-blue)" },
  { id: "slack", label: "Slack", sub: "alert", x: 430, y: 230, hue: "var(--accent-purple)" },
  { id: "powerbi", label: "Power BI", sub: "report", x: 610, y: 170, hue: "var(--accent-teal)" },
];

const EDGES: [string, string][] = [
  ["clay", "hubspot"],
  ["apollo", "hubspot"],
  ["hubspot", "salesforce"],
  ["hubspot", "slack"],
  ["salesforce", "powerbi"],
  ["slack", "powerbi"],
];

const LOG_LINES = [
  { t: "INFO", m: "Enriched 142 accounts via Clay waterfall" },
  { t: "OK", m: "Routed inbound lead → SDR queue · Northeast" },
  { t: "INFO", m: "Apollo sequence v4 deployed to 8 reps" },
  { t: "OK", m: "HubSpot ↔ Salesforce bi-directional sync · 4.2s" },
  { t: "AI", m: "GPT scored 312 opportunities · 28 flagged hot" },
  { t: "OK", m: "Slack alert sent · Acme · pipeline +$48k" },
  { t: "INFO", m: "Power BI snapshot refreshed · 12 dashboards" },
  { t: "OK", m: "Stripe MRR reconciled → Snowflake" },
];

function nodeById(id: string) {
  return NODES.find((n) => n.id === id)!;
}

export function CommandCenter() {
  const [logIdx, setLogIdx] = useState(0);
  const [pipeline, setPipeline] = useState(120_400_000);
  const [velocity, setVelocity] = useState(3.5);
  const [convo, setConvo] = useState(32.4);

  useEffect(() => {
    const id = setInterval(() => {
      setLogIdx((i) => (i + 1) % LOG_LINES.length);
      setPipeline((p) => p + Math.floor(Math.random() * 80_000));
      setVelocity((v) => +(3.4 + Math.random() * 0.25).toFixed(2));
      setConvo((c) => +(31.5 + Math.random() * 1.6).toFixed(1));
    }, 1800);
    return () => clearInterval(id);
  }, []);

  const visibleLogs = Array.from({ length: 5 }, (_, k) => LOG_LINES[(logIdx + k) % LOG_LINES.length]);

  return (
    <div className="surface-card relative overflow-hidden p-3 sm:p-4 lg:p-5 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]">
      {/* Top toolbar */}
      <div className="flex items-center justify-between gap-3 px-2 pb-3">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[color:var(--accent-teal)] animate-pulse-dot" />
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            GTM Command Center · live
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-mono text-muted-foreground">
          <span className="rounded-md border border-border px-2 py-0.5">US-EAST</span>
          <span className="rounded-md border border-border px-2 py-0.5">UK</span>
          <span className="rounded-md border border-border px-2 py-0.5">CA</span>
        </div>
      </div>

      <div className="grid gap-3 lg:grid-cols-[1.6fr_1fr]">
        {/* Flow diagram */}
        <div className="relative rounded-xl border border-border bg-[color:var(--surface)]/70 p-3">
          <div className="absolute inset-0 rounded-xl bg-grid opacity-50 pointer-events-none" />
          <FlowSvg />

          {/* Floating metric chips */}
          <div className="pointer-events-none absolute right-3 top-3 flex flex-col items-end gap-1.5">
            <Chip label="MQL → SQL" value={`${convo}%`} accent />
            <Chip label="Sync latency" value="4.2s" />
          </div>
          <div className="pointer-events-none absolute bottom-3 left-3 right-3 flex flex-wrap items-end justify-between gap-2 text-[11px] font-mono text-muted-foreground">
            <span>workflow_id · rev-engine-v4</span>
            <span>uptime 99.98%</span>
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-3">
          {/* KPI strip */}
          <div className="grid grid-cols-2 gap-2">
            <Kpi
              label="Pipeline Managed"
              value={"$" + (pipeline / 1_000_000).toFixed(1) + "M"}
              delta="+12.4%"
            />
            <Kpi label="Sales Velocity" value={`${velocity}x`} delta="+218%" />
            <Kpi label="Active Contacts" value="4,289" delta="+1.8%" />
            <Kpi label="Automations" value="312" delta="24/7" muted />
          </div>

          {/* AI insight */}
          <div className="relative rounded-xl border border-border bg-[color:var(--surface)]/70 p-3">
            <div className="absolute -inset-px rounded-xl bg-gradient-to-br from-accent-indigo/20 via-transparent to-accent-teal/15 opacity-60 pointer-events-none" />
            <div className="relative">
              <div className="flex items-center gap-2">
                <span className="rounded-md bg-accent-indigo/20 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent-indigo">
                  AI · gpt-5
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  insight
                </span>
              </div>
              <p className="mt-2 text-[13px] leading-relaxed text-foreground/90">
                <span className="text-foreground">Acme Corp</span> shows 4 buying signals in 7 days.
                Recommend escalating to AE, with estimated influence{" "}
                <span className="font-medium text-foreground">+$48k pipeline</span>.
              </p>
            </div>
          </div>

          {/* Live logs */}
          <div className="relative rounded-xl border border-border bg-[color:var(--surface)]/70 p-3 font-mono text-[11.5px] leading-relaxed">
            <div className="mb-1 flex items-center justify-between">
              <span className="text-muted-foreground">~/revops/agent.log</span>
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent-teal)] animate-pulse-dot" />
            </div>
            <ul className="space-y-1">
              {visibleLogs.map((l, i) => (
                <li key={i} className={i === 0 ? "text-foreground" : "text-muted-foreground"}>
                  <span
                    className={
                      "mr-2 inline-block w-7 " +
                      (l.t === "OK"
                        ? "text-[color:var(--accent-teal)]"
                        : l.t === "AI"
                        ? "text-[color:var(--accent-indigo)]"
                        : "text-[color:var(--accent-blue)]")
                    }
                  >
                    {l.t}
                  </span>
                  {l.m}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function FlowSvg() {
  return (
    <svg viewBox="0 0 680 340" className="relative w-full">
      <defs>
        <linearGradient id="edge" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--accent-blue)" stopOpacity="0.0" />
          <stop offset="50%" stopColor="var(--accent-blue)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="var(--accent-indigo)" stopOpacity="0.0" />
        </linearGradient>
        <radialGradient id="nodeBg" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="white" stopOpacity="0.06" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Edges */}
      {EDGES.map(([a, b], i) => {
        const A = nodeById(a);
        const B = nodeById(b);
        const mx = (A.x + B.x) / 2;
        const d = `M ${A.x + 60} ${A.y} C ${mx} ${A.y}, ${mx} ${B.y}, ${B.x - 60} ${B.y}`;
        return (
          <g key={i}>
            <path d={d} stroke="var(--border)" strokeWidth="1" fill="none" />
            <path
              d={d}
              stroke="url(#edge)"
              strokeWidth="1.6"
              fill="none"
              className="animate-flow"
              style={{ animationDelay: `${i * 0.4}s` }}
            />
          </g>
        );
      })}

      {/* Nodes */}
      {NODES.map((n) => (
        <g key={n.id} transform={`translate(${n.x - 60}, ${n.y - 24})`}>
          <rect
            width="120"
            height="48"
            rx="10"
            fill="var(--surface-2)"
            stroke="var(--border)"
          />
          <rect width="120" height="48" rx="10" fill="url(#nodeBg)" />
          <circle cx="14" cy="24" r="4" fill={n.hue} />
          <circle cx="14" cy="24" r="7" fill="none" stroke={n.hue} strokeOpacity="0.35" />
          <text x="28" y="22" fill="var(--foreground)" fontSize="12" fontFamily="Inter Tight, Inter, sans-serif" fontWeight="600">
            {n.label}
          </text>
          <text x="28" y="36" fill="var(--muted-foreground)" fontSize="10" fontFamily="JetBrains Mono, monospace">
            {n.sub}
          </text>
        </g>
      ))}
    </svg>
  );
}

function Chip({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div
      className={
        "rounded-md border px-2 py-1 backdrop-blur " +
        (accent
          ? "border-accent-blue/40 bg-accent-blue/10 text-foreground"
          : "border-border bg-background/60 text-muted-foreground")
      }
    >
      <div className="font-mono text-[9.5px] uppercase tracking-[0.18em] opacity-70">{label}</div>
      <div className="font-display text-[13px] font-semibold">{value}</div>
    </div>
  );
}

function Kpi({
  label,
  value,
  delta,
  muted,
}: {
  label: string;
  value: string;
  delta: string;
  muted?: boolean;
}) {
  return (
    <div className="rounded-xl border border-border bg-[color:var(--surface)]/70 p-3">
      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </div>
      <div className="mt-1 flex items-baseline gap-2">
        <div className="font-display text-xl font-semibold tracking-tight tabular-nums">
          {value}
        </div>
        <span
          className={
            "text-[11px] font-mono " +
            (muted ? "text-muted-foreground" : "text-[color:var(--accent-teal)]")
          }
        >
          {delta}
        </span>
      </div>
    </div>
  );
}