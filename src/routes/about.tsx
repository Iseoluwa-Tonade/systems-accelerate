import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader, Eyebrow } from "@/components/site/Eyebrow";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import { AgentAvatar } from "@/components/site/AgentAvatar";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | SuperTelque" },
      { name: "description", content: "A small, senior team helping B2B companies grow revenue through better systems and smarter automation." },
      { property: "og:title", content: "About | SuperTelque" },
      { property: "og:description", content: "RevOps expertise. GTM systems thinking. Automation engineering." },
    ],
  }),
  component: AboutPage,
});

const TEAM = [
  {
    v: 1 as const,
    name: "Sunny T.",
    role: "RevOps Lead",
    specialty: "HubSpot · Salesforce · Forecasting",
    bio: "10+ years building revenue systems inside Series A–D B2B companies. Expert in CRM architecture, pipeline design, and GTM alignment.",
  },
  {
    v: 2 as const,
    name: "Rhoda O.",
    role: "Community Manager",
    specialty: "Social Media · Community · Content",
    bio: "Builds engaged communities and consistent brand presence across channels. Specialist in social media strategy, scheduling, and audience growth.",
  },
  {
    v: 3 as const,
    name: "Israel O.",
    role: "Automation Engineer",
    specialty: "n8n · Make · AI Integrations",
    bio: "Full-stack automation engineer. Specialises in no-code pipelines, AI-powered workflows, and integrations across the full revenue stack.",
  },
] as const;

const PRINCIPLES = [
  { k: "Data first", d: "We build on clean data. Bad CRM data isn't a reporting headache. It's what stops deals from closing." },
  { k: "Systems before headcount", d: "Build the system before adding people. If a task repeats every week, it should probably be automated." },
  { k: "One team, one number", d: "Sales, marketing, and CS work from the same funnel, the same definitions, and the same numbers." },
  { k: "Build to last", d: "Build for where you're going, not where you are. Good systems get more valuable over time." },
  { k: "Measurable outcomes", d: "Every engagement is measured against pipeline, conversion rate, or cost savings. Not hours." },
];

const INDUSTRIES = [
  { title: "Manufacturing", desc: "Automating inventory tracking, RFX routing, and vendor communication.", accent: "#1B5EFF" },
  { title: "Real Estate", desc: "Lead intake, property database ingestion, and automated client sequencing.", accent: "#4F46E5" },
  { title: "Ecommerce", desc: "Shopping platform syncs, order automation, and customer feedback triggers.", accent: "#14B8A6" },
  { title: "Logistics & Supply Chain", desc: "Waybill processing, real-time dispatch alerts, and tracking integrations.", accent: "#8B5CF6" },
  { title: "Healthcare & Pharma", desc: "Compliance-first intake flows, doctor matching queues, and scheduling syncs.", accent: "#1B5EFF" },
  { title: "Edutech", desc: "Student onboarding workflows, automated course access, and event reminders.", accent: "#14B8A6" },
] as const;

