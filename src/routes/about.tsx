import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CTA } from "@/components/site/CTA";
import { PROCESS, METRICS, WHY_US, COMPANY } from "@/data/site";

const title = `About — ${COMPANY.name}`;
const description =
  "An engineering studio building custom software, AI agents and automation. Our process: understand, architect, build, launch, evolve.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          label="About"
          title="Built by engineers who understand business problems."
          subtitle="We believe great software isn't about using the most technologies. It's about understanding the problem deeply and building the simplest reliable solution that creates real value."
        />

        {/* Founder */}
        <section className="container-page py-16 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[380px_1fr] lg:gap-16">
            <Reveal>
              <div className="surface-card overflow-hidden p-0">
                <div
                  className="grid aspect-4/5 place-items-center bg-surface"
                  role="img"
                  aria-label="Placeholder for founder photo"
                >
                  <span className="label-mono">Founder photo — placeholder</span>
                </div>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <p className="label-mono">Founder</p>
              <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">
                [Founder Name] — replace
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                [Role, e.g. Founder & Principal Engineer] — replace
              </p>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                [Short biography placeholder. Describe engineering background, the kinds of
                systems built, and the perspective brought to client work. Replace this text
                with real information — do not leave placeholder copy in production.]
              </p>
              <div className="mt-8">
                <CTA to="/contact">Start a Conversation</CTA>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Metrics */}
        <section className="border-y border-border bg-surface/40 py-14">
          <div className="container-page grid grid-cols-2 gap-8 lg:grid-cols-4">
            {METRICS.map((m, i) => (
              <Reveal key={m.label} delay={i * 60}>
                <p className="text-3xl font-semibold tracking-tight sm:text-4xl">{m.value}</p>
                <p className="mt-2 text-sm text-muted-foreground">{m.label}</p>
              </Reveal>
            ))}
          </div>
          <p className="container-page mt-8 font-mono text-[10px] text-muted-foreground/70">
            Editable content — update these values before publishing.
          </p>
        </section>

        {/* Why us */}
        <section className="container-page py-16 md:py-24">
          <SectionHeading
            label="Why work with us"
            title="Engineering, not just consulting."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {WHY_US.map((w, i) => (
              <Reveal key={w.title} delay={i * 60}>
                <div className="surface-card hover-lift h-full p-6">
                  <h3 className="text-lg font-semibold">{w.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {w.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Process */}
        <section id="process" className="border-t border-border py-16 md:py-24">
          <div className="container-page">
            <SectionHeading
              label="Process"
              title="A simple process. Serious engineering."
              subtitle="Five steps, from first conversation to a system that keeps improving."
            />
            <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
              {PROCESS.map((p, i) => (
                <Reveal key={p.n} as="li" delay={i * 60}>
                  <div className="surface-card hover-lift h-full p-6">
                    <span className="font-mono text-xs text-primary">{p.n}</span>
                    <h3 className="mt-4 text-base font-semibold">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {p.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
