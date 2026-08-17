import { createFileRoute } from "@tanstack/react-router";
import { Mail, Linkedin, Github } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { ContactForm } from "@/components/site/ContactForm";
import { COMPANY } from "@/data/site";

const title = `Contact — ${COMPANY.name}`;
const description =
  "Tell us what you're trying to build, automate or improve. We'll help you figure out the right way to approach it.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          label="Contact"
          title="Have a software problem worth solving?"
          subtitle="Tell us what you're trying to build, automate, or improve. We'll help you figure out the right way to approach it."
        />

        <section className="container-page py-16 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:gap-16">
            <Reveal>
              <ContactForm />
            </Reveal>

            <Reveal delay={80} className="space-y-6">
              <div className="surface-card p-6">
                <p className="label-mono">Direct</p>
                <ul className="mt-4 space-y-3 text-sm">
                  <li>
                    <a
                      href={`mailto:${COMPANY.email}`}
                      className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Mail className="h-4 w-4" aria-hidden="true" />
                      {COMPANY.email}
                    </a>
                  </li>
                  <li>
                    <a
                      href={COMPANY.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Linkedin className="h-4 w-4" aria-hidden="true" /> LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href={COMPANY.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Github className="h-4 w-4" aria-hidden="true" /> GitHub
                    </a>
                  </li>
                </ul>
              </div>

              <div className="surface-card p-6">
                <p className="label-mono">What happens next</p>
                <ol className="mt-4 space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="font-mono text-xs text-primary">01</span>
                    We read your inquiry and ask a few clarifying questions.
                  </li>
                  <li className="flex gap-3">
                    <span className="font-mono text-xs text-primary">02</span>
                    A short call to understand the problem and systems involved.
                  </li>
                  <li className="flex gap-3">
                    <span className="font-mono text-xs text-primary">03</span>
                    A proposed approach, scope and delivery plan.
                  </li>
                </ol>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
