import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { COMPANY } from "@/data/site";

const title = `Privacy Policy — ${COMPANY.name}`;
const description = `How ${COMPANY.name} handles information submitted through this website.`;

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/privacy" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          label="Legal"
          title="Privacy Policy"
          subtitle="Placeholder document — replace with your reviewed privacy policy before publishing."
        />
        <section className="container-page max-w-3xl space-y-8 py-16 text-muted-foreground md:py-24">
          <div>
            <h2 className="text-xl font-semibold text-foreground">Information we collect</h2>
            <p className="mt-3 leading-relaxed">
              [Placeholder] Describe what information visitors submit through the contact form
              and how it is stored.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-foreground">How we use information</h2>
            <p className="mt-3 leading-relaxed">
              [Placeholder] Describe how inquiries are used and who has access to them.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-foreground">Contact</h2>
            <p className="mt-3 leading-relaxed">
              Questions about this policy can be sent to {COMPANY.email}.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
