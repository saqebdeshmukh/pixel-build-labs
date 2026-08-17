import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { ProjectCard } from "@/components/site/ProjectCard";
import { CTA } from "@/components/site/CTA";
import { PROJECTS, COMPANY } from "@/data/site";

const title = `Work — ${COMPANY.name}`;
const description =
  "Selected software, AI and automation projects: document intelligence, AI agents, commerce platforms and business mobile applications.";

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/work" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/work" }],
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          label="Selected Work"
          title="Work that solves real problems."
          subtitle="Technology is only valuable when it creates measurable business impact. These are representative projects — case study content is editable placeholder text."
        />

        <section className="container-page py-16 md:py-24">
          <div className="grid gap-6 md:grid-cols-2">
            {PROJECTS.map((p, i) => (
              <Reveal key={p.slug} delay={i * 70}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16 text-center">
            <p className="text-muted-foreground">Have something similar in mind?</p>
            <CTA to="/contact" className="mt-5">
              Start a Conversation
            </CTA>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
