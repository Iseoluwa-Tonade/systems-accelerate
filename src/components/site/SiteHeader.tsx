import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/about", label: "About" },
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
      ? "bg-[#0B1120]/95 border-white/10 shadow-2xl"
      : scrolled
        ? "bg-[#0B1120]/75 border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.3)]"
        : "bg-[#0B1120]/40 border-white/5"
    : open
      ? "bg-background/95 border-border/80 shadow-2xl"
      : scrolled
        ? "bg-background/75 border-border/80 shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
        : "bg-background/40 border-border/40";

  return (
    <header
      className={`fixed left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl transition-[top,padding,background-color,border-color,transform,box-shadow] duration-300 ease-out border backdrop-blur-xl ${
        open
          ? "top-3 rounded-2xl p-5"
          : scrolled
            ? "top-3 rounded-full py-2 px-4 md:px-5 scale-[0.98]"
            : "top-5 rounded-full py-3.5 px-5 md:px-6"
      } ${headerBg}`}
    >
      <div className="flex h-11 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <img src="/supertelque-logo.png" alt="SuperTelque" className="h-7 w-7 rounded-md object-contain transition-transform duration-300 group-hover:scale-105" />
          <div className="flex items-baseline gap-1.5">
            <span className={`font-display text-[14.5px] font-semibold tracking-tight transition-colors group-hover:text-primary ${dark ? "text-white" : "text-foreground"}`}>
              SuperTelque
            </span>
            <span className={`text-[10px] font-mono uppercase tracking-[0.18em] ${dark ? "text-white/50" : "text-muted-foreground"}`}>/revops</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className={`px-3 py-1.5 rounded-full text-[13px] font-medium border border-transparent transition-all ${
                dark
                  ? "text-white/60 hover:text-white hover:bg-white/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
              }`}
              activeProps={{
                className: dark
                  ? "!text-white bg-white/15 !border-white/20 shadow-sm"
                  : "!text-foreground bg-foreground/10 !border-border/80 shadow-sm",
              }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center gap-2">
            <Link
              to="/book"
              className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[13px] font-medium active:scale-95 transition duration-200 ${
                dark
                  ? "bg-lime text-navy hover:opacity-85"
                  : "bg-foreground text-background hover:opacity-90"
              }`}
            >
              Book a session
              <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          <button
            className={`lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border transition-colors ${
              dark
                ? "border-white/20 bg-white/10 hover:bg-white/20 text-white"
                : "border-border bg-background/50 hover:bg-background/85"
            }`}
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
      </div>

      {open && (
        <div className={`lg:hidden mt-4 pt-4 border-t animate-in fade-in slide-in-from-top-2 duration-200 ${
          dark ? "border-white/10" : "border-border/60"
        }`}>
          <div className="flex flex-col gap-1">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className={`py-2.5 px-3 rounded-lg text-sm border border-transparent transition-colors ${
                  dark
                    ? "text-white/60 hover:text-white hover:bg-white/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                }`}
                activeProps={{
                  className: dark
                    ? "!text-white bg-white/15 !border-white/10"
                    : "!text-foreground bg-foreground/10 !border-border/50",
                }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/book"
              onClick={() => setOpen(false)}
              className={`mt-3 inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-medium active:scale-95 transition ${
                dark
                  ? "bg-lime text-navy hover:opacity-85"
                  : "bg-foreground text-background hover:opacity-90"
              }`}
            >
              Book a session
              <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}