import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { COMPANY } from "@/data/site";

const title = `Terms — ${COMPANY.name}`;
const description = `Terms of use for the ${COMPANY.name} website.`;

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/terms" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          label="Legal"
          title="Terms"
          subtitle="Placeholder document — replace with your reviewed terms before publishing."
        />
        <section className="container-page max-w-3xl space-y-8 py-16 text-muted-foreground md:py-24">
          <div>
            <h2 className="text-xl font-semibold text-foreground">Use of this website</h2>
            <p className="mt-3 leading-relaxed">
              [Placeholder] Describe acceptable use of the website and its content.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-foreground">Content</h2>
            <p className="mt-3 leading-relaxed">
              [Placeholder] Case studies shown on this site use placeholder content pending
              client approval.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-foreground">Contact</h2>
            <p className="mt-3 leading-relaxed">
              Questions can be sent to {COMPANY.email}.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
