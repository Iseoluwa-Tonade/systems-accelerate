import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader, Eyebrow } from "@/components/site/Eyebrow";
import { ScrollReveal } from "@/components/site/ScrollReveal";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | SuperTelque LLC" },
      { name: "description", content: "RevOps, GTM engineering, CRM architecture, AI automation, digital marketing, web development, and back-office operations for B2B companies." },
      { property: "og:title", content: "Services | SuperTelque LLC" },
      { property: "og:description", content: "Nine disciplines, one growth engine. Architecture diagrams for every service." },
    ],
  }),
  component: ServicesPage,
});

const SERVICES = [
  {
    id: "sales",
    code: "01",
    color: "#1B5EFF",
    title: "Sales & Lead Generation",
    blurb: "Fill your pipeline with the right people. We handle outbound campaigns, inbound lead qualification, and appointment setting so your team shows up to conversations that matter.",
    items: ["Lead generation", "Inbound handling", "Appointment setting", "Outbound outreach"],
  },
  {
    id: "crm",
    code: "02",
    color: "#14B8A6",
    title: "CRM & Sales Operations",
    blurb: "Set up your CRM the right way and keep your sales process clean, consistent, and easy to manage. We work with all major platforms.",
    items: ["CRM implementation", "Sales process optimisation", "Pipeline design", "Data hygiene", "DNS & email deliverability setup"],
  },
  {
    id: "revops",
    code: "03",
    color: "#8B5CF6",
    title: "RevOps & GTM Engineering",
    blurb: "Get your revenue teams aligned on shared metrics, forecasts, and a pipeline your leadership can trust.",
    items: ["Revenue operations", "GTM engineering", "Forecasting", "Revenue dashboards"],
  },
  {
    id: "automation",
    code: "04",
    color: "#10B981",
    title: "Workflow Automation & AI",
    blurb: "Automate the work that slows your team down and use AI where it creates real leverage across your operations. We build on n8n, Make, Zapier, TaxDome, and Freshdesk, connecting your tools into one clean workflow.",
    items: ["Workflow automation", "AI-powered solutions", "n8n · Make · Zapier", "TaxDome integration", "Freshdesk automation", "Process optimisation"],
  },
  {
    id: "social",
    code: "05",
    color: "#EC4899",
    title: "Social Media & Community",
    blurb: "Build a consistent presence and an engaged community around your brand across every channel your audience uses, including LinkedIn, X, Instagram, and Meta Business Suite.",
    items: ["Social media management", "Meta Business Suite", "Community management", "Content scheduling", "Engagement strategy"],
  },
  {
    id: "backoffice",
    code: "06",
    color: "#FFB800",
    title: "Virtual Assistance & Back Office",
    blurb: "Skilled remote talent for admin duties, commerce management, inbound handling, and the back-office operations that keep your business running.",
    items: ["Virtual assistance", "Commerce management", "Admin duties", "Inbound management", "Order processing", "Back-office operations"],
  },
  {
    id: "ai",
    code: "07",
    color: "#F59E0B",
    title: "AI Automation",
    blurb: "Deploy intelligent agents, language model integrations, and AI-powered tooling that automates judgment-heavy tasks across your sales, marketing, and operations teams.",
    items: ["AI agents", "LLM integrations", "AI content workflows", "Predictive analytics", "AI chatbots", "Prompt engineering"],
  },
  {
    id: "marketing",
    code: "08",
    color: "#E11D48",
    title: "Digital Marketing",
    blurb: "Drive traffic, generate leads, and build brand authority through search, paid channels, email, and content - all tracked to revenue outcomes.",
    items: ["SEO & content strategy", "Paid ads (Google/Meta)", "Email campaigns", "Analytics & attribution", "Landing page optimisation", "Brand storytelling"],
  },
  {
    id: "webdev",
    code: "09",
    color: "#0EA5E9",
    title: "Web Development",
    blurb: "Build fast, conversion-focused websites and web applications that represent your brand and turn visitors into qualified leads.",
    items: ["Custom websites", "Landing pages", "Web applications", "CMS integration", "Performance optimisation", "Conversion rate optimisation"],
  },
] as const;

