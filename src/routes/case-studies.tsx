import { ArrowRight, ArrowUpRight } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";
import { Page, PageIntro, Cta } from "@/components/site/chrome";
import { Reveal, ExpandingImage } from "@/components/site/motion";
import { cases } from "@/lib/content";
import { photos, casePhotos } from "@/lib/photography";
export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case studies — SuperTelque" },
      {
        name: "description",
        content:
          "Illustrative workflow designs for connected sales, customer and business operations.",
      },
      { property: "og:title", content: "Case studies — SuperTelque" },
      {
        property: "og:description",
        content: "Explore example system designs, not unverified client claims.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: photos.architecture },
      { name: "twitter:image", content: photos.architecture },
    ],
  }),
  component: Cases,
});
const accents = ["bg-blue", "bg-orange", "bg-green"];
function Cases() {
  return (
    <Page darkHeader>
      <PageIntro
        eyebrow="Illustrative workflows"
        title="Connected workflows. Clear responsibility."
        lede="Example workflow designs that show our approach. These are illustrations, not verified client case studies or measured results."
        image={photos.architecture}
      />
      <div className="mx-auto max-w-6xl px-6 py-14 flex flex-wrap items-center justify-between gap-6">
        <p className="eyebrow section-kicker">Inside the workflows</p>
        <div className="flex flex-wrap gap-6 text-sm">
          {cases.map((c) => (
            <a href={`#${c.slug}`} key={c.slug} className="link-underline">
              {c.sector}{" "}
              <ArrowUpRight strokeWidth={3} className="inline size-[1em] align-[-0.125em]" />
            </a>
          ))}
        </div>
      </div>
      {cases.map((c, i) => (
        <section key={c.slug} id={c.slug} className="mx-auto max-w-6xl px-6 pb-24 scroll-mt-24">
          <Reveal y={40}>
            <div className="case-visual">
              <img
                src={casePhotos[i]}
                alt={`${c.sector}: an editorial view of modern business`}
                loading="lazy"
              />
              <div className="case-cover-copy">
                <p className="eyebrow mb-5">{c.sector} / Illustrative design</p>
                <h2>{c.headline}</h2>
              </div>
            </div>
          </Reveal>
          <div className="case-outcomes">
            {c.outcomes.map(([value, label]) => (
              <div key={label} className={accents[i]}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
          <div className="grid gap-10 py-10 md:grid-cols-[.8fr_1fr_1fr]">
            <aside>
              <p className="eyebrow section-kicker">{c.type}</p>
              <p className="text-sm mt-6 text-muted-foreground">Technology stack</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {c.stack.map((s) => (
                  <span key={s} className="border border-border rounded-md px-3 py-2 text-xs">
                    {s}
                  </span>
                ))}
              </div>
            </aside>
            <Reveal>
              <h3 className="text-xl">The workflow challenge</h3>
              <p className="mt-4 text-muted-foreground">{c.challenge}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h3 className="text-xl">Example solution</h3>
              <p className="mt-4 text-muted-foreground">{c.solution}</p>
            </Reveal>
          </div>
          <div className="border-b border-border pb-3">
            <Cta to="/book" tone="ghost">
              Discuss a similar challenge
            </Cta>
          </div>
        </section>
      ))}
      <ExpandingImage src={photos.team} alt="Business colleagues discussing a workflow">
        <p className="eyebrow text-lime">Your next chapter</p>
        <h2 className="h-section mt-5">Recognise one of these? Let's look at yours.</h2>
        <Cta to="/book" className="mt-8">
          Book an Operations Review
        </Cta>
      </ExpandingImage>
    </Page>
  );
}
