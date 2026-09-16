import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader, Eyebrow } from "@/components/site/Eyebrow";
import { ScrollReveal } from "@/components/site/ScrollReveal";

export const Route = createFileRoute("/industries/home-services")({
  head: () => ({
    meta: [
      { title: "Sales & Operations Support for Home Service Companies | SuperTelque" },
      { name: "description", content: "SuperTelque helps home service companies manage incoming inquiries, follow up on estimates, coordinate appointments and keep customer records accurate." },
      { property: "og:title", content: "Sales & Operations Support for Home Service Companies | SuperTelque" },
      { property: "og:description", content: "Lead response, appointment coordination, estimate follow-up and customer operations for home service businesses." },
    ],
  }),
  component: HomeServicesPage,
});

const SERVICES = [
  {
    title: "Lead Response & Inquiry Management",
    desc: "Every inquiry gets a response. We manage incoming leads across phone, email, website and referral channels — so no opportunity goes unanswered.",
  },
  {
    title: "Appointment Coordination",
    desc: "We schedule, confirm and manage appointments for your team. Calendar management, crew dispatching and rescheduling handled without the admin burden.",
  },
  {
    title: "Estimate Follow-Up",
    desc: "We follow up on every estimate and proposal that goes out. Automated sequences and personal outreach that keep your pipeline moving.",
  },
  {
    title: "Customer Communications",
    desc: "Booking confirmations, pre-visit reminders, post-service follow-ups and review requests — all managed and consistent.",
  },
  {
    title: "CRM & Records Management",
    desc: "Your customer database stays accurate and up to date. Every interaction, every estimate, every job tracked in one place.",
  },
  {
    title: "Operational Reporting",
    desc: "Weekly dashboards showing your lead volume, conversion rates, appointment completion and customer satisfaction metrics.",
  },
];

function HomeServicesPage() {
  return (
    <SiteLayout headerTheme="dark">
      {/* Hero */}
      <section className="sec-navy relative isolate min-h-[500px] overflow-hidden">
        <img
          src="/hero.jpg"
          alt="Home service operations"
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
              <span className="text-[#FFD44D]">home service companies.</span>
            </h1>
            <ScrollReveal variant="fadeUp" delay={0.15}>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/72 sm:text-lg">
                We help home service businesses handle incoming inquiries, follow up on estimates, coordinate appointments and keep customer records accurate — so your team can focus on delivering the service.
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
            title={<>Your team is busy delivering. <span className="text-muted-foreground">Who's following up?</span></>}
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              { problem: "Inquiries come in while you're on a job", impact: "By the time you call back, they've already booked someone else." },
              { problem: "Estimates go out but don't get followed up", impact: "You did the work to quote it. Now the follow-up falls through the cracks." },
              { problem: "Your team spends evenings on admin", impact: "Scheduling, data entry, customer calls — all done after hours instead of with family." },
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
              Ready to stop losing leads to slow follow-up?
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
