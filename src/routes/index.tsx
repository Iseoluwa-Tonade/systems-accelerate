import { ArrowRight, ArrowUpRight } from "lucide-react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useReducedMotion, type MotionValue } from "motion/react";
import { useRef } from "react";
import { Page, Cta, HERO_INSET } from "@/components/site/chrome";
import {
  Reveal,
  MaskText,
  HorizontalRail,
  ExpandingImage,
  ProgressLine,
} from "@/components/site/motion";
import { EngagementModels } from "@/components/site/engagement-models";
import { services, cases } from "@/lib/content";
import { photos, servicePhotos, casePhotos } from "@/lib/photography";
import { toolLogos, heroArcLogos, heroArcOpacity } from "@/lib/tool-logos";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: photos.sky },
      { name: "twitter:image", content: photos.sky },
      { title: "SuperTelque — Grow your business. Not your workload." },
      {
        name: "description",
        content:
          "We build, automate and manage sales, customer and back-office workflows for growing businesses.",
      },
      { property: "og:title", content: "SuperTelque — Grow your business. Not your workload." },
      {
        property: "og:description",
        content: "People, processes, automation and AI. Book a 20-minute Operations Review.",
      },
    ],
  }),
  component: Home,
});

const problems = [
  [
    "Leads and inquiries go unanswered",
    "Your team is too busy delivering the service to consistently follow up with new opportunities.",
  ],
  [
    "Your best people are buried in admin",
    "Salespeople, managers and owners spend valuable time updating systems and chasing routine tasks.",
  ],
  [
    "Work gets lost between people and tools",
    "Emails, CRM records, scheduling and customer updates are disconnected.",
  ],
  [
    "You need more capacity, not more management",
    "You want work completed reliably without coordinating several additional hires or freelancers.",
  ],
];

