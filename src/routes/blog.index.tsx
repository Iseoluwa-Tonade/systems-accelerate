import { ArrowRight, ArrowUpRight } from "lucide-react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Page, PageIntro, Cta } from "@/components/site/chrome";
import { Reveal } from "@/components/site/motion";
import { Button } from "@/components/ui/button";
import { articles } from "@/lib/blog";
import { photos } from "@/lib/photography";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — SuperTelque insights" },
      {
        name: "description",
        content:
          "Practical perspectives on managed operations, sales workflows, CRM and automation.",
      },
      { property: "og:title", content: "Blog — SuperTelque insights" },
      {
        property: "og:description",
        content: "Ideas for growing your business without growing your workload.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: photos.work },
      { name: "twitter:image", content: photos.work },
    ],
  }),
  component: Blog,
});

function Blog() {
  const [category, setCategory] = useState("All insights");
  const filtered = articles.filter(
    (article) => category === "All insights" || article.category === category,
  );
  return (
    <Page darkHeader>
      <PageIntro
        eyebrow="Perspectives / SuperTelque"
        title="The SuperTelque blog."
        lede="Practical thinking on the people, processes and systems behind a well-run business."
        image={photos.work}
      />
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-wrap items-center justify-between gap-6 border-b border-border pb-7">
          <h2 className="text-2xl">Latest insights</h2>
          <div className="flex flex-wrap gap-2" aria-label="Article categories">
            {["All insights", ...articles.map((article) => article.category)].map((value) => (
              <Button
                key={value}
                variant={category === value ? "default" : "ghost"}
                aria-pressed={category === value}
                onClick={() => setCategory(value)}
              >
                {value}
              </Button>
            ))}
          </div>
        </div>
        <div className="mt-10 grid gap-x-8 gap-y-12 md:grid-cols-3">
          {filtered.map((article, i) => (
            <Reveal key={article.slug} delay={i * 0.08}>
              <article>
                <Link to="/blog/$slug" params={{ slug: article.slug }} className="group block">
                  <div className="aspect-[4/3] overflow-hidden rounded-md">
                    <img
                      src={article.image}
                      alt="Editorial view of business planning and operations"
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <p className="eyebrow mt-6 text-orange">{article.category}</p>
                  <h3 className="mt-3 text-2xl leading-snug group-hover:text-blue">
                    {article.title}
                  </h3>
                  <p className="mt-4 text-muted-foreground">{article.excerpt}</p>
                  <p className="mt-6 text-sm font-medium">
                    Read article{" "}
                    <span aria-hidden>
                      <ArrowUpRight
                        strokeWidth={3}
                        className="inline size-[1em] align-[-0.125em]"
                      />
                    </span>
                  </p>
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="bg-blue text-ink-foreground graphic-lines">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="eyebrow text-gold">Put it into practice</p>
          <h2 className="h-section mt-5 max-w-2xl">
            Let’s look at the workflow behind your workload.
          </h2>
          <Cta to="/book" className="mt-8">
            Book an Operations Review
          </Cta>
        </div>
      </section>
    </Page>
  );
}
