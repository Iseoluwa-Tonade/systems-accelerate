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
    id: "sales",
    code: "01",
    title: "Sales & Lead Generation",
    blurb: "Fill your pipeline with the right people. We handle lead generation, outreach, and appointment setting so your team shows up to conversations that matter.",
    items: ["Lead generation", "Appointment setting", "Sales development", "Outbound outreach"],
  },
  {
    id: "crm",
    code: "02",
    title: "CRM & Sales Operations",
    blurb: "Set up HubSpot or Salesforce the right way and keep your sales process clean, consistent, and easy to manage.",
    items: ["CRM implementation", "Sales process optimisation", "Pipeline design", "Data hygiene"],
  },
  {
    id: "revops",
    code: "03",
    title: "RevOps & GTM Engineering",
    blurb: "Get your revenue teams aligned on shared metrics, forecasts, and a pipeline your leadership can trust.",
    items: ["Revenue operations", "GTM engineering", "Forecasting", "Revenue dashboards"],
  },
  {
    id: "automation",
    code: "04",
    title: "Workflow Automation & AI",
    blurb: "Automate the work that slows your team down and use AI where it creates real leverage across your operations.",
    items: ["Workflow automation", "AI-powered solutions", "n8n · Make · Zapier", "Process optimisation"],
  },
  {
    id: "social",
    code: "05",
    title: "Social Media & Community",
    blurb: "Build a consistent presence and an engaged community around your brand across every channel your audience uses.",
    items: ["Social media management", "Community management", "Content scheduling", "Engagement strategy"],
  },
  {
    id: "backoffice",
    code: "06",
    title: "Virtual Assistance & Back Office",
    blurb: "Skilled remote talent for the admin, orders, and back-office operations that keep your business running.",
    items: ["Virtual assistance", "Order management", "Back-office operations", "Remote team solutions"],
  },
] as const;

function ServicesPage() {
  return (
    <SiteLayout headerTheme="light">
      <section className="relative overflow-hidden border-b border-border pt-24 md:pt-28" style={{ background: "linear-gradient(155deg, #EEF4FF 0%, #FFFFFF 60%, #FFF9F0 100%)" }}>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-16 right-0 h-[380px] w-[380px] rounded-full opacity-40"
            style={{ background: "radial-gradient(circle, rgba(27,94,255,0.10) 0%, transparent 70%)" }} />
          <svg className="absolute right-8 bottom-0 h-[200px] w-[200px] opacity-[0.05]" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="88" fill="none" stroke="#1B5EFF" strokeWidth="1.5" strokeDasharray="4 10" />
          </svg>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 pb-14 lg:pt-16 lg:px-6">
          <Eyebrow>Services</Eyebrow>
          <h1 className="mt-5 max-w-3xl font-display text-[34px] font-extrabold tracking-tight text-[#080D1C] sm:text-5xl lg:text-[72px] lg:leading-[1.03]">
            Everything your business<span className="text-gradient-gold"> needs to grow.</span>
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
    "01": ["Prospect", "Reach Out", "Book", "Convert"],
    "02": ["Import", "Clean", "Structure", "Activate"],
    "03": ["Align", "Forecast", "Report", "Scale"],
    "04": ["Trigger", "Automate", "Sync", "Optimise"],
    "05": ["Create", "Schedule", "Engage", "Grow"],
    "06": ["Task", "Assign", "Execute", "Deliver"],
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