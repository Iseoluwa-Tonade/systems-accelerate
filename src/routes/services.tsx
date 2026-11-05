import { ArrowRight, ArrowUpRight } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";
import { Page, PageIntro, Cta } from "@/components/site/chrome";
import { Reveal, ExpandingImage, ParallaxImage } from "@/components/site/motion";
import { EngagementModels } from "@/components/site/engagement-models";
import { services } from "@/lib/content";
import { photos, servicePhotos } from "@/lib/photography";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — SuperTelque" },
      {
        name: "description",
        content:
          "Managed sales, customer and business operations, supported by CRM, AI and workflow engineering.",
      },
      { property: "og:title", content: "Services — SuperTelque" },
      {
        property: "og:description",
        content: "Four services. One accountable partner for growing businesses.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: photos.workplace },
      { name: "twitter:image", content: photos.workplace },
    ],
  }),
  component: Services,
});
const accents = ["bg-green", "bg-blue", "bg-orange", "bg-green"];
function Services() {
  return (
    <Page darkHeader>
      <PageIntro
        eyebrow="Our expertise"
        title="Four services. One accountable partner."
        lede="We combine experienced people, structured processes, automation and AI to run the workflows that help your business move forward."
        image={photos.workplace}
      >
        <div className="hero-bottom">
          <Cta to="/book">Discuss your engagement</Cta>
        </div>
      </PageIntro>
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-6 grid gap-6 md:grid-cols-[1fr_1.5fr]">
        <p className="eyebrow section-kicker">Built for the whole system</p>
        <p className="text-xl max-w-2xl">
          Each engagement starts with the business problem, then maps it to the right mix of people,
          processes and technology.
        </p>
      </div>
      {services.map((s, i) => (
        <section key={s.slug} id={s.slug} className="service-editorial">
          <div className="mx-auto max-w-6xl px-6 grid gap-12 md:grid-cols-2 md:items-center">
            <div className={i === 1 ? "md:order-2" : ""}>
              <Reveal>
                <p className="eyebrow section-kicker">{s.kind}</p>
                <h2 className="h-section mt-5">{s.title}</h2>
                <p className="mt-6 text-muted-foreground">{s.body}</p>
              </Reveal>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {s.capabilities.map((c, j) => (
                  <Reveal key={c} delay={j * 0.07}>
                    <div className="capability-card h-full text-sm font-medium">{c}</div>
                  </Reveal>
                ))}
              </div>
              <p className="eyebrow mt-8 text-muted-foreground">Best for</p>
              <p className="mt-3 text-sm">{s.bestFor}</p>
              <Cta to="/book" tone="ink" className="mt-6">
                Discuss this service
              </Cta>
            </div>
            <Reveal y={48} className={i === 1 ? "md:order-1" : ""}>
              <div className="service-photo">
                <ParallaxImage
                  src={servicePhotos[i] ?? photos.team}
                  alt={`${s.kind}: business planning and revenue systems`}
                  w={1800}
                  h={1200}
                  className="h-full"
                />
                <div className={`service-photo-note ${accents[i]}`}>
                  <p className="eyebrow opacity-75">From insight to execution</p>
                  <p className="mt-3 text-sm font-medium">
                    {s.flow.map((step, k) => (
                      <span key={step}>
                        {k > 0 && (
                          <ArrowRight
                            strokeWidth={3}
                            className="mx-2 inline size-[1em] align-[-0.125em]"
                          />
                        )}
                        {step}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      ))}
      <ExpandingImage src={photos.team} alt="Colleagues collaborating on a business strategy">
        <p className="eyebrow text-lime">Connected by design</p>
        <h2 className="h-section mt-5">People. Process. Automation.</h2>
        <p className="mt-5 max-w-lg">
          Assigned specialists and connected systems, working together inside the tools your team
          already uses.
        </p>
      </ExpandingImage>
      <EngagementModels />
    </Page>
  );
}
