import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader, Eyebrow } from "@/components/site/Eyebrow";
import { ScrollReveal } from "@/components/site/ScrollReveal";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Open Roles | SuperTelque" },
      { name: "description", content: "Join the SuperTelque team. We are a remote-first growth partner hiring across RevOps, automation, social media, and back-office operations." },
      { property: "og:title", content: "Open Roles | SuperTelque" },
      { property: "og:description", content: "Join a senior, remote-first team building revenue systems for B2B companies globally." },
    ],
  }),
  component: CareersPage,
});

const ROLES = [
  {
    id: "revops-specialist",
    title: "RevOps Specialist",
    department: "Revenue Operations",
    type: "Contract",
    location: "Remote",
    color: "#8B5CF6",
    desc: "Work with B2B clients to implement and optimise their CRM, design clean pipelines, and build reporting dashboards that leadership can trust.",
    requirements: [
      "2+ years in a RevOps, CRM admin, or sales operations role",
      "Hands-on with one or more CRMs: HubSpot, Salesforce, Zoho, Pipedrive, Close, or similar (implementation, not just usage)",
      "Comfortable building pipeline reports, forecasting models, and lifecycle stages",
      "Strong written communication in English",
    ],
  },
  {
    id: "automation-engineer",
    title: "Automation Engineer",
    department: "Workflow Automation & AI",
    type: "Full-time",
    location: "Remote",
    color: "#10B981",
    desc: "Build multi-step automation workflows across n8n, Make, and Zapier. Integrate AI into client operations and document everything so systems outlast the engagement.",
    requirements: [
      "Proven experience with n8n, Make, or Zapier at a production level",
      "Ability to design end-to-end workflows across CRM, email, and third-party APIs",
      "Familiarity with AI tools (OpenAI, Claude, or similar) for operational use",
      "A portfolio or examples of automations you have shipped",
    ],
  },
  {
    id: "social-media-manager",
    title: "Social Media Manager",
    department: "Social Media & Community",
    type: "Part-time",
    location: "Remote",
    color: "#EC4899",
    desc: "Manage social presence and community engagement for SuperTelque clients. Own content scheduling, audience growth, and consistent brand voice across LinkedIn, X, and Instagram.",
    requirements: [
      "1+ years managing social media accounts for a brand or agency",
      "Strong written English and a sharp eye for content quality",
      "Experience with scheduling tools (Buffer, Later, Hootsuite, or similar)",
      "Comfortable creating short-form content and community replies at pace",
    ],
  },
  {
    id: "sales-development-rep",
    title: "Sales Development Representative",
    department: "Sales & Lead Generation",
    type: "Full-time",
    location: "Remote",
    color: "#1B5EFF",
    desc: "Run targeted outbound campaigns for SuperTelque clients. Source qualified leads, write personalised sequences, and book discovery calls with decision-makers in B2B companies.",
    requirements: [
      "Experience running outbound campaigns (cold email, LinkedIn, or calling)",
      "Comfortable using Clay, Apollo, or similar prospecting tools",
      "Strong written English and the ability to personalise at scale",
      "Resilient, self-directed, and motivated by conversion metrics",
    ],
  },
  {
    id: "project-manager",
    title: "Project Manager",
    department: "Operations",
    type: "Full-time",
    location: "Remote",
    color: "#14B8A6",
    email: "support@supertelque.com",
    desc: "Own project delivery across multiple client engagements. Coordinate timelines, manage stakeholder communication, and ensure every engagement ships on time and to scope.",
    requirements: [
      "2+ years in a project management role, ideally in an agency or consultancy setting",
      "Strong grasp of project scoping, milestone tracking, and resource coordination",
      "Experience with project tools (Notion, Asana, ClickUp, or similar)",
      "Calm under pressure, highly organised, and a clear communicator in written English",
    ],
  },
  {
    id: "virtual-assistant",
    title: "Virtual Assistant",
    department: "Virtual Assistance & Back Office",
    type: "Part-time",
    location: "Remote",
    color: "#FFB800",
    desc: "Support day-to-day operations for SuperTelque clients. Tasks span admin duties, inbound handling, commerce management, order processing, inbox management, data entry, and scheduling.",
    requirements: [
      "Prior experience as a VA, admin assistant, or in a back-office or ecommerce operations role",
      "Highly organised with strong attention to detail",
      "Fluent in written English",
      "Comfortable handling inbound queries and managing commerce workflows",
      "Familiar with Google Workspace and basic CRM or project management tools",
    ],
  },
] as const;

const TYPE_BADGE: Record<string, string> = {
  "Full-time": "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
  "Part-time": "bg-blue-500/10 text-blue-600 border-blue-500/20",
  "Contract": "bg-amber-500/10 text-amber-700 border-amber-500/20",
};

