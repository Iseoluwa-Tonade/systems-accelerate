import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader, Eyebrow } from "@/components/site/Eyebrow";
import { ScrollReveal } from "@/components/site/ScrollReveal";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ | SuperTelque" },
      { name: "description", content: "Answers to the most common questions about working with SuperTelque: services, pricing, timelines, and how engagements are structured." },
      { property: "og:title", content: "FAQ | SuperTelque" },
      { property: "og:description", content: "How SuperTelque engagements work, what we build, and what to expect." },
    ],
  }),
  component: FaqPage,
});

const FAQS = [
  {
    category: "Working with us",
    color: "#1B5EFF",
    items: [
      {
        q: "What does SuperTelque actually do?",
        a: "We build the systems B2B companies run on. That includes lead generation, inbound handling, and outbound campaigns; CRM setup and sales operations across all major platforms; RevOps and GTM engineering; workflow automation with AI; social media and community management; and virtual assistance covering admin duties, commerce management, order processing, and back-office operations. One team, one accountable partner.",
      },
      {
        q: "Who do you work with?",
        a: "Founders and operators at B2B companies who need real systems built, not slide decks. We work best with companies that have a repeatable offer and want to scale it without adding headcount for every function.",
      },
      {
        q: "How do engagements start?",
        a: "Everything starts with a 45-minute strategy session. We review your current setup, identify the biggest gaps, and give you a clear starting point. No pressure, no pitch deck. You can book directly from our website.",
      },
      {
        q: "Do you work on retainer or project-by-project?",
        a: "Both. Some clients start with a defined project (CRM implementation, automation build, outbound campaign setup) and transition to a retainer once the foundations are in place. Others engage on a rolling basis from day one. We scope based on what makes sense for where you are.",
      },
      {
        q: "Are you fully remote?",
        a: "Yes. We are a remote-first team and work with clients globally. All communication is async-friendly and we operate across time zones. Our team and clients are distributed worldwide.",
      },
    ],
  },
  {
    category: "Services and delivery",
    color: "#10B981",
    items: [
      {
        q: "Which CRMs do you work with?",
        a: "We work with all major CRM platforms: HubSpot, Salesforce, Pipedrive, Zoho CRM, Close, ActiveCampaign, Monday.com CRM, Keap, and others. We meet you where you are. If you already have a CRM, we will work in it. If you are choosing one, we will help you pick the right tool for your stage and structure, then implement it properly.",
      },
      {
        q: "What automation tools do you use?",
        a: "We build primarily on n8n, Make (Integromat), and Zapier. For AI-powered workflows we use OpenAI, Claude, and similar models. We choose the tool that fits the complexity and budget of the job, not the one we are most comfortable with.",
      },
      {
        q: "Do you build automations that use AI?",
        a: "Yes. We integrate AI into operational workflows: lead research and enrichment, email personalisation at scale, document processing, classification and routing, and AI-assisted support queues. The automation holds the logic; the AI handles the intelligence layer.",
      },
      {
        q: "How long does a typical project take?",
        a: "It depends on scope. A focused CRM cleanup or a single automation workflow can ship in one to two weeks. A full RevOps implementation or outbound infrastructure build typically runs four to eight weeks. We scope and timeline before any work starts so you know exactly what to expect.",
      },
      {
        q: "Do you document your work?",
        a: "Always. Every system we build is fully documented before handover. You own the documentation, the credentials, and the workflows. We build so the system outlasts the engagement.",
      },
      {
        q: "Can you manage our social media accounts?",
        a: "Yes. Social media and community management is one of our six service lines. We handle content scheduling, audience engagement, brand voice consistency, and growth across LinkedIn, X, and Instagram. We can take it fully off your plate or work alongside an internal team.",
      },
    ],
  },
  {
    category: "Pricing and process",
    color: "#8B5CF6",
    items: [
      {
        q: "How is pricing structured?",
        a: "We price by scope and outcome, not by the hour. After the strategy session we put together a clear proposal: what we build, what it costs, and what you get at the end. No retainers with vague deliverables.",
      },
      {
        q: "Do you sign NDAs?",
        a: "Yes, on request. We handle client data and internal processes as a matter of course, so confidentiality is standard practice for us.",
      },
      {
        q: "Are you GDPR compliant?",
        a: "Yes. We operate in compliance with GDPR and handle data from European clients regularly. We can provide a data processing agreement if required.",
      },
      {
        q: "What happens after a project ends?",
        a: "You walk away with fully working systems, documentation, and the knowledge to run them. If you want ongoing support, we offer retainer arrangements. If you do not, everything is yours and you are fully equipped to manage it internally.",
      },
    ],
  },
] as const;

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      className={`h-5 w-5 shrink-0 text-[#FFB800] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M5 8l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-start justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-display text-[15px] font-semibold leading-snug text-[#080D1C]">{q}</span>
        <Chevron open={open} />
      </button>
      {open && (
        <p className="pb-5 pr-8 text-[15px] leading-relaxed text-[#4C5670]">{a}</p>
      )}
    </div>
  );
}

function FaqPage() {
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
              <Eyebrow>FAQ</Eyebrow>
              <h1 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-[#080D1C] sm:text-5xl lg:text-[64px] lg:leading-[1.04]">
                Questions we <span className="text-gradient-gold">get asked.</span>
              </h1>
              <ScrollReveal variant="fadeUp" delay={0.15}>
                <p className="mt-7 max-w-xl text-[17px] leading-relaxed text-[#4C5670]">
                  Straight answers about how we work, what we build, and what to expect from an engagement.
                </p>
              </ScrollReveal>
              <ScrollReveal variant="fadeUp" delay={0.25}>
                <div className="mt-8 flex flex-wrap gap-3">
                  {FAQS.map((cat) => (
                    <a
                      key={cat.category}
                      href={`#${cat.category.toLowerCase().replace(/\s+/g, "-")}`}
                      className="inline-flex items-center gap-1.5 rounded-full border border-[#E8EEFF] bg-white px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-[#4C5670] transition-colors hover:border-[#1B5EFF]/30 hover:text-[#1B5EFF]"
                    >
                      {cat.category}
                    </a>
                  ))}
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal variant="fadeUp" delay={0.2} className="lg:col-span-5">
              <div className="rounded-2xl border border-border overflow-hidden">
                <div className="relative h-48 lg:h-56 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80&auto=format&fit=crop"
                    alt="Person thinking through a business problem"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080D1C]/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/70">Straight answers</div>
                    <div className="mt-0.5 font-display text-sm font-bold text-white">No jargon. No runaround.</div>
                  </div>
                </div>
                <div className="px-5 py-4 bg-[#F4F7FF] flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#4C5670]">{FAQS.reduce((a, c) => a + c.items.length, 0)} questions answered</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ sections */}
      <section className="sec-white py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-10">
            {/* Sticky sidebar nav on large screens */}
            <nav className="hidden lg:block lg:col-span-3">
              <div className="sticky top-24 space-y-1">
                <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Jump to</div>
                {FAQS.map((cat) => (
                  <a
                    key={cat.category}
                    href={`#${cat.category.toLowerCase().replace(/\s+/g, "-")}`}
                    className="block rounded-lg px-3 py-2 text-sm text-[#4C5670] transition-colors hover:bg-[#F4F6FA] hover:text-[#080D1C]"
                  >
                    {cat.category}
                  </a>
                ))}
              </div>
            </nav>

            {/* Accordion groups */}
            <div className="lg:col-span-9 space-y-12">
              {FAQS.map((cat, ci) => (
                <ScrollReveal key={cat.category} variant="fadeUp" delay={ci * 0.08}>
                  <div id={cat.category.toLowerCase().replace(/\s+/g, "-")}>
                    <div className="mb-5 flex items-center gap-3">
                      <span
                        className="h-1 w-8 rounded-full"
                        style={{ backgroundColor: cat.color }}
                      />
                      <span
                        className="font-mono text-[11px] uppercase tracking-[0.2em]"
                        style={{ color: cat.color }}
                      >
                        {cat.category}
                      </span>
                    </div>
                    <div className="rounded-2xl border border-border bg-white px-6">
                      {cat.items.map((item) => (
                        <AccordionItem key={item.q} q={item.q} a={item.a} />
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Still have a question */}
      <section className="sec-mid border-y border-border py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="rounded-2xl border border-[#E0E7FF] bg-white p-8 lg:p-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#FFB800] mb-3">Still have questions?</div>
              <h2 className="font-display text-2xl font-extrabold tracking-tight text-[#080D1C] sm:text-3xl">
                We are happy to talk it through.
              </h2>
              <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-[#4C5670]">
                If your question is not answered here, reach out directly. We respond to every serious enquiry.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <Link
                to="/book"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[13px] font-bold text-[#080D1C] transition-all hover:scale-[1.03] hover:shadow-[0_8px_24px_-6px_rgba(255,184,0,0.40)]"
                style={{ background: "linear-gradient(135deg, #FFD44D 0%, #FFB800 100%)" }}
              >
                Book a session
                <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#080D1C] px-6 py-3.5 text-[13px] font-bold text-[#080D1C] transition-all hover:bg-[#080D1C] hover:text-white"
              >
                Send a message
              </Link>
            </div>
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
              Ready to build?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-base text-white/60">
              45 minutes. We review your setup and tell you where to start.
            </p>
            <Link
              to="/book"
              className="mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold text-[#080D1C] transition-all hover:scale-[1.03] hover:shadow-[0_12px_28px_-6px_rgba(255,184,0,0.40)]"
              style={{ background: "linear-gradient(135deg, #FFD44D 0%, #FFB800 100%)" }}
            >
              Book a strategy session
              <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </SiteLayout>
  );
}
