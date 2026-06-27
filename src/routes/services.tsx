import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader, Eyebrow } from "@/components/site/Eyebrow";
import { ScrollReveal } from "@/components/site/ScrollReveal";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | SuperTelque RevOps" },
      { name: "description", content: "RevOps, GTM engineering, CRM architecture, outbound systems, data & analytics and AI revenue systems for B2B technology companies." },
      { property: "og:title", content: "Services | SuperTelque RevOps" },
      { property: "og:description", content: "Six disciplines, one revenue engine. Architecture diagrams for every service." },
    ],
  }),
  component: ServicesPage,
});

const SERVICES = [
  {
    id: "revops",
    code: "01",
    title: "Revenue Operations",
    blurb: "Get your sales, marketing, and CS teams aligned on shared metrics, goals, and a single forecast.",
    items: ["Pipeline design", "Forecasting", "Territory planning", "Revenue reporting"],
  },
  {
    id: "gtm",
    code: "02",
    title: "GTM Engineering",
    blurb: "Build the workflows and automations that keep your go-to-market running smoothly.",
    items: ["Workflow automation", "API integrations", "Data syncs", "Process design"],
  },
  {
    id: "crm",
    code: "03",
    title: "CRM Architecture",
    blurb: "Set up HubSpot or Salesforce properly so it grows with your business, not against it.",
    items: ["HubSpot implementation", "Salesforce implementation", "Pipeline design", "Lifecycle stages"],
  },
  {
    id: "outbound",
    code: "04",
    title: "Outbound Systems",
    blurb: "Find the right accounts, enrich them automatically, and get your team into more real conversations.",
    items: ["Clay enrichment", "Apollo sequencing", "Lead routing", "Targeted outreach"],
  },
  {
    id: "data",
    code: "05",
    title: "Data & Analytics",
    blurb: "Clear dashboards and forecasts that every level of your team can actually rely on.",
    items: ["Power BI dashboards", "Attribution modeling", "Data warehouses", "Executive reporting"],
  },
  {
    id: "ai",
    code: "06",
    title: "AI in Your Revenue Stack",
    blurb: "AI that works inside your actual sales process, from finding accounts to prioritizing leads.",
    items: ["AI prospect research", "AI lead scoring", "AI-powered automation", "Sales enablement"],
  },
] as const;

function ServicesPage() {
  return (
    <SiteLayout headerTheme="dark">
      <section className="sec-navy relative overflow-hidden border-b border-border pt-24 md:pt-28">
        <div className="relative mx-auto max-w-7xl px-4 pb-12 lg:pt-16 lg:px-6">
          <Eyebrow>Services</Eyebrow>
          <h1 className="mt-5 max-w-3xl font-display text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-[72px] lg:leading-[1.03]">
            Built for revenue.<span className="text-gradient-gold"> Built to last.</span>
          </h1>
          <ScrollReveal variant="fadeUp" delay={0.15}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Every service comes with a clear plan, measurable outcomes, and documentation
              your team can own. Tell us what you need and we'll figure out the right starting point.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="sec-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-6 space-y-16 lg:space-y-24">
          {SERVICES.map((s, i) => (
            <ServiceBlock key={s.id} svc={s} reverse={i % 2 === 1} />
          ))}
        </div>
      </section>

      <CTA />
    </SiteLayout>
  );
}

function ServiceBlock({
  svc,
  reverse,
}: {
  svc: (typeof SERVICES)[number];
  reverse: boolean;
}) {
  return (
    <section id={svc.id} className="scroll-mt-24">
      <div className={"grid items-center gap-10 lg:grid-cols-12 " + (reverse ? "lg:[direction:rtl]" : "")}>
        <ScrollReveal variant="slideRight" className="lg:col-span-5 [direction:ltr]">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            Capability · {svc.code}
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[44px] lg:leading-[1.05]">
            {svc.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">{svc.blurb}</p>
          <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
            {svc.items.map((it) => (
              <li key={it} className="flex items-center gap-2 text-foreground/85">
                <span className="h-1 w-1 rounded-full bg-accent-blue" />
                {it}
              </li>
            ))}
          </ul>
          <Link
            to="/book"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-(--surface)/60 px-4 py-2 text-sm hover:bg-(--surface)"
          >
            Discuss this engagement →
          </Link>
        </ScrollReveal>
        <ScrollReveal variant="slideLeft" className="lg:col-span-7 [direction:ltr]">
          <ArchitectureDiagram code={svc.code} />
        </ScrollReveal>
      </div>
    </section>
  );
}

function ArchitectureDiagram({ code }: { code: string }) {
  // Stylised, distinct-per-service architecture diagram.
  const palettes: Record<string, string[]> = {
    "01": ["var(--accent-blue)", "var(--accent-indigo)", "var(--accent-teal)"],
    "02": ["var(--accent-indigo)", "var(--accent-teal)", "var(--accent-blue)"],
    "03": ["var(--accent-teal)", "var(--accent-blue)", "var(--accent-purple)"],
    "04": ["var(--accent-purple)", "var(--accent-blue)", "var(--accent-teal)"],
    "05": ["var(--accent-blue)", "var(--accent-teal)", "var(--accent-indigo)"],
    "06": ["var(--accent-indigo)", "var(--accent-purple)", "var(--accent-blue)"],
  };
  const [c1, c2, c3] = palettes[code] ?? palettes["01"];

  const labelsByCode: Record<string, string[]> = {
    "01": ["Pipeline", "Forecast", "Quota", "Reporting"],
    "02": ["Source", "Transform", "Route", "Activate"],
    "03": ["Contacts", "Companies", "Deals", "Lifecycle"],
    "04": ["Signal", "Enrich", "Sequence", "Meeting"],
    "05": ["Warehouse", "Model", "Dashboard", "Decision"],
    "06": ["Prompt", "Score", "Decide", "Execute"],
  };
  const labels = labelsByCode[code] ?? labelsByCode["01"];

  return (
    <div className="surface-card relative overflow-hidden p-5">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            architecture · {code}
          </span>
          <span className="font-mono text-[11px] text-muted-foreground">v1.0</span>
        </div>
        <svg viewBox="0 0 600 300" className="mt-4 w-full">
          <defs>
            <linearGradient id={`g${code}`} x1="0" x2="1">
              <stop offset="0%" stopColor={c1} stopOpacity="0.0" />
              <stop offset="50%" stopColor={c2} stopOpacity="0.9" />
              <stop offset="100%" stopColor={c3} stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {labels.map((_, i) => {
            if (i === labels.length - 1) return null;
            const x1 = 80 + i * 140;
            const x2 = 80 + (i + 1) * 140;
            return (
              <g key={i}>
                <line x1={x1 + 60} y1="150" x2={x2 - 60} y2="150" stroke="var(--border)" />
                <line
                  x1={x1 + 60}
                  y1="150"
                  x2={x2 - 60}
                  y2="150"
                  stroke={`url(#g${code})`}
                  strokeWidth="1.6"
                  className="animate-flow"
                  style={{ animationDelay: `${i * 0.5}s` }}
                />
              </g>
            );
          })}

          {labels.map((l, i) => (
            <g key={l} transform={`translate(${80 + i * 140 - 60}, 126)`}>
              <rect width="120" height="48" rx="10" fill="var(--surface-2)" stroke="var(--border)" />
              <circle cx="14" cy="24" r="4" fill={[c1, c2, c3, c1][i] as string} />
              <text x="28" y="22" fill="var(--foreground)" fontSize="12" fontFamily="Inter Tight, Inter, sans-serif" fontWeight="600">
                {l}
              </text>
              <text x="28" y="36" fill="var(--muted-foreground)" fontSize="10" fontFamily="JetBrains Mono, monospace">
                stage_0{i + 1}
              </text>
            </g>
          ))}

          {/* Top + bottom rails */}
          <line x1="40" y1="60" x2="560" y2="60" stroke="var(--border)" strokeDasharray="2 6" />
          <line x1="40" y1="240" x2="560" y2="240" stroke="var(--border)" strokeDasharray="2 6" />
          <text x="40" y="52" fill="var(--muted-foreground)" fontSize="10" fontFamily="JetBrains Mono, monospace">
            inputs
          </text>
          <text x="40" y="258" fill="var(--muted-foreground)" fontSize="10" fontFamily="JetBrains Mono, monospace">
            outcomes
          </text>
        </svg>
      </div>
    </div>
  );
}


function CTA() {
  return (
    <section className="sec-navy border-t border-white/08 py-12 lg:py-20">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-48"
        style={{ background: "radial-gradient(ellipse 50% 80% at 50% 100%, rgba(255,184,0,0.08) 0%, transparent 70%)" }}
      />
      <div className="relative mx-auto max-w-4xl px-4 lg:px-6 text-center">
        <ScrollReveal variant="scaleIn">
          <div className="flex items-center justify-center gap-2.5 mb-4">
            <img src="/supertelque-logo.png" alt="" className="h-8 w-8 object-contain drop-shadow-[0_0_10px_rgba(255,184,0,0.4)]" />
          </div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Not sure where to begin?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/60">
            Book a 45-minute call. We'll review your current setup and tell you exactly where to
            start. No pressure, no pitch.
          </p>
          <Link
            to="/book"
            className="mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold text-[#080D1C] transition-all hover:scale-[1.03] hover:shadow-[0_12px_28px_-6px_rgba(255,184,0,0.40)]"
            style={{ background: "linear-gradient(135deg, #FFD44D 0%, #FFB800 100%)" }}
          >
            Book a strategy session →
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}