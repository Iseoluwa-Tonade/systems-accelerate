import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl bg-background/70 border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="relative flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-accent-blue to-accent-indigo">
            <span className="absolute inset-0 rounded-md ring-1 ring-inset ring-white/20" />
            <svg viewBox="0 0 24 24" className="h-4 w-4 text-background" fill="none" stroke="currentColor" strokeWidth="2.4">
              <path d="M5 19L12 5l7 14M9 14h6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <div className="flex items-baseline gap-1.5">
            <span className="font-display text-[15px] font-semibold tracking-tight">Northbound</span>
            <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground">/revops</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="px-3 py-2 text-[13.5px] text-muted-foreground hover:text-foreground transition-colors"
              activeProps={{ className: "px-3 py-2 text-[13.5px] text-foreground" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <Link to="/book" className="text-[13.5px] text-muted-foreground hover:text-foreground px-3 py-2">
            Sign in
          </Link>
          <Link
            to="/book"
            className="inline-flex items-center gap-1.5 rounded-full bg-foreground text-background px-4 py-2 text-[13px] font-medium hover:opacity-90 transition"
          >
            Book a session
            <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        <button
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-border"
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
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

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="flex flex-col gap-1 px-6 py-4">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-2 text-sm text-muted-foreground hover:text-foreground"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/book"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-foreground text-background px-4 py-2.5 text-sm font-medium"
            >
              Book a session
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}