import Navigation from "@/components/Navigation";
import { Download } from "lucide-react";
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
          <a href="/giraffy-media-kit.zip" download>
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
            {t.prMedia.contact.title}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t.prMedia.contact.text}{" "}
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
