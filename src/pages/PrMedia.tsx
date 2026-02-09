import Navigation from "@/components/Navigation";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const pressReleases = [
  {
    title: "Giraffy launches to bring full market transparency to household finance",
    date: "2026",
    content: "Placeholder press release content. Replace with your actual press release text.",
  },
  {
    title: "How Giraffy Radar is changing the way consumers compare financial products",
    date: "2026",
    content: "Placeholder press release content. Replace with your actual press release text.",
  },
  {
    title: "Giraffy expands into nine markets across the Middle East and Europe",
    date: "2026",
    content: "Placeholder press release content. Replace with your actual press release text.",
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

      {/* Press Releases */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-12">
            Press Releases
          </h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {pressReleases.map((release, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-secondary rounded-lg border-none px-6"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:no-underline py-6">
                  <div>
                    {release.title}
                    <p className="text-muted-foreground text-sm font-normal mt-1">{release.date}</p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {release.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
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
