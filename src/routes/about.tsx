import { createFileRoute } from "@tanstack/react-router";
import { Page, PageIntro, Cta } from "@/components/site/chrome";
import { Reveal, ExpandingImage, HorizontalRail, MaskText } from "@/components/site/motion";
import { principles, industries, team, faqs } from "@/lib/content";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { photos } from "@/lib/photography";

const railPhotos = [
  photos.analytics,
  photos.team,
  photos.work,
  photos.architecture,
  photos.workplace,
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: photos.team },
      { name: "twitter:image", content: photos.team },
      { title: "About — SuperTelque" },
      {
        name: "description",
        content:
          "Experienced people, structured processes, automation and AI behind your business operations.",
      },
      { property: "og:title", content: "About — SuperTelque" },
      {
        property: "og:description",
        content: "The company behind your operations. United States · Lagos · Remote-first.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <Page darkHeader>
      <PageIntro
        eyebrow="About SuperTelque"
        image={photos.team}
        title="The company behind your operations."
        lede="We combine experienced people, structured processes, automation and AI to run the sales and operational workflows that help growing businesses move forward — without the burden of building another internal department."
      />
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-32 md:grid-cols-[1fr_1.4fr]">
        <p className="eyebrow text-muted-foreground">Mission</p>
        <h2 className="h-section">
          <MaskText text="Grow businesses. Not their workload." />
        </h2>
        <p className="text-lg text-muted-foreground md:col-start-2">
          To give growing businesses the operational support they need to scale with certainty. We
          take responsibility for defined workflows — supported by the right people, processes and
          technology — so owners and operators can focus on the work that matters most.
        </p>
      </section>

      <section className="relative z-10 bg-paper">
        <div className="mx-auto max-w-6xl px-6 pb-28">
          <p className="eyebrow section-kicker">Operating model</p>
          <h2 className="h-section mt-5">How we deliver outcomes.</h2>
          <p className="mt-6 max-w-2xl text-muted-foreground">
            We're not just consultants who hand you a plan. Under our Build & Manage model, we take
            responsibility for running the agreed workflow.
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              [
                "People",
                "Assigned team members",
                "The right people working on your workflows — from operations specialists to automation engineers.",
              ],
              [
                "Process",
                "Structured workflows",
                "Defined processes with clear responsibilities, escalation paths and reporting so you know exactly what's running.",
              ],
              [
                "Automation",
                "AI and workflow systems",
                "CRM, automation and AI-assisted processes that reduce manual work and keep everything running at scale.",
              ],
            ].map(([kind, title, body]) => (
              <Reveal key={kind} className="border-t-2 border-orange pt-6">
                <p className="eyebrow text-muted-foreground">{kind}</p>
                <h3 className="mt-4 text-xl">{title}</h3>
                <p className="mt-4 text-muted-foreground">{body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="relative z-10 rounded-t-[28px] bg-blue text-ink-foreground graphic-lines">
        <HorizontalRail
          heightVh={300}
          header={() => (
            <div className="mx-auto mb-8 w-full max-w-6xl px-6">
              <p className="eyebrow text-gold">Operating principles</p>
              <h2 className="h-section mt-3">What guides our work.</h2>
            </div>
          )}
        >
          {principles.map(([t, d], i) => (
            <article
              key={t}
              className="relative flex h-[min(52vh,460px)] w-[78vw] shrink-0 flex-col justify-end overflow-hidden rounded-xl p-8 md:w-[34vw]"
            >
              <img
                src={railPhotos[i % railPhotos.length]}
                alt=""
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 image-shade" />
              <div className="relative">
                <p className="eyebrow text-lime">0{i + 1}</p>
                <h3 className="mt-3 font-serif text-3xl font-semibold">{t}</h3>
                <p className="mt-3 text-ink-foreground/85">{d}</p>
              </div>
            </article>
          ))}
        </HorizontalRail>
      </div>

      <section className="relative z-10 bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow text-muted-foreground">Meet the team</p>
              <h2 className="h-section mt-4 max-w-xl">The people who run your operations.</h2>
            </div>
            <p className="max-w-sm text-muted-foreground">
              A senior team. Every engagement is staffed by the specialists who know your workflow.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.08}>
                <article className="group">
                  <div
                    className="flex aspect-[4/3] items-center justify-center rounded-md bg-stone graphic-lines"
                    aria-label={`Photo awaiting approval for ${m.name}`}
                  >
                    <span aria-hidden className="font-serif text-6xl text-green">
                      {m.name
                        .split(" ")
                        .map((part) => part[0])
                        .join("")}
                    </span>
                  </div>
                  <h3 className="mt-5 font-serif text-xl font-semibold">{m.name}</h3>
                  <p className="text-sm text-orange">{m.role}</p>
                  <p className="mt-3 text-xs font-medium text-green">{m.specialties}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{m.bio}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-8 rounded-t-[28px] bg-ink text-ink-foreground graphic-lines">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 py-28 md:grid-cols-[0.85fr_1.15fr]">
          <div className="md:sticky md:top-28 md:self-start">
            <p className="eyebrow text-lime">Questions</p>
            <h2 className="h-section mt-4">Answers, before you ask.</h2>
            <p className="mt-6 max-w-xs text-ink-foreground/70">
              What business owners and operations leaders raise on the first call. If yours is not
              here, send it over.
            </p>
            <Cta to="/contact" tone="ghost-light" className="mt-9">
              Ask a question
            </Cta>
          </div>
          <Accordion type="single" collapsible className="faq-list">
            {faqs.map(([q, a], i) => (
              <AccordionItem key={q} value={`faq-${i}`} className="faq-item">
                <AccordionTrigger className="group gap-6 py-6 text-left font-medium hover:no-underline [&>svg]:hidden">
                  <span className="flex items-baseline gap-5 font-serif text-lg leading-snug transition-colors duration-300 group-hover:text-lime md:text-2xl">
                    <span className="eyebrow text-lime">0{i + 1}</span>
                    <span>{q}</span>
                  </span>
                  <span aria-hidden className="faq-mark" />
                </AccordionTrigger>
                <AccordionContent className="max-w-xl pb-8 text-base leading-7 text-ink-foreground/70 md:pl-[3.6rem]">
                  {a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <ExpandingImage src={photos.workplace} alt="A bright collaborative workplace">
        <p className="eyebrow text-lime">Built together</p>
        <h2 className="h-section mt-5">Senior thinking. Hands-on delivery.</h2>
      </ExpandingImage>
      <section className="relative z-10 -mt-8 rounded-t-[28px] bg-paper">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 py-28 md:grid-cols-2">
          <div>
            <p className="eyebrow text-muted-foreground">Industries</p>
            <ul className="mt-6">
              {industries.map(([x, description], i) => (
                <Reveal key={x} delay={i * 0.05} y={12}>
                  <li className="border-t border-border py-4 font-serif text-2xl font-light">
                    {x}
                    <p className="mt-3 font-sans text-sm font-normal text-muted-foreground">
                      {description}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow text-muted-foreground">Footprint</p>
            <Reveal>
              <p className="mt-6 text-lg leading-relaxed">
                Teams in the United States and Lagos, Nigeria, delivering remotely for clients
                worldwide. We work inside your tools and your time zone.
              </p>
              <Cta to="/contact" tone="ink" className="mt-10">
                Talk to the team
              </Cta>
            </Reveal>
          </div>
        </div>
      </section>
    </Page>
  );
}
