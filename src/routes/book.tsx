import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Eyebrow } from "@/components/site/Eyebrow";
import { ScrollReveal } from "@/components/site/ScrollReveal";

const CALENDLY_URL =
  "https://calendly.com/revsupertelque-m0qb?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=ffffff&primary_color=1B5EFF&text_color=080D1C";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book a Strategy Session | SuperTelque RevOps" },
      { name: "description", content: "Book a 45-minute revenue systems strategy session. Stack assessment, automation opportunities, CRM review and a written roadmap." },
      { property: "og:title", content: "Book a Strategy Session | SuperTelque RevOps" },
      { property: "og:description", content: "Estimated value $2,500 · 45 minutes · senior RevOps engineer." },
    ],
    scripts: [
      { src: "https://assets.calendly.com/assets/external/widget.js", async: true },
    ],
  }),
  component: BookPage,
});

function CalendlyEmbed() {
  return (
    <div
      className="calendly-inline-widget w-full"
      data-url={CALENDLY_URL}
      style={{ minWidth: "320px", height: "700px" }}
      suppressHydrationWarning
    />
  );
}

function BookPage() {
  return (
    <SiteLayout headerTheme="light">
      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden border-b border-border pt-24 md:pt-28"
        style={{ background: "linear-gradient(155deg, #EEF4FF 0%, #FFFFFF 60%, #FFF9F0 100%)" }}
      >
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute -top-16 right-1/4 h-[360px] w-[360px] rounded-full opacity-40"
            style={{ background: "radial-gradient(circle, rgba(255,184,0,0.11) 0%, transparent 70%)" }}
          />
          <svg className="absolute right-4 bottom-0 h-[180px] w-[180px] opacity-[0.05]" viewBox="0 0 200 200">
            <rect x="20" y="20" width="160" height="160" rx="20" fill="none" stroke="#1B5EFF" strokeWidth="1.5" strokeDasharray="4 9" />
          </svg>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 pb-14 lg:pt-16 lg:px-6">
          <Eyebrow>Book a session</Eyebrow>
          <h1 className="mt-5 max-w-3xl font-display text-[34px] font-extrabold tracking-tight text-[#080D1C] sm:text-5xl lg:text-[68px] lg:leading-[1.03]">
            Book a <span className="text-gradient-gold">free strategy</span> session.
          </h1>
          <ScrollReveal variant="fadeUp" delay={0.15}>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
              A 45-minute call with a senior RevOps engineer. We review your setup, spot the quick
              wins, and leave you with a clear plan to move forward.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Booking ── */}
      <section className="sec-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-6 py-16 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-12">

            {/* Calendly widget */}
            <div className="lg:col-span-8 surface-card p-3 sm:p-4 overflow-hidden">
              <div className="mb-4 px-1">
                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Scheduler</div>
                <div className="mt-1 font-display text-xl font-semibold">Pick a working block</div>
              </div>
              <CalendlyEmbed />
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-4">
              <div className="surface-card p-4 sm:p-6">
                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  What you'll get
                </div>
                <ul className="mt-4 space-y-3 text-sm">
                  {[
                    "Full stack audit",
                    "Three quick wins to act on",
                    "CRM health check",
                    "Growth recommendations",
                    "Written 90-day plan",
                  ].map((item, idx) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 animate-slide-up-fade"
                      style={{ animationDelay: `${idx * 80}ms` }}
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-(--accent-teal)" />
                      <span className="text-foreground/85">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="surface-card relative overflow-hidden p-4 sm:p-6">
                <div className="relative">
                  <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    Estimated value
                  </div>
                  <div className="mt-2 font-display text-4xl font-semibold tracking-tight">
                    $2,500
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Typical market rate for this assessment. Free for qualifying B2B teams.
                  </p>
                </div>
              </div>

              <div className="surface-card overflow-hidden p-4 sm:p-6">
                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  Who you'll speak with
                </div>
                <div className="mt-4 flex items-center gap-4">
                  <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full shadow-[0_0_0_3px_rgba(255,184,0,0.30)]">
                    <img src="/advisor-1.png" alt="Senior RevOps Engineer" className="h-full w-full object-cover object-top" />
                  </div>
                  <div>
                    <div className="font-display text-sm font-bold text-foreground">Senior RevOps Engineer</div>
                    <div className="mt-0.5 text-xs text-muted-foreground">10+ years · HubSpot & Salesforce</div>
                  </div>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  You'll meet directly with the engineer reviewing your stack, not an SDR.
                </p>
              </div>

              <div className="surface-card p-4 sm:p-6 text-sm text-muted-foreground">
                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  Who it's for
                </div>
                <div className="mt-3 font-display text-foreground/85 leading-relaxed">
                  Series A to C B2B companies: SaaS, fintech, ecommerce, and beyond.
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
