import { Smartphone, CreditCard, ShieldCheck, Wallet, Check } from "lucide-react";

const HeroSection = () => {
  const categories = [
    { icon: Smartphone, label: "Mobile and internet plans" },
    { icon: CreditCard, label: "Bank accounts and credit cards" },
    { icon: Wallet, label: "Loans and insurance" },
    { icon: ShieldCheck, label: "Everyday financial products" },
  ];

  const benefits = [
    "See what actually exists",
    "Compare options fairly",
    "Understand what matters before you apply or switch",
    "Feel in control of your money",
  ];

  return (
    <section className="bg-primary text-primary-foreground py-20 lg:py-28">
      <div className="container max-w-4xl mx-auto px-6">
        {/* Hero Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            About Giraffy
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto leading-relaxed">
            See the Full Market. Make Better Financial Decisions.
          </p>
        </div>

        {/* Introduction */}
        <div className="mb-16">
          <p className="text-lg md:text-xl opacity-90 leading-relaxed mb-6">
            Giraffy helps people understand household finance clearly — by showing 100% of the market in one place.
          </p>
          <p className="opacity-80 leading-relaxed">
            Every day, people make important decisions about bills, banking, insurance, and everyday financial products. Yet most people do so without seeing the full picture. Prices are confusing. Rules are hidden. Important differences are buried in small print.
          </p>
          <p className="mt-4 font-medium opacity-95">
            We believe people deserve clearer information — before they choose.
          </p>
        </div>

        {/* The Problem */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Household finance shouldn't be this hard to understand.
          </h2>
          <p className="opacity-80 mb-8 leading-relaxed">
            Across every country, people are asked to choose between dozens of options for things like:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {categories.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3 opacity-90">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <span>{label}</span>
              </div>
            ))}
          </div>
          
          <p className="opacity-80 leading-relaxed">
            Most comparison sites only show part of the market. As a result, people often overpay, apply for products they don't qualify for, or miss better options entirely.
          </p>
        </div>

        {/* The Solution */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            What Giraffy Does
          </h2>
          <p className="opacity-90 mb-8 leading-relaxed">
            Giraffy brings the entire market together, aiming to show <span className="font-semibold text-accent">100% of live deals</span> available today. We help people:
          </p>
          
          <ul className="space-y-4 mb-10">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-accent-foreground" />
                </div>
                <span className="opacity-95">{benefit}</span>
              </li>
            ))}
          </ul>
          
          <div className="bg-white/10 rounded-xl p-6 md:p-8 text-center">
            <p className="opacity-90">
              <span className="block font-semibold mb-2">Our role is simple:</span>
              help you understand the market before you make a decision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
