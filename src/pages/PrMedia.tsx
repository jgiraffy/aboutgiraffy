import Navigation from "@/components/Navigation";
import { Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/i18n/LanguageContext";


const PrMedia = () => {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="bg-primary py-16 lg:py-24">
        <div className="container max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            {t.prMedia.hero.title}
          </h1>
          <p className="text-primary-foreground/80 text-lg mb-8">
            {t.prMedia.hero.subtitle}
          </p>
          <a href="https://drive.google.com/drive/u/2/folders/0AFnxi5Izh__4Uk9PVA" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8 gap-2">
              <Download className="w-5 h-5" />
              {t.prMedia.hero.download}
            </Button>
          </a>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-12">
            {t.prMedia.press.title}
          </h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {t.prMedia.press.releases.map((release, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-secondary rounded-lg border-none px-6"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:no-underline py-6">
                  <div>
                    {release.title}
                    <p className="text-muted-foreground text-sm font-normal mt-1">{release.date} · {release.location}</p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="space-y-4">
                    {release.content.split('\n\n').map((paragraph, pIndex) => (
                      <p key={pIndex} className={`text-muted-foreground leading-relaxed ${paragraph.startsWith('"') || paragraph.startsWith('\u201C') ? 'italic text-foreground/80' : ''}`}>
                        {paragraph}
                      </p>
                    ))}
                    {'link' in release && release.link && (
                      <a
                        href={release.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary font-medium hover:underline mt-2"
                      >
                        View the Giraffy Awards <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
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
            {t.prMedia.contact.title}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t.prMedia.contact.text}{" "}
            <a href="mailto:hello@giraffy.com" className="text-primary font-medium hover:underline">
              hello@giraffy.com
            </a>
          </p>
        </div>
      </section>
    </main>
  );
};

export default PrMedia;
