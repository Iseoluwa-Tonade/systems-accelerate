import { Cta } from "@/components/site/chrome";
import { Reveal } from "@/components/site/motion";
import { engagementModels } from "@/lib/content";

export function EngagementModels() {
  return (
    <section className="relative z-10 bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <p className="eyebrow section-kicker">How we deliver</p>
        <h2 className="h-section mt-5">Two ways to work with us.</h2>
        <p className="mt-5 text-muted-foreground">
          Choose the engagement model that fits where you are right now.
        </p>
        <div className="mt-12 grid gap-12 md:grid-cols-2">
          {engagementModels.map((model, i) => (
            <Reveal key={model.title}>
              <div className={`border-t-4 pt-7 ${i === 0 ? "border-green" : "border-blue"}`}>
                <p className="eyebrow text-muted-foreground">{model.title}</p>
                <h3 className="mt-4 text-2xl">{model.subtitle}</h3>
                <p className="mt-5 max-w-lg text-muted-foreground">{model.body}</p>
                <ul className="mt-6">
                  {model.includes.map((item) => (
                    <li key={item} className="border-t border-border py-3 text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
                <Cta to="/contact" tone={i === 0 ? "ghost" : "ink"} className="mt-7">
                  Discuss {model.title}
                </Cta>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