function AboutPage() {
  return (
    <SiteLayout headerTheme="light">
      {/* Hero */}
      <section
        className="relative overflow-hidden border-b border-border pt-24 md:pt-28"
        style={{ background: "linear-gradient(155deg, #EEF4FF 0%, #FFFFFF 60%, #FFF9F0 100%)" }}
      >
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute -top-20 right-0 h-[400px] w-[400px] rounded-full opacity-40"
            style={{ background: "radial-gradient(circle, rgba(255,184,0,0.12) 0%, transparent 70%)" }}
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 pb-14 lg:pt-16 lg:px-6">
          <Eyebrow>About</Eyebrow>
          <h1 className="mt-5 max-w-4xl font-display text-3xl font-extrabold tracking-tight text-[#080D1C] sm:text-5xl lg:text-[68px] lg:leading-[1.02]">
            We are <span className="text-gradient-gold">technical revenue operators</span>,
            <br className="hidden lg:block" /> not a marketing agency.
          </h1>
          <ScrollReveal variant="fadeUp" delay={0.15}>
            <div className="mt-10 grid gap-6 lg:grid-cols-12">
              <p className="lg:col-span-7 text-lg leading-relaxed text-[#4C5670]">
                SuperTelque is a small, senior team with real experience running RevOps and building
                automation inside revenue organizations. We work with founders and operators who need
                actual systems built, not more slide decks.
              </p>
              <div className="lg:col-span-5 rounded-2xl border border-border bg-[#F4F7FF] overflow-hidden">
                <div className="relative h-48 lg:h-56 overflow-hidden">
                  <img
                    src="/advisor-2.png"
                    alt="Senior RevOps operator"
                    className="w-full h-full object-cover object-[center_15%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080D1C]/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/70">Senior operator</div>
                    <div className="mt-0.5 font-display text-sm font-bold text-white">Revenue systems, built hands-on.</div>
                  </div>
                </div>
                <div className="px-5 py-4 flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#B45309]">Remote-first · Global clients</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission */}
      <section className="sec-white border-b border-border py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <ScrollReveal variant="fadeUp">
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <SectionHeader eyebrow="Mission" title={<>Build systems. Grow revenue.</>} />
              </div>
              <blockquote className="lg:col-span-8 border-l-2 border-[#FFB800] pl-6 text-lg leading-relaxed text-[#4C5670] lg:text-xl">
                "To help companies grow revenue through better systems and smarter automation.
                We replace manual, fragile processes with ones that are reliable, measurable,
                and built to last."
              </blockquote>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Core Principles */}
      <section className="sec-white py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <SectionHeader eyebrow="Core principles" title={<>How we operate.</>} />
          <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-5">
            {PRINCIPLES.map((p, i) => (
              <ScrollReveal key={p.k} variant="fadeUp" delay={i * 0.09} className="rounded-xl border border-border bg-[#F4F6FA] p-5 transition-all duration-300 hover:bg-[#EEF3FF] hover:-translate-y-1 hover:shadow-md">
                <div className="font-mono text-[11px] tracking-[0.2em] text-[#FFB800]">
                  0{i + 1}
                </div>
                <h3 className="mt-3 font-display text-base font-bold tracking-tight text-[#080D1C]">{p.k}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="sec-white border-t border-border py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <SectionHeader
            eyebrow="Meet the team"
            title={
              <>
                The people who <span className="text-gradient-gold">build your systems.</span>
              </>
            }
            description="A small, senior team. Every engagement is staffed by the specialists who know your stack."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {TEAM.map((member, i) => (
              <ScrollReveal key={member.name} variant="zoomIn" delay={i * 0.12}>
                <div className="rounded-2xl border border-border bg-[#F8FAFF] p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#FFB800]/30">
                  <AgentAvatar v={member.v} size={108} />
                  <div className="mt-5 font-display text-xl font-bold tracking-tight text-[#080D1C]">{member.name}</div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{member.role}</div>
                  <div className="mt-2 text-xs font-mono text-[#1B5EFF]">{member.specialty}</div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="sec-mid border-y border-border py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <SectionHeader
            eyebrow="Industries"
            title={
              <>
                Sectors we <span className="text-gradient-gold">work in.</span>
              </>
            }
            description="Our approach is sector-agnostic. These are industries where we've shipped revenue operations."
          />
          <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((ind, i) => (
              <ScrollReveal
                key={ind.title}
                variant="fadeUp"
                delay={i * 0.08}
                className="rounded-xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-center justify-between font-mono text-[10px] text-muted-foreground mb-3">
                  <span style={{ color: ind.accent }}>SECTOR · 0{i + 1}</span>
                  <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: ind.accent, opacity: 0.7 }} />
                </div>
                <h3 className="font-display text-lg font-bold tracking-tight text-[#080D1C]">{ind.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{ind.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sec-navy py-14 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 lg:px-6 text-center">
          <ScrollReveal variant="scaleIn">
            <div className="flex items-center justify-center gap-2.5 mb-4">
              <img src="/supertelque-logo.png" alt="" className="h-8 w-8 object-contain drop-shadow-[0_0_10px_rgba(255,184,0,0.4)]" />
            </div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Ready to work with us?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-base text-white/60">
              45 minutes. We review your setup and tell you where to start.
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
    </SiteLayout>
  );
}
