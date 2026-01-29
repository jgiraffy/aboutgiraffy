import { Check } from "lucide-react";

const WhatSection = () => {
  const benefits = [
    "See what actually exists",
    "Compare options fairly",
    "Understand what matters before they apply or switch",
    "Feel in control of their money",
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
          What Giraffy Does
        </h2>
        
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          Giraffy brings the entire market together, aiming to show <span className="text-foreground font-semibold">100% of live deals</span> available today.
        </p>
        
        <p className="text-muted-foreground mb-6">We help people:</p>
        
        <ul className="space-y-4 mb-10">
          {benefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-4 h-4 text-accent-foreground" />
              </div>
              <span className="text-foreground">{benefit}</span>
            </li>
          ))}
        </ul>
        
        <div className="bg-secondary rounded-xl p-6 md:p-8">
          <p className="text-muted-foreground text-center">
            <span className="block text-foreground font-semibold mb-2">Our role is simple:</span>
            help you understand the market before you make a decision.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatSection;
