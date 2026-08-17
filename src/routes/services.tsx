import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CTA } from "@/components/site/CTA";
import { SERVICE_DETAILS, COMPANY } from "@/data/site";


const title = `Services — ${COMPANY.name}`;
const description =
  "Software consulting, product development, web and mobile engineering, AI agents, workflow automation, APIs, cloud, integrations and legacy modernization.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          label="Services"
          title="One partner for the technology behind your next product."
          subtitle="Strategy, architecture, engineering, integration, automation and delivery — handled by the same team."
        />

        <section className="container-page py-16 md:py-24">
          <div className="grid gap-6 md:grid-cols-2">
            {SERVICE_DETAILS.map((s, i) => (
              <Reveal key={s.title} delay={(i % 2) * 60}>
                <article className="surface-card hover-lift flex h-full flex-col p-6 sm:p-7">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="text-lg font-semibold">{s.title}</h2>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>

                  <div className="mt-6 space-y-4 border-t border-border pt-5">
                    <div>
                      <p className="label-mono mb-2">Typical use cases</p>
                      <p className="text-sm text-muted-foreground">
                        {s.useCases.join(" · ")}
                      </p>
                    </div>
                    <div>
                      <p className="label-mono mb-2">Technology</p>
                      <ul className="flex flex-wrap gap-2">
                        {s.tech.map((t) => (
                          <li
                            key={t}
                            className="rounded-md border border-border bg-surface px-2.5 py-1 font-mono text-[10px] text-muted-foreground"
                          >
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 pt-1">
                    <CTA to="/contact" variant="ghost" className="w-full sm:w-auto">
                      Discuss this service
                    </CTA>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
