import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Eyebrow } from "@/components/site/Eyebrow";
import { ScrollReveal, StaggerReveal, StaggerChild } from "@/components/site/ScrollReveal";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies | SuperTelque LLC" },
      { name: "description", content: "Teardowns of RevOps and GTM engineering engagements: B2B SaaS pipeline transformation, fintech automation, AI startup lead routing." },
      { property: "og:title", content: "Case Studies | SuperTelque LLC" },
      { property: "og:description", content: "Challenge · Solution · Stack · Outcome: three engagement teardowns." },
    ],
  }),
  component: CaseStudiesPage,
});

const CASES = [
  {
    tag: "Enterprise SaaS · Series C",
    color: "#1B5EFF",
    title: "Forecasting alignment across a 200-rep org",
    challenge:
      "Three forecasting systems disagreed every Monday. CRO meetings opened with reconciliation, not strategy.",
    solution:
      "Re-architected the HubSpot / Salesforce contract, deployed a versioned object model, and shipped bi-directional sync with a single forecast surface.",
    stack: ["HubSpot", "Salesforce", "n8n", "Snowflake", "Power BI"],
    outcomes: [
      ["100%", "Forecasting alignment across regions"],
      ["72%", "Reduction in manual reconciliation"],
      ["4.2s", "End-to-end sync latency"],
    ],
  },
  {
    tag: "Fintech · Series B",
    color: "#14B8A6",
    title: "Outbound automation across 3 GTM motions",
    challenge:
      "Manual enrichment, fragmented sequences, and no signal layer meant reps spent 60% of their week on list-building.",
    solution:
      "Built a Clay waterfall feeding Apollo sequences, routed via intent signals and scored by an OpenAI layer with hand-off into Salesforce.",
    stack: ["Clay", "Apollo", "Salesforce", "OpenAI", "Slack"],
    outcomes: [
      ["3.5×", "Meeting booking rate"],
      ["+62%", "Rep selling time recovered"],
      ["48%", "Cost per qualified meeting reduced"],
    ],
  },
  {
    tag: "AI Startup · Series A",
    color: "#8B5CF6",
    title: "Intent-driven lead routing engine",
    challenge:
      "Lead response time over an hour. Hot demo requests landing in shared inboxes and going stale.",
    solution:
      "Designed a routing engine with intent enrichment, AI prioritization, and Slack-native escalation that paged the right AE in under 90 seconds.",
    stack: ["HubSpot", "OpenAI", "Make", "Slack"],
    outcomes: [
      ["+22%", "SQL conversion lift"],
      ["<90s", "Hot-lead response time"],
      ["+38%", "Demo show rate improvement"],
    ],
  },
];

