import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/motion";
import { photos } from "@/lib/photography";
import { ChevronDown } from "lucide-react";

const logo = "/supertelque-logo.png";

const explore = [
  { to: "/services", label: "Services" },
  { to: "/case-studies", label: "Case studies" },
  { to: "/blog", label: "Blog" },
] as const;
const nav = [
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Cta({
  to,
  children,
  tone = "gold",
  className,
  onClick,
}: {
  to: "/book" | "/services" | "/contact" | "/case-studies" | "/about";
  children: ReactNode;
  tone?: "gold" | "ink" | "ghost" | "ghost-light";
  className?: string;
  onClick?: () => void;
}) {
  const tones = {
    gold: "bg-gold text-ink hover:bg-ink-foreground",
    ink: "bg-ink text-ink-foreground hover:bg-ink-soft",
    ghost: "border border-ink/25 text-ink hover:border-ink",
    "ghost-light":
      "border border-ink-foreground/30 text-ink-foreground hover:border-ink-foreground",
  };
  return (
    <Button
      variant="ghost"
      asChild
      className={cn("h-auto rounded-full px-6 py-3 text-sm font-medium", tones[tone], className)}
    >
      <Link
        to={to}
        onClick={onClick}
        className={cn(
          "group inline-flex items-center gap-3 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-300",
          tones[tone],
          className,
        )}
      >
        {children}
        <span
          aria-hidden
          className="inline-block transition-transform duration-300 group-hover:translate-x-1"
        >
          <ArrowRight strokeWidth={3} className="inline size-[1em] align-[-0.125em]" />
        </span>
      </Link>
    </Button>
  );
}

/** Gap around the home hero card; the header sits inside it until the card expands. */
export const HERO_INSET = 16;

export function SiteHeader({
  dark = false,
  heroInset = false,
}: {
  dark?: boolean;
  heroInset?: boolean;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const [extra, setExtra] = useState(heroInset ? HERO_INSET : 0);
  useEffect(() => {
    const on = () => {
      setScrolled(window.scrollY > (heroInset ? window.innerHeight * 0.5 : 40));
      // Hero expands over the first 0.5 viewport heights of scroll.
      if (heroInset)
        setExtra(HERO_INSET * Math.max(0, 1 - window.scrollY / (window.innerHeight * 0.5)));
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, [heroInset]);
  const light = dark && !scrolled;
  return (
    <header
      className="fixed inset-x-0 top-0 z-50"
      style={{ padding: `${16 + extra}px ${16 + extra}px 0` }}
    >
      <div
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-3 transition-all duration-500",
          scrolled ? "bg-paper/95 header-shadow backdrop-blur-md" : "bg-transparent",
          light ? "text-ink-foreground" : "text-ink",
        )}
      >
        <Link to="/" aria-label="SuperTelque — home" className="flex items-center">
          <img
            src={logo}
            alt="SuperTelque"
            width={528}
            height={438}
            className="h-10 w-auto object-contain"
          />
        </Link>
        <nav className="hidden items-center gap-8 text-sm md:flex">
          <div
            className="relative"
            onMouseEnter={() => setExploreOpen(true)}
            onMouseLeave={() => setExploreOpen(false)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) setExploreOpen(false);
            }}
            onKeyDown={(event) => {
              if (event.key === "Escape") {
                setExploreOpen(false);
                event.currentTarget.querySelector("button")?.focus();
              }
            }}
          >
            <Button
              variant="ghost"
              aria-expanded={exploreOpen}
              aria-controls="explore-links"
              onClick={() => setExploreOpen((value) => !value)}
              onFocus={() => setExploreOpen(true)}
              className="h-auto gap-2 p-0 font-normal hover:bg-transparent hover:text-current"
            >
              Explore
              <ChevronDown
                className={cn("size-3.5 transition-transform", exploreOpen && "rotate-180")}
              />
            </Button>
            {exploreOpen && (
              <div className="absolute left-0 top-full w-56 pt-5">
                <div
                  id="explore-links"
                  className="rounded-md border border-border bg-paper p-2 text-ink header-shadow"
                >
                  {explore.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setExploreOpen(false)}
                      className="flex items-center justify-between rounded-sm px-4 py-3 hover:bg-stone"
                      activeProps={{ className: "bg-stone" }}
                    >
                      {item.label}
                      <span aria-hidden>
                        <ArrowUpRight
                          strokeWidth={3}
                          className="inline size-[1em] align-[-0.125em]"
                        />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="link-underline opacity-80 hover:opacity-100"
              activeProps={{ className: "opacity-100" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <Button variant="ghost" asChild className="h-auto p-0">
              <Link
                to="/book"
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  light
                    ? "bg-gold text-ink hover:bg-ink-foreground"
                    : "bg-ink text-ink-foreground hover:bg-ink-soft",
                )}
              >
                Book a review
              </Link>
            </Button>
          </div>
          <Button
            variant="ghost"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span
              className={cn(
                "h-px w-5 bg-current transition",
                open && "translate-y-[3.5px] rotate-45",
              )}
            />
            <span
              className={cn(
                "h-px w-5 bg-current transition",
                open && "-translate-y-[3.5px] -rotate-45",
              )}
            />
          </Button>
        </div>
      </div>
      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-3xl bg-ink p-6 text-ink-foreground md:hidden">
          <Button
            variant="ghost"
            onClick={() => setExploreOpen((value) => !value)}
            aria-expanded={exploreOpen}
            aria-controls="mobile-explore"
            className="h-auto w-full justify-between border-b border-ink-line px-0 py-3 font-serif text-xl hover:bg-transparent hover:text-lime"
          >
            Explore
            <ChevronDown className={cn("transition-transform", exploreOpen && "rotate-180")} />
          </Button>
          {exploreOpen && (
            <div id="mobile-explore" className="border-b border-ink-line pl-4">
              {explore.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => {
                    setOpen(false);
                    setExploreOpen(false);
                  }}
                  className="block py-3 text-base text-ink-foreground/80"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
          {[{ to: "/", label: "Home" }, ...nav].map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className="block border-b border-ink-line py-3 font-serif text-xl"
            >
              {n.label}
            </Link>
          ))}
          <div className="pt-5">
            <Cta to="/book" className="w-full justify-center" onClick={() => setOpen(false)}>
              Book an Operations Review
            </Cta>
          </div>
        </div>
      )}
    </header>
  );
}

