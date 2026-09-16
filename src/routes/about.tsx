import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader, Eyebrow } from "@/components/site/Eyebrow";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import { AgentAvatar } from "@/components/site/AgentAvatar";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | SuperTelque" },
      { name: "description", content: "SuperTelque combines experienced people, structured processes, automation and AI to run the sales and operational workflows that help growing businesses move forward." },
      { property: "og:title", content: "About | SuperTelque" },
      { property: "og:description", content: "Managed revenue, customer and business operations for growing companies. People + Process + Automation." },
    ],
  }),
  component: AboutPage,
});

const TEAM = [
  {
    v: 1 as const,
    name: "Sunny T.",
    role: "Operations Lead",
    specialty: "Revenue Systems · CRM · Workflow Design",
    bio: "Leads client engagements across revenue operations and workflow design. Builds systems that connect CRM, pipeline, and reporting into a single operating picture.",
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
    bio: "Builds the automation layer between tools, teams and data. Specialises in workflow automation, AI-powered processes, and system integrations.",
  },
] as const;

const PRINCIPLES = [
  { k: "People + Process + Automation", d: "We combine the right people, structured processes and automation to deliver outcomes — not just tools or headcount." },
  { k: "Operational responsibility", d: "We don't just install systems and leave. Under our Build & Manage model, we take responsibility for running the agreed workflow." },
  { k: "Work owned by the client", d: "Every system we build belongs to you. Full documentation, training, and clear handover if you choose to run it internally." },
  { k: "Honest outcomes", d: "We describe what we built and delivered. We don't fabricate metrics or claim results we can't verify." },
  { k: "Technology as an enabler", d: "AI, automation and CRM architecture are tools in service of a better operational outcome — not the product you have to learn first." },
];

const INDUSTRIES = [
  { title: "Home Services", desc: "Lead response, appointment coordination, estimate follow-up and customer operations.", accent: "#1B5EFF" },
  { title: "Industrial & Commercial Services", desc: "Prospecting, quotation follow-up, CRM management and sales coordination.", accent: "#14B8A6" },
  { title: "Property Management", desc: "Inquiry coordination, viewing scheduling and vendor communication.", accent: "#8B5CF6" },
  { title: "Logistics & Distribution", desc: "Sales coordination, customer updates, workflow and administrative support.", accent: "#F59E0B" },
  { title: "Professional Services", desc: "Client onboarding, scheduling, project coordination and operational reporting.", accent: "#10B981" },
  { title: "Growing B2B Companies", desc: "Revenue operations, CRM implementation, workflow automation and AI-assisted processes.", accent: "#EC4899" },
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
            The company behind your{" "}
            <span className="text-gradient-gold">operations.</span>
          </h1>
          <ScrollReveal variant="fadeUp" delay={0.15}>
            <div className="mt-10 grid gap-8 lg:grid-cols-12">
              <p className="lg:col-span-7 text-lg leading-relaxed text-muted-foreground">
                We combine experienced people, structured processes, automation and AI
                to run the sales and operational workflows that help growing businesses
                move forward — without the burden of building another internal department.
              </p>
              <div className="lg:col-span-5 rounded-2xl border border-white/10 bg-white/05 p-6 flex flex-col justify-center items-center text-center">
                <img src="/supertelque-logo.png" alt="" className="h-10 w-10 object-contain drop-shadow-[0_0_10px_rgba(255,184,0,0.4)]" />
                <div className="mt-3 font-display text-2xl font-bold text-white">Global delivery</div>
                <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-[#FFB800]/70">
                  United States · Lagos · Remote-first
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
                <SectionHeader eyebrow="Mission" title={<>Grow businesses. Not their workload.</>} />
              </div>
              <blockquote className="lg:col-span-8 border-l-2 border-[#FFB800]/40 pl-6 text-xl leading-relaxed text-white/75 lg:text-2xl">
                "To give growing businesses the operational support they need to scale
                with certainty. We take responsibility for defined workflows — supported
                by the right people, processes and technology — so owners and operators
                can focus on the work that matters most."
              </blockquote>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Operating Model */}
      <section className="sec-white py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <SectionHeader
            eyebrow="Operating model"
            title={<>How we deliver outcomes.</>}
            description="We're not just consultants who hand you a plan. Under our Build & Manage model, we take responsibility for running the agreed workflow."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <ScrollReveal variant="fadeUp" delay={0.1}>
              <div className="rounded-2xl border border-border bg-[#F4F6FA] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="font-mono text-[11px] tracking-[0.2em] text-[#1B5EFF] mb-2">People</div>
                <h3 className="font-display text-lg font-bold tracking-tight text-[#080D1C]">Assigned team members</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  The right people working on your workflows — from operations specialists to automation engineers.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal variant="fadeUp" delay={0.2}>
              <div className="rounded-2xl border border-border bg-[#F4F6FA] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="font-mono text-[11px] tracking-[0.2em] text-[#FFB800] mb-2">Process</div>
                <h3 className="font-display text-lg font-bold tracking-tight text-[#080D1C]">Structured workflows</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Defined processes with clear responsibilities, escalation paths and reporting so you know exactly what's running.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal variant="fadeUp" delay={0.3}>
              <div className="rounded-2xl border border-border bg-[#F4F6FA] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="font-mono text-[11px] tracking-[0.2em] text-[#8B5CF6] mb-2">Automation</div>
                <h3 className="font-display text-lg font-bold tracking-tight text-[#080D1C]">AI and workflow systems</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  CRM, automation and AI-assisted processes that reduce manual work and keep everything running at scale.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="sec-white border-t border-border py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <SectionHeader eyebrow="Core principles" title={<>What guides our work.</>} />
          <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-5">
            {PRINCIPLES.map((p, i) => (
              <ScrollReveal key={p.k} variant="fadeUp" delay={i * 0.09} className="rounded-xl border border-border bg-[#F4F6FA] p-5 transition-all duration-300 hover:bg-[#EEF3FF] hover:-translate-y-1 hover:shadow-md">
                <h3 className="font-display text-base font-bold tracking-tight text-[#080D1C]">{p.k}</h3>
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
                The people who{" "}
                <span className="text-gradient-gold">run your operations.</span>
              </>
            }
            description="A senior team. Every engagement is staffed by the specialists who know your workflow."
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
                Businesses we <span className="text-gradient-gold">help run.</span>
              </>
            }
            description="Our approach works across industries. These are the markets we focus on and build for."
          />
          <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((ind, i) => (
              <ScrollReveal
                key={ind.title}
                variant="fadeUp"
                delay={i * 0.08}
                className="rounded-xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-center justify-between mb-3">
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
              Ready to talk about your operations?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-base text-white/60">
              20 minutes. Tell us what's taking too much time and we'll tell you where to start.
            </p>
            <Link
              to="/book"
              className="mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold text-[#080D1C] transition-all hover:scale-[1.03] hover:shadow-[0_12px_28px_-6px_rgba(255,184,0,0.40)]"
              style={{ background: "linear-gradient(135deg, #FFD44D 0%, #FFB800 100%)" }}
            >
              Book an Operations Review →
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </SiteLayout>
  );
}