function ServicesPage() {
  return (
    <SiteLayout headerTheme="light">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border pt-24 md:pt-28" style={{ background: "linear-gradient(155deg, #EEF4FF 0%, #FFFFFF 60%, #FFF9F0 100%)" }}>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-16 right-0 h-[380px] w-[380px] rounded-full opacity-40"
            style={{ background: "radial-gradient(circle, rgba(27,94,255,0.10) 0%, transparent 70%)" }} />
          <svg className="absolute right-8 bottom-0 h-[200px] w-[200px] opacity-[0.05]" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="88" fill="none" stroke="#1B5EFF" strokeWidth="1.5" strokeDasharray="4 10" className="animate-spin-slow" style={{ transformOrigin: "100px 100px" }} />
          </svg>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 pb-14 lg:pt-16 lg:px-6">
          <div className="grid gap-10 lg:grid-cols-12 items-end">
            <div className="lg:col-span-7">
              <Eyebrow>Services</Eyebrow>
              <h1 className="mt-5 font-display text-[34px] font-extrabold tracking-tight text-[#080D1C] sm:text-5xl lg:text-[72px] lg:leading-[1.03]">
                Everything your business<span className="text-gradient-gold"> needs to grow.</span>
              </h1>
              <ScrollReveal variant="fadeUp" delay={0.15}>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Every service comes with a clear plan, measurable outcomes, and documentation
                  your team can own. Tell us what you need and we will find the right starting point.
                </p>
              </ScrollReveal>
            </div>
            <ScrollReveal variant="fadeUp" delay={0.2} className="lg:col-span-5">
              <div className="rounded-2xl border border-border overflow-hidden">
                <div className="relative h-48 lg:h-56 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80&auto=format&fit=crop"
                    alt="Business growth strategy session"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080D1C]/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/70">Nine service lines</div>
                    <div className="mt-0.5 font-display text-sm font-bold text-white">From pipeline to web and AI.</div>
                  </div>
                </div>
                <div className="px-5 py-4 bg-[#F4F7FF] flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#4C5670]">Measurable outcomes on every engagement</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Sticky anchor nav */}
      <div className="sticky top-[72px] z-20 border-b border-border bg-white/95 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="flex items-center gap-1.5 overflow-x-auto py-3" style={{ scrollbarWidth: "none" }}>
            {SERVICES.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="shrink-0 flex items-center gap-2 rounded-full border border-border px-3.5 py-1.5 font-mono text-[10px] text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-all whitespace-nowrap"
              >
                <span className="h-1.5 w-1.5 rounded-full shrink-0" style={{ backgroundColor: s.color }} />
                {s.code} · {s.title.split(" & ")[0].split(" ").slice(0, 2).join(" ")}
              </a>
            ))}
          </div>
        </div>
      </div>

      <section className="sec-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-6 space-y-16 lg:space-y-28">
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
    <section id={svc.id} className="scroll-mt-28">
      <div className={"grid items-center gap-10 lg:grid-cols-12 " + (reverse ? "lg:[direction:rtl]" : "")}>
        <ScrollReveal variant="slideRight" className="lg:col-span-5 [direction:ltr]">
          {/* Numbered badge + capability label */}
          <div className="flex items-center gap-3 mb-6">
            <span
              className="flex h-8 w-8 items-center justify-center rounded-xl font-mono text-[11px] font-bold text-white shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
              style={{ backgroundColor: svc.color }}
            >
              {svc.code}
            </span>
            <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-muted-foreground">
              Capability
            </span>
          </div>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[42px] lg:leading-[1.06]">
            {svc.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">{svc.blurb}</p>
          <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-2.5 text-sm">
            {svc.items.map((it, idx) => (
              <li
                key={it}
                className="flex items-center gap-2 text-foreground/85 animate-slide-up-fade"
                style={{ animationDelay: `${idx * 70 + 200}ms` }}
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: svc.color }} />
                {it}
              </li>
            ))}
          </ul>
          <Link
            to="/book"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-2.5 text-sm font-medium text-foreground/70 hover:bg-[#F4F6FA] hover:text-foreground transition-all"
          >
            Discuss this engagement →
          </Link>
        </ScrollReveal>
        <ScrollReveal variant="slideLeft" className="lg:col-span-7 [direction:ltr]">
          <ArchitectureDiagram code={svc.code} color={svc.color} />
        </ScrollReveal>
      </div>
    </section>
  );
}

