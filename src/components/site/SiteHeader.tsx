import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

const NAV = [
  { to: "/services", label: "Services" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/about", label: "About" },
  { to: "/blog/", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader({ theme = "light" }: { theme?: "light" | "dark" }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const dark = theme === "dark";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerBg = dark
    ? open
      ? "bg-white border-black/10 shadow-[0_16px_42px_rgba(8,13,28,0.18)]"
      : scrolled
        ? "bg-white/92 border-black/08 shadow-[0_14px_38px_rgba(8,13,28,0.16)] backdrop-blur-xl"
        : "bg-white border-black/08 shadow-[0_12px_34px_rgba(8,13,28,0.14)]"
    : open
      ? "bg-white/98 border-black/10 shadow-[0_16px_42px_rgba(8,13,28,0.18)]"
      : scrolled
        ? "bg-white/85 border-black/08 shadow-[0_14px_38px_rgba(8,13,28,0.16)]"
        : "bg-white/40 border-black/06 shadow-[0_12px_34px_rgba(8,13,28,0.12)]";

  return (
    <header
      className={`fixed left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-[1440px] transition-[top,padding,background-color,border-color,transform,box-shadow] duration-300 ease-out border ${
        open
          ? "top-3 rounded-2xl bg-white p-5 shadow-2xl"
          : scrolled
            ? "top-3 rounded-full py-1.5 px-3 md:px-4 scale-[0.98]"
            : "top-5 rounded-full py-2.5 px-4 md:px-5"
      } ${headerBg}`}
    >
      <div className="flex h-11 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <img
            src="/supertelque-logo.png"
            alt="SuperTelque"
            className={`h-8 w-8 object-contain transition-all duration-300 group-hover:scale-105 ${dark ? "drop-shadow-[0_0_8px_rgba(255,184,0,0.45)]" : ""}`}
          />
          <div className="flex flex-col">
            <div className="flex items-baseline gap-1">
              <span className="font-display text-[20px] font-bold tracking-tight text-[#080D1C] transition-colors group-hover:text-primary">
                SuperTelque
              </span>
              <span className="text-[16px] font-bold tracking-tight text-[#080D1C]/60"> LLC</span>
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
                className={`px-3 py-1.5 rounded-full text-[15px] font-medium border border-transparent transition-all ${
                "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
              }`}
              activeProps={{
                className: "!text-foreground bg-foreground/10 !border-border/80 shadow-sm",
              }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center gap-2">
            <a
              href="https://crm.supertelque.com"
              target="_blank"
              rel="noopener noreferrer"
              className="header-action header-action-portal"
            >
              Client portal
              <span className="header-action-arrow" aria-hidden="true">
                <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
              </span>
            </a>
            <Link
              to="/book"
              className="header-action"
            >
              Book a session
              <span className="header-action-arrow" aria-hidden="true">
                <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
              </span>
            </Link>
          </div>

          <button
            className="lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/50 text-foreground transition-colors hover:bg-background/85"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            aria-expanded={open}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className={`lg:hidden mt-4 pt-4 border-t animate-in fade-in slide-in-from-top-2 duration-200 ${
          "border-border/60"
        }`}>
          <div className="flex flex-col gap-1">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className={`py-2.5 px-3 rounded-lg text-[15px] border border-transparent transition-colors ${
                  "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                }`}
                activeProps={{
                    className: "!text-foreground bg-foreground/10 !border-border/50",
                }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2">
              <Link
                to="/book"
                onClick={() => setOpen(false)}
                className="header-action justify-center"
              >
                Book a session
                <span className="header-action-arrow" aria-hidden="true">
                  <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
                </span>
              </Link>
              <a
                href="https://crm.supertelque.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="header-action header-action-portal justify-center"
              >
                Client portal
                <span className="header-action-arrow" aria-hidden="true">
                  <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
                </span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}