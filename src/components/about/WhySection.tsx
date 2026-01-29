import { Smartphone, CreditCard, ShieldCheck, Wallet } from "lucide-react";

const WhySection = () => {
  const categories = [
    { icon: Smartphone, label: "Mobile and internet plans" },
    { icon: CreditCard, label: "Bank accounts and credit cards" },
    { icon: Wallet, label: "Loans and insurance" },
    { icon: ShieldCheck, label: "Everyday financial products" },
  ];

  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
          Why Giraffy Exists
        </h2>
        
        <p className="text-xl text-muted-foreground mb-8">
          Household finance shouldn't be this hard to understand.
        </p>
        
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Across every country, people are asked to choose between dozens of options for things like:
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {categories.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3 text-foreground">
              <div className="w-10 h-10 rounded-full bg-accent/30 flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <span>{label}</span>
            </div>
          ))}
        </div>
        
        <div className="border-l-4 border-accent pl-6 py-2">
          <p className="text-muted-foreground leading-relaxed">
            Most comparison sites only show part of the market. As a result, people often overpay, apply for products they don't qualify for, or miss better options entirely.
          </p>
          <p className="mt-4 text-foreground font-medium">
            Giraffy exists to change that by bringing complete market visibility into one place.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
