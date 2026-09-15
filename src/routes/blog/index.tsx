import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader, Eyebrow } from "@/components/site/Eyebrow";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import { POSTS, CATEGORY_LABELS } from "@/data/blog-posts";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog | SuperTelque" },
      { name: "description", content: "Practical guides on starting, running, and building a business that lasts. Real teaching from operators who have done the work." },
      { property: "og:title", content: "Blog | SuperTelque" },
      { property: "og:description", content: "Guides on revenue operations, automation, lead generation, and building scalable business systems." },
    ],
  }),
  component: BlogIndexPage,
});

const CATEGORIES = [
  { key: "starting" as const, label: "Starting a Business", color: "#1B5EFF", count: POSTS.filter((p) => p.category === "starting").length },
  { key: "running" as const, label: "Running a Business", color: "#10B981", count: POSTS.filter((p) => p.category === "running").length },
  { key: "keeping" as const, label: "Keeping Business Successful", color: "#8B5CF6", count: POSTS.filter((p) => p.category === "keeping").length },
];

const CATEGORY_COLORS: Record<string, string> = {
  starting: "#1B5EFF",
  running: "#10B981",
  keeping: "#8B5CF6",
};

function BlogIndexPage() {
  const featured = POSTS[0];
  const rest = POSTS.slice(1);

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
              <Eyebrow>Blog</Eyebrow>
              <h1 className="mt-5 max-w-3xl font-display text-3xl font-extrabold tracking-tight text-[#080D1C] sm:text-5xl lg:text-[64px] lg:leading-[1.04]">
                Build it right.<br />
                <span className="text-gradient-gold">Run it well.</span>
              </h1>
              <ScrollReveal variant="fadeUp" delay={0.15}>
                <p className="mt-7 max-w-xl text-[17px] leading-relaxed text-[#4C5670]">
                  Practical guides on starting, running, and growing a business that lasts. No fluff. Real teaching from operators who have done the work.
                </p>
              </ScrollReveal>
              <ScrollReveal variant="fadeUp" delay={0.25}>
                <div className="mt-8 flex flex-wrap gap-3">
                  {CATEGORIES.map((cat) => (
                    <span
                      key={cat.key}
                      className="inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.15em]"
                      style={{ color: cat.color, borderColor: `${cat.color}30`, background: `${cat.color}0D` }}
                    >
                      {cat.count} posts · {cat.label}
                    </span>
                  ))}
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal variant="fadeUp" delay={0.2} className="lg:col-span-5">
              <div className="rounded-2xl border border-border overflow-hidden">
                <div className="relative h-48 lg:h-56 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80&auto=format&fit=crop"
                    alt="Team working and collaborating"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080D1C]/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/70">From the team</div>
                    <div className="mt-0.5 font-display text-sm font-bold text-white">Practical. Operator-led. Real.</div>
                  </div>
                </div>
                <div className="px-5 py-4 bg-[#F4F7FF] flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#4C5670]">{POSTS.length} posts published</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Featured post */}
      <section className="sec-white border-b border-border py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="mb-8 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Featured post</div>
          <ScrollReveal variant="fadeUp">
            <Link
              to="/blog/$slug"
              params={{ slug: featured.slug }}
              className="group grid gap-0 lg:grid-cols-2 rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden">
                <img
                  src={featured.cover}
                  alt={featured.coverAlt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080D1C]/40 to-transparent" />
              </div>
              <div className="flex flex-col justify-center bg-white p-8 lg:p-10">
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className="font-mono text-[9px] uppercase tracking-[0.2em] px-2.5 py-1 rounded-full"
                    style={{ color: CATEGORY_COLORS[featured.category], background: `${CATEGORY_COLORS[featured.category]}12` }}
                  >
                    {featured.categoryLabel}
                  </span>
                  <span className="font-mono text-[9px] text-muted-foreground">{featured.readTime} min read</span>
                </div>
                <h2 className="font-display text-2xl font-extrabold tracking-tight text-[#080D1C] sm:text-3xl group-hover:text-[#1B5EFF] transition-colors">
                  {featured.title}
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-[#4C5670]">{featured.excerpt}</p>
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {featured.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-border px-2.5 py-1 font-mono text-[10px] text-muted-foreground">{tag}</span>
                  ))}
                </div>
                <div className="mt-6 font-mono text-[11px] font-semibold text-[#1B5EFF] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1.5">
                  Read post
                  <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* All posts by category */}
      {CATEGORIES.map((cat) => {
        const posts = rest.filter((p) => p.category === cat.key);
        if (!posts.length) return null;
        return (
          <section key={cat.key} className="sec-white border-b border-border py-14 lg:py-20">
            <div className="mx-auto max-w-7xl px-4 lg:px-6">
              <div className="mb-8 flex items-center gap-3">
                <span className="h-1 w-8 rounded-full" style={{ backgroundColor: cat.color }} />
                <span className="font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: cat.color }}>
                  {cat.label}
                </span>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {posts.map((post, i) => (
                  <ScrollReveal key={post.slug} variant="fadeUp" delay={i * 0.07}>
                    <Link
                      to="/blog/$slug"
                      params={{ slug: post.slug }}
                      className="group flex flex-col rounded-2xl border border-border bg-white overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                    >
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <img
                          src={post.cover}
                          alt={post.coverAlt}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div
                          className="absolute top-3 left-3 font-mono text-[9px] uppercase tracking-[0.18em] px-2.5 py-1 rounded-full text-white"
                          style={{ background: `${cat.color}CC` }}
                        >
                          {post.readTime} min
                        </div>
                      </div>
                      <div className="flex flex-col flex-1 p-6">
                        <h3 className="font-display text-lg font-bold tracking-tight text-[#080D1C] group-hover:text-[#1B5EFF] transition-colors leading-snug">
                          {post.title}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground flex-1">{post.excerpt}</p>
                        <div className="mt-4 flex flex-wrap gap-1">
                          {post.tags.slice(0, 2).map((tag) => (
                            <span key={tag} className="rounded-full border border-border px-2 py-0.5 font-mono text-[9px] text-muted-foreground">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="sec-navy py-14 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 lg:px-6 text-center">
          <ScrollReveal variant="scaleIn">
            <div className="flex items-center justify-center gap-2.5 mb-4">
              <img src="/supertelque-logo.png" alt="" className="h-8 w-8 object-contain drop-shadow-[0_0_10px_rgba(255,184,0,0.4)]" />
            </div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Want us to build your systems?
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
