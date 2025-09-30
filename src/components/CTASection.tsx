import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-energy opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Ready for the Future of <span className="gradient-value bg-clip-text text-transparent">Money</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            QI represents a fundamental shift in how we think about currency. Energy-backed, stable, and built for real-world use—this is money that makes sense.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="xl" className="group">
              Get Started with QI
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a href="https://docs.qu.ai/learn/tokenomics/qi-emissions" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                Read Full Documentation
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold gradient-energy bg-clip-text text-transparent mb-2">Energy</div>
              <p className="text-muted-foreground">Backed by physics</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-value bg-clip-text text-transparent mb-2">Stable</div>
              <p className="text-muted-foreground">Real value floor</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-energy bg-clip-text text-transparent mb-2">Scalable</div>
              <p className="text-muted-foreground">Demand-responsive</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
