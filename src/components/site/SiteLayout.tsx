import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="pt-14 md:pt-16">{children}</main>
      <SiteFooter />
    </div>
  );
}