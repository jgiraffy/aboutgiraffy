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
    question: "How is Giraffy different from other comparison sites?",
    answer:
      "Most comparison sites only show providers they have a commercial deal with in a \"pay to play\" model. Giraffy is built differently. We use our own Giraffy Radar technology to scan and show the entire market regardless of whether a provider pays us. Our goal is completeness over commission.",
  },
  {
    question: "Is Giraffy free to use?",
    answer:
      "Yes. Giraffy is 100% free for consumers to browse, compare, and learn about the market. There are no hidden fees or subscriptions for individuals.",
  },
  {
    question: "How do you make money if you show every deal?",
    answer:
      "Transparency is our priority. Unlike other platforms, we do not receive referral fees or commissions when you switch providers. We primarily make money by selling our market intelligence software, Giraffy for Business, to telecoms, banks and insurers. We also occasionally feature sponsored ads at the top of the page. Crucially, these ads never change how we rank the rest of the market. We show you the best options based on data, even if that choice doesn't make us a penny.",
  },
  {
    question: "How often is the information updated?",
    answer:
      "Our information is updated daily. Financial markets move fast, so we built Giraffy Radar to monitor providers 24/7. While other sites might show outdated snapshots, we reflect the most current pricing, terms, and availability as they happen.",
  },
  {
    question: "Do you show deals from every bank and provider?",
    answer:
      "We aim for 100% market coverage. This includes major high street banks and telecom giants along with smaller, specialised providers that other sites often overlook. If a legitimate deal exists in the market, our goal is to have it on Giraffy.",
  },
  {
    question: "In which countries is Giraffy available?",
    answer:
      "We are currently live in Saudi Arabia, the UAE, Kuwait, Bahrain, Qatar, Oman, the United Kingdom, Italy, and the Netherlands. We are constantly expanding into new regions to bring financial clarity to more people.",
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
