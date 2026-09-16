import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Eyebrow } from "@/components/site/Eyebrow";
import { ScrollReveal, StaggerReveal, StaggerChild } from "@/components/site/ScrollReveal";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies | SuperTelque" },
      { name: "description", content: "How SuperTelque helps growing businesses manage sales, customer and back-office operations through people, automation and AI." },
      { property: "og:title", content: "Case Studies | SuperTelque" },
      { property: "og:description", content: "Real examples of operational problems solved with managed services, workflow automation and AI." },
    ],
  }),
  component: CaseStudiesPage,
});

const CASES = [
  {
    tag: "Home Services",
    color: "#1B5EFF",
    title: "Appointment coordination and customer follow-up for a growing service company",
    challenge:
      "New customer inquiries were coming in through multiple channels — phone, email, website forms — but responses were inconsistent. Estimate follow-ups were being missed, and the operations team spent most of their day on manual coordination.",
    solution:
      "Implemented a unified inquiry management workflow. Set up automated appointment scheduling, estimate follow-up sequences, and a customer communications system that keeps records accurate across channels.",
    stack: ["HubSpot", "GoHighLevel", "n8n", "Slack"],
    deliverables: [
      "Unified inquiry routing across all channels",
      "Automated estimate follow-up sequences",
      "Appointment scheduling and coordination",
      "Customer operations reporting dashboard",
    ],
  },
  {
    tag: "Industrial Services",
    color: "#14B8A6",
    title: "Prospecting and quotation management support for a commercial services firm",
    challenge:
      "The sales team was handling both prospecting and quotation management manually. New leads were being researched during the same hours as client delivery, creating inconsistent follow-up and missed opportunities.",
    solution:
      "Built a prospecting workflow with research enrichment, automated outreach sequences, and a quotation management system that tracks every opportunity from first contact through to close.",
    stack: ["Apollo", "Clay", "Pipedrive", "n8n", "Slack"],
    deliverables: [
      "Prospect research and enrichment pipeline",
      "Automated outbound sequences",
      "Quotation tracking and follow-up",
      "Weekly pipeline reporting",
    ],
  },
  {
    tag: "Professional Services",
    color: "#8B5CF6",
    title: "Back-office administration and scheduling automation for a services business",
    challenge:
      "The business owner was spending over half their week on administrative tasks — data entry, scheduling, document preparation, and internal coordination — instead of business development and client delivery.",
    solution:
      "Automated repetitive administrative workflows, set up structured scheduling and task management, and created SOPs for the processes that needed human oversight.",
    stack: ["Google Workspace", "Zapier", "Notion", "Calendly"],
    deliverables: [
      "Automated data entry and document workflows",
      "Structured scheduling and task management",
      "Process documentation and SOPs",
      "Weekly operations reporting",
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
                Real problems.
                <br />
                <span className="text-gradient-gold">Practical solutions.</span>
              </h1>
              <ScrollReveal variant="fadeUp" delay={0.15}>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
                  Examples of operational problems we've helped businesses solve — with the workflow, the tools, and the approach we used.
                </p>
              </ScrollReveal>
            </div>
            <ScrollReveal variant="fadeUp" delay={0.2} className="lg:col-span-5">
              <div className="rounded-2xl border border-border overflow-hidden">
                <div className="relative h-48 lg:h-56 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop"
                    alt="Operations and workflow management"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080D1C]/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/70">Outcomes over outputs</div>
                    <div className="mt-0.5 font-display text-sm font-bold text-white">What was built and delivered.</div>
                  </div>
                </div>
                <div className="px-5 py-4 bg-[#F4F7FF] flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#4C5670]">Real examples · Honest outcomes</span>
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
                      Next case
                    </span>
                    <div className="flex-1 h-px bg-border" />
                  </div>
                )}
                <Study c={c} />
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
              Your operations could be next.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-[17px] leading-relaxed text-white/50">
              20 minutes. Tell us what's slowing your team down and we'll tell you where support or automation could help.
            </p>
            <Link
              to="/book"
              className="mt-10 inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-[15px] font-bold text-[#080D1C] transition-all hover:scale-[1.03] hover:shadow-[0_16px_40px_-8px_rgba(255,184,0,0.50)]"
              style={{ background: "linear-gradient(135deg, #FFD44D 0%, #FFB800 60%, #E08A00 100%)" }}
            >
              Book an Operations Review
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

function Study({ c }: { c: (typeof CASES)[number] }) {
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
        <StaggerReveal className="grid grid-cols-2 gap-3">
          {c.deliverables.map((d) => (
            <StaggerChild key={d} className="rounded-xl border border-border bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[#FFB800]/30">
              <div className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FFB800]/15">
                  <svg viewBox="0 0 10 10" fill="none" className="h-2.5 w-2.5">
                    <path d="M2 5l2.5 2.5L8 3" stroke="#B45309" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div className="text-sm text-foreground/80 leading-snug">{d}</div>
              </div>
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
      <div className="flex items-center justify-between border-b border-white/07 px-5 py-3.5">
        <div className="flex items-center gap-2.5">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
          </div>
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30 ml-2">
            operations · workflow overview
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
          </span>
          <span className="font-mono text-[9px] text-emerald-400/70">delivered</span>
        </div>
      </div>

      <div className="p-5">
        <div className="grid grid-cols-2 gap-2 mb-4">
          {c.deliverables.slice(0, 2).map((d) => (
            <div key={d} className="rounded-xl border border-white/07 bg-white/03 p-3">
              <div className="font-mono text-[9px] text-white/35 leading-tight">{d}</div>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-white/06 bg-white/02 p-3 mb-3">
          <div className="flex items-center justify-between mb-2.5">
            <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/25">Delivery timeline</div>
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
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 flex-wrap">
            {c.stack.map((t) => (
              <span key={t} className="rounded px-1.5 py-0.5 font-mono text-[8.5px] text-white/35 border border-white/07">{t}</span>
            ))}
          </div>
          <span className="font-mono text-[8.5px] text-white/20">delivered</span>
        </div>
      </div>
    </div>
  );
}