function ArchitectureDiagram({ code, color }: { code: string; color: string }) {
  const palettes: Record<string, string[]> = {
    "01": ["var(--accent-blue)", "var(--accent-indigo)", "var(--accent-teal)"],
    "02": ["var(--accent-indigo)", "var(--accent-teal)", "var(--accent-blue)"],
    "03": ["var(--accent-teal)", "var(--accent-blue)", "var(--accent-purple)"],
    "04": ["var(--accent-purple)", "var(--accent-blue)", "var(--accent-teal)"],
    "05": ["var(--accent-blue)", "var(--accent-teal)", "var(--accent-indigo)"],
    "06": ["var(--accent-indigo)", "var(--accent-purple)", "var(--accent-blue)"],
    "07": ["var(--accent-blue)", "var(--accent-purple)", "var(--accent-teal)"],
    "08": ["var(--accent-teal)", "var(--accent-indigo)", "var(--accent-blue)"],
    "09": ["var(--accent-indigo)", "var(--accent-blue)", "var(--accent-teal)"],
  };
  const [c1, c2, c3] = palettes[code] ?? palettes["01"];

  const labelsByCode: Record<string, string[]> = {
    "01": ["Prospect", "Reach Out", "Book", "Convert"],
    "02": ["Import", "Clean", "Structure", "Activate"],
    "03": ["Align", "Forecast", "Report", "Scale"],
    "04": ["Trigger", "Automate", "Sync", "Optimise"],
    "05": ["Create", "Schedule", "Engage", "Grow"],
    "06": ["Task", "Assign", "Execute", "Deliver"],
    "07": ["Identify", "Train", "Deploy", "Monitor"],
    "08": ["Attract", "Convert", "Retain", "Grow"],
    "09": ["Design", "Build", "Launch", "Optimise"],
  };
  const labels = labelsByCode[code] ?? labelsByCode["01"];

  return (
    <div className="surface-card relative overflow-hidden p-5" style={{ borderTop: `2px solid ${color}40` }}>
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: color }} />
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              architecture · {code}
            </span>
          </div>
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
    <section className="sec-navy relative overflow-hidden border-t border-white/08 py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid opacity-[0.04]" />
        <div
          className="absolute -bottom-10 left-1/2 -translate-x-1/2 h-[350px] w-[700px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(255,184,0,0.12) 0%, transparent 65%)", filter: "blur(40px)" }}
        />
        <div
          className="absolute top-0 right-0 h-[280px] w-[280px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(27,94,255,0.10) 0%, transparent 65%)", filter: "blur(60px)" }}
        />
      </div>
      <div className="relative mx-auto max-w-4xl px-4 lg:px-6 text-center">
        <ScrollReveal variant="scaleIn">
          <div className="flex items-center justify-center gap-2.5 mb-6">
            <img src="/supertelque-logo.png" alt="" className="h-7 w-7 object-contain drop-shadow-[0_0_10px_rgba(255,184,0,0.4)]" />
            <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-white/40">SuperTelque LLC</span>
          </div>
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Not sure where to begin?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[17px] leading-relaxed text-white/50">
            Book a 45-minute call. We review your current setup and tell you exactly where to start. No pressure, no pitch.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-white/30">
            {["Free · no pressure", "Response in 24 hours", "Senior engineer, not an SDR"].map((t, i) => (
              <span key={t} className="flex items-center gap-2 font-mono text-[11px]">
                {i > 0 && <span className="h-px w-3 bg-white/20" />}
                {t}
              </span>
            ))}
          </div>
          <Link
            to="/book"
            className="mt-10 inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-[15px] font-bold text-[#080D1C] transition-all hover:scale-[1.03] hover:shadow-[0_16px_40px_-8px_rgba(255,184,0,0.50)]"
            style={{ background: "linear-gradient(135deg, #FFD44D 0%, #FFB800 60%, #E08A00 100%)" }}
          >
            Book a strategy session
            <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