function CareersPage() {
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
          <div className="grid gap-10 lg:grid-cols-12 items-end">
            <div className="lg:col-span-7">
              <Eyebrow>Open Roles</Eyebrow>
              <h1 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-[#080D1C] sm:text-5xl lg:text-[64px] lg:leading-[1.04]">
                Build with a team that <span className="text-gradient-gold">ships real systems.</span>
              </h1>
              <ScrollReveal variant="fadeUp" delay={0.15}>
                <p className="mt-7 max-w-xl text-[17px] leading-relaxed text-[#4C5670]">
                  We are a remote-first team. Every person works directly with clients and owns their output. No layers, no handoffs.
                </p>
              </ScrollReveal>
              <ScrollReveal variant="fadeUp" delay={0.25}>
                <div className="mt-8 flex flex-wrap gap-3">
                  {["Remote-first", "Async-friendly", "Direct client work", "Global team"].map((tag) => (
                    <span key={tag} className="inline-flex items-center gap-1.5 rounded-full border border-[#E8EEFF] bg-white px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-[#4C5670]">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      {tag}
                    </span>
                  ))}
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal variant="fadeUp" delay={0.2} className="lg:col-span-5">
              <div className="rounded-2xl border border-border overflow-hidden">
                <div className="relative h-48 lg:h-56 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80&auto=format&fit=crop"
                    alt="Team collaborating on a project"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080D1C]/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/70">Remote-first team</div>
                    <div className="mt-0.5 font-display text-sm font-bold text-white">Own your output. Work with real clients.</div>
                  </div>
                </div>
                <div className="px-5 py-4 bg-[#F4F7FF] flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#4C5670]">{ROLES.length} roles open now</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Roles */}
      <section className="sec-white py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <SectionHeader
            eyebrow="Current openings"
            title={<>{ROLES.length} roles open <span className="text-gradient-gold">right now.</span></>}
            description="All roles are fully remote. We hire based on demonstrated skill, not credentials."
          />
          <div className="mt-10 flex flex-col gap-5">
            {ROLES.map((role, i) => (
              <ScrollReveal key={role.id} variant="fadeUp" delay={i * 0.08}>
                <div className="group rounded-2xl border border-border bg-[#FAFBFF] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-[#E0E7FF] lg:p-8">
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span
                          className="font-mono text-[9px] uppercase tracking-[0.2em] px-2.5 py-1 rounded-full border"
                          style={{ color: role.color, borderColor: `${role.color}30`, background: `${role.color}0D` }}
                        >
                          {role.department}
                        </span>
                        <span className={`font-mono text-[9px] uppercase tracking-[0.2em] px-2.5 py-1 rounded-full border ${TYPE_BADGE[role.type]}`}>
                          {role.type}
                        </span>
                        <span className="font-mono text-[9px] uppercase tracking-[0.2em] px-2.5 py-1 rounded-full border border-[#E8EEFF] text-[#4C5670]/70">
                          {role.location}
                        </span>
                      </div>
                      <h3 className="font-display text-xl font-extrabold tracking-tight text-[#080D1C] sm:text-2xl">
                        {role.title}
                      </h3>
                      <p className="mt-2 text-[15px] leading-relaxed text-[#4C5670] max-w-2xl">
                        {role.desc}
                      </p>
                      <ul className="mt-4 flex flex-col gap-1.5">
                        {role.requirements.map((req) => (
                          <li key={req} className="flex items-start gap-2 text-sm text-[#4C5670]">
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full" style={{ backgroundColor: role.color }} />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="shrink-0 lg:ml-8 lg:pt-1">
                      <a
                        href={`mailto:${"email" in role ? role.email : "hello@supertelque.com"}?subject=Application: ${role.title}`}
                        className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-[13px] font-bold text-[#080D1C] transition-all hover:scale-[1.03] hover:shadow-[0_8px_24px_-6px_rgba(255,184,0,0.40)]"
                        style={{ background: "linear-gradient(135deg, #FFD44D 0%, #FFB800 100%)" }}
                      >
                        Apply now
                        <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Open application */}
      <section className="sec-mid border-y border-border py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="rounded-2xl border border-[#E0E7FF] bg-white p-8 lg:p-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#FFB800] mb-3">Open application</div>
              <h2 className="font-display text-2xl font-extrabold tracking-tight text-[#080D1C] sm:text-3xl">
                Do not see your role?
              </h2>
              <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-[#4C5670]">
                We are always open to strong people. If you do excellent work in operations, automation, sales, or community, send us a note. Tell us what you do and how you do it.
              </p>
            </div>
            <a
              href="mailto:hello@supertelque.com?subject=Open Application"
              className="shrink-0 inline-flex items-center gap-2 rounded-full border-2 border-[#080D1C] px-6 py-3.5 text-[13px] font-bold text-[#080D1C] transition-all hover:bg-[#080D1C] hover:text-white"
            >
              Send an open application
              <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
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
              Want to work with us as a client?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-base text-white/60">
              Book a 45-minute strategy session and we will show you what is possible.
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
