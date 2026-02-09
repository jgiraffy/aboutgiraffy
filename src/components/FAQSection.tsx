import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/i18n/LanguageContext";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs?: FAQItem[];
}

const FAQSection = ({ faqs }: FAQSectionProps) => {
  const { t } = useLanguage();
  const items = faqs || t.about.defaultFaqs;

  return (
    <section className="py-20 lg:py-32 bg-secondary">
      <div className="container max-w-5xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16 items-start">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            {t.faq.title}
          </h2>
          <Accordion type="single" collapsible className="w-full space-y-3">
            {items.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background rounded-lg border-none px-6"
              >
                <AccordionTrigger className="text-left text-base font-medium text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
