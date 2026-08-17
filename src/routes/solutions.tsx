import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Icon } from "@/components/site/Icon";
import { CTA } from "@/components/site/CTA";
import { SOLUTIONS, COMPANY } from "@/data/site";

const title = `Solutions — ${COMPANY.name}`;
const description =
  "Solutions organised around business problems: automate manual operations, build digital products, add AI, connect systems, modernize legacy software and build internal tools.";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/solutions" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/solutions" }],
  }),
  component: SolutionsPage,
});

function SolutionsPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          label="Solutions"
          title="Start with the problem, not the technology."
          subtitle="Most businesses don't need a technology — they need an outcome. These are the problems we're most often asked to solve."
        />

        <section className="container-page py-16 md:py-24">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SOLUTIONS.map((s, i) => (
              <Reveal key={s.title} delay={i * 60}>
                <article className="surface-card hover-lift h-full p-6">
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-surface">
                    <Icon name={s.icon} className="h-4.5 w-4.5 text-primary" />
                  </span>
                  <h2 className="mt-5 text-lg font-semibold">{s.title}</h2>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {s.body}
                  </p>
                  <ul className="mt-5 space-y-2.5 border-t border-border pt-5">
                    {s.points.map((p) => (
                      <li key={p} className="flex gap-2.5 text-sm text-muted-foreground">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16 text-center">
            <h2 className="text-2xl font-semibold">Not sure which one fits?</h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
              Describe the problem in plain language. We'll tell you the simplest way to solve
              it.
            </p>
            <CTA to="/contact" className="mt-6">
              Start a Conversation
            </CTA>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
