import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader, Eyebrow } from "@/components/site/Eyebrow";
import { ScrollReveal } from "@/components/site/ScrollReveal";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies | SuperTelque RevOps" },
      { name: "description", content: "Teardowns of RevOps and GTM engineering engagements: B2B SaaS pipeline transformation, fintech automation, AI startup lead routing." },
      { property: "og:title", content: "Case Studies | SuperTelque RevOps" },
      { property: "og:description", content: "Challenge · Solution · Stack · Outcome: three engagement teardowns." },
    ],
  }),
  component: CaseStudiesPage,
});

const CASES = [
  {
    tag: "Enterprise SaaS · Series C",
    title: "Forecasting alignment across a 200-rep org",
    challenge:
      "Three forecasting systems disagreed every Monday. CRO meetings opened with reconciliation, not strategy.",
    solution:
      "Re-architected the HubSpot ↔ Salesforce contract, deployed a versioned object model, and shipped bi-directional sync with a single forecast surface.",
    stack: ["HubSpot", "Salesforce", "n8n", "Snowflake", "Power BI"],
    outcomes: [
      ["100%", "Forecasting alignment across regions"],
      ["−72%", "Manual data reconciliation hours"],
      ["4.2s", "End-to-end sync latency"],
    ],
  },
  {
    tag: "Fintech · Series B",
    title: "Outbound automation across 3 GTM motions",
    challenge:
      "Manual enrichment, fragmented sequences, and no signal layer meant reps spent 60% of their week on list-building.",
    solution:
      "Built a Clay waterfall feeding Apollo sequences, routed via intent signals and scored by an OpenAI layer with hand-off into Salesforce.",
    stack: ["Clay", "Apollo", "Salesforce", "OpenAI", "Slack"],
    outcomes: [
      ["3.5×", "Meeting booking rate"],
      ["+62%", "Rep selling time"],
      ["−48%", "Cost per qualified meeting"],
    ],
  },
  {
    tag: "AI Startup · Series A",
    title: "Intent-driven lead routing engine",
    challenge:
      "Lead response time over an hour. Hot demo requests landing in shared inboxes and going stale.",
    solution:
      "Designed a routing engine with intent enrichment, AI prioritization, and Slack-native escalation that paged the right AE in under 90 seconds.",
    stack: ["HubSpot", "OpenAI", "Make", "Slack"],
    outcomes: [
      ["+22%", "SQL conversion lift"],
      ["<90s", "Hot-lead response time"],
      ["+38%", "Demo show rate"],
    ],
  },
];

function CaseStudiesPage() {
  return (
    <SiteLayout headerTheme="dark">
      <section className="sec-navy relative overflow-hidden border-b border-border pt-24 md:pt-28">
        <div className="relative mx-auto max-w-7xl px-4 pb-12 lg:pt-32 lg:px-6">
          <Eyebrow>Case studies</Eyebrow>
          <h1 className="mt-5 max-w-4xl font-display text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-[72px] lg:leading-[1.03]">
            What we shipped.
            <br />
            <span className="text-gradient-gold">What it moved.</span>
          </h1>
          <ScrollReveal variant="fadeUp" delay={0.15}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Three field teardowns from recent engagements covering challenge, architecture, stack
              and the metrics that changed in the boardroom.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="sec-white py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-6 space-y-12 lg:space-y-20">
          {CASES.map((c, i) => (
            <ScrollReveal key={c.title} variant="fadeUp" delay={i * 0.1}>
              <Study c={c} index={i} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="sec-gold border-t border-black/10 py-12 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 lg:px-6 text-center">
          <ScrollReveal variant="scaleIn">
            <div className="flex items-center justify-center gap-2.5 mb-4">
              <img src="/supertelque-logo.png" alt="" className="h-8 w-8 object-contain" />
            </div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              Your engagement could be the next teardown.
            </h2>
            <Link
              to="/book"
              className="mt-8 inline-flex rounded-full bg-[#080D1C] px-6 py-3.5 text-sm font-bold text-white hover:bg-[#162038] transition-colors"
            >
              Book a strategy session →
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
        <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          Case · {String(index + 1).padStart(2, "0")} / {String(CASES.length).padStart(2, "0")} ·{" "}
          {c.tag}
        </div>
        <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          {c.title}
        </h2>
        <div className="mt-8 space-y-6 text-[15px] leading-relaxed">
          <Field k="Challenge" v={c.challenge} />
          <Field k="Solution" v={c.solution} />
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Stack
            </div>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {c.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-border bg-(--surface)/60 px-2.5 py-1 font-mono text-[11px] text-foreground/85"
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
        <div className="grid grid-cols-3 gap-3">
          {c.outcomes.map(([v, l]) => (
            <div key={l} className="rounded-xl border border-border bg-[#F4F6FA] p-4">
              <div className="font-display text-2xl font-extrabold tracking-tight text-gradient-gold">
                {v}
              </div>
              <div className="mt-1 text-xs text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

function Field({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
        {k}
      </div>
      <p className="mt-2 text-foreground/85">{v}</p>
    </div>
  );
}

function DashboardMock({ c }: { c: (typeof CASES)[number] }) {
  // procedurally generated bar chart per case
  const seed = c.title.length;
  const bars = Array.from({ length: 16 }, (_, i) => 20 + ((seed * (i + 3)) % 70));
  return (
    <div className="surface-card overflow-hidden p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-(--accent-teal)" />
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            pipeline · 16-week view
          </span>
        </div>
        <span className="font-mono text-[11px] text-muted-foreground">USD · normalized</span>
      </div>

      <div className="mt-6 grid grid-cols-[1fr_auto] gap-4 items-end">
        <div className="flex h-44 items-end gap-2">
          {bars.map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-stretch gap-1">
              <div
                className="w-full rounded-sm bg-linear-to-t from-accent-blue/60 to-accent-indigo/80"
                style={{ height: `${h}%` }}
              />
              <div
                className="w-full rounded-sm bg-foreground/10"
                style={{ height: `${100 - h}%` }}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2 text-right">
          {["+40%", "+18%", "−12%"].map((d, i) => (
            <div
              key={d}
              className="rounded-md border border-border px-2 py-1 font-mono text-[11px]"
            >
              <span className="text-muted-foreground mr-2">Q{i + 1}</span>
              <span className={d.startsWith("−") ? "text-destructive" : "text-(--accent-teal)"}>
                {d}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 grid grid-cols-4 gap-2 border-t border-border pt-4 font-mono text-[10.5px] uppercase tracking-[0.18em] text-muted-foreground">
        {["MQL", "SQL", "Opp", "Won"].map((s) => (
          <div key={s}>{s}</div>
        ))}
      </div>
    </div>
  );
}