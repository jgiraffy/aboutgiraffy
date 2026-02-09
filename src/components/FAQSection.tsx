import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs?: FAQItem[];
}

const defaultFAQs: FAQItem[] = [
  {
    question: "What's the difference between free and paid?",
    answer:
      "Giraffy's consumer platform is free to use. Giraffy for Business is a paid platform for companies that want access to market intelligence, customer insight, and visibility tools.",
  },
  {
    question: "Do you charge to list deals?",
    answer:
      "No. Giraffy lists 100% of live deals across all providers in every market we cover. Listings are never pay to play.",
  },
  {
    question: "How is Giraffy different from digital ad platforms?",
    answer:
      "Digital ad platforms drive traffic through impressions and clicks. Giraffy provides structured market data, competitive intelligence, and visibility at the point of decision, not just awareness.",
  },
  {
    question: "Can you integrate via API?",
    answer:
      "Yes. Giraffy offers API access for companies and partners who want to integrate market data, pricing intelligence, or comparison tools into their own systems.",
  },
];

const FAQSection = ({ faqs = defaultFAQs }: FAQSectionProps) => {
  return (
    <section className="py-20 lg:py-32 bg-secondary">
      <div className="container max-w-5xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16 items-start">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            FAQ's
          </h2>
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq, index) => (
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