function Home() {
  return (
    <Page darkHeader heroInset>
      <HeroArc />

      {/* Statement + problem map — slides over the hero */}
      <div className="relative z-10 -mt-8 rounded-t-[28px] bg-paper">
        <section className="mx-auto max-w-6xl px-6 py-28">
          <div className="grid gap-16 md:grid-cols-[1fr_1.3fr]">
            <div className="md:sticky md:top-32 md:self-start">
              <div className="flex gap-1.5" aria-hidden>
                <span className="h-1.5 w-10 rounded-full bg-orange" />
                <span className="h-1.5 w-10 rounded-full bg-green" />
                <span className="h-1.5 w-10 rounded-full bg-blue" />
              </div>
              <p className="eyebrow mt-5 text-muted-foreground">The problem</p>
              <h2 className="h-section mt-5">
                <MaskText text="Your business is growing." />{" "}
                <MaskText
                  text="Why does everything feel harder?"
                  className="text-blue"
                  delay={0.2}
                />
              </h2>
              <Reveal delay={0.3}>
                <p className="mt-6 max-w-sm text-muted-foreground">
                  We bring structure and capacity to the work that gets harder as your business
                  grows.
                </p>
              </Reveal>
              <Reveal delay={0.4}>
                <div className="mt-10 grid max-w-sm grid-cols-3 overflow-hidden rounded-md text-ink-foreground">
                  <div className="bg-orange p-5">
                    <p className="font-serif text-2xl font-semibold">4</p>
                    <p className="mt-1 text-xs opacity-85">services, one partner</p>
                  </div>
                  <div className="bg-green p-5">
                    <p className="font-serif text-2xl font-semibold">
                      20<span className="text-sm">min</span>
                    </p>
                    <p className="mt-1 text-xs opacity-85">operations review</p>
                  </div>
                  <div className="bg-blue p-5">
                    <p className="font-serif text-2xl font-semibold">2</p>
                    <p className="mt-1 text-xs opacity-85">ways to engage</p>
                  </div>
                </div>
              </Reveal>
            </div>
            <div>
              <p className="eyebrow mb-4 flex justify-between text-muted-foreground">
                <span>If this sounds familiar</span>
              </p>
              {problems.map(([p, s], i) => {
                const accent = [
                  "text-orange border-orange/40 hover:border-orange",
                  "text-blue border-blue/40 hover:border-blue",
                  "text-green border-green/40 hover:border-green",
                  "text-orange border-orange/40 hover:border-orange",
                ][i % 4];
                return (
                  <Reveal key={p} delay={i * 0.06} y={16}>
                    <div
                      className={`group flex flex-col items-start justify-between gap-3 border-t-2 py-6 transition-all duration-500 sm:flex-row sm:items-baseline sm:gap-6 ${accent}`}
                    >
                      <p className="flex items-baseline gap-4 font-serif text-xl font-light leading-snug transition-transform duration-500 group-hover:translate-x-2">
                        <span className="font-mono text-xs font-semibold">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-ink">{p}</span>
                      </p>
                      <p className="max-w-sm text-left text-sm text-muted-foreground transition-colors group-hover:text-ink">
                        {s}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      </div>

      {/* Services — horizontal rail driven by vertical scroll */}
      <div className="relative z-10 -mt-8 rounded-t-[28px] bg-paper">
        <HorizontalRail
          heightVh={320}
          header={(p) => (
            <div className="mx-auto mb-10 w-full max-w-6xl px-6">
              <div className="flex items-end justify-between gap-6">
                <div>
                  <p className="eyebrow text-muted-foreground">What we do</p>
                  <h2 className="h-section mt-4 max-w-lg">
                    Four services. One accountable partner.
                  </h2>
                </div>
                <Link to="/services" className="link-underline hidden text-sm md:block">
                  All services{" "}
                  <ArrowRight strokeWidth={3} className="inline size-[1em] align-[-0.125em]" />
                </Link>
              </div>
              <div className="mt-8 [&_.bg-ink-line]:bg-border">
                <ProgressLine progress={p} />
              </div>
            </div>
          )}
        >
          {services.map((s, i) => (
            <article
              key={s.slug}
              className="relative flex h-[60vh] min-h-[420px] w-[84vw] shrink-0 flex-col justify-end overflow-hidden rounded-md p-8 text-ink-foreground md:w-[42vw] md:p-10"
            >
              <img
                src={servicePhotos[i]}
                alt={`${s.kind}: business systems in action`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-ink/55" />
              <div className="absolute inset-0 image-shade" />
              <div className="relative">
                <p className="eyebrow text-lime">{s.kind}</p>
                <h3 className="mt-4 font-serif text-2xl font-semibold leading-tight md:text-3xl">
                  {s.title}
                </h3>
                <p className="mt-4 max-w-md text-ink-foreground/85">{s.short}</p>
                <Cta to="/services" tone="ghost-light" className="mt-6">
                  Explore this service
                </Cta>
              </div>
            </article>
          ))}
          <article className="relative flex h-[60vh] min-h-[420px] w-[84vw] shrink-0 flex-col justify-end overflow-hidden rounded-md md:w-[42vw]">
            <img
              src={photos.work}
              alt="Sketching a revenue system architecture"
              width={1408}
              height={1408}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 image-shade" />
            <div className="relative bg-ink/70 p-8 text-ink-foreground backdrop-blur-sm md:p-10">
              <p className="font-serif text-2xl">Not sure which you need?</p>
              <Cta to="/book" className="mt-4">
                Book an Operations Review
              </Cta>
            </div>
          </article>
        </HorizontalRail>
      </div>

      <EngagementModels />
      <Method />

      {/* Case index */}
      <section className="relative z-10 bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-32">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="eyebrow text-muted-foreground">Illustrative workflows</p>
              <h2 className="h-section mt-4">What connected operations can look like.</h2>
            </div>
            <Link to="/case-studies" className="link-underline text-sm">
              Explore the workflows{" "}
              <ArrowRight strokeWidth={3} className="inline size-[1em] align-[-0.125em]" />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {cases.map((c, i) => (
              <Reveal key={c.slug} delay={i * 0.1}>
                <Link to="/case-studies" className="photo-tile block h-full">
                  <img src={casePhotos[i]} alt={`${c.sector} engagement`} loading="lazy" />
                  <div className="tile-copy">
                    <p className="eyebrow text-lime">
                      {c.sector} · {c.stage}
                    </p>
                    <h3 className="mt-4">{c.headline}</h3>
                    <p className="mt-6 text-sm">
                      <strong className="text-xl">{c.outcomes[0]?.[0]}</strong> {c.outcomes[0]?.[1]}{" "}
                      <ArrowUpRight
                        strokeWidth={3}
                        className="inline size-[1em] align-[-0.125em]"
                      />
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="overflow-hidden border-y border-border py-6">
          <div className="marquee flex w-max gap-16 whitespace-nowrap">
            {[...toolLogos, ...toolLogos].map((t, i) => (
              <span key={i} className="flex items-center gap-3">
                <img src={t.logo} alt="" loading="lazy" className="h-7 w-7 object-contain" />
                <span className="font-serif text-2xl font-light text-muted-foreground">
                  {t.name}
                </span>
              </span>
            ))}
          </div>
        </div>
      </section>

      <ExpandingImage src={photos.workplace} alt="A bright space for collaboration and strategy">
        <p className="eyebrow text-lime">20 minutes · Remote · No obligation</p>
        <h2 className="h-section mt-5">Ready to stop running everything manually?</h2>
        <p className="mt-5 max-w-lg text-ink-foreground/85">
          Tell us what's taking too much time from your team. We'll discuss the workflow, identify
          where support or automation could help, and determine whether there's a practical fit.
        </p>
        <Cta to="/book" className="mt-8">
          Book an Operations Review
        </Cta>
      </ExpandingImage>
    </Page>
  );
}

const steps = [
  ["Diagnose", "Understand the workflow, bottlenecks and responsibilities."],
  ["Design", "Define the process, people, systems and delivery scope."],
  ["Build", "Implement the workflow and connect the tools your team uses."],
  ["Operate", "Run the agreed work, with clear ownership and reporting."],
  ["Improve", "Use operational feedback to refine the process over time."],
];

function Method() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 60%", "end 60%"] });
  const h = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <section className="relative z-10 bg-blue text-ink-foreground graphic-lines">
      <div ref={ref} className="mx-auto grid max-w-6xl gap-16 px-6 py-32 md:grid-cols-[1fr_1.3fr]">
        <div className="md:sticky md:top-32 md:self-start">
          <p className="eyebrow text-gold">How we work</p>
          <h2 className="h-section mt-4">From operational bottleneck to managed delivery.</h2>
        </div>
        <div className="relative pl-8">
          <div className="absolute left-0 top-0 h-full w-px bg-ink-line" />
          <motion.div style={{ height: h }} className="absolute left-0 top-0 w-px bg-gold" />
          {steps.map(([t, d]) => (
            <Reveal key={t} className="pb-20 last:pb-0">
              <h3 className="font-serif text-3xl font-light">{t}</h3>
              <p className="mt-3 max-w-md text-ink-foreground/70">{d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// Edge duplicates: last logo leads, first logo trails, so neither end is cut off.
const arcCards = heroArcLogos;
const STEP = 360 / arcCards.length;

/** Inset card hero that expands to full bleed, then turns a 3D ring of cards — all pinned to scroll. */
function HeroArc() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  // Section is 400vh to 300vh of scroll; expansion takes the first 50vh (matches header).
  const grow = 0.5 / 3;
  const inset = useTransform(scrollYProgress, [0, grow], [HERO_INSET, 0]);
  const radius = useTransform(scrollYProgress, [0, grow], [28, 0]);
  // The first group faces you initially; scrolling brings each remaining logo forward.
  // Turn until the last card reaches the front of the ring.
  const rot = useTransform(scrollYProgress, [grow, 0.95], [0, -STEP * (arcCards.length - 3)]);
  return (
    <section
      ref={ref}
      className="relative bg-paper"
      style={{ height: reduce ? "100dvh" : "400vh" }}
    >
      <div className="sticky top-0 h-dvh min-h-svh overflow-hidden">
        <motion.div
          style={
            reduce
              ? {}
              : { left: inset, right: inset, bottom: inset, top: inset, borderRadius: radius }
          }
          className="absolute inset-0 overflow-hidden bg-blue text-ink-foreground"
        >
          <img
            src={photos.sky}
            alt="Open blue sky above the clouds"
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 hero-shade" />
          <div className="home-hero-copy relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 pt-[15vh] text-center">
            <Reveal>
              <p className="eyebrow text-lime">Revenue · Operations · AI</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="display mt-5">Grow your business. Not your workload.</h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mx-auto mt-5 max-w-xl text-ink-foreground/85">
                We build, automate and manage the sales, customer and back-office processes that
                keep growing businesses running, without the burden of building another internal
                department.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Cta to="/book">Book an Operations Review</Cta>
                <Cta to="/services" tone="ghost-light" className="hidden sm:inline-flex">
                  View services
                </Cta>
              </div>
            </Reveal>
          </div>
          <div
            className="pointer-events-none absolute inset-x-0 bottom-[12vh] h-[clamp(150px,22vh,240px)]"
            style={{ perspective: "2200px", perspectiveOrigin: "50% 20%" }}
          >
            <div
              className="absolute left-1/2 top-0 h-full"
              style={{ transformStyle: "preserve-3d", transform: "rotateX(-6deg)" }}
            >
              {arcCards.map((c, i) => (
                <RingCard key={i} i={i} rot={rot} card={c} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function RingCard({
  i,
  rot,
  card,
}: {
  i: number;
  rot: MotionValue<number>;
  card: (typeof arcCards)[number];
}) {
  const angle = useTransform(rot, (r) => r + (i - 2) * STEP);
  // The ring keeps its original radius; new cards just fill the extra angles.
  const ringRadius = 2.1;
  const transform = useTransform(
    angle,
    (a) =>
      `translateX(-50%) rotateY(${a}deg) translateZ(calc(clamp(130px, 15vw, 230px) * ${ringRadius}))`,
  );
  // Only the front arc (about five cards) is visible; the rest reveal as the ring turns.
  const opacity = useTransform(angle, heroArcOpacity);
  return (
    <motion.div
      style={{ transform, opacity, backfaceVisibility: "hidden" }}
      className="absolute left-0 top-0 flex h-[78%] w-[clamp(70px,8vw,122px)] flex-col items-center justify-center gap-2 rounded-xl border border-ink-foreground/25 bg-ink-foreground/10 p-3 shadow-2xl backdrop-blur-md"
    >
      <img
        src={card.logo}
        alt={card.name}
        loading="eager"
        className={`max-h-[52%] w-3/5 object-contain drop-shadow-lg ${["Apollo", "OpenAI"].includes(card.name) ? "brightness-0 invert" : ""}`}
      />
      <p className="hidden text-xs font-medium text-ink-foreground/85 sm:block">{card.name}</p>
    </motion.div>
  );
}
