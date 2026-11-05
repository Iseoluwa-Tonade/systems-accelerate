import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";
import { Toaster } from "@/components/ui/sonner";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow text-muted-foreground">404</p>
        <h1 className="h-section mt-4 text-foreground">This page isn't part of the system.</h1>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex rounded-full bg-primary px-5 py-2.5 text-sm text-primary-foreground"
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl text-foreground">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong. Try again or head home.
        </p>
        <div className="mt-6 flex justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground"
          >
            Try again
          </button>
          <a
            href="/"
            className="rounded-full border border-input px-4 py-2 text-sm text-foreground"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "SuperTelque | Managed Sales & Business Operations" },
      {
        name: "description",
        content:
          "SuperTelque helps growing businesses manage sales, customer and back-office operations through people, automation and AI.",
      },
      { name: "author", content: "SuperTelque" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "SuperTelque | Managed Sales & Business Operations" },
      {
        property: "og:description",
        content:
          "We build, automate and manage the sales, customer and operational processes that keep growing businesses running.",
      },
      { property: "og:url", content: "https://supertelque.com" },
      { property: "og:image", content: "https://supertelque.com/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:locale", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://supertelque.com/og-image.png" },
      { name: "twitter:title", content: "SuperTelque | Revenue Systems Engineered for Scale" },
      {
        name: "twitter:description",
        content:
          "Fractional RevOps leadership, autonomous AI engineering, and B2B demand systems built for measurable commercial outcomes.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap",
      },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/supertelque-logo.png", type: "image/png" },
      { rel: "sitemap", href: "/sitemap.xml", type: "application/xml" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-T80QV3FXEC" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-T80QV3FXEC');`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `function initApollo(){var n=Math.random().toString(36).substring(7),o=document.createElement("script");o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,o.async=!0,o.defer=!0,o.onload=function(){window.trackingFunctions.onLoad({appId:"69c83565c43ef5001d514789"})},document.head.appendChild(o)}initApollo();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "SuperTelque",
              url: "https://supertelque.com",
              logo: "https://supertelque.com/supertelque-logo.png",
              description:
                "SuperTelque combines experienced people, structured processes, automation and AI to run the sales and operational workflows that help growing businesses move forward.",
              email: "support@supertelque.com",
              foundingLocation: { "@type": "Place", addressCountry: "US" },
              areaServed: [
                { "@type": "Country", name: "United States" },
                { "@type": "Country", name: "Canada" },
                { "@type": "Country", name: "United Kingdom" },
              ],
              serviceType: [
                "Managed Sales & Revenue Operations",
                "Managed Customer Operations",
                "Managed Business Operations",
                "CRM & Workflow Engineering",
              ],
              sameAs: ["https://www.linkedin.com/company/supertelque"],
            }),
          }}
        />
      </head>
      <body>
        {children}
        <Scripts />
        <script src="https://statci.claydr.com/init.v1.js?id=ckTGhsVTmX" defer />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ lerp: 0.09 });
    let id = 0;
    const raf = (t: number) => {
      lenis.raf(t);
      id = requestAnimationFrame(raf);
    };
    id = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(id);
      lenis.destroy();
    };
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
      <Toaster />
    </QueryClientProvider>
  );
}
