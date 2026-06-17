import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader, Eyebrow } from "@/components/site/Eyebrow";
import { ScrollReveal, StaggerReveal, StaggerChild } from "@/components/site/ScrollReveal";

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
    blurb: "Align sales, marketing, and CS around shared metrics, forecasts and motions.",
    items: ["Funnel optimization", "Forecasting", "Territory planning", "Revenue analytics"],
  },
  {
    id: "gtm",
    code: "02",
    title: "GTM Engineering",
    blurb: "Engineer the operational layer behind every modern revenue motion.",
    items: ["Workflow automation", "API integrations", "Data synchronization", "Process engineering"],
  },
  {
    id: "crm",
    code: "03",
    title: "CRM Architecture",
    blurb: "Build HubSpot and Salesforce ecosystems that scale without re-implementation.",
    items: ["HubSpot implementation", "Salesforce implementation", "Pipeline design", "Lifecycle stages"],
  },
  {
    id: "outbound",
    code: "04",
    title: "Outbound Systems",
    blurb: "Intent-driven prospecting infrastructure. Pipeline, not vanity activity.",
    items: ["Clay enrichment", "Apollo sequencing", "Lead routing", "Intent-based outreach"],
  },
  {
    id: "data",
    code: "05",
    title: "Data & Analytics",
    blurb: "A single source of revenue truth, built for boards, leaders and reps.",
    items: ["Power BI dashboards", "Attribution modeling", "Data warehouses", "Executive reporting"],
  },
  {
    id: "ai",
    code: "06",
    title: "AI-Powered Revenue Systems",
    blurb: "Production-grade AI woven into prospecting, scoring, routing and enablement.",
    items: ["AI prospect research", "AI lead scoring", "AI workflow automation", "AI sales enablement"],
  },
] as const;

function ServicesPage() {
  return (
    <SiteLayout headerTheme="dark">
      <section className="sec-navy relative overflow-hidden border-b border-border pt-24 md:pt-28">
        <div className="relative mx-auto max-w-7xl px-4 pb-12 lg:pt-32 lg:px-6">
          <Eyebrow>Services</Eyebrow>
          <h1 className="mt-5 max-w-3xl font-display text-3xl font-semibold tracking-tight sm:text-5xl lg:text-[72px] lg:leading-[1.03]">
            Revenue infrastructure, <span className="text-gradient-brand">engineered.</span>
          </h1>
          <ScrollReveal variant="fadeUp" delay={0.15}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Each capability ships with an architecture diagram, a measurement plan and an
              owned runbook. Mix what you need, we sequence the rest.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="sec-white py-16 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 lg:px-6 space-y-16 lg:space-y-32">
          {SERVICES.map((s, i) => (
            <ServiceBlock key={s.id} svc={s} reverse={i % 2 === 1} />
          ))}
        </div>
      </section>

      <WhatWeWorkOn />

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

/* -------------------------- WHAT WE WORK ON --------------------------- */
const WORK_ITEMS = [
  { title: "Lead generation", desc: "Automate prospect scraping, signal-based filtering, and warm outreach setup." },
  { title: "ICP fitness", desc: "Analyze customer data to define, validate, and score your ideal profile." },
  { title: "Data entry", desc: "Sync pipeline events and client records with zero human manual input." },
  { title: "Virtual assistant", desc: "Build automated agents to support operations, routing, and notifications." },
  { title: "Ecommerce support", desc: "Streamline stores, shopping APIs, and customer fulfillment flows." },
  { title: "Logistics support", desc: "Connect shipping status trackers, warehouses, and freight logs." },
  { title: "Domain setup", desc: "Provision clean sending subdomains and optimize deliverability." },
  { title: "DNS record", desc: "Configure SPF, DKIM, DMARC, and MX records for spam prevention." },
  { title: "Email delivery", desc: "Monitor bounce rates, warm sending profiles, and verify inboxes." },
  { title: "Event management", desc: "Automate invitation pipelines, tickets, checks, and post-event syncs." },
  { title: "Access control", desc: "Define workspace permissions, roles, API tokens, and SSO policies." },
  { title: "RFX", desc: "Parse and generate responses for RFPs, RFQs, and RFIs using AI parsing." },
] as const;

function WhatWeWorkOn() {
  return (
    <section className="sec-navy relative border-t border-border py-16 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <SectionHeader
          eyebrow="Capabilities"
          title={
            <>
              What we work on.{" "}
              <span className="text-muted-foreground">Every day.</span>
            </>
          }
          description="Operational problems solved with software, triggers, and solid engineering. If it can be mapped, it can be automated."
        />

        <div className="mt-10 md:mt-14">
          <div className="sm:hidden overflow-x-auto -mx-4 px-4 pb-2">
            <div className="flex gap-4 w-max">
              {WORK_ITEMS.map((item, i) => {
                return (
                  <div
                    key={item.title}
                    className="surface-card group relative w-[260px] shrink-0 p-5 transition duration-300 hover:border-border/80"
                  >
                    <div className="flex items-center justify-between font-mono text-[10px] text-muted-foreground">
                      <span>CAP · {String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <h3 className="mt-4 font-display text-lg font-semibold tracking-tight text-foreground/90">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <StaggerReveal className="hidden sm:grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {WORK_ITEMS.map((item, i) => {
              return (
                <StaggerChild key={item.title}>
                  <div
                    className="surface-card group relative p-6 transition duration-300 hover:border-border/80"
                  >
                  <div className="flex items-center justify-between font-mono text-[10px] text-muted-foreground">
                    <span>CAP · {String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold tracking-tight text-foreground/90">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
                </StaggerChild>
              );
            })}
          </StaggerReveal>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="sec-lime border-t border-border py-12 lg:py-20">
      <div className="mx-auto max-w-4xl px-4 lg:px-6 text-center">
        <ScrollReveal variant="scaleIn">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Not sure where to start?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Book a 45-minute working session. We'll map your current stack and recommend the next
            three moves.
          </p>
          <Link
            to="/book"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background"
          >
            Book a strategy session →
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}