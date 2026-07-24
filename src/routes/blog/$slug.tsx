import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import { getPost, POSTS, type Block } from "@/data/blog-posts";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) return { meta: [{ title: "Post Not Found | SuperTelque" }] };
    return {
      meta: [
        { title: `${post.title} | SuperTelque Blog` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:image", content: post.cover },
      ],
    };
  },
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return post;
  },
  component: BlogPostPage,
});

const CATEGORY_COLORS: Record<string, string> = {
  starting: "#1B5EFF",
  running: "#10B981",
  keeping: "#8B5CF6",
};

function renderBlock(block: Block, i: number) {
  switch (block.t) {
    case "h2":
      return (
        <h2 key={i} className="mt-10 mb-4 font-display text-2xl font-extrabold tracking-tight text-[#080D1C] sm:text-3xl">
          {block.v}
        </h2>
      );
    case "h3":
      return (
        <h3 key={i} className="mt-7 mb-3 font-display text-lg font-bold tracking-tight text-[#080D1C]">
          {block.v}
        </h3>
      );
    case "p":
      return (
        <p key={i} className="mt-5 text-[16px] leading-[1.75] text-[#3A4260]">
          {block.v}
        </p>
      );
    case "ul":
      return (
        <ul key={i} className="mt-5 space-y-2.5">
          {block.v.map((item, j) => (
            <li key={j} className="flex items-start gap-3 text-[15px] leading-relaxed text-[#3A4260]">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FFB800]" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol key={i} className="mt-5 space-y-3">
          {block.v.map((item, j) => (
            <li key={j} className="flex items-start gap-3 text-[15px] leading-relaxed text-[#3A4260]">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1B5EFF]/10 font-mono text-[11px] font-bold text-[#1B5EFF]">
                {j + 1}
              </span>
              {item}
            </li>
          ))}
        </ol>
      );
    case "quote":
      return (
        <blockquote key={i} className="my-8 border-l-2 border-[#FFB800] pl-6 py-1">
          <p className="text-lg leading-relaxed text-[#080D1C] font-medium italic">
            &ldquo;{block.v}&rdquo;
          </p>
        </blockquote>
      );
    case "callout":
      return (
        <div key={i} className="my-8 rounded-xl border border-[#1B5EFF]/20 bg-[#F0F4FF] p-6">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1B5EFF]">
              <svg viewBox="0 0 10 10" fill="none" className="h-3 w-3" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 2v4M5 7.5v.5" />
              </svg>
            </span>
            <p className="text-[15px] leading-relaxed text-[#1B5EFF]">{block.v}</p>
          </div>
        </div>
      );
    default:
      return null;
  }
}

function BlogPostPage() {
  const post = Route.useLoaderData();
  const color = CATEGORY_COLORS[post.category] ?? "#1B5EFF";

  const related = POSTS.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 2);

  return (
    <SiteLayout headerTheme="light">
      {/* Hero cover */}
      <div className="relative h-[380px] md:h-[460px] lg:h-[520px] overflow-hidden">
        <img src={post.cover} alt={post.coverAlt} className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,13,28,0.75) 0%, rgba(8,13,28,0.30) 55%, transparent 100%)" }} />
        <div className="absolute bottom-0 left-0 right-0 mx-auto max-w-4xl px-4 pb-10 lg:px-6">
          <div className="flex items-center gap-2 mb-4">
            <span
              className="font-mono text-[9px] uppercase tracking-[0.2em] px-2.5 py-1 rounded-full text-white"
              style={{ background: `${color}99` }}
            >
              {post.categoryLabel}
            </span>
            <span className="font-mono text-[9px] text-white/60">{post.readTime} min read</span>
          </div>
          <h1 className="font-display text-2xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[48px] lg:leading-[1.1] max-w-3xl">
            {post.title}
          </h1>
        </div>
      </div>

      {/* Article body */}
      <section className="sec-white py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="grid gap-12 lg:grid-cols-12">

            {/* Content */}
            <article className="lg:col-span-8">
              {/* Meta bar */}
              <div className="mb-8 flex flex-wrap items-center gap-4 border-b border-border pb-6">
                <Link
                  to="/blog/"
                  className="flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground hover:text-[#080D1C] transition-colors"
                >
                  <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13 8H3M7 4l-4 4 4 4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  All posts
                </Link>
                <span className="h-1 w-1 rounded-full bg-border" />
                <span className="font-mono text-[11px] text-muted-foreground">{post.publishedAt}</span>
                <span className="h-1 w-1 rounded-full bg-border" />
                <div className="flex flex-wrap gap-1">
                  {post.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[10px] text-muted-foreground">{tag}</span>
                  ))}
                </div>
              </div>

              {/* Lead paragraph */}
              <p className="text-[17px] font-medium leading-[1.7] text-[#2A3250]">{post.excerpt}</p>

              {/* Body blocks */}
              <div>
                {post.body.map((block, i) => renderBlock(block, i))}
              </div>

              {/* Footer */}
              <div className="mt-14 border-t border-border pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <Link
                  to="/blog/"
                  className="flex items-center gap-2 font-mono text-[12px] text-muted-foreground hover:text-[#080D1C] transition-colors"
                >
                  <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13 8H3M7 4l-4 4 4 4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Back to all posts
                </Link>
                <Link
                  to="/book"
                  className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[13px] font-bold text-[#080D1C] transition-all hover:scale-[1.03]"
                  style={{ background: "linear-gradient(135deg, #FFD44D 0%, #FFB800 100%)" }}
                >
                  Work with SuperTelque
                  <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-6">
              {/* About SuperTelque */}
              <div className="sticky top-24 space-y-4">
                <div className="rounded-2xl border border-border bg-[#F8FAFF] p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <img src="/supertelque-logo.png" alt="SuperTelque" className="h-7 w-7 object-contain" />
                    <span className="font-display text-[15px] font-bold text-[#080D1C]">SuperTelque</span>
                  </div>
                  <p className="text-sm leading-relaxed text-[#4C5670]">
                    We build the systems B2B companies run on. Lead generation, CRM, automation, social media, and operations from one team.
                  </p>
                  <Link
                    to="/book"
                    className="mt-4 flex w-full items-center justify-center gap-2 rounded-full py-2.5 text-[13px] font-bold text-[#080D1C] transition-all hover:scale-[1.02]"
                    style={{ background: "linear-gradient(135deg, #FFD44D 0%, #FFB800 100%)" }}
                  >
                    Book a strategy session
                  </Link>
                </div>

                {/* Related posts */}
                {related.length > 0 && (
                  <div className="rounded-2xl border border-border bg-white p-6">
                    <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      Related posts
                    </div>
                    <div className="space-y-4">
                      {related.map((rel) => (
                        <Link
                          key={rel.slug}
                          to="/blog/$slug"
                          params={{ slug: rel.slug }}
                          className="group flex gap-3"
                        >
                          <div className="relative h-14 w-20 shrink-0 overflow-hidden rounded-lg">
                            <img src={rel.cover} alt={rel.coverAlt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                          </div>
                          <div>
                            <p className="text-[13px] font-semibold leading-snug text-[#080D1C] group-hover:text-[#1B5EFF] transition-colors">
                              {rel.title}
                            </p>
                            <p className="mt-1 font-mono text-[10px] text-muted-foreground">{rel.readTime} min read</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
