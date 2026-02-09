import Navigation from "@/components/Navigation";
import { Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const mediaArticles = [
  {
    title: "Giraffy launches to bring full market transparency to household finance",
    source: "Example Publication",
    date: "2026",
    url: "#",
  },
  {
    title: "How Giraffy Radar is changing the way consumers compare financial products",
    source: "Example Publication",
    date: "2026",
    url: "#",
  },
  {
    title: "Giraffy expands into nine markets across the Middle East and Europe",
    source: "Example Publication",
    date: "2026",
    url: "#",
  },
];

const PrMedia = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="bg-primary py-16 lg:py-24">
        <div className="container max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            PR & Media
          </h1>
          <p className="text-primary-foreground/80 text-lg mb-8">
            Resources, brand assets, and the latest coverage
          </p>
          <a
            href="/giraffy-media-kit.zip"
            download
          >
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8 gap-2">
              <Download className="w-5 h-5" />
              Download Media & Logos
            </Button>
          </a>
        </div>
      </section>

      {/* Media Coverage */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-12">
            Media Coverage
          </h2>
          <div className="space-y-4">
            {mediaArticles.map((article, index) => (
              <a
                key={index}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-secondary rounded-lg p-6 hover:bg-secondary/80 transition-colors group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-2">
                      {article.source} · {article.date}
                    </p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-muted-foreground shrink-0 mt-1 group-hover:text-primary transition-colors" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 lg:py-32 bg-secondary">
        <div className="container max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Media Enquiries
          </h2>
          <p className="text-muted-foreground text-lg">
            For press enquiries, interviews, or additional assets, please contact{" "}
            <a href="mailto:press@giraffy.com" className="text-primary font-medium hover:underline">
              press@giraffy.com
            </a>
          </p>
        </div>
      </section>
    </main>
  );
};

export default PrMedia;
