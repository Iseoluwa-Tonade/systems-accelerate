import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Page, PageIntro, Cta } from "@/components/site/chrome";
import { articles } from "@/lib/blog";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const article = articles.find((item) => item.slug === params.slug);
    if (!article) throw notFound();
    return article;
  },
  head: ({ loaderData: article }) => ({
    meta: [
      { title: article ? `${article.title} — SuperTelque` : "Article unavailable — SuperTelque" },
      {
        name: "description",
        content: article?.excerpt ?? "Explore practical operations insights from SuperTelque.",
      },
      { property: "og:title", content: article?.title ?? "Article unavailable — SuperTelque" },
      { property: "og:description", content: article?.excerpt ?? "Explore the SuperTelque blog." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      ...(article
        ? [
            { property: "og:image", content: article.image },
            { name: "twitter:image", content: article.image },
          ]
        : [{ name: "robots", content: "noindex" }]),
    ],
  }),
  component: ArticlePage,
});

function ArticlePage() {
  const article = Route.useLoaderData();
  return (
    <Page darkHeader>
      <PageIntro
        eyebrow={article.category}
        title={article.title}
        lede={article.excerpt}
        image={article.image}
      />
      <article className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[.55fr_1.45fr]">
        <aside className="md:sticky md:top-32 md:self-start">
          <Link to="/blog" className="link-underline text-sm">
            ← All insights
          </Link>
          <p className="eyebrow mt-8 text-muted-foreground">SuperTelque / Editorial</p>
        </aside>
        <div className="max-w-2xl">
          {article.sections.map((section) => (
            <section key={section.title} className="mb-12">
              <h2 className="text-2xl">{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-5 text-lg leading-8 text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
          <div className="border-t border-border pt-8">
            <h2 className="text-2xl">A practical next step.</h2>
            <p className="mt-4 text-muted-foreground">
              Discuss your workflow in a 20-minute remote Operations Review, with no obligation.
            </p>
            <Cta to="/book" tone="ink" className="mt-6">
              Book an Operations Review
            </Cta>
          </div>
        </div>
      </article>
    </Page>
  );
}