/** Footer sits behind the page and is uncovered as the last section scrolls away. */
export function SiteFooter() {
  return (
    <footer className="sticky bottom-0 z-0 bg-green text-ink-foreground graphic-lines">
      <div className="mx-auto max-w-6xl px-6 pb-10 pt-24">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <p className="font-serif text-2xl font-light leading-snug">
              We build, automate and manage the sales, customer and operational processes that keep
              growing businesses running.
            </p>
            <Cta to="/book" className="mt-8">
              Book an Operations Review
            </Cta>
          </div>
          <FooterCol
            title="Explore"
            links={[
              ["/services", "Services"],
              ["/case-studies", "Case studies"],
              ["/blog", "Blog"],
              ["/about", "About"],
              ["/contact", "Contact"],
            ]}
          />
          <FooterCol
            title="Services"
            links={[
              ["/services", "Sales & revenue operations"],
              ["/services", "Customer operations"],
              ["/services", "Business operations"],
              ["/services", "CRM, AI & workflows"],
            ]}
          />
          <div>
            <p className="eyebrow text-ink-muted">Regions</p>
            <p className="mt-4 text-sm leading-7 text-ink-foreground/80">
              United States
              <br />
              Lagos, Nigeria
              <br />
              Remote-first, global delivery
            </p>
          </div>
        </div>
        <div className="mt-24 flex flex-col justify-between gap-4 border-t border-ink-line pt-6 text-xs text-ink-muted md:flex-row">
          <p>© {new Date().getFullYear()} SuperTelque. Revenue · Customers · Operations · AI.</p>
          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="link-underline"
            >
              LinkedIn
            </a>
            <a href="https://x.com" target="_blank" rel="noreferrer" className="link-underline">
              X
            </a>
          </div>
        </div>
        <p
          aria-hidden
          className="mt-10 select-none font-serif text-5xl font-semibold leading-none text-ink-foreground/15 md:text-8xl"
        >
          SuperTelque
        </p>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <p className="eyebrow text-ink-muted">{title}</p>
      <ul className="mt-4 space-y-2 text-sm">
        {links.map(([to, l]) => (
          <li key={l}>
            <Link
              to={to as "/about"}
              className="link-underline text-ink-foreground/80 hover:text-ink-foreground"
            >
              {l}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Page wrapper: content above, footer revealed underneath. */
export function Page({
  children,
  darkHeader = false,
  heroInset = false,
}: {
  children: ReactNode;
  darkHeader?: boolean;
  heroInset?: boolean;
}) {
  return (
    <>
      <SiteHeader dark={darkHeader} heroInset={heroInset} />
      <main className="relative z-10 bg-paper page-shadow">{children}</main>
      <SiteFooter />
    </>
  );
}

export function PageIntro({
  eyebrow,
  title,
  lede,
  image = photos.workplace,
  compact = false,
  children,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  image?: string;
  compact?: boolean;
  children?: ReactNode;
}) {
  return (
    <section className={cn("site-hero", compact && "hero-compact")}>
      <img
        src={image}
        alt="Business teams, workplaces and the systems behind growth"
        fetchPriority="high"
      />
      <div className="hero-content">
        <Reveal>
          <div className="hero-accent" />
          <p className="eyebrow text-ink-foreground/80">{eyebrow}</p>
        </Reveal>
        <Reveal delay={0.12}>
          <h1 className="display mt-5">{title}</h1>
        </Reveal>
        <Reveal delay={0.22}>
          <p className="hero-lede">{lede}</p>
          {children}
        </Reveal>
      </div>
      <span className="hero-caption">SuperTelque / People · Process · Automation</span>
    </section>
  );
}
