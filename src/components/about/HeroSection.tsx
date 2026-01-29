import { Globe, TrendingUp, Eye } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-primary text-primary-foreground py-20 lg:py-28">
      <div className="container max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          About Giraffy
        </h1>
        <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
          See the Full Market. Make Better Financial Decisions.
        </p>
        
        {/* Subtle decorative icons */}
        <div className="flex justify-center gap-8 mt-12 opacity-60">
          <Globe className="w-8 h-8" strokeWidth={1.5} />
          <TrendingUp className="w-8 h-8" strokeWidth={1.5} />
          <Eye className="w-8 h-8" strokeWidth={1.5} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
