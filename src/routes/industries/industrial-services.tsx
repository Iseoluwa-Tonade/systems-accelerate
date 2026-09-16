import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader, Eyebrow } from "@/components/site/Eyebrow";
import { ScrollReveal } from "@/components/site/ScrollReveal";

export const Route = createFileRoute("/industries/industrial-services")({
  head: () => ({
    meta: [
      { title: "Sales & Operations Support for Industrial Companies | SuperTelque" },
      { name: "description", content: "SuperTelque helps industrial and commercial service companies manage prospecting, quotation follow-up, CRM and sales coordination." },
      { property: "og:title", content: "Sales & Operations Support for Industrial Companies | SuperTelque" },
      { property: "og:description", content: "Prospecting, quotation follow-up, CRM management and sales coordination for industrial businesses." },
    ],
  }),
  component: IndustrialServicesPage,
});

const SERVICES = [
  {
    title: "Prospecting & Lead Research",
    desc: "We identify and research potential clients in your target market. Company profiles, decision-maker identification and enriched contact data for your sales team.",
  },
  {
    title: "Outbound Campaigns",
    desc: "Personalised outreach sequences that get your industrial services in front of the right people. Email, LinkedIn and follow-up sequences that run consistently.",
  },
  {
    title: "Quotation Management",
    desc: "We track every quote from first contact through to close. Follow-up sequences, status tracking and pipeline reporting so nothing falls through the cracks.",
  },
  {
    title: "CRM & Sales Coordination",
    desc: "Your sales pipeline stays organised and current. Every opportunity tracked, every interaction logged, every team member aligned on what's happening.",
  },
  {
    title: "Customer Operations",
    desc: "Post-sale communications, service scheduling, client updates and account management support that keeps your existing clients satisfied.",
  },
  {
    title: "Reporting & Dashboards",
    desc: "Weekly and monthly reports showing your pipeline health, quote conversion rates, sales activity and key operational metrics.",
  },
];

function IndustrialServicesPage() {
  return (
    <SiteLayout headerTheme="dark">
      {/* Hero */}
      <section className="sec-navy relative isolate min-h-[500px] overflow-hidden">
        <img
          src="/hero.jpg"
          alt="Industrial operations"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />
        <div
          className="absolute inset-0 -z-10 backdrop-blur-[8px]"
          style={{
            background:
              "linear-gradient(to right, rgba(8, 13, 28, 0.94) 0%, rgba(8, 13, 28, 0.72) 36%, rgba(8, 13, 28, 0) 68%)",
          }}
        />
        <div className="relative mx-auto flex min-h-[500px] max-w-[1440px] items-end px-4 pb-10 pt-32 lg:items-center lg:px-8 lg:pb-16 lg:pt-28">
          <div className="max-w-4xl">
            <Eyebrow>Industry Solutions</Eyebrow>
            <h1 className="mt-5 max-w-4xl font-display text-[42px] font-extrabold leading-[1.02] tracking-tight text-white sm:text-[58px] lg:text-[72px] lg:leading-[0.98]">
              Sales & operations support for{" "}
              <span className="text-[#FFD44D]">industrial companies.</span>
            </h1>
            <ScrollReveal variant="fadeUp" delay={0.15}>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/72 sm:text-lg">
                We help industrial and commercial service companies manage prospecting, quotation follow-up, CRM and sales coordination — so your sales team can focus on closing, not administrating.
              </p>
            </ScrollReveal>
            <ScrollReveal variant="fadeUp" delay={0.25}>
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <Link
                  to="/book"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-[#FFD44D] px-5 py-3 text-[15px] font-bold text-[#080D1C] transition-all duration-200 hover:scale-[1.03] hover:bg-white"
                >
                  Book an Operations Review
                  <span className="header-action-arrow" aria-hidden="true">
                    <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                </Link>
                <Link to="/services" className="group inline-flex items-center gap-2.5 text-[15px] font-medium text-white/75 transition-colors hover:text-white border border-white px-4 py-3 rounded-full">
                  See all services
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* The problem */}
      <section className="sec-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <SectionHeader
            eyebrow="The challenge"
            title={<>Your sales team is busy quoting. <span className="text-muted-foreground">Who's following up?</span></>}
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              { problem: "Quotes go out but follow-up is inconsistent", impact: "You spent time preparing the quote. Without follow-up, the opportunity goes cold." },
              { problem: "Prospecting happens when there's time left over", impact: "Business development gets squeezed between client delivery and admin." },
              { problem: "CRM is outdated or barely used", impact: "Your team knows what's happening in their heads, but the pipeline report tells a different story." },
            ].map((item, i) => (
              <ScrollReveal key={item.problem} variant="fadeUp" delay={i * 0.1}>
                <div className="rounded-2xl border border-border bg-[#F4F6FA] p-6">
                  <h3 className="font-display text-lg font-bold tracking-tight text-[#080D1C]">{item.problem}</h3>
                  <p className="mt-2 text-sm text-red-600/70">{item.impact}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="sec-mid border-y border-border py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <SectionHeader
            eyebrow="How we help"
            title={<>What we can manage for you.</>}
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
<ScrollReveal key={s.title} variant="fadeUp" delay={i * 0.06}>
                <div className="rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  <h3 className="font-display text-base font-bold tracking-tight text-[#080D1C]">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sec-navy py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 lg:px-6 text-center">
          <ScrollReveal variant="scaleIn">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Ready to stop losing quotes to slow follow-up?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-white/60">
              Book a 20-minute operations review. Tell us what's taking too much time and we'll show you where support or automation could help.
            </p>
            <Link
              to="/book"
              className="mt-8 inline-flex items-center gap-2 rounded-full px-7 py-4 text-[15px] font-bold text-[#080D1C] transition-all hover:scale-[1.03] hover:shadow-[0_12px_32px_-8px_rgba(255,184,0,0.45)]"
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