function CaseStudiesPage() {
  return (
    <SiteLayout headerTheme="light">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border pt-24 md:pt-28" style={{ background: "linear-gradient(155deg, #EEF4FF 0%, #FFFFFF 60%, #FFF9F0 100%)" }}>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-10 right-0 h-[400px] w-[400px] rounded-full opacity-35"
            style={{ background: "radial-gradient(circle, rgba(27,94,255,0.09) 0%, transparent 70%)" }} />
          <svg className="absolute left-8 bottom-4 h-[140px] w-[140px] opacity-[0.05]" viewBox="0 0 100 100">
            <polygon points="50,5 95,95 5,95" fill="none" stroke="#FFB800" strokeWidth="1.5" className="animate-spin-slow" style={{ transformOrigin: "50px 50px" }} />
          </svg>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 pb-14 lg:pt-16 lg:px-6">
          <div className="grid gap-10 lg:grid-cols-12 items-end">
            <div className="lg:col-span-7">
              <Eyebrow>Case studies</Eyebrow>
              <h1 className="mt-5 font-display text-[34px] font-extrabold tracking-tight text-[#080D1C] sm:text-5xl lg:text-[72px] lg:leading-[1.03]">
                Real work.
                <br />
                <span className="text-gradient-gold">Real results.</span>
              </h1>
              <ScrollReveal variant="fadeUp" delay={0.15}>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
                  Three recent engagements with the full picture: the problem, what we built,
                  the tools we used, and the numbers that moved.
                </p>
              </ScrollReveal>
              <ScrollReveal variant="fadeUp" delay={0.25}>
                <div className="mt-10 flex flex-wrap items-center gap-8 border-t border-border pt-8">
                  {[["3", "Engagements detailed"], ["9", "Key metrics moved"], ["100%", "Delivered on time"]].map(([v, l]) => (
                    <div key={l}>
                      <div className="font-display text-2xl font-bold text-[#080D1C] leading-none">{v}</div>
                      <div className="mt-1 font-mono text-[9.5px] uppercase tracking-[0.18em] text-muted-foreground">{l}</div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal variant="fadeUp" delay={0.2} className="lg:col-span-5">
              <div className="rounded-2xl border border-border overflow-hidden">
                <div className="relative h-48 lg:h-56 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop"
                    alt="Revenue analytics and reporting dashboard"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080D1C]/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/70">Outcomes, not outputs</div>
                    <div className="mt-0.5 font-display text-sm font-bold text-white">Numbers that moved.</div>
                  </div>
                </div>
                <div className="px-5 py-4 bg-[#F4F7FF] flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#4C5670]">Full teardowns · Challenge, solution, stack</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Case study blocks */}
      <section className="sec-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          {CASES.map((c, i) => (
            <ScrollReveal key={c.title} variant="fadeUp" delay={0.05}>
              <div>
                {i > 0 && (
                  <div className="my-16 lg:my-24 flex items-center gap-6">
                    <div className="flex-1 h-px bg-border" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      {String(i + 1).padStart(2, "0")} / {String(CASES.length).padStart(2, "0")}
                    </span>
                    <div className="flex-1 h-px bg-border" />
                  </div>
                )}
                <Study c={c} index={i} />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="sec-navy relative overflow-hidden border-t border-white/08 py-20 lg:py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-grid opacity-[0.04]" />
          <div
            className="absolute -bottom-10 left-1/2 -translate-x-1/2 h-[350px] w-[700px] rounded-full"
            style={{ background: "radial-gradient(ellipse, rgba(255,184,0,0.12) 0%, transparent 65%)", filter: "blur(40px)" }}
          />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 lg:px-6 text-center">
          <ScrollReveal variant="scaleIn">
            <div className="flex items-center justify-center gap-2.5 mb-6">
              <img src="/supertelque-logo.png" alt="" className="h-7 w-7 object-contain drop-shadow-[0_0_10px_rgba(255,184,0,0.4)]" />
              <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-white/40">SuperTelque LLC</span>
            </div>
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Your project could be next.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-[17px] leading-relaxed text-white/50">
              45 minutes. We review your setup and hand you a clear starting point.
            </p>
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
    </SiteLayout>
  );
}

function Study({ c, index }: { c: (typeof CASES)[number]; index: number }) {
  return (
    <article className="grid gap-10 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <div className="flex items-center gap-3 mb-5">
          <span
            className="inline-flex items-center rounded-full px-3 py-1 font-mono text-[10px] font-semibold text-white"
            style={{ backgroundColor: c.color }}
          >
            {c.tag}
          </span>
          <span className="font-mono text-[10px] text-muted-foreground">
            Case · {String(index + 1).padStart(2, "0")} / {String(CASES.length).padStart(2, "0")}
          </span>
        </div>
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          {c.title}
        </h2>
        <div className="mt-8 space-y-6 text-[15px] leading-relaxed">
          <Field k="Challenge" v={c.challenge} color={c.color} />
          <Field k="Solution" v={c.solution} color={c.color} />
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Stack
            </div>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {c.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-border bg-white px-3 py-1 font-mono text-[11px] text-foreground/80 hover:border-foreground/20 transition-colors"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="lg:col-span-7 space-y-4">
        <DashboardMock c={c} />
        <StaggerReveal className="grid grid-cols-3 gap-3">
          {c.outcomes.map(([v, l]) => (
            <StaggerChild key={l} className="rounded-xl border border-border bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[#FFB800]/30">
              <div className="font-display text-2xl font-extrabold tracking-tight text-gradient-gold">
                {v}
              </div>
              <div className="mt-2 text-xs leading-snug text-muted-foreground">{l}</div>
            </StaggerChild>
          ))}
        </StaggerReveal>
      </div>
    </article>
  );
}

function Field({ k, v, color }: { k: string; v: string; color: string }) {
  return (
    <div className="pl-4" style={{ borderLeft: `2px solid ${color}40` }}>
      <div className="font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color }}>
        {k}
      </div>
      <p className="mt-2 text-foreground/80 text-[14px]">{v}</p>
    </div>
  );
}

function DashboardMock({ c }: { c: (typeof CASES)[number] }) {
  const seed = c.title.length;
  const bars = Array.from({ length: 16 }, (_, i) => 20 + ((seed * (i + 3)) % 70));
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0B1120] shadow-[0_24px_60px_-12px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.06)] overflow-hidden">
      {/* Header bar */}
      <div className="flex items-center justify-between border-b border-white/07 px-5 py-3.5">
        <div className="flex items-center gap-2.5">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
          </div>
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30 ml-2">
            pipeline · 16-week view
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
          </span>
          <span className="font-mono text-[9px] text-emerald-400/70">live</span>
        </div>
      </div>

      <div className="p-5">
        {/* Outcome metric mini-cards */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {c.outcomes.map(([v, l]) => (
            <div key={l} className="rounded-xl border border-white/07 bg-white/03 p-3">
              <div className="font-display text-[20px] font-bold leading-none text-gradient-gold">{v}</div>
              <div className="mt-1.5 font-mono text-[8.5px] text-white/35 leading-tight">{l}</div>
            </div>
          ))}
        </div>

        {/* Bar chart */}
        <div className="rounded-xl border border-white/06 bg-white/02 p-3 mb-3">
          <div className="flex items-center justify-between mb-2.5">
            <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/25">Pipeline trend</div>
            <div className="font-mono text-[9px] text-white/20">USD normalized</div>
          </div>
          <div className="flex items-end gap-[3px] h-12">
            {bars.map((h, i) => (
              <div key={i} className="flex-1">
                <div
                  className="w-full rounded-[2px]"
                  style={{
                    height: `${h}%`,
                    background: i >= 12
                      ? `linear-gradient(to top, ${c.color}, ${c.color}88)`
                      : `linear-gradient(to top, ${c.color}45, ${c.color}22)`,
                  }}
                />
              </div>
            ))}
          </div>
          <div className="mt-2 grid grid-cols-4 gap-1 font-mono text-[8.5px] uppercase tracking-[0.15em] text-white/20">
            {["MQL", "SQL", "Opp", "Won"].map((s) => <div key={s}>{s}</div>)}
          </div>
        </div>

        {/* Stack tags */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 flex-wrap">
            {c.stack.map((t) => (
              <span key={t} className="rounded px-1.5 py-0.5 font-mono text-[8.5px] text-white/35 border border-white/07">{t}</span>
            ))}
          </div>
          <span className="font-mono text-[8.5px] text-white/20">synced live</span>
        </div>
      </div>
    </div>
  );
}
