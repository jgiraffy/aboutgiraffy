import iconCompleteness from "@/assets/icon-completeness.png";
import iconAccuracy from "@/assets/icon-accuracy.svg";
import iconFreshness from "@/assets/icon-freshness.svg";
import iconNeutrality from "@/assets/icon-neutrality.svg";

const DifferentiatorsSection = () => {
  const pillars = [
    {
      icon: iconCompleteness,
      title: "Completeness",
      description: "We aim to cover the full market, not just the household names.",
    },
    {
      icon: iconAccuracy,
      title: "Accuracy",
      description: "We structure data so you can compare \"apples to apples\" without the confusion.",
    },
    {
      icon: iconFreshness,
      title: "Freshness",
      description: "Our deals are updated daily, if it exists in the market, it's on Giraffy.",
    },
    {
      icon: iconNeutrality,
      title: "Neutrality",
      description: "We don't play favorites. We rank options based on relevance to you, not commissions to us.",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container max-w-5xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          What Makes Us Different
        </h2>
        <p className="text-muted-foreground mb-14 max-w-2xl">
          We operate by four simple promises to you:
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map(({ icon, title, description }) => (
            <div
              key={title}
              className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 flex items-center justify-center mx-auto mb-4">
                <img src={icon} alt={title} className="w-14 h-14 object-contain" />
              </div>
              <h3 className="font-bold text-foreground text-lg mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentiatorsSection;
